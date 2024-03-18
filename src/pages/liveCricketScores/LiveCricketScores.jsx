import React from 'react';
import CardListComponent from 'components/cardListComponent/CardListComponent';

const LiveCricketScores = ({ isLoading,matchListData,pageCount,currentPage,loadMoreLoading,handleLoadMore }) => {
  return (
    <CardListComponent 
    isLoading={isLoading}
    matchListData={matchListData}
    pageCount={pageCount}
    currentPage={currentPage}
    loadMoreLoading={loadMoreLoading}
    handleLoadMore={handleLoadMore}
    />
  )
};

export default LiveCricketScores;