import TeamCard from 'components/teamCard';
import TopRankerCardLoader from 'components/topRankerCard/Loader';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BASE_URL } from 'constants';
import { API_ENDPOINT, TOKEN } from '../../constants';

const Teams = () => {
  const [teams,setTeams] = useState([]);
  const {cid} = useParams();

  const TeamsApi = ()=>{
    axios.get(`${BASE_URL}${API_ENDPOINT.COMPETITIONS}/${cid}/${API_ENDPOINT.TEAMS}/?token=${TOKEN}`)
    .then((res)=>{
      console.log(res)
      setTeams(res?.data?.response)
    })
    .catch((err)=>console.log(err))
  }

  useEffect(()=>{
    TeamsApi()
  },[])
  
  return (
    <>
      <div className="row g-3">
    {teams?.teams?.length > 0 ?
        (
          teams?.teams?.map((item)=> (
            <div className="col-6 col-lg-4 col-xl-3">
              <TeamCard
              key={item.tid}
              title={item?.title}
              logo={item?.logo_url}
              />
            </div>
          ))
        )
        :
        (
          teams?.teams?.map((item)=> (
            <div className="col-6 col-lg-4 col-xl-3">
              <TopRankerCardLoader type={'team'}/>
            </div>
          ))  
        )
          }
      </div>
    </>
  )
}

export default Teams