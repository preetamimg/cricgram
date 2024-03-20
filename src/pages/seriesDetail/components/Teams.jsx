import React, { useEffect, useState } from 'react';
import TeamCard from 'components/teamCard';
import TopRankerCardLoader from 'components/topRankerCard/Loader';
import { API_ROUTES } from '../../../constants';
import { getAPI } from 'utils/services';

const Teams = ({ id,tab,seriesName }) => {
  const [data,setData] = useState([]);
  const [ isLoading,setIsLoading ] = useState(false);

  const getSeriesData =async()=>{
    setIsLoading(true);
    try {
      const res = await getAPI(`${API_ROUTES.SERIES_GET_MATCH_DATA}/${id}?type=${tab}`);
      setData(res?.data?.data?.[0]?.teams);
    } catch (error) {
      console.log({ error });
    }finally{
      setIsLoading(false);
    }
  }; 

  useEffect(()=>{
    getSeriesData();
  },[]);//eslint-disable-line

  return (
    <>
      <div className="row g-3">
        {!isLoading ?
          data?.map((item)=> (
            <div className="col-6 col-lg-4 col-xl-3" key={item._id} >
              <TeamCard data={item}  />
            </div>
          ))
        :null}
        {isLoading ?
           <>
            <div className="col-6 col-lg-4 col-xl-3">
              <TopRankerCardLoader type={'team'}/>
            </div>
            <div className="col-6 col-lg-4 col-xl-3">
              <TopRankerCardLoader type={'team'}/>
            </div>
            <div className="col-6 col-lg-4 col-xl-3">
              <TopRankerCardLoader type={'team'}/>
            </div>
            <div className="col-6 col-lg-4 col-xl-3">
              <TopRankerCardLoader type={'team'}/>
            </div>
          </>
        :null}
      </div>
    </>
  )
}

export default Teams;