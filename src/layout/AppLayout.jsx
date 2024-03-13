import Header from 'components/header'
import React from 'react'

const AppLayout = ({Component}) => {
  return (
    <>
      <Header/>
      <div className="pageInner">
        <Component/>
      </div>
    </>
  )
}

export default AppLayout