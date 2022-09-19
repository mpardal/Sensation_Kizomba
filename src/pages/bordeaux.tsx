import React from 'react'
import Layout, { NextPageWithLayout } from '../components/layout'
import Image from 'next/image'
import bordeaux2023 from '../../public/BKSC2023.jpeg'

const Bordeaux: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Bordeaux</h1>
      <article className="m-3 text-justify md:m-5">
        <h2 className="text-center">Bordeaux Kizomba Salsa Congress 2023</h2>
        <div className="flex flex-col lg:flex-row">
          <Image src={bordeaux2023} alt="affiche du conexao" className="rounded-lg" />
          <p className="mx-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid culpa dolor
            dolorem earum excepturi facere, hic incidunt ipsum itaque nesciunt nihil non, pariatur
            praesentium quos suscipit voluptates. Dolorum, molestiae. Ab accusamus ad, aliquid atque
            aut cumque et eveniet fugit harum, id illum, laudantium quam tenetur! Aperiam cumque
            debitis, deserunt excepturi laboriosam quidem ratione tenetur? Consectetur fugiat id
            ipsam voluptatem.
          </p>
        </div>
      </article>
    </div>
  )
}

Bordeaux.Layout = function BordeauxLayout(page) {
  return <Layout>{page}</Layout>
}

export default Bordeaux
