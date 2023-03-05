export interface MovieData {
  name?: string
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  genres: Genres[]
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

export interface Genres {
  id: number
  name: string
}

export type PosterData = Pick<MovieData, 'poster_path' | 'original_title' | 'vote_average' | 'overview'>

const trendsPoster = document.querySelector('.carousel-inner')
const offcanvasBody = document.querySelector('.offcanvas-body')

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

export const posterPreview = (posterPath: string, title: string, id: number): Element => {
  const div = document.createElement('div')
  div.classList.add('serie-poster')
  const preview =
  `
    <img class="img-description serie" src='${posterPath}' alt="">
    <span class="visually-hidden">${id}</span>
    <span>${title}</span>
  `
  div.innerHTML = preview

  return div
}

export const posterMoviesPreview = (posterPath: string, title: string, id: number): Element => {
  const div = document.createElement('div')
  div.classList.add('serie-poster')
  const preview =
  `
    <img class="img-description movie" src='${posterPath}' alt="">
    <span class="visually-hidden">${id}</span>
    <span>${title}</span>
  `
  div.innerHTML = preview
  return div
}

export const descriptionMovie = (title: string, vote: number, p: string, gnres: Array<Genres>): void => {
  const html =
  `
  <h3 class="mb-3">${title}<span class="badge bg-danger ms-3">${vote}</span></h3>
  <div class="genres mb-3">
  </div>
  <p>${p}</p>
  `
  if (offcanvasBody) {
    offcanvasBody.innerHTML = html

    gnres.forEach(item => {
      const span = document.createElement('span')
      span.classList.add('badge')
      span.classList.add('bg-secondary')
      span.innerHTML = item.name
      document.querySelector('.genres')?.append(span)
    })
  }
}
