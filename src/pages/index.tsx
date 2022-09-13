import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { AppBar, Button, Toolbar } from '@mui/material'
import Menu from './menu'
import FirstPage from './firstPage'

const Home: NextPage = () => {
  return (
    <>
      <Menu />
    </>
  )
}

export default Home