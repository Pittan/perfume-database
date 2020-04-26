import { MusicKitLibrary } from './music-kit-library.interface'

// WIP: https://developer.apple.com/documentation/musickitjs/musickit/api
export declare class MusicKitApi {
  library: MusicKitLibrary
  storefrontId
  // -------- methods below
  // Fetch one or more activities using their identifiers.
  activities
  // Fetch an activity using its identifier.
  activity
  // Add a catalog resource to a user's library.
  addToLibrary

  // Fetch an album using its identifier.
  album

  // Fetch one or more albums using their identifiers.
  albums

  // Fetch an Apple curator using its identifier.
  appleCurator

  // Fetch one or more Apple curators using their identifiers.
  appleCurators

  // Fetch an artist using its identifier.
  artist

  // Fetch one or more artists using their identifiers.
  artists

  // Fetch one or more charts.
  charts

  // Fetch a curator using its identifier.
  curator

  // Fetch one or more curators using their identifiers.
  curators

  // Fetch a genre using its identifier.
  genre

  // Fetch one or more genres using their identifiers.
  genres

  // Fetch the resources in heavy rotation for the user.
  historyHeavyRotation

  // Fetch a music video using its identifier.
  musicVideo

  // Fetch one or more music videos using their identifiers.
  musicVideos

  // Fetch a playlist using its identifier.
  playlist

  // Fetch one or more playlists using their identifiers.
  playlists

  // Fetch the recently played resources for the user.
  recentPlayed

  // Fetch a recommendation using its identifier.
  recommendation

  // Fetch one or more recommendations using their identifiers.
  recommendations

  // Search the catalog using a query.
  search

  // Fetch the search term results for a hint.
  searchHints

  // Fetch a song using its identifier.
  song

  // Fetch one or more songs using their identifiers.
  songs

  // Fetch a station using its identifier.
  station

  // Fetch one or more stations using their identifiers.
  stations

  // Fetch a storefront using its identifier.
  storefront

  // Fetch one or more storefronts using their identifiers.
  storefronts
}
