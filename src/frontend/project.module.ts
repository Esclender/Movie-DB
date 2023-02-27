export interface MovieData {
  name?: string
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: Date
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type PosterData = Pick<MovieData, 'poster_path' | 'original_title' | 'vote_average' | 'overview'>

const trendsPoster = document.querySelector('.carousel-inner')
const seriesPoster = document.querySelector('.carrousel-series')

export const posterMainTrendsStructure = (posterPath: string, title: string, votes: number, overview: string, last?: boolean): void => {
  const element = document.createElement('div')
  element.classList.add('carousel-item')
  element.setAttribute('data-bs-interval', '10000')
  if (last) {
    element.classList.add('active')
  }
  const div =
  `
    <img src=${posterPath} class="d-block w-100" alt="..." >

    <div class="poster-info">
      <h2 class="poster-info_title">${title}</h2>
      <span>${votes} <i class="fa-solid fa-star"></i> </span>
      <p>"${overview}"</p>
    </div>
  `
  element.innerHTML = div

  trendsPoster?.append(element)
}

export const posterPreview = (posterPath: string, title: string): void => {
  const div = document.createElement('div')
  div.classList.add('serie-poster')
  const preview =
  `
  <div class="serie-poster">
    <img src='${posterPath}' alt="">
    <span>${title}</span>
  </div>
  `
  div.innerHTML = preview

  seriesPoster?.append(div)
}
