import React from 'react'

const MatchLoaderCard = () => {
  return (
    <>
      <div className="col">
        <div className="matchCard loader">
          <div className="row mx-0 gx-0 flex-column">
            <div className="col-12 matchStatus notLive"></div>
            <div className="col-12 matchDate"></div>
            <div className="col-12 d-flex align-items-center justify-content-between mt-2">
              <div className={`d-flex align-items-center matchTeam`}>
                <div className="teamImg"></div>
                <div className="teamName"></div>
              </div>
              <div className="matchScore">
                <span className='disabled'></span>
              </div>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-between mt-2">
              <div className={`d-flex align-items-center matchTeam`}>
                <div className="teamImg"></div>
                <div className="teamName"></div>
              </div>
              <div className="matchScore">
                <span className='disabled'></span>
              </div>
            </div>
            <div className="col-12 matchMsg green"></div>
            <div className="col-12 matchOptns d-flex align-items-center gap-2">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MatchLoaderCard