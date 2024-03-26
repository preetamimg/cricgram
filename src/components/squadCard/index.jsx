import React from 'react';
import PlayerImage from 'assets/img/playerPlaceholder.webp';
import batsmanIcon from 'assets/img/batsman.svg';
import bowlerIcon from 'assets/img/bowler.svg';
import allrounderIcon from 'assets/img/allRounder.png';
import { useNavigate } from 'react-router-dom';
import { ROUTE_CONST } from '../../constants';

const SquadCard = ({ data }) => {
  const catObj={
    "wk":"Wicket Keeper",
    "bat":"Batsman",
    "bowl":"Bowler",
    "all":"All Rounder"
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="topRankerCard" onClick={()=>navigate(`${ROUTE_CONST.PLAYER_DETAIL}/${data?.pid}`)} >
        <div className="playerImg">
          <img src={PlayerImage} alt="" />
        </div>
        <div className="playerName">{data?.title}</div>
        <div className="playerCategory d-flex align-items-center text-capitalize">
          {
            data?.playing_role === 'wk' ?
              <div className="wicketKeeper me-1">W</div>
            : <img src={data?.playing_role === "bat" ? batsmanIcon : data?.playing_role === "bowl" ? bowlerIcon : allrounderIcon} alt="" />
          }
          {catObj[data?.playing_role]}
        </div>
      </div>
    </>
  )
}

export default SquadCard;