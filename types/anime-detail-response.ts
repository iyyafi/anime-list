export interface AnimeDetail {
    data: Data
}
export interface Data {
    mal_id: number
    url: string
    images: Images
    trailer: Trailer
    approved: boolean
    titles?: TitlesEntity[] | null
    title: string
    title_english?: null
    title_japanese: string
    title_synonyms?: string[] | null
    type: string
    source: string
    episodes: number
    status: string
    airing: boolean
    aired: Aired
    duration: string
    rating: string
    score?: null
    scored_by?: null
    rank: number
    popularity: number
    members: number
    favorites: number
    synopsis: string
    background?: null
    season?: null
    year?: null
    broadcast: Broadcast
    producers?: null[] | null
    licensors?: null[] | null
    studios?: StudiosEntityOrGenresEntityOrThemesEntity[] | null
    genres?: StudiosEntityOrGenresEntityOrThemesEntity[] | null
    explicit_genres?: null[] | null
    themes?: StudiosEntityOrGenresEntityOrThemesEntity[] | null
    demographics?: null[] | null
}
export interface Images {
    jpg: JpgOrWebp
    webp: JpgOrWebp
}
export interface JpgOrWebp {
    image_url: string
    small_image_url: string
    large_image_url: string
}
export interface Trailer {
    youtube_id?: null
    url?: null
    embed_url?: null
    images: Images1
}
export interface Images1 {
    image_url?: null
    small_image_url?: null
    medium_image_url?: null
    large_image_url?: null
    maximum_image_url?: null
}
export interface TitlesEntity {
    type: string
    title: string
}
export interface Aired {
    from: string
    to?: null
    prop: Prop
    string: string
}
export interface Prop {
    from: From
    to: To
}
export interface From {
    day: number
    month: number
    year: number
}
export interface To {
    day?: null
    month?: null
    year?: null
}
export interface Broadcast {
    day?: null
    time?: null
    timezone?: null
    string?: null
}
export interface StudiosEntityOrGenresEntityOrThemesEntity {
    mal_id: number
    type: string
    name: string
    url: string
}
