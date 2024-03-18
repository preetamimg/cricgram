import React from 'react'
import PlayerImage from 'assets/img/playerPlaceholder.webp'

const TopRankerCardLoader = ({type}) => {
  return (
    <>
      <div className="topRankerCard loader">
        <div className="playerImg"></div>
        <div className="playerName"></div>
        {
          type !== 'team' ? <>
            <div className="playerCategory"></div>
          </> : ''
        }
        {
          !(type === 'team' || type === 'squad' ) ? <>
            <div className="score"></div>
            <div className="scoreName"></div>
          </> : ''
        }
      </div>
    </>
  )
}

export default TopRankerCardLoader