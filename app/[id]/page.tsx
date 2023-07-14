import AnimeCardDetail from '@/components/anime-card-detail'

async function getAnimeDetail(id: string) {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    const data = await res.json()
    return data.data
}

export default async function AnimeDetail({ params }: any) {
    const animeDetail = await getAnimeDetail(params?.id)
    return (
        <main style={{ width: '100%' }}>
            <AnimeCardDetail anime={animeDetail} />
        </main>
    )
}
