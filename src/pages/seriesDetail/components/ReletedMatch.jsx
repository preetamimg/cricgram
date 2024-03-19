import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import MatchCard from 'components/matchCard';
import arrowIcon from 'assets/img/arrow.svg'

const ReletedMatch = () => {
  const data = [
    {
      createdAt: "2024-03-15T05:49:01.865Z",
      domestic: "0",
      fantasy_type: "Cricket",
      final_status: "pending",
      format: "t20i",
      game_state: "0",
      game_state_str: "Default",
      info_center: "",
      is_deleted: false,
      launch_status: "pending",
      live: "",
      match_number: "2",
      name: "Papua New Guinea vs Nepal",
      notify: "",
      odds_available: "false",
      order_status: 0,
      playing11_status: 0,
      pre_squad: "true",
      real_matchkey: "74213",
      seiresName: "Hong Kong T20I Tri-Series",
      series: "65f2f504e8406a0aea30c3c0",
      short_name: "PNG vs NEP",
      squadstatus: "YES",
      start_date: "2024-03-12 06:30:00",
      status: "2",
      status_note: "Nepal won by 85 runs.",
      status_str: "Completed",
      subtitle: "2nd Match",
      team1Id: "65f3e14be8406a0aea3d6795",
      team2Id: "65f3e14be8406a0aea3d678b",
      teamAFullScore: "113/10 (16.1 ov)",
      teamAId: "9119",
      teamAImage: "https://images.entitysport.com/assets/uploads/2023/05/PNG.png",
      teamAScore: "113/10",
      teamBFullScore: "198/6 (20 ov)",
      teamBId: "10814",
      teamBImage: "https://images.entitysport.com/assets/uploads/2023/05/Nepal.png",
      teamBScore: "198/6",
      teamaname: "Papua New Guinea",
      teamashortname: "PNG",
      teambname: "Nepal",
      teambshortname: "NEP",
      toss_decision: "2",
      tosswinner_team: 9119,
      updatedAt: "2024-03-15T05:49:01.865Z",
      verified: "true",
      winningTeamId: "10814",
      _id: "65f3e14be8406a0aea3d67a9"
    },
    {
      createdAt: "2024-03-15T05:49:01.865Z",
      domestic: "0",
      fantasy_type: "Cricket",
      final_status: "pending",
      format: "t20i",
      game_state: "0",
      game_state_str: "Default",
      info_center: "",
      is_deleted: false,
      launch_status: "pending",
      live: "",
      match_number: "2",
      name: "Papua New Guinea vs Nepal",
      notify: "",
      odds_available: "false",
      order_status: 0,
      playing11_status: 0,
      pre_squad: "true",
      real_matchkey: "74213",
      seiresName: "Hong Kong T20I Tri-Series",
      series: "65f2f504e8406a0aea30c3c0",
      short_name: "PNG vs NEP",
      squadstatus: "YES",
      start_date: "2024-03-12 06:30:00",
      status: "2",
      status_note: "Nepal won by 85 runs.",
      status_str: "Completed",
      subtitle: "2nd Match",
      team1Id: "65f3e14be8406a0aea3d6795",
      team2Id: "65f3e14be8406a0aea3d678b",
      teamAFullScore: "113/10 (16.1 ov)",
      teamAId: "9119",
      teamAImage: "https://images.entitysport.com/assets/uploads/2023/05/PNG.png",
      teamAScore: "113/10",
      teamBFullScore: "198/6 (20 ov)",
      teamBId: "10814",
      teamBImage: "https://images.entitysport.com/assets/uploads/2023/05/Nepal.png",
      teamBScore: "198/6",
      teamaname: "Papua New Guinea",
      teamashortname: "PNG",
      teambname: "Nepal",
      teambshortname: "NEP",
      toss_decision: "2",
      tosswinner_team: 9119,
      updatedAt: "2024-03-15T05:49:01.865Z",
      verified: "true",
      winningTeamId: "10814",
      _id: "65f3e14be8406a0aea3d67a9"
    },
    {
      createdAt: "2024-03-15T05:49:01.865Z",
      domestic: "0",
      fantasy_type: "Cricket",
      final_status: "pending",
      format: "t20i",
      game_state: "0",
      game_state_str: "Default",
      info_center: "",
      is_deleted: false,
      launch_status: "pending",
      live: "",
      match_number: "2",
      name: "Papua New Guinea vs Nepal",
      notify: "",
      odds_available: "false",
      order_status: 0,
      playing11_status: 0,
      pre_squad: "true",
      real_matchkey: "74213",
      seiresName: "Hong Kong T20I Tri-Series",
      series: "65f2f504e8406a0aea30c3c0",
      short_name: "PNG vs NEP",
      squadstatus: "YES",
      start_date: "2024-03-12 06:30:00",
      status: "2",
      status_note: "Nepal won by 85 runs.",
      status_str: "Completed",
      subtitle: "2nd Match",
      team1Id: "65f3e14be8406a0aea3d6795",
      team2Id: "65f3e14be8406a0aea3d678b",
      teamAFullScore: "113/10 (16.1 ov)",
      teamAId: "9119",
      teamAImage: "https://images.entitysport.com/assets/uploads/2023/05/PNG.png",
      teamAScore: "113/10",
      teamBFullScore: "198/6 (20 ov)",
      teamBId: "10814",
      teamBImage: "https://images.entitysport.com/assets/uploads/2023/05/Nepal.png",
      teamBScore: "198/6",
      teamaname: "Papua New Guinea",
      teamashortname: "PNG",
      teambname: "Nepal",
      teambshortname: "NEP",
      toss_decision: "2",
      tosswinner_team: 9119,
      updatedAt: "2024-03-15T05:49:01.865Z",
      verified: "true",
      winningTeamId: "10814",
      _id: "65f3e14be8406a0aea3d67a9"
    },
    {
      createdAt: "2024-03-15T05:49:01.865Z",
      domestic: "0",
      fantasy_type: "Cricket",
      final_status: "pending",
      format: "t20i",
      game_state: "0",
      game_state_str: "Default",
      info_center: "",
      is_deleted: false,
      launch_status: "pending",
      live: "",
      match_number: "2",
      name: "Papua New Guinea vs Nepal",
      notify: "",
      odds_available: "false",
      order_status: 0,
      playing11_status: 0,
      pre_squad: "true",
      real_matchkey: "74213",
      seiresName: "Hong Kong T20I Tri-Series",
      series: "65f2f504e8406a0aea30c3c0",
      short_name: "PNG vs NEP",
      squadstatus: "YES",
      start_date: "2024-03-12 06:30:00",
      status: "2",
      status_note: "Nepal won by 85 runs.",
      status_str: "Completed",
      subtitle: "2nd Match",
      team1Id: "65f3e14be8406a0aea3d6795",
      team2Id: "65f3e14be8406a0aea3d678b",
      teamAFullScore: "113/10 (16.1 ov)",
      teamAId: "9119",
      teamAImage: "https://images.entitysport.com/assets/uploads/2023/05/PNG.png",
      teamAScore: "113/10",
      teamBFullScore: "198/6 (20 ov)",
      teamBId: "10814",
      teamBImage: "https://images.entitysport.com/assets/uploads/2023/05/Nepal.png",
      teamBScore: "198/6",
      teamaname: "Papua New Guinea",
      teamashortname: "PNG",
      teambname: "Nepal",
      teambshortname: "NEP",
      toss_decision: "2",
      tosswinner_team: 9119,
      updatedAt: "2024-03-15T05:49:01.865Z",
      verified: "true",
      winningTeamId: "10814",
      _id: "65f3e14be8406a0aea3d67a9"
    },
    {
      createdAt: "2024-03-15T05:49:01.865Z",
      domestic: "0",
      fantasy_type: "Cricket",
      final_status: "pending",
      format: "t20i",
      game_state: "0",
      game_state_str: "Default",
      info_center: "",
      is_deleted: false,
      launch_status: "pending",
      live: "",
      match_number: "2",
      name: "Papua New Guinea vs Nepal",
      notify: "",
      odds_available: "false",
      order_status: 0,
      playing11_status: 0,
      pre_squad: "true",
      real_matchkey: "74213",
      seiresName: "Hong Kong T20I Tri-Series",
      series: "65f2f504e8406a0aea30c3c0",
      short_name: "PNG vs NEP",
      squadstatus: "YES",
      start_date: "2024-03-12 06:30:00",
      status: "2",
      status_note: "Nepal won by 85 runs.",
      status_str: "Completed",
      subtitle: "2nd Match",
      team1Id: "65f3e14be8406a0aea3d6795",
      team2Id: "65f3e14be8406a0aea3d678b",
      teamAFullScore: "113/10 (16.1 ov)",
      teamAId: "9119",
      teamAImage: "https://images.entitysport.com/assets/uploads/2023/05/PNG.png",
      teamAScore: "113/10",
      teamBFullScore: "198/6 (20 ov)",
      teamBId: "10814",
      teamBImage: "https://images.entitysport.com/assets/uploads/2023/05/Nepal.png",
      teamBScore: "198/6",
      teamaname: "Papua New Guinea",
      teamashortname: "PNG",
      teambname: "Nepal",
      teambshortname: "NEP",
      toss_decision: "2",
      tosswinner_team: 9119,
      updatedAt: "2024-03-15T05:49:01.865Z",
      verified: "true",
      winningTeamId: "10814",
      _id: "65f3e14be8406a0aea3d67a9"
    },
  ];
  return (
    <>
      <div className="container-fluid relatedMatchesSlider">
        <div className="container px-0 position-relative">
          <Swiper 
            navigation={{
              nextEl: ".relatedNext",
              prevEl: ".relatedPrev",
            }}
            // loop={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Navigation, Pagination]} 
            spaceBetween={15}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              576: {
                slidesPerView: 1.5
              },
              768: {
                slidesPerView: 2
              },
              992: {
                slidesPerView: 3
              },
              1200: {
                slidesPerView: 4
              },
            }}
            >
            {
              data?.map((item)=> (
                <SwiperSlide>
                  <MatchCard data={item}/>
                </SwiperSlide>
              ))
            }
          </Swiper>
          <div className="relatedNav relatedPrev">
            <img src={arrowIcon} alt="" />
          </div>
          <div className="relatedNav relatedNext">
            <img src={arrowIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ReletedMatch