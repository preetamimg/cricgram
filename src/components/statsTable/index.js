import React, { useEffect, useState } from 'react';
import { BASE_URL } from 'constants';
import { API_ENDPOINT, TOKEN } from '../../constants';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const StatsTable = ({
  statTypes
}) => {

  const [statsTable,setStatsTable]=useState([]);
  const {cid}= useParams();

  const handleClick = ()=> {
    
    axios.get(`${BASE_URL}${API_ENDPOINT.COMPETITIONS}/${cid}/${API_ENDPOINT.STATS}/${statTypes}?token=${TOKEN}`)
    .then((res)=>{
      console.log(res?.data?.response?.stats)
      setStatsTable(res?.data?.response?.stats)
    })
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    handleClick()
  },[])

console.log('<<statTypes>>',statTypes)  
  console.log('<<<<table>>>>',statsTable)
  return (
    <>
      <div className="table-responsive">
        <table className='table commonTable mb-0'>
          <thead>

            {!statTypes?.includes('team') ?
            (!statTypes?.includes('bowling') ? 
            <tr>
              <th>No</th>
              <th>Player</th>
              <th>Team</th>
              <th>R</th>
              <th>Mat</th>
              <th>BF</th>
              <th>Avg</th>
              <th>H.S</th>
              <th>SR</th>
              <th>4s</th>
              <th>6s</th>
              <th>100s</th>
              <th>50s</th>
            </tr>
            :
            <tr>
            <th>No</th>
            <th>Player</th>
            <th>Team</th>
            <th>W</th>
            <th>Mat</th>
            <th>BF</th>
            <th>Avg</th>
            <th>BI</th>
            <th>Eco.</th>
            <th>4w</th>
            <th>5w</th>
            <th>M</th>
            <th>Hatt..</th>
          </tr>
            )
  :
  <tr>
  <th>No</th>
  <th>Team</th>
  <th>R</th>
  <th>W</th>
  <th>4w</th>
  <th>50s</th>
  <th>100s</th>
</tr>
}
          </thead>
          <tbody>
            {!statTypes.includes('team') ? 
            (statsTable ? 
           (statsTable?.map((item,index)=>( 
                <tr>
                  <td>{index + 1}</td>
                  <td className='text-nowrap'>
                    <div className='linkTxt'>{item?.player?.first_name}</div>
                  </td>
                  <td> {item?.team?.title}</td>
               {!item.wickets ?   <td className='activeTd'>{item?.runs}</td> : <td>{item?.wickets}</td>}
                  <td>{item?.matches}</td>
                  <td>{item?.balls}</td>
                  <td>{item?.average}</td>
                 {item?.highest ?  <td>{item?.highest}</td> :  <td>{item?.bestinning}</td>}
                 {!item?.econ ? <td>{item?.strike}</td> : <td>{item?.econ}</td>}
                {item?.run4  ? <td>{item?.run4}</td> : <td>{item?.wicket4i }</td>}
                {item?.run6 ?  <td>{item?.run6}</td> : <td>{item?.wicket5i}</td> }
                {item?.run100 ?  <td>{item?.run100} </td>: <td>{item?.maidens}</td> }
                {item?.run50 ?  <td>{item?.run50}</td> : <td>{item?.hattrick}</td>}
                </tr>
              )))
              :
            <tr>
              <td colSpan={13} className='tableLoader'></td>
            </tr>
            )

      :
    (statsTable?.map((item,index)=>( 
      <tr>
        <td>{index + 1}</td>
        <td> {item?.team?.title}</td>
      <td className='activeTd'>{item?.runs}</td>
     <td>{item?.wickets}</td> 
      <td>{item?.wicket4i}</td>
      <td>{item?.run50}</td>
     <td>{item?.run100} </td>
      </tr>
    )))
    }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default StatsTable