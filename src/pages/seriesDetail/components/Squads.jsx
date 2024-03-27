import React, { useEffect, useState } from "react";
import SquadCard from "components/squadCard";
import TopRankerCardLoader from "components/topRankerCard/Loader";
import Dropdown from "react-bootstrap/Dropdown";
import { API_ROUTES } from "../../../constants";
import { getAPI } from "utils/services";
import NoDataFound from "components/noData";

const Squads = ({ id, tab, seriesName }) => {
  const [selectedSquad, setSelectedSquad] = useState({});
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [batsmen, setBatsmen] = useState([]);
  const [bowler, setBowler] = useState([]);
  const [wicketKeeper, setWickerKeeper] = useState([]);
  const [allRounder, setAllRounder] = useState([]);

  const getSeriesData = async () => {
    setIsLoading(true);
    try {
      const res = await getAPI(
        `${API_ROUTES.SERIES_GET_MATCH_DATA}/${id}?type=${tab}`
      );
      setData(res?.data?.data?.[0]);

      setSelectedSquad(res?.data?.data?.[0]?.squads?.[0]);
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    getSeriesData();
  }, [id]);

  useEffect(() => {
    let bat = [];
    let bowl = [];
    let wk = [];
    let all = [];

    if (Object.keys(selectedSquad).length) {
      selectedSquad.players.forEach((item) => {
        if (item.playing_role === "bat") {
          bat = [...bat, item];
        } else if (item.playing_role === "bowl") {
          bowl = [...bowl, item];
        } else if (item.playing_role === "wk") {
          wk = [...wk, item];
        } else if (item.playing_role === "all") {
          all = [...all, item];
        }
      });
      setBatsmen(bat);
      setAllRounder(all);
      setBowler(bowl);
      setWickerKeeper(wk);
    }
  }, [selectedSquad]);

  const handleSelect = (selected) => {
    if (selected?.title === selectedSquad?.title) {
      setSelectedSquad({});
    } else {
      setSelectedSquad(selected);
    }
  };

  return (
    <>
      <div className="row align-items-center mb-3">
        <div className="col">
          <div className="commonHeading mb-0">{data?.seriesname}</div>
        </div>
        <div className="col-md col-6 customDropdown lightMode">
          <Dropdown>
            <Dropdown.Toggle id="team">
              <div className="innerTxt">
                {selectedSquad?.title ? selectedSquad?.title : "Select Squad"}
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {data?.squads?.map((item) => (
                <Dropdown.Item
                  as="button"
                  onClick={() => handleSelect(item)}
                  className={`dropdownItem ${
                    selectedSquad?.title?.trim()?.toLowerCase() ===
                    item?.title?.trim()?.toLowerCase()
                      ? "active"
                      : ""
                  }`}
                  key={item?.team_id}
                >
                  {item?.title}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {isLoading ? (
        <div className="row g-3 mb-4">
          <div className="col-6 col-lg-6 col-xl-4">
            <TopRankerCardLoader type={"squad"} />
          </div>
          <div className="col-6 col-lg-6 col-xl-4">
            <TopRankerCardLoader type={"squad"} />
          </div>
          <div className="col-6 col-lg-6 col-xl-4">
            <TopRankerCardLoader type={"squad"} />
          </div>
        </div>
      ) : null}

      {batsmen.length && !isLoading ? (
        <>
          {" "}
          <div className="commonHeading">Batsmen</div>
          <div className="row g-3 mb-4">
            {batsmen?.map((item) => {
              return (
                <div className="col-6 col-lg-6 col-xl-4" key={item?.pid} >
                  <SquadCard data={item} />
                </div>
              );
            })}
          </div>
        </>
      ) : null}

      {allRounder.length  && !isLoading? (
        <>
          {" "}
          <div className="commonHeading">All rounder</div>
          <div className="row g-3 mb-4">
            {allRounder?.map((item) => (
              <div className="col-6 col-lg-6 col-xl-4" key={item?.pid} >
                <SquadCard data={item} />
              </div>
            ))}
          </div>
        </>
      ) : null}

      {wicketKeeper.length && !isLoading ? (
        <>
          {" "}
          <div className="commonHeading">wicket keeper</div>
          <div className="row g-3 mb-4">
            {wicketKeeper?.map((item) => (
              <div className="col-6 col-lg-6 col-xl-4" key={item?.pid} >
                <SquadCard data={item} />
              </div>
            ))}
          </div>{" "}
        </>
      ) : null}

      {bowler.length && !isLoading ? (
        <>
          {" "}
          <div className="commonHeading">Bowler</div>
          <div className="row g-3 mb-4">
            {bowler?.map((item) => (
              <div className="col-6 col-lg-6 col-xl-4" key={item?.pid} >
                <SquadCard data={item} />
              </div>
            ))}
          </div>{" "}
        </>
      ) : null}

      {!bowler.length &&
      !batsmen.length &&
      !wicketKeeper.length &&
      !allRounder.length && Object.keys(selectedSquad).length ? (
        <NoDataFound />
      ) : null}

      {!bowler.length &&
      !batsmen.length &&
      !wicketKeeper.length &&
      !allRounder.length  && !Object.keys(selectedSquad).length ? (
        <NoDataFound title="Please Select A Squad"  />
      ) : null}
    </>
  );
};

export default Squads;
