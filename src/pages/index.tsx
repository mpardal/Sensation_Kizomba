import React from 'react'
import Menu from './menu'
import cx from 'classnames'

const Home = () => {
  return (
    <div className={cx('xl:container', 'xl:mx-auto')}>
      <Menu />
    </div>
  )
}

export default Home
