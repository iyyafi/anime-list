import ListAnime from '@/components/list-anime'

export default async function Home({ _, searchParams }: any) {
    return (
        <main style={{ width: '100%' }}>
            <ListAnime />
        </main>
    )
}
