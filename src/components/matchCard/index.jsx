import { ROUTE_CONST } from 'constants'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { formatDate } from 'utils/helpers';

const MatchCard = ({ data }) => {
  const navigate = useNavigate();

  

  return (
    <>
      <div className="col">
        <div className="matchCard" onClick={()=>navigate(ROUTE_CONST.LIVE_SCORE)}>
          <div className="row mx-0 gx-0">
            {/* live, notLive, lunch */}
            <div className="col-12 matchStatus live">live</div>
            {/* <div className="col-12 matchDate">28th Match, Hobart, March 11 - 14, 2024, Sheffield Shield</div> */}
            <div className="col-12 matchDate">{formatDate(data.start_date)}</div>
            <div className="col-12 d-flex align-items-center justify-content-between mt-2">
              <div className="d-flex align-items-center matchTeam playing">
                <img src={data?.teamAImage} alt="" />
                {data.teamashortname}
              </div>
              <div className="matchScore">
                {/* <span className="small">(39.3 ov)</span> */}
                {/* <span className='disabled'>271 & </span> */}
                <span className='disabled'>{data?.teamAFullScore}</span>
              </div>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-between mt-2">
              <div className="d-flex align-items-center matchTeam disabled">
                <img src={data?.teamBImage} alt="" />
                {data.teambshortname}
              </div>
              <div className="matchScore">
                <span className='disabled'>{data?.teamBFullScore}</span>
              </div>
            </div>
            <div className="col-12 matchMsg">{data?.status_note}</div>
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