import React from 'react'
import Menu from './menu'
import Link from 'next/link'

const Others = () => {
  return (
    <div>
      <Menu />
      <h1>Sensation Kizomba</h1>
      <h2>Autres villes</h2>
      <Link href="/others/bordeaux">
        <div>
          <h3>Bordeaux</h3>
        </div>
      </Link>
      <Link href="/others/le-mans">
        <div>
          <h3>Le Mans</h3>
        </div>
      </Link>
      <Link href="/others/orleans">
        <div>
          <h3>Orléans</h3>
        </div>
      </Link>
    </div>
  )
}

export default Others
