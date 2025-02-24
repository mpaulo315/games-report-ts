export interface Game {
    img?: string,
    title: string,
    console: string,
    genre: string,
    publisher: string,
    developer: string,
    critic_score?: number,
    total_sales?: number,
    na_sales?: number,
    jp_sales?: number,
    pal_sales?: number,
    other_sales?: number,
    release_date: number,

    day?: number,
    month?: number,
    year?: number
}

export interface GamesResponse {
    data: Game[]
}
