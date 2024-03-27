import React from 'react';



const StatsTable = ({ isLoading }) => {
  const data = [1,1,1,1,1,1,1,1,1];

  return (
    <>
      <div className="table-responsive">
        <table className='table commonTable mb-0'>
          <thead>
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
          </thead>
          <tbody>
            {!isLoading ? 
              data?.map((item, index)=> (
                <tr>
                  <td>{index + 1}</td>
                  <td className='text-nowrap'>
                    <div className='linkTxt'>Ricky Bhui</div>
                  </td>
                  <td>AND</td>
                  <td className='activeTd'>970</td>
                  <td>8</td>
                  <td>1748</td>
                  <td>64.67</td>
                  <td>175</td>
                  <td>55.49</td>
                  <td>106</td>
                  <td>16</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
              )): null
            }
            {isLoading ?<> 
            <tr>
              <td colSpan={13} className='tableLoader'></td>
            </tr>
            <tr>
              <td colSpan={13} className='tableLoader'></td>
            </tr>
            <tr>
              <td colSpan={13} className='tableLoader'></td>
            </tr>
            <tr>
              <td colSpan={13} className='tableLoader'></td>
            </tr>
            <tr>
              <td colSpan={13} className='tableLoader'></td>
            </tr> 
            </>: null}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default StatsTable