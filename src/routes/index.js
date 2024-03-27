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
import PageNotFound from 'pages/pageNotFound';
import PrivacyPolicy from 'pages/privacyPolicy';
import AboutUs from 'pages/aboutUs';
import Disclaimer from 'pages/disclaimer';
import ContactUs from 'pages/contactUs';

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
        <Route path={'*'} element={<PageNotFound/>}/>
        <Route path={ROUTE_CONST.PRIVACY_POLICY} element={<AppLayout LayoutComponent={PrivacyPolicy}/>}/>
        <Route path={ROUTE_CONST.ABOUT_US} element={<AppLayout LayoutComponent={AboutUs}/>}/>
        <Route path={ROUTE_CONST.DISCLAIMER} element={<AppLayout LayoutComponent={Disclaimer}/>}/>
        <Route path={ROUTE_CONST.CONTACT_US} element={<AppLayout LayoutComponent={ContactUs}/>}/>

      </Routes>
    </>
  )
};

export default RouteComponent;