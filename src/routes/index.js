import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTE_CONST } from '../constants';
import Home from 'pages/home';
import LiveScorePage from 'pages/liveScore';
import AppLayout from 'layout/AppLayout';
import PlayerDetail from 'pages/playerDetail';
import SeriesDetail from 'pages/seriesDetail';
import LiveCricketScores from 'pages/liveCricketScores/LiveCricketScores';
import HomeLayout from 'layout/homeLayout/HomeLayout';
import CricketUpcomingMatches from 'pages/cricketUpcomingMatches/CricketUpcomingMatches';
import CricketMatchResults from 'pages/cricketMatchResults/CricketMatchResults';
import MatchDetailsLayout from 'layout/matchDetailsLayout/MatchDetailsLayout';
import Commentary from 'pages/commentary/Commentary';
import ScoreCard from 'pages/scoreCard/ScoreCard';
import Overs from 'pages/overs/Overs';
import Teams from 'pages/teams/Teams';

const RouteComponent = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTE_CONST.HOME_PAGE} element={<AppLayout LayoutComponent={Home}/>}/>
        <Route path={ROUTE_CONST.LIVE_CRICKET_SCORES} element={<AppLayout  LayoutComponent={HomeLayout} Content={LiveCricketScores} />}/>
        <Route path={ROUTE_CONST.CRICKET_UPCOMING_MATCHES_SCHEDULE} element={<AppLayout  LayoutComponent={HomeLayout} Content={CricketUpcomingMatches} />}/>
        <Route path={ROUTE_CONST.CRICKET_MATCH_RESULTS} element={<AppLayout  LayoutComponent={HomeLayout} Content={CricketMatchResults} />}/>
        <Route path={`${ROUTE_CONST.LIVE_SCORE}/:id/:matchName`} element={<AppLayout LayoutComponent={MatchDetailsLayout} Content={Commentary} />}/>
        
        <Route path={`${ROUTE_CONST.LIVE_SCORECARD}/:id/:matchName`} element={<AppLayout LayoutComponent={MatchDetailsLayout} Content={ScoreCard} />}/>

        <Route path={`${ROUTE_CONST.MATCH_SQUADS}/:id/:matchName`} element={<AppLayout LayoutComponent={MatchDetailsLayout} Content={Teams} />}/>

        <Route path={`${ROUTE_CONST.OVERS}/:id/:matchName`} element={<AppLayout LayoutComponent={MatchDetailsLayout} Content={Overs} />}/>

        <Route path={ROUTE_CONST.PLAYER_DETAIL} element={<AppLayout LayoutComponent={PlayerDetail}/>}/>

        <Route path={`${ROUTE_CONST.CRICKET_SERIES}/:id/:seriesName`} element={<AppLayout LayoutComponent={SeriesDetail}/>}/>

      </Routes>
    </>
  )
};

export default RouteComponent;