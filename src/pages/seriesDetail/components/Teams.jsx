import TeamCard from 'components/teamCard'
import React from 'react'

const Teams = () => {
  const data = [1,1,1,1,1,1,1,1]
  return (
    <>
      <div className="row g-3">
        {
          data?.map((item)=> (
            <div className="col-6 col-lg-4 col-xl-3">
              <TeamCard/>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Teams