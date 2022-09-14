import React from 'react'
import cx from 'classnames'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import conexao from '../../public/conexao-8_10.jpeg'
import noite from '../../public/noite-24_09.jpeg'

const HomePage = () => {
  return (
    <Box>
      <h1 className={cx('text-center')}>SENSATION KIZOMBA</h1>
      <div className={cx('lg:flex', 'flex-row')}>
        <article className={cx('text-justify', 'm-3', 'md:m-5')}>
          <h2 className={cx('text-center')}>Conexao du 08/10</h2>
          <Image src={conexao} alt="affiche du conexao" />
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
          <Image src={noite} alt="affiche de la noite" />
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
    </Box>
  )
}

export default HomePage
