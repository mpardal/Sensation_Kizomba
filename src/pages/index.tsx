import React from 'react'
import Menu from './menu'
import cx from 'classnames'
import HomePage from './homePage'
import Link from 'next/link'

const Home = () => {
  return (
    <div className={cx('xl:container', 'xl:mx-auto', 'bg-neutral-200')}>
      <HomePage />
    </div>
  )
}

export default Home
