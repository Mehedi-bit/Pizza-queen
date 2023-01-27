import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza Queen in Dhaka</title>
        <meta name="description" content="Best pizza shop in the town" />
        <meta name="keywords" content="Pizza queen, pizza, burger, cheese, fast food, tasty, spicy, hot, delicious, awesome, 7 inch, 12 inch, 13 inch, 14 inch, tomato, sauce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Homepage
    </>
  )
}
