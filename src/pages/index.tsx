import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { AppBar, Button, Toolbar } from '@mui/material'
import Menu from './menu'

const Home: NextPage = () => {
  return (
    <Menu />
    // <>
    //   <AppBar>
    //     <Toolbar>
    //       <div className="ml-auto">
    //         <Button color="inherit">Gerg</Button>
    //         <Button color="inherit">Gerg</Button>
    //         <Button color="inherit">Gerg</Button>
    //       </div>
    //       <div>
    //         <h1>LOGO</h1>
    //       </div>
    //     </Toolbar>
    //   </AppBar>
    //   <div className="p-4">
    //     <Button>Toto</Button>
    //   </div>
    // </>
  )
}

export default Home
