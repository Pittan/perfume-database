import { Song } from '.'

export const SONGS: Song[] = [
  {
    id: 1,
    title: 'OMAJINAI★ペロリ',
    kana: 'おまじないぺろり',
    artist: 'ぱふゅ〜む'
  },
  {
    id: 2,
    title: 'OMAJINAI★ペロリ(オリジナルカラオケ)',
    kana: 'おまじないぺろり(おりじなるからおけ)',
    artist: 'ぱふゅ〜む',
    parent: 1,
    is_instrumental: true
  },
  {
    id: 3,
    title: '彼氏募集中',
    kana: 'かれしぼしゅうちゅう',
    artist: 'ぱふゅ〜む',
  },
  {
    id: 4,
    title: '彼氏募集中(オリジナルカラオケ)',
    kana: 'かれしぼしゅうちゅう(おりじなるからおけ)',
    artist: 'ぱふゅ〜む',
    parent: 3,
    is_instrumental: true
  },
  {
    id: 5,
    title: 'スウィートドーナッツ',
    kana: 'すうぃーとどーなっつ',
    subscriptions: {
      spotify: 'spotify:track:6A9GnlszZQspOFZD3cM1gV'
    }
  },
  {
    id: 6,
    title: 'シークレットメッセージ',
    kana: 'しーくれっとめっせーじ'
  },
  {
    id: 7,
    title: 'ジェニーはご機嫌ななめ',
    kana: 'じぇにーはごきげんななめ'
  },
  {
    id: 8,
    title: 'モノクロームエフェクト',
    kana: 'ものくろーむえふぇくと',
    subscriptions: {
      spotify: 'spotify:track:5xFgUd6YIxe1vCHzfInx1w'
    }
  },
  {
    id: 9,
    title: 'エレベーター',
    kana: 'えれべーたー'
  },
  {
    id: 10,
    title: 'おいしいレシピ',
    kana: 'おいしいれしぴ'
  },
  {
    id: 11,
    title: 'ビタミンドロップ',
    kana: 'びたみんどろっぷ',
    subscriptions: {
      spotify: 'spotify:track:1y4v4pMkgvoekio24AZcTk'
    }
  },
  {
    id: 12,
    title: '引力',
    kana: 'いんりょく',
    subscriptions: {
      spotify: 'spotify:track:1d4NDOse98WaRrtxIKQ2Jq'
    }
  },
  {
    id: 13,
    title: 'リニアモーターガール',
    kana: 'りにあもーたーがーる',
    subscriptions: {
      spotify: 'spotify:track:6XuF8T2yE2K20VewJOIVMU'
    }
  },
  {
    id: 14,
    title: 'ファンデーション',
    kana: 'ふぁんでーしょん',
    subscriptions: {
      spotify: 'spotify:track:0YM9SxoQlIziQdlh7WB1qd'
    }
  },
  {
    id: 15,
    title: 'コンピュータードライビング',
    kana: 'こんぴゅーたーどらいびんぐ',
    subscriptions: {
      spotify: 'spotify:track:3tTJD3HGIui9cvs7gs4vzL'
    }
  },
  {
    id: 16,
    title: 'コンピューターシティ',
    kana: 'こんぴゅーたーしてぃ',
    subscriptions: {
      spotify: 'spotify:track:3xNL3fS7kB4iAoGyGcMxQD'
    }
  },
  {
    id: 17,
    title: 'Perfume',
    kana: 'ぱふゅーむ',
    subscriptions: {
      spotify: 'spotify:track:4GMtI8J1wKSEVyXydiIkp3'
    }
  },
  {
    id: 18,
    title: 'エレクトロ・ワールド',
    kana: 'えれくとろわーるど',
    subscriptions: {
      spotify: 'spotify:track:5PuT4rqGwGeahbVXCvr9TX'
    }
  },
  {
    id: 19,
    title: 'wonder2',
    kana: 'わんだーつー',
    subscriptions: {
      spotify: 'spotify:track:3qML9kIzJpLgb2fuLGD51v'
    }
  },
  {
    id: 20,
    title: 'パーフェクトスター・パーフェクトスタイル',
    kana: 'ぱーふぇくとすたーぱーふぇくとすたいる',
    subscriptions: {
      spotify: 'spotify:track:5d81CUf7YrSoptiXGupHem'
    }
  },
  {
    id: 21,
    title: 'エレクトロ・ワールド(Album Version)',
    kana: 'えれくとろわーるど(あるばむばーじょん)',
    parent: 18,
    subscriptions: {
      spotify: 'spotify:track:5aF3dD11V6lWUqfEKtGmwY'
    }
  },
  {
    id: 22,
    title: 'チョコレイト・ディスコ',
    kana: 'ちょこれいとでぃすこ',
    subscriptions: {
      spotify: 'spotify:track:4b0ChlhgjOqFI02cSo0TH6'
    }
  },
  {
    id: 23,
    title: 'Twinkle Snow Powdery Snow',
    kana: 'とうぃんくるすのー ぱうだりーすのー',
    subscriptions: {
      spotify: 'spotify:track:7DTtdEyto3XJHFOTTh0H2p'
    }
  },
  {
    id: 24,
    title: 'ポリリズム',
    kana: 'ぽりりずむ',
    subscriptions: {
      spotify: 'spotify:track:7nlsmbpeIIaBD4AKa43fKX'
    }
  },
  {
    id: 25,
    title: 'SEVENTH HEAVEN',
    kana: 'せぶんすへぶん',
    subscriptions: {
      spotify: 'spotify:track:5GqqcNwPJk2uusZ0UKozRo'
    }
  },
  {
    id: 26,
    title: 'ポリリズム -extra short edit-',
    kana: 'ぽりりずむ えくすとらしょーとえでぃっと',
    parent: 24,
    is_instrumental: true,
    subscriptions: {
      spotify: 'spotify:track:0balk36HeiLwZAnMv7TsVc'
    }
  },
  {
    id: 27,
    title: 'ポリリズム 〜Original Instrumental〜',
    kana: 'ぽりりずむ おりじなるいんすとぅるめんたる',
    parent: 24,
    is_instrumental: true,
  },
  {
    id: 28,
    title: 'SEVENTH HEAVEN 〜Original Instrumental〜',
    kana: 'せぶんすへぶん おりじなるいんすとぅるめんたる',
    parent: 25,
    is_instrumental: true,
  },
  {
    id: 29,
    title: 'Baby cruising Love',
    kana: 'べいびーくるーじんぐらぶ',
    subscriptions: {
      spotify: 'spotify:track:3koRFu0Tq6D8WclYPhh6En'
    }
  },
  {
    id: 30,
    title: 'マカロニ',
    kana: 'まかろに',
    subscriptions: {
      spotify: 'spotify:track:6QlTQTjflj911pVT1J10gj'
    }
  },
  {
    id: 31,
    title: 'Baby cruising Love 〜Original Instrumental〜',
    kana: 'べいびーくるーじんぐらぶ おりじなるいんすとぅるめんたる',
    parent: 29,
    is_instrumental: true,
  },
  {
    id: 32,
    title: 'マカロニ 〜Original Instrumental〜',
    kana: 'まかろに おりじなるいんすとぅるめんたる',
    parent: 30,
    is_instrumental: true,
  },
  {
    id: 33,
    title: 'plastic smile',
    kana: 'ぷらすちっくすまいる',
    subscriptions: {
      spotify: 'spotify:track:0QiqpgZ8Dc9d5orM5UlZ3L'
    }
  },
  {
    id: 34,
    title: 'GAME',
    kana: 'げーむ',
    subscriptions: {
      spotify: 'spotify:track:3cMmH8AsVUvQhVz6W8ONya'
    }
  },
  {
    id: 35,
    title: 'セラミックガール',
    kana: 'せらみっくがーる',
    subscriptions: {
      spotify: 'spotify:track:4hDosBDxWfAl92mwTsd7uh'
    }
  },
  {
    id: 36,
    title: 'Take me Take me',
    kana: 'ていくみーていくみー',
    subscriptions: {
      spotify: 'spotify:track:2gLD8RfrplMDJPwC350kX5'
    }
  },
  {
    id: 37,
    title: 'シークレットシークレット',
    kana: 'しーくれっとしーくれっと',
    subscriptions: {
      spotify: 'spotify:track:6JbpbQF6NxJgzKE0vmlmdY'
    }
  },
  {
    id: 38,
    title: 'Butterfly',
    kana: 'ばたふらい',
    subscriptions: {
      spotify: 'spotify:track:1tvMse1gdBiL64h1NtBs8j'
    }
  },
  {
    id: 39,
    title: 'Puppy love',
    kana: 'ぱぴーらぶ',
    subscriptions: {
      spotify: 'spotify:track:5dSOq9HYxg1K9OEABC1tGX'
    }
  },
  {
    id: 40,
    title: 'love the world',
    kana: 'らぶざわーるど',
    subscriptions: {
      spotify: 'spotify:track:53v2IC4TD4wt0SrOZg9DJN'
    }
  },
  {
    id: 41,
    title: 'edge',
    kana: 'えっじ',
    subscriptions: {
      spotify: 'spotify:track:3lsum3DBD3ydUkfOMflVoL'
    }
  },
  {
    id: 42,
    title: 'love the world -Original Instrumental-',
    kana: 'らぶざわーるど おりじなるいんすとぅるめんたる',
    parent: 40,
    is_instrumental: true,
  },
  {
    id: 43,
    title: 'edge -extended mix-',
    kana: 'えっじ えくすてんでっどみっくす',
    parent: 41,
    subscriptions: {
      spotify: 'spotify:track:1KcGrjiscWbjXBlLwrlm7o'
    }
  },
  {
    id: 44,
    title: 'Dream Fighter',
    kana: 'どりーむふぁいたー',
    subscriptions: {
      spotify: 'spotify:track:2PMhWcwvDM5rx4jsIlSTVQ'
    }
  },
  {
    id: 45,
    title: '願い',
    kana: 'ねがい',
    subscriptions: {
      spotify: 'spotify:track:0CsGQawC8aJAPnehn6JqJV'
    }
  },
  {
    id: 46,
    title: 'Dream Fighter -Original Instrumental-',
    kana: 'どりーむふぁいたー おりじなるいんすとぅるめんたる',
    parent: 44,
    is_instrumental: true,
  },
  {
    id: 47,
    title: '願い -Original Instrumental-',
    kana: 'ねがい おりじなるいんすとぅるめんたる',
    parent: 45,
    is_instrumental: true,
  },
  {
    id: 48,
    title: 'ワンルーム・ディスコ',
    kana: 'わんるーむでぃすこ',
    subscriptions: {
      spotify: 'spotify:track:13dvtP5TlA7lSgrPv7XPBy'
    }
  },
  {
    id: 49,
    title: '23:30',
    kana: 'にじゅうさんじはん',
    subscriptions: {
      spotify: 'spotify:track:3zqEO06VmBlWlVWdbeJNUn'
    }
  },
  {
    id: 50,
    title: 'ワンルーム・ディスコ -Original Instrumental-',
    kana: 'わんるーむでぃすこ おりじなるいんすとぅるめんたる',
    parent: 48,
    is_instrumental: true,
  },
  {
    id: 51,
    title: '23:30 -Original Instrumental-',
    kana: 'にじゅうさんじはん おりじなるいんすとぅるめんたる',
    parent: 49,
    is_instrumental: true,
  },
  {
    id: 52,
    title: 'Take off',
    kana: 'ていくおふ',
    subscriptions: {
      spotify: 'spotify:track:27eRD5YQBnBSzlNqR5g8Vl'
    }
  },
  {
    id: 53,
    title: 'edge(⊿-mix)',
    kana: 'えっじ とらいあんぐるみっくす',
    parent: 41,
    subscriptions: {
      spotify: 'spotify:track:4Bx502wf9hb5TP6oql4bL2'
    }
  },
  {
    id: 54,
    title: 'NIGHT FLIGHT',
    kana: 'ないとふらいと',
    subscriptions: {
      spotify: 'spotify:track:5HSbDcKnaZD6YoYod3kfJX'
    }
  },
  {
    id: 55,
    title: 'Kiss and Music',
    kana: 'きすあんどみゅーじっく',
    subscriptions: {
      spotify: 'spotify:track:4cu4McbbrjhAycompacW0I'
    }
  },
  {
    id: 56,
    title: 'Zero Gravity',
    kana: 'ぜろぐらびてぃー',
    subscriptions: {
      spotify: 'spotify:track:6JdsNX1SHEvHuSuUh0vtAJ'
    }
  },
  {
    id: 57,
    title: 'I still love U',
    kana: 'あいすてぃるらぶゆー',
    subscriptions: {
      spotify: 'spotify:track:3dJtEKFsdh4jvSWlZrDBfu'
    }
  },
  {
    id: 58,
    title: 'The best thing',
    kana: 'ざべすとしんぐ',
    subscriptions: {
      spotify: 'spotify:track:6sMsPoqVaDzQ7KESU1GJrh'
    }
  },
  {
    id: 59,
    title: 'Speed of Sound',
    kana: 'すぴーどおぶさうんど',
    subscriptions: {
      spotify: 'spotify:track:6dtAgTEw0s6bAKetg1orVm'
    }
  },
  {
    id: 60,
    title: '願い(Album-mix)',
    kana: 'ねがい あるばむみっくす',
    parent: 45,
    subscriptions: {
      spotify: 'spotify:track:5kbqA1YpTD9sIxTyBk2err'
    }
  },
  {
    id: 61,
    title: '不自然なガール',
    kana: 'ふしぜんながーる',
    subscriptions: {
      spotify: 'spotify:track:6IQauxT9txAnK87lVZB3M9'
    }
  },
  {
    id: 62,
    title: 'ナチュラルに恋して',
    kana: 'なちゅらるにこいして',
    subscriptions: {
      spotify: 'spotify:track:0eFNzhH89lQcgg9pwIYJTi'
    }
  },
  {
    id: 63,
    title: '不自然なガール -Original Instrumental-',
    kana: 'ふしぜんながーる おりじなるいんすとぅるめんたる',
    parent: 61,
    is_instrumental: true,
  },
  {
    id: 64,
    title: 'ナチュラルに恋して -Original Instrumental-',
    kana: 'なちゅらるにこいして おりじなるいんすとぅるめんたる',
    parent: 62,
    is_instrumental: true,
  },
  {
    id: 65,
    title: 'VOICE',
    kana: 'ゔぉいす',
    subscriptions: {
      spotify: 'spotify:track:2ouQFqJ4YpChbR4u5BzqMe'
    }
  },
  {
    id: 66,
    title: '575',
    kana: 'ごしちご',
    subscriptions: {
      spotify: 'spotify:track:1vM17fFrFcmJ922AAvzvY5'
    }
  },
  {
    id: 67,
    title: 'VOICE -Original Instrumental-',
    kana: 'ゔぉいす おりじなるいんすとぅるめんたる',
    parent: 65,
    is_instrumental: true,
  },
  {
    id: 68,
    title: '575 -Original Instrumental-',
    kana: 'ごしちご おりじなるいんすとぅるめんたる',
    parent: 66,
    is_instrumental: true,
  },
  {
    id: 69,
    title: 'ねぇ',
    kana: 'ねぇ',
    subscriptions: {
      spotify: 'spotify:track:7r3hZlo7LaRdZMC5rZlFfG'
    }
  },
  {
    id: 70,
    title: 'FAKE IT',
    kana: 'ふぇいくいっと',
    subscriptions: {
      spotify: 'spotify:track:0TSK4t1XBX3F2YApI3F5lI'
    }
  },
  {
    id: 71,
    title: 'ねぇ -Original Instrumental-',
    kana: 'ねぇ おりじなるいんすとぅるめんたる',
    parent: 69,
    is_instrumental: true,
  },
  {
    id: 72,
    title: 'FAKE IT -Original Instrumental-',
    kana: 'ふぇいくいっと おりじなるいんすとぅるめんたる',
    parent: 70,
    is_instrumental: true,
  },
  {
    id: 73,
    title: 'レーザービーム',
    kana: 'れーざーびーむ',
    subscriptions: {
      spotify: 'spotify:track:2C3Gb3aVFywnfWqxqi0gRX'
    }
  },
  {
    id: 74,
    title: '微かなカオリ',
    kana: 'かすかなかおり',
    subscriptions: {
      spotify: 'spotify:track:0oofUrAQXjeNLoEqG1gglP'
    }
  },
  {
    id: 75,
    title: 'レーザービーム -Original Instrumental-',
    kana: 'れーざーびーむ おりじなるいんすとぅるめんたる',
    parent: 73,
    is_instrumental: true,
  },
  {
    id: 76,
    title: '微かなカオリ -Original Instrumental-',
    kana: 'かすかなかおり おりじなるいんすとぅるめんたる',
    parent: 74,
    is_instrumental: true,
  },
  {
    id: 77,
    title: 'スパイス',
    kana: 'すぱいす',
    subscriptions: {
      spotify: 'spotify:track:65vLoZIcmTZTzkWlLNLAsk'
    }
  },
  {
    id: 78,
    title: 'GLITTER',
    kana: 'ぐりったー',
    subscriptions: {
      spotify: 'spotify:track:31stQAndQDeSv0aPuaDh3g'
    }
  },
  {
    id: 79,
    title: 'スパイス -Original Instrumental-',
    kana: 'すぱいす おりじなるいんすとぅるめんたる',
    parent: 77,
    is_instrumental: true,
  },
  {
    id: 80,
    title: 'GLITTER -Original Instrumental-',
    kana: 'ぐりったー おりじなるいんすとぅるめんたる',
    parent: 78,
    is_instrumental: true,
  },
  {
    id: 81,
    title: 'The Opening',
    kana: 'じおーぷにんぐ',
    subscriptions: {
      spotify: 'spotify:track:6MIDVjRhefpsJLezsTBg4o'
    }
  },
  {
    id: 82,
    title: 'レーザービーム(Album-mix)',
    kana: 'れーざーびーむ あるばむみっくす',
    parent: 73,
    subscriptions: {
      spotify: 'spotify:track:78MpfCfCDNYLtMzuKJMZEg'
    }
  },
  {
    id: 83,
    title: 'GLITTER(Album-mix)',
    kana: 'ぐりったー あるばむみっくす',
    parent: 78,
    subscriptions: {
      spotify: 'spotify:track:3sCJAWJA2MF44QIn4fpzmV'
    }
  },
  {
    id: 84,
    title: 'MY COLOR',
    kana: 'まいからー',
    subscriptions: {
      spotify: 'spotify:track:6IgyoKYOOu6sxQ5eQyXX53'
    }
  },
  {
    id: 85,
    title: '時の針',
    kana: 'ときのはり',
    subscriptions: {
      spotify: 'spotify:track:1Il7fR3ioUE1EBUtf0NIr4'
    }
  },
  {
    id: 86,
    title: '心のスポーツ',
    kana: 'こころのすぽーつ',
    subscriptions: {
      spotify: 'spotify:track:1HZAp5zg0KKqoGsx910aE8'
    }
  },
  {
    id: 87,
    title: 'Have a Stroll',
    kana: 'はぶあすとろーる',
    subscriptions: {
      spotify: 'spotify:track:5pVjqE5qzZPf74fVJ7Rg43'
    }
  },
  {
    id: 88,
    title: 'Spring of Life',
    kana: 'すぷりんぐおぶらいふ',
    subscriptions: {
      spotify: 'spotify:track:0zWuIu9wDk1lpSbK8yFZmv'
    }
  },
  {
    id: 89,
    title: 'コミュニケーション',
    kana: 'こみゅにけーしょん',
    subscriptions: {
      spotify: 'spotify:track:3QwkPWlV0Y75z2LHcTBOH2'
    }
  },
  {
    id: 90,
    title: 'Spring of Life -Original Instrumental-',
    kana: 'すぷりんぐおぶらいふ おりじなるいんすとぅるめんたる',
    parent: 88,
    is_instrumental: true,
  },
  {
    id: 91,
    title: 'コミュニケーション -Original Instrumental-',
    kana: 'こみゅにけーしょん おりじなるいんすとぅるめんたる',
    parent: 89,
    is_instrumental: true,
  },
  {
    id: 92,
    title: 'Spending all my time',
    kana: 'すぺんでぃんぐおーるまいたいむ',
    subscriptions: {
      spotify: 'spotify:track:6tEUPYdS5m5LmZnmARmOCT'
    }
  },
  {
    id: 93,
    title: 'ポイント',
    kana: 'ぽいんと',
    subscriptions: {
      spotify: 'spotify:track:3xIEQ3A91sjrPIBbFf4dX6'
    }
  },
  {
    id: 94,
    title: 'Hurly Burly',
    kana: 'はーりーばーりー',
    subscriptions: {
      spotify: 'spotify:track:0dkc9RvSdJe0NcdAD2ubHR'
    }
  },
  {
    id: 95,
    title: 'Spending all my time -Original Instrumental-',
    kana: 'すぺんでぃんぐおーるまいたいむ おりじなるいんすとぅるめんたる',
    parent: 92,
    is_instrumental: true,
  },
  {
    id: 96,
    title: 'ポイント -Original Instrumental-',
    kana: 'ぽいんと おりじなるいんすとぅるめんたる',
    parent: 93,
    is_instrumental: true,
  },
  {
    id: 97,
    title: 'Hurly Burly -Original Instrumental-',
    kana: 'はーりーばーりー おりじなるいんすとぅるめんたる',
    parent: 94,
    is_instrumental: true,
  },
  {
    id: 98,
    title: 'チョコレイト・ディスコ(2012-Mix)',
    kana: 'ちょこれいとでぃすこ にせんじゅうにみっくす',
    parent: 22,
    subscriptions: {
      spotify: 'spotify:track:7bPZTBPggLqga9Z1bEkEVq'
    }
  },
  {
    id: 99,
    title: 'MY COLOR(LTW-Mix)',
    kana: 'まいからー えるてぃーだぶりゅーみっくす',
    parent: 84,
    subscriptions: {
      spotify: 'spotify:track:4w7ncJ5VuSMA4QHvHktBS1'
    }
  },
  {
    id: 100,
    title: '未来のミュージアム',
    kana: 'みらいのみゅーじあむ',
    subscriptions: {
      spotify: 'spotify:track:3IIWswUsUI4BnTWYZU2UsN'
    }
  },
  {
    id: 101,
    title: 'だいじょばない',
    kana: 'だいじょばない',
    subscriptions: {
      spotify: 'spotify:track:4cRVNPqz6NrOhnoubcloWM'
    }
  },
  {
    id: 102,
    title: '未来のミュージアム -Original Instrumental-',
    kana: 'みらいのみゅーじあむ おりじなるいんすとぅるめんたる',
    parent: 100,
    is_instrumental: true,
  },
  {
    id: 103,
    title: 'だいじょばない -Original Instrumental-',
    kana: 'だいじょばない おりじなるいんすとぅるめんたる',
    parent: 101,
    is_instrumental: true,
  },
  {
    id: 104,
    title: 'Magic of Love',
    kana: 'まじっくおぶらぶ',
    subscriptions: {
      spotify: 'spotify:track:1cYA3YfOwvpaw7Tj87GpHT'
    }
  },
  {
    id: 105,
    title: 'Handy Man',
    kana: 'はんでぃーまん',
    subscriptions: {
      spotify: 'spotify:track:59zCBsQw52G6nY152EVFeB'
    }
  },
  {
    id: 106,
    title: 'Magic of Love -Original Instrumental-',
    kana: 'まじっくおぶらぶ おりじなるいんすとぅるめんたる',
    parent: 104,
    is_instrumental: true,
  },
  {
    id: 107,
    title: 'Handy Man -Original Instrumental-',
    kana: 'はんでぃーまん おりじなるいんすとぅるめんたる',
    parent: 105,
    is_instrumental: true,
  },
  {
    id: 108,
    title: 'Enter the Sphere',
    kana: 'えんたーざすふぃあ',
    subscriptions: {
      spotify: 'spotify:track:5UwZmCJFJcp5l0JcykZthW'
    }
  },
  {
    id: 109,
    title: 'Spring of Life(Album-mix)',
    kana: 'すぷりんぐおぶらいふ あるばむみっくす',
    parent: 88,
    subscriptions: {
      spotify: 'spotify:track:4FTkXZgK0Bn4L5Z5UrrJ3v'
    }
  },
  {
    id: 110,
    title: 'Magic of Love(Album-mix)',
    kana: 'まじっくおぶらぶ あるばむみっくす',
    parent: 104,
    subscriptions: {
      spotify: 'spotify:track:2aBylIsNRQW10D8x5zLuRu'
    }
  },
  {
    id: 111,
    title: 'Clockwork',
    kana: 'くろっくわーく',
    subscriptions: {
      spotify: 'spotify:track:2IXIa1Ont8wZhrCVfhQaAW'
    }
  },
  {
    id: 112,
    title: '1mm',
    kana: 'いちみり',
    subscriptions: {
      spotify: 'spotify:track:74U47FqdxOtLVRoVMDlcBm'
    }
  },
  {
    id: 113,
    title: 'Party Maker',
    kana: 'ぱーてぃーめーかー',
    subscriptions: {
      spotify: 'spotify:track:67I62vEEEMSbYPuT9itVIo'
    }
  },
  {
    id: 114,
    title: 'ふりかえるといるよ',
    kana: 'ふりかえるといるよ',
    subscriptions: {
      spotify: 'spotify:track:4RuXODR1PyD64ajAhc7jdD'
    }
  },
  {
    id: 115,
    title: 'Sleeping Beauty',
    kana: 'すりーぴんぐびゅーてぃー',
    subscriptions: {
      spotify: 'spotify:track:2l2V2jZ5AM8L0AmBmNXTDh'
    }
  },
  {
    id: 116,
    title: 'Spending all my time(Album-mix)',
    kana: 'すぺんでぃんぐおーるまいたいむ あるばむみっくす',
    parent: 92,
    subscriptions: {
      spotify: 'spotify:track:1uO2IobhL7tA1R0qIAtZdR'
    }
  },
  {
    id: 117,
    title: 'Dream Land',
    kana: 'どりーむらんど',
    subscriptions: {
      spotify: 'spotify:track:7jAiYsV0CdQ0SZS4EBqkcT'
    }
  },
  {
    id: 118,
    title: 'Spending all my time(Radio Mix)',
    kana: 'すぺんでぃんぐおーるまいたいむ らじおみっくす',
    parent: 92,
    subscriptions: {
      spotify: 'spotify:track:0ogzq2O5VdFgZvEnDAL7mH'
    }
  },
  {
    id: 119,
    title: 'Spending all my time(DV&LM Mix)',
    kana: 'すぺんでぃんぐおーるまいたいむ でぃーぶいあんどえるえむみっくす',
    parent: 92,
    subscriptions: {
      spotify: 'spotify:track:52U4F6iAhYdoJja7272vUS'
    }
  },
  {
    id: 120,
    title: 'Sweet Refrain',
    kana: 'すうぃーとりふれいん',
    subscriptions: {
      spotify: 'spotify:track:1l2kB5wsToZQkt1eu3WCeq'
    }
  },
  {
    id: 121,
    title: '恋は前傾姿勢',
    kana: 'こいはぜんけいしせい',
    subscriptions: {
      spotify: 'spotify:track:7GNzzPPmKpGDaVZvluPSkJ'
    }
  },
  {
    id: 122,
    title: 'Sweet Refrain -Original Instrumental-',
    kana: 'すうぃーとりふれいん おりじなるいんすとぅるめんたる',
    parent: 120,
    is_instrumental: true,
  },
  {
    id: 123,
    title: '恋は前傾姿勢 -Original Instrumental-',
    kana: 'こいはぜんけいしせい おりじなるいんすとぅるめんたる',
    parent: 121,
    is_instrumental: true,
  },
  {
    id: 124,
    title: 'Cling Cling',
    kana: 'くりんくりん',
    subscriptions: {
      spotify: 'spotify:track:1uQxhTUFcO3eQwMwjYRYr9'
    }
  },
  {
    id: 125,
    title: 'Hold Your Hand',
    kana: 'ほーるどゆあはんど',
    subscriptions: {
      spotify: 'spotify:track:64eUF5Z6TwYdywqc6QjSRb'
    }
  },
  {
    id: 126,
    title: 'DISPLAY',
    kana: 'でぃすぷれい',
    subscriptions: {
      spotify: 'spotify:track:2YzuZ4xyxTnpXUx9f2zViL'
    }
  },
  {
    id: 127,
    title: 'いじわるなハロー',
    kana: 'いじわるなはろー',
    subscriptions: {
      spotify: 'spotify:track:0EDTww22rirbK6VBZi9vTK'
    }
  },
  {
    id: 128,
    title: 'Cling Cling - Original Instrumental -',
    kana: 'くりんくりん おりじなるいんすとぅるめんたる',
    parent: 124,
    is_instrumental: true,
  },
  {
    id: 129,
    title: 'Hold Your Hand - Original Instrumental -',
    kana: 'ほーるどゆあはんど おりじなるいんすとぅるめんたる',
    parent: 125,
    is_instrumental: true,
  },
  {
    id: 130,
    title: 'DISPLAY - Original Instrumental -',
    kana: 'でぃすぷれい おりじなるいんすとぅるめんたる',
    parent: 126,
    is_instrumental: true,
  },
  {
    id: 131,
    title: 'いじわるなハロー - Original Instrumental -',
    kana: 'いじわるなはろー おりじなるいんすとぅるめんたる',
    parent: 127,
    is_instrumental: true,
  },
  {
    id: 132,
    title: 'Relax In The City',
    kana: 'りらっくすいんざしてぃ',
    subscriptions: {
      spotify: 'spotify:track:6AvrTAEOARaQLthsHZOSHZ'
    }
  },
  {
    id: 133,
    title: 'Pick Me Up',
    kana: 'ぴっくみーあっぷ',
    subscriptions: {
      spotify: 'spotify:track:7upNL3DFTZvCfawdvslA2Y'
    }
  },
  {
    id: 134,
    title: '透明人間',
    kana: 'とうめいにんげん',
    subscriptions: {
      spotify: 'spotify:track:157HbYEc238NBIV0VVNYBC'
    }
  },
  {
    id: 135,
    title: 'Relax In The City -Original Instrumental-',
    kana: 'りらっくすいんざしてぃ おりじなるいんすとぅるめんたる',
    parent: 132,
    is_instrumental: true,
  },
  {
    id: 136,
    title: 'Pick Me Up -Original Instrumental-',
    kana: 'ぴっくみーあっぷ おりじなるいんすとぅるめんたる',
    parent: 133,
    is_instrumental: true,
  },
  {
    id: 137,
    title: '透明人間 -Original Instrumental-',
    kana: 'とうめいにんげん おりじなるいんすとぅるめんたる',
    parent: 134,
    is_instrumental: true,
  },
  {
    id: 138,
    title: 'STAR TRAIN',
    kana: 'すたーとれいん',
    subscriptions: {
      spotify: 'spotify:track:4Hau8EK1j7X89Ry5BoHiqL'
    }
  },
  {
    id: 139,
    title: 'TOKIMEKI LIGHTS',
    kana: 'ときめきらいつ',
    subscriptions: {
      spotify: 'spotify:track:0qjkqtjizjSIBn5xdK8iDO'
    }
  },
  {
    id: 140,
    title: 'イミテーションワールド',
    kana: 'いみてーしょんわーるど'
  },
  {
    id: 141,
    title: 'STAR TRAIN -Original Instrumental-',
    kana: 'すたーとれいん おりじなるいんすとぅるめんたる',
    parent: 138,
    is_instrumental: true
  },
  {
    id: 142,
    title: 'TOKIMEKI LIGHTS -Original Instrumental-',
    kana: 'ときめきらいつ おりじなるいんすとぅるめんたる',
    parent: 139,
    is_instrumental: true
  },
  {
    id: 143,
    title: 'イミテーションワールド -Original Instrumental-',
    kana: 'いみてーしょんわーるど おりじなるいんすとぅるめんたる',
    parent: 140,
    is_instrumental: true
  },
  {
    id: 144,
    title: 'Navigate',
    kana: 'なびげーと',
    subscriptions: {
      spotify: 'spotify:track:5Lghu1F9BPJmwRq2cWochY'
    }
  },
  {
    id: 145,
    title: 'Cosmic Explorer',
    kana: 'こずみっくえくすぷろーらー',
    subscriptions: {
      spotify: 'spotify:track:3mg3sBY0sKEjVNjoX0Fu6z'
    }
  },
  {
    id: 146,
    title: 'Miracle Worker',
    kana: 'みらくるわーかー',
    subscriptions: {
      spotify: 'spotify:track:25VIgBIX143oS5N38FvP1q'
    }
  },
  {
    id: 147,
    title: 'Next Stage with YOU',
    kana: 'ねくすとすてーじうぃずゆー',
    subscriptions: {
      spotify: 'spotify:track:6EcyUMdCYXLsv9gfNXGx9U'
    }
  },
  {
    id: 148,
    title: 'STORY',
    kana: 'すとーりー',
    subscriptions: {
      spotify: 'spotify:track:6kNdglwzPugzPJlIf5ty3T'
    }
  },
  {
    id: 149,
    title: 'FLASH (Album-mix)',
    kana: 'ふらっしゅ あるばむみっくす',
    parent: 155,
    subscriptions: {
      spotify: 'spotify:track:5AxccENUicS0XlnG22Ld3u'
    }
  },
  {
    id: 150,
    title: 'Sweet Refrain(Album-mix)',
    kana: 'すうぃーとりふれいん あるばむみっくす',
    parent: 120,
    subscriptions: {
      spotify: 'spotify:track:5ituhxbMlxdhTPfQtsh48y'
    }
  },
  {
    id: 151,
    title: 'Baby Face',
    kana: 'べいびーふぇいす',
    subscriptions: {
      spotify: 'spotify:track:1CnZiSIbOf51PQUKsCgkD6'
    }
  },
  {
    id: 152,
    title: 'TOKIMEKI LIGHTS(Album-mix)',
    kana: 'ときめきらいつ あるばむみっくす',
    parent: 139,
    subscriptions: {
      spotify: 'spotify:track:4eRjW5H0wOg6JMMQFiAqop'
    }
  },
  {
    id: 153,
    title: 'STAR TRAIN(Album-mix)',
    kana: 'すたーとれいん あるばむみっくす',
    parent: 138,
    subscriptions: {
      spotify: 'spotify:track:3tAmATRDkqmxV9ZzEwxnkT'
    }
  },
  {
    id: 154,
    title: 'Cling Cling(Album-mix)',
    kana: 'くりんくりん あるばむみっくす',
    parent: 124,
    subscriptions: {
      spotify: 'spotify:track:4zbibD3jvoXP2tuzp92x8j'
    }
  },
  {
    id: 155,
    title: 'FLASH',
    kana: 'ふらっしゅ',
    subscriptions: {
      spotify: 'spotify:track:0iCOM7P9YJosI9G6mIvU3K'
    }
  },
  {
    id: 156,
    title: 'FLASH -Original Instrumental-',
    kana: 'ふらっしゅ おりじなるいんすとぅるめんたる',
    parent: 155,
    is_instrumental: true,
  },
  {
    id: 157,
    title: 'I Don\'t Understand You',
    kana: 'あいどんとあんだーすたんどゆー',
    subscriptions: {
      spotify: 'spotify:track:2OxAhm502jczd2zrauBLts'
    }
  },
  {
    id: 158,
    title: 'TOKYO GIRL',
    kana: 'とーきょーがーる',
    subscriptions: {
      spotify: 'spotify:track:5yq8JkSClLJVdfy4ZMUAmB'
    }
  },
  {
    id: 159,
    title: '宝石の雨',
    kana: 'ほうせきのあめ',
    subscriptions: {
      spotify: 'spotify:track:30gxLesaSge9iReVXht14s'
    }
  },
  {
    id: 160,
    title: 'TOKYO GIRL -Original Instrumental-',
    kana: 'とーきょーがーる おりじなるいんすとぅるめんたる',
    parent: 158,
    is_instrumental: true,
    subscriptions: {
      spotify: 'spotify:track:4NJnuKY160h718pLGVtdSw'
    }
  },
  {
    id: 161,
    title: '宝石の雨 -Original Instrumental-',
    kana: 'ほうせきのあめ おりじなるいんすとぅるめんたる',
    parent: 159,
    is_instrumental: true,
    subscriptions: {
      spotify: 'spotify:track:18aJN3hnLMsYC5heCmsqEc'
    }
  },
  {
    id: 162,
    title: 'If you wanna',
    kana: 'いふゆーわな',
    subscriptions: {
      spotify: 'spotify:track:6ay5Rv1qtGhD20zCCxABeW'
    }
  },
  {
    id: 163,
    title: 'Everyday',
    kana: 'えぶりでい',
    subscriptions: {
      spotify: 'spotify:track:0lHhBAr77Fgp58yBRLPg3X'
    }
  },
  {
    id: 164,
    title: 'If you wanna -Original Instrumental-',
    kana: 'いふゆーわな おりじなるいんすとぅるめんたる',
    parent: 162,
    is_instrumental: true,
    subscriptions: {
      spotify: 'spotify:track:6HiD3ucReeDTViqUksQXBA'
    }
  },
  {
    id: 165,
    title: 'Everyday -Original Instrumental-',
    kana: 'えぶりでい おりじなるいんすとぅるめんたる',
    parent: 163,
    is_instrumental: true,
    subscriptions: {
      spotify: 'spotify:track:4d97UGLLqdV90PlatWyWTU'
    }
  },
  {
    id: 166,
    title: '無限未来',
    kana: 'むげんみらい',
    subscriptions: {
      spotify: 'spotify:track:2C4OMMxxokBekHt64V4tXb'
    }
  },
  {
    id: 167,
    title: 'FUSION',
    kana: 'ふゅーじょん',
    subscriptions: {
      spotify: 'spotify:track:1PeStfyIokiOKhBXFNld2E'
    }
  },
  {
    id: 168,
    title: '無限未来 -Original Instrumental-',
    kana: 'むげんみらい おりじなるいんすとぅるめんたる',
    parent: 166,
    is_instrumental: true,
    subscriptions: {
      spotify: 'spotify:track:0ea0rbEadCV2tnvftyGISK'
    }
  },
  {
    id: 169,
    title: 'Start-Up',
    kana: 'すたーとあっぷ',
    subscriptions: {
      spotify: 'spotify:track:5OSq6eQd77tqILDTys2Urx'
    }
  },
  {
    id: 170,
    title: 'Future Pop',
    kana: 'ふゅーちゃーぽっぷ',
    subscriptions: {
      spotify: 'spotify:track:3FdZngjIjSGiUO1YzAQgWn'
    }
  },
  {
    id: 171,
    title: 'Tiny Baby',
    kana: 'たいにーべいびー',
    subscriptions: {
      spotify: 'spotify:track:4uuo8z62fFhw2H5CqdrImC'
    }
  },
  {
    id: 172,
    title: 'Let Me Know',
    kana: 'れっとみーのう',
    subscriptions: {
      spotify: 'spotify:track:2momI8aWOHZ6ZeaiQCYwCu'
    }
  },
  {
    id: 173,
    title: '超来輪',
    kana: 'ちょうらいりん',
    subscriptions: {
      spotify: 'spotify:track:2O81QzrB6vy2O9Pdr5UeZt'
    }
  },
  {
    id: 174,
    title: '天空',
    kana: 'てんくう',
    subscriptions: {
      spotify: 'spotify:track:2mhSyK63991ChIz1GltpAl'
    }
  },
  {
    id: 175,
    title: 'Challenger',
    kana: 'ちゃれんじゃー',
    subscriptions: {
      spotify: 'spotify:track:6fUs4sionsOWPPk4wnDHG6'
    }
  },
  {
    id: 176,
    title: 'ナナナナナイロ',
    kana: 'ななななないろ',
    subscriptions: {
      spotify: 'spotify:track:1rU3LfzDbqfL4FTPuUatox'
    }
  },
  {
    id: 177,
    title: '再生',
    kana: 'さいせい',
    subscriptions: {
      spotify: 'spotify:track:5ZiAYujs7k4C8ByqZX7n3A'
    }
  },
  {
    id: 178,
    title: 'カウンターアトラクション',
    kana: 'かうんたーあとらくしょん'
  },
  {
    id: 179,
    title: 'シークレットシークレット(Reframe Remix)',
    kana: 'しーくれっとしーくれっと りふれいむりみっくす',
    parent: 37
  },
  {
    id: 180,
    title: 'シークレットシークレット(Reframe2019 ver)',
    kana: 'しーくれっとしーくれっと りふれいむにせんじゅうきゅうばーじょん',
    parent: 37
  },
  {
    id: 181,
    title: 'Three Walks',
    kana: 'すりーうぉーくす'
  },
  {
    id: 182,
    title: 'Perfumeの掟',
    kana: 'ぱふゅーむのおきて'
  },
  {
    id: 183,
    title: 'GISHIKI',
    kana: 'ぎしき'
  },
  {
    id: 184,
    title: '12345678910',
    kana: 'いちにさんしごろくしちはちきゅうじゅう'
  },
  {
    id: 185,
    title: 'Baby Face(English ver.)',
    kana: 'べいびーふぇいす いんぐりっしゅばーじょん',
    parent: 151
  },
  {
    id: 186,
    title: 'Recollect',
    kana: 'りこれくと りふれいむ にせんじゅうきゅうばーじょん'
  },
  {
    id: 187,
    title: 'Recollect(Reframe2019 ver)',
    kana: 'りこれくと りふれいむ にせんじゅうきゅうばーじょん'
  },
  {
    id: 188,
    title: 'DISPLAY(Reframe2019 ver)',
    kana: 'でぃすぷれい りふれいむ にせんじゅうきゅうばーじょん',
    parent: 126
  },
  {
    id: 189,
    title: 'Record(Reframe2019 ver)',
    kana: 'れこーど りふれいむ にせんじゅうきゅうばーじょん',
    parent: 187
  },
  {
    id: 190,
    title: 'Koe - Interlude',
    kana: 'こえ いんたーるーど'
  },
  {
    id: 191,
    title: 'Pose - Analysis',
    kana: 'ぽーず あなりしす'
  },
  {
    id: 192,
    title: 'Pose - Perspective',
    kana: 'ぽーず ぱーすぺくてぃぶ'
  },
  {
    id: 193,
    title: 'Body - Analysis',
    kana: 'ぼでぃー あなりしす'
  },
  {
    id: 194,
    title: 'Kiseki - Visualization',
    kana: 'きせき びじゅあらいぜーしょん'
  },
  {
    id: 195,
    title: 'Lyric Analysis',
    kana: 'りりっくあなりしす'
  },
  {
    id: 196,
    title: 'Challenger(Reframe2019 ver)',
    kana: 'ちゃれんじゃー りふれいむ にせんじゅうきゅうばーじょん',
    parent: 175
  },
  {
    id: 197,
    title: 'EPISODE 0',
    kana: 'えぴそーどぜろ',
  },
  {
    id: 198,
    title: 'Chrome',
    kana: 'くろーむ'
  },
  {
    id: 199,
    title: 'Opera',
    kana: 'おぺら'
  },
  {
    id: 200,
    title: 'Visualization',
    parent: 194,
    kana: 'びじゅあらいぜーしょん'
  }
]

