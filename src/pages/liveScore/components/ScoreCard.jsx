import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


const ScoreCard = () => {
  return (
    <>
      <Accordion className='commonAccordian' defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="d-flex align-items-center justify-content-between w-100 pe-2">
              <div>Vidarbha 2 <sup>nd</sup> Inning</div>
              <div>260/5 (95.1)</div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive">
              <table className='table commonTable mb-0'>
                <thead>
                  <tr>
                    <th>Batter</th>
                    <th></th>
                    <th>R</th>
                    <th>B</th>
                    <th>4s</th>
                    <th>6s</th>
                    <th>SR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Atharva Taide</td>
                    <td className='fadedTxt'>lbw b SZ Mulani</td>
                    <td>32</td>
                    <td>64</td>
                    <td>4</td>
                    <td>0</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td>Atharva Taide</td>
                    <td className='fadedTxt'>lbw b SZ Mulani</td>
                    <td>32</td>
                    <td>64</td>
                    <td>4</td>
                    <td>0</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td>Atharva Taide</td>
                    <td className='fadedTxt'>lbw b SZ Mulani</td>
                    <td>32</td>
                    <td>64</td>
                    <td>4</td>
                    <td>0</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td>Atharva Taide</td>
                    <td className='fadedTxt'>lbw b SZ Mulani</td>
                    <td>32</td>
                    <td>64</td>
                    <td>4</td>
                    <td>0</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td>Atharva Taide</td>
                    <td className='fadedTxt'>lbw b SZ Mulani</td>
                    <td>32</td>
                    <td>64</td>
                    <td>4</td>
                    <td>0</td>
                    <td>50.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="d-flex align-items-center justify-content-between w-100 pe-2">
              <div>Vidarbha 1 <sup>st</sup> Inning</div>
              <div>260/5 (95.1)</div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive">
              <table className='table commonTable mb-0'>
                <thead>
                  <tr>
                    <th>Batter</th>
                    <th></th>
                    <th>R</th>
                    <th>B</th>
                    <th>4s</th>
                    <th>6s</th>
                    <th>SR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Atharva Taide</td>
                    <td className='fadedTxt'>lbw b SZ Mulani</td>
                    <td>32</td>
                    <td>64</td>
                    <td>4</td>
                    <td>0</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td>Atharva Taide</td>
                    <td className='fadedTxt'>lbw b SZ Mulani</td>
                    <td>32</td>
                    <td>64</td>
                    <td>4</td>
                    <td>0</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td>Atharva Taide</td>
                    <td className='fadedTxt'>lbw b SZ Mulani</td>
                    <td>32</td>
                    <td>64</td>
                    <td>4</td>
                    <td>0</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td>Atharva Taide</td>
                    <td className='fadedTxt'>lbw b SZ Mulani</td>
                    <td>32</td>
                    <td>64</td>
                    <td>4</td>
                    <td>0</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td>Atharva Taide</td>
                    <td className='fadedTxt'>lbw b SZ Mulani</td>
                    <td>32</td>
                    <td>64</td>
                    <td>4</td>
                    <td>0</td>
                    <td>50.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}

export default ScoreCard