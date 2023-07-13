'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function ListAnime({ items }: any) {
    const searchParams = useSearchParams()
    const search = searchParams.get('q')
    return (
        <ul>
            {items.data.map((item: any) => {
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
