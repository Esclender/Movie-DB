import { ShowFiveTrendsPoster, getDailyTrendsMovies } from './project.service'

// ShowFiveTrendsPoster()

// setTimeout(() => {
//   document.querySelector('.charge-screen')?.classList.add('puffOut')
// }, 5000)

// setTimeout(() => {
//   document.querySelector('.charge-screen')?.classList.add('visually-hidden')
// }, 8500)

getDailyTrendsMovies()
  .then(res => { console.log(res) })
