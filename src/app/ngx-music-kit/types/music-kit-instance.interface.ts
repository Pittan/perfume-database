import {
  DeveloperToken,
  MusicKitPlaybackBitrate,
  MusicKitPlaybackStates,
  MusicKitPlayer, MusicKitSetQueueOptions,
  MusicKitStorefrontId,
  MusicUserToken
} from './music-kit.interface'

export declare class MusicKitInstance {
  api
  /** The current bit rate for the media player. */
  readonly bitrate: MusicKitPlaybackBitrate
  /**
   * The developer token to identify yourself as a trusted developer and member of the Apple Developer Program.
   */
  readonly developerToken: DeveloperToken
  /**
   * A Boolean value indicating whether the user has authenticated and authorized the application for use.
   */
  readonly isAuthorized: boolean
  /**
   * A user token used to access personalized Apple Music content.
   */
  readonly musicUserToken: MusicUserToken
  /**
   * The current playback state of the music player.
   */
  readonly playbackState: MusicKitPlaybackStates
  /**
   * A Boolean value that indicates if a playback target is available.
   */
  readonly playbackTargetAvailable: boolean
  /**
   * An instance of the MusicKit player.
   */
  player: MusicKitPlayer
  /**
   * The current storefront for the configured MusicKit instance.
   */
  readonly storefrontId: MusicKitStorefrontId
  /**
   * Add an event listener for a MusicKit instance by name.
   * @param name The name of the event.
   * @param callback The callback function to invoke when the event occurs.
   */
  addEventListener (name: string, callback: Function)
  addToLibrary (id, type) // AddToLibraryContentType
  /**
   * Returns a promise containing a music user token when a user has authenticated and authorized the app.
   */
  authorize (): Promise<MusicUserToken>
  /**
   * Begins playing the media item at the specified index in the queue.
   * Returns the current media item position.
   * @param index The queue index to begin playing media.
   */
  changeToMediaAtIndex (index: number): Promise<number>
  /**
   * Pauses playback of the media player.
   */
  pause (): void
  /**
   * Begins playback of the current media item.
   * Returns the current media item position.
   */
  play (): Promise<any>
  playLater (options: MusicKitSetQueueOptions): Promise<any>
  playNext (options: MusicKitSetQueueOptions): Promise<any>
  /**
   * Removes an event listener for a MusicKit instance by name.
   */
  removeEventListener (name: string, callback: Function)
  /**
   * Sets the playback point to a specified time.
   * @param time The time to set as the playback point.
   */
  seekToTime (time: number): Promise<any>
  /**
   * Sets a music player's playback queue using queue options.
   * Returns the current playback queue.
   * @param options The option used to set the playback queue.
   * @discussion This method returns a promise with an instance of the set music player's playback queue.
   *   Because we cannot programatically differentiate between an album or a song from the content identifier,
   *   the declaritive markup assumes album, unless specified with the data-apple-music-media-type attribute.
   */
  setQueue (options: MusicKitSetQueueOptions): Promise<any>
  /**
   * Starts playback of the next media item in the playback queue.
   * Returns the current media item position.
   * @discussion If the player is not playing, this method designates the next media item as the next to be played.
   */
  skipToNextItem (): Promise<any>

  /**
   * Starts playback of the previous media item in the playback queue.
   * Returns the current media position.
   * @discussion If the player is not playing, this method designates the previous media item as the next to be played.
   */
  skipToPreviousItem (): Promise<any>
  /**
   * Stops playback of the media player.
   */
  stop (): void
  /**
   * Unauthorizes the app for the current user.
   */
  unauthorize (): Promise<any>
}
