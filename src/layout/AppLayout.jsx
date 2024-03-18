import Footer from 'components/footer';
import Header from 'components/header';
import React from 'react';

const AppLayout = ({LayoutComponent,Content}) => {
  return (
    <>
    <div className="pageLayout h-100 d-flex flex-column overflow-hidden">
      <Header/>
      <div className="pageInner h-100 flex-fill overflow-y-auto d-flex flex-column">
        <div className="flex-fill pb-4">
          <LayoutComponent Content={Content} />
        </div>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default AppLayout;