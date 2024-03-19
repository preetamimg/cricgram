import React from "react";
import MatchCard from "../matchCard";
import NoDataFound from "components/noData";
import MatchLoaderCard from "components/matchCard/MatchLoaderCard";

const CardListComponent = ({
  isLoading,
  matchListData,
  pageCount,
  currentPage,
  loadMoreLoading,
  handleLoadMore,
}) => {
  console.log({ loadMoreLoading });
  return !isLoading ? (
    matchListData.length ? (
      <>
        {" "}
        <div className="row row-cols-1 row-cols-xl-2 g-3">
          {matchListData?.map((item) => (
            <MatchCard data={item} key={item?._id} />
          ))}
        </div>
        {pageCount === currentPage || pageCount === 0 ? null : (
          <div className="mt-3 d-flex justify-content-center">
            {!loadMoreLoading ? (
              <div
                className="commonBtn"
                style={{ maxWidth: "150px" }}
                onClick={handleLoadMore}
              >
                Load more
              </div>
            ) : ""}
          </div>
        )}

        {loadMoreLoading? (
              <div className="row row-cols-1 row-cols-xl-2 g-3">
                <MatchLoaderCard />
                <MatchLoaderCard />
                <MatchLoaderCard />
                <MatchLoaderCard />
              </div>
            ):null }
      </>
    ) : (
      <NoDataFound />
    )
  ) : (
    <div className="row row-cols-1 row-cols-xl-2 g-3">
      <MatchLoaderCard />
      <MatchLoaderCard />
      <MatchLoaderCard />
      <MatchLoaderCard />
    </div>
  );
};

export default CardListComponent;
