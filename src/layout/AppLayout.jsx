import Header from 'components/header'
import React from 'react'

const AppLayout = ({Component}) => {
  return (
    <>
    <div className="pageLayout h-100 d-flex flex-column overflow-hidden">
      <Header/>
      <div className="pageInner h-100 flex-fill overflow-y-auto d-flex flex-column ">
        <Component/>
      </div>
      </div>
    </>
  )
}

export default AppLayout