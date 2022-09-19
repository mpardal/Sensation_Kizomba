import React from 'react'
import Header from '../../components/header'
import Link from 'next/link'
import Info from '../../components/info'
import Footer from '../../components/footer'

const OthersPage = () => {
  return (
    <div>
      <Info />
      <Header />
      <h1 className="text-center">Sensation Kizomba</h1>
      <Link href="/others/bordeaux">
        <a className="card text-center text-black no-underline">
          <h3>Bordeaux</h3>
        </a>
      </Link>
      <Link href="/others/le-mans">
        <a className="text-center text-black no-underline">
          <h3>Le Mans</h3>
        </a>
      </Link>
      <Link href="/others/orleans">
        <a className="border border-yellow-500 text-center text-black no-underline">
          <h3>Orléans</h3>
        </a>
      </Link>
      <Footer />
    </div>
  )
}

export default OthersPage
