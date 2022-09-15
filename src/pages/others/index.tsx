import React from 'react'
import Header from '../../components/menu'
import Link from 'next/link'

const OthersPage = () => {
  return (
    <div>
      <Header />
      <h1>Sensation Kizomba</h1>
      <h2>Autres villes</h2>
      <Link href="/others/bordeaux">
        <a>
          <h3>Bordeaux</h3>
        </a>
      </Link>
      <Link href="/others/le-mans">
        <a>
          <h3>Le Mans</h3>
        </a>
      </Link>
      <Link href="/others/orleans">
        <a>
          <h3>Orléans</h3>
        </a>
      </Link>
    </div>
  )
}

export default OthersPage
