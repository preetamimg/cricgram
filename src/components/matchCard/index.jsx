import React from 'react'

const MatchCard = () => {
  return (
    <>
      <div className="col">
        <div className="matchCard">
          <div className="row mx-0 gx-0">
            {/* live, notLive, lunch */}
            <div className="col-12 matchStatus live">live</div>
            <div className="col-12 matchDate">28th Match, Hobart, March 11 - 14, 2024, Sheffield Shield</div>
            <div className="col-12 d-flex align-items-center justify-content-between mt-2">
              <div className="d-flex align-items-center matchTeam playing">
                <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313200/313234.logo.png" alt="" />
                South Australia
              </div>
              <div className="matchScore">
                <span className="small">(39.3 ov)</span>
                <span className='disabled'>271 & </span>
                97/6
              </div>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-between mt-2">
              <div className="d-flex align-items-center matchTeam disabled">
                <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_160,q_50/lsci/db/PICTURES/CMS/313200/313235.logo.png" alt="" />
                tasmania
              </div>
              <div className="matchScore">
                <span className='disabled'>123</span>
              </div>
            </div>
            <div className="col-12 matchMsg">Day 2 - South Aust lead by 276 runs.</div>
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