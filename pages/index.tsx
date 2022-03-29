import Head from 'next/head'
import Image from 'next/image'
import { VFC } from 'react'
import { Layout } from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home: VFC = () => {
  return (
    <Layout title="Home">
      <p className="text-3xl font-bold">Next.js + GraphQL</p>
    </Layout>
  )
}
export default Home
