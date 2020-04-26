// This type definition is work in progress.
// See: https://developer.apple.com/documentation/musickitjs/musickit/player
import {
  MusicKitFormattedPlaybackDuration,
  MusicKitMediaItem, MusicKitMediaItemPosition, MusicKitMusicDescriptor,
  MusicKitPlaybackBitrate,
  MusicKitPlaybackStates,
  MusicKitPlayerRepeatMode, MusicKitPlayerShuffleMode,
  MusicKitQueue
} from './music-kit.interface'

export declare class MusicKitPlayer {
  /** The current bit rate of the music player. */
  readonly bitrate: MusicKitPlaybackBitrate
  /** The music player has EME loaded. */
  readonly canSupportDRM: boolean
  /** The current playback duration. */
  readonly currentPlaybackDuration: number
  /** The current playback progress. */
  readonly currentPlaybackProgress: number
  /** The current position of the playhead. */
  readonly currentPlaybackTime: number
  /**  */
  readonly currentPlaybackTimeRemaining: number
  /** The current playback duration in hours and minutes. */
  readonly formattedCurrentPlaybackDuration: MusicKitFormattedPlaybackDuration
  /** A Boolean value indicating whether the player is currently playing. */
  readonly isPlaying: boolean
  /** The currently-playing media item, or the media item, within an queue, that you have designated to begin playback. */
  readonly nowPlayingItem: MusicKitMediaItem
  /** The index of the now playing item in the current playback queue. */
  readonly nowPlayingItemIndex?: number
  /** The current playback rate for the player. */
  readonly playbackRate: number
  /** The current playback state of the music player. */
  readonly playbackState: MusicKitPlaybackStates
  /** A Boolean value that indicates whether a playback target is available. */
  readonly playbackTargetAvailable: boolean
  /** The current playback queue of the music player. */
  readonly queue: MusicKitQueue
  /** The current repeat mode of the music player. */
  readonly repeatMode: MusicKitPlayerRepeatMode
  /** The current shuffle mode of the music player. */
  readonly shuffleMode: MusicKitPlayerShuffleMode
  /** A number indicating the current volume of the music player. */
  readonly volume: number
  // Instance methods
  /** Adds an event listener as a callback for an event name.
   * @param name The name of the event.
   * @param callback The callback function to invoke when the event occurs.
   */
  addEventListener (name: string, callback: Function): void
  /** Begins playing the media item at the specified index in the queue immediately.
   * @param index The queue index to begin playing media.
   * @returns The callback function to invoke when the event occurs.
   */
  changeToMediaAtIndex (index: number): Promise<MusicKitMediaItemPosition>
  /** Begins playing the media item in the queue immediately.
   * @param descriptor A descriptor can be a MusicKit.MediaItem instance or a string identifier.
   * @returns Returns the current media item position.
   */
  changeToMediaItem (descriptor: MusicKitMusicDescriptor): Promise<MusicKitMediaItemPosition>
  /** Sets the volume to 0. */
  mute (): void
  /** Pauses playback of the current item. */
  pause (): void
  /** Initiates playback of the current item.
   * @returns Returns the current media item position.
   */
  play (): Promise<number>
  /** Prepares a music player for playback.
   * @param descriptor A descriptor can be a MusicKit.MediaItem instance or a string identifier.
   */
  prepareToPlay (descriptor: MusicKitMusicDescriptor): Promise<void>
  /**
   * @param name The name of the event.
   * @param callback The callback function to remove.
   */
  removeEventListener (name: string, callback: Function): void
  /** Sets the playback point to a specified time.
   * @param time The time to set as the playback point.
   */
  seekToTime (time: number): Promise<void>
  /** Displays the playback target picker if a playback target is available. */
  showPlaybackTargetPicker (): void
  /** Starts playback of the next media item in the playback queue.
   * @returns Returns the current media item position.
   * @discussion If the player is not playing, this method designates the next media item as the next to be played.
   */
  skipToNextItem (): Promise<MusicKitMediaItemPosition>
  /** Starts playback of the previous media item in the playback queue. */
  /**
   * @returns Returns the current media item position.
   * @discussion If the player is not playing, this method designates the previous media item as the next to be played.
   */
  skipToPreviousItem (): Promise<MusicKitMediaItemPosition>
  /** Stops the currently playing media item. */
  stop (): void
}
