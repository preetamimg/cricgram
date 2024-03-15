import { ROUTE_CONST } from 'constants';
import moment from 'moment';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const MatchCard = ({
  key,
  ID,
  live,
  match,
  StartDate,
  endDate,
  venue,
  stadium,
  teamALogo,
  teamAID,
  teamAName,
  TeamAscore,
  teamBLogo,
  teamBID,
  teamBName,
  TeamBscore,
  result,
  subtitle
}) => {
  const navigate = useNavigate();
  console.log(key)
  return (
    <>
      <div className="col">
        <div className="matchCard" onClick={()=>navigate(ROUTE_CONST.LIVE_SCORE,{ state: ID })}>
          <div className="row mx-0 gx-0">
            {/* live, notLive, lunch */}
            <div className="col-12 matchStatus live">{live}</div>
            <div className="col-12 matchDate">
              {match} ,
                {venue} ,
                {`${moment(StartDate).format('dddd')} ${new Date(StartDate).getDate()}`} - {new Date(endDate).getDate()} ,
                 {stadium}</div>
            <div className="col-12 d-flex align-items-center justify-content-between mt-2">
              <div className="d-flex align-items-center matchTeam playing">
                <img src={teamALogo} alt="" />
                {teamAName}
              </div>
              <div className="matchScore">
               
                <span>{TeamAscore}</span>
              </div>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-between mt-2">
              <div className="d-flex align-items-center matchTeam disabled">
                <img src={teamBLogo} alt="" />
                {teamBName}
              </div>
              <div className="matchScore">
                <span className='disabled'>{TeamBscore}</span>
              </div>
            </div>
            {/* <div className="col-12 matchMsg">Day 2 - South Aust lead by 276 runs.</div> */}
            <div className="col-12 matchMsg">{result}</div>
            <div className="col-12 matchOptns d-flex align-items-center gap-2">
              <span>scorecard</span>
              <span>full commentary</span>
              <span>news</span>
            </div>
          </div>
        </div>


        
      </div>
    </>
  )
}

export default MatchCard