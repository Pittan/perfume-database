import { Album } from '.'

const ALBUM_1_COMPLETE_BEST: Album = {
  id: 1,
  title: 'Perfume 〜Complete Best〜',
  kana: 'ぱふゅーむ こんぷりーとべすと',
  album_type: 'ALBUM',
  editions: [
    {
      name: '初回生産限定盤',
      songs: [[ 20, 13, 16, 21, 12, 8, 11, 5, 14, 15, 17, 19 ]],
      released_on: '2006/08/02'
    },
    {
      name: '通常盤',
      songs: [[ 20, 13, 16, 21, 12, 8, 11, 5, 14, 15, 17, 19 ]],
      released_on: '2007/02/14'
    }
  ]
}

const ALBUM_2_PRIMA_BOX: Album = {
  id: 2,
  title: 'Fan Service 〜Prima Box〜',
  kana: 'ふぁんさーびす ぷりまぼっくす',
  album_type: 'ALBUM',
  released_on: '2008/02/13',
  editions: [
    {
      name: '完全生産限定ボックスセット',
      songs: [[ 5, 6, 7 ], [ 8, 9, 10 ], [ 11, 12 ]]
    }
  ]
}

const ALBUM_3_GAME: Album = {
  id: 3,
  title: 'GAME',
  kana: 'げーむ',
  album_type: 'ALBUM',
  released_on: '2008/04/16',
  editions: [
    {
      name: '初回限定盤',
      songs: [[ 24, 33, 34, 29, 22, 30, 35, 36, 37, 38, 23, 39 ]]
    },
    {
      name: '通常盤',
      songs: [[ 24, 33, 34, 29, 22, 30, 35, 36, 37, 38, 23, 39 ]]
    }
  ]
}

const ALBUM_4_TRIANGLE: Album = {
  id: 4,
  title: '⊿',
  kana: 'とらいあんぐる',
  album_type: 'ALBUM',
  released_on: '2009/07/08',
  editions: [
    {
      name: '初回限定盤',
      songs: [[ 52, 40, 44, 53, 54, 55, 56, 57, 58, 59, 48, 60 ]]
    },
    {
      name: '通常盤',
      songs: [[ 52, 40, 44, 53, 54, 55, 56, 57, 58, 59, 48, 60 ]]
    }
  ]
}

const ALBUM_5_JPN: Album = {
  id: 5,
  title: 'JPN',
  kana: 'じぇーぴーえぬ',
  album_type: 'ALBUM',
  released_on: '2011/11/30',
  editions: [
    {
      name: '初回限定盤',
      songs: [[ 81, 82, 83, 62, 84, 85, 69, 74, 66, 65, 86, 87, 61, 77 ]],
    },
    {
      name: '通常盤',
      songs: [[ 81, 82, 83, 62, 84, 85, 69, 74, 66, 65, 86, 87, 61, 77 ]],
    }
  ]
}

// TODO 楽曲ID: 18は不適切かも。あとで検証する。
const ALBUM_6_LTW: Album = {
  id: 6,
  title: 'Perfume Global Compilation "LOVE THE WORLD"',
  kana: 'ぱふゅーむぐろーばるこんぴれーしょん らぶざわーるど',
  album_type: 'ALBUM',
  released_on: '2012/09/12',
  editions: [
    {
      name: '初回限定盤',
      songs: [[ 24, 53, 40, 18, 98, 25, 34, 37, 54, 29, 38, 70, 73, 78, 99, 44 ]],
    },
    {
      name: '通常盤',
      songs: [[ 24, 53, 40, 18, 98, 25, 34, 37, 54, 29, 38, 70, 73, 78, 99, 44 ]],
    }
  ]
}

const ALBUM_7_LEVEL3: Album = {
  id: 7,
  title: 'LEVEL3',
  kana: 'れべるすりー',
  album_type: 'ALBUM',
  released_on: '2013/10/02',
  editions: [
    {
      name: '初回限定盤',
      songs: [[ 108, 109, 110, 111, 112, 100, 113, 114, 93, 101, 105, 115, 116, 117 ]],
    },
    {
      name: '通常盤',
      songs: [[ 108, 109, 110, 111, 112, 100, 113, 114, 93, 101, 105, 115, 116, 117 ]],
    },
    {
      name: 'Bonus Edition(直輸入盤仕様CD)',
      songs: [[ 108, 109, 110, 111, 112, 100, 113, 114, 93, 101, 105, 115, 116, 117, 118, 119 ]],
      released_on: '2014/10/27'
    }
  ]
}

const ALBUM_8_COSMIC_EXPLORER: Album = {
  id: 8,
  title: 'COSMIC EXPLORER',
  kana: 'こずみっくえくすぷろーらー',
  album_type: 'ALBUM',
  released_on: '2016/04/06',
  editions: [
    {
      name: '初回限定盤',
      songs: [[ 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 132, 133, 154, 125 ], [ 155, 156 ]],
    },
    {
      name: '通常盤',
      songs: [[ 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 132, 133, 154, 125 ]],
    }
  ]
}

const ALBUM_9_FUTURE_POP: Album = {
  id: 9,
  title: 'Future Pop',
  kana: 'ふゅーちゃーぽっぷ',
  album_type: 'ALBUM',
  released_on: '2018/08/15',
  editions: [
    {
      name: '初回限定盤',
      songs: [[ 169, 170, 162, 158, 167, 171, 172, 173, 166, 159, 174, 163 ]],
    },
    {
      name: '通常盤',
      songs: [[ 169, 170, 162, 158, 167, 171, 172, 173, 166, 159, 174, 163 ]],
    }
  ]
}

const ALBUM_10_P_CUBED: Album = {
  id: 10,
  title: 'Perfume The Best "P Cubed"',
  kana: 'ぱふゅーむざべすと ぴーきゅーぶど',
  album_type: 'ALBUM',
  released_on: '2019/09/18',
  editions: [
    {
      name: '完全生産限定盤',
      songs: [
        [ 175, 13, 16, 18, 20, 22, 24, 25, 29, 30, 34, 37, 40, 53, 44 ],
        [ 54, 57, 61, 62, 65, 69, 70, 73, 74, 77, 84, 88, 89, 94, 100, 101, 110, 112 ],
        [ 113, 120, 124, 125, 126, 132, 133, 138, 148, 155, 158, 162, 163, 166, 167, 170, 172, 176 ]
      ],
    },
    {
      name: '初回限定盤',
      songs: [[]],
    },
    {
      name: '通常盤',
      songs: [[]],
    }
  ]
}

const ALBUM_OTHER_POLYGON_WAVE: Album = {
  album_type: 'OTHER',
  editions: [
    {
      name: '初回限定盤',
      songs: [[ 210, 205, 211, 212, 213, 214, 215 ]],
    },
    {
      name: '通常盤',
      songs: [[ 210, 205, 211, 212, 213, 214, 215 ]],
    }
  ],
  id: 46,
  released_on: '2021/09/22',
  title: 'ポリゴンウェイヴEP',
  kana: 'ぽりごんうぇいゔ いーぴー'
}

const ALBUM_11_PLASMA: Album = {
  id: 47,
  title: 'PLASMA',
  kana: 'ぷらずま',
  album_type: 'ALBUM',
  released_on: '2022/07/27',
  editions: [
    {
      name: '初回限定盤',
      songs: [[ 217, 218, 210, 177, 219, 220, 206, 213, 221, 222, 214, 216 ]],
    },
    {
      name: '通常盤',
      songs: [[ 217, 218, 210, 177, 219, 220, 206, 213, 221, 222, 214, 216 ]],
    }
  ]
}

export const ALBUMS = [
  ALBUM_1_COMPLETE_BEST,
  ALBUM_2_PRIMA_BOX,
  ALBUM_3_GAME,
  ALBUM_4_TRIANGLE,
  ALBUM_5_JPN,
  ALBUM_6_LTW,
  ALBUM_7_LEVEL3,
  ALBUM_8_COSMIC_EXPLORER,
  ALBUM_9_FUTURE_POP,
  ALBUM_10_P_CUBED,
  ALBUM_OTHER_POLYGON_WAVE,
  ALBUM_11_PLASMA
]
