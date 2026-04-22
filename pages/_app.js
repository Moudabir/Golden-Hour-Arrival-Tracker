import '../styles/globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

export default function MyApp({ Component, pageProps }){
  return (
    <>
      <SpeedInsights />
      <Analytics />
      <Component {...pageProps} />
    </>
  )
}
