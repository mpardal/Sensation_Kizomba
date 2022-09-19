import React from 'react'
import Layout, { NextPageWithLayout } from '../components/layout'
import Image from 'next/image'
import noite2409 from '../../public/noite-24_09.jpeg'

const Orleans: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Orléans</h1>
      <article className="m-3 text-justify md:m-5">
        <h2>Événements mensuels</h2>
        <h3 className="text-center">Noite Kizomba</h3>
        <div className="flex flex-col lg:flex-row">
          <Image src={noite2409} alt="affiche du conexao" className="rounded-lg" />
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

Orleans.Layout = function OrleansLayout(page) {
  return <Layout>{page}</Layout>
}

export default Orleans
