export const BASE_URL = "http://159.89.164.11:3334/api";

export const ROUTE_CONST = {
  HOME_PAGE : '/',
  LIVE_CRICKET_SCORES:"/live-cricket-scores",
  CRICKET_UPCOMING_MATCHES_SCHEDULE:"/cricket-upcoming-matches-schedule",
  CRICKET_MATCH_RESULTS:"/cricket-match-results",
  LIVE_SCORE: '/live-scores',
  LIVE_SCORECARD:"/live-scorecard",
  MATCH_SQUADS:"/match-squads",
  OVERS:"/overs",
  // RESULT:"/result",
  PLAYER_DETAIL: '/player',
  CRICKET_SERIES: '/cricket-series',
  PRIVACY_POLICY: '/privacy-policy'
}


export const RESPONSIVE_WIDTH = {
  MOBILE_SCREEN: '575px',
  SM_SCREEN: '767px',
  MD_SCREEN: '991px',
  LG_SCREEN: '1199px',
  XL_SCREEN: '1399px',
}


export const API_ROUTES = {
  GET_MATCHES_DATA:"getMatchData",                     // /:category/:status  *required params
  GET_SERIES_DATA:"getSeriesData",                    //?limit=5
  GET_MATCH_INFO:"getMatchInfo",                     //  /:real_matchKey
  GET_MATCH_INFO_COMMENTARY:"getMatchInfo/Commentary", // /:real_matchKey
  GET_MATCH_INFO_SCORECARD:"getMatchInfo/scoreCard",  //:real_matchKey
  GET_MATCH_INFO_OVER:"getMatchInfo/over",       //:real_matchKey
  
  // -------------------------------------------------- -------------------series>

  SERIES_GET_MATCH_DATA:"series/getmatchData",      // :series_key
  SERIES_MATCHES:"series/matches",                    // :series_key
  SERIES_GET_MATCH_DATA_PLAYER_INFO:"series/getmatchData/playerInfo", //:playerId
  
}