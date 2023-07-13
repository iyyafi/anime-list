import ListAnime from '@/components/list-anime'

async function getAnimeList(query: string) {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&limit=3`)
    const data = await res.json()
    return data
}

export default async function Home({ _, searchParams }: any) {
    const animeList = await getAnimeList(searchParams?.q)

    return (
        <main className="flex min-h-screen flex-col items-center p-20">
            <div className="drop-shadow-md max-w-lg bg-white flex flex-col">
                <ListAnime items={animeList} />
            </div>
        </main>
    )
}
