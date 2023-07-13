
async function getAnimeDetail(id: string) {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    const data = await res.json()
    return data.data
}

export default async function AnimeDetail({ params }: any) {
    const animeDetail = await getAnimeDetail(params?.id)
    return (
        <main className="flex min-h-screen flex-col items-center p-20">
            <div className="drop-shadow-md max-w-lg bg-white flex flex-col">
                {params.id}
                {animeDetail.title}
            </div>
        </main>
    )
}