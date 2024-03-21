import TopRankerCard from 'components/topRankerCard';
import TopRankerCardLoader from 'components/topRankerCard/Loader';
import axios from 'axios';
import { BASE_URL } from 'constants';
import { API_ENDPOINT, TOKEN } from '../../constants';
import Dropdown from 'react-bootstrap/Dropdown';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Home = () => {
  const data = [1,1,1,1,1]
  // const [country,setCountry] = useState([]);
  // const [isoCode,setIsoCode]=useState('');
  const {cid} = useParams();
  const [player,setPlayer]=useState([]);

  const PlayersAPI=(code)=>{
    // setIsoCode(code)
    axios.get(`${BASE_URL}${API_ENDPOINT.COMPETITIONS}/${cid}/stats/batting_most_runs?token=${TOKEN}`,)
    .then((res)=>{
      console.log(res?.data?.response)
      setPlayer(res?.data?.response?.stats)
    })
    .catch((err)=>console.log(err))
  }

  // const handleCountryApi=()=>{
    
  //   axios.get(`https://apihut.in/api/country/phone-codes`)
  //   .then((res)=>{
  //     console.log('<<<<<<<<555555',res?.data?.data)
  //     setCountry(res?.data?.data)
  //   })
  //   .catch((err)=>console.log(err))
  // }
  

  useEffect(()=>{
    PlayersAPI()
    // handleCountryApi()
  },[])

  console.log('Player',player)
  return (
    <>
      <div className="row g-3">
      {/* <div className="col-12 customDropdown lightMode">
            <Dropdown>
              <Dropdown.Toggle id="team">
                <div className="innerTxt">
                  {isoCode ? isoCode : 'Select Squad'}
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                  {
                    country?.map((item,index)=> (
                      <Dropdown.Item as="button"
                        onClick={()=>{
                          PlayersAPI(item?.code) 
                          }} className={`dropdownItem ${isoCode?.trim()?.toLowerCase() === item?.code?.trim()?.toLowerCase() ? 'active' : ''}`}>
                        {item?.code}
                      </Dropdown.Item>
                    ))
                  }
              </Dropdown.Menu>
            </Dropdown>
          </div> */}
       {player ?    
        (
          player?.map((item)=> (
            <div className="col-6 col-lg-4 col-xl-3">
              <TopRankerCard
              key={item?.pid}
              batting_style={item?.batting_style}
              run={item?.runs}
              name={item?.player?.first_name}
              team={item?.team?.abbr}
              />
            </div>
          ))
  )
        :
        (
          data?.map((item)=> (
            <div className="col-6 col-lg-4 col-xl-3">
              <TopRankerCardLoader/>
            </div>
          ))
  )
      }
      
      </div>
    </>
  )
}

export default Home