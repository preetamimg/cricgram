import React from 'react';
import MatchCard from '../matchCard';

const CardListComponent = ({ isLoading,matchListData,pageCount,currentPage,loadMoreLoading,handleLoadMore }) => {
  
  return (
    !isLoading ? (
        matchListData.length ? (
          <>
            {" "}
            <div className="row row-cols-1 row-cols-xl-2 g-3">
              {matchListData?.map((item) => (
                <MatchCard data={item} key={item?._id} />
              ))}
            </div>
            {(pageCount === currentPage) || (pageCount === 0) ? null : (
              <div className="mt-3 d-flex justify-content-center">
                {!loadMoreLoading ? <div
                  className="commonBtn"
                  style={{ maxWidth: "150px" }}
                  onClick={handleLoadMore}
                >
                  Load more
                </div>:<div style={{ color: "white" }}>Loading.....</div>}
              </div>
            )}
          </>
        ) : (
          <div style={{ color: "white" }}> No data </div>
        )
      ) : (
        <div style={{ color: "white" }}>Loading.....</div>
      )
  )
};

export default CardListComponent;