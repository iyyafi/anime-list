'use client'

import {
    Box,
    Flex,
    IconButton,
    StackDivider,
    VStack,
    Text,
} from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { useRouter, useSearchParams } from 'next/navigation'
import useSWR from 'swr'
import AnimeCard, { AnimeCardSkeleton } from './anime-card'
import { LIST_PAGE } from '@/constants/list-page'
import {
    AnimeListSchemaType,
    DataEntityShemaType,
    animeListSchema,
} from '@/types/anime-list-schema'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function ListAnime() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const search = searchParams.get('q') || ''
    const page = Number(searchParams.get('page') || 1)

    const {
        data: animeList,
        isLoading,
    }: { data: AnimeListSchemaType; isLoading: boolean } = useSWR(
        `https://api.jikan.moe/v4/anime?q=${search}&page=${page}&limit=${LIST_PAGE.perPage}`,
        fetcher
    )

    const validateAnimeList = animeListSchema.safeParse(animeList)
    if (!isLoading && !validateAnimeList.success) {
        console.error(validateAnimeList.error)
        return
    }

    function handleNextPage() {
        router.push(`/?q=${search}&page=${page + 1}`)
    }
    function handlePrevPage() {
        router.push(`/?q=${search}&page=${page - 1}`)
    }

    return (
        <VStack w={'100%'}>
            {isLoading ? (
                <VStack
                    w={'100%'}
                    divider={<StackDivider borderColor="gray.200" />}
                >
                    {Array.from(Array(LIST_PAGE.perPage).keys()).map(
                        (index) => {
                            return <AnimeCardSkeleton key={index} />
                        }
                    )}
                </VStack>
            ) : (
                <>
                    <VStack
                        w={'100%'}
                        divider={<StackDivider borderColor="gray.200" />}
                    >
                        {animeList.data.map((anime: DataEntityShemaType) => {
                            return (
                                <AnimeCard
                                    key={anime.mal_id}
                                    anime={anime}
                                    search={search}
                                />
                            )
                        })}
                    </VStack>
                    <Flex
                        justify={'space-between'}
                        align={'center'}
                        w={'100%'}
                        bg={'white'}
                        position={'sticky'}
                        bottom={0}
                        py={2}
                    >
                        <Box>
                            {page > 1 ? (
                                <IconButton
                                    disabled={isLoading}
                                    aria-label="Prev Data"
                                    icon={<ArrowBackIcon />}
                                    onClick={handlePrevPage}
                                />
                            ) : null}
                        </Box>
                        <Box>
                            <Text textAlign={'right'} fontSize={'xs'}>
                                Got Result:{' '}
                                {animeList?.pagination?.items?.total}
                            </Text>
                        </Box>
                        <Box>
                            <IconButton
                                disabled={isLoading}
                                aria-label="Next Data"
                                icon={<ArrowForwardIcon />}
                                onClick={handleNextPage}
                            />
                        </Box>
                    </Flex>
                </>
            )}
        </VStack>
    )
}
