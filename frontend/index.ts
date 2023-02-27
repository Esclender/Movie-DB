import { ShowFiveTrendsPoster, showSeriesPosters } from './project.service'

ShowFiveTrendsPoster()
showSeriesPosters()

setTimeout(() => {
  document.querySelector('.charge-screen')?.classList.add('puffOut')
}, 5000)

setTimeout(() => {
  document.querySelector('.charge-screen')?.classList.add('visually-hidden')
}, 8500)
