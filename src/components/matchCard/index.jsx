import React from 'react';
import { ROUTE_CONST } from 'constants';
import { useNavigate } from 'react-router-dom';
import { formatDate } from 'utils/helpers';

const MatchCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="col">
        <div className="matchCard" onClick={()=>navigate(`${ROUTE_CONST.LIVE_SCORE}/${data?.real_matchkey}/${data?.short_name.replaceAll(" ","-")}-${data?.seiresName.replaceAll(" ","-")}`)}>
          <div className="row mx-0 gx-0">
            {/* live, notLive, lunch */}
            {data.status_str==="live" ? <div className="col-12 matchStatus notLive">live</div> : ""}
            <div className="col-12 matchDate">{formatDate(data?.start_date)} - {data?.seiresName}</div>
            <div className="col-12 d-flex align-items-center justify-content-between mt-2">

               {/*  add 'playing' class to the div below if this is the team currently playing and add "disabled" if this team lost */}
              <div className={`d-flex align-items-center matchTeam ${data?.status_str==="Completed"?(data?.teamAId === data?.winningTeamId ? "winner" :'disabled'):""} `}>
                <img src={data?.teamAImage} alt="" />
                {data?.teamaname}
              </div>
              <div className="matchScore">
                {/* <span className="small">(39.3 ov)</span> */}
                <span className='disabled'>{data?.teamAFullScore}</span>
              </div>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-between mt-2">
              <div className={`d-flex align-items-center matchTeam ${data?.status_str==="Completed"?(data?.teamBId === data?.winningTeamId ? "winner" :'disabled'):""}`}>
                <img src={data?.teamBImage} alt="" />
                {data?.teambname}
              </div>
              <div className="matchScore">
                <span className='disabled'>{data?.teamBFullScore}</span>
              </div>
            </div>
            <div className="col-12 matchMsg green">{data?.status_note}</div>
            <div className="col-12 matchOptns d-flex align-items-center gap-2">
              <span>scorecard</span>
              <span>full commentary</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default MatchCard;