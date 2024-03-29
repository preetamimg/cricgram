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
  PRIVACY_POLICY: '/privacy-policy',
  ABOUT_US: '/about-us',
  DISCLAIMER: '/disclaimer',
  CONTACT_US: '/contact-us'
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
  GET_MATCH_FILTER:"getMatchFilter",          //:category/:status
  GET_MATCH_INFO_MATCH:"getMatchInfo/match",    //:real_matchkey   
  GET_MATCH_INFO_LAST_FIVE_OVER:"getMatchInfo/lastFiveOver", //:real_matchkey
  GET_MATCH_INFO_PLAYER:"getMatchInfo/player",       //:real_matchkey
  //  -------------------------------------------------- -------------------series>
  
  SERIES_GET_MATCH_DATA:"series/getmatchData",      // :series_key
  SERIES_MATCHES:"series/matches",                    // :series_key
  SERIES_GET_MATCH_DATA_STAT_TYPE:"series/getmatchData/statTypes",     // :seriesKey
  SERIES_GET_MATCH_DATA_STAT_DATA:"series/getmatchData/statData",  // :seriesKey && :name ( stat type )
  SERIES_GET_MATCH_DATA_PLAYER_INFO:"series/getmatchData/playerInfo",   //:playerId
  SERIES_GET_TOP_RANK_PLAYERS:"series/getTopRankPlayers",     //:seriesKey
  SERIES_GET_MATCH_FILTER:"getMatchFilter",          //:seriesKey
  SERIES_GET_MOST_RUNS_INNINGS:"series/getMostRunsInnings"  //:seriesKey
}