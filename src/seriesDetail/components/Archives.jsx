import React from 'react'

const Archives = () => {
  const data = [1,1,1,1]
  
  return (
    <>
      <div className="row g-2">
        {
          data?.map((item)=> (
            <div className="col-12">
              <div className="archiveCard">
                <div className="row align-items-center">
                  <div className="col-md title">West Indies Test Championship - 2023</div>
                  <div className="col-md-auto date">Jan 31 - Apr 4</div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Archives