import React from 'react'
import PlayerImage from 'assets/img/playerPlaceholder.webp'

const TopRankerCard = () => {
  return (
    <>
      <div className="topRankerCard">
        <div className="playerImg">
          <img src={PlayerImage} alt="" />
        </div>
        <div className="playerName">GEORGE MUNSEY (AE)</div>
        <div className="playerCategory">Highest Run Scorer</div>
        <div className="score">122</div>
        <div className="scoreName">Runs</div>
      </div>
    </>
  )
}

export default TopRankerCard