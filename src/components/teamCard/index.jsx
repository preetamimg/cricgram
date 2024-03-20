import React from 'react'

const TeamCard = ({ data }) => {
  return (
    <>
      <div className="topRankerCard">
        <div className="playerImg mb-2">
          <img src={data?.logo} alt="" />
        </div>
        <div className="playerName">{data?.name}</div>
      </div>
    </>
  )
}

export default TeamCard