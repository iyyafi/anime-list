'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import useSWR from 'swr'

const fetcher = (url: any) => fetch(url).then((r) => r.json())

export default function ListAnime() {
    const searchParams = useSearchParams()
    const search = searchParams.get('q')

    const { data, isLoading } = useSWR(
        `https://api.jikan.moe/v4/anime?q=${search}&limit=3`,
        fetcher
    )

    return isLoading ? (
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
    )
}
