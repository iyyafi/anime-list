/* import Image from 'next/image' */
import SearchAnime from '@/components/search-anime'
import ListAnime from '@/components/list-anime'

async function getAnimeList(query: string) {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=3`)
    const data = await res.json()
    return data
}

export default async function Home({ _, searchParams }: any) {
    const anime = await getAnimeList(searchParams?.q)

    return (
        <main className="flex min-h-screen flex-col items-center p-20">
            <div className="drop-shadow-md max-w-lg bg-white flex flex-col">
                <SearchAnime />
                <ListAnime items={anime} />
            </div>
        </main>
    )
}
