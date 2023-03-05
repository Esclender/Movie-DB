import { ShowFiveTrendsPoster, showSeriesPosters, showMoviesPosters, getMovieForId, DescriptionMovieSerie, getSerieForId, inputSearchSerie, inputSearchMovie, getPosters } from './project.service'

import { posterMoviesPreview } from './project.module'

async function deployPage (): Promise<void> {
  await ShowFiveTrendsPoster()
  await showSeriesPosters()
  await showMoviesPosters()
}

deployPage()
  .then(res => {
    document.querySelectorAll('.img-description').forEach(item => {
      item.addEventListener('click', async (e) => {
        if (item.classList.contains('serie')) {
          const data = await getSerieForId(item.nextElementSibling?.innerHTML as string)
          DescriptionMovieSerie(data)
        } else {
          const data = await getMovieForId(item.nextElementSibling?.innerHTML as string)
          DescriptionMovieSerie(data)
        }
      })
    })
  })

document.querySelector('.searchSubmit')?.addEventListener('click', async () => {
  const btnSearch = document.querySelector('.searchCanvas')
  btnSearch?.classList.add('show')
})

document.querySelector('.SubmitBtn')?.addEventListener('click', async () => {
  const datos = document.querySelector('.searchInput') as HTMLInputElement
  if (datos?.value) {
    getSearchedSeries(datos)
  }
})

async function getSearchedSeries (datos: HTMLInputElement): Promise<void> {
  const data = await inputSearchSerie(datos?.value)
  const data2 = await inputSearchMovie(datos?.value)
  data.forEach(item => {
    const posterPath = getPosters(item.poster_path)
    const elem = posterMoviesPreview(posterPath, item.name as string, item.id)
    document.querySelector('.searchedMovies')?.append(elem)
  })

  data2.forEach(item => {
    const posterPath = getPosters(item.poster_path)
    const elem = posterMoviesPreview(posterPath, item.original_title, item.id)
    document.querySelector('.searchedMovies')?.append(elem)
  })
}

// setTimeout(() => {
//   document.querySelector('.charge-screen')?.classList.add('puffOut')
// }, 5000)

// setTimeout(() => {
//   document.querySelector('.charge-screen')?.classList.add('visually-hidden')
// }, 8500)
