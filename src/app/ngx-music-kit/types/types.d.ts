import { MusicKit } from './music-kit.interface'

declare global {
  interface Window {
    MusicKit: MusicKit
  }
}
