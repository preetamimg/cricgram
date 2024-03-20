import TopRankerCard from 'components/topRankerCard';
import TopRankerCardLoader from 'components/topRankerCard/Loader';
import axios from 'axios';
import { BASE_URL } from 'constants';
import { API_ENDPOINT, TOKEN } from '../../constants';
import { useEffect, useState } from 'react';


const Home = () => {
  const data = [1,1,1,1,1]
  const [searchPlayer,setSearchPlayer] = useState('');

  const PlayersAPI=(e)=>{
    setSearchPlayer(e?.target?.value);
    axios.get(`${BASE_URL}${API_ENDPOINT.PLAYERS}?token=${TOKEN}`,)
    .then((res)=>console.log(res?.data?.response))
    .catch((err)=>console.log(err))
  }
  

  useEffect(()=>{
    PlayersAPI()
  },[])
  return (
    <>
      <div className="row g-3">
        <div>
          <input value={searchPlayer} onChange={PlayersAPI}/>
        </div>
        {
          data?.map((item)=> (
            <div className="col-6 col-lg-4 col-xl-3">
              <TopRankerCard/>
            </div>
          ))
        }
        {
          data?.map((item)=> (
            <div className="col-6 col-lg-4 col-xl-3">
              <TopRankerCardLoader/>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Home