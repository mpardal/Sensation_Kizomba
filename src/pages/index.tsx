import React from 'react'
import Header from '../components/header'
import cx from 'classnames'
import Image from 'next/image'
import conexao from '../../public/conexao-8_10.jpeg'
import noite from '../../public/noite-24_09.jpeg'
import unidade from '../../public/unidade-01_10.jpeg'
import Footer from '../components/footer'
import Info from '../components/info'

const Home = () => {
  return (
    <div className="bg-neutral-200">
      <Info />
      <Header />
      <h1 className="text-center">SENSATION KIZOMBA</h1>
      <h2 className="mb-0 text-center underline">Derniers articles</h2>
      <div>
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
        <article className="m-3 text-justify md:m-5">
          <h2 className="text-center">Noite du 24/09</h2>
          <div className="flex flex-col lg:flex-row">
            <Image src={noite} alt="affiche de la noite" className="h-full w-auto rounded-lg" />
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

export default Home
