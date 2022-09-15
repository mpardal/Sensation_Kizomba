import React from 'react'
import Header from '../components/header'
import Image from 'next/image'
import conexao from '../../public/conexao-8_10.jpeg'
import noite from '../../public/noite-24_09.jpeg'
import Footer from '../components/footer'
import Layout, { NextPageWithLayout } from '../components/layout'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="text-center">SENSATION KIZOMBA</h1>
      <div className="flex-row lg:flex">
        <article className="m-3 text-justify md:m-5">
          <h2 className="text-center">Conexao du 08/10</h2>
          <Image src={conexao} alt="affiche du conexao" className="rounded-lg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid culpa dolor
            dolorem earum excepturi facere, hic incidunt ipsum itaque nesciunt nihil non, pariatur
            praesentium quos suscipit voluptates. Dolorum, molestiae. Ab accusamus ad, aliquid atque
            aut cumque et eveniet fugit harum, id illum, laudantium quam tenetur! Aperiam cumque
            debitis, deserunt excepturi laboriosam quidem ratione tenetur? Consectetur fugiat id
            ipsam voluptatem.
          </p>
        </article>
        <article className="m-3 text-justify md:m-5">
          <h2 className="text-center">Noite du 24/09</h2>
          <Image src={noite} alt="affiche de la noite" className="rounded-lg" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid culpa dolor
            dolorem earum excepturi facere, hic incidunt ipsum itaque nesciunt nihil non, pariatur
            praesentium quos suscipit voluptates. Dolorum, molestiae. Ab accusamus ad, aliquid atque
            aut cumque et eveniet fugit harum, id illum, laudantium quam tenetur! Aperiam cumque
            debitis, deserunt excepturi laboriosam quidem ratione tenetur? Consectetur fugiat id
            ipsam voluptatem.
          </p>
        </article>
      </div>
    </>
  )
}

Home.Layout = function HomeLayout(page) {
  return <Layout>{page}</Layout>
}

export default Home
