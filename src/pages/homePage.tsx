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
      <Box className={cx('lg:flex', 'flex-row')}>
        <Typography className={cx('text-justify', 'mx-3', 'md:mx-5')}>
          <h2 className={cx('text-center')}>Conexao du 08/10</h2>
          <Image src={conexao} alt="affiche du conexao" />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid culpa dolor
            dolorem earum excepturi facere, hic incidunt ipsum itaque nesciunt nihil non, pariatur
            praesentium quos suscipit voluptates. Dolorum, molestiae. Ab accusamus ad, aliquid atque
            aut cumque et eveniet fugit harum, id illum, laudantium quam tenetur! Aperiam cumque
            debitis, deserunt excepturi laboriosam quidem ratione tenetur? Consectetur fugiat id
            ipsam voluptatem.
          </div>
        </Typography>
        <Typography className={cx('text-justify', 'mx-3', 'md:mx-5')}>
          <h2 className={cx('text-center')}>Noite du 24/09</h2>
          <Image src={noite} alt="affiche de la noite" />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid culpa dolor
            dolorem earum excepturi facere, hic incidunt ipsum itaque nesciunt nihil non, pariatur
            praesentium quos suscipit voluptates. Dolorum, molestiae. Ab accusamus ad, aliquid atque
            aut cumque et eveniet fugit harum, id illum, laudantium quam tenetur! Aperiam cumque
            debitis, deserunt excepturi laboriosam quidem ratione tenetur? Consectetur fugiat id
            ipsam voluptatem.
          </div>
        </Typography>
      </Box>
    </Box>
  )
}

export default HomePage
