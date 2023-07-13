/* import Image from 'next/image' */
import SearchAnime from '@/components/search-anime'
import ListAnime from '@/components/list-anime'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-20">
            <div className="drop-shadow-md max-w-lg bg-white flex flex-col">
                <SearchAnime />
                <ListAnime />
            </div>
        </main>
    )
}
