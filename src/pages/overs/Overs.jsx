import NoDataFound from "components/noData";
import OverCard from "components/overCard";
import { API_ROUTES } from "../../constants";
import React, { useEffect, useState } from "react";
import { getAPI } from "utils/services";
import { useRefreshValue } from "context/refresh-value/RefreshContext";

function transformCricketData(data=[]) {
  const transformedData = [];
  let currentOver = null;
  let currentOverRuns = 0;

  for (const item of data) {
    if (item.event === "overend") {
      transformedData.push({
        over: item.over,
        runs: currentOverRuns,
        balls: currentOver,
      });
      currentOver = [];
      currentOverRuns = 0;
    } else {
      if (!currentOver) {
        currentOver = [];
      }
      currentOver.push(item);
      currentOverRuns += parseInt(item.run);
    }
  }

  return transformedData;
}

const Overs = ({ matchData, id }) => {
  const [data, setData] = useState({});
  const [ selectedInning,setSelectedInning ]=useState({});
  const { value,initialLoad } =useRefreshValue();

  // const [matchKey, setMatchKey] = useState("");

  const getOversData = async () => {
    try {
      const res = await getAPI(`${API_ROUTES.GET_MATCH_INFO_OVER}/${id}`);

      // setMatchKey(res?.data?.data?.real_matchkey);

      delete res.data.data.real_matchkey;
      delete res.data.data._id;

      setData(res?.data?.data);
      setSelectedInning(res?.data?.data?.inning1[0]);
    } catch (error) {
      console.log({ error });
    }
  };

  const getOversDataLive = async () => {
    try {
      const res = await getAPI(`${API_ROUTES.GET_MATCH_INFO_OVER}/${id}`);
      // setMatchKey(res?.data?.data?.real_matchkey);
      delete res.data.data.real_matchkey;
      delete res.data.data._id;
      setData(res?.data?.data);
      setSelectedInning(res?.data?.data?.inning1[0]);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getOversData();
  }, [id]); //eslint-disable-line

  useEffect(() => {
    if(!initialLoad){
      getOversDataLive();
    }
    
  }, [value]); //eslint-disable-line
  
  const handleClick = (item) => {
    setSelectedInning(item);
  };

  return matchData.status_str !== "Scheduled" ? (
    <>
      <div className="commentaryTabs mb-3">
      
        {Object.keys(data || {}).map((key) => {
          return (
            data?.[key]?.length && data?.[key]?.[0]!=="Invalid inning." ?(<div className={`commentaryTab ${data?.[key]?.[0]?.inning?.short_name===selectedInning?.inning?.short_name ? "active" :""}`} onClick={() => handleClick(data?.[key]?.[0])}>
              <div className="d-flex justify-content-between">
                <div className="">
                  <div className="value">
                    {data?.[key]?.[0]?.inning?.short_name}
                  </div>
                </div>
              </div>
            </div>):""
          );
        })}

      </div>

      {transformCricketData(selectedInning?.commentaries)?.map((item) => (
        <OverCard data={item} />
      ))}
    </>
  ) : (
    <NoDataFound />
  );
};

export default Overs;