export const BASE_URL = "http://159.89.164.11:3334/api";

export const ROUTE_CONST = {
  HOME_PAGE : '/',
  LIVE_CRICKET_SCORES:"/live-cricket-scores",
  CRICKET_UPCOMING_MATCHES_SCHEDULE:"/cricket-upcoming-matches-schedule",
  CRICKET_MATCH_RESULTS:"/cricket-match-results",
  LIVE_SCORE: '/live-scores',
  LIVE_SCORECARD:"/live-scorecard",
  MATCH_SQUADS:"/match-squads",
  PLAYER_DETAIL: '/player',
  SERIES_DETAIL: '/series',
}


export const API_ROUTES = {
  GET_MATCHES_DATA:"getMatchData",          // /:category/:status  *required params
  GET_SERIES_DATA:"getSeriesData",         //?limit=5
  GET_MATCH_INFO:"getMatchInfo"           //  /:real_matchKey 
}