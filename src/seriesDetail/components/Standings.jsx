import React, { useEffect, useState } from 'react'
import arrowIcons from 'assets/img/arrow.svg'
import axios from 'axios';
import { BASE_URL } from 'constants';
import { API_ENDPOINT, TOKEN } from '../../constants';
import {useParams} from 'react-router-dom';

const Standings = () => {
  // const data = [1,1,1,1,1]
  const {cid} = useParams();
  const [standing,setStanding] = useState([]);
  const [activeTableIndex, setActiveTableIndex] = useState(null);


  const StandingApi=()=>{
    axios.get(`${BASE_URL}${API_ENDPOINT.COMPETITIONS}/${cid}/${API_ENDPOINT.STANDINGS}/?token=${TOKEN}`)
    .then((res)=>{
      console.log(res?.data?.response?.standings)
      setStanding(res?.data?.response?.standings)
    })
    .catch((err)=>console.log(err))
  }
  const handleTableAccordian = (index)=> {
    if(activeTableIndex === index) {
      setActiveTableIndex(null)
    } else {
      setActiveTableIndex(index)
    }
  }
  

  useEffect(()=>{
    StandingApi()
  },[])

  return (
    <>
      
      <div className="commonHeading mb-1">POINTS TABLE</div>
      <div className="commonHeading text-capitalize">{standing?.[0]?.round?.name}</div>
      {standing.length > 0 ?
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
            {!standing?.[0]?.standing ? 
            (
              standing?.[0]?.standings?.map((item, index)=> (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td className='text-nowrap'>
                      <div className='linkTxt'>{item?.team?.title}</div>
                    </td>
                    <td>{item?.played}</td>
                    <td>{item?.win}</td>
                    <td>{item?.loss}</td>
                    <td>{item?.draw}</td>
                    <td>{item?.nr}</td>
                    <td>{item?.points}</td>
                    <td>{item?.netrr}</td>
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
            )
            :
            <tr>
              <td colSpan={10} className='tableLoader'></td>
            </tr>
          }
          </tbody>
        </table>
      </div>
      :
      <h6 className='text-white text-center'>
        No Data Found 
      </h6>
        }
      <div className="statsDetailTxt mt-3">Last Updated On 15 Mar 2024, 10:40 IST</div>
      <div className="statsDetailTxt"><span>M:</span> Matches, <span>W:</span> Won, <span>L:</span> Lost, <span>T:</span> Tie, <span>N/R:</span> No Result, <span>PTS:</span> Points, <span>Net RR:</span> Net run rate, <span>Q:</span> Qualified</div>
    </>
  )
}

export default Standings