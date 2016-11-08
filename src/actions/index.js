export function setGenre(genre){
  return {
    type:'SET_GENRE',
    payload: genre
  }
}

export function setFilters(subgenre){
  return {
    type: "SET_FILTERS",
    payload: subgenre
  }
}
