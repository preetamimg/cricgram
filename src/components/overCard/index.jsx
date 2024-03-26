import React from 'react'

const OverCard = ({ data }) => {
  return (
    <>
      <div className="overCard">
        <div className="row align-items-center flex-nowrap g-md-5">
          <div className="col-auto overName">
            <div className="overCount">{data?.over} Over</div>
            <div className="overRuns">{data.runs} Runs</div>
          </div>
          <div className="col overDetail overflow-hidden">
            {/* <div className="overBetween">{data?.commentary}</div> */}
            <div className="overBalls d-flex align-items-center">
              
              {data?.balls?.map((item)=>(
                <div className="overBall">
                {/* <div className="run">{item?.run}</div> */}
                {item?.event === "wicket" ? (
                      <div className="run wicket">W</div>
                    ) : (
                      ""
                    )}
                    {item?.event === "ball" && item?.four ? (
                      <div className="run four">4</div>
                    ) : (
                      ""
                    )}
                    {item?.event === "ball" && item?.six ? (
                      <div className="run six">6</div>
                    ) : (
                      ""
                    )}
                    {item?.event === "ball" &&
                    !item?.six &&
                    !item?.four &&
                    !item?.noball &&
                    item?.legbye_run === "0" &&
                    !item?.wideball ? (
                      <div
                        className={`run ${item.bat_run === "0" ? "zero" : ""}`}
                      >
                        {item?.bat_run}
                      </div>
                    ) : (
                      ""
                    )}
                    {item?.event === "ball" && item?.legbye_run !== "0" ? (
                      <div className="run">{item?.legbye_run}lb</div>
                    ) : (
                      ""
                    )}
                    {item?.event === "ball" && item?.noball ? (
                      <div className="run">{item?.noball_run}nb</div>
                    ) : (
                      ""
                    )}
                    {item?.event === "ball" && item?.wideball ? (
                      <div className="run">{item?.wide_run}wd</div>
                    ) : (
                      ""
                    )}
                <div className="overCountt">{item?.over}.{item?.ball}</div>
              </div>
              ))}

              {/* <div className="overBall">
                <div className="run">0</div>
                <div className="overCountt">64.2</div>
              </div> */}
              {/* <div className="overBall">
                <div className="run">0</div>
                <div className="overCountt">64.3</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OverCard