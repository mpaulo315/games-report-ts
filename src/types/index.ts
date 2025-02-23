export interface Game {
    index: number;
    img: string;
    title: string
    console: string;
    genre: string;
    publisher: string;
    developer: string | null;
    criticScore: number | null;
    totalSales: number;
    naSales: number | null;
    jpSales: number | null;
    palSales: number | null;
    otherSales: number | null;
    releaseDate: string | null;
    lastUpdate: string | null   ;
} 