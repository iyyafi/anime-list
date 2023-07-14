async function getAnimeDetail(id: string) {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    const data = await res.json()
    return data.data
}

export default async function AnimeDetail({ params }: any) {
    const animeDetail = await getAnimeDetail(params?.id)
    return (
        <main>
            {params.id}
            {animeDetail.title}
        </main>
    )
}
