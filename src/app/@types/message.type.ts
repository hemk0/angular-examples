export type Message = {
    id: number,
    text: string,
    author: Author,
}

export type Author = {
    id: number,
    name: string,
}