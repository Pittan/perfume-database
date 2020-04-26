import { MusicKitMKError } from './music-kit-mk-error.interface'

export interface AddPlaylistResponse {
  data: {
    id: string
    type: string
    href: string
    attributes: {
      playParams: {
        id: string
        kind: string
        isLibrary: boolean
      }
      name: string
      description?: {
        standard?: string
      }
      dateAdded: string
      canEdit?: boolean
      hasCatalog: boolean
    }
  }[]
}

export interface RelationShipResponse<T> {
  data: T[],
  href: string
  meta: string
  next: string
}

export type AlbumRelationship = RelationShipResponse<{ [key: string]: any }>
export type GenreRelationship = RelationShipResponse<{ [key: string]: any }>
export type MusicVideoRelationship = RelationShipResponse<{ [key: string]: any }>
export type PlaylistRelationship = RelationShipResponse<{ [key: string]: any }>
export type StationRelationship = RelationShipResponse<{ [key: string]: any }>

export interface GetMultipleCatalogAlbumsResponse {
  data: Array<{ [key: string]: any }>
}
