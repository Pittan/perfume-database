import { ALBUMS, SINGLES, Song, SONGS, TOURS } from '../src/data'

let DEBUG = false
function log (message: string) {
  if (DEBUG) { console.log(message) }
}

function checkAllAlbumAndSingleIDsAreUnique () {
  const allAlbumAndSingles = [...ALBUMS, ...SINGLES]
  const uniqDictionary = {}
  allAlbumAndSingles.forEach(i => {
    if (uniqDictionary[i.id]) {
      throw Error(`ID conflict detected!! (${i.title})`)
    }
    uniqDictionary[i.id] = true
  })
}

function checkAllSongIDsAreUnique () {
  const allSongs = [...SONGS]
  const uniqDictionary = {}
  allSongs.forEach(i => {
    if (uniqDictionary[i.id]) {
      throw Error(`ID conflict detected!! (${i.title})`)
    }
    uniqDictionary[i.id] = true
  })
}

function checkSongsParentsAndChildrenRelation () {
  const allSongs = [...SONGS]
  const children = allSongs.filter(s => s.parent)
  const parents = allSongs.filter(s => !s.parent)
  children.forEach(s => {
    const index = parents.findIndex(p => p.id === s.parent)
    if (index === -1) {
      throw Error(`No valid parent found (${s.title})`)
    }
    if (!(parents[index] as any).children) {
      (parents[index] as any).children = []
    }
    ((parents[index] as any).children || []).push(s)
  })
  parents.forEach(p => {
    log(`- ${p.title}`);
    ((p as any).children || []).forEach((c: Song) => {
      log(`    - ${c.title}`)
    })
  })
}

function checkAlbumsAndSongsAreProperlyRegistered () {
  const allAlbums = [...ALBUMS, ...SINGLES]
  const allSongs = [...SONGS]
  allAlbums.forEach(al => {
    log(`- ALBUM: ${al.title}`)
    al.editions.forEach(ed => {
      log(`  - ${ed.name}`)
      ed.songs.forEach((disc, discIndex) => {
        if (ed.songs.length > 1) { log(`    - DISC ${discIndex}`) }
        disc.forEach((song, track) => {
          const s = allSongs.find(so => so.id === song)
          if (!s) throw Error(`Data error in ${al.title}`)
          if (ed.songs.length > 1) {
            log(`      - ${track + 1}. ${s.title}`)
          } else {
            log(`    - ${track + 1}. ${s.title}`)
          }
        })
      })
    })
  })
}

function validateTours () {
  const allTours = [ ...TOURS ]
  const uniqDictionary = {}
  allTours.forEach(t => {
    if (uniqDictionary[t.id]) {
      throw Error(`ID conflict detected!! (${t.name})`)
    }
    uniqDictionary[t.id] = true
  })
}

// ALBUMS
checkAllAlbumAndSingleIDsAreUnique()
console.log('👍 Single and Albums looking good!')

// SONGS
checkAllSongIDsAreUnique()
checkSongsParentsAndChildrenRelation()
checkAlbumsAndSongsAreProperlyRegistered()
console.log('👍 Songs looking good!')

// TOURS
validateTours()
console.log('👍 Tours looking good!')
