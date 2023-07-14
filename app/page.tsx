import ListAnime from '@/components/list-anime'

export default async function Home({ _, searchParams }: any) {
    return (
        <main>
            <ListAnime />
        </main>
    )
}
