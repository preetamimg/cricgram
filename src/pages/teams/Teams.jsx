import React from 'react'
import playerPoster from 'assets/img/playerPlaceholder.webp'
import batsmanIcon from 'assets/img/batsman.svg'

const players = [1,1,1,1,1,1,1,1,1,1,1];


const Teams = () => {
  return (
    <>
      <div className="commonHeading mt-3">PLAYING XI</div>
      <div className="fallOfWickets my-2">
        <div className="row mx-0 playerCardWrapper">
          <div className="col-6 ps-0 pe-md-4">
            <div className="title">Mumbai</div>
            <ul className="list-unstyled m-0 p-0">
              {
                players?.map((item)=> (
                  <li className='playerCard'>
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
                ))
              }
            </ul>
          </div>
          <div className="col-6 pe-0 ps-md-4">
            <div className="title text-end">Vidarbha</div>
            <ul className="list-unstyled m-0 p-0">
            {
                players?.map((item)=> (
                  <li className='playerCard reverse'>
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
                ))
              }
            </ul>
          </div>
          <div className="col-12 px-0">
              <div className="reserveTxt">Reserve</div>
          </div>
          <div className="col-6 ps-0 pe-md-4">
            <ul className="list-unstyled m-0 p-0">
              {
                players?.map((item)=> (
                  <li className='playerCard'>
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
                ))
              }
            </ul>
          </div>
          <div className="col-6 pe-0 ps-md-4">
            <ul className="list-unstyled m-0 p-0">
            {
                players?.map((item)=> (
                  <li className='playerCard reverse'>
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
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Teams