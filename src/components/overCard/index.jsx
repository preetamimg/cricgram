import React from 'react'

const OverCard = () => {
  return (
    <>
      <div className="overCard">
        <div className="row align-items-center flex-nowrap g-md-5">
          <div className="col-auto overName">
            <div className="overCount">65 Over</div>
            <div className="overRuns">0 Runs</div>
          </div>
          <div className="col overDetail overflow-hidden">
            <div className="overBetween">Umesh Yadav To Shardul Thakur</div>
            <div className="overBalls d-flex align-items-center">
              <div className="overBall">
                <div className="run">0</div>
                <div className="overCountt">64.1</div>
              </div>
              <div className="overBall">
                <div className="run">0</div>
                <div className="overCountt">64.2</div>
              </div>
              <div className="overBall">
                <div className="run">0</div>
                <div className="overCountt">64.3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OverCard