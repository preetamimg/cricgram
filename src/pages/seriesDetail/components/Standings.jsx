import React, { useState } from 'react'
import arrowIcons from 'assets/img/arrow.svg'

const Standings = () => {
  const data = [1,1,1,1,1]
  const [activeTableIndex, setActiveTableIndex] = useState(null)

  const handleTableAccordian = (index)=> {
    if(activeTableIndex === index) {
      setActiveTableIndex(null)
    } else {
      setActiveTableIndex(index)
    }
  }

  return (
    <>
      <div className="table-responsive">
        <table className='table commonTable mb-0'>
          <thead>
            <tr>
              <th>No</th>
              <th>Team</th>
              <th>M</th>
              <th>W</th>
              <th>L</th>
              <th>T</th>
              <th>N/R</th>
              <th>PTS</th>
              <th>Net RR</th>
              <th>Form</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map((item, index)=> (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td className='text-nowrap'>
                      <div className='linkTxt'>Windward Volcanoes</div>
                    </td>
                    <td>3</td>
                    <td>3</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>36</td>
                    <td>1.833</td>
                    <td>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="overBalls d-flex align-items-center gap-2">
                          {/* use red, green class here */}
                          <div className="overBall">W</div>
                          <div>-</div>
                          <div>-</div>
                          <div>-</div>
                          <div>-</div>
                          <div>-</div>
                        </div>
                        <div onClick={()=> handleTableAccordian(index)} className={`tableArrowIcon ${activeTableIndex === index ? 'active' : ''}`}>
                          <img src={arrowIcons} alt="" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  {
                    activeTableIndex === index ? 
                      <tr>
                        <td className='px-0 py-1 roundedTd' colSpan={10}>
                          <table className='w-100 innerTable'>
                            <thead>
                              <tr>
                                <th>Opponent</th>
                                <th>Description</th>
                                <th>Date</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div>Jamaica Scorpions</div>
                                  <div className='linkTxt'>Won by 9 wickets</div>
                                </td>
                                <td>Match 1</td>
                                <td>7 Feb 2024</td>
                              </tr>
                              <tr>
                                <td>
                                  <div>Jamaica Scorpions</div>
                                  <div className='linkTxt'>Won by 9 wickets</div>
                                </td>
                                <td>Match 1</td>
                                <td>7 Feb 2024</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    : ''
                  }

                </>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Standings