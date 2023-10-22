'use client'

import NextLink from 'next/link'
import {
    Box,
    HStack,
    Image,
    LinkBox,
    LinkOverlay,
    Skeleton,
    Text,
    VStack,
} from '@chakra-ui/react'
import { DataEntityShemaType } from '@/types/anime-list-schema'

export default function AnimeCard({
    anime,
    search,
}: {
    anime: DataEntityShemaType
    search: string
}) {
    return (
        <>
            <LinkBox w={'100%'} py={2}>
                <LinkOverlay
                    as={NextLink}
                    href={`/${anime.mal_id}?q=${search}`}
                    noOfLines={1}
                    fontWeight={'bold'}
                    fontSize={'lg'}
                    mb={2}
                >
                    {anime.title}
                </LinkOverlay>
                <HStack align={'flex-start'}>
                    <Image
                        src={anime.images.webp.image_url}
                        alt={anime.title}
                        boxSize="100px"
                        objectFit="cover"
                        fallbackSrc="https://via.placeholder.com/100"
                        flexShrink={0}
                    />
                    <VStack spacing={0.5} align={'flex-start'}>
                        <Text fontSize={'sm'}>Source: {anime.source}</Text>
                        <Text fontSize={'sm'}>Duration: {anime.duration}</Text>
                        <Text fontSize={'sm'}>
                            Genre:{' '}
                            {anime.genres
                                ?.map((genre) => genre.name)
                                .join(', ')}
                        </Text>
                    </VStack>
                </HStack>
            </LinkBox>
        </>
    )
}

export function AnimeCardSkeleton() {
    return (
        <Box w={'100%'} pt={3} pb={2}>
            <Skeleton height={'18px'} width={'100%'} maxW={'400px'} mb={3} />
            <HStack align={'flex-start'} w={'100%'}>
                <Skeleton height={'100px'} width={'100px'} flexShrink={0} />
                <VStack spacing={2} align={'flex-start'} flexGrow={1} pt={2}>
                    <Skeleton height={'14px'} width={'100%'} maxW={'100px'} />
                    <Skeleton height={'14px'} width={'100%'} maxW={'150px'} />
                    <Skeleton height={'14px'} width={'100%'} maxW={'250px'} />
                </VStack>
            </HStack>
        </Box>
    )
}
