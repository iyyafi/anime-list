export interface AnimeList {
    pagination: Pagination
    data?: DataEntity[] | null
}
export interface Pagination {
    last_visible_page: number
    has_next_page: boolean
    current_page: number
    items: Items
}
export interface Items {
    count: number
    total: number
    per_page: number
}
export interface DataEntity {
    mal_id: number
    url: string
    images: Images
    trailer: Trailer
    approved: boolean
    titles?: TitlesEntity[] | null
    title: string
    title_english?: string | null
    title_japanese: string
    title_synonyms?: (string | null)[] | null
    type: string
    source: string
    episodes: number
    status: string
    airing: boolean
    aired: Aired
    duration: string
    rating: string
    score?: number | null
    scored_by?: number | null
    rank: number
    popularity: number
    members: number
    favorites: number
    synopsis: string
    background?: null
    season?: string | null
    year?: number | null
    broadcast: Broadcast
    producers?:
        | (StudiosEntityOrGenresEntityOrThemesEntityOrProducersEntityOrLicensorsEntityOrDemographicsEntity | null)[]
        | null
    licensors?:
        | (StudiosEntityOrGenresEntityOrThemesEntityOrProducersEntityOrLicensorsEntityOrDemographicsEntity1 | null)[]
        | null
    studios?:
        | StudiosEntityOrGenresEntityOrThemesEntityOrProducersEntityOrLicensorsEntityOrDemographicsEntity2[]
        | null
    genres?:
        | StudiosEntityOrGenresEntityOrThemesEntityOrProducersEntityOrLicensorsEntityOrDemographicsEntity2[]
        | null
    explicit_genres?: null[] | null
    themes?:
        | (StudiosEntityOrGenresEntityOrThemesEntityOrProducersEntityOrLicensorsEntityOrDemographicsEntity3 | null)[]
        | null
    demographics?:
        | (StudiosEntityOrGenresEntityOrThemesEntityOrProducersEntityOrLicensorsEntityOrDemographicsEntity4 | null)[]
        | null
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
    youtube_id?: string | null
    url?: string | null
    embed_url?: string | null
    images: Images1
}
export interface Images1 {
    image_url?: string | null
    small_image_url?: string | null
    medium_image_url?: string | null
    large_image_url?: string | null
    maximum_image_url?: string | null
}
export interface TitlesEntity {
    type: string
    title: string
}
export interface Aired {
    from: string
    to?: string | null
    prop: Prop
    string: string
}
export interface Prop {
    from: FromOrTo
    to: To
}
export interface FromOrTo {
    day: number
    month: number
    year: number
}
export interface To {
    day?: number | null
    month?: number | null
    year?: number | null
}
export interface Broadcast {
    day?: string | null
    time?: string | null
    timezone?: string | null
    string?: string | null
}
export interface StudiosEntityOrGenresEntityOrThemesEntityOrProducersEntityOrLicensorsEntityOrDemographicsEntity {
    mal_id: number
    type: string
    name: string
    url: string
}
export interface StudiosEntityOrGenresEntityOrThemesEntityOrProducersEntityOrLicensorsEntityOrDemographicsEntity1 {
    mal_id: number
    type: string
    name: string
    url: string
}
export interface StudiosEntityOrGenresEntityOrThemesEntityOrProducersEntityOrLicensorsEntityOrDemographicsEntity2 {
    mal_id: number
    type: string
    name: string
    url: string
}
export interface StudiosEntityOrGenresEntityOrThemesEntityOrProducersEntityOrLicensorsEntityOrDemographicsEntity3 {
    mal_id: number
    type: string
    name: string
    url: string
}
export interface StudiosEntityOrGenresEntityOrThemesEntityOrProducersEntityOrLicensorsEntityOrDemographicsEntity4 {
    mal_id: number
    type: string
    name: string
    url: string
}
