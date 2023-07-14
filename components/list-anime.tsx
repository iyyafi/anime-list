'use client'

import { Box, Flex, IconButton, StackDivider, VStack } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { useRouter, useSearchParams } from 'next/navigation'
import useSWR from 'swr'
import AnimeCard, { AnimeCardSkeleton } from './anime-card'
import { AnimeList, DataEntity } from '@/types/anime-response'
import { LIST_PAGE } from '@/constants/list-page'

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function ListAnime() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const search = searchParams.get('q') || ''
    const page = Number(searchParams.get('page') || 1)

    const {
        data: animeList,
        isLoading,
    }: { data: AnimeList; isLoading: boolean } = useSWR(
        `https://api.jikan.moe/v4/anime?q=${search}&page=${page}&limit=${LIST_PAGE.perPage}`,
        fetcher
    )

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
                <VStack
                    w={'100%'}
                    divider={<StackDivider borderColor="gray.200" />}
                >
                    {animeList && animeList.data
                        ? animeList.data.map((anime: DataEntity) => {
                              return (
                                  <AnimeCard
                                      key={anime.mal_id}
                                      anime={anime}
                                      search={search}
                                  />
                              )
                          })
                        : null}
                </VStack>
            )}
            <Flex
                justify={'space-between'}
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
                    {animeList?.pagination?.has_next_page ? (
                        <IconButton
                            disabled={isLoading}
                            aria-label="Next Data"
                            icon={<ArrowForwardIcon />}
                            onClick={handleNextPage}
                        />
                    ) : null}
                </Box>
            </Flex>
        </VStack>
    )
}
