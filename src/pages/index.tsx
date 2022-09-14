import React from 'react'
import Menu from './menu'
import cx from 'classnames'
import HomePage from './homePage'

const Home = () => {
  return (
    <div className={cx('xl:container', 'xl:mx-auto')}>
      <Menu />
      <HomePage />
    </div>
  )
}

export default Home
