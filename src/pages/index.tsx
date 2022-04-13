import type { NextPage } from 'next'
import Head from 'next/head'
import LandingPage from './LandingPage'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ADM-BOT</title>
        <meta name="description" content="ADM-BOT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <LandingPage />
      </main>
    </div>
  )
}

export default Home
