import React, { useEffect, useState } from 'react';
import TopRankerCard from 'components/topRankerCard';
import TopRankerCardLoader from 'components/topRankerCard/Loader';
import { API_ROUTES } from '../../../constants';
import { getAPI } from 'utils/services';
import NoDataFound from 'components/noData';


const Home = ({ id,tab,seriesName }) => {
  const [data,setData] = useState([]);
  const [ isLoading,setIsLoading ] = useState(false);


  const getSeriesData =async()=>{
    setIsLoading(true);
    try {
      const res = await getAPI(`${API_ROUTES.SERIES_GET_MATCH_DATA}/${id}?type=${tab}`);
      // setData(res.data.data[0]);
    } catch (error) {
      console.log({ error });
    }finally{
      setIsLoading(false);
    }
  }

  useEffect(()=>{
    getSeriesData();
  },[id]);

  return (
    <>
      <div className="row g-3">
        {!isLoading ?
          data?.map((item)=> (
            <div className="col-6 col-lg-4 col-xl-3">
              <TopRankerCard/>
            </div>
          ))
        :null}
        {
          !data.length ? <NoDataFound  /> :null
        }
        {isLoading ?
          <>
            <div className="col-6 col-lg-4 col-xl-3">
              <TopRankerCardLoader/>
            </div>
            <div className="col-6 col-lg-4 col-xl-3">
              <TopRankerCardLoader/>
            </div>
            <div className="col-6 col-lg-4 col-xl-3">
              <TopRankerCardLoader/>
            </div>
            <div className="col-6 col-lg-4 col-xl-3">
              <TopRankerCardLoader/>
            </div>
            <div className="col-6 col-lg-4 col-xl-3">
              <TopRankerCardLoader/>
            </div>
            <div className="col-6 col-lg-4 col-xl-3">
              <TopRankerCardLoader/>
            </div>
          </>
        :null}
      </div>
    </>
  )
}

export default Home