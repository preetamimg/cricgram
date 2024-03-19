import React from 'react'
import fourImg from 'assets/img/four.svg'
import sixImg from 'assets/img/six.svg'
import wicketImg from 'assets/img/wicket.svg'

const commentryOverLoading = [
  [
    1,1,1,1,1,1
  ],
  [
    1,1,1,1,1,1
  ]
]

const commentryOvers = [1,1,1];

const Commentary = ({ matchData }) => {
  

  return (matchData.status_str !== "Scheduled" ?(
    <>
      <div className="row g-3 mb-3">
        <div className="xol-xl-7 col-xxl-8">
          <div className="table-responsive">
            <table className='table commonTable'>
              <thead>
                <tr>
                  <th>Batter</th>
                  <th>R</th>
                  <th>B</th>
                  <th>SR</th>
                  <th>4s</th>
                  <th>6s</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Salome Sunday*</td>
                  <td>37</td>
                  <td>48</td>
                  <td>77.08</td>
                  <td>4</td>
                  <td>0</td>
                </tr>
                {/* loading td */}
                <tr>
                  <td colSpan={6} className='tableLoader'></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-responsive">
            <table className='table commonTable mb-0'>
              <thead>
                <tr>
                  <th>Bowler</th>
                  <th>Ov</th>
                  <th>M</th>
                  <th>R</th>
                  <th>W</th>
                  <th>Eco</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Salome Sunday*</td>
                  <td>37</td>
                  <td>48</td>
                  <td>77.08</td>
                  <td>4</td>
                  <td>0</td>
                </tr>
                {/* loading td */}
                <tr>
                  <td colSpan={6} className='tableLoader'></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-xl-5 col-xxl-4">
          <div className="fallOfWickets h-100">{/* loading class here */}
            <div className="title">KEY STATS</div>
            <div className="d-flex justify-content-between keyValueDiv">
              <div className="key value text-nowrap"> <span>Partnership :</span></div>
              <div className="value text-end">10(6)</div>
            </div>
            
            <div className="d-flex justify-content-between keyValueDiv">
              <div className="key value text-nowrap"> <span>Last 5 Overs :</span></div>
              <div className="value text-end">26 Runs, 4 Wickets</div>
            </div>
            
            <div className="d-flex justify-content-between keyValueDiv">
              <div className="key value text-nowrap"> <span>Last Wicket :</span></div>
              <div className="value text-end">Blessing Etim 5(6) - c K Awino b L Anyait</div>
            </div>
            
            <div className="d-flex justify-content-between keyValueDiv">
              <div className="key value text-nowrap"> <span>Toss :</span></div>
              <div className="value text-end">Nigeria Women (fielding)</div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="fallOfWickets">
            <div className="title">FALL OF WICKETS</div>
            <div className="value"><span>8-1</span> (Peculiar Agboya, 1.1), <span>8-2</span> (Sarah Etim, 1.4), <span>8-3</span> (Favour Eseigbe, 2.6)</div>
          </div>
        </div>
      </div>
      <div className="commentaryTabs">
        <div className="commentaryTab all active">All</div>
        <div className="commentaryTab">
          <div className="d-flex justify-content-between">
            <div className="">
              <div className='value'>4</div>
              <div className='name'>Fours</div>
            </div>
            <div>
              <img className='image' src={fourImg} alt="" />
            </div>
          </div>
        </div>
        <div className="commentaryTab">
          <div className="d-flex justify-content-between">
            <div className="">
              <div className='value'>6</div>
              <div className='name'>Sixs</div>
            </div>
            <div>
              <img className='image' src={sixImg} alt="" />
            </div>
          </div>
        </div>
        <div className="commentaryTab">
          <div className="d-flex justify-content-between">
            <div className="">
              <div className='value'>W</div>
              <div className='name'>Wickets</div>
            </div>
            <div>
              <img className='image' src={wicketImg} alt="" />
            </div>
          </div>
        </div>
        <div className="commentaryTab">
          <div className="d-flex justify-content-between">
            <div className="">
              <div className='value'>1 <sup>st</sup></div>
              <div className='name'>Innings</div>
            </div>
            <div>
              <img className='image' src={`https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fteam%2FthumbUrl%2Fnorthern-1-43_a162.png&w=40&q=75`} alt="" />
            </div>
          </div>
        </div>
        <div className="commentaryTab">
          <div className="d-flex justify-content-between">
            <div className="">
              <div className='value'>2 <sup>nd</sup></div>
              <div className='name'>Innings</div>
            </div>
            <div>
              <img className='image' src={`https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fteam%2FthumbUrl%2Fnorthern-1-42_85a2.png&w=40&q=75`} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="commonHeading">2 <sup>nd</sup> innings</div>
        {/* loader */}
        {
          commentryOverLoading?.map((item, index)=> (
            <ul className='list-unstyled m-0 p-0'>
              {
                item?.map((abc)=> (
                  <li className='d-flex align-items-center commentryLine loading'>
                    <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                      <div className="over"></div>
                      <div className="run"></div>
                    </div>
                    <div className="commentryTxt"></div>
                  </li>
                ))
              }
                {/* over description */}
                <li className='d-flex align-items-center commentryOver loading'>
                  <div className="row row-cols-xxl-5 g-3 w-100 justify-content-between mx-0">
                    <div className="col-6 col-xl-auto col-xxl commentryOverCol d-none d-xl-block">
                      <div className="smallTxt text-center"></div>
                      <div className="bigTxt text-center"></div>
                    </div>
                    <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                      <div className="smallTxt text-lg-center"></div>
                      <div className="bigTxt d-flex gap-1 justify-content-lg-center"></div>
                    </div>
                    <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                      <div className="smallTxt text-end text-lg-center"></div>
                      <div className="bigTxt text-end text-lg-center"></div>
                    </div>
                    <div className="col-6 col-xl-auto col-xxl commentryOverCol">
                      <div className="smallTxt text-end text-lg-center"></div>
                      <div className="bigTxt text-end text-lg-center"></div>
                    </div>
                    <div className="col-6 col-xl-auto col-xxl commentryOverCol">
                      <div className="smallTxt text-end text-lg-center"></div>
                      <div className="bigTxt text-end text-lg-center"></div>
                    </div>
                  </div>
                </li>
            </ul>
          ))
        }
        {
          commentryOvers?.map((item)=> (
            <ul key={item} className='list-unstyled m-0 p-0'>
              <li className='d-flex align-items-center commentryLine'>
                <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                  <div className="over">18.5</div>
                  <div className="run">1</div>
                </div>
                <div className="commentryTxt">Ajima Sangma to Maina Narah, Four,</div>
              </li>
              <li className='d-flex align-items-center commentryLine'>
                <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                  <div className="over">18.5</div>
                  <div className="run">1</div>
                </div>
                <div className="commentryTxt">Ajima Sangma to Maina Narah, Four,</div>
              </li>
              <li className='d-flex align-items-center commentryLine'>
                <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                  <div className="over">18.5</div>
                  <div className="run">1</div>
                </div>
                <div className="commentryTxt">Ajima Sangma to Maina Narah, Four,</div>
              </li>
              <li className='d-flex align-items-center commentryLine'>
                <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                  <div className="over">18.5</div>
                  <div className="run">1</div>
                </div>
                <div className="commentryTxt">Ajima Sangma to Maina Narah, Four,</div>
              </li>
              <li className='d-flex align-items-center commentryLine'>
                <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                  <div className="over">18.5</div>
                  <div className="run">1</div>
                </div>
                <div className="commentryTxt">Ajima Sangma to Maina Narah, Four,</div>
              </li>
              <li className='d-flex align-items-center commentryLine'>
                <div className="d-flex flex-column-reverse flex-md-row align-items-center me-2 gap-1 gap-md-2">
                  <div className="over">18.5</div>
                  <div className="run">1</div>
                </div>
                <div className="commentryTxt">Ajima Sangma to Maina Narah, Four,</div>
              </li>
              {/* over description */}
              <li className='d-flex align-items-center commentryOver'>
                <div className="row row-cols-xxl-5 g-3 w-100 justify-content-between mx-0">
                  <div className="col-6 col-xl-auto col-xxl commentryOverCol d-none d-xl-block">
                    <div className="smallTxt text-center">End Of Over</div>
                    <div className="bigTxt text-center">18</div>
                  </div>
                  <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                    <div className="smallTxt text-lg-center">Run Scored: 7</div>
                    <div className="bigTxt d-flex gap-1 justify-content-lg-center">
                      <span>0</span>
                      <span>4</span>
                      <span>2</span>
                      <span>1</span>
                      <span>0</span>
                      <span>0</span>
                    </div>
                  </div>
                  <div className="col-6 col-xl-auto col-xxl commentryOverCol pb-3 pb-xl-0">
                    <div className="smallTxt text-end text-lg-center">Score After 18 Overs</div>
                    <div className="bigTxt text-end text-lg-center">GTW Inning - 116/5</div>
                  </div>
                  <div className="col-6 col-xl-auto col-xxl commentryOverCol">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="smallTxt">Shivani Bishnoi</div>
                      <div className="bigTxt">5(10)</div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="smallTxt">Maina Narah</div>
                      <div className="bigTxt">13(16)</div>
                    </div>
                  </div>
                  <div className="col-6 col-xl-auto col-xxl commentryOverCol">
                    <div className="smallTxt text-end text-lg-center">Urmila Chatterjee</div>
                    <div className="bigTxt text-end text-lg-center">4-0-22-1</div>
                  </div>
                </div>
              </li>
            </ul>
          ))
        }
      </div>
      <div className="mt-3 d-flex justify-content-center">
        <div className="commonBtn" style={{maxWidth: '150px'}}>Load more</div>
      </div>
    </>):( <> 
      <div className="commonHeading mt-3">MATCH INFO</div>
      <div className="fallOfWickets fallOfWic py-0">
        {" "}
        {/* add loading class here */}
        <div className="row keyValueDiv">
          <div className="col-4 value">SERIES</div>
          <div className="col-8 key value">
            {" "}
            <span>Ranji Trophy</span>
          </div>
        </div>
        <div className="row keyValueDiv">
          <div className="col-4 value">DATE & TIME</div>
          <div className="col-8 key value">
            {" "}
            <span>10 Mar 2024, Sun, 9:30 AM IST</span>
          </div>
        </div>
        <div className="row keyValueDiv">
          <div className="col-4 value">TOSS</div>
          <div className="col-8 key value">
            {" "}
            <span>Vidarbha elected to bowl</span>
          </div>
        </div>
        <div className="row keyValueDiv">
          <div className="col-4 value">VENUE</div>
          <div className="col-8 key value">
            {" "}
            <span>Wankhede Stadium, Mumbai</span>
          </div>
        </div>
        <div className="row keyValueDiv">
          <div className="col-4 value">UMPIRES</div>
          <div className="col-8 key value">
            {" "}
            <span>
              Khalidhussen A Saiyed (India), K N Ananthapadmanabhan (India),
              Virender Sharma(India, TV)
            </span>
          </div>
        </div>
        <div className="row keyValueDiv">
          <div className="col-4 value">MATCH REFEREE</div>
          <div className="col-8 key value">
            {" "}
            <span>Manu Nayar (India)</span>
          </div>
        </div>
      </div>
    </>)
  )
}

export default Commentary