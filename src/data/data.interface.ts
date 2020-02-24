export type SongId = number
export type AlbumId = number
export type EventId = number
export type LiveHouseId = number
export type TourId = number

/**
 * 曲情報。基本的にはPerfumeのものであるはずなので、必要に応じてOptionalは追記する方針で。
 */
export interface Song {
  /** 連番で振る曲のID */
  id: SongId
  /** 曲のタイトル */
  title: string
  /** 曲のよみがな */
  kana: string
  /** アーティスト。他人の曲を歌う/他人が曲を歌った場合などで追加の必要があれば。 */
  artist?: string
  /**
   * 類似する曲があれば、それを親曲として指定できます。
   * 例: edge と edge(⊿-mix) のような関係性であれば、edgeの方を親として登録するなど
   */
  parent?: SongId
  /**
   * シングル収録曲として、Instrumentalであることを表したい場合にはtrueを指定してください
   * - ただし、parentに歌アリの曲を指定すること！
   */
  is_instrumental?: boolean
  /** フリーメモ */
  memo?: string
}

export type Disc = SongId[]

/**
 * アルバム情報(シングル含む)。基本的にはPerfumeのものであるはず。
 */
export interface Album {
  /** 連番で振るアルバムのID */
  id: AlbumId
  /** アルバム名 */
  title: string
  /** よみがな */
  kana: string
  /** アーティスト。他人のアルバムに入っている場合などで追加の必要があれば。 */
  artist?: string
  /** アルバムの種別。シングル or アルバム */
  album_type: 'SINGLE' | 'ALBUM' | 'COMPILATION' | 'DIGITAL'
  /** 発売日 */
  released_on?: string
  /** アルバムの種別。(例: 初回限定・通常) */
  editions: {
    /** 名前(例: '通常盤') */
    name: string
    /** 収録曲。ディスクとして管理します。 */
    songs: Disc[]
    /** アートワークの写真URL */
    artwork_url?: string
    /** アートワークの写真が利用できない場合（読込中の場合も含）に利用するプレースホルダー色 */
    bg_color?: string
    /** 発売日 */
    released_on?: string
  }[]
}

/**
 * ライブで披露するセットリストの単位。基本的に楽曲の披露であればSongIdで十分だが
 * それ以外のことをする場合には任意で入力可能にしてある。
 */
export type SetListItem = SongId | SetListItemDefinition
export interface SetListItemDefinition {
  /** タイトル */
  title: string
  /** メドレー or MC or PTAのコーナー */
  type: 'MEDLEY' | 'MC' | 'PTA'
  /** メドレーの場合は披露した曲をまとめて配列に */
  songs?: SongId[]
}

/**
 * イベントの最小単位。ライブ/フェスに対応している。
 */
export interface Event {
  /** イベントのID。連番。 */
  id: EventId
  /** イベントの種別。ライブ or フェス */
  event_type: 'LIVE' | 'FES'
  /** イベント名 */
  name: string
  /** サブタイトル(あれば) */
  sub_name?: string
  /** 会場 */
  live_house?: LiveHouseId
  /** ツアーのID(このイベントがツアーの中の1公演であることを示す場合) */
  tour_id?: TourId
  /** 開催日(日をまたぐ場合は開演した日) */
  date: string
  /** セットリスト */
  songs?: SetListItem[][]
  /** フリーメモ。 */
  memo?: string
}

/**
 * パフォーマンスを披露した場所の単位。わかりやすくここではライブハウスと表現するが、それ以外でも可。
 */
export interface LiveHouse {
  /** 通し番号のID */
  id: LiveHouseId
  /** 会場名 */
  name: string
  /** 会場のある国 */
  country: string
  /** 会場のある都道府県(日本以外なら州など) */
  prefecture: string
  /** 会場の場所(あれば地図を表示する予定) */
  location?: {
    /** 軽度 */
    latitude?: number
    /** 緯度 */
    longitude?: number
  }
}

/**
 * ツアー。
 */
export interface Tour {
  /** 通し番号のID */
  id: TourId
  /** ツアーの名称 */
  name: string
  /** よみがな */
  kana: string
  /** ツアーの最初の日 */
  from: string
  /** ツアーの最後の日 */
  to: string
  /** 関連するアルバムがある場合はそのID */
  related_album?: AlbumId
}
