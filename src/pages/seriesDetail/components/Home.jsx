import TopRankerCard from 'components/topRankerCard'
import TopRankerCardLoader from 'components/topRankerCard/Loader'
import React from 'react'


const Home = () => {
  const data = [1,1,1,1]
  
  return (
    <>
      <div className="row g-3">
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