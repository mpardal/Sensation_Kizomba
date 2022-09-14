import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { AppBar, Button, Toolbar } from '@mui/material'
import Menu from './menu'
import Welcome from './Welcome'

const Home = () => {
  return (
    <>
      <Menu />
      <Welcome />
    </>
  )
}

export default Home
