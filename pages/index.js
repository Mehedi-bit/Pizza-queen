import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Featured from '@/components/Featured'
import PizzaList from '@/components/PizzaList'


export default function Home({pizzaList}) {
  return (
    <>
      <Head>
        <title>Pizza Queen in Dhaka</title>
        <meta name="description" content="Best pizza shop in the town" />
        <meta name="keywords" content="Pizza queen, pizza, burger, cheese, fast food, tasty, spicy, hot, delicious, awesome, 7 inch, 12 inch, 13 inch, 14 inch, tomato, sauce" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </>
  )
};

export const getServerSideProps = async () => {
  const response = await axios.get('http://localhost:3000/api/products');
  return {
    props: {
      pizzaList: response.data,
    }
  }
};