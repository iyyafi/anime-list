'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function SearchAnime() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const search = searchParams.get('q') // for default value
    const [searchQuery, setSearchQuery] = useState(search)


    function updateSearchQuery(e: any) {
        if (e.key === 'Enter') {
            const query = searchQuery ? `?q=${searchQuery}` : ''
            router.push(`/${query}`)
        }
    }

    return (
        <input
            type="text"
            className="p-1 border-gray-300 border rounded"
            defaultValue={searchQuery || ''}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => updateSearchQuery(e)}
        />
    )
}
