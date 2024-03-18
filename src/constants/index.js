export const BASE_URL = "http://159.89.164.11:3334/api";

export const ROUTE_CONST = {
  HOME_PAGE : '/',
  LIVE_SCORE: '/live-score',
  PLAYER_DETAIL: '/player',
  SERIES_DETAIL: '/series',
}


export const RESPONSIVE_WIDTH = {
  MOBILE_SCREEN: '575px',
  SM_SCREEN: '767px',
  MD_SCREEN: '991px',
  LG_SCREEN: '1199px',
  XL_SCREEN: '1399px',
}


export const API_ROUTES = {
  GET_MATCHES_DATA:"getMatchData",   // /:category/:status  *required params
  GET_SERIES_DATA:"getSeriesData",  //?limit=5
}