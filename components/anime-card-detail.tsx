'use client'

import {
    Box,
    HStack,
    Image,
    Skeleton,
    SkeletonText,
    StackDivider,
    Text,
    VStack,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { AnimeDetailSchema } from '@/types/anime-detail-schema'

export default function AnimeCardDetail({
    anime,
}: {
    anime: AnimeDetailSchema
}) {
    return (
        <VStack w={'100%'} py={2} align={'flex-start'} spacing={4}>
            <HStack align={'flex-start'} w={'100%'} spacing={4}>
                <Image
                    src={anime.images.webp.large_image_url}
                    alt={anime.title}
                    width="30%"
                    objectFit="cover"
                    fallbackSrc="https://via.placeholder.com/200"
                    flexShrink={0}
                />
                <Box flexGrow={1}>
                    <Text fontWeight={'bold'} fontSize={'xl'} mb={2}>
                        {anime.title}{' '}
                        <Link href={anime.url} target="_blank">
                            <ExternalLinkIcon />
                        </Link>
                    </Text>
                    <VStack
                        w={'100%'}
                        spacing={1.5}
                        align={'flex-start'}
                        divider={<StackDivider borderColor="gray.200" />}
                    >
                        <Text fontSize={'md'}>
                            Other titles:{' '}
                            {anime.titles
                                ?.map((title) => title.title)
                                .join(', ')}
                        </Text>
                        <Text fontSize={'md'}>Source: {anime.source}</Text>
                        <Text fontSize={'md'}>Duration: {anime.duration}</Text>
                        <Text fontSize={'md'}>
                            First Aired: {anime.aired.string}
                        </Text>
                        <Text fontSize={'md'}>
                            Genre:{' '}
                            {anime.genres
                                ?.map((genre) => genre.name)
                                .join(', ')}
                        </Text>
                    </VStack>
                </Box>
            </HStack>
            <Text fontSize={'md'} color={'gray.600'} fontStyle={'italic'}>
                &quot;{anime.synopsis}&quot;
            </Text>
        </VStack>
    )
}

export function AnimeCardDetailSkeleton() {
    return (
        <VStack w={'100%'} py={2} align={'flex-start'} spacing={4}>
            <HStack align={'flex-start'} w={'100%'} spacing={4}>
                <Skeleton aspectRatio={1 / 1.4} width={'30%'} flexShrink={0} />
                <Box flexGrow={1}>
                    <SkeletonText
                        w={'100%'}
                        noOfLines={2}
                        spacing="3"
                        skeletonHeight="20px"
                        py={2}
                        mb={2}
                    />
                    <VStack
                        w={'100%'}
                        spacing={1.5}
                        align={'flex-start'}
                        divider={<StackDivider borderColor="gray.200" />}
                    >
                        <SkeletonText
                            w={'100%'}
                            noOfLines={4}
                            spacing="2"
                            skeletonHeight="16px"
                            py={1}
                        />
                        <Skeleton
                            height={'16px'}
                            width={'100%'}
                            maxW={'100px'}
                        />
                        <Skeleton
                            height={'16px'}
                            width={'100%'}
                            maxW={'150px'}
                        />
                        <Skeleton
                            height={'16px'}
                            width={'100%'}
                            maxW={'200px'}
                        />
                        <Skeleton
                            height={'16px'}
                            width={'100%'}
                            maxW={'250px'}
                        />
                    </VStack>
                </Box>
            </HStack>
            <SkeletonText
                w={'100%'}
                noOfLines={5}
                spacing="2"
                skeletonHeight="16px"
                py={1}
            />
        </VStack>
    )
}
