import React from 'react'
import Header from '../components/header'
import cx from 'classnames'
import Image from 'next/image'
import conexao from '../../public/conexao-8_10.jpeg'
import noite from '../../public/noite-24_09.jpeg'
import Footer from '../components/footer'

const Home = () => {
  return (
    <>
      <Header />
      <h1 className={cx('text-center')}>SENSATION KIZOMBA</h1>
      <div className={cx('lg:flex', 'flex-row')}>
        <article className={cx('text-justify', 'm-3', 'md:m-5')}>
          <h2 className={cx('text-center')}>Conexao du 08/10</h2>
          <Image src={conexao} alt="affiche du conexao" className={cx('rounded-lg')} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid culpa dolor
            dolorem earum excepturi facere, hic incidunt ipsum itaque nesciunt nihil non, pariatur
            praesentium quos suscipit voluptates. Dolorum, molestiae. Ab accusamus ad, aliquid atque
            aut cumque et eveniet fugit harum, id illum, laudantium quam tenetur! Aperiam cumque
            debitis, deserunt excepturi laboriosam quidem ratione tenetur? Consectetur fugiat id
            ipsam voluptatem.
          </p>
        </article>
        <article className={cx('text-justify', 'm-3', 'md:m-5')}>
          <h2 className={cx('text-center')}>Noite du 24/09</h2>
          <Image src={noite} alt="affiche de la noite" className={cx('rounded-lg')} />
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
      <Footer />
    </>
  )
}

export default Home
