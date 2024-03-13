import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTE_CONST } from 'constants'
import Home from 'pages/home'
import LiveScorePage from 'pages/liveScore'
import AppLayout from 'layout/AppLayout'

const RouteComponent = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTE_CONST.HOME_PAGE} element={<AppLayout Component={Home}/>}/>
        <Route path={ROUTE_CONST.LIVE_SCORE} element={<AppLayout Component={LiveScorePage}/>}/>
      </Routes>
    </>
  )
}

export default RouteComponent