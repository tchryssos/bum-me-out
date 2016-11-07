export function setGenre(genre){
  console.log(genre)
  return {
    type:'SET_GENRE',
    payload: genre
  }
}
