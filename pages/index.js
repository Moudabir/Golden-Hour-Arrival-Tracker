import Head from 'next/head'

export default function Home(){
  return (
    <>
      <Head>
        <title>Golden Hour Arrival Tracker</title>
      </Head>
      <main style={{padding:20,maxWidth:960,margin:'0 auto'}}>
        <h1>Golden Hour Arrival Tracker</h1>
        <p>This Next.js wrapper includes Vercel Speed Insights component. Your original static page is available at <a href="/index.html">/index.html</a>.</p>
        <p>Deploy the site and visit a few pages to allow Speed Insights to collect data.</p>
      </main>
    </>
  )
}
