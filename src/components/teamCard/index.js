import React from 'react'

const TeamCard = ({key,title,logo}) => {
  return (
    <>
      <div className="topRankerCard">
        <div className="playerImg mb-2">
          <img src={logo} alt="" />
        </div>
        <div className="playerName">{title}</div>
      </div>
    </>
  )
}

export default TeamCard