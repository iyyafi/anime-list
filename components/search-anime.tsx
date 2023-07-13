'use client'
import { useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function SearchAnime() {
    const router = useRouter()
    const pathname = usePathname()
    const [searchQuery, setSearchQuery] = useState('')

    function updateSearchQuery(e: any) {
        if (e.key === 'Enter') {
            const query = searchQuery ? `?q=${searchQuery}` : ''
            router.push(`${pathname}${query}`)
        }
    }

    return (
        <input
            type="text"
            className="p-1 border-gray-300 border rounded"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => updateSearchQuery(e)}
        />
    )
}
