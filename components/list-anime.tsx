'use client'

import { IconButton } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import useSWR from 'swr'
import { useState } from 'react'

const fetcher = (url: any) => fetch(url).then((r) => r.json())

export default function ListAnime() {
    const searchParams = useSearchParams()
    const search = searchParams.get('q')
    const [page, setPage] = useState(1)

    const { data, isLoading } = useSWR(
        `https://api.jikan.moe/v4/anime?q=${search}&page=${page}&limit=3`,
        fetcher
    )

    function handleNextPage() {
        setPage((prev) => prev + 1)
    }
    function handlePrevPage() {
        setPage((prev) => prev - 1)
    }

    return (
        <>
            {isLoading ? (
                <div>Loading data...</div>
            ) : (
                <ul>
                    {data.data.map((item: any) => {
                        return (
                            <li key={item.mal_id}>
                                <Link href={`/${item.mal_id}?q=${search}`}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            )}
            {page > 1 ? (
                <IconButton
                    disabled={isLoading}
                    aria-label="Prev Data"
                    icon={<ArrowBackIcon />}
                    onClick={handlePrevPage}
                />
            ) : null}
            {data?.pagination?.has_next_page ? (
                <IconButton
                    disabled={isLoading}
                    aria-label="Next Data"
                    icon={<ArrowForwardIcon />}
                    onClick={handleNextPage}
                />
            ) : null}
        </>
    )
}
