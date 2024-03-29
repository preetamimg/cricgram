import React from 'react'
import PlayerImage from 'assets/img/playerPlaceholder.webp'
import { useNavigate } from 'react-router-dom';
import { ROUTE_CONST } from '../../constants';

const TopRankerCard = ({data}) => {
    const navigate = useNavigate();

  return (
    <>
      <div className="topRankerCard" onClick={()=>{
        if(data?.pid){
          navigate(`${ROUTE_CONST.PLAYER_DETAIL}/${data?.pid}`)
        }
        }} >
        <div className="playerImg">
          <img src={PlayerImage} alt="" />
        </div>
        <div className="playerName">{data?.playerName}</div>
        <div className="playerCategory">Highest Run Scorer</div>
        <div className="score">{data?.run}</div>
        <div className="scoreName">Runs</div>
      </div>
    </>
  )
}

export default TopRankerCard;