import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios';
import { baseUrl } from 'pages/home';
import { token } from 'pages/home';

const ScoreCard = ({matchId}) => {

  const [scoreCard,setScoreCard]=useState([]);
  const [Fows,setFows] = useState([]);
  const [latestInning,setLatestInnning]=useState(1)


useEffect(()=>{
  axios.get(`${baseUrl}/v2/matches/${matchId}/scorecard?token=${token}`)
  .then((res)=>{
    console.log(res?.data?.response?.innings)
    setScoreCard(res?.data?.response?.innings)
    setLatestInnning(res?.data?.response?.latest_inning_number)
    setFows(res?.data?.response?.innings)
  })
  .catch((err)=>console.log(err))
},[])


console.log('<<<batsmen>>>>',scoreCard)
  return (
    <>
      <Accordion className='commonAccordian' defaultActiveKey="0">
      <>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="d-flex align-items-center justify-content-between w-100 pe-2">
              <div>{scoreCard?.[0]?.name} {scoreCard?.[0]?.number}<sup>st</sup> Inning</div>
              <div>{scoreCard?.[0]?.scores_full}</div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive">
              <table className='table commonTable mb-0'>
                <thead>
                  <tr>
                    <th>Batter</th>
                    <th></th>
                    <th>R</th>
                    <th>B</th>
                    <th>4s</th>
                    <th>6s</th>
                    <th>SR</th>
                  </tr>
                </thead>
                <tbody>
                  {scoreCard?.[0]?.batsmen?.map((item)=>(  
                    <tr>
                    <td>{item?.name}</td>
                    <td className='fadedTxt'>{item?.how_out}</td>
                    <td>{item?.runs}</td>
                    <td>{item?.balls_faced}</td>
                    <td>{item?.fours}</td>
                    <td>{item?.sixes}</td>
                    <td>{item?.strike_rate}</td>
                  </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="table-responsive">
              <table className='table commonTable mb-0'>
                <thead>
                  <tr>
                  <th>Bowler</th>
                  <th>Ov</th>
                  <th>M</th>
                  <th>R</th>
                  <th>W</th>
                  <th>Eco</th>
                  </tr>
                </thead>
                <tbody>
                  {scoreCard?.[0]?.bowlers?.map((item)=>(  
                    <tr>
                     <td>{item?.name}</td>
                    <td>{item?.overs}</td>
                    <td>{item?.maidens}</td>
                    <td>{item?.runs_conceded}</td>
                    <td>{item?.wickets}</td>
                    <td>{item?.econ}</td>
                  </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <div className="col-12 mb-2">
          <div className="fallOfWickets">
            <div className="title">FALL OF WICKETS</div>
            {latestInning === 1 ?
              <>
              {!Fows?.[0]?.fows ? null :
            <div className='d-flex'>
        {Fows?.[0]?.fows?.map((fows)=>(
            <div className="value"><span>{fows?.runs}-{fows?.number}</span> ({fows?.name}, {fows?.overs_at_dismissal}),</div>
            ))}
            </div>
}
            </>
            :
          <>
            {!Fows?.[1]?.fows ? null :
            <div className='d-flex'>
        {Fows?.[1]?.fows?.map((fows)=>(
            <div className="value"><span>{fows?.runs}-{fows?.number}</span> ({fows?.name}, {fows?.overs_at_dismissal}),</div>
            ))}
            </div>   
            }
            </>
        }
          </div>
        </div>
{scoreCard?.length > 1 ?
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="d-flex align-items-center justify-content-between w-100 pe-2">
              <div>{scoreCard?.[1]?.name}  {scoreCard?.[1]?.number} <sup>nd</sup> Inning</div>
              <div>{scoreCard?.[1]?.scores_full}</div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive">
              <table className='table commonTable mb-0'>
                <thead>
                  <tr>
                    <th>Batter</th>
                    <th></th>
                    <th>R</th>
                    <th>B</th>
                    <th>4s</th>
                    <th>6s</th>
                    <th>SR</th>
                  </tr>
                </thead>
                <tbody>
                {scoreCard?.[1]?.batsmen?.map((item)=>(  
                    <tr>
                    <td>{item?.name}</td>
                    <td className='fadedTxt'>{item?.how_out}</td>
                    <td>{item?.runs}</td>
                    <td>{item?.balls_faced}</td>
                    <td>{item?.fours}</td>
                    <td>{item?.sixes}</td>
                    <td>{item?.strike_rate}</td>
                  </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="table-responsive">
              <table className='table commonTable mb-0'>
                <thead>
                  <tr>
                  <th>Bowler</th>
                  <th>Ov</th>
                  <th>M</th>
                  <th>R</th>
                  <th>W</th>
                  <th>Eco</th>
                  </tr>
                </thead>
                <tbody>
                  {scoreCard?.[1]?.bowlers?.map((item)=>(  
                    <tr>
                     <td>{item?.name}</td>
                    <td>{item?.overs}</td>
                    <td>{item?.maidens}</td>
                    <td>{item?.runs_conceded}</td>
                    <td>{item?.wickets}</td>
                    <td>{item?.econ}</td>
                  </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        : null
        }
        </>
      </Accordion>
    </>
  )
}

export default ScoreCard