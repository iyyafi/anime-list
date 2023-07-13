export default function ListAnime({ items }: any) {
    return (
        <ul>
            {items.data.map((item: any) => {
                return <li key={item.mal_id}>{item.title}</li>
            })}
        </ul>
    )
}
