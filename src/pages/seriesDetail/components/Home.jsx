import TopRankerCard from 'components/topRankerCard'
import React from 'react'


const Home = () => {
  const data = [1,1,1,1,1,1,1,1]
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
      </div>
    </>
  )
}

export default Home