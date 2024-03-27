import StatsTable from "components/statsTable";
import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { getAPI } from "utils/services";
import { API_ROUTES } from "../../../constants";
import NoDataFound from "components/noData";

const battingStats = [
  {
    id: "bat1",
    name: "Most Runs",
    url: "/",
  },
  {
    id: "bat2",
    name: "Most Fours",
    url: "/",
  },
  {
    id: "bat3",
    name: "Most Sixs",
    url: "/",
  },
  {
    id: "bat4",
    name: "Most Fifties",
    url: "/",
  },
  {
    id: "bat5",
    name: "Most Centuries",
    url: "/",
  },
  {
    id: "bat6",
    name: "Most Fours (Innings)",
    url: "/",
  },
  {
    id: "bat7",
    name: "Most Sixs (Innings)",
    url: "/",
  },
  {
    id: "bat8",
    name: "Highest Individual Score",
    url: "/",
  },
  {
    id: "bat9",
    name: "Highest Strike Rates",
    url: "/",
  },
  {
    id: "bat10",
    name: "Highest Average",
    url: "/",
  },
  {
    id: "bat11",
    name: "Highest Strike Rates (Innings)",
    url: "/",
  },
];


const Stats = ({ id, tab,seriesName }) => {
  const [ statsData,setStatsData ] = useState([]);
  const [statsList, setStatsList] = useState([]);
  const [selectedStat, setSelectedStat] = useState("");
  const [ statLocation,setStatLocation ] = useState(null);
  const [show, setShow] = useState(false);
  const [ isLoading,setIsLoading ] =useState(false);
 
  const getStatsFilter = async () => {
    try {
      const res = await getAPI(
        `${API_ROUTES.SERIES_GET_MATCH_DATA_STAT_TYPE}/${id}`
      );
      setStatsList(res?.data?.data?.stat_types);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getStatsData = async () => {
  setIsLoading(true);
  setShow(true);

    try {
      const res = await getAPI(
        `${API_ROUTES.SERIES_GET_MATCH_DATA_STAT_DATA}/${id}/${selectedStat}`
      );
      console.log({ res111: res });
      // setStatsList(res?.data?.data?.stat_types);
      console.log("API CALL",{selectedStat});
    } catch (error) {
      console.log("error", error);
    }finally{
  setIsLoading(false);
    }
  };

  useEffect(() => {
    getStatsFilter();
  }, [id]);//eslint-disable-line

  useEffect(()=>{
    if(selectedStat){
      getStatsData();
    }
  },[selectedStat,id]);//eslint-disable-line

  const handleClick = (stat,index) => {
    // setShow(true);
    console.log({ stat,index })
    setSelectedStat(stat);
    setStatLocation(index);
  };

  return (
    <>
      {!show ? (
        <>
          <div className="row g-3">
            {statsList.map((statsGroup,index) => {
              return (
                <div className="col-md-4 statsCard">
                  <div className="statsHeading">{statsGroup?.group_title}</div>
                  <div className="statsData">
                    <ul className="listUnstyled m-0 p-0">
                      {Object.keys(statsGroup.types || {})?.map((key) => (
                        <li key={key} onClick={()=>handleClick(key,index)}>
                          <div className="statsLink">{statsGroup?.types?.[key]}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div> 
              );
            })}
            {
              !statsList.length ? <NoDataFound /> :null 
            }
          </div>
        </>
      ) : (
        <>
          <div className="row align-items-center mt-3 mb-2 mb-sm-3">
            <div className="col-sm">
              <div className="commonHeading mb-0">{seriesName} {statsList?.[statLocation]?.types?.[selectedStat]}</div>
            </div>
            <div className="col-md col-sm-6 customDropdown lightMode mt-2 mt-sm-0">
              <Dropdown>
                <Dropdown.Toggle id="venue">
                  <div className="innerTxt">{statsList?.[statLocation]?.types?.[selectedStat]}</div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {battingStats?.map((item) => (
                    <Dropdown.Item
                      as="button"
                      onClick={() => setSelectedStat(item?.name)}
                      className={`dropdownItem ${
                        selectedStat?.trim()?.toLowerCase() ===
                        item?.name?.trim()?.toLowerCase()
                          ? "active"
                          : ""
                      }`}
                      key={item?.id}
                    >
                      {item?.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <StatsTable isLoading={isLoading}  />
        </>
      )}
    </>
  );
};

export default Stats;
