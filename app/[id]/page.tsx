import AnimeCardDetail from '@/components/anime-card-detail'
import { animeDetailSchema } from '@/types/anime-detail-schema'

async function getAnimeDetail(id: string) {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    const data = await res.json()
    return data.data
}

export default async function AnimeDetail({
    params,
}: {
    params: { id: string }
}) {
    const animeDetail = await getAnimeDetail(params.id)
    const validateAnimeDetail = animeDetailSchema.safeParse(animeDetail)
    if (!validateAnimeDetail.success) {
        console.error(validateAnimeDetail.error)
        return
    }

    return (
        <main style={{ width: '100%' }}>
            <AnimeCardDetail anime={animeDetail} />
        </main>
    )
}
