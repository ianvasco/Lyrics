import axios, {AxiosResponse} from 'axios'
import {LyricDetail} from '../../types'
interface LyricsResponse {
  lyrics: string
}

export default class ApiService {
  static readonly BASE_URL = 'https://api.lyrics.ovh/v1/'
  static readonly NO_LYRIC_FOUND = 'No lyrics found'

  static getLyrics: (artist: string, title: string) => Promise<string> = (artist, title) => {
    return axios
      .get(`${ApiService.BASE_URL}/${artist}/${title}`)
      .then(({data}: AxiosResponse<LyricsResponse>) => {
        if (data) {
          return data.lyrics
        }
        throw new Error('Empty ok error while fetching Lyrics')
      })
      .catch((e: Error) => {
        console.log(e)
        if(e.message === ApiService.NO_LYRIC_FOUND) throw new Error(ApiService.NO_LYRIC_FOUND)
        throw new Error('Could not fetch Lyrics')
      })
  }
}
