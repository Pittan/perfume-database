import { Injectable } from '@angular/core'
import SpotifyWebApi from 'spotify-web-api-js'
import PagingObject = SpotifyApi.PagingObject
import AlbumObjectSimplified = SpotifyApi.AlbumObjectSimplified
import TrackObjectSimplified = SpotifyApi.TrackObjectSimplified
import CurrentUsersProfileResponse = SpotifyApi.CurrentUsersProfileResponse
import { BehaviorSubject } from 'rxjs'
import { v4 as uuidv4 } from 'uuid'

export interface CreatePlaylistOptions {
  name: string
  public: boolean
  description: string
}

export const SPOTIFY_UUID_LS_KEY = 'spotify-state-key'
export const SPOTIFY_AUTH_CALLBACK_STATE = 'spotify-state-callback'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private spotify = new SpotifyWebApi()

  spotifyUserProfile = new BehaviorSubject<CurrentUsersProfileResponse>(undefined)

  constructor () { }

  getAuthUrl () {
    const clientId = 'b78be222039847c2ae6f659e82ab87e6'
    const redirectUri = encodeURIComponent(`${location.protocol}//${location.host}/auth/callback/spotify`)
    const uuid = uuidv4()
    localStorage.setItem(SPOTIFY_UUID_LS_KEY, uuid)
    const scopes = encodeURIComponent(['playlist-modify-public', 'playlist-modify-private'].join(' '))
    return `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&state=${uuid}`
  }

  setAccessToken (token: string) {
    this.spotify.setAccessToken(token)
    this.spotify.getMe().then(res => {
      this.spotifyUserProfile.next(res)
    })
  }

  createPlaylist (userId: string, options: CreatePlaylistOptions) {
    return this.spotify.createPlaylist(userId, options)
  }

  addTracksToPlaylist (playListId: string, songs: string[]) {
    return this.spotify.addTracksToPlaylist(playListId, songs)
  }

  /**
   * Internal
   */
  private async getAllSongs (artistId: string): Promise<TrackObjectSimplified[]> {
    let allSongs: TrackObjectSimplified[] = []
    return new Promise((resolve, reject) => {
      this.getAlbums(artistId).then(async (res) => {
        for (let i = 0; i < res.length; i++) {
          const songs = await this.getTracks(res[i].id)
          allSongs = [...allSongs, ...songs]
        }
        resolve(allSongs)
      })
    })
  }

  /**
   * Internal
   */
  private async getAlbums (artistId: string, offset = 0, albums: AlbumObjectSimplified[] = []): Promise<AlbumObjectSimplified[]> {
    return this.spotify.getArtistAlbums(artistId, { limit: 50, offset, country: 'JP' }).then((res: PagingObject<AlbumObjectSimplified>) => {
      albums = [...albums, ...res.items]
      if (res.total > albums.length) {
        return this.getAlbums(artistId, albums.length, albums)
      }
      return albums
    })
  }

  /**
   * Internal
   */
  private async getTracks (albumId: string, offset = 0, tracks: TrackObjectSimplified[] = []): Promise<TrackObjectSimplified[]> {
    return this.spotify.getAlbumTracks(albumId, { limit: 50, offset }).then(res => {
      tracks = [...tracks, ...res.items]
      if (res.total > tracks.length) {
        return this.getTracks(albumId, tracks.length, tracks)
      }
      return tracks
    })
  }
}
