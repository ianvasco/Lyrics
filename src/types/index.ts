export interface LyricPreview {
    artist: string
    title: string
}

export interface LyricDetail extends LyricPreview {
    lyrics: string
}