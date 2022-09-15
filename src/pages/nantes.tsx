import React from 'react'
import Layout, { NextPageWithLayout } from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Image from 'next/image'
import unidade from '../../public/unidade-01_10.jpeg'
import conexao from '../../public/conexao-8_10.jpeg'
import mardi from '../../public/mardi.jpeg'
import sdc from '../../public/SDC.jpeg'
import Info from '../components/info'

const Nantes: NextPageWithLayout = () => {
  return (
    <div>
      <Info />
      <Header />
      <div className="m-3 lg:m-5">
        <h1 className="text-center">Sensation Kizomba</h1>
        <h2>Nantes</h2>
        <h3>Événements hebdomadaires</h3>
        <article className="m-3 text-justify md:m-5">
          <h2 className="text-center">Les mardis au Sao</h2>
          <div className="flex flex-col lg:flex-row">
            <Image src={mardi} alt="affiche du conexao" className="rounded-lg" />
            <p className="mx-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid culpa
              dolor dolorem earum excepturi facere, hic incidunt ipsum itaque nesciunt nihil non,
              pariatur praesentium quos suscipit voluptates. Dolorum, molestiae. Ab accusamus ad,
              aliquid atque aut cumque et eveniet fugit harum, id illum, laudantium quam tenetur!
              Aperiam cumque debitis, deserunt excepturi laboriosam quidem ratione tenetur?
              Consectetur fugiat id ipsam voluptatem.
            </p>
          </div>
        </article>
        <h3>Événements mensuels</h3>
        <article className="m-3 text-justify md:m-5">
          <h2 className="text-center">Conexao du 08/10</h2>
          <div className="flex flex-col lg:flex-row">
            <Image src={conexao} alt="affiche du conexao" className="rounded-lg" />
            <p className="mx-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid culpa
              dolor dolorem earum excepturi facere, hic incidunt ipsum itaque nesciunt nihil non,
              pariatur praesentium quos suscipit voluptates. Dolorum, molestiae. Ab accusamus ad,
              aliquid atque aut cumque et eveniet fugit harum, id illum, laudantium quam tenetur!
              Aperiam cumque debitis, deserunt excepturi laboriosam quidem ratione tenetur?
              Consectetur fugiat id ipsam voluptatem.
            </p>
          </div>
        </article>
        <h3>Événements trimestriels</h3>
        <article className="m-3 text-justify md:m-5">
          <h2 className="text-center">Unidade du 01/10</h2>
          <div className="flex flex-col lg:flex-row">
            <Image src={unidade} alt="affiche du conexao" className="h-full w-auto rounded-lg" />
            <p className="mx-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid culpa
              dolor dolorem earum excepturi facere, hic incidunt ipsum itaque nesciunt nihil non,
              pariatur praesentium quos suscipit voluptates. Dolorum, molestiae. Ab accusamus ad,
              aliquid atque aut cumque et eveniet fugit harum, id illum, laudantium quam tenetur!
              Aperiam cumque debitis, deserunt excepturi laboriosam quidem ratione tenetur?
              Consectetur fugiat id ipsam voluptatem.
            </p>
          </div>
        </article>
        <h3>Événements annuels</h3>
        <article className="m-3 text-justify md:m-5">
          <h2 className="text-center">Sensation Dance Congress</h2>
          <div className="flex flex-col lg:flex-row">
            <Image src={sdc} alt="affiche du conexao" className="h-full w-auto rounded-lg" />
            <p className="mx-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid culpa
              dolor dolorem earum excepturi facere, hic incidunt ipsum itaque nesciunt nihil non,
              pariatur praesentium quos suscipit voluptates. Dolorum, molestiae. Ab accusamus ad,
              aliquid atque aut cumque et eveniet fugit harum, id illum, laudantium quam tenetur!
              Aperiam cumque debitis, deserunt excepturi laboriosam quidem ratione tenetur?
              Consectetur fugiat id ipsam voluptatem.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  )
}

Nantes.Layout = function ContactLayout(page) {
  return <Layout>{page}</Layout>
}

export default Nantes
