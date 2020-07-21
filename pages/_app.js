import Router from 'next/router'
import nprogress from 'nprogress'
import debounce from 'lodash.debounce'
import '@styles/global.css'

const start = debounce(nprogress.start, 500)
Router.events.on('routeChangeStart', start)
Router.events.on('routeChangeComplete', url => {
  start.cancel()
  nprogress.done()
  window.scrollTo(0, 0)
})
Router.events.on('routeChangeError', () => {
  start.cancel()
  nprogress.done()
})

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
