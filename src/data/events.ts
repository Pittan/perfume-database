import { Event } from './data.interface'
import { MC, PTA } from '.'

// TODO スプレッドシートから変換したけど細かいところは見きれてない！
//      メドレーの処理とか他人の曲とか、特殊なアンコールとか
export const EVENTS: Event[] = [
  {
    id: 1,
    date: '2007/08/11',
    name: 'SUMMER SONIC',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        18, // エレクトロ・ワールド
        15, // コンピュータードライビング
        24, // ポリリズム
        23, // Twinkle Snow Powdery Snow
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 0
  },
  {
    id: 2,
    date: '2007/09/07',
    name: 'Fukushimania Rock vol.2',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        20, // パーフェクトスター・パーフェクトスタイル
        18, // エレクトロ・ワールド
        15, // コンピュータードライビング
        24, // ポリリズム
        22, // チョコレイト・ディスコ
        7, // ジェニーはご機嫌ななめ
        17, // Perfume
      ],

    ],
    live_house: 1
  },
  {
    id: 3,
    date: '2007/09/15',
    name: 'インストアライブ',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        22, // チョコレイト・ディスコ
        18, // エレクトロ・ワールド
        20, // パーフェクトスター・パーフェクトスタイル
        24, // ポリリズム
      ],

    ],
    live_house: 2
  },
  {
    id: 4,
    date: '2007/09/16',
    name: 'インストアライブ',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        18, // エレクトロ・ワールド
        23, // Twinkle Snow Powdery Snow
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],

    ],
    live_house: 3
  },
  {
    id: 5,
    date: '2007/09/17',
    name: 'インストアライブ',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        22, // チョコレイト・ディスコ
        16, // コンピューターシティ
        18, // エレクトロ・ワールド
        24, // ポリリズム
      ],

    ],
    live_house: 4
  },
  {
    id: 6,
    date: '2007/09/19',
    name: 'duo Night 3回目',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        18, // エレクトロ・ワールド
        16, // コンピューターシティ
        24, // ポリリズム
        20, // パーフェクトスター・パーフェクトスタイル
        22, // チョコレイト・ディスコ
        17, // Perfume
        19, // wonder2
      ],

    ],
    live_house: 5
  },
  {
    id: 7,
    date: '2007/09/21',
    name: 'PILOT presents COLONY 6th ANNIVERSARY～JUMP OUT COLONY～',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        18, // エレクトロ・ワールド
        20, // パーフェクトスター・パーフェクトスタイル
        24, // ポリリズム
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 6
  },
  {
    id: 8,
    date: '2007/09/22',
    name: 'インストアライブ',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        18, // エレクトロ・ワールド
        16, // コンピューターシティ
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],

    ],
    live_house: 7
  },
  {
    id: 9,
    date: '2007/09/22',
    name: 'インストアライブ',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
        10, // おいしいレシピ
        16, // コンピューターシティ
        22, // チョコレイト・ディスコ
        17, // Perfume
      ],

    ],
    live_house: 8
  },
  {
    id: 10,
    date: '2007/09/23',
    name: 'インストアライブ',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
        10, // おいしいレシピ
        16, // コンピューターシティ
        22, // チョコレイト・ディスコ
        17, // Perfume
      ],

    ],
    live_house: 9
  },
  {
    id: 11,
    date: '2007/09/24',
    name: 'インストアライブ',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        18, // エレクトロ・ワールド
        23, // Twinkle Snow Powdery Snow
        7, // ジェニーはご機嫌ななめ
        24, // ポリリズム
      ],

    ],
    live_house: 10
  },
  {
    id: 12,
    date: '2007/09/29',
    name: 'インストアライブ',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        18, // エレクトロ・ワールド
        22, // チョコレイト・ディスコ
        7, // ジェニーはご機嫌ななめ
        24, // ポリリズム
      ],

    ],
    live_house: 11
  },
  {
    id: 13,
    date: '2007/09/30',
    name: 'インストアライブ',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        18, // エレクトロ・ワールド
        22, // チョコレイト・ディスコ
        20, // パーフェクトスター・パーフェクトスタイル
        24, // ポリリズム
      ],

    ],
    live_house: 12
  },
  {
    id: 14,
    date: '2007/10/06',
    name: 'インストアライブ',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        18, // エレクトロ・ワールド
        20, // パーフェクトスター・パーフェクトスタイル
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],

    ],
    live_house: 13
  },
  {
    id: 15,
    date: '2007/10/12',
    name: 'インストアライブ(女子限定）',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        18, // エレクトロ・ワールド
        16, // コンピューターシティ
        14, // ファンデーション
        24, // ポリリズム
        7, // ジェニーはご機嫌ななめ
      ],

    ],
    live_house: 14
  },
  {
    id: 16,
    date: '2007/10/13',
    name: 'インストアライブ',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        22, // チョコレイト・ディスコ
        10, // おいしいレシピ
        24, // ポリリズム
        5, // スウィートドーナッツ
        17, // Perfume
      ],

    ],
    live_house: 15
  },
  {
    id: 17,
    date: '2007/10/18',
    name: 'HOT WAVE presents SPECIAL LIVE 2007',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        18, // エレクトロ・ワールド
        20, // パーフェクトスター・パーフェクトスタイル
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],

    ],
    live_house: 16
  },
  {
    id: 18,
    date: '2007/10/31',
    name: '感謝！感激！ポリ荒らし！～あらためまして、Perfumeです～',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
        10, // おいしいレシピ
        15, // コンピュータードライビング
        MC,
        178, // カウンターアトラクション
        3, // 彼氏募集中
        7, // ジェニーはご機嫌ななめ
        MC,
        23, // Twinkle Snow Powdery Snow
        12, // 引力
        16, // コンピューターシティ
        182, // Perfumeの掟
        MC,
        13, // リニアモーターガール
        20, // パーフェクトスター・パーフェクトスタイル
        18, // エレクトロ・ワールド
        MC,
        22, // チョコレイト・ディスコ
        5, // スウィートドーナッツ
        17, // Perfume
      ],
      [
        8, // モノクロームエフェクト
        25, // SEVENTH HEAVEN
      ],

    ],
    live_house: 17
  },
  {
    id: 19,
    date: '2007/11/01',
    name: '感謝！感激！ポリ荒らし！～あらためまして、Perfumeです～',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
        10, // おいしいレシピ
        15, // コンピュータードライビング
        MC,
        178, // カウンターアトラクション
        3, // 彼氏募集中
        7, // ジェニーはご機嫌ななめ
        MC,
        23, // Twinkle Snow Powdery Snow
        12, // 引力
        16, // コンピューターシティ
        182, // Perfumeの掟
        MC,
        18, // エレクトロ・ワールド
        20, // パーフェクトスター・パーフェクトスタイル
        MC,
        22, // チョコレイト・ディスコ
        5, // スウィートドーナッツ
        17, // Perfume
      ],
      [
        11, // ビタミンドロップ
        25, // SEVENTH HEAVEN
      ],

    ],
    live_house: 18
  },
  {
    id: 20,
    date: '2007/11/03',
    name: '感謝！感激！ポリ荒らし！～あらためまして、Perfumeです～',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
        10, // おいしいレシピ
        15, // コンピュータードライビング
        MC,
        178, // カウンターアトラクション
        3, // 彼氏募集中
        7, // ジェニーはご機嫌ななめ
        MC,
        23, // Twinkle Snow Powdery Snow
        12, // 引力
        16, // コンピューターシティ
        182, // Perfumeの掟
        MC,
        18, // エレクトロ・ワールド
        20, // パーフェクトスター・パーフェクトスタイル
        MC,
        22, // チョコレイト・ディスコ
        5, // スウィートドーナッツ
        17, // Perfume
      ],
      [
        14, // ファンデーション
        25, // SEVENTH HEAVEN
      ],

    ],
    live_house: 19
  },
  {
    id: 21,
    date: '2007/11/08',
    name: 'Perfume～SEVENTH HEAVEN イイ気分♪～',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
        10, // おいしいレシピ
        15, // コンピュータードライビング
        MC,
        140, // イミテーションワールド
        178, // カウンターアトラクション
        3, // 彼氏募集中
        7, // ジェニーはご機嫌ななめ
        MC,
        23, // Twinkle Snow Powdery Snow
        12, // 引力
        16, // コンピューターシティ
        182, // Perfumeの掟
        18, // エレクトロ・ワールド
        20, // パーフェクトスター・パーフェクトスタイル
        MC,
        22, // チョコレイト・ディスコ
        5, // スウィートドーナッツ
        17, // Perfume
      ],
      [
        1, // OMAJINAI★ペロリ
        25, // SEVENTH HEAVEN
      ],
      [
        19, // wonder2
      ],

    ],
    live_house: 20
  },
  {
    id: 22,
    date: '2007/12/01',
    name: 'Act Against AIDS',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
      ],

    ],
    live_house: 21
  },
  {
    id: 23,
    date: '2007/12/28',
    name: 'COUNTDOWN JAPAN',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
        16, // コンピューターシティ
        MC,
        23, // Twinkle Snow Powdery Snow
        7, // ジェニーはご機嫌ななめ
        MC,
        18, // エレクトロ・ワールド
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 22
  },
  {
    id: 24,
    date: '2007/12/29',
    name: 'COUNTDOWN JAPAN',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
        16, // コンピューターシティ
        MC,
        23, // Twinkle Snow Powdery Snow
        7, // ジェニーはご機嫌ななめ
        MC,
        18, // エレクトロ・ワールド
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 23
  },
  {
    id: 25,
    date: '2007/12/31',
    name: 'Perfume まさかのカウントダウン!?～リ○ッドルーム あの夜をもう一度 in Zepp Tokyo～',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
        10, // おいしいレシピ
        15, // コンピュータードライビング
        MC,
        140, // イミテーションワールド
        178, // カウンターアトラクション
        3, // 彼氏募集中
        MC,
        7, // ジェニーはご機嫌ななめ
        14, // ファンデーション
        MC,
        16, // コンピューターシティ
        24, // ポリリズム
        182, // Perfumeの掟
        MC,
        18, // エレクトロ・ワールド
        20, // パーフェクトスター・パーフェクトスタイル
        MC,
        22, // チョコレイト・ディスコ
        5, // スウィートドーナッツ
        17, // Perfume
      ],
      [
        29, // Baby cruising Love
        25, // SEVENTH HEAVEN
      ],

    ],
    live_house: 24
  },
  {
    id: 26,
    date: '2008/01/26',
    name: 'インストアライブ',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
        10, // おいしいレシピ
        MC,
        23, // Twinkle Snow Powdery Snow
        22, // チョコレイト・ディスコ
        MC,
        29, // Baby cruising Love
        25, // SEVENTH HEAVEN
      ],

    ],
    live_house: 25
  },
  {
    id: 27,
    date: '2008/02/02',
    name: 'インストアライブ',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
        18, // エレクトロ・ワールド
        MC,
        20, // パーフェクトスター・パーフェクトスタイル
        14, // ファンデーション
        MC,
        29, // Baby cruising Love
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 26
  },
  {
    id: 28,
    date: '2008/02/03',
    name: '「BcL/マカロニ」ミニライブ',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        23, // Twinkle Snow Powdery Snow
        24, // ポリリズム
        MC,
        22, // チョコレイト・ディスコ
        7, // ジェニーはご機嫌ななめ
        MC,
        29, // Baby cruising Love
        MC,
        // 疲労,
      ],

    ],
    live_house: 27
  },
  {
    id: 29,
    date: '2008/02/12',
    name: 'Perfume ～ソックス フィックス マックス～',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        25, // SEVENTH HEAVEN
        18, // エレクトロ・ワールド
        5, // スウィートドーナッツ
        MC,
        29, // Baby cruising Love
        23, // Twinkle Snow Powdery Snow
        14, // ファンデーション
        30, // マカロニ
        MC,
        140, // イミテーションワールド
        20, // パーフェクトスター・パーフェクトスタイル
        22, // チョコレイト・ディスコ
        // (メドレー),
        11, // ビタミンドロップ
        15, // コンピュータードライビング
        13, // リニアモーターガール
        6, // シークレットメッセージ
        11, // ビタミンドロップ
        12, // 引力
        8, // モノクロームエフェクト
        9, // エレベーター
        7, // ジェニーはご機嫌ななめ
        MC,
        24, // ポリリズム
        16, // コンピューターシティ
        10, // おいしいレシピ
        17, // Perfume
      ],
      [
        MC,
        178, // カウンターアトラクション
        // スーパージェットシューズ,
        19, // wonder2
      ],

    ],
    live_house: 28
  },
  {
    id: 30,
    date: '2008/02/13',
    name: 'P. T. A. 発足前夜祭「パッと楽しく遊ぼうの会」',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        29, // Baby cruising Love
        16, // コンピューターシティ
        14, // ファンデーション
        MC,
        // プレゼント,
        // クイズ,
        24, // ポリリズム
        3, // 彼氏募集中
        17, // Perfume
      ],
      [
        30, // マカロニ
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 20
  },
  {
    id: 31,
    date: '2008/02/16',
    name: '「BcL/マカロニ」ミニライブ',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        22, // チョコレイト・ディスコ
        20, // パーフェクトスター・パーフェクトスタイル
        MC,
        30, // マカロニ
        14, // ファンデーション
        MC,
        29, // Baby cruising Love
        24, // ポリリズム
      ],

    ],
    live_house: 29
  },
  {
    id: 32,
    date: '2008/02/17',
    name: '「BcL/マカロニ」ミニライブ',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        25, // SEVENTH HEAVEN
        22, // チョコレイト・ディスコ
        MC,
        7, // ジェニーはご機嫌ななめ
        30, // マカロニ
        MC,
        29, // Baby cruising Love
        24, // ポリリズム
        MC,
      ],

    ],
    live_house: 30
  },
  {
    id: 33,
    date: '2008/02/22',
    name: '「BcL/マカロニ」ミニライブ(女子限定)',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        MC,
        24, // ポリリズム
        MC,
        30, // マカロニ
        7, // ジェニーはご機嫌ななめ
        MC,
        29, // Baby cruising Love
        25, // SEVENTH HEAVEN
        MC,
      ],

    ],
    live_house: 31
  },
  {
    id: 34,
    date: '2008/02/23',
    name: '「BcL/マカロニ」ミニライブ',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
        MC,
        20, // パーフェクトスター・パーフェクトスタイル
        30, // マカロニ
        MC,
        29, // Baby cruising Love
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 9
  },
  {
    id: 35,
    date: '2008/02/23',
    name: '「BcL/マカロニ」ミニライブ',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        29, // Baby cruising Love
        MC,
        24, // ポリリズム
        16, // コンピューターシティ
        MC,
        18, // エレクトロ・ワールド
        25, // SEVENTH HEAVEN
      ],

    ],
    live_house: 9
  },
  {
    id: 36,
    date: '2008/02/23',
    name: '「BcL/マカロニ」ミニライブ',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
        18, // エレクトロ・ワールド
        MC,
        29, // Baby cruising Love
        30, // マカロニ
        MC,
        7, // ジェニーはご機嫌ななめ
        17, // Perfume
      ],

    ],
    live_house: 15
  },
  {
    id: 37,
    date: '2008/04/04',
    name: 'ロマンポルシェ。10周年＆BEST ALBUM発売記念コンサート',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
        18, // エレクトロ・ワールド
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 20
  },
  {
    id: 38,
    date: '2008/04/27',
    name: 'Perfume First Tour『GAME』',
    event_type: 'LIVE',
    tour_id: 1,
    sub_name: '大阪公演',
    songs: [
      [
        34, // GAME
        18, // エレクトロ・ワールド
        16, // コンピューターシティ
        15, // コンピュータードライビング
        MC,
        23, // Twinkle Snow Powdery Snow
        29, // Baby cruising Love
        14, // ファンデーション
        38, // Butterfly
        36, // Take me Take me
        37, // シークレットシークレット
        30, // マカロニ
        MC,
        7, // ジェニーはご機嫌ななめ
        24, // ポリリズム
        22, // チョコレイト・ディスコ
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
      ],
      [
        35, // セラミックガール
        25, // SEVENTH HEAVEN
        19, // wonder2
      ],

    ],
    live_house: 32
  },
  {
    id: 39,
    date: '2008/04/29',
    name: 'Perfume First Tour『GAME』',
    event_type: 'LIVE',
    tour_id: 1,
    sub_name: '香川公演',
    songs: [
      [
        34, // GAME
        18, // エレクトロ・ワールド
        16, // コンピューターシティ
        15, // コンピュータードライビング
        MC,
        23, // Twinkle Snow Powdery Snow
        29, // Baby cruising Love
        14, // ファンデーション
        38, // Butterfly
        36, // Take me Take me
        37, // シークレットシークレット
        30, // マカロニ
        MC,
        7, // ジェニーはご機嫌ななめ
        24, // ポリリズム
        22, // チョコレイト・ディスコ
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
      ],
      [
        35, // セラミックガール
        178, // カウンターアトラクション
        19, // wonder2
      ],

    ],
    live_house: 33
  },
  {
    id: 40,
    date: '2008/05/01',
    name: 'Perfume First Tour『GAME』',
    event_type: 'LIVE',
    tour_id: 1,
    sub_name: '広島公演',
    songs: [
      [
        34, // GAME
        18, // エレクトロ・ワールド
        16, // コンピューターシティ
        15, // コンピュータードライビング
        MC,
        23, // Twinkle Snow Powdery Snow
        29, // Baby cruising Love
        14, // ファンデーション
        38, // Butterfly
        36, // Take me Take me
        37, // シークレットシークレット
        30, // マカロニ
        MC,
        7, // ジェニーはご機嫌ななめ
        24, // ポリリズム
        22, // チョコレイト・ディスコ
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
      ],
      [
        35, // セラミックガール
        3, // 彼氏募集中
        19, // wonder2
      ],

    ],
    live_house: 34
  },
  {
    id: 41,
    date: '2008/05/02',
    name: 'Perfume First Tour『GAME』',
    event_type: 'LIVE',
    tour_id: 1,
    sub_name: '福岡公演',
    songs: [
      [
        34, // GAME
        18, // エレクトロ・ワールド
        16, // コンピューターシティ
        15, // コンピュータードライビング
        MC,
        23, // Twinkle Snow Powdery Snow
        29, // Baby cruising Love
        14, // ファンデーション
        38, // Butterfly
        36, // Take me Take me
        37, // シークレットシークレット
        30, // マカロニ
        MC,
        7, // ジェニーはご機嫌ななめ
        24, // ポリリズム
        22, // チョコレイト・ディスコ
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
      ],
      [
        35, // セラミックガール
        178, // カウンターアトラクション
        19, // wonder2
      ],

    ],
    live_house: 35
  },
  {
    id: 42,
    date: '2008/05/04',
    name: 'Perfume First Tour『GAME』',
    event_type: 'LIVE',
    tour_id: 1,
    sub_name: '東京公演',
    songs: [
      [
        34, // GAME
        18, // エレクトロ・ワールド
        16, // コンピューターシティ
        15, // コンピュータードライビング
        MC,
        23, // Twinkle Snow Powdery Snow
        29, // Baby cruising Love
        14, // ファンデーション
        38, // Butterfly
        36, // Take me Take me
        37, // シークレットシークレット
        30, // マカロニ
        MC,
        7, // ジェニーはご機嫌ななめ
        24, // ポリリズム
        22, // チョコレイト・ディスコ
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
      ],
      [
        35, // セラミックガール
        12, // 引力
        19, // wonder2
      ],

    ],
    live_house: 24
  },
  {
    id: 43,
    date: '2008/05/06',
    name: 'Perfume First Tour『GAME』',
    event_type: 'LIVE',
    tour_id: 1,
    sub_name: '愛知公演',
    songs: [
      [
        34, // GAME
        18, // エレクトロ・ワールド
        16, // コンピューターシティ
        15, // コンピュータードライビング
        MC,
        23, // Twinkle Snow Powdery Snow
        29, // Baby cruising Love
        14, // ファンデーション
        38, // Butterfly
        36, // Take me Take me
        37, // シークレットシークレット
        30, // マカロニ
        MC,
        7, // ジェニーはご機嫌ななめ
        24, // ポリリズム
        22, // チョコレイト・ディスコ
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
      ],
      [
        35, // セラミックガール
        8, // モノクロームエフェクト
        19, // wonder2
      ],

    ],
    live_house: 36
  },
  {
    id: 44,
    date: '2008/05/10',
    name: 'Perfume First Tour『GAME』',
    event_type: 'LIVE',
    tour_id: 1,
    sub_name: '新潟公演',
    songs: [
      [
        34, // GAME
        18, // エレクトロ・ワールド
        16, // コンピューターシティ
        15, // コンピュータードライビング
        MC,
        23, // Twinkle Snow Powdery Snow
        29, // Baby cruising Love
        14, // ファンデーション
        38, // Butterfly
        36, // Take me Take me
        37, // シークレットシークレット
        30, // マカロニ
        MC,
        7, // ジェニーはご機嫌ななめ
        24, // ポリリズム
        22, // チョコレイト・ディスコ
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
      ],
      [
        35, // セラミックガール
        25, // SEVENTH HEAVEN
        19, // wonder2
      ],

    ],
    live_house: 37
  },
  {
    id: 45,
    date: '2008/05/16',
    name: 'Perfume First Tour『GAME』',
    event_type: 'LIVE',
    tour_id: 1,
    sub_name: '宮城公演',
    songs: [
      [
        34, // GAME
        18, // エレクトロ・ワールド
        16, // コンピューターシティ
        15, // コンピュータードライビング
        MC,
        23, // Twinkle Snow Powdery Snow
        29, // Baby cruising Love
        14, // ファンデーション
        38, // Butterfly
        36, // Take me Take me
        37, // シークレットシークレット
        30, // マカロニ
        MC,
        7, // ジェニーはご機嫌ななめ
        24, // ポリリズム
        22, // チョコレイト・ディスコ
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
      ],
      [
        35, // セラミックガール
        8, // モノクロームエフェクト
        19, // wonder2
      ],

    ],
    live_house: 38
  },
  {
    id: 46,
    date: '2008/05/18',
    name: 'Perfume First Tour『GAME』',
    event_type: 'LIVE',
    tour_id: 1,
    sub_name: '北海道公演',
    songs: [
      [
        34, // GAME
        18, // エレクトロ・ワールド
        16, // コンピューターシティ
        15, // コンピュータードライビング
        MC,
        23, // Twinkle Snow Powdery Snow
        29, // Baby cruising Love
        14, // ファンデーション
        38, // Butterfly
        36, // Take me Take me
        37, // シークレットシークレット
        30, // マカロニ
        MC,
        7, // ジェニーはご機嫌ななめ
        24, // ポリリズム
        22, // チョコレイト・ディスコ
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
      ],
      [
        35, // セラミックガール
        5, // スウィートドーナッツ
        19, // wonder2
      ],

    ],
    live_house: 39
  },
  {
    id: 47,
    date: '2008/05/31',
    name: 'Perfume First Tour『GAME』',
    event_type: 'LIVE',
    tour_id: 1,
    sub_name: '神奈川公演',
    songs: [
      [
        34, // GAME
        18, // エレクトロ・ワールド
        16, // コンピューターシティ
        15, // コンピュータードライビング
        MC,
        23, // Twinkle Snow Powdery Snow
        29, // Baby cruising Love
        14, // ファンデーション
        38, // Butterfly
        36, // Take me Take me
        37, // シークレットシークレット
        30, // マカロニ
        MC,
        7, // ジェニーはご機嫌ななめ
        24, // ポリリズム
        22, // チョコレイト・ディスコ
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
      ],
      [
        35, // セラミックガール
        11, // ビタミンドロップ
        19, // wonder2
      ],

    ],
    live_house: 40
  },
  {
    id: 48,
    date: '2008/06/01',
    name: 'Perfume First Tour『GAME』追加公演',
    event_type: 'LIVE',
    tour_id: 1,
    sub_name: '神奈川公演',
    songs: [
      [
        34, // GAME
        18, // エレクトロ・ワールド
        16, // コンピューターシティ
        15, // コンピュータードライビング
        MC,
        23, // Twinkle Snow Powdery Snow
        29, // Baby cruising Love
        14, // ファンデーション
        38, // Butterfly
        36, // Take me Take me
        37, // シークレットシークレット
        30, // マカロニ
        MC,
        7, // ジェニーはご機嫌ななめ
        24, // ポリリズム
        22, // チョコレイト・ディスコ
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
      ],
      [
        35, // セラミックガール
        11, // ビタミンドロップ
        19, // wonder2
      ],

    ],
    live_house: 40
  },
  {
    id: 49,
    date: '2008/06/08',
    name: '渋谷エコライブ',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
        29, // Baby cruising Love
        MC,
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 41
  },
  {
    id: 50,
    date: '2008/06/21',
    name: 'Hot Stuff 30th Anniversary『BLACK AND BLUE』Perfume×SPECIAL OTHERS',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        37, // シークレットシークレット
        22, // チョコレイト・ディスコ
        MC,
        35, // セラミックガール
        29, // Baby cruising Love
        30, // マカロニ
        MC,
        25, // SEVENTH HEAVEN
        16, // コンピューターシティ
        MC,
        18, // エレクトロ・ワールド
        24, // ポリリズム
        17, // Perfume
      ],

    ],
    live_house: 24
  },
  {
    id: 51,
    date: '2008/06/22',
    name: '株式会社アミューズ 第30期定時株主総会',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
        29, // Baby cruising Love
        MC,
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 42
  },
  {
    id: 52,
    date: '2008/07/26',
    name: '美浜海遊祭 MUSIC WAVE 2008',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        34, // GAME
        24, // ポリリズム
        35, // セラミックガール
        MC,
        40, // love the world
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 43
  },
  {
    id: 53,
    date: '2008/08/02',
    name: 'ROCK IN JAPAN FES',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        34, // GAME
        37, // シークレットシークレット
        22, // チョコレイト・ディスコ
        MC,
        40, // love the world
        30, // マカロニ
        MC,
        18, // エレクトロ・ワールド
        24, // ポリリズム
      ],

    ],
    live_house: 44
  },
  {
    id: 54,
    date: '2008/08/03',
    name: 'GIRL POP FACTORY',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        34, // GAME
        18, // エレクトロ・ワールド
        MC,
        40, // love the world
        37, // シークレットシークレット
        25, // SEVENTH HEAVEN
        MC,
        5, // スウィートドーナッツ
        24, // ポリリズム
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 24
  },
  {
    id: 55,
    date: '2008/08/09',
    name: 'SUMMER SONIC',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        34, // GAME
        22, // チョコレイト・ディスコ
        MC,
        40, // love the world
        29, // Baby cruising Love
        MC,
        24, // ポリリズム
      ],

    ],
    live_house: 45
  },
  {
    id: 56,
    date: '2008/08/10',
    name: 'SUMMER SONIC',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        34, // GAME
        37, // シークレットシークレット
        MC,
        40, // love the world
        35, // セラミックガール
        MC,
        16, // コンピューターシティ
        24, // ポリリズム
      ],

    ],
    live_house: 46
  },
  {
    id: 57,
    date: '2008/08/23',
    name: 'SOUND MARINA 2008',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        34, // GAME
        24, // ポリリズム
        20, // パーフェクトスター・パーフェクトスタイル
        MC,
        40, // love the world
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 47
  },
  {
    id: 58,
    date: '2008/08/24',
    name: 'MONSTER baSH',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        34, // GAME
        18, // エレクトロ・ワールド
        22, // チョコレイト・ディスコ
        MC,
        40, // love the world
        16, // コンピューターシティ
        24, // ポリリズム
      ],

    ],
    live_house: 48
  },
  {
    id: 59,
    date: '2008/11/06',
    name: 'BUDOUKaaaaaaaaaaN!!!!!',
    event_type: 'LIVE',
    tour_id: 2,
    sub_name: '東京公演',
    songs: [
      [
        16, // コンピューターシティ
        41, // edge
        18, // エレクトロ・ワールド
        MC,
        33, // plastic smile
        40, // love the world
        30, // マカロニ
        MC,
        29, // Baby cruising Love
        36, // Take me Take me
        38, // Butterfly
        34, // GAME
        37, // シークレットシークレット
        20, // パーフェクトスター・パーフェクトスタイル
        MC,
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        MC,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        44, // Dream Fighter
        17, // Perfume
        19, // wonder2
      ],

    ],
    live_house: 21
  },
  {
    id: 60,
    date: '2008/11/07',
    name: 'BUDOUKaaaaaaaaaaN!!!!!',
    event_type: 'LIVE',
    tour_id: 2,
    sub_name: '東京公演',
    songs: [
      [
        16, // コンピューターシティ
        41, // edge
        18, // エレクトロ・ワールド
        MC,
        33, // plastic smile
        40, // love the world
        30, // マカロニ
        MC,
        29, // Baby cruising Love
        36, // Take me Take me
        38, // Butterfly
        34, // GAME
        37, // シークレットシークレット
        20, // パーフェクトスター・パーフェクトスタイル
        MC,
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        MC,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        44, // Dream Fighter
        17, // Perfume
        19, // wonder2
      ],

    ],
    live_house: 21
  },
  {
    id: 61,
    date: '2008/12/01',
    name: 'Act Against AIDS',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
        44, // Dream Fighter
      ],

    ],
    live_house: 21
  },
  {
    id: 62,
    date: '2008/12/28',
    name: 'COUNT DOWN JAPAN',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        34, // GAME
        40, // love the world
        20, // パーフェクトスター・パーフェクトスタイル
        MC,
        44, // Dream Fighter
        16, // コンピューターシティ
        MC,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],

    ],
    live_house: 49
  },
  {
    id: 63,
    date: '2008/12/29',
    name: 'COUNT DOWN JAPAN',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        34, // GAME
        40, // love the world
        20, // パーフェクトスター・パーフェクトスタイル
        MC,
        44, // Dream Fighter
        16, // コンピューターシティ
        MC,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],

    ],
    live_house: 50
  },
  {
    id: 64,
    date: '2009/01/25',
    name: 'オンタマカーニバル',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        40, // love the world
        37, // シークレットシークレット
        MC,
        29, // Baby cruising Love
        30, // マカロニ
        MC,
        22, // チョコレイト・ディスコ
        44, // Dream Fighter
        24, // ポリリズム
      ],

    ],
    live_house: 51
  },
  {
    id: 65,
    date: '2009/02/29',
    name: 'REQUESTAGE 7',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        37, // シークレットシークレット
        20, // パーフェクトスター・パーフェクトスタイル
        MC,
        22, // チョコレイト・ディスコ
        48, // ワンルーム・ディスコ
        24, // ポリリズム
      ],

    ],
    live_house: 52
  },
  {
    id: 66,
    date: '2009/05/09',
    name: 'ディスコ！ディスコ！ディスコ！',
    event_type: 'LIVE',
    tour_id: 3,
    sub_name: '東京公演',
    songs: [
      [
        48, // ワンルーム・ディスコ
        24, // ポリリズム
        37, // シークレットシークレット
        41, // edge
        MC,
        16, // コンピューターシティ
        33, // plastic smile
        30, // マカロニ
        MC,
        40, // love the world
        25, // SEVENTH HEAVEN
        54, // NIGHT FLIGHT
        // (YoYoGi DISCO MIX),
        29, // Baby cruising Love
        34, // GAME
        15, // コンピュータードライビング
        10, // おいしいレシピ
        13, // リニアモーターガール
        35, // セラミックガール
        5, // スウィートドーナッツ
        23, // Twinkle Snow Powdery Snow
        44, // Dream Fighter
        20, // パーフェクトスター・パーフェクトスタイル
        7, // ジェニーはご機嫌ななめ
        MC,
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],
      [
        MC,
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 53
  },
  {
    id: 67,
    date: '2009/05/10',
    name: 'ディスコ！ディスコ！ディスコ！',
    event_type: 'LIVE',
    tour_id: 3,
    sub_name: '東京公演',
    songs: [
      [
        48, // ワンルーム・ディスコ
        24, // ポリリズム
        37, // シークレットシークレット
        41, // edge
        MC,
        16, // コンピューターシティ
        33, // plastic smile
        30, // マカロニ
        MC,
        40, // love the world
        25, // SEVENTH HEAVEN
        54, // NIGHT FLIGHT
        // (YoYoGi DISCO MIX),
        29, // Baby cruising Love
        // GMAE,
        15, // コンピュータードライビング
        10, // おいしいレシピ
        13, // リニアモーターガール
        35, // セラミックガール
        5, // スウィートドーナッツ
        23, // Twinkle Snow Powdery Snow
        44, // Dream Fighter
        20, // パーフェクトスター・パーフェクトスタイル
        7, // ジェニーはご機嫌ななめ
        MC,
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],
      [
        MC,
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 53
  },
  {
    id: 68,
    date: '2009/07/04',
    name: 'Hot Stuff 30th Anniversary Special Live"out of our heads"',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        // (木村カエラ∞Perfume),
        MC,
        22, // チョコレイト・ディスコ
        MC,
        // JASPER,
      ],

    ],
    live_house: 51
  },
  {
    id: 69,
    date: '2009/07/31',
    name: 'ROCK IN JAPAN FES',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        // edge(出囃子),
        48, // ワンルーム・ディスコ
        54, // NIGHT FLIGHT
        MC,
        44, // Dream Fighter
        30, // マカロニ
        MC,
        57, // I still love U
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],

    ],
    live_house: 54
  },
  {
    id: 70,
    date: '2009/08/07',
    name: 'Perfume Second Tour 2009『直角二等辺三角形TOUR』',
    event_type: 'LIVE',
    tour_id: 4,
    sub_name: '埼玉公演',
    songs: [
      [
        52, // Take off
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        44, // Dream Fighter
        40, // love the world
        MC,
        56, // Zero Gravity
        30, // マカロニ
        25, // SEVENTH HEAVEN
        55, // Kiss and Music
        59, // Speed of Sound
        41, // edge
        37, // シークレットシークレット
        57, // I still love U
        29, // Baby cruising Love
        MC,
        48, // ワンルーム・ディスコ
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 55
  },
  {
    id: 71,
    date: '2009/08/12',
    name: 'Perfume Second Tour 2009『直角二等辺三角形TOUR』',
    event_type: 'LIVE',
    tour_id: 4,
    sub_name: '福岡公演',
    songs: [
      [
        52, // Take off
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        44, // Dream Fighter
        40, // love the world
        MC,
        56, // Zero Gravity
        30, // マカロニ
        25, // SEVENTH HEAVEN
        55, // Kiss and Music
        59, // Speed of Sound
        41, // edge
        37, // シークレットシークレット
        57, // I still love U
        29, // Baby cruising Love
        MC,
        48, // ワンルーム・ディスコ
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 56
  },
  {
    id: 72,
    date: '2009/08/13',
    name: 'Perfume Second Tour 2009『直角二等辺三角形TOUR』',
    event_type: 'LIVE',
    tour_id: 4,
    sub_name: '福岡公演',
    songs: [
      [
        52, // Take off
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        44, // Dream Fighter
        40, // love the world
        MC,
        56, // Zero Gravity
        30, // マカロニ
        25, // SEVENTH HEAVEN
        55, // Kiss and Music
        59, // Speed of Sound
        41, // edge
        37, // シークレットシークレット
        57, // I still love U
        29, // Baby cruising Love
        MC,
        48, // ワンルーム・ディスコ
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 56
  },
  {
    id: 73,
    date: '2009/08/15',
    name: 'Perfume Second Tour 2009『直角二等辺三角形TOUR』',
    event_type: 'LIVE',
    tour_id: 4,
    sub_name: '広島公演',
    songs: [
      [
        52, // Take off
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        44, // Dream Fighter
        40, // love the world
        MC,
        56, // Zero Gravity
        30, // マカロニ
        25, // SEVENTH HEAVEN
        55, // Kiss and Music
        59, // Speed of Sound
        41, // edge
        37, // シークレットシークレット
        57, // I still love U
        29, // Baby cruising Love
        MC,
        48, // ワンルーム・ディスコ
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 57
  },
  {
    id: 74,
    date: '2009/08/16',
    name: 'Perfume Second Tour 2009『直角二等辺三角形TOUR』',
    event_type: 'LIVE',
    tour_id: 4,
    sub_name: '愛媛公演',
    songs: [
      [
        52, // Take off
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        44, // Dream Fighter
        40, // love the world
        MC,
        56, // Zero Gravity
        30, // マカロニ
        25, // SEVENTH HEAVEN
        55, // Kiss and Music
        59, // Speed of Sound
        41, // edge
        37, // シークレットシークレット
        57, // I still love U
        29, // Baby cruising Love
        MC,
        48, // ワンルーム・ディスコ
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 58
  },
  {
    id: 75,
    date: '2009/08/21',
    name: 'Perfume Second Tour 2009『直角二等辺三角形TOUR』',
    event_type: 'LIVE',
    tour_id: 4,
    sub_name: '石川公演',
    songs: [
      [
        52, // Take off
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        44, // Dream Fighter
        40, // love the world
        MC,
        56, // Zero Gravity
        30, // マカロニ
        25, // SEVENTH HEAVEN
        55, // Kiss and Music
        59, // Speed of Sound
        41, // edge
        37, // シークレットシークレット
        57, // I still love U
        29, // Baby cruising Love
        MC,
        48, // ワンルーム・ディスコ
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 59
  },
  {
    id: 76,
    date: '2009/08/22',
    name: 'Perfume Second Tour 2009『直角二等辺三角形TOUR』',
    event_type: 'LIVE',
    tour_id: 4,
    sub_name: '新潟公演',
    songs: [
      [
        52, // Take off
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        44, // Dream Fighter
        40, // love the world
        MC,
        56, // Zero Gravity
        30, // マカロニ
        25, // SEVENTH HEAVEN
        55, // Kiss and Music
        59, // Speed of Sound
        41, // edge
        37, // シークレットシークレット
        57, // I still love U
        29, // Baby cruising Love
        MC,
        48, // ワンルーム・ディスコ
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 60
  },
  {
    id: 77,
    date: '2009/08/26',
    name: 'Perfume Second Tour 2009『直角二等辺三角形TOUR』',
    event_type: 'LIVE',
    tour_id: 4,
    sub_name: '北海道公演',
    songs: [
      [
        52, // Take off
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        44, // Dream Fighter
        40, // love the world
        MC,
        56, // Zero Gravity
        30, // マカロニ
        25, // SEVENTH HEAVEN
        55, // Kiss and Music
        59, // Speed of Sound
        41, // edge
        37, // シークレットシークレット
        57, // I still love U
        29, // Baby cruising Love
        MC,
        48, // ワンルーム・ディスコ
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 61
  },
  {
    id: 78,
    date: '2009/08/27',
    name: 'Perfume Second Tour 2009『直角二等辺三角形TOUR』',
    event_type: 'LIVE',
    tour_id: 4,
    sub_name: '北海道公演',
    songs: [
      [
        52, // Take off
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        44, // Dream Fighter
        40, // love the world
        MC,
        56, // Zero Gravity
        30, // マカロニ
        25, // SEVENTH HEAVEN
        55, // Kiss and Music
        59, // Speed of Sound
        41, // edge
        37, // シークレットシークレット
        57, // I still love U
        29, // Baby cruising Love
        MC,
        48, // ワンルーム・ディスコ
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 61
  },
  {
    id: 79,
    date: '2009/08/29',
    name: 'Perfume Second Tour 2009『直角二等辺三角形TOUR』',
    event_type: 'LIVE',
    tour_id: 4,
    sub_name: '宮城公演',
    songs: [
      [
        52, // Take off
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        44, // Dream Fighter
        40, // love the world
        MC,
        56, // Zero Gravity
        30, // マカロニ
        25, // SEVENTH HEAVEN
        55, // Kiss and Music
        59, // Speed of Sound
        41, // edge
        37, // シークレットシークレット
        57, // I still love U
        29, // Baby cruising Love
        MC,
        48, // ワンルーム・ディスコ
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 62
  },
  {
    id: 80,
    date: '2009/08/30',
    name: 'Perfume Second Tour 2009『直角二等辺三角形TOUR』',
    event_type: 'LIVE',
    tour_id: 4,
    sub_name: '宮城公演',
    songs: [
      [
        52, // Take off
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        44, // Dream Fighter
        40, // love the world
        MC,
        56, // Zero Gravity
        30, // マカロニ
        25, // SEVENTH HEAVEN
        55, // Kiss and Music
        59, // Speed of Sound
        41, // edge
        37, // シークレットシークレット
        57, // I still love U
        29, // Baby cruising Love
        MC,
        48, // ワンルーム・ディスコ
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 62
  },
  {
    id: 81,
    date: '2009/09/20',
    name: 'SCHOOL OF LOCK! LIVE TOUR “YOUNG FLAG 09”',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        // edge(出囃子),
        48, // ワンルーム・ディスコ
        57, // I still love U
        MC,
        54, // NIGHT FLIGHT
        40, // love the world
        MC,
        44, // Dream Fighter
        24, // ポリリズム
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 24
  },
  {
    id: 82,
    date: '2009/09/26',
    name: 'Perfume Second Tour 2009『直角二等辺三角形TOUR』',
    event_type: 'LIVE',
    tour_id: 4,
    sub_name: '愛知公演',
    songs: [
      [
        52, // Take off
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        44, // Dream Fighter
        40, // love the world
        MC,
        56, // Zero Gravity
        30, // マカロニ
        25, // SEVENTH HEAVEN
        55, // Kiss and Music
        59, // Speed of Sound
        41, // edge
        37, // シークレットシークレット
        16, // コンピューターシティ
        57, // I still love U
        MC,
        48, // ワンルーム・ディスコ
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 63
  },
  {
    id: 83,
    date: '2009/09/27',
    name: 'Perfume Second Tour 2009『直角二等辺三角形TOUR』',
    event_type: 'LIVE',
    tour_id: 4,
    sub_name: '愛知公演',
    songs: [
      [
        52, // Take off
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        44, // Dream Fighter
        40, // love the world
        MC,
        56, // Zero Gravity
        30, // マカロニ
        25, // SEVENTH HEAVEN
        55, // Kiss and Music
        59, // Speed of Sound
        41, // edge
        37, // シークレットシークレット
        16, // コンピューターシティ
        57, // I still love U
        MC,
        48, // ワンルーム・ディスコ
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        33, // plastic smile
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 63
  },
  {
    id: 84,
    date: '2009/10/10',
    name: 'Perfume Second Tour 2009『直角二等辺三角形TOUR』',
    event_type: 'LIVE',
    tour_id: 4,
    sub_name: '大阪公演',
    songs: [
      [
        52, // Take off
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        44, // Dream Fighter
        40, // love the world
        MC,
        56, // Zero Gravity
        30, // マカロニ
        25, // SEVENTH HEAVEN
        55, // Kiss and Music
        59, // Speed of Sound
        41, // edge
        37, // シークレットシークレット
        16, // コンピューターシティ
        57, // I still love U
        MC,
        48, // ワンルーム・ディスコ
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        33, // plastic smile
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 52
  },
  {
    id: 85,
    date: '2009/10/11',
    name: 'Perfume Second Tour 2009『直角二等辺三角形TOUR』',
    event_type: 'LIVE',
    tour_id: 4,
    sub_name: '大阪公演',
    songs: [
      [
        52, // Take off
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        44, // Dream Fighter
        40, // love the world
        MC,
        56, // Zero Gravity
        30, // マカロニ
        25, // SEVENTH HEAVEN
        55, // Kiss and Music
        59, // Speed of Sound
        41, // edge
        37, // シークレットシークレット
        16, // コンピューターシティ
        57, // I still love U
        MC,
        48, // ワンルーム・ディスコ
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        33, // plastic smile
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 52
  },
  {
    id: 86,
    date: '2009/10/14',
    name: 'Perfume Second Tour 2009『直角二等辺三角形TOUR』',
    event_type: 'LIVE',
    tour_id: 4,
    sub_name: '神奈川公演',
    songs: [
      [
        52, // Take off
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        44, // Dream Fighter
        40, // love the world
        MC,
        56, // Zero Gravity
        30, // マカロニ
        25, // SEVENTH HEAVEN
        55, // Kiss and Music
        59, // Speed of Sound
        41, // edge
        37, // シークレットシークレット
        16, // コンピューターシティ
        57, // I still love U
        MC,
        48, // ワンルーム・ディスコ
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        33, // plastic smile
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 51
  },
  {
    id: 87,
    date: '2009/10/15',
    name: 'Perfume Second Tour 2009『直角二等辺三角形TOUR』',
    event_type: 'LIVE',
    tour_id: 4,
    sub_name: '神奈川公演',
    songs: [
      [
        52, // Take off
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        44, // Dream Fighter
        40, // love the world
        MC,
        56, // Zero Gravity
        30, // マカロニ
        25, // SEVENTH HEAVEN
        55, // Kiss and Music
        59, // Speed of Sound
        41, // edge
        37, // シークレットシークレット
        16, // コンピューターシティ
        57, // I still love U
        MC,
        48, // ワンルーム・ディスコ
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        20, // パーフェクトスター・パーフェクトスタイル
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 51
  },
  {
    id: 88,
    date: '2009/10/29',
    name: 'Perfume Second Tour 2009『直角二等辺三角形TOUR』追加公演',
    event_type: 'LIVE',
    tour_id: 4,
    sub_name: '神奈川公演',
    songs: [
      [
        52, // Take off
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        44, // Dream Fighter
        40, // love the world
        MC,
        56, // Zero Gravity
        30, // マカロニ
        25, // SEVENTH HEAVEN
        55, // Kiss and Music
        59, // Speed of Sound
        41, // edge
        37, // シークレットシークレット
        16, // コンピューターシティ
        57, // I still love U
        MC,
        48, // ワンルーム・ディスコ
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        33, // plastic smile
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 51
  },
  {
    id: 89,
    date: '2009/10/30',
    name: 'Perfume Second Tour 2009『直角二等辺三角形TOUR』追加公演',
    event_type: 'LIVE',
    tour_id: 4,
    sub_name: '神奈川公演',
    songs: [
      [
        52, // Take off
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        44, // Dream Fighter
        40, // love the world
        MC,
        56, // Zero Gravity
        30, // マカロニ
        25, // SEVENTH HEAVEN
        55, // Kiss and Music
        59, // Speed of Sound
        41, // edge
        37, // シークレットシークレット
        16, // コンピューターシティ
        57, // I still love U
        MC,
        48, // ワンルーム・ディスコ
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],
      [
        33, // plastic smile
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 51
  },
  {
    id: 90,
    date: '2009/12/01',
    name: 'Act Against AIDS',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        48, // ワンルーム・ディスコ
        54, // NIGHT FLIGHT
        MC,
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 21
  },
  {
    id: 91,
    date: '2009/12/19',
    name: '木村カエラ presents『オンナク祭オトコク祭 2009』',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        57, // I still love U
        MC,
        40, // love the world
        44, // Dream Fighter
        PTA,
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],

    ],
    live_house: 28
  },
  {
    id: 92,
    date: '2009/12/28',
    name: 'COUNTDOWN JAPAN',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        57, // I still love U
        48, // ワンルーム・ディスコ
        18, // エレクトロ・ワールド
        MC,
        44, // Dream Fighter
        56, // Zero Gravity
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],

    ],
    live_house: 49
  },
  {
    id: 93,
    date: '2010/03/07',
    name: 'P.T.A. presents Perfume 結成10周年!!!! 『パッと楽しく遊ぼうの会』ライブハウストゥワ―',
    event_type: 'LIVE',
    tour_id: 5,
    sub_name: '神奈川公演',
    songs: [
      [
        58, // The best thing
        57, // I still love U
        44, // Dream Fighter
        MC,
        62, // ナチュラルに恋して
        // (Perfumeメドレー),
        140, // イミテーションワールド
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        15, // コンピュータードライビング
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
      ],
      [
        10, // おいしいレシピ
        19, // wonder2
      ],

    ],
    live_house: 40
  },
  {
    id: 94,
    date: '2010/03/09',
    name: 'P.T.A. presents Perfume 結成10周年!!!!『パッと楽しく遊ぼうの会』ライブハウストゥワ―',
    event_type: 'LIVE',
    tour_id: 5,
    sub_name: '愛知公演',
    songs: [
      [
        58, // The best thing
        57, // I still love U
        44, // Dream Fighter
        MC,
        62, // ナチュラルに恋して
        // (Perfumeメドレー),
        140, // イミテーションワールド
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        15, // コンピュータードライビング
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],
      [
        10, // おいしいレシピ
        19, // wonder2
      ],

    ],
    live_house: 36
  },
  {
    id: 95,
    date: '2010/03/10',
    name: 'P.T.A. presents Perfume 結成10周年!!!!『パッと楽しく遊ぼうの会』ライブハウストゥワ―',
    event_type: 'LIVE',
    tour_id: 5,
    sub_name: '大阪公演',
    songs: [
      [
        58, // The best thing
        57, // I still love U
        44, // Dream Fighter
        MC,
        62, // ナチュラルに恋して
        // (Perfumeメドレー),
        140, // イミテーションワールド
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        15, // コンピュータードライビング
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],
      [
        5, // スウィートドーナッツ
        19, // wonder2
      ],

    ],
    live_house: 32
  },
  {
    id: 96,
    date: '2010/03/15',
    name: 'P.T.A. presents Perfume 結成10周年!!!!『パッと楽しく遊ぼうの会』ライブハウストゥワ―',
    event_type: 'LIVE',
    tour_id: 5,
    sub_name: '東京公演',
    songs: [
      [
        58, // The best thing
        57, // I still love U
        44, // Dream Fighter
        MC,
        62, // ナチュラルに恋して
        // (Perfumeメドレー),
        140, // イミテーションワールド
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        15, // コンピュータードライビング
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],
      [
        5, // スウィートドーナッツ
        19, // wonder2
      ],

    ],
    live_house: 24
  },
  {
    id: 97,
    date: '2010/03/16',
    name: 'P.T.A. presents Perfume 結成10周年!!!!『パッと楽しく遊ぼうの会』ライブハウストゥワ―',
    event_type: 'LIVE',
    tour_id: 5,
    sub_name: '東京公演',
    songs: [
      [
        58, // The best thing
        57, // I still love U
        44, // Dream Fighter
        MC,
        62, // ナチュラルに恋して
        // (Perfumeメドレー),
        140, // イミテーションワールド
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        15, // コンピュータードライビング
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],
      [
        10, // おいしいレシピ
        19, // wonder2
      ],

    ],
    live_house: 24
  },
  {
    id: 98,
    date: '2010/03/16',
    name: 'P.T.A. presents Perfume 結成10周年!!!!『パッと楽しく遊ぼうの会』ライブハウストゥワ―',
    event_type: 'LIVE',
    tour_id: 5,
    sub_name: '東京公演',
    songs: [
      [
        58, // The best thing
        57, // I still love U
        44, // Dream Fighter
        MC,
        62, // ナチュラルに恋して
        // (Perfumeメドレー),
        140, // イミテーションワールド
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        15, // コンピュータードライビング
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],
      [
        5, // スウィートドーナッツ
        19, // wonder2
      ],

    ],
    live_house: 24
  },
  {
    id: 99,
    date: '2010/03/18',
    name: 'P.T.A. presents Perfume 結成10周年!!!!『パッと楽しく遊ぼうの会』ライブハウストゥワ―',
    event_type: 'LIVE',
    tour_id: 5,
    sub_name: '宮城公演',
    songs: [
      [
        58, // The best thing
        57, // I still love U
        44, // Dream Fighter
        MC,
        62, // ナチュラルに恋して
        // (Perfumeメドレー),
        140, // イミテーションワールド
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        15, // コンピュータードライビング
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],
      [
        10, // おいしいレシピ
        19, // wonder2
      ],

    ],
    live_house: 64
  },
  {
    id: 100,
    date: '2010/03/20',
    name: 'GO! FES',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        // edge(出囃子),
        48, // ワンルーム・ディスコ
        44, // Dream Fighter
        MC,
        40, // love the world
        29, // Baby cruising Love
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],

    ],
    live_house: 65
  },
  {
    id: 101,
    date: '2010/03/22',
    name: 'P.T.A. presents Perfume 結成10周年!!!!『パッと楽しく遊ぼうの会』ライブハウストゥワ―',
    event_type: 'LIVE',
    tour_id: 5,
    sub_name: '新潟公演',
    songs: [
      [
        58, // The best thing
        57, // I still love U
        44, // Dream Fighter
        MC,
        62, // ナチュラルに恋して
        // (Perfumeメドレー),
        140, // イミテーションワールド
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        15, // コンピュータードライビング
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],
      [
        5, // スウィートドーナッツ
        19, // wonder2
      ],

    ],
    live_house: 37
  },
  {
    id: 102,
    date: '2010/03/24',
    name: 'P.T.A. presents Perfume 結成10周年!!!!『パッと楽しく遊ぼうの会』ライブハウストゥワ―',
    event_type: 'LIVE',
    tour_id: 5,
    sub_name: '北海道公演',
    songs: [
      [
        58, // The best thing
        57, // I still love U
        44, // Dream Fighter
        MC,
        62, // ナチュラルに恋して
        // (Perfumeメドレー),
        140, // イミテーションワールド
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        15, // コンピュータードライビング
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],
      [
        10, // おいしいレシピ
        19, // wonder2
      ],

    ],
    live_house: 66
  },
  {
    id: 103,
    date: '2010/03/31',
    name: 'P.T.A. presents Perfume 結成10周年!!!!『パッと楽しく遊ぼうの会』ライブハウストゥワ―',
    event_type: 'LIVE',
    tour_id: 5,
    sub_name: '福岡公演',
    songs: [
      [
        58, // The best thing
        57, // I still love U
        44, // Dream Fighter
        MC,
        62, // ナチュラルに恋して
        // (Perfumeメドレー),
        140, // イミテーションワールド
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        15, // コンピュータードライビング
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],
      [
        5, // スウィートドーナッツ
        19, // wonder2
      ],

    ],
    live_house: 67
  },
  {
    id: 104,
    date: '2010/04/02',
    name: 'P.T.A. presents Perfume 結成10周年!!!!『パッと楽しく遊ぼうの会』ライブハウストゥワ―',
    event_type: 'LIVE',
    tour_id: 5,
    sub_name: '広島公演',
    songs: [
      [
        58, // The best thing
        57, // I still love U
        44, // Dream Fighter
        MC,
        62, // ナチュラルに恋して
        // (Perfumeメドレー),
        140, // イミテーションワールド
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        15, // コンピュータードライビング
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],
      [
        10, // おいしいレシピ
        19, // wonder2
      ],

    ],
    live_house: 34
  },
  {
    id: 105,
    date: '2010/04/03',
    name: 'P.T.A. presents Perfume 結成10周年!!!!『パッと楽しく遊ぼうの会』ライブハウストゥワ―',
    event_type: 'LIVE',
    tour_id: 5,
    sub_name: '高知公演',
    songs: [
      [
        58, // The best thing
        57, // I still love U
        44, // Dream Fighter
        MC,
        62, // ナチュラルに恋して
        // (Perfumeメドレー),
        140, // イミテーションワールド
        54, // NIGHT FLIGHT
        18, // エレクトロ・ワールド
        15, // コンピュータードライビング
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],
      [
        5, // スウィートドーナッツ
        19, // wonder2
      ],

    ],
    live_house: 68
  },
  {
    id: 106,
    date: '2010/04/29',
    name: 'REQUESTAGE 8',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        // edge(出囃子),
        61, // 不自然なガール
        18, // エレクトロ・ワールド
        MC,
        62, // ナチュラルに恋して
        24, // ポリリズム
        PTA,
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 52
  },
  {
    id: 107,
    date: '2010/06/05',
    name: 'Music Lovers Live 2010',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        44, // Dream Fighter
        61, // 不自然なガール
        48, // ワンルーム・ディスコ
        MC,
        25, // SEVENTH HEAVEN
        62, // ナチュラルに恋して
        PTA,
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],

    ],
    live_house: 51
  },
  {
    id: 108,
    date: '2010/06/26',
    name: 'うたの日コンサート2010',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        // edge(出囃子),
        48, // ワンルーム・ディスコ
        18, // エレクトロ・ワールド
        MC,
        62, // ナチュラルに恋して
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],

    ],
    live_house: 69
  },
  {
    id: 109,
    date: '2010/08/01',
    name: 'GIRL POP FACTORY',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        // Lovefool(出囃子),
        48, // ワンルーム・ディスコ
        61, // 不自然なガール
        MC,
        62, // ナチュラルに恋して
        30, // マカロニ
        65, // VOICE
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],

    ],
    live_house: 24
  },
  {
    id: 110,
    date: '2010/08/06',
    name: 'ROCK IN JAPAN FES',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        // Lovefool(出囃子),
        61, // 不自然なガール
        15, // コンピュータードライビング
        18, // エレクトロ・ワールド
        MC,
        62, // ナチュラルに恋して
        40, // love the world
        65, // VOICE
        PTA,
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],

    ],
    live_house: 54
  },
  {
    id: 111,
    date: '2010/08/22',
    name: 'MONSTER baSH',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        // Lovefool(出囃子),
        65, // VOICE
        48, // ワンルーム・ディスコ
        44, // Dream Fighter
        MC,
        62, // ナチュラルに恋して
        PTA,
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],

    ],
    live_house: 70
  },
  {
    id: 112,
    date: '2010/11/03',
    name: 'Perfume LIVE @東京ドーム ｢1 2 3 4 5 6 7 8 9 10 11｣',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        183, // GISHIKI
        37, // シークレットシークレット
        61, // 不自然なガール
        34, // GAME
        48, // ワンルーム・ディスコ
        MC,
        62, // ナチュラルに恋して
        40, // love the world
        57, // I still love U
        66, // 575
        184, // 12345678910
        182, // Perfumeの掟
        65, // VOICE
        16, // コンピューターシティ
        18, // エレクトロ・ワールド
        MC,
        20, // パーフェクトスター・パーフェクトスタイル
        44, // Dream Fighter
        PTA,
        7, // ジェニーはご機嫌ななめ
        17, // Perfume
        22, // チョコレイト・ディスコ
        39, // Puppy love
        19, // wonder2
      ],
      [
        MC,
        69, // ねぇ
        24, // ポリリズム
      ],

    ],
    live_house: 71
  },
  {
    id: 113,
    date: '2010/11/28',
    name: '2010 Mnet Asian Music Awards(MAMA)',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        69, // ねぇ
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 72
  },
  {
    id: 114,
    date: '2010/12/01',
    name: 'Act Against AIDS',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        62, // ナチュラルに恋して
        65, // VOICE
        MC,
        69, // ねぇ
      ],

    ],
    live_house: 21
  },
  {
    id: 115,
    date: '2010/12/28',
    name: 'COUNTDOWN JAPAN',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        70, // FAKE IT
        69, // ねぇ
        48, // ワンルーム・ディスコ
        MC,
        65, // VOICE
        30, // マカロニ
        PTA,
        58, // The best thing
        39, // Puppy love
        24, // ポリリズム
      ],

    ],
    live_house: 49
  },
  {
    id: 116,
    date: '2011/01/29',
    name: 'オンタマカーニバル',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        70, // FAKE IT
        65, // VOICE
        69, // ねぇ
        MC,
        62, // ナチュラルに恋して
        44, // Dream Fighter
        PTA,
        39, // Puppy love
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 51
  },
  {
    id: 117,
    date: '2011/04/30',
    name: 'REQUESTAGE 9',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        70, // FAKE IT
        69, // ねぇ
        48, // ワンルーム・ディスコ
        MC,
        44, // Dream Fighter
        PTA,
        24, // ポリリズム
      ],

    ],
    live_house: 52
  },
  {
    id: 118,
    date: '2011/05/03',
    name: '35回ひろしまフラワーフェスティバル',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        70, // FAKE IT
        48, // ワンルーム・ディスコ
        MC,
        // (メドレー),
        61, // 不自然なガール
        65, // VOICE
        69, // ねぇ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],

    ],
    live_house: 73
  },
  {
    id: 119,
    date: '2011/06/04',
    name: 'ONE OK ROCK 2011"Answer is aLive" TOUR',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        37, // シークレットシークレット
        44, // Dream Fighter
        73, // レーザービーム
        MC,
        62, // ナチュラルに恋して
        69, // ねぇ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        // (アンコール×ONE OK ROCK),
        39, // Puppy love
      ],

    ],
    live_house: 74
  },
  {
    id: 120,
    date: '2011/07/23',
    name: 'JOIN ALIVE',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        70, // FAKE IT
        73, // レーザービーム
        48, // ワンルーム・ディスコ
        MC,
        20, // パーフェクトスター・パーフェクトスタイル
        65, // VOICE
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],

    ],
    live_house: 75
  },
  {
    id: 121,
    date: '2011/08/05',
    name: 'ROCK IN JAPAN FES',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        70, // FAKE IT
        73, // レーザービーム
        48, // ワンルーム・ディスコ
        MC,
        62, // ナチュラルに恋して
        20, // パーフェクトスター・パーフェクトスタイル
        65, // VOICE
        PTA,
        69, // ねぇ
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],

    ],
    live_house: 54
  },
  {
    id: 122,
    date: '2011/08/13',
    name: 'SUMMER SONIC',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        70, // FAKE IT
        69, // ねぇ
        73, // レーザービーム
        MC,
        29, // Baby cruising Love
        74, // 微かなカオリ
        PTA,
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],

    ],
    live_house: 76
  },
  {
    id: 123,
    date: '2011/08/14',
    name: 'SUMMER SONIC',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        70, // FAKE IT
        69, // ねぇ
        73, // レーザービーム
        MC,
        29, // Baby cruising Love
        65, // VOICE
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],

    ],
    live_house: 77
  },
  {
    id: 124,
    date: '2011/08/21',
    name: 'MONSTER baSH',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        70, // FAKE IT
        73, // レーザービーム
        MC,
        74, // 微かなカオリ
        PTA,
        69, // ねぇ
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],

    ],
    live_house: 70
  },
  {
    id: 125,
    date: '2011/09/24',
    name: 'テレビ朝日ドリームフェスティバル',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        70, // FAKE IT
        73, // レーザービーム
        48, // ワンルーム・ディスコ
        MC,
        29, // Baby cruising Love
        69, // ねぇ
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],

    ],
    live_house: 21
  },
  {
    id: 126,
    date: '2011/10/02',
    name: 'モテキナイト4',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        29, // Baby cruising Love
      ],

    ],
    live_house: 78
  },
  {
    id: 127,
    date: '2011/10/15',
    name: '2011 Asia Song Festival',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        73, // レーザービーム
        69, // ねぇ
        MC,
        24, // ポリリズム
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 79
  },
  {
    id: 128,
    date: '2011/10/29',
    name: 'Perfume ダンスコンテスト ～魅せよ、JPN！～ 決勝戦',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        78, // GLITTER
        PTA,
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 80
  },
  {
    id: 129,
    date: '2011/12/01',
    name: 'Act Against AIDS',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        73, // レーザービーム
        MC,
        77, // スパイス
        24, // ポリリズム
      ],

    ],
    live_house: 21
  },
  {
    id: 130,
    date: '2012/01/14',
    name: 'Perfume 3rd Tour『JPN』',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '兵庫公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        44, // Dream Fighter
        86, // 心のスポーツ
      ],

    ],
    live_house: 81
  },
  {
    id: 131,
    date: '2012/01/15',
    name: 'Perfume 3rd Tour『JPN』',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '兵庫公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        44, // Dream Fighter
        86, // 心のスポーツ
      ],

    ],
    live_house: 81
  },
  {
    id: 132,
    date: '2012/01/28',
    name: 'Perfume 3rd Tour『JPN』',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '埼玉公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        44, // Dream Fighter
        // 徒競走,
        39, // Puppy love
        86, // 心のスポーツ
      ],

    ],
    live_house: 82
  },
  {
    id: 133,
    date: '2012/01/29',
    name: 'Perfume 3rd Tour『JPN』',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '埼玉公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        44, // Dream Fighter
        // 徒競走,
        39, // Puppy love
        86, // 心のスポーツ
      ],

    ],
    live_house: 82
  },
  {
    id: 134,
    date: '2012/02/04',
    name: 'Perfume 3rd Tour『JPN』',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '新潟公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        44, // Dream Fighter
        86, // 心のスポーツ
      ],

    ],
    live_house: 83
  },
  {
    id: 135,
    date: '2012/02/11',
    name: 'Perfume 3rd Tour『JPN』',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '福岡公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        44, // Dream Fighter
        86, // 心のスポーツ
      ],

    ],
    live_house: 84
  },
  {
    id: 136,
    date: '2012/02/12',
    name: 'Perfume 3rd Tour『JPN』',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '福岡公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        44, // Dream Fighter
        86, // 心のスポーツ
      ],

    ],
    live_house: 84
  },
  {
    id: 137,
    date: '2012/02/29',
    name: 'Perfume 3rd Tour『JPN』',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '愛知公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        44, // Dream Fighter
        86, // 心のスポーツ
      ],

    ],
    live_house: 63
  },
  {
    id: 138,
    date: '2012/03/01',
    name: 'Perfume 3rd Tour『JPN』',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '愛知公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        44, // Dream Fighter
        86, // 心のスポーツ
      ],

    ],
    live_house: 63
  },
  {
    id: 139,
    date: '2012/03/17',
    name: 'GO! FES',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        70, // FAKE IT
        73, // レーザービーム
        69, // ねぇ
        MC,
        77, // スパイス
        44, // Dream Fighter
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
        39, // Puppy love
      ],

    ],
    live_house: 65
  },
  {
    id: 140,
    date: '2012/03/24',
    name: 'Perfume 3rd Tour『JPN』',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '静岡公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        44, // Dream Fighter
        86, // 心のスポーツ
      ],

    ],
    live_house: 85
  },
  {
    id: 141,
    date: '2012/03/27',
    name: 'Perfume 3rd Tour『JPN』',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '大阪公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        44, // Dream Fighter
        86, // 心のスポーツ
      ],

    ],
    live_house: 52
  },
  {
    id: 142,
    date: '2012/03/28',
    name: 'Perfume 3rd Tour『JPN』',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '大阪公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        44, // Dream Fighter
        86, // 心のスポーツ
      ],

    ],
    live_house: 52
  },
  {
    id: 143,
    date: '2012/03/31',
    name: 'Perfume 3rd Tour『JPN』',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '広島公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        44, // Dream Fighter
        86, // 心のスポーツ
      ],

    ],
    live_house: 86
  },
  {
    id: 144,
    date: '2012/04/01',
    name: 'Perfume 3rd Tour『JPN』',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '広島公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        44, // Dream Fighter
        86, // 心のスポーツ
      ],

    ],
    live_house: 86
  },
  {
    id: 145,
    date: '2012/04/07',
    name: 'Perfume 3rd Tour『JPN』',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '愛媛公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        44, // Dream Fighter
        86, // 心のスポーツ
      ],

    ],
    live_house: 87
  },
  {
    id: 146,
    date: '2012/04/14',
    name: 'Perfume 3rd Tour『JPN』',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '宮城公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        88, // Spring of Life
        86, // 心のスポーツ
      ],

    ],
    live_house: 88
  },
  {
    id: 147,
    date: '2012/04/21',
    name: 'Perfume 3rd Tour『JPN』',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '北海道公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        88, // Spring of Life
        86, // 心のスポーツ
      ],

    ],
    live_house: 89
  },
  {
    id: 148,
    date: '2012/05/08',
    name: 'Perfume 3rd Tour『JPN』追加公演',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '東京公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        MC,
        89, // コミュニケーション
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        88, // Spring of Life
        86, // 心のスポーツ
      ],

    ],
    live_house: 21
  },
  {
    id: 149,
    date: '2012/05/09',
    name: 'Perfume 3rd Tour『JPN』追加公演',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '東京公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        MC,
        89, // コミュニケーション
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        88, // Spring of Life
        86, // 心のスポーツ
      ],

    ],
    live_house: 21
  },
  {
    id: 150,
    date: '2012/05/11',
    name: 'Perfume 3rd Tour『JPN』追加公演',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '東京公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        MC,
        89, // コミュニケーション
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        88, // Spring of Life
        86, // 心のスポーツ
      ],

    ],
    live_house: 21
  },
  {
    id: 151,
    date: '2012/05/12',
    name: 'Perfume 3rd Tour『JPN』追加公演',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '東京公演',
    songs: [
      [
        81, // The Opening
        73, // レーザービーム
        65, // VOICE
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        85, // 時の針
        74, // 微かなカオリ
        77, // スパイス
        // JPN Special,
        78, // GLITTER
        // (JPNメドレー)シークレットシークレット,
        61, // 不自然なガール
        36, // Take me Take me
        29, // Baby cruising Love
        66, // 575
        57, // I still love U
        40, // love the world
        37, // シークレットシークレット
        MC,
        89, // コミュニケーション
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        69, // ねぇ
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        88, // Spring of Life
        86, // 心のスポーツ
      ],

    ],
    live_house: 21
  },
  {
    id: 152,
    date: '2012/05/26',
    name: 'Perfume 3rd Tour『JPN 打ち上げ公演!海パーン!!!』',
    event_type: 'LIVE',
    tour_id: 6,
    sub_name: '沖縄公演',
    songs: [
      [
        78, // GLITTER
        88, // Spring of Life
        69, // ねぇ
        48, // ワンルーム・ディスコ
        MC,
        87, // Have a Stroll
        20, // パーフェクトスター・パーフェクトスタイル
        89, // コミュニケーション
        MC,
        65, // VOICE
        77, // スパイス
        73, // レーザービーム
        24, // ポリリズム
        PTA,
        70, // FAKE IT
        18, // エレクトロ・ワールド
        35, // セラミックガール
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        7, // ジェニーはご機嫌ななめ
        17, // Perfume
        86, // 心のスポーツ
      ],

    ],
    live_house: 90
  },
  {
    id: 153,
    date: '2012/06/23',
    name: 'MTV VMAJ 2012',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        // 舞-rhythm-,
        88, // Spring of Life
      ],

    ],
    live_house: 65
  },
  {
    id: 154,
    date: '2012/07/23',
    name: '氷結 SUMMER NIGHT',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        73, // レーザービーム
        88, // Spring of Life
        78, // GLITTER
        94, // Hurly Burly
      ],

    ],
    live_house: 91
  },
  {
    id: 155,
    date: '2012/08/04',
    name: 'ROCK IN JAPAN FES',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        78, // GLITTER
        92, // Spending all my time
        24, // ポリリズム
        MC,
        77, // スパイス
        25, // SEVENTH HEAVEN
        PTA,
        70, // FAKE IT
        88, // Spring of Life
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],

    ],
    live_house: 54
  },
  {
    id: 156,
    date: '2012/08/10',
    name: 'RISING SUN ROCK FESTIVAL',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        78, // GLITTER
        92, // Spending all my time
        24, // ポリリズム
        MC,
        29, // Baby cruising Love
        PTA,
        70, // FAKE IT
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],

    ],
    live_house: 92
  },
  {
    id: 157,
    date: '2012/08/18',
    name: 'SUMMER SONIC',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        52, // Take off
        73, // レーザービーム
        92, // Spending all my time
        24, // ポリリズム
        MC,
        77, // スパイス
        25, // SEVENTH HEAVEN
        PTA,
        // (落雷中断),
        MC,
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 93
  },
  {
    id: 158,
    date: '2012/08/19',
    name: 'SUMMER SONIC',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        78, // GLITTER
        92, // Spending all my time
        24, // ポリリズム
        MC,
        29, // Baby cruising Love
        69, // ねぇ
        PTA,
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],

    ],
    live_house: 94
  },
  {
    id: 159,
    date: '2012/09/02',
    name: 'SWEET LOVE SHOWER',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        92, // Spending all my time
        88, // Spring of Life
        MC,
        30, // マカロニ
        PTA,
        70, // FAKE IT
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],

    ],
    live_house: 95
  },
  {
    id: 160,
    date: '2012/10/07',
    name: 'テレビ朝日ドリームフェスティバル',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        92, // Spending all my time
        24, // ポリリズム
        MC,
        40, // love the world
        77, // スパイス
        69, // ねぇ
        PTA,
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 53
  },
  {
    id: 161,
    date: '2012/10/14',
    name: 'ABU TV Song Festival 2012',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        88, // Spring of Life
      ],

    ],
    live_house: 96
  },
  {
    id: 162,
    date: '2012/10/26',
    name: 'Perfume WORLD TOUR 1st',
    event_type: 'LIVE',
    tour_id: 7,
    sub_name: '台湾公演(Neo Studio)',
    songs: [
      [
        54, // NIGHT FLIGHT
        16, // コンピューターシティ
        18, // エレクトロ・ワールド
        MC,
        73, // レーザービーム
        92, // Spending all my time
        40, // love the world
        38, // Butterfly
        41, // edge
        37, // シークレットシークレット
        MC,
        44, // Dream Fighter
        PTA,
        70, // FAKE IT
        69, // ねぇ
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],
      [
        88, // Spring of Life
        86, // 心のスポーツ
      ],

    ],
    live_house: 97
  },
  {
    id: 163,
    date: '2012/11/07',
    name: 'Perfume WORLD TOUR 1st',
    event_type: 'LIVE',
    tour_id: 7,
    sub_name: '香港公演(Rotunda 3)',
    songs: [
      [
        54, // NIGHT FLIGHT
        16, // コンピューターシティ
        18, // エレクトロ・ワールド
        MC,
        73, // レーザービーム
        92, // Spending all my time
        40, // love the world
        38, // Butterfly
        41, // edge
        37, // シークレットシークレット
        MC,
        44, // Dream Fighter
        PTA,
        70, // FAKE IT
        69, // ねぇ
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],
      [
        88, // Spring of Life
        86, // 心のスポーツ
      ],

    ],
    live_house: 98
  },
  {
    id: 164,
    date: '2012/11/17',
    name: 'Perfume WORLD TOUR 1st',
    event_type: 'LIVE',
    tour_id: 7,
    sub_name: '韓国公演(AX-KOREA)',
    songs: [
      [
        54, // NIGHT FLIGHT
        16, // コンピューターシティ
        18, // エレクトロ・ワールド
        MC,
        73, // レーザービーム
        92, // Spending all my time
        40, // love the world
        38, // Butterfly
        41, // edge
        37, // シークレットシークレット
        MC,
        44, // Dream Fighter
        PTA,
        70, // FAKE IT
        69, // ねぇ
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],
      [
        88, // Spring of Life
        86, // 心のスポーツ
      ],

    ],
    live_house: 122
  },
  {
    id: 165,
    date: '2012/11/24',
    name: 'Perfume WORLD TOUR 1st',
    event_type: 'LIVE',
    tour_id: 7,
    sub_name: 'シンガポール公演(SCAPE)',
    songs: [
      [
        54, // NIGHT FLIGHT
        16, // コンピューターシティ
        18, // エレクトロ・ワールド
        MC,
        73, // レーザービーム
        92, // Spending all my time
        40, // love the world
        38, // Butterfly
        41, // edge
        37, // シークレットシークレット
        MC,
        44, // Dream Fighter
        PTA,
        70, // FAKE IT
        69, // ねぇ
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],
      [
        88, // Spring of Life
        86, // 心のスポーツ
        MC,
        84, // MY COLOR
      ],

    ],
    live_house: 100
  },
  {
    id: 166,
    date: '2012/11/30',
    name: 'Act Against AIDS',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        88, // Spring of Life
        MC,
        40, // love the world
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 21
  },
  {
    id: 167,
    date: '2012/12/28',
    name: 'COUNTDOWN JAPAN',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        // global site(出囃子),
        54, // NIGHT FLIGHT
        92, // Spending all my time
        MC,
        88, // Spring of Life
        86, // 心のスポーツ
        PTA,
        70, // FAKE IT
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],

    ],
    live_house: 49
  },
  {
    id: 168,
    date: '2013/01/02',
    name: 'U-EXPRESS LIVE 2013',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        92, // Spending all my time
        88, // Spring of Life
        MC,
        100, // 未来のミュージアム
        69, // ねぇ
        PTA,
        70, // FAKE IT
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 65
  },
  {
    id: 169,
    date: '2013/05/26',
    name: 'METROCK',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        92, // Spending all my time
        88, // Spring of Life
        48, // ワンルーム・ディスコ
        MC,
        104, // Magic of Love
        PTA,
        70, // FAKE IT
        18, // エレクトロ・ワールド
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 101
  },
  {
    id: 170,
    date: '2013/05/29',
    name: 'ずっと好きだったんじゃけぇ～さすらいの麺カタPerfumeFES!!×斉藤和義',
    event_type: 'LIVE',
    tour_id: 8,
    sub_name: '東京公演',
    songs: [
      [
        104, // Magic of Love
        73, // レーザービーム
        92, // Spending all my time
        69, // ねぇ
        MC,
        100, // 未来のミュージアム
        30, // マカロニ
        77, // スパイス
        PTA,
        101, // だいじょばない
        18, // エレクトロ・ワールド
        22, // チョコレイト・ディスコ
        84, // MY COLOR
        // (アンコール×斉藤和義),
        62, // ナチュラルに恋して
        // 歩いて帰ろう,
      ],

    ],
    live_house: 102
  },
  {
    id: 171,
    date: '2013/05/30',
    name: 'ずっと好きだったんじゃけぇ～さすらいの麺カタPerfumeFES!!×斉藤和義',
    event_type: 'LIVE',
    tour_id: 8,
    sub_name: '東京公演',
    songs: [
      [
        104, // Magic of Love
        73, // レーザービーム
        92, // Spending all my time
        69, // ねぇ
        MC,
        25, // SEVENTH HEAVEN
        30, // マカロニ
        77, // スパイス
        PTA,
        101, // だいじょばない
        88, // Spring of Life
        22, // チョコレイト・ディスコ
        84, // MY COLOR
        // (アンコール×斉藤和義),
        62, // ナチュラルに恋して
        // 歩いて帰ろう,
      ],

    ],
    live_house: 102
  },
  {
    id: 172,
    date: '2013/06/04',
    name: 'ずっと好きだったんじゃけぇ～さすらいの麺カタPerfumeFES!!×奥田民生',
    event_type: 'LIVE',
    tour_id: 8,
    sub_name: '愛知公演',
    songs: [
      [
        104, // Magic of Love
        73, // レーザービーム
        92, // Spending all my time
        69, // ねぇ
        MC,
        30, // マカロニ
        25, // SEVENTH HEAVEN
        77, // スパイス
        PTA,
        101, // だいじょばない
        18, // エレクトロ・ワールド
        22, // チョコレイト・ディスコ
        84, // MY COLOR
        // (アンコール×奥田民生),
        73, // レーザービーム
        // イージュー★ライダー,
      ],

    ],
    live_house: 36
  },
  {
    id: 173,
    date: '2013/06/05',
    name: 'ずっと好きだったんじゃけぇ～さすらいの麺カタPerfumeFES!!×奥田民生',
    event_type: 'LIVE',
    tour_id: 8,
    sub_name: '愛知公演',
    songs: [
      [
        104, // Magic of Love
        73, // レーザービーム
        92, // Spending all my time
        69, // ねぇ
        MC,
        30, // マカロニ
        20, // パーフェクトスター・パーフェクトスタイル
        77, // スパイス
        PTA,
        101, // だいじょばない
        24, // ポリリズム
        7, // ジェニーはご機嫌ななめ
        84, // MY COLOR
        // (アンコール×奥田民生),
        73, // レーザービーム
        // アジアの純真,
      ],

    ],
    live_house: 36
  },
  {
    id: 174,
    date: '2013/06/14',
    name: 'ULTRA KOREA 2013',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        92, // Spending all my time
        73, // レーザービーム
        104, // Magic of Love
        94, // Hurly Burly
        101, // だいじょばない
        PTA,
        70, // FAKE IT
        88, // Spring of Life
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 103
  },
  {
    id: 175,
    date: '2013/06/17',
    name: 'ずっと好きだったんじゃけぇ～さすらいの麺カタPerfumeFES!!×マキシマム ザ ホルモン',
    event_type: 'LIVE',
    tour_id: 8,
    sub_name: '大阪公演',
    songs: [
      [
        104, // Magic of Love
        73, // レーザービーム
        92, // Spending all my time
        44, // Dream Fighter
        MC,
        30, // マカロニ
        25, // SEVENTH HEAVEN
        77, // スパイス
        PTA,
        101, // だいじょばない
        61, // 不自然なガール
        7, // ジェニーはご機嫌ななめ
        84, // MY COLOR
        // (アンコール×ナヲ),
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 104
  },
  {
    id: 176,
    date: '2013/06/18',
    name: 'ずっと好きだったんじゃけぇ～さすらいの麺カタPerfumeFES!!×マキシマム ザ ホルモン',
    event_type: 'LIVE',
    tour_id: 8,
    sub_name: '大阪公演',
    songs: [
      [
        104, // Magic of Love
        73, // レーザービーム
        92, // Spending all my time
        69, // ねぇ
        MC,
        30, // マカロニ
        20, // パーフェクトスター・パーフェクトスタイル
        77, // スパイス
        PTA,
        101, // だいじょばない
        18, // エレクトロ・ワールド
        24, // ポリリズム
        84, // MY COLOR
        // (アンコール×ナヲ),
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 104
  },
  {
    id: 177,
    date: '2013/06/20',
    name: 'カンヌライオンズ国際クリエイティビティ・フェスティバル',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        92, // Spending all my time
      ],

    ],
    live_house: 105
  },
  {
    id: 178,
    date: '2013/07/03',
    name: 'Perfume WORLD TOUR 2nd',
    event_type: 'LIVE',
    tour_id: 9,
    sub_name: 'ドイツ公演(GLORIA)',
    songs: [
      [
        92, // Spending all my time
        104, // Magic of Love
        73, // レーザービーム
        24, // ポリリズム
        MC,
        88, // Spring of Life
        25, // SEVENTH HEAVEN
        77, // スパイス
        105, // Handy Man
        101, // だいじょばない
        18, // エレクトロ・ワールド
        PTA,
        70, // FAKE IT
        44, // Dream Fighter
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        40, // love the world
      ],

    ],
    live_house: 106
  },
  {
    id: 179,
    date: '2013/07/05',
    name: 'Perfume WORLD TOUR 2nd',
    event_type: 'LIVE',
    tour_id: 9,
    sub_name: 'イギリス公演(O2 Shepherd\'s Bush Empire)',
    songs: [
      [
        92, // Spending all my time
        104, // Magic of Love
        73, // レーザービーム
        24, // ポリリズム
        MC,
        88, // Spring of Life
        25, // SEVENTH HEAVEN
        77, // スパイス
        105, // Handy Man
        101, // だいじょばない
        18, // エレクトロ・ワールド
        PTA,
        70, // FAKE IT
        44, // Dream Fighter
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        78, // GLITTER
      ],

    ],
    live_house: 107
  },
  {
    id: 180,
    date: '2013/07/07',
    name: 'Perfume WORLD TOUR 2nd',
    event_type: 'LIVE',
    tour_id: 9,
    sub_name: 'フランス公演(Le Bataclan)',
    songs: [
      [
        92, // Spending all my time
        104, // Magic of Love
        73, // レーザービーム
        24, // ポリリズム
        MC,
        88, // Spring of Life
        25, // SEVENTH HEAVEN
        77, // スパイス
        105, // Handy Man
        101, // だいじょばない
        18, // エレクトロ・ワールド
        PTA,
        70, // FAKE IT
        44, // Dream Fighter
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        69, // ねぇ
      ],

    ],
    live_house: 108
  },
  {
    id: 181,
    date: '2013/07/13',
    name: 'Amuse 35th Anniversary BBQ in つま恋～僕らのビートを喰らえコラ！～',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        101, // だいじょばない
        48, // ワンルーム・ディスコ
        73, // レーザービーム
        PTA,
        69, // ねぇ
        24, // ポリリズム
      ],

    ],
    live_house: 109
  },
  {
    id: 182,
    date: '2013/07/14',
    name: 'Amuse 35th Anniversary BBQ in つま恋～僕らのビートを喰らえコラ！～',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        104, // Magic of Love
        88, // Spring of Life
        29, // Baby cruising Love
        PTA,
        101, // だいじょばない
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 109
  },
  {
    id: 183,
    date: '2013/08/04',
    name: 'ROCK IN JAPAN FES',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        104, // Magic of Love
        92, // Spending all my time
        24, // ポリリズム
        MC,
        30, // マカロニ
        25, // SEVENTH HEAVEN
        86, // 心のスポーツ
        PTA,
        101, // だいじょばない
        18, // エレクトロ・ワールド
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        44, // Dream Fighter
      ],

    ],
    live_house: 54
  },
  {
    id: 184,
    date: '2013/08/09',
    name: 'SONIC MANIA',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        104, // Magic of Love
        94, // Hurly Burly
        92, // Spending all my time
        24, // ポリリズム
        MC,
        88, // Spring of Life
        101, // だいじょばない
        PTA,
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 110
  },
  {
    id: 185,
    date: '2013/08/11',
    name: 'SUMMER SONIC',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        92, // Spending all my time
        104, // Magic of Love
        MC,
        65, // VOICE
        88, // Spring of Life
        PTA,
        101, // だいじょばない
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],

    ],
    live_house: 93
  },
  {
    id: 186,
    date: '2013/10/26',
    name: '第2回 Perfumeダンスコンテスト〜魅せよ、LEVEL3〜',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        92, // Spending all my time
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 111
  },
  {
    id: 187,
    date: '2013/12/07',
    name: 'Perfume 4th Tour in DOME 『LEVEL3』',
    event_type: 'LIVE',
    tour_id: 10,
    sub_name: '大阪公演',
    songs: [
      [
        // OP,
        108, // Enter the Sphere
        88, // Spring of Life
        104, // Magic of Love
        MC,
        112, // 1mm
        111, // Clockwork
        93, // ポイント
        MC,
        114, // ふりかえるといるよ
        115, // Sleeping Beauty
        113, // Party Maker
        92, // Spending all my time
        16, // コンピューターシティ
        MC,
        18, // エレクトロ・ワールド
        7, // ジェニーはご機嫌ななめ
        48, // ワンルーム・ディスコ
        MC,
        100, // 未来のミュージアム
        PTA,
        101, // だいじょばない
        24, // ポリリズム
        22, // チョコレイト・ディスコ
        84, // MY COLOR
        117, // Dream Land
      ],

    ],
    live_house: 112
  },
  {
    id: 188,
    date: '2013/12/08',
    name: 'Perfume 4th Tour in DOME 『LEVEL3』',
    event_type: 'LIVE',
    tour_id: 10,
    sub_name: '大阪公演',
    songs: [
      [
        // OP,
        108, // Enter the Sphere
        88, // Spring of Life
        104, // Magic of Love
        MC,
        112, // 1mm
        111, // Clockwork
        93, // ポイント
        MC,
        114, // ふりかえるといるよ
        115, // Sleeping Beauty
        113, // Party Maker
        92, // Spending all my time
        16, // コンピューターシティ
        MC,
        18, // エレクトロ・ワールド
        7, // ジェニーはご機嫌ななめ
        48, // ワンルーム・ディスコ
        MC,
        100, // 未来のミュージアム
        PTA,
        101, // だいじょばない
        24, // ポリリズム
        22, // チョコレイト・ディスコ
        84, // MY COLOR
        117, // Dream Land
      ],

    ],
    live_house: 112
  },
  {
    id: 189,
    date: '2013/12/24',
    name: 'Perfume 4th Tour in DOME 『LEVEL3』',
    event_type: 'LIVE',
    tour_id: 10,
    sub_name: '東京公演',
    songs: [
      [
        // OP,
        108, // Enter the Sphere
        88, // Spring of Life
        104, // Magic of Love
        MC,
        112, // 1mm
        111, // Clockwork
        93, // ポイント
        MC,
        114, // ふりかえるといるよ
        115, // Sleeping Beauty
        113, // Party Maker
        92, // Spending all my time
        16, // コンピューターシティ
        MC,
        18, // エレクトロ・ワールド
        7, // ジェニーはご機嫌ななめ
        48, // ワンルーム・ディスコ
        MC,
        100, // 未来のミュージアム
        PTA,
        101, // だいじょばない
        24, // ポリリズム
        22, // チョコレイト・ディスコ
        84, // MY COLOR
        117, // Dream Land
      ],

    ],
    live_house: 71
  },
  {
    id: 190,
    date: '2013/12/25',
    name: 'Perfume 4th Tour in DOME 『LEVEL3』',
    event_type: 'LIVE',
    tour_id: 10,
    sub_name: '東京公演',
    songs: [
      [
        // OP,
        108, // Enter the Sphere
        88, // Spring of Life
        104, // Magic of Love
        MC,
        112, // 1mm
        111, // Clockwork
        93, // ポイント
        MC,
        114, // ふりかえるといるよ
        115, // Sleeping Beauty
        113, // Party Maker
        92, // Spending all my time
        16, // コンピューターシティ
        MC,
        18, // エレクトロ・ワールド
        7, // ジェニーはご機嫌ななめ
        48, // ワンルーム・ディスコ
        MC,
        100, // 未来のミュージアム
        PTA,
        101, // だいじょばない
        24, // ポリリズム
        22, // チョコレイト・ディスコ
        84, // MY COLOR
        117, // Dream Land
      ],

    ],
    live_house: 71
  },
  {
    id: 191,
    date: '2014/01/22',
    name: '第9回 KKBOX MUSIC AWARDS',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        104, // Magic of Love
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 113
  },
  {
    id: 192,
    date: '2014/03/15',
    name: 'Perfume FES!! 2014×東京スカパラダイスオーケストラ',
    event_type: 'LIVE',
    tour_id: 11,
    sub_name: '東京公演',
    songs: [
      [
        108, // Enter the Sphere
        92, // Spending all my time
        73, // レーザービーム
        24, // ポリリズム
        MC,
        120, // Sweet Refrain
        112, // 1mm
        74, // 微かなカオリ
        104, // Magic of Love
        PTA,
        105, // Handy Man
        70, // FAKE IT
        22, // チョコレイト・ディスコ
        84, // MY COLOR
        // (アンコール×東京スカパラダイスオーケストラ),
        22, // チョコレイト・ディスコ
        // 美しく燃える森,
        7, // ジェニーはご機嫌ななめ
      ],

    ],
    live_house: 114
  },
  {
    id: 193,
    date: '2014/03/16',
    name: 'Perfume FES!! 2014×RIP SLYME',
    event_type: 'LIVE',
    tour_id: 11,
    sub_name: '東京公演',
    songs: [
      [
        108, // Enter the Sphere
        92, // Spending all my time
        73, // レーザービーム
        24, // ポリリズム
        MC,
        120, // Sweet Refrain
        30, // マカロニ
        104, // Magic of Love
        PTA,
        105, // Handy Man
        70, // FAKE IT
        22, // チョコレイト・ディスコ
        84, // MY COLOR
        // (アンコール×RIP SLYME),
        // 太陽とビキニ,
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 114
  },
  {
    id: 194,
    date: '2014/03/20',
    name: 'Perfume FES!! 2014×9nine',
    event_type: 'LIVE',
    tour_id: 11,
    sub_name: '広島公演',
    songs: [
      [
        108, // Enter the Sphere
        92, // Spending all my time
        73, // レーザービーム
        24, // ポリリズム
        MC,
        120, // Sweet Refrain
        30, // マカロニ
        104, // Magic of Love
        PTA,
        105, // Handy Man
        70, // FAKE IT
        22, // チョコレイト・ディスコ
        84, // MY COLOR
        // (アンコール×9nine),
        77, // スパイス
        // SHINING★STAR,
        39, // Puppy love
      ],

    ],
    live_house: 115
  },
  {
    id: 195,
    date: '2014/03/21',
    name: 'Perfume FES!! 2014×9nine',
    event_type: 'LIVE',
    tour_id: 11,
    sub_name: '広島公演',
    songs: [
      [
        108, // Enter the Sphere
        92, // Spending all my time
        73, // レーザービーム
        24, // ポリリズム
        MC,
        120, // Sweet Refrain
        30, // マカロニ
        104, // Magic of Love
        PTA,
        105, // Handy Man
        70, // FAKE IT
        22, // チョコレイト・ディスコ
        84, // MY COLOR
        // (アンコール×9nine),
        77, // スパイス
        // SHINING★STAR,
        39, // Puppy love
      ],

    ],
    live_house: 115
  },
  {
    id: 196,
    date: '2014/04/04',
    name: 'Perfume FES!! 2014×9mm Parabellum Bullet',
    event_type: 'LIVE',
    tour_id: 11,
    sub_name: '静岡公演',
    songs: [
      [
        108, // Enter the Sphere
        92, // Spending all my time
        73, // レーザービーム
        24, // ポリリズム
        MC,
        120, // Sweet Refrain
        30, // マカロニ
        104, // Magic of Love
        PTA,
        70, // FAKE IT
        105, // Handy Man
        22, // チョコレイト・ディスコ
        84, // MY COLOR
        // (アンコール×9mm Parabellum Bullet),
        // Vampiregirl,
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 116
  },
  {
    id: 197,
    date: '2014/04/07',
    name: 'Perfume FES!! 2014×RHYMESTER',
    event_type: 'LIVE',
    tour_id: 11,
    sub_name: '石川公演',
    songs: [
      [
        108, // Enter the Sphere
        92, // Spending all my time
        73, // レーザービーム
        24, // ポリリズム
        MC,
        120, // Sweet Refrain
        30, // マカロニ
        20, // パーフェクトスター・パーフェクトスタイル
        PTA,
        70, // FAKE IT
        105, // Handy Man
        22, // チョコレイト・ディスコ
        84, // MY COLOR
        // (アンコール×RHYMESTER),
        // フリースタイル,
        62, // ナチュラルに恋して
      ],

    ],
    live_house: 59
  },
  {
    id: 198,
    date: '2014/04/09',
    name: 'Perfume FES!! 2014×秦基博',
    event_type: 'LIVE',
    tour_id: 11,
    sub_name: '香川公演',
    songs: [
      [
        108, // Enter the Sphere
        92, // Spending all my time
        73, // レーザービーム
        24, // ポリリズム
        MC,
        120, // Sweet Refrain
        30, // マカロニ
        20, // パーフェクトスター・パーフェクトスタイル
        PTA,
        70, // FAKE IT
        105, // Handy Man
        22, // チョコレイト・ディスコ
        84, // MY COLOR
        // (アンコール×秦基博),
        // アイ,
        30, // マカロニ
      ],

    ],
    live_house: 117
  },
  {
    id: 199,
    date: '2014/04/11',
    name: 'Perfume FES!! 2014×高橋優',
    event_type: 'LIVE',
    tour_id: 11,
    sub_name: '鹿児島公演',
    songs: [
      [
        108, // Enter the Sphere
        92, // Spending all my time
        73, // レーザービーム
        24, // ポリリズム
        MC,
        120, // Sweet Refrain
        30, // マカロニ
        20, // パーフェクトスター・パーフェクトスタイル
        PTA,
        70, // FAKE IT
        105, // Handy Man
        22, // チョコレイト・ディスコ
        84, // MY COLOR
        // (アンコール×高橋優),
        18, // エレクトロ・ワールド
        // 福笑い,
      ],

    ],
    live_house: 118
  },
  {
    id: 200,
    date: '2014/04/29',
    name: 'REQUESTAGE 12',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        88, // Spring of Life
        24, // ポリリズム
        MC,
        120, // Sweet Refrain
        PTA,
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 52
  },
  {
    id: 201,
    date: '2014/05/25',
    name: 'METROCK',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        48, // ワンルーム・ディスコ
        88, // Spring of Life
        MC,
        120, // Sweet Refrain
        112, // 1mm
        29, // Baby cruising Love
        PTA,
        101, // だいじょばない
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 101
  },
  {
    id: 202,
    date: '2014/05/29',
    name: 'SAYONARA 国立競技場FINAL WEEK『JAPAN NIGHT』',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        41, // edge
        88, // Spring of Life
        104, // Magic of Love
        MC,
        PTA,
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],

    ],
    live_house: 119
  },
  {
    id: 203,
    date: '2014/07/19',
    name: 'Amuse Fes 2014 BBQ in つま恋～僕らのビートを喰らえコラ！～',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
        92, // Spending all my time
        MC,
        124, // Cling Cling
        30, // マカロニ
        PTA,
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 109
  },
  {
    id: 204,
    date: '2014/08/01',
    name: 'Perfume 5th Tour 2014『ぐるんぐるん』',
    event_type: 'LIVE',
    tour_id: 12,
    sub_name: '広島公演',
    songs: [
      [
        // OP,
        124, // Cling Cling
        105, // Handy Man
        111, // Clockwork
        73, // レーザービーム
        MC,
        127, // いじわるなハロー
        57, // I still love U
        121, // 恋は前傾姿勢
        197, // EPISODE 0
        18, // エレクトロ・ワールド
        126, // DISPLAY
        65, // VOICE
        PTA,
        113, // Party Maker
        78, // GLITTER
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        MC,
        125, // Hold Your Hand
      ],
      [
        19, // wonder2
      ],

    ],
    live_house: 86
  },
  {
    id: 205,
    date: '2014/08/02',
    name: 'Perfume 5th Tour 2014『ぐるんぐるん』',
    event_type: 'LIVE',
    tour_id: 12,
    sub_name: '広島公演',
    songs: [
      [
        // OP,
        124, // Cling Cling
        105, // Handy Man
        111, // Clockwork
        73, // レーザービーム
        MC,
        127, // いじわるなハロー
        57, // I still love U
        121, // 恋は前傾姿勢
        197, // EPISODE 0
        18, // エレクトロ・ワールド
        126, // DISPLAY
        65, // VOICE
        PTA,
        113, // Party Maker
        78, // GLITTER
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        MC,
        125, // Hold Your Hand
      ],
      [
        84, // MY COLOR
      ],

    ],
    live_house: 86
  },
  {
    id: 206,
    date: '2014/08/09',
    name: 'Perfume 5th Tour 2014『ぐるんぐるん』',
    event_type: 'LIVE',
    tour_id: 12,
    sub_name: '福岡公演',
    songs: [
      [
        // OP,
        124, // Cling Cling
        105, // Handy Man
        111, // Clockwork
        73, // レーザービーム
        MC,
        127, // いじわるなハロー
        57, // I still love U
        121, // 恋は前傾姿勢
        197, // EPISODE 0
        18, // エレクトロ・ワールド
        126, // DISPLAY
        25, // SEVENTH HEAVEN
        PTA,
        113, // Party Maker
        78, // GLITTER
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        MC,
        125, // Hold Your Hand
      ],
      [
        39, // Puppy love
      ],

    ],
    live_house: 120
  },
  {
    id: 207,
    date: '2014/08/10',
    name: 'Perfume 5th Tour 2014『ぐるんぐるん』',
    event_type: 'LIVE',
    tour_id: 12,
    sub_name: '福岡公演',
    songs: [
      [
        // OP,
        124, // Cling Cling
        105, // Handy Man
        111, // Clockwork
        73, // レーザービーム
        MC,
        127, // いじわるなハロー
        57, // I still love U
        121, // 恋は前傾姿勢
        197, // EPISODE 0
        18, // エレクトロ・ワールド
        126, // DISPLAY
        25, // SEVENTH HEAVEN
        PTA,
        113, // Party Maker
        78, // GLITTER
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        MC,
        125, // Hold Your Hand
      ],
      [
        19, // wonder2
      ],

    ],
    live_house: 120
  },
  {
    id: 208,
    date: '2014/08/19',
    name: 'Perfume 5th Tour 2014『ぐるんぐるん』',
    event_type: 'LIVE',
    tour_id: 12,
    sub_name: '大阪公演',
    songs: [
      [
        // OP,
        124, // Cling Cling
        105, // Handy Man
        111, // Clockwork
        73, // レーザービーム
        MC,
        127, // いじわるなハロー
        57, // I still love U
        121, // 恋は前傾姿勢
        197, // EPISODE 0
        18, // エレクトロ・ワールド
        126, // DISPLAY
        25, // SEVENTH HEAVEN
        PTA,
        113, // Party Maker
        78, // GLITTER
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        MC,
        125, // Hold Your Hand
      ],
      [
        84, // MY COLOR
      ],

    ],
    live_house: 52
  },
  {
    id: 209,
    date: '2014/08/20',
    name: 'Perfume 5th Tour 2014『ぐるんぐるん』',
    event_type: 'LIVE',
    tour_id: 12,
    sub_name: '大阪公演',
    songs: [
      [
        // OP,
        124, // Cling Cling
        105, // Handy Man
        111, // Clockwork
        73, // レーザービーム
        MC,
        127, // いじわるなハロー
        57, // I still love U
        121, // 恋は前傾姿勢
        197, // EPISODE 0
        18, // エレクトロ・ワールド
        126, // DISPLAY
        25, // SEVENTH HEAVEN
        PTA,
        113, // Party Maker
        78, // GLITTER
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        MC,
        125, // Hold Your Hand
      ],
      [
        19, // wonder2
      ],

    ],
    live_house: 52
  },
  {
    id: 210,
    date: '2014/08/30',
    name: 'Perfume 5th Tour 2014『ぐるんぐるん』',
    event_type: 'LIVE',
    tour_id: 12,
    sub_name: '北海道公演',
    songs: [
      [
        // OP,
        124, // Cling Cling
        105, // Handy Man
        111, // Clockwork
        73, // レーザービーム
        MC,
        127, // いじわるなハロー
        57, // I still love U
        121, // 恋は前傾姿勢
        197, // EPISODE 0
        18, // エレクトロ・ワールド
        126, // DISPLAY
        25, // SEVENTH HEAVEN
        PTA,
        113, // Party Maker
        78, // GLITTER
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        MC,
        125, // Hold Your Hand
      ],
      [
        39, // Puppy love
      ],

    ],
    live_house: 89
  },
  {
    id: 211,
    date: '2014/09/05',
    name: 'Perfume 5th Tour 2014『ぐるんぐるん』',
    event_type: 'LIVE',
    tour_id: 12,
    sub_name: '愛知公演',
    songs: [
      [
        // OP,
        124, // Cling Cling
        105, // Handy Man
        111, // Clockwork
        73, // レーザービーム
        MC,
        127, // いじわるなハロー
        57, // I still love U
        121, // 恋は前傾姿勢
        197, // EPISODE 0
        18, // エレクトロ・ワールド
        126, // DISPLAY
        25, // SEVENTH HEAVEN
        PTA,
        113, // Party Maker
        78, // GLITTER
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        MC,
        125, // Hold Your Hand
      ],
      [
        19, // wonder2
      ],

    ],
    live_house: 63
  },
  {
    id: 212,
    date: '2014/09/06',
    name: 'Perfume 5th Tour 2014『ぐるんぐるん』',
    event_type: 'LIVE',
    tour_id: 12,
    sub_name: '愛知公演',
    songs: [
      [
        // OP,
        124, // Cling Cling
        105, // Handy Man
        111, // Clockwork
        73, // レーザービーム
        MC,
        127, // いじわるなハロー
        57, // I still love U
        121, // 恋は前傾姿勢
        197, // EPISODE 0
        18, // エレクトロ・ワールド
        126, // DISPLAY
        25, // SEVENTH HEAVEN
        PTA,
        113, // Party Maker
        78, // GLITTER
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        MC,
        125, // Hold Your Hand
      ],
      [
        39, // Puppy love
      ],

    ],
    live_house: 63
  },
  {
    id: 213,
    date: '2014/09/13',
    name: 'Perfume 5th Tour 2014『ぐるんぐるん』',
    event_type: 'LIVE',
    tour_id: 12,
    sub_name: '宮城公演',
    songs: [
      [
        // OP,
        124, // Cling Cling
        105, // Handy Man
        111, // Clockwork
        73, // レーザービーム
        MC,
        127, // いじわるなハロー
        57, // I still love U
        121, // 恋は前傾姿勢
        197, // EPISODE 0
        18, // エレクトロ・ワールド
        126, // DISPLAY
        25, // SEVENTH HEAVEN
        PTA,
        113, // Party Maker
        78, // GLITTER
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        MC,
        125, // Hold Your Hand
      ],
      [
        19, // wonder2
      ],

    ],
    live_house: 121
  },
  {
    id: 214,
    date: '2014/09/17',
    name: 'Perfume 5th Tour 2014『ぐるんぐるん』',
    event_type: 'LIVE',
    tour_id: 12,
    sub_name: '東京公演',
    songs: [
      [
        // OP,
        124, // Cling Cling
        105, // Handy Man
        111, // Clockwork
        73, // レーザービーム
        MC,
        127, // いじわるなハロー
        57, // I still love U
        121, // 恋は前傾姿勢
        197, // EPISODE 0
        18, // エレクトロ・ワールド
        126, // DISPLAY
        25, // SEVENTH HEAVEN
        PTA,
        113, // Party Maker
        78, // GLITTER
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        MC,
        125, // Hold Your Hand
      ],
      [
        15, // コンピュータードライビング
        // 徒競走,
        39, // Puppy love
      ],

    ],
    live_house: 53
  },
  {
    id: 215,
    date: '2014/09/18',
    name: 'Perfume 5th Tour 2014『ぐるんぐるん』',
    event_type: 'LIVE',
    tour_id: 12,
    sub_name: '東京公演',
    songs: [
      [
        // OP,
        124, // Cling Cling
        105, // Handy Man
        111, // Clockwork
        73, // レーザービーム
        MC,
        127, // いじわるなハロー
        57, // I still love U
        121, // 恋は前傾姿勢
        197, // EPISODE 0
        18, // エレクトロ・ワールド
        126, // DISPLAY
        25, // SEVENTH HEAVEN
        PTA,
        113, // Party Maker
        78, // GLITTER
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        MC,
        125, // Hold Your Hand
      ],
      [
        29, // Baby cruising Love
        // 徒競走,
        17, // Perfume
      ],

    ],
    live_house: 53
  },
  {
    id: 216,
    date: '2014/09/20',
    name: 'Perfume 5th Tour 2014『ぐるんぐるん』',
    event_type: 'LIVE',
    tour_id: 12,
    sub_name: '東京公演',
    songs: [
      [
        // OP,
        124, // Cling Cling
        105, // Handy Man
        111, // Clockwork
        73, // レーザービーム
        MC,
        127, // いじわるなハロー
        57, // I still love U
        121, // 恋は前傾姿勢
        197, // EPISODE 0
        18, // エレクトロ・ワールド
        126, // DISPLAY
        25, // SEVENTH HEAVEN
        PTA,
        113, // Party Maker
        78, // GLITTER
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        MC,
        125, // Hold Your Hand
      ],
      [
        24, // ポリリズム
        // 徒競走,
        19, // wonder2
      ],

    ],
    live_house: 53
  },
  {
    id: 217,
    date: '2014/09/21',
    name: 'Perfume 5th Tour 2014『ぐるんぐるん』',
    event_type: 'LIVE',
    tour_id: 12,
    sub_name: '東京公演',
    songs: [
      [
        // OP,
        124, // Cling Cling
        105, // Handy Man
        111, // Clockwork
        73, // レーザービーム
        MC,
        127, // いじわるなハロー
        57, // I still love U
        121, // 恋は前傾姿勢
        197, // EPISODE 0
        18, // エレクトロ・ワールド
        126, // DISPLAY
        25, // SEVENTH HEAVEN
        PTA,
        113, // Party Maker
        78, // GLITTER
        35, // セラミックガール
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
        MC,
        125, // Hold Your Hand
      ],
      [
        13, // リニアモーターガール
        // 徒競走,
        17, // Perfume
        45, // 願い
      ],

    ],
    live_house: 53
  },
  {
    id: 218,
    date: '2014/10/12',
    name: 'Perfume FES!! 2014×マキシマム ザ ホルモン',
    event_type: 'LIVE',
    tour_id: 11,
    sub_name: '韓国公演(AX-KOREA)',
    songs: [
      [
        108, // Enter the Sphere
        92, // Spending all my time
        73, // レーザービーム
        24, // ポリリズム
        MC,
        124, // Cling Cling
        30, // マカロニ
        104, // Magic of Love
        PTA,
        70, // FAKE IT
        105, // Handy Man
        22, // チョコレイト・ディスコ
        84, // MY COLOR
        // (アンコール×ナヲ),
        73, // レーザービーム
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 122
  },
  {
    id: 219,
    date: '2014/10/31',
    name: 'Perfume WORLD TOUR 3rd',
    event_type: 'LIVE',
    tour_id: 13,
    sub_name: '台湾公演(Taipei InternationalConvention Center)',
    songs: [
      [
        108, // Enter the Sphere
        88, // Spring of Life
        18, // エレクトロ・ワールド
        MC,
        127, // いじわるなハロー
        25, // SEVENTH HEAVEN
        124, // Cling Cling
        119, // Spending all my time(DV&LM Mix)
        34, // GAME
        44, // Dream Fighter
        MC,
        24, // ポリリズム
        PTA,
        113, // Party Maker
        78, // GLITTER
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],
      [
        101, // だいじょばない
        70, // FAKE IT
      ],

    ],
    live_house: 123
  },
  {
    id: 220,
    date: '2014/11/02',
    name: 'Perfume WORLD TOUR 3rd',
    event_type: 'LIVE',
    tour_id: 13,
    sub_name: 'シンガポール公演(Resorts World™ Theatre,Resorts World Sentosa)',
    songs: [
      [
        108, // Enter the Sphere
        88, // Spring of Life
        124, // Cling Cling
        MC,
        127, // いじわるなハロー
        25, // SEVENTH HEAVEN
        125, // Hold Your Hand
        119, // Spending all my time(DV&LM Mix)
        34, // GAME
        44, // Dream Fighter
        MC,
        24, // ポリリズム
        PTA,
        113, // Party Maker
        78, // GLITTER
        22, // チョコレイト・ディスコ
      ],
      [
        70, // FAKE IT
        84, // MY COLOR
      ],

    ],
    live_house: 124
  },
  {
    id: 221,
    date: '2014/11/09',
    name: 'Perfume WORLD TOUR 3rd',
    event_type: 'LIVE',
    tour_id: 13,
    sub_name: 'アメリカ公演(HOLLYWOOD PALLADIUM)',
    songs: [
      [
        108, // Enter the Sphere
        88, // Spring of Life
        124, // Cling Cling
        48, // ワンルーム・ディスコ
        MC,
        127, // いじわるなハロー
        25, // SEVENTH HEAVEN
        125, // Hold Your Hand
        119, // Spending all my time(DV&LM Mix)
        34, // GAME
        44, // Dream Fighter
        PTA,
        113, // Party Maker
        78, // GLITTER
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],
      [
        70, // FAKE IT
        84, // MY COLOR
      ],

    ],
    live_house: 125
  },
  {
    id: 222,
    date: '2014/11/12',
    name: 'Perfume WORLD TOUR 3rd',
    event_type: 'LIVE',
    tour_id: 13,
    sub_name: 'イギリス公演(EVENTIM APOLLOHAMMERSMITH)',
    songs: [
      [
        108, // Enter the Sphere
        88, // Spring of Life
        124, // Cling Cling
        48, // ワンルーム・ディスコ
        MC,
        69, // ねぇ
        25, // SEVENTH HEAVEN
        125, // Hold Your Hand
        119, // Spending all my time(DV&LM Mix)
        34, // GAME
        44, // Dream Fighter
        PTA,
        113, // Party Maker
        78, // GLITTER
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],
      [
        105, // Handy Man
        84, // MY COLOR
      ],

    ],
    live_house: 126
  },
  {
    id: 223,
    date: '2014/11/15',
    name: 'Perfume WORLD TOUR 3rd',
    event_type: 'LIVE',
    tour_id: 13,
    sub_name: 'アメリカ公演(HAMMERSTEIN BALLROOM)',
    songs: [
      [
        108, // Enter the Sphere
        88, // Spring of Life
        124, // Cling Cling
        48, // ワンルーム・ディスコ
        MC,
        69, // ねぇ
        25, // SEVENTH HEAVEN
        125, // Hold Your Hand
        119, // Spending all my time(DV&LM Mix)
        34, // GAME
        44, // Dream Fighter
        PTA,
        113, // Party Maker
        78, // GLITTER
        22, // チョコレイト・ディスコ
        24, // ポリリズム
      ],
      [
        70, // FAKE IT
        84, // MY COLOR
      ],

    ],
    live_house: 127
  },
  {
    id: 224,
    date: '2014/12/20',
    name: '仮面チャウダー 〜YAJIO CRAZY〜チャウ大ユニバーシティインターナショナルコラーゲンハイスクール',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
      ],

    ],
    live_house: 52
  },
  {
    id: 225,
    date: '2015/03/17',
    name: 'SXSW 2015',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        148, // STORY
        92, // Spending all my time
        24, // ポリリズム
        77, // スパイス
        104, // Magic of Love
        PTA,
        70, // FAKE IT
        18, // エレクトロ・ワールド
        MC,
        22, // チョコレイト・ディスコ
        MC,
        88, // Spring of Life
      ],

    ],
    live_house: 128
  },
  {
    id: 226,
    date: '2015/05/23',
    name: 'METROCK',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        133, // Pick Me Up
        24, // ポリリズム
        124, // Cling Cling
        MC,
        127, // いじわるなハロー
        25, // SEVENTH HEAVEN
        132, // Relax In The City
        PTA,
        113, // Party Maker
        73, // レーザービーム
        84, // MY COLOR
      ],
      [
        70, // FAKE IT
        // (コラボ×ナヲ),
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 101
  },
  {
    id: 227,
    date: '2015/07/19',
    name: 'Amuse Fes 2015 BBQ in つま恋～僕らのビートを喰らえコラ！～',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        132, // Relax In The City
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        MC,
        133, // Pick Me Up
        69, // ねぇ
        PTA,
        70, // FAKE IT
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 109
  },
  {
    id: 228,
    date: '2015/08/01',
    name: 'ROCK IN JAPAN FES',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        133, // Pick Me Up
        92, // Spending all my time
        18, // エレクトロ・ワールド
        MC,
        132, // Relax In The City
        25, // SEVENTH HEAVEN
        PTA,
        113, // Party Maker
        69, // ねぇ
        22, // チョコレイト・ディスコ
        70, // FAKE IT
      ],

    ],
    live_house: 54
  },
  {
    id: 229,
    date: '2015/08/14',
    name: 'SONIC MANIA',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        133, // Pick Me Up
        73, // レーザービーム
        78, // GLITTER
        88, // Spring of Life
        MC,
        54, // NIGHT FLIGHT
        PTA,
        113, // Party Maker
        101, // だいじょばない
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 110
  },
  {
    id: 230,
    date: '2015/08/15',
    name: 'RISING SUN ROCK FESTIVAL',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        133, // Pick Me Up
        92, // Spending all my time
        104, // Magic of Love
        MC,
        62, // ナチュラルに恋して
        30, // マカロニ
        20, // パーフェクトスター・パーフェクトスタイル
        PTA,
        70, // FAKE IT
        18, // エレクトロ・ワールド
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 92
  },
  {
    id: 231,
    date: '2015/08/22',
    name: 'MONSTER baSH',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        133, // Pick Me Up
        92, // Spending all my time
        104, // Magic of Love
        MC,
        PTA,
        22, // チョコレイト・ディスコ
        70, // FAKE IT
      ],

    ],
    live_house: 70
  },
  {
    id: 232,
    date: '2015/08/30',
    name: 'SWEET LOVE SHOWER',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        133, // Pick Me Up
        48, // ワンルーム・ディスコ
        MC,
        62, // ナチュラルに恋して
        20, // パーフェクトスター・パーフェクトスタイル
        PTA,
        113, // Party Maker
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 95
  },
  {
    id: 233,
    date: '2015/09/21',
    name: 'Perfume Anniversary 10days 2015 PPPPPPPPPPday1『P.T.A.サミット』',
    event_type: 'LIVE',
    tour_id: 14,
    sub_name: '東京公演',
    songs: [
      [
        15, // コンピュータードライビング
        10, // おいしいレシピ
        5, // スウィートドーナッツ
        14, // ファンデーション
        178, // カウンターアトラクション
        3, // 彼氏募集中
        MC,
        13, // リニアモーターガール
        24, // ポリリズム
        PTA,
        22, // チョコレイト・ディスコ
        19, // wonder2
      ],

    ],
    live_house: 129
  },
  {
    id: 234,
    date: '2015/09/22',
    name: 'Perfume Anniversary 10days 2015 PPPPPPPPPPday2『Perfume FES!! 2015 〜三人祭〜』',
    event_type: 'LIVE',
    tour_id: 14,
    sub_name: '東京公演',
    songs: [
      [
        // (コラボ×Negicco),
        // 圧倒的なスタイル,
        // (コラボ×WEAVER),
        37, // シークレットシークレット
        // (コラボ×フジファブリック),
        // 夜明けのBEAT,
        133, // Pick Me Up
        73, // レーザービーム
        78, // GLITTER
        54, // NIGHT FLIGHT
        PTA,
        70, // FAKE IT
        22, // チョコレイト・ディスコ
        // (アンコール×全員),
        39, // Puppy love
      ],

    ],
    live_house: 21
  },
  {
    id: 235,
    date: '2015/09/23',
    name: 'Perfume Anniversary 10days 2015 PPPPPPPPPPday3『第3回 Perfumeダンスコンテスト～魅せよ、武道館！～』',
    event_type: 'LIVE',
    tour_id: 14,
    sub_name: '東京公演',
    songs: [
      [
        133, // Pick Me Up
        20, // パーフェクトスター・パーフェクトスタイル
        PTA,
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 21
  },
  {
    id: 236,
    date: '2015/09/26',
    name: 'Perfume Anniversary 10days 2015 PPPPPPPPPPday5『LIVE 3:5:6:9』',
    event_type: 'LIVE',
    tour_id: 14,
    sub_name: '東京公演',
    songs: [
      [
        70, // FAKE IT
        54, // NIGHT FLIGHT
        16, // コンピューターシティ
        133, // Pick Me Up
        MC,
        // (3:5:6:9),
        100, // 未来のミュージアム
        112, // 1mm
        37, // シークレットシークレット
        18, // エレクトロ・ワールド
        23, // Twinkle Snow Powdery Snow
        34, // GAME
        148, // STORY
        113, // Party Maker
        PTA,
        48, // ワンルーム・ディスコ
        44, // Dream Fighter
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],
      [
        138, // STAR TRAIN
      ],

    ],
    live_house: 21
  },
  {
    id: 237,
    date: '2015/09/27',
    name: 'Perfume Anniversary 10days 2015 PPPPPPPPPPday6『LIVE 3:5:6:9』',
    event_type: 'LIVE',
    tour_id: 14,
    sub_name: '東京公演',
    songs: [
      [
        70, // FAKE IT
        54, // NIGHT FLIGHT
        16, // コンピューターシティ
        133, // Pick Me Up
        MC,
        // (3:5:6:9),
        73, // レーザービーム
        100, // 未来のミュージアム
        23, // Twinkle Snow Powdery Snow
        112, // 1mm
        3, // 彼氏募集中
        34, // GAME
        148, // STORY
        113, // Party Maker
        44, // Dream Fighter
        PTA,
        48, // ワンルーム・ディスコ
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],
      [
        138, // STAR TRAIN
      ],

    ],
    live_house: 21
  },
  {
    id: 238,
    date: '2015/09/29',
    name: 'Perfume Anniversary 10days 2015 PPPPPPPPPPday7『LIVE 3:5:6:9』',
    event_type: 'LIVE',
    tour_id: 14,
    sub_name: '東京公演',
    songs: [
      [
        70, // FAKE IT
        54, // NIGHT FLIGHT
        16, // コンピューターシティ
        133, // Pick Me Up
        MC,
        // (3:5:6:9),
        37, // シークレットシークレット
        5, // スウィートドーナッツ
        74, // 微かなカオリ
        23, // Twinkle Snow Powdery Snow
        3, // 彼氏募集中
        34, // GAME
        148, // STORY
        113, // Party Maker
        44, // Dream Fighter
        PTA,
        48, // ワンルーム・ディスコ
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],
      [
        138, // STAR TRAIN
      ],

    ],
    live_house: 21
  },
  {
    id: 239,
    date: '2015/09/30',
    name: 'Perfume Anniversary 10days 2015 PPPPPPPPPPday8『LIVE 3:5:6:9』',
    event_type: 'LIVE',
    tour_id: 14,
    sub_name: '東京公演',
    songs: [
      [
        70, // FAKE IT
        54, // NIGHT FLIGHT
        16, // コンピューターシティ
        133, // Pick Me Up
        MC,
        // (3:5:6:9),
        69, // ねぇ
        74, // 微かなカオリ
        5, // スウィートドーナッツ
        100, // 未来のミュージアム
        3, // 彼氏募集中
        34, // GAME
        148, // STORY
        113, // Party Maker
        44, // Dream Fighter
        PTA,
        48, // ワンルーム・ディスコ
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],
      [
        138, // STAR TRAIN
      ],

    ],
    live_house: 21
  },
  {
    id: 240,
    date: '2015/10/06',
    name: 'Perfume Anniversary 10days 2015 PPPPPPPPPPday9『LIVE 3:5:6:9』',
    event_type: 'LIVE',
    tour_id: 14,
    sub_name: '広島公演',
    songs: [
      [
        70, // FAKE IT
        54, // NIGHT FLIGHT
        16, // コンピューターシティ
        133, // Pick Me Up
        MC,
        // (3:5:6:9),
        74, // 微かなカオリ
        18, // エレクトロ・ワールド
        3, // 彼氏募集中
        100, // 未来のミュージアム
        3, // 彼氏募集中
        34, // GAME
        148, // STORY
        113, // Party Maker
        44, // Dream Fighter
        PTA,
        48, // ワンルーム・ディスコ
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],
      [
        138, // STAR TRAIN
      ],

    ],
    live_house: 86
  },
  {
    id: 241,
    date: '2015/10/07',
    name: 'Perfume Anniversary 10days 2015 PPPPPPPPPPday10『LIVE 3:5:6:9』',
    event_type: 'LIVE',
    tour_id: 14,
    sub_name: '広島公演',
    songs: [
      [
        70, // FAKE IT
        54, // NIGHT FLIGHT
        16, // コンピューターシティ
        133, // Pick Me Up
        MC,
        // (3:5:6:9),
        3, // 彼氏募集中
        5, // スウィートドーナッツ
        18, // エレクトロ・ワールド
        25, // SEVENTH HEAVEN
        101, // だいじょばない
        34, // GAME
        148, // STORY
        113, // Party Maker
        44, // Dream Fighter
        PTA,
        48, // ワンルーム・ディスコ
        22, // チョコレイト・ディスコ
        39, // Puppy love
      ],
      [
        138, // STAR TRAIN
      ],

    ],
    live_house: 86
  },
  {
    id: 242,
    date: '2015/12/01',
    name: 'Act Against AIDS',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        73, // レーザービーム
        133, // Pick Me Up
        PTA,
        22, // チョコレイト・ディスコ
        84, // MY COLOR
      ],

    ],
    live_house: 21
  },
  {
    id: 243,
    date: '2016/01/28',
    name: 'チャットモンチーの徳島こなそんそんフェス2016～みな、おいでなしてよ！～',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        133, // Pick Me Up
        18, // エレクトロ・ワールド
        138, // STAR TRAIN
        PTA,
        70, // FAKE IT
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 130
  },
  {
    id: 244,
    date: '2016/05/03',
    name: 'Perfume 6th Tour 2016 『COSMIC EXPLORER』',
    event_type: 'LIVE',
    tour_id: 15,
    sub_name: '宮城公演',
    songs: [
      [
        // OP,
        148, // STORY
        155, // FLASH
        44, // Dream Fighter
        147, // Next Stage with YOU
        MC,
        // (よせあつめどれー),
        132, // Relax In The City
        134, // 透明人間
        92, // Spending all my time
        61, // 不自然なガール
        23, // Twinkle Snow Powdery Snow
        16, // コンピューターシティ
        140, // イミテーションワールド
        120, // Sweet Refrain
        151, // Baby Face
        139, // TOKIMEKI LIGHTS
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        146, // Miracle Worker
        // (3:5:6:9),
        18, // エレクトロ・ワールド
        25, // SEVENTH HEAVEN
        PTA,
        105, // Handy Man
        125, // Hold Your Hand
        MC,
        138, // STAR TRAIN
      ],

    ],
    live_house: 121
  },
  {
    id: 245,
    date: '2016/05/04',
    name: 'Perfume 6th Tour 2016 『COSMIC EXPLORER』',
    event_type: 'LIVE',
    tour_id: 15,
    sub_name: '宮城公演',
    songs: [
      [
        // OP,
        148, // STORY
        155, // FLASH
        44, // Dream Fighter
        147, // Next Stage with YOU
        MC,
        // (よせあつめどれー),
        132, // Relax In The City
        134, // 透明人間
        92, // Spending all my time
        61, // 不自然なガール
        23, // Twinkle Snow Powdery Snow
        16, // コンピューターシティ
        140, // イミテーションワールド
        120, // Sweet Refrain
        151, // Baby Face
        139, // TOKIMEKI LIGHTS
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        146, // Miracle Worker
        // (3:5:6:9),
        PTA,
        39, // Puppy love
        7, // ジェニーはご機嫌ななめ
        84, // MY COLOR
        125, // Hold Your Hand
        MC,
        138, // STAR TRAIN
      ],

    ],
    live_house: 121
  },
  {
    id: 246,
    date: '2016/05/21',
    name: 'Perfume 6th Tour 2016 『COSMIC EXPLORER』',
    event_type: 'LIVE',
    tour_id: 15,
    sub_name: '静岡公演',
    songs: [
      [
        // OP,
        148, // STORY
        155, // FLASH
        44, // Dream Fighter
        147, // Next Stage with YOU
        MC,
        // (よせあつめどれー),
        132, // Relax In The City
        134, // 透明人間
        92, // Spending all my time
        61, // 不自然なガール
        23, // Twinkle Snow Powdery Snow
        16, // コンピューターシティ
        140, // イミテーションワールド
        120, // Sweet Refrain
        151, // Baby Face
        139, // TOKIMEKI LIGHTS
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        146, // Miracle Worker
        // (3:5:6:9),
        PTA,
        88, // Spring of Life
        18, // エレクトロ・ワールド
        24, // ポリリズム
        125, // Hold Your Hand
        MC,
        138, // STAR TRAIN
      ],

    ],
    live_house: 85
  },
  {
    id: 247,
    date: '2016/05/22',
    name: 'Perfume 6th Tour 2016 『COSMIC EXPLORER』',
    event_type: 'LIVE',
    tour_id: 15,
    sub_name: '静岡公演',
    songs: [
      [
        // OP,
        148, // STORY
        155, // FLASH
        44, // Dream Fighter
        147, // Next Stage with YOU
        MC,
        // (よせあつめどれー),
        132, // Relax In The City
        134, // 透明人間
        92, // Spending all my time
        61, // 不自然なガール
        23, // Twinkle Snow Powdery Snow
        16, // コンピューターシティ
        140, // イミテーションワールド
        120, // Sweet Refrain
        151, // Baby Face
        139, // TOKIMEKI LIGHTS
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        146, // Miracle Worker
        // (3:5:6:9),
        PTA,
        105, // Handy Man
        70, // FAKE IT
        22, // チョコレイト・ディスコ
        125, // Hold Your Hand
        MC,
        138, // STAR TRAIN
      ],

    ],
    live_house: 85
  },
  {
    id: 248,
    date: '2016/05/28',
    name: 'Perfume 6th Tour 2016 『COSMIC EXPLORER』',
    event_type: 'LIVE',
    tour_id: 15,
    sub_name: '福井公演',
    songs: [
      [
        // OP,
        148, // STORY
        155, // FLASH
        44, // Dream Fighter
        147, // Next Stage with YOU
        MC,
        // (よせあつめどれー),
        132, // Relax In The City
        134, // 透明人間
        92, // Spending all my time
        61, // 不自然なガール
        23, // Twinkle Snow Powdery Snow
        16, // コンピューターシティ
        140, // イミテーションワールド
        120, // Sweet Refrain
        139, // TOKIMEKI LIGHTS
        151, // Baby Face
        54, // NIGHT FLIGHT
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        146, // Miracle Worker
        // (3:5:6:9),
        7, // ジェニーはご機嫌ななめ
        PTA,
        22, // チョコレイト・ディスコ
        3, // 彼氏募集中
        125, // Hold Your Hand
        MC,
        138, // STAR TRAIN
      ],

    ],
    live_house: 131
  },
  {
    id: 249,
    date: '2016/05/29',
    name: 'Perfume 6th Tour 2016 『COSMIC EXPLORER』',
    event_type: 'LIVE',
    tour_id: 15,
    sub_name: '福井公演',
    songs: [
      [
        // OP,
        148, // STORY
        155, // FLASH
        44, // Dream Fighter
        147, // Next Stage with YOU
        MC,
        // (よせあつめどれー),
        132, // Relax In The City
        134, // 透明人間
        92, // Spending all my time
        61, // 不自然なガール
        23, // Twinkle Snow Powdery Snow
        16, // コンピューターシティ
        140, // イミテーションワールド
        120, // Sweet Refrain
        139, // TOKIMEKI LIGHTS
        151, // Baby Face
        54, // NIGHT FLIGHT
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        146, // Miracle Worker
        // (3:5:6:9),
        24, // ポリリズム
        PTA,
        105, // Handy Man
        84, // MY COLOR
        125, // Hold Your Hand
        MC,
        138, // STAR TRAIN
      ],

    ],
    live_house: 131
  },
  {
    id: 250,
    date: '2016/06/04',
    name: 'Perfume 6th Tour 2016 『COSMIC EXPLORER』',
    event_type: 'LIVE',
    tour_id: 15,
    sub_name: '徳島公演',
    songs: [
      [
        // OP,
        148, // STORY
        155, // FLASH
        44, // Dream Fighter
        147, // Next Stage with YOU
        MC,
        // (よせあつめどれー),
        132, // Relax In The City
        134, // 透明人間
        92, // Spending all my time
        61, // 不自然なガール
        23, // Twinkle Snow Powdery Snow
        16, // コンピューターシティ
        140, // イミテーションワールド
        120, // Sweet Refrain
        139, // TOKIMEKI LIGHTS
        151, // Baby Face
        54, // NIGHT FLIGHT
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        146, // Miracle Worker
        // (3:5:6:9),
        PTA,
        88, // Spring of Life
        7, // ジェニーはご機嫌ななめ
        3, // 彼氏募集中
        125, // Hold Your Hand
        MC,
        138, // STAR TRAIN
      ],

    ],
    live_house: 130
  },
  {
    id: 251,
    date: '2016/06/05',
    name: 'Perfume 6th Tour 2016 『COSMIC EXPLORER』',
    event_type: 'LIVE',
    tour_id: 15,
    sub_name: '徳島公演',
    songs: [
      [
        // OP,
        148, // STORY
        155, // FLASH
        44, // Dream Fighter
        147, // Next Stage with YOU
        MC,
        // (よせあつめどれー),
        132, // Relax In The City
        134, // 透明人間
        92, // Spending all my time
        61, // 不自然なガール
        23, // Twinkle Snow Powdery Snow
        16, // コンピューターシティ
        140, // イミテーションワールド
        120, // Sweet Refrain
        139, // TOKIMEKI LIGHTS
        151, // Baby Face
        54, // NIGHT FLIGHT
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        146, // Miracle Worker
        // (3:5:6:9),
        PTA,
        70, // FAKE IT
        18, // エレクトロ・ワールド
        22, // チョコレイト・ディスコ
        125, // Hold Your Hand
        MC,
        138, // STAR TRAIN
      ],

    ],
    live_house: 130
  },
  {
    id: 252,
    date: '2016/06/16',
    name: 'Perfume 6th Tour 2016 『COSMIC EXPLORER』',
    event_type: 'LIVE',
    tour_id: 15,
    sub_name: '千葉公演',
    songs: [
      [
        // OP,
        148, // STORY
        155, // FLASH
        44, // Dream Fighter
        147, // Next Stage with YOU
        MC,
        // (よせあつめどれー),
        132, // Relax In The City
        134, // 透明人間
        92, // Spending all my time
        61, // 不自然なガール
        23, // Twinkle Snow Powdery Snow
        16, // コンピューターシティ
        140, // イミテーションワールド
        120, // Sweet Refrain
        139, // TOKIMEKI LIGHTS
        151, // Baby Face
        54, // NIGHT FLIGHT
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        146, // Miracle Worker
        // (3:5:6:9),
        PTA,
        7, // ジェニーはご機嫌ななめ
        24, // ポリリズム
        22, // チョコレイト・ディスコ
        39, // Puppy love
        MC,
        138, // STAR TRAIN
      ],

    ],
    live_house: 65
  },
  {
    id: 253,
    date: '2016/06/18',
    name: 'Perfume 6th Tour 2016 『COSMIC EXPLORER』',
    event_type: 'LIVE',
    tour_id: 15,
    sub_name: '千葉公演',
    songs: [
      [
        // OP,
        148, // STORY
        155, // FLASH
        44, // Dream Fighter
        147, // Next Stage with YOU
        MC,
        // (よせあつめどれー),
        132, // Relax In The City
        134, // 透明人間
        92, // Spending all my time
        61, // 不自然なガール
        23, // Twinkle Snow Powdery Snow
        16, // コンピューターシティ
        140, // イミテーションワールド
        120, // Sweet Refrain
        139, // TOKIMEKI LIGHTS
        151, // Baby Face
        54, // NIGHT FLIGHT
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        146, // Miracle Worker
        // (3:5:6:9),
        PTA,
        113, // Party Maker
        22, // チョコレイト・ディスコ
        18, // エレクトロ・ワールド
        39, // Puppy love
        MC,
        138, // STAR TRAIN
      ],

    ],
    live_house: 65
  },
  {
    id: 254,
    date: '2016/06/19',
    name: 'Perfume 6th Tour 2016 『COSMIC EXPLORER』',
    event_type: 'LIVE',
    tour_id: 15,
    sub_name: '千葉公演',
    songs: [
      [
        // OP,
        148, // STORY
        155, // FLASH
        44, // Dream Fighter
        147, // Next Stage with YOU
        MC,
        // (よせあつめどれー),
        132, // Relax In The City
        134, // 透明人間
        92, // Spending all my time
        61, // 不自然なガール
        23, // Twinkle Snow Powdery Snow
        16, // コンピューターシティ
        140, // イミテーションワールド
        120, // Sweet Refrain
        139, // TOKIMEKI LIGHTS
        151, // Baby Face
        54, // NIGHT FLIGHT
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        146, // Miracle Worker
        // (3:5:6:9),
        PTA,
        88, // Spring of Life
        48, // ワンルーム・ディスコ
        78, // GLITTER
        39, // Puppy love
        MC,
        138, // STAR TRAIN
      ],

    ],
    live_house: 65
  },
  {
    id: 255,
    date: '2016/06/25',
    name: 'Perfume 6th Tour 2016 『COSMIC EXPLORER』',
    event_type: 'LIVE',
    tour_id: 15,
    sub_name: '和歌山公演',
    songs: [
      [
        // OP,
        148, // STORY
        155, // FLASH
        44, // Dream Fighter
        147, // Next Stage with YOU
        MC,
        // (よせあつめどれー),
        132, // Relax In The City
        134, // 透明人間
        92, // Spending all my time
        61, // 不自然なガール
        23, // Twinkle Snow Powdery Snow
        16, // コンピューターシティ
        140, // イミテーションワールド
        120, // Sweet Refrain
        139, // TOKIMEKI LIGHTS
        151, // Baby Face
        54, // NIGHT FLIGHT
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        146, // Miracle Worker
        // (3:5:6:9),
        PTA,
        48, // ワンルーム・ディスコ
        24, // ポリリズム
        70, // FAKE IT
        39, // Puppy love
        MC,
        138, // STAR TRAIN
      ],

    ],
    live_house: 132
  },
  {
    id: 256,
    date: '2016/06/26',
    name: 'Perfume 6th Tour 2016 『COSMIC EXPLORER』',
    event_type: 'LIVE',
    tour_id: 15,
    sub_name: '和歌山公演',
    songs: [
      [
        // OP,
        148, // STORY
        155, // FLASH
        44, // Dream Fighter
        147, // Next Stage with YOU
        MC,
        // (よせあつめどれー),
        132, // Relax In The City
        134, // 透明人間
        92, // Spending all my time
        61, // 不自然なガール
        23, // Twinkle Snow Powdery Snow
        16, // コンピューターシティ
        140, // イミテーションワールド
        120, // Sweet Refrain
        139, // TOKIMEKI LIGHTS
        151, // Baby Face
        54, // NIGHT FLIGHT
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        146, // Miracle Worker
        // (3:5:6:9),
        PTA,
        48, // ワンルーム・ディスコ
        18, // エレクトロ・ワールド
        113, // Party Maker
        39, // Puppy love
        MC,
        138, // STAR TRAIN
      ],

    ],
    live_house: 132
  },
  {
    id: 257,
    date: '2016/07/02',
    name: 'Perfume 6th Tour 2016 『COSMIC EXPLORER』',
    event_type: 'LIVE',
    tour_id: 15,
    sub_name: '北海道公演',
    songs: [
      [
        // OP,
        148, // STORY
        155, // FLASH
        44, // Dream Fighter
        147, // Next Stage with YOU
        MC,
        // (よせあつめどれー),
        132, // Relax In The City
        134, // 透明人間
        92, // Spending all my time
        61, // 不自然なガール
        23, // Twinkle Snow Powdery Snow
        16, // コンピューターシティ
        140, // イミテーションワールド
        120, // Sweet Refrain
        139, // TOKIMEKI LIGHTS
        151, // Baby Face
        54, // NIGHT FLIGHT
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        146, // Miracle Worker
        // (3:5:6:9),
        PTA,
        88, // Spring of Life
        70, // FAKE IT
        7, // ジェニーはご機嫌ななめ
        39, // Puppy love
        MC,
        138, // STAR TRAIN
      ],

    ],
    live_house: 133
  },
  {
    id: 258,
    date: '2016/07/03',
    name: 'Perfume 6th Tour 2016 『COSMIC EXPLORER』',
    event_type: 'LIVE',
    tour_id: 15,
    sub_name: '北海道公演',
    songs: [
      [
        // OP,
        148, // STORY
        155, // FLASH
        44, // Dream Fighter
        147, // Next Stage with YOU
        MC,
        // (よせあつめどれー),
        132, // Relax In The City
        134, // 透明人間
        92, // Spending all my time
        61, // 不自然なガール
        23, // Twinkle Snow Powdery Snow
        16, // コンピューターシティ
        140, // イミテーションワールド
        120, // Sweet Refrain
        139, // TOKIMEKI LIGHTS
        151, // Baby Face
        54, // NIGHT FLIGHT
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        146, // Miracle Worker
        // (3:5:6:9),
        3, // 彼氏募集中
        PTA,
        70, // FAKE IT
        22, // チョコレイト・ディスコ
        39, // Puppy love
        MC,
        138, // STAR TRAIN
      ],

    ],
    live_house: 133
  },
  {
    id: 259,
    date: '2016/08/26',
    name: 'Perfume 6th Tour 2016 『COSMIC EXPLORER』',
    event_type: 'LIVE',
    tour_id: 15,
    sub_name: 'アメリカ公演(The Wiltern(LA))',
    songs: [
      [
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        146, // Miracle Worker
        MC,
        147, // Next Stage with YOU
        // (よせあつめどれー),
        132, // Relax In The City
        134, // 透明人間
        92, // Spending all my time
        61, // 不自然なガール
        23, // Twinkle Snow Powdery Snow
        16, // コンピューターシティ
        140, // イミテーションワールド
        120, // Sweet Refrain
        185, // Baby Face(English ver.)
        148, // STORY
        155, // FLASH
        44, // Dream Fighter
        PTA,
        70, // FAKE IT
        24, // ポリリズム
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
      ],
      [
        138, // STAR TRAIN
      ],

    ],
    live_house: 134
  },
  {
    id: 260,
    date: '2016/08/28',
    name: 'Perfume 6th Tour 2016 『COSMIC EXPLORER』',
    event_type: 'LIVE',
    tour_id: 15,
    sub_name: 'アメリカ公演(The Warfield(サンフランシスコ))',
    songs: [
      [
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        146, // Miracle Worker
        MC,
        147, // Next Stage with YOU
        // (よせあつめどれー),
        132, // Relax In The City
        134, // 透明人間
        92, // Spending all my time
        61, // 不自然なガール
        23, // Twinkle Snow Powdery Snow
        16, // コンピューターシティ
        140, // イミテーションワールド
        120, // Sweet Refrain
        185, // Baby Face(English ver.)
        148, // STORY
        155, // FLASH
        44, // Dream Fighter
        PTA,
        70, // FAKE IT
        24, // ポリリズム
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
      ],
      [
        138, // STAR TRAIN
      ],

    ],
    live_house: 135
  },
  {
    id: 261,
    date: '2016/08/31',
    name: 'Perfume 6th Tour 2016 『COSMIC EXPLORER』',
    event_type: 'LIVE',
    tour_id: 15,
    sub_name: 'アメリカ公演(The Vic Theatre(シカゴ))',
    songs: [
      [
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        146, // Miracle Worker
        MC,
        147, // Next Stage with YOU
        // (よせあつめどれー),
        132, // Relax In The City
        134, // 透明人間
        92, // Spending all my time
        61, // 不自然なガール
        23, // Twinkle Snow Powdery Snow
        16, // コンピューターシティ
        140, // イミテーションワールド
        120, // Sweet Refrain
        185, // Baby Face(English ver.)
        148, // STORY
        155, // FLASH
        44, // Dream Fighter
        PTA,
        70, // FAKE IT
        24, // ポリリズム
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
      ],
      [
        138, // STAR TRAIN
      ],

    ],
    live_house: 136
  },
  {
    id: 262,
    date: '2016/09/03',
    name: 'Perfume 6th Tour 2016 『COSMIC EXPLORER』',
    event_type: 'LIVE',
    tour_id: 15,
    sub_name: 'アメリカ公演(HAMMERSTEIN BALLROOM(NY))',
    songs: [
      [
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        146, // Miracle Worker
        MC,
        147, // Next Stage with YOU
        // (よせあつめどれー),
        132, // Relax In The City
        134, // 透明人間
        92, // Spending all my time
        61, // 不自然なガール
        23, // Twinkle Snow Powdery Snow
        16, // コンピューターシティ
        140, // イミテーションワールド
        120, // Sweet Refrain
        185, // Baby Face(English ver.)
        148, // STORY
        155, // FLASH
        44, // Dream Fighter
        PTA,
        70, // FAKE IT
        24, // ポリリズム
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
      ],
      [
        138, // STAR TRAIN
      ],

    ],
    live_house: 137
  },
  {
    id: 263,
    date: '2016/09/04',
    name: 'Perfume 6th Tour 2016 『COSMIC EXPLORER』',
    event_type: 'LIVE',
    tour_id: 15,
    sub_name: 'アメリカ公演(HAMMERSTEIN BALLROOM(NY))',
    songs: [
      [
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        146, // Miracle Worker
        MC,
        147, // Next Stage with YOU
        // (よせあつめどれー),
        132, // Relax In The City
        134, // 透明人間
        92, // Spending all my time
        61, // 不自然なガール
        23, // Twinkle Snow Powdery Snow
        16, // コンピューターシティ
        140, // イミテーションワールド
        120, // Sweet Refrain
        185, // Baby Face(English ver.)
        148, // STORY
        155, // FLASH
        44, // Dream Fighter
        PTA,
        70, // FAKE IT
        24, // ポリリズム
        7, // ジェニーはご機嫌ななめ
        22, // チョコレイト・ディスコ
      ],
      [
        138, // STAR TRAIN
      ],

    ],
    live_house: 137
  },
  {
    id: 264,
    date: '2016/10/22',
    name: 'Perfume 6th Tour 2016『COSMIC EXPLORER』Dome Edition',
    event_type: 'LIVE',
    tour_id: 16,
    sub_name: '大阪公演',
    songs: [
      [
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        48, // ワンルーム・ディスコ
        MC,
        147, // Next Stage with YOU
        // (Perfume Medley 2016),
        132, // Relax In The City
        62, // ナチュラルに恋して
        30, // マカロニ
        134, // 透明人間
        23, // Twinkle Snow Powdery Snow
        35, // セラミックガール
        86, // 心のスポーツ
        120, // Sweet Refrain
        151, // Baby Face
        182, // Perfumeの掟
        155, // FLASH
        146, // Miracle Worker
        PTA,
        70, // FAKE IT
        18, // エレクトロ・ワールド
        113, // Party Maker
        101, // だいじょばない
        22, // チョコレイト・ディスコ
        MC,
        138, // STAR TRAIN
      ],

    ],
    live_house: 112
  },
  {
    id: 265,
    date: '2016/10/23',
    name: 'Perfume 6th Tour 2016『COSMIC EXPLORER』Dome Edition',
    event_type: 'LIVE',
    tour_id: 16,
    sub_name: '大阪公演',
    songs: [
      [
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        48, // ワンルーム・ディスコ
        MC,
        147, // Next Stage with YOU
        // (Perfume Medley 2016),
        132, // Relax In The City
        62, // ナチュラルに恋して
        30, // マカロニ
        134, // 透明人間
        23, // Twinkle Snow Powdery Snow
        35, // セラミックガール
        86, // 心のスポーツ
        120, // Sweet Refrain
        151, // Baby Face
        182, // Perfumeの掟
        155, // FLASH
        146, // Miracle Worker
        PTA,
        70, // FAKE IT
        18, // エレクトロ・ワールド
        113, // Party Maker
        101, // だいじょばない
        20, // パーフェクトスター・パーフェクトスタイル
        22, // チョコレイト・ディスコ
        MC,
        138, // STAR TRAIN
      ],

    ],
    live_house: 112
  },
  {
    id: 266,
    date: '2016/11/03',
    name: 'Perfume 6th Tour 2016『COSMIC EXPLORER』Dome Edition',
    event_type: 'LIVE',
    tour_id: 16,
    sub_name: '愛知公演',
    songs: [
      [
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        48, // ワンルーム・ディスコ
        MC,
        147, // Next Stage with YOU
        // (Perfume Medley 2016),
        132, // Relax In The City
        62, // ナチュラルに恋して
        30, // マカロニ
        134, // 透明人間
        23, // Twinkle Snow Powdery Snow
        35, // セラミックガール
        86, // 心のスポーツ
        120, // Sweet Refrain
        151, // Baby Face
        182, // Perfumeの掟
        155, // FLASH
        146, // Miracle Worker
        PTA,
        70, // FAKE IT
        18, // エレクトロ・ワールド
        113, // Party Maker
        101, // だいじょばない
        20, // パーフェクトスター・パーフェクトスタイル
        22, // チョコレイト・ディスコ
        MC,
        138, // STAR TRAIN
      ],

    ],
    live_house: 138
  },
  {
    id: 267,
    date: '2016/11/04',
    name: 'Perfume 6th Tour 2016『COSMIC EXPLORER』Dome Edition',
    event_type: 'LIVE',
    tour_id: 16,
    sub_name: '愛知公演',
    songs: [
      [
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        48, // ワンルーム・ディスコ
        MC,
        147, // Next Stage with YOU
        // (Perfume Medley 2016),
        132, // Relax In The City
        62, // ナチュラルに恋して
        30, // マカロニ
        134, // 透明人間
        23, // Twinkle Snow Powdery Snow
        35, // セラミックガール
        86, // 心のスポーツ
        120, // Sweet Refrain
        151, // Baby Face
        182, // Perfumeの掟
        155, // FLASH
        146, // Miracle Worker
        PTA,
        70, // FAKE IT
        18, // エレクトロ・ワールド
        113, // Party Maker
        101, // だいじょばない
        20, // パーフェクトスター・パーフェクトスタイル
        22, // チョコレイト・ディスコ
        MC,
        138, // STAR TRAIN
      ],

    ],
    live_house: 138
  },
  {
    id: 268,
    date: '2016/11/12',
    name: 'Perfume 6th Tour 2016『COSMIC EXPLORER』Dome Edition',
    event_type: 'LIVE',
    tour_id: 16,
    sub_name: '福岡公演',
    songs: [
      [
        144, // Navigate
        145, // Cosmic Explorer
        133, // Pick Me Up
        124, // Cling Cling
        48, // ワンルーム・ディスコ
        MC,
        147, // Next Stage with YOU
        // (Perfume Medley 2016),
        132, // Relax In The City
        62, // ナチュラルに恋して
        30, // マカロニ
        134, // 透明人間
        23, // Twinkle Snow Powdery Snow
        35, // セラミックガール
        86, // 心のスポーツ
        120, // Sweet Refrain
        151, // Baby Face
        182, // Perfumeの掟
        155, // FLASH
        146, // Miracle Worker
        PTA,
        70, // FAKE IT
        18, // エレクトロ・ワールド
        113, // Party Maker
        101, // だいじょばない
        20, // パーフェクトスター・パーフェクトスタイル
        22, // チョコレイト・ディスコ
        MC,
        138, // STAR TRAIN
      ],

    ],
    live_house: 139
  },
  {
    id: 269,
    date: '2016/12/28',
    name: 'COUNTDOWN JAPAN',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        113, // Party Maker
        155, // FLASH
        MC,
        62, // ナチュラルに恋して
        151, // Baby Face
        PTA,
        101, // だいじょばない
        146, // Miracle Worker
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 49
  },
  {
    id: 270,
    date: '2017/04/29',
    name: 'REQUESTAGE 15',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        158, // TOKYO GIRL
        155, // FLASH
        MC,
        44, // Dream Fighter
        146, // Miracle Worker
        PTA,
        24, // ポリリズム
      ],

    ],
    live_house: 52
  },
  {
    id: 271,
    date: '2017/05/14',
    name: 'METROCK',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        155, // FLASH
        158, // TOKYO GIRL
        48, // ワンルーム・ディスコ
        MC,
        147, // Next Stage with YOU
        151, // Baby Face
        25, // SEVENTH HEAVEN
        PTA,
        70, // FAKE IT
        18, // エレクトロ・ワールド
        146, // Miracle Worker
        39, // Puppy love
      ],
      [
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 140
  },
  {
    id: 272,
    date: '2017/06/02',
    name: 'Perfume FES!! 2017 〜前夜祭〜 ×電気グルーヴ',
    event_type: 'LIVE',
    tour_id: 17,
    sub_name: '千葉公演',
    songs: [
      [
        158, // TOKYO GIRL
        57, // I still love U
        155, // FLASH
        104, // Magic of Love
        MC,
        127, // いじわるなハロー
        159, // 宝石の雨
        34, // GAME
        18, // エレクトロ・ワールド
        PTA,
        113, // Party Maker
        39, // Puppy love
      ],
      [
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 65
  },
  {
    id: 273,
    date: '2017/06/03',
    name: 'Perfume FES!! 2017 ×チャットモンチー',
    event_type: 'LIVE',
    tour_id: 17,
    sub_name: '千葉公演',
    songs: [
      [
        158, // TOKYO GIRL
        57, // I still love U
        155, // FLASH
        104, // Magic of Love
        MC,
        29, // Baby cruising Love
        159, // 宝石の雨
        34, // GAME
        PTA,
        70, // FAKE IT
        146, // Miracle Worker
        39, // Puppy love
      ],
      [
        // はみがきのうた,
      ],

    ],
    live_house: 65
  },
  {
    id: 274,
    date: '2017/06/04',
    name: 'Amuse Fes in MAKUHARI 2017 -rediscover-',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        158, // TOKYO GIRL
        // (コラボ×さくら学院),
        92, // Spending all my time
        MC,
        PTA,
        48, // ワンルーム・ディスコ
        155, // FLASH
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 65
  },
  {
    id: 275,
    date: '2017/06/26',
    name: 'フジファブリック 2マンツアー"フジフレンドパーク2017"',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        155, // FLASH
        73, // レーザービーム
        158, // TOKYO GIRL
        MC,
        // (メドレー),
        24, // ポリリズム
        88, // Spring of Life
        124, // Cling Cling
        54, // NIGHT FLIGHT
        29, // Baby cruising Love
        40, // love the world
        PTA,
        101, // だいじょばない
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 141
  },
  {
    id: 276,
    date: '2017/07/16',
    name: 'JOIN ALIVE',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        155, // FLASH
        44, // Dream Fighter
        158, // TOKYO GIRL
        MC,
        PTA,
        // (メドレー),
        24, // ポリリズム
        88, // Spring of Life
        124, // Cling Cling
        54, // NIGHT FLIGHT
        101, // だいじょばない
        138, // STAR TRAIN
      ],

    ],
    live_house: 75
  },
  {
    id: 277,
    date: '2017/08/11',
    name: 'ROCK IN JAPAN FES',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        155, // FLASH
        78, // GLITTER
        104, // Magic of Love
        MC,
        162, // If you wanna
        57, // I still love U
        PTA,
        70, // FAKE IT
        146, // Miracle Worker
        22, // チョコレイト・ディスコ
        MC,
        158, // TOKYO GIRL
      ],

    ],
    live_house: 54
  },
  {
    id: 278,
    date: '2017/08/18',
    name: 'SONIC MANIA',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        155, // FLASH
        78, // GLITTER
        146, // Miracle Worker
        MC,
        // (メドレー),
        24, // ポリリズム
        88, // Spring of Life
        124, // Cling Cling
        54, // NIGHT FLIGHT
        25, // SEVENTH HEAVEN
        PTA,
        70, // FAKE IT
        48, // ワンルーム・ディスコ
        MC,
        162, // If you wanna
        MC,
        158, // TOKYO GIRL
      ],

    ],
    live_house: 110
  },
  {
    id: 279,
    date: '2017/08/26',
    name: '音楽と髭達2017 - NO BORDER',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        155, // FLASH
        78, // GLITTER
        MC,
        162, // If you wanna
        PTA,
        22, // チョコレイト・ディスコ
        158, // TOKYO GIRL
      ],

    ],
    live_house: 142
  },
  {
    id: 280,
    date: '2017/09/06',
    name: 'Perfume FES!! 2017 ×スガシカオ',
    event_type: 'LIVE',
    tour_id: 17,
    sub_name: '愛知公演',
    songs: [
      [
        155, // FLASH
        163, // Everyday
        78, // GLITTER
        34, // GAME
        MC,
        18, // エレクトロ・ワールド
        48, // ワンルーム・ディスコ
        69, // ねぇ
        MC,
        162, // If you wanna
        PTA,
        16, // コンピューターシティ
        22, // チョコレイト・ディスコ
        MC,
        158, // TOKYO GIRL
        // (アンコール×スガシカオ),
        // アシンメトリー,
        30, // マカロニ
      ],

    ],
    live_house: 143
  },
  {
    id: 281,
    date: '2017/09/07',
    name: 'Perfume FES!! 2017 ×レキシ',
    event_type: 'LIVE',
    tour_id: 17,
    sub_name: '愛知公演',
    songs: [
      [
        155, // FLASH
        78, // GLITTER
        34, // GAME
        163, // Everyday
        MC,
        74, // 微かなカオリ
        30, // マカロニ
        25, // SEVENTH HEAVEN
        MC,
        162, // If you wanna
        PTA,
        70, // FAKE IT
        16, // コンピューターシティ
        MC,
        158, // TOKYO GIRL
        // (アンコール×レキシ),
        24, // ポリリズム
        // きらきら武士,
      ],

    ],
    live_house: 143
  },
  {
    id: 282,
    date: '2017/09/13',
    name: 'Perfume FES!! 2017 ×星野源',
    event_type: 'LIVE',
    tour_id: 17,
    sub_name: '大阪公演',
    songs: [
      [
        155, // FLASH
        78, // GLITTER
        34, // GAME
        163, // Everyday
        MC,
        30, // マカロニ
        62, // ナチュラルに恋して
        104, // Magic of Love
        MC,
        162, // If you wanna
        PTA,
        70, // FAKE IT
        84, // MY COLOR
        MC,
        158, // TOKYO GIRL
        // (アンコール×星野源),
        162, // If you wanna
        5, // スウィートドーナッツ
      ],

    ],
    live_house: 52
  },
  {
    id: 283,
    date: '2017/09/14',
    name: 'Perfume FES!! 2017 ×マキシマム ザ ホルモン',
    event_type: 'LIVE',
    tour_id: 17,
    sub_name: '大阪公演',
    songs: [
      [
        155, // FLASH
        78, // GLITTER
        34, // GAME
        163, // Everyday
        MC,
        132, // Relax In The City
        101, // だいじょばない
        84, // MY COLOR
        MC,
        162, // If you wanna
        PTA,
        70, // FAKE IT
        22, // チョコレイト・ディスコ
        MC,
        158, // TOKYO GIRL
        // (アンコール×ナヲ),
        73, // レーザービーム
        69, // ねぇ
      ],

    ],
    live_house: 52
  },
  {
    id: 284,
    date: '2017/11/05',
    name: 'KOYABU SONIC 2017',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        155, // FLASH
        78, // GLITTER
        MC,
        162, // If you wanna
        PTA,
        24, // ポリリズム
        158, // TOKYO GIRL
        // チョコレイト・ディスコ(with 池乃めだか),
      ],

    ],
    live_house: 144
  },
  {
    id: 285,
    date: '2017/12/02',
    name: 'Yasutaka Nakata presents『OTONOKO 2017』',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        78, // GLITTER
        155, // FLASH
        MC,
        PTA,
        70, // FAKE IT
        22, // チョコレイト・ディスコ
        MC,
        158, // TOKYO GIRL
        // (×中田ヤスタカ),
        167, // FUSION
        // (DJ:中田ヤスタカ出演時),
        162, // If you wanna
      ],

    ],
    live_house: 145
  },
  {
    id: 286,
    date: '2017/12/06',
    name: 'HFM 35th Anniversary 広島FM MEET the RADIO SHOW「Perfume×9nineの9ジラジNIGHT」',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        155, // FLASH
        44, // Dream Fighter
        MC,
        162, // If you wanna
        163, // Everyday
        PTA,
        70, // FAKE IT
        22, // チョコレイト・ディスコ
        158, // TOKYO GIRL
        // (アンコール×9nine),
        // Evolution No.9,
        162, // If you wanna
      ],

    ],
    live_house: 146
  },
  {
    id: 287,
    date: '2018/02/14',
    name: 'P.T.A.発足10周年!! と5周年!!“Perfumeとあなた”ホールトゥワー',
    event_type: 'LIVE',
    tour_id: 18,
    sub_name: '千葉公演',
    songs: [
      [
        // OP,
        36, // Take me Take me
        20, // パーフェクトスター・パーフェクトスタイル
        25, // SEVENTH HEAVEN
        MC,
        17, // Perfume
        84, // MY COLOR
        MC,
        138, // STAR TRAIN
        94, // Hurly Burly
        44, // Dream Fighter
        PTA,
        41, // edge
        58, // The best thing
      ],
      [
        166, // 無限未来
        22, // チョコレイト・ディスコ
      ],

    ],
    live_house: 147
  },
  {
    id: 288,
    date: '2018/02/15',
    name: 'P.T.A.発足10周年!! と5周年!!“Perfumeとあなた”ホールトゥワー',
    event_type: 'LIVE',
    tour_id: 18,
    sub_name: '千葉公演',
    songs: [
      [
        // OP,
        36, // Take me Take me
        20, // パーフェクトスター・パーフェクトスタイル
        25, // SEVENTH HEAVEN
        MC,
        17, // Perfume
        84, // MY COLOR
        MC,
        138, // STAR TRAIN
        94, // Hurly Burly
        44, // Dream Fighter
        PTA,
        41, // edge
        58, // The best thing
      ],
      [
        166, // 無限未来
      ],

    ],
    live_house: 147
  },
  {
    id: 289,
    date: '2018/02/15',
    name: 'P.T.A.発足10周年!! と5周年!!“Perfumeとあなた”ホールトゥワー',
    event_type: 'LIVE',
    tour_id: 18,
    sub_name: '千葉公演',
    songs: [
      [
        // OP,
        36, // Take me Take me
        20, // パーフェクトスター・パーフェクトスタイル
        25, // SEVENTH HEAVEN
        MC,
        17, // Perfume
        84, // MY COLOR
        MC,
        138, // STAR TRAIN
        94, // Hurly Burly
        44, // Dream Fighter
        PTA,
        41, // edge
        58, // The best thing
      ],
      [
        166, // 無限未来
      ],

    ],
    live_house: 147
  },
  {
    id: 290,
    date: '2018/03/20',
    name: '「Perfume x Technology」 presents Reframe',
    event_type: 'LIVE',
    tour_id: 19,
    sub_name: '東京公演',
    songs: [
      [
        186, // Recollect
        126, // DISPLAY
        38, // Butterfly
        179, // シークレットシークレット(Reframe Remix)
        18, // エレクトロ・ワールド
        167, // FUSION
        181, // Three Walks
        45, // 願い
        166, // 無限未来
        MC,
      ],

    ],
    live_house: 114
  },
  {
    id: 291,
    date: '2018/03/21',
    name: '「Perfume x Technology」 presents Reframe',
    event_type: 'LIVE',
    tour_id: 19,
    sub_name: '東京公演',
    songs: [
      [
        186, // Recollect
        126, // DISPLAY
        38, // Butterfly
        179, // シークレットシークレット(Reframe Remix)
        18, // エレクトロ・ワールド
        167, // FUSION
        181, // Three Walks
        45, // 願い
        166, // 無限未来
        MC,
      ],

    ],
    live_house: 114
  },
  {
    id: 292,
    date: '2018/05/07',
    name: 'P.T.A.発足10周年!! と5周年!!“Perfumeとあなた”ホールトゥワー',
    event_type: 'LIVE',
    tour_id: 18,
    sub_name: '大阪公演',
    songs: [
      [
        // OP,
        36, // Take me Take me
        94, // Hurly Burly
        162, // If you wanna
        179, // シークレットシークレット(Reframe Remix)
        158, // TOKYO GIRL
        MC,
        58, // The best thing
        159, // 宝石の雨
        PTA,
        41, // edge
        166, // 無限未来
        138, // STAR TRAIN
      ],
      [
        24, // ポリリズム
        39, // Puppy love
      ],

    ],
    live_house: 148
  },
  {
    id: 293,
    date: '2018/05/08',
    name: 'P.T.A.発足10周年!! と5周年!!“Perfumeとあなた”ホールトゥワー',
    event_type: 'LIVE',
    tour_id: 18,
    sub_name: '大阪公演',
    songs: [
      [
        // OP,
        36, // Take me Take me
        94, // Hurly Burly
        162, // If you wanna
        179, // シークレットシークレット(Reframe Remix)
        158, // TOKYO GIRL
        MC,
        58, // The best thing
        159, // 宝石の雨
        PTA,
        41, // edge
        166, // 無限未来
        138, // STAR TRAIN
      ],
      [
        24, // ポリリズム
        19, // wonder2
      ],

    ],
    live_house: 148
  },
  {
    id: 294,
    date: '2018/05/10',
    name: 'P.T.A.発足10周年!! と5周年!!“Perfumeとあなた”ホールトゥワー',
    event_type: 'LIVE',
    tour_id: 18,
    sub_name: '福岡公演',
    songs: [
      [
        // OP,
        36, // Take me Take me
        94, // Hurly Burly
        162, // If you wanna
        179, // シークレットシークレット(Reframe Remix)
        158, // TOKYO GIRL
        MC,
        58, // The best thing
        159, // 宝石の雨
        PTA,
        41, // edge
        166, // 無限未来
        138, // STAR TRAIN
      ],
      [
        24, // ポリリズム
        39, // Puppy love
      ],

    ],
    live_house: 149
  },
  {
    id: 295,
    date: '2018/05/12',
    name: 'P.T.A.発足10周年!! と5周年!!“Perfumeとあなた”ホールトゥワー',
    event_type: 'LIVE',
    tour_id: 18,
    sub_name: '広島公演',
    songs: [
      [
        // OP,
        36, // Take me Take me
        94, // Hurly Burly
        162, // If you wanna
        179, // シークレットシークレット(Reframe Remix)
        158, // TOKYO GIRL
        MC,
        58, // The best thing
        159, // 宝石の雨
        PTA,
        41, // edge
        166, // 無限未来
        138, // STAR TRAIN
      ],
      [
        24, // ポリリズム
        19, // wonder2
      ],

    ],
    live_house: 146
  },
  {
    id: 296,
    date: '2018/05/13',
    name: 'P.T.A.発足10周年!! と5周年!!“Perfumeとあなた”ホールトゥワー',
    event_type: 'LIVE',
    tour_id: 18,
    sub_name: '広島公演',
    songs: [
      [
        // OP,
        36, // Take me Take me
        94, // Hurly Burly
        162, // If you wanna
        179, // シークレットシークレット(Reframe Remix)
        158, // TOKYO GIRL
        MC,
        58, // The best thing
        159, // 宝石の雨
        PTA,
        41, // edge
        166, // 無限未来
        138, // STAR TRAIN
      ],
      [
        70, // FAKE IT
        39, // Puppy love
      ],

    ],
    live_house: 146
  },
  {
    id: 297,
    date: '2018/05/16',
    name: 'P.T.A.発足10周年!! と5周年!!“Perfumeとあなた”ホールトゥワー',
    event_type: 'LIVE',
    tour_id: 18,
    sub_name: '北海道公演',
    songs: [
      [
        // OP,
        36, // Take me Take me
        94, // Hurly Burly
        162, // If you wanna
        179, // シークレットシークレット(Reframe Remix)
        158, // TOKYO GIRL
        MC,
        58, // The best thing
        159, // 宝石の雨
        PTA,
        41, // edge
        166, // 無限未来
        138, // STAR TRAIN
      ],
      [
        24, // ポリリズム
        19, // wonder2
      ],

    ],
    live_house: 150
  },
  {
    id: 298,
    date: '2018/05/18',
    name: 'P.T.A.発足10周年!! と5周年!!“Perfumeとあなた”ホールトゥワー',
    event_type: 'LIVE',
    tour_id: 18,
    sub_name: '宮城公演',
    songs: [
      [
        // OP,
        36, // Take me Take me
        94, // Hurly Burly
        162, // If you wanna
        179, // シークレットシークレット(Reframe Remix)
        158, // TOKYO GIRL
        MC,
        58, // The best thing
        159, // 宝石の雨
        PTA,
        41, // edge
        166, // 無限未来
        138, // STAR TRAIN
      ],
      [
        70, // FAKE IT
        39, // Puppy love
      ],

    ],
    live_house: 151
  },
  {
    id: 299,
    date: '2018/05/20',
    name: 'P.T.A.発足10周年!! と5周年!!“Perfumeとあなた”ホールトゥワー',
    event_type: 'LIVE',
    tour_id: 18,
    sub_name: '新潟公演',
    songs: [
      [
        // OP,
        36, // Take me Take me
        94, // Hurly Burly
        162, // If you wanna
        179, // シークレットシークレット(Reframe Remix)
        158, // TOKYO GIRL
        MC,
        58, // The best thing
        159, // 宝石の雨
        PTA,
        41, // edge
        166, // 無限未来
        138, // STAR TRAIN
      ],
      [
        24, // ポリリズム
        19, // wonder2
      ],

    ],
    live_house: 152
  },
  {
    id: 300,
    date: '2018/05/22',
    name: 'P.T.A.発足10周年!! と5周年!!“Perfumeとあなた”ホールトゥワー',
    event_type: 'LIVE',
    tour_id: 18,
    sub_name: '愛知公演',
    songs: [
      [
        // OP,
        36, // Take me Take me
        94, // Hurly Burly
        162, // If you wanna
        179, // シークレットシークレット(Reframe Remix)
        158, // TOKYO GIRL
        MC,
        58, // The best thing
        159, // 宝石の雨
        PTA,
        41, // edge
        166, // 無限未来
        138, // STAR TRAIN
      ],
      [
        39, // Puppy love
        19, // wonder2
      ],

    ],
    live_house: 153
  },
  {
    id: 301,
    date: '2018/05/24',
    name: 'P.T.A.発足10周年!! と5周年!!“Perfumeとあなた”ホールトゥワー',
    event_type: 'LIVE',
    tour_id: 18,
    sub_name: '静岡公演',
    songs: [
      [
        // OP,
        36, // Take me Take me
        94, // Hurly Burly
        162, // If you wanna
        179, // シークレットシークレット(Reframe Remix)
        158, // TOKYO GIRL
        MC,
        58, // The best thing
        159, // 宝石の雨
        PTA,
        41, // edge
        166, // 無限未来
        138, // STAR TRAIN
      ],
      [
        39, // Puppy love
        19, // wonder2
      ],

    ],
    live_house: 154
  },
  {
    id: 302,
    date: '2018/06/02',
    name: 'Amuse Fes in MAKUHARI 2018 -雨男晴女-',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        24, // ポリリズム
        158, // TOKYO GIRL
        MC,
        159, // 宝石の雨
        PTA,
        113, // Party Maker
        22, // チョコレイト・ディスコ
        166, // 無限未来
      ],

    ],
    live_house: 65
  },
  {
    id: 303,
    date: '2018/08/04',
    name: '超犀利趴 SUPER SLIPPA 9',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        155, // FLASH
        70, // FAKE IT
        162, // If you wanna
        MC,
        158, // TOKYO GIRL
        25, // SEVENTH HEAVEN
        PTA,
        22, // チョコレイト・ディスコ
        113, // Party Maker
        166, // 無限未来
      ],

    ],
    live_house: 113
  },
  {
    id: 304,
    date: '2018/09/21',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '長野公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        163, // Everyday
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 155
  },
  {
    id: 305,
    date: '2018/09/22',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '長野公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        163, // Everyday
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 155
  },
  {
    id: 306,
    date: '2018/09/29',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '大阪公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        163, // Everyday
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 52
  },
  {
    id: 307,
    date: '2018/10/06',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '青森公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        163, // Everyday
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 156
  },
  {
    id: 308,
    date: '2018/10/07',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '青森公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        163, // Everyday
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 156
  },
  {
    id: 309,
    date: '2018/10/13',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '静岡公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        163, // Everyday
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 85
  },
  {
    id: 310,
    date: '2018/10/14',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '静岡公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        163, // Everyday
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 85
  },
  {
    id: 311,
    date: '2018/10/24',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '徳島公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        159, // 宝石の雨
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        163, // Everyday
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 130
  },
  {
    id: 312,
    date: '2018/10/25',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '徳島公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        159, // 宝石の雨
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        163, // Everyday
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 130
  },
  {
    id: 313,
    date: '2018/11/03',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '北海道公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        159, // 宝石の雨
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        163, // Everyday
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 89
  },
  {
    id: 314,
    date: '2018/11/04',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '北海道公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        159, // 宝石の雨
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        163, // Everyday
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 89
  },
  {
    id: 315,
    date: '2018/11/19',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '愛知公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        159, // 宝石の雨
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        163, // Everyday
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 63
  },
  {
    id: 316,
    date: '2018/11/20',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '愛知公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        159, // 宝石の雨
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        163, // Everyday
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 63
  },
  {
    id: 317,
    date: '2018/12/11',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '神奈川公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        159, // 宝石の雨
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        163, // Everyday
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 51
  },
  {
    id: 318,
    date: '2018/12/12',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '神奈川公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        159, // 宝石の雨
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        163, // Everyday
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 51
  },
  {
    id: 319,
    date: '2018/12/23',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '福岡公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        159, // 宝石の雨
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        163, // Everyday
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 120
  },
  {
    id: 320,
    date: '2018/12/24',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '福岡公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        159, // 宝石の雨
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        163, // Everyday
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 120
  },
  {
    id: 321,
    date: '2018/12/28',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』 追加公演',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '神奈川公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        159, // 宝石の雨
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        25, // SEVENTH HEAVEN
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 51
  },
  {
    id: 322,
    date: '2018/12/29',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』 追加公演',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '神奈川公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        159, // 宝石の雨
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        25, // SEVENTH HEAVEN
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 51
  },
  {
    id: 323,
    date: '2018/12/31',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』 追加公演「P.T.A.」会員限定 カウントダウンライブ',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '神奈川公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        38, // Butterfly
        74, // 微かなカオリ
        25, // SEVENTH HEAVEN
        24, // ポリリズム
        MC,
        174, // 天空
        70, // FAKE IT
        113, // Party Maker
        PTA,
        84, // MY COLOR
        22, // チョコレイト・ディスコ
      ],
      [
        86, // 心のスポーツ
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 51
  },
  {
    id: 324,
    date: '2019/02/23',
    name: 'Perfume WORLD TOUR 4th 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 21,
    sub_name: '上海公演(国家会展中心 虹館EH)',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        MC,
        38, // Butterfly
        179, // シークレットシークレット(Reframe Remix)
        158, // TOKYO GIRL
        133, // Pick Me Up
        PTA,
        70, // FAKE IT
        155, // FLASH
        MC,
        24, // ポリリズム
      ],
      [
        110, // Magic of Love(Album-mix)
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 157
  },
  {
    id: 325,
    date: '2019/03/02',
    name: 'Perfume WORLD TOUR 4th 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 21,
    sub_name: '台北公演(台湾大学体育館 (台大體育館1樓))',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        MC,
        38, // Butterfly
        179, // シークレットシークレット(Reframe Remix)
        158, // TOKYO GIRL
        133, // Pick Me Up
        PTA,
        70, // FAKE IT
        155, // FLASH
        MC,
        24, // ポリリズム
      ],
      [
        110, // Magic of Love(Album-mix)
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 158
  },
  {
    id: 326,
    date: '2019/03/06',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』振替追加公演',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '大阪公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        163, // Everyday
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 52
  },
  {
    id: 327,
    date: '2019/03/07',
    name: 'Perfume 7th Tour 2018 『FUTURE POP』振替追加公演',
    event_type: 'LIVE',
    tour_id: 20,
    sub_name: '大阪公演',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        38, // Butterfly
        77, // スパイス
        158, // TOKYO GIRL
        66, // 575
        163, // Everyday
        PTA,
        70, // FAKE IT
        155, // FLASH
        113, // Party Maker
        174, // 天空
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 52
  },
  {
    id: 328,
    date: '2019/03/30',
    name: 'Perfume WORLD TOUR 4th 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 21,
    sub_name: 'アメリカ公演(HAMMERSTEIN BALLROOM(NY))',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        MC,
        38, // Butterfly
        179, // シークレットシークレット(Reframe Remix)
        158, // TOKYO GIRL
        133, // Pick Me Up
        PTA,
        70, // FAKE IT
        155, // FLASH
        MC,
        24, // ポリリズム
      ],
      [
        110, // Magic of Love(Album-mix)
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 137
  },
  {
    id: 329,
    date: '2019/04/02',
    name: 'Perfume WORLD TOUR 4th 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 21,
    sub_name: 'アメリカ公演(QUEEN ELIZABETH THEATRE(トロント))',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        173, // 超来輪
        167, // FUSION
        171, // Tiny Baby
        MC,
        38, // Butterfly
        179, // シークレットシークレット(Reframe Remix)
        158, // TOKYO GIRL
        133, // Pick Me Up
        PTA,
        70, // FAKE IT
        155, // FLASH
        MC,
        24, // ポリリズム
      ],
      [
        110, // Magic of Love(Album-mix)
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 159
  },
  {
    id: 330,
    date: '2019/04/05',
    name: 'Perfume WORLD TOUR 4th 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 21,
    sub_name: 'アメリカ公演(CHICAGO THEATRE(シカゴ))',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        38, // Butterfly
        179, // シークレットシークレット(Reframe Remix)
        158, // TOKYO GIRL
        133, // Pick Me Up
        PTA,
        70, // FAKE IT
        155, // FLASH
        MC,
        24, // ポリリズム
      ],
      [
        110, // Magic of Love(Album-mix)
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 160
  },
  {
    id: 331,
    date: '2019/04/07',
    name: 'Perfume WORLD TOUR 4th 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 21,
    sub_name: 'アメリカ公演(THE BOMB FACTORY(ダラス))',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        38, // Butterfly
        179, // シークレットシークレット(Reframe Remix)
        158, // TOKYO GIRL
        133, // Pick Me Up
        PTA,
        70, // FAKE IT
        155, // FLASH
        MC,
        24, // ポリリズム
      ],
      [
        110, // Magic of Love(Album-mix)
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 161
  },
  {
    id: 332,
    date: '2019/04/10',
    name: 'Perfume WORLD TOUR 4th 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 21,
    sub_name: 'アメリカ公演(PARAMOUNT THEATRE(シアトル))',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        38, // Butterfly
        179, // シークレットシークレット(Reframe Remix)
        158, // TOKYO GIRL
        133, // Pick Me Up
        PTA,
        70, // FAKE IT
        155, // FLASH
        MC,
        22, // チョコレイト・ディスコ
      ],
      [
        110, // Magic of Love(Album-mix)
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 162
  },
  {
    id: 333,
    date: '2109/04/14',
    name: 'COACHELLA  2019',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        148, // STORY
        170, // Future Pop
        18, // エレクトロ・ワールド
        171, // Tiny Baby
        162, // If you wanna
        167, // FUSION
        41, // edge
        101, // だいじょばない
        133, // Pick Me Up
        70, // FAKE IT
        MC,
        155, // FLASH
      ],

    ],
    live_house: 163
  },
  {
    id: 334,
    date: '2019/04/17',
    name: 'Perfume WORLD TOUR 4th 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 21,
    sub_name: 'アメリカ公演(CITY NATIONAL CIVIC(サンノゼ))',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        38, // Butterfly
        179, // シークレットシークレット(Reframe Remix)
        158, // TOKYO GIRL
        133, // Pick Me Up
        PTA,
        70, // FAKE IT
        155, // FLASH
        22, // チョコレイト・ディスコ
      ],
      [
        110, // Magic of Love(Album-mix)
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 164
  },
  {
    id: 335,
    date: '2019/04/19',
    name: 'Perfume WORLD TOUR 4th 『FUTURE POP』',
    event_type: 'LIVE',
    tour_id: 21,
    sub_name: 'アメリカ公演(ACE THEATRE(LA))',
    songs: [
      [
        // OP,
        169, // Start-Up
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        167, // FUSION
        171, // Tiny Baby
        172, // Let Me Know
        MC,
        38, // Butterfly
        179, // シークレットシークレット(Reframe Remix)
        158, // TOKYO GIRL
        133, // Pick Me Up
        PTA,
        70, // FAKE IT
        155, // FLASH
        22, // チョコレイト・ディスコ
      ],
      [
        110, // Magic of Love(Album-mix)
        MC,
        166, // 無限未来
      ],

    ],
    live_house: 165
  },
  {
    id: 336,
    date: '2019/04/21',
    name: 'COACHELLA  2019',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        148, // STORY
        170, // Future Pop
        18, // エレクトロ・ワールド
        162, // If you wanna
        167, // FUSION
        41, // edge
        101, // だいじょばない
        133, // Pick Me Up
        70, // FAKE IT
        MC,
        155, // FLASH
      ],

    ],
    live_house: 163
  },
  {
    id: 337,
    date: '2019/06/01',
    name: 'Amuse Fes in MAKUHARI 2019',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        104, // Magic of Love
        69, // ねぇ
        30, // マカロニ
        MC,
        PTA,
        155, // FLASH
        22, // チョコレイト・ディスコ
        29, // Baby cruising Love
      ],

    ],
    live_house: 65
  },
  {
    id: 338,
    date: '2019/08/04',
    name: 'ROCK IN JAPAN FES',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        169, // Start-Up
        170, // Future Pop
        92, // Spending all my time
        155, // FLASH
        176, // ナナナナナイロ
        MC,
        62, // ナチュラルに恋して
        29, // Baby cruising Love
        PTA,
        70, // FAKE IT
        158, // TOKYO GIRL
        166, // 無限未来
      ],

    ],
    live_house: 54
  },
  {
    id: 339,
    date: '2019/08/18',
    name: 'SUMMER SONIC',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        169, // Start-Up
        170, // Future Pop
        162, // If you wanna
        133, // Pick Me Up
        48, // ワンルーム・ディスコ
        MC,
        176, // ナナナナナイロ
        18, // エレクトロ・ワールド
        PTA,
        113, // Party Maker
        167, // FUSION
        166, // 無限未来
      ],

    ],
    live_house: 166
  },
  {
    id: 340,
    date: '2019/08/31',
    name: 'SWEET LOVE SHOWER',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        169, // Start-Up
        170, // Future Pop
        155, // FLASH
        MC,
        176, // ナナナナナイロ
        29, // Baby cruising Love
        PTA,
        70, // FAKE IT
        22, // チョコレイト・ディスコ
        166, // 無限未来
      ],

    ],
    live_house: 95
  },
  {
    id: 341,
    date: '2019/09/15',
    name: 'KOYABU SONIC 2019',
    event_type: 'LIVE',
    // tour_id: ,
    // sub_name: ,
    songs: [
      [
        169, // Start-Up
        170, // Future Pop
        176, // ナナナナナイロ
        MC,
        PTA,
        70, // FAKE IT
        73, // レーザービーム
        44, // Dream Fighter
      ],

    ],
    live_house: 144
  },
  {
    id: 342,
    date: '2019/10/16',
    name: 'Reframe 2019',
    event_type: 'LIVE',
    tour_id: 22,
    sub_name: '東京公演',
    songs: [
      [
        187, // Recollect(Reframe2019 ver)
        188, // DISPLAY(Reframe2019 ver)
        189, // Record(Reframe2019 ver)
        190, // Koe - Interlude
        65, // VOICE
        191, // Pose - Analysis
        192, // Pose - Perspective
        193, // Body - Analysis
        167, // FUSION
        41, // edge
        194, // Kiseki - Visualization
        180, // シークレットシークレット(Reframe2019 ver)
        195, // Lyric Analysis
        166, // 無限未来
        117, // Dream Land
        196, // Challenger(Reframe2019 ver)
        MC,
      ],

    ],
    live_house: 167
  },
  {
    id: 343,
    date: '2019/10/17',
    name: 'Reframe 2019',
    event_type: 'LIVE',
    tour_id: 22,
    sub_name: '東京公演',
    songs: [
      [
        187, // Recollect(Reframe2019 ver)
        188, // DISPLAY(Reframe2019 ver)
        189, // Record(Reframe2019 ver)
        190, // Koe - Interlude
        65, // VOICE
        191, // Pose - Analysis
        192, // Pose - Perspective
        193, // Body - Analysis
        167, // FUSION
        41, // edge
        194, // Kiseki - Visualization
        180, // シークレットシークレット(Reframe2019 ver)
        195, // Lyric Analysis
        166, // 無限未来
        117, // Dream Land
        196, // Challenger(Reframe2019 ver)
        MC,
      ],

    ],
    live_house: 167
  },
  {
    id: 344,
    date: '2019/10/19',
    name: 'Reframe 2019',
    event_type: 'LIVE',
    tour_id: 22,
    sub_name: '東京公演',
    songs: [
      [
        187, // Recollect(Reframe2019 ver)
        188, // DISPLAY(Reframe2019 ver)
        189, // Record(Reframe2019 ver)
        190, // Koe - Interlude
        65, // VOICE
        191, // Pose - Analysis
        192, // Pose - Perspective
        193, // Body - Analysis
        167, // FUSION
        41, // edge
        194, // Kiseki - Visualization
        180, // シークレットシークレット(Reframe2019 ver)
        195, // Lyric Analysis
        166, // 無限未来
        117, // Dream Land
        196, // Challenger(Reframe2019 ver)
        MC,
      ],

    ],
    live_house: 167
  },
  {
    id: 345,
    date: '2019/10/20',
    name: 'Reframe 2019',
    event_type: 'LIVE',
    tour_id: 22,
    sub_name: '東京公演',
    songs: [
      [
        187, // Recollect(Reframe2019 ver)
        188, // DISPLAY(Reframe2019 ver)
        189, // Record(Reframe2019 ver)
        190, // Koe - Interlude
        65, // VOICE
        191, // Pose - Analysis
        192, // Pose - Perspective
        193, // Body - Analysis
        167, // FUSION
        41, // edge
        194, // Kiseki - Visualization
        180, // シークレットシークレット(Reframe2019 ver)
        195, // Lyric Analysis
        166, // 無限未来
        117, // Dream Land
        196, // Challenger(Reframe2019 ver)
        MC,
      ],

    ],
    live_house: 167
  },
  {
    id: 346,
    date: '2019/10/22',
    name: 'Reframe 2019',
    event_type: 'LIVE',
    tour_id: 22,
    sub_name: '東京公演',
    songs: [
      [
        187, // Recollect(Reframe2019 ver)
        188, // DISPLAY(Reframe2019 ver)
        189, // Record(Reframe2019 ver)
        190, // Koe - Interlude
        65, // VOICE
        191, // Pose - Analysis
        192, // Pose - Perspective
        193, // Body - Analysis
        167, // FUSION
        41, // edge
        194, // Kiseki - Visualization
        180, // シークレットシークレット(Reframe2019 ver)
        195, // Lyric Analysis
        166, // 無限未来
        117, // Dream Land
        196, // Challenger(Reframe2019 ver)
        MC,
      ],

    ],
    live_house: 167
  },
  {
    id: 347,
    date: '2019/10/23',
    name: 'Reframe 2019',
    event_type: 'LIVE',
    tour_id: 22,
    sub_name: '東京公演',
    songs: [
      [
        187, // Recollect(Reframe2019 ver)
        188, // DISPLAY(Reframe2019 ver)
        189, // Record(Reframe2019 ver)
        190, // Koe - Interlude
        65, // VOICE
        191, // Pose - Analysis
        192, // Pose - Perspective
        193, // Body - Analysis
        167, // FUSION
        41, // edge
        194, // Kiseki - Visualization
        180, // シークレットシークレット(Reframe2019 ver)
        195, // Lyric Analysis
        166, // 無限未来
        117, // Dream Land
        196, // Challenger(Reframe2019 ver)
        MC,
      ],

    ],
    live_house: 167
  },
  {
    id: 348,
    date: '2019/10/26',
    name: 'Reframe 2019',
    event_type: 'LIVE',
    tour_id: 22,
    sub_name: '東京公演',
    songs: [
      [
        187, // Recollect(Reframe2019 ver)
        188, // DISPLAY(Reframe2019 ver)
        189, // Record(Reframe2019 ver)
        190, // Koe - Interlude
        65, // VOICE
        191, // Pose - Analysis
        192, // Pose - Perspective
        193, // Body - Analysis
        167, // FUSION
        41, // edge
        194, // Kiseki - Visualization
        180, // シークレットシークレット(Reframe2019 ver)
        195, // Lyric Analysis
        166, // 無限未来
        117, // Dream Land
        196, // Challenger(Reframe2019 ver)
        MC,
      ],

    ],
    live_house: 167
  },
  {
    id: 349,
    date: '2019/10/27',
    name: 'Reframe 2019',
    event_type: 'LIVE',
    tour_id: 22,
    sub_name: '東京公演',
    songs: [
      [
        187, // Recollect(Reframe2019 ver)
        188, // DISPLAY(Reframe2019 ver)
        189, // Record(Reframe2019 ver)
        190, // Koe - Interlude
        65, // VOICE
        191, // Pose - Analysis
        192, // Pose - Perspective
        193, // Body - Analysis
        167, // FUSION
        41, // edge
        194, // Kiseki - Visualization
        180, // シークレットシークレット(Reframe2019 ver)
        195, // Lyric Analysis
        166, // 無限未来
        117, // Dream Land
        196, // Challenger(Reframe2019 ver)
        MC,
      ],

    ],
    live_house: 167
  },
  {
    id: 350,
    date: '2020/02/01',
    name: 'Perfume 8th Tour 2020 “P Cubed” in Dome',
    event_type: 'LIVE',
    tour_id: 23,
    sub_name: '大阪公演',
    songs: [
      [
      ],

    ],
    live_house: 112
  },
  {
    id: 351,
    date: '2020/02/02',
    name: 'Perfume 8th Tour 2020 “P Cubed” in Dome',
    event_type: 'LIVE',
    tour_id: 23,
    sub_name: '大阪公演',
    songs: [
      [
      ],

    ],
    live_house: 112
  },
  {
    id: 352,
    date: '2020/02/08',
    name: 'Perfume 8th Tour 2020 “P Cubed” in Dome',
    event_type: 'LIVE',
    tour_id: 23,
    sub_name: '福岡公演',
    songs: [
      [
      ],

    ],
    live_house: 139
  },
  {
    id: 353,
    date: '2020/02/15',
    name: 'Perfume 8th Tour 2020 “P Cubed” in Dome',
    event_type: 'LIVE',
    tour_id: 23,
    sub_name: '愛知公演',
    songs: [
      [
      ],

    ],
    live_house: 138
  },
  {
    id: 354,
    date: '2020/02/16',
    name: 'Perfume 8th Tour 2020 “P Cubed” in Dome',
    event_type: 'LIVE',
    tour_id: 23,
    sub_name: '愛知公演',
    songs: [
      [
      ],

    ],
    live_house: 138
  },
  {
    id: 355,
    date: '2020/02/25',
    name: 'Perfume 8th Tour 2020 “P Cubed” in Dome',
    event_type: 'LIVE',
    tour_id: 23,
    sub_name: '東京公演',
    songs: [
      [
      ],

    ],
    live_house: 71
  },
  {
    id: 356,
    date: '2020/02/26',
    name: 'Perfume 8th Tour 2020 “P Cubed” in Dome',
    event_type: 'LIVE',
    tour_id: 23,
    sub_name: '東京公演',
    songs: [
      [
      ],

    ],
    live_house: 71
  },
]
