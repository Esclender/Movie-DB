import axios from 'axios'
import { type MovieData, posterMainTrendsStructure, posterMoviesPreview, descriptionMovie, posterPreview } from './project.module'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  params: {
    api_key: 'cee7485259c4854030b54b84409c4c13',
    query: ''
  }
})

const poster = 'https://image.tmdb.org/t/p/original'

async function getTrends (): Promise<MovieData[]> {
  const data = await api('/discover/movie')
  const res = data.data.results
  return res
}

export async function getDailyTrendsMovies (): Promise<MovieData[]> {
  const data = await api('/trending/movie/day')
  const res = data.data.results
  return res
}

export async function getDailyTrendsSeries (): Promise<MovieData[]> {
  const data = await api('/trending/tv/day')
  const res = data.data.results
  return res
}

export async function getMovieForId (movieId: string): Promise<MovieData> {
  const data = await api(`/movie/${movieId}`)
  const res = data.data

  return res
}

export async function getSerieForId (movieId: string): Promise<MovieData> {
  const data = await api(`/tv/${movieId}`)
  const res = data.data

  return res
}

export function getPosters (path: string): string {
  const PosterPath = `${poster}${path}`
  return PosterPath
}

export async function ShowFiveTrendsPoster (): Promise<void> {
  const posters = await getTrends()

  for (let i = 0; i < 5; i++) {
    const data = posters[i]
    const posterPath = getPosters(data.poster_path)

    posterMainTrendsStructure(posterPath, data.original_title, data.vote_average, data.overview, (i + 1) === 5)
  }
}

export async function showSeriesPosters (): Promise<void> {
  const posters = await getDailyTrendsSeries()
  posters.forEach((item, i) => {
    const data = posters[i]
    const posterPath = getPosters(data.poster_path)
    const element = posterPreview(posterPath, data.name as string, data.id)

    document.querySelector('.carrousel-series')?.append(element)
  })
}

export async function showMoviesPosters (): Promise<void> {
  const posters = await getDailyTrendsMovies()
  posters.forEach((item, i) => {
    const data = posters[i]
    const posterPath = getPosters(data.poster_path)
    const element = posterMoviesPreview(posterPath, data.original_title, data.id)

    document.querySelector('.movies-grid')?.append(element)
  })
}

export function DescriptionMovieSerie (descrition: MovieData): void {
  document.querySelector('.description-poster')
    ?.setAttribute('src', getPosters(descrition.poster_path))

  document.querySelector('.serieMoviesDescription')?.classList.toggle('show')

  descriptionMovie(descrition.name ?? descrition.original_title, descrition.vote_average, descrition.overview, descrition.genres)
}

export async function inputSearchSerie (serieName: string): Promise<MovieData[]> {
  const data = await api('/search/tv', {
    params: {
      api_key: 'cee7485259c4854030b54b84409c4c13',
      query: serieName.toLowerCase()
    }
  })
  const dataResult = data.data.results
  return dataResult
}

export async function inputSearchMovie (movieName: string): Promise<MovieData[]> {
  const data = await api('/search/movie', {
    params: {
      api_key: 'cee7485259c4854030b54b84409c4c13',
      query: movieName.toLowerCase()
    }
  })
  const dataResult = data.data.results
  return dataResult
}
