import axios from 'axios'
import { type MovieData, posterMainTrendsStructure, posterPreview } from './project.module'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  params: {
    api_key: 'cee7485259c4854030b54b84409c4c13'
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

function getPosters (path: string): string {
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
  const posters = await getTrends()

  for (let i = 0; i < 5; i++) {
    const data = posters[i]
    const posterPath = getPosters(data.poster_path)

    posterMainTrendsStructure(posterPath, data.original_title, data.vote_average, data.overview, (i + 1) === 5)
  }
}
