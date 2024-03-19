import React from "react";
import Accordion from "react-bootstrap/Accordion";
import helmetIcon from "assets/img/helmet.svg";
import playerPoster from "assets/img/playerPlaceholder.webp";
import batsmanIcon from "assets/img/batsman.svg";
import bowlerIcon from "assets/img/bowler.svg";
import allrounderIcon from "assets/img/allRounder.svg";
import NoDataFound from "components/noData";

const players = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const ScoreCard = ({ matchData }) => {
  return ( matchData.status_str!=="Scheduled" ?
    (<>
      <Accordion className="commonAccordian" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div className="d-flex align-items-center justify-content-between w-100 pe-2">
              <div>
                Vidarbha 2 <sup>nd</sup> Inning
              </div>
              <div>260/5 (95.1)</div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive">
              <table className="table commonTable mb-0">
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
                    <td colSpan={7} className="tableLoader"></td>
                  </tr>
                  <tr>
                    <td className="text-nowrap">Atharva Taide</td>
                    <td className="fadedTxt text-nowrap">lbw b SZ Mulani</td>
                    <td>32</td>
                    <td>64</td>
                    <td>4</td>
                    <td>0</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap">Atharva Taide</td>
                    <td className="fadedTxt text-nowrap">lbw b SZ Mulani</td>
                    <td>32</td>
                    <td>64</td>
                    <td>4</td>
                    <td>0</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap">Atharva Taide</td>
                    <td className="fadedTxt text-nowrap">lbw b SZ Mulani</td>
                    <td>32</td>
                    <td>64</td>
                    <td>4</td>
                    <td>0</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap">Atharva Taide</td>
                    <td className="fadedTxt text-nowrap">lbw b SZ Mulani</td>
                    <td>32</td>
                    <td>64</td>
                    <td>4</td>
                    <td>0</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap">
                      <div className="d-flex align-items-center captain">
                        <img src={helmetIcon} alt="" />
                        Akshay Wadkar (c & wk)
                      </div>
                    </td>
                    <td className="fadedTxt text-nowrap">lbw b SZ Mulani</td>
                    <td>32</td>
                    <td>64</td>
                    <td>4</td>
                    <td>0</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td colSpan={7} className="extraTd">
                      <span>YET TO BAT:</span> Aditya Thakare, Aditya Sarwate,
                      Yash Thakur, Umesh Yadav
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={7} className="extraTd">
                      <span>EXTRA:</span> ( B - 1, W - 0, NO - 0, LB - 10, P - 0
                      )
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className="extraTd" colSpan={2}>
                      <span>TOTAL</span> ( 2.66 RUNS PER OVER )
                    </td>
                    <td colSpan={5}>333 (5 Wkts, 125 Ov)</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="fallOfWickets my-2">
              <div className="title">FALL OF WICKETS</div>
              <div className="value">
                <span>8-1</span> (
                <span className="activeSpan">Peculiar Agboya</span>, 1.1),{" "}
                <span>8-2</span> (
                <span className="activeSpan">Peculiar Agboya</span>, 1.4),{" "}
                <span>8-3</span> (Favour Eseigbe, 2.6)
              </div>
            </div>

            <div className="table-responsive mt-1">
              <table className="table commonTable mb-0">
                <thead>
                  <tr>
                    <th>Bowler</th>
                    <th>Ov</th>
                    <th>M</th>
                    <th>R</th>
                    <th>W</th>
                    <th>NB</th>
                    <th>WD</th>
                    <th>Eco</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap">Shams Mulani</td>
                    <td>35</td>
                    <td>9</td>
                    <td>75</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2.14</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap">Shams Mulani</td>
                    <td>35</td>
                    <td>9</td>
                    <td>75</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2.14</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap">Shams Mulani</td>
                    <td>35</td>
                    <td>9</td>
                    <td>75</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2.14</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap">Shams Mulani</td>
                    <td>35</td>
                    <td>9</td>
                    <td>75</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2.14</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <div className="d-flex align-items-center justify-content-between w-100 pe-2">
              <div>
                Vidarbha 1 <sup>st</sup> Inning
              </div>
              <div>260/5 (95.1)</div>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className="table-responsive">
              <table className="table commonTable mb-0">
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
                    <td className="text-nowrap">Atharva Taide</td>
                    <td className="fadedTxt text-nowrap">lbw b SZ Mulani</td>
                    <td>32</td>
                    <td>64</td>
                    <td>4</td>
                    <td>0</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap">Atharva Taide</td>
                    <td className="fadedTxt text-nowrap">lbw b SZ Mulani</td>
                    <td>32</td>
                    <td>64</td>
                    <td>4</td>
                    <td>0</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap">Atharva Taide</td>
                    <td className="fadedTxt text-nowrap">lbw b SZ Mulani</td>
                    <td>32</td>
                    <td>64</td>
                    <td>4</td>
                    <td>0</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap">Atharva Taide</td>
                    <td className="fadedTxt text-nowrap">lbw b SZ Mulani</td>
                    <td>32</td>
                    <td>64</td>
                    <td>4</td>
                    <td>0</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap">
                      <div className="d-flex align-items-center captain">
                        <img src={helmetIcon} alt="" />
                        Akshay Wadkar (c & wk)
                      </div>
                    </td>
                    <td className="fadedTxt text-nowrap">lbw b SZ Mulani</td>
                    <td>32</td>
                    <td>64</td>
                    <td>4</td>
                    <td>0</td>
                    <td>50.00</td>
                  </tr>
                  <tr>
                    <td colSpan={7} className="extraTd">
                      <span>YET TO BAT:</span> Aditya Thakare, Aditya Sarwate,
                      Yash Thakur, Umesh Yadav
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={7} className="extraTd">
                      <span>EXTRA:</span> ( B - 1, W - 0, NO - 0, LB - 10, P - 0
                      )
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className="extraTd" colSpan={2}>
                      <span>TOTAL</span> ( 2.66 RUNS PER OVER )
                    </td>
                    <td colSpan={5}>333 (5 Wkts, 125 Ov)</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="fallOfWickets my-2">
              <div className="title">FALL OF WICKETS</div>
              <div className="value">
                <span>8-1</span> (
                <span className="activeSpan">Peculiar Agboya</span>, 1.1),{" "}
                <span>8-2</span> (
                <span className="activeSpan">Peculiar Agboya</span>, 1.4),{" "}
                <span>8-3</span> (Favour Eseigbe, 2.6)
              </div>
            </div>

            <div className="table-responsive mt-1">
              <table className="table commonTable mb-0">
                <thead>
                  <tr>
                    <th>Bowler</th>
                    <th>Ov</th>
                    <th>M</th>
                    <th>R</th>
                    <th>W</th>
                    <th>NB</th>
                    <th>WD</th>
                    <th>Eco</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap">Shams Mulani</td>
                    <td>35</td>
                    <td>9</td>
                    <td>75</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2.14</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap">Shams Mulani</td>
                    <td>35</td>
                    <td>9</td>
                    <td>75</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2.14</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap">Shams Mulani</td>
                    <td>35</td>
                    <td>9</td>
                    <td>75</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2.14</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap">Shams Mulani</td>
                    <td>35</td>
                    <td>9</td>
                    <td>75</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>2.14</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* info section */}
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
      <div className="fallOfWickets fallOfWic py-0 mt-3">
        {" "}
        {/* add loading class here */}
        <div className="row keyValueDiv">
          <div className="col-7 col-sm-4 value">WEATHER REPORT</div>
          <div className="col-5 col-sm-8 key value">
            {" "}
            <span>Clear Sky</span>
          </div>
        </div>
        <div className="row keyValueDiv">
          <div className="col-7 col-sm-4 value">PITCH CONDITION</div>
          <div className="col-5 col-sm-8 key value">
            {" "}
            <span>Balanced</span>
          </div>
        </div>
        <div className="row keyValueDiv">
          <div className="col-7 col-sm-4 value">AVG 1ST INNING SCORE</div>
          <div className="col-5 col-sm-8 key value">
            {" "}
            <span>292</span>
          </div>
        </div>
        <div className="row keyValueDiv">
          <div className="col-7 col-sm-4 value">WIN PREDICTION</div>
          <div className="col-5 col-sm-8 key value">
            {" "}
            <span>Mumbai</span>
          </div>
        </div>
      </div>

      {/* match preview */}
      <div className="commonHeading mt-3">PREVIEW</div>
      <div className="matchDetailCard">
        {" "}
        {/* add loading class here */}
        <div className="previewTxt">
          Mumbai will take on Vidarbha in the Final of the Ranji Trophy. This
          match will be played at the iconic Wankhede Stadium in Mumbai.
          Vidarbha secured qualification to the final with a 62-run victory over
          Madhya Pradesh in the semi-final. On the other hand, Mumbai qualified
          for the final by picking up a victory over Tamil Nadu, winning the
          semi-final matchup by an innings and 70 runs, courtesy of an all-round
          performance by Shardul Thakur. Vidarbha will look to secure its third
          Ranji Trophy title while Mumbai has a chance of winning a record 42nd
          title.
        </div>
      </div>

      {/* playing 11 */}
      <div className="commonHeading mt-3">PLAYING XI</div>
      <div className="fallOfWickets my-2">
        <div className="row mx-0 playerCardWrapper">
          <div className="col-6 ps-0 pe-md-4">
            <div className="title">Mumbai</div>
            <ul className="list-unstyled m-0 p-0">
              {players?.map((item) => (
                <li className="playerCard">
                  <div className="playerImg">
                    <img src={playerPoster} alt="" />
                  </div>
                  <div className="playerDes">
                    <div className="playerName">Prithvi Shaw</div>
                    <div className="playerIcon">
                      <img src={batsmanIcon} alt="" />
                      {/* <div className="captian">C</div> */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 pe-0 ps-md-4">
            <div className="title text-end">Vidarbha</div>
            <ul className="list-unstyled m-0 p-0">
              {players?.map((item) => (
                <li className="playerCard reverse">
                  <div className="playerImg">
                    <img src={playerPoster} alt="" />
                  </div>
                  <div className="playerDes">
                    <div className="playerName">Prithvi Shaw</div>
                    <div className="playerIcon">
                      <img src={batsmanIcon} alt="" />
                      {/* <div className="captian">C</div> */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 px-0">
            <div className="reserveTxt">Reserve</div>
          </div>
          <div className="col-6 ps-0 pe-md-4">
            <ul className="list-unstyled m-0 p-0">
              {players?.map((item) => (
                <li className="playerCard">
                  <div className="playerImg">
                    <img src={playerPoster} alt="" />
                  </div>
                  <div className="playerDes">
                    <div className="playerName">Prithvi Shaw</div>
                    <div className="playerIcon">
                      <img src={batsmanIcon} alt="" />
                      {/* <div className="captian">C</div> */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 pe-0 ps-md-4">
            <ul className="list-unstyled m-0 p-0">
              {players?.map((item) => (
                <li className="playerCard reverse">
                  <div className="playerImg">
                    <img src={playerPoster} alt="" />
                  </div>
                  <div className="playerDes">
                    <div className="playerName">Prithvi Shaw</div>
                    <div className="playerIcon">
                      <img src={batsmanIcon} alt="" />
                      {/* <div className="captian">C</div> */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>):<NoDataFound />
  );
};

export default ScoreCard;