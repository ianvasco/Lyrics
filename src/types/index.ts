export interface LyricPreview {
    author: string
    title: string
}

export interface LyricDetail extends LyricPreview {
    lyric: string
}