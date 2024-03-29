import React from "react";

const tableHeaders = {
  batting_most_runs: [
    "No",
    "Player",
    "Team",
    "R",
    "Mat",
    "BF",
    "Avg",
    "H.S",
    "SR",
    "4s",
    "6s",
    "100s",
    "50s",
  ],
  batting_highest_average: [
    "No",
    "Batsmen",
    "Team",
    "Avg",
    "Matches",
    "Inns",
    "R",
    "No",
  ],
  batting_highest_strikerate: [
    "No",
    "Batsmen",
    "Team",
    "SR",
    "Matches",
    "Inns",
    "R",
    "Avg",
  ],
  batting_highest_strikerate_innings: [
    "No",
    "Batsmen",
    "Team",
    "SR",
    "Matches",
    "Inns",
    "R",
    "Avg",
  ],
  batting_most_run4: ["No", "Batsmen", "Team", "4s", "Matches", "Inns", "R"],
  batting_most_run4_innings: [
    "No",
    "Batsmen",
    "Team",
    "4s",
    "Matches",
    "Inns",
    "R",
  ],
  batting_most_run6: ["No", "Batsmen", "Team", "6s", "Matches", "Inns", "R"],
  batting_most_run6_innings: [
    "No",
    "Batsmen",
    "Team",
    "6s",
    "Matches",
    "Inns",
    "R",
  ],
  batting_most_run50: [
    "No",
    "Batsmen",
    "Team",
    "50s",
    "Matches",
    "Inns",
    "R",
    "H.S",
  ],
  batting_most_run100: [
    "No",
    "Batsmen",
    "Team",
    "100s",
    "Matches",
    "Inns",
    "R",
    "H.S",
  ],
  batting_most_runs_innings: [
    "No",
    "Player",
    "Team",
    "R",
    "Mat",
    "BF",
    "Avg",
    "H.S",
    "SR",
    "4s",
    "6s",
    "100s",
    "50s",
  ],
  bowling_best_averages: [
    "No",
    "Bowler",
    "Team",
    "Avg",
    "Matches",
    "Ovs",
    "Wkts",
  ],
  bowling_best_bowling_figures: [
    "No",
    "Bowler",
    "Team",
    "BBI",
    "Ovs",
    "R",
    "Wkts",
    "Maidens",
    "Economy",
  ],
  bowling_best_economy_rates: [
    "No",
    "Bowler",
    "Team",
    "Economy",
    "Matches",
    "Ovs",
    "Inns",
    "Wkts",
    "Avg",
    "SR",
  ],
  bowling_best_economy_rates_innings: [
    "No",
    "Bowler",
    "Team",
    "Economy",
    "Matches",
    "Ovs",
    "Inns",
    "Wkts",
    "Avg",
    "SR",
  ],
  bowling_best_strike_rates: [
    "No",
    "Bowler",
    "Team",
    "SR",
    "Matches",
    "Ovs",
    "Wkts",
  ],
  bowling_best_strike_rates_innings: [
    "No",
    "Bowler",
    "Team",
    "SR",
    "Matches",
    "Ovs",
    "Wkts",
  ],
  bowling_five_wickets: [
    "No",
    "Bowler",
    "Team",
    "5-Fers",
    "Matches",
    "Ovs",
    "R",
    "Wkts",
  ],
  bowling_four_wickets: [
    "No",
    "Bowler",
    "Team",
    "4-Fers",
    "Matches",
    "Ovs",
    "R",
    "Wkts",
  ],
  bowling_maidens: [
    "No",
    "Bowler",
    "Team",
    "Maidens",
    "Matches",
    "Ovs",
    "R",
    "Wkts",
    "5-Fers",
  ],
  bowling_most_runs_conceded_innings: [
    "No",
    "Bowler",
    "Team",
    "RCI",
    "Ovs",
    "Wkts",
    "BBI",
    "Maidens",
    "Economy",
  ],
  bowling_top_wicket_takers: [
    "No",
    "Bowler",
    "Team",
    "Wkts",
    "Mat",
    "Ovs",
    "BBI",
    "Balls",
    "Avg",
    "Ecn",
    "R",
    "4-Fers",
    "5-fers",
  ],
  team_total_run50: ["No", "Team", "50s", "R", "100s", "Wkts"],
  team_total_run100: ["No", "Team", "100s", "R", "50s", "Wkts"],
  team_total_runs: ["No", "Team", "R", "100s", "50s", "Wkts"],
  team_total_wickets: ["No", "Team", "Wkts", "RUNS Cons", "4-Fers", "5-Fers"],
};

const StatsTable = ({ isLoading, selectedStat, data }) => {

  return (
    <>
      <div className="table-responsive">
        <table className="table commonTable mb-0">
          <thead>
            <tr>
              {tableHeaders?.[selectedStat].map((head) => (
                <th>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {!isLoading && selectedStat === "batting_most_runs"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.runs}</td>
                    <td>{item?.matches}</td>
                    <td>{item?.balls}</td>
                    <td>{item?.average}</td>
                    <td>{item?.highest}</td>
                    <td>{item?.strike}</td>
                    <td>{item?.run4}</td>
                    <td>{item?.run6}</td>
                    <td>{item?.run100}</td>
                    <td>{item?.run50}</td>
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "batting_most_runs_innings"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.runs}</td>
                    <td>{item?.matches}</td>
                    <td>{item?.balls}</td>
                    <td>{item?.average}</td>
                    <td>{item?.highest}</td>
                    <td>{item?.strike}</td>
                    <td>{item?.run4}</td>
                    <td>{item?.run6}</td>
                    <td>{item?.run100}</td>
                    <td>{item?.run50}</td>
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "batting_highest_strikerate"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.strike}</td>
                    <td>{item?.matches}</td>
                    <td>{item?.innings}</td>
                    <td>{item?.runs}</td>
                    <td>{item?.average}</td>
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "batting_highest_strikerate_innings"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.strike}</td>
                    <td>{item?.matches}</td>
                    <td>{item?.innings}</td>
                    <td>{item?.runs}</td>
                    <td>{item?.average}</td>
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "batting_highest_average"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.average}</td>
                    <td>{item?.matches}</td>
                    <td>{item?.innings}</td>
                    <td>{item?.runs}</td>
                    <td>{item?.notout}</td>
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "batting_most_run100"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.run100}</td>
                    <td>{item?.matches}</td>
                    <td>{item?.innings}</td>
                    <td>{item?.runs}</td>
                    {/* <td>{item?.balls}</td> */}
                    {/* <td>{item?.average}</td> */}
                    {/* <td>{item?.strike}</td> */}
                    {/* <td>{item?.run4}</td> */}
                    {/* <td>{item?.run6}</td> */}
                    <td>{item?.highest}</td>
                    {/* <td>{item?.run50}</td> */}
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "batting_most_run50"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.run50}</td>
                    <td>{item?.matches}</td>
                    <td>{item?.innings}</td>
                    <td>{item?.runs}</td>
                    <td>{item?.highest}</td>
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "batting_most_run6"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.run6}</td>
                    <td>{item?.matches}</td>
                    <td>{item?.innings}</td>
                    <td>{item?.runs}</td>
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "batting_most_run6_innings"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.run6}</td>
                    <td>{item?.matches}</td>
                    <td>{item?.innings}</td>
                    <td>{item?.runs}</td>
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "batting_most_run4"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.run4}</td>
                    <td>{item?.matches}</td>
                    <td>{item?.innings}</td>
                    <td>{item?.runs}</td>
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "batting_most_run4_innings"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.run4}</td>
                    <td>{item?.matches}</td>
                    <td>{item?.innings}</td>
                    <td>{item?.runs}</td>
                  </tr>
                ))
              : null}

            {/* ------------------------------------------------------------------------Bowler---------------------> */}

            {!isLoading && selectedStat === "bowling_top_wicket_takers"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.wickets}</td>
                    <td>{item?.matches}</td>
                    <td>{item?.overs}</td>
                    <td>{item?.bestinning}</td>
                    <td>{item?.balls}</td>
                    <td>{item?.average}</td>
                    <td>{item?.econ}</td>
                    <td>{item?.runs}</td>
                    <td>{item?.wicket4i}</td>
                    <td>{item?.wicket5i}</td>
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "bowling_best_economy_rates"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.econ}</td>
                    <td>{item?.matches}</td>
                    <td>{item?.overs}</td>
                    <td>{item?.innings}</td>
                    <td>{item?.wickets}</td>
                    <td>{item?.average}</td>
                    <td>{item?.strike}</td>
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "bowling_best_economy_rates_innings"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.econ}</td>
                    <td>{item?.matches}</td>
                    <td>{item?.overs}</td>
                    <td>{item?.innings}</td>
                    <td>{item?.wickets}</td>
                    <td>{item?.average}</td>
                    <td>{item?.strike}</td>
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "bowling_best_bowling_figures"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.bestinning}</td>
                    <td>{item?.overs}</td>
                    <td>{item?.runs}</td>
                    <td>{item?.wickets}</td>
                    <td>{item?.maidens}</td>
                    <td>{item?.econ}</td>
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "bowling_best_strike_rates"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.strike}</td>
                    <td>{item?.matches}</td>
                    <td>{item?.overs}</td>
                    <td>{item?.wickets}</td>
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "bowling_best_strike_rates_innings"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.strike}</td>
                    <td>{item?.matches}</td>
                    <td>{item?.overs}</td>
                    <td>{item?.wickets}</td>
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "bowling_best_averages"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.average}</td>
                    <td>{item?.matches}</td>
                    <td>{item?.overs}</td>
                    <td>{item?.wickets}</td>
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "bowling_most_runs_conceded_innings"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.runs}</td>
                    <td>{item?.overs}</td>
                    <td>{item?.wickets}</td>
                    <td>{item?.bestinning}</td>
                    <td>{item?.maidens}</td>
                    <td>{item?.econ}</td>
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "bowling_most_runs_conceded_innings"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.runs}</td>
                    <td>{item?.overs}</td>
                    <td>{item?.wickets}</td>
                    <td>{item?.bestinning}</td>
                    <td>{item?.maidens}</td>
                    <td>{item?.econ}</td>
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "bowling_four_wickets"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.wicket4i}</td>
                    <td>{item?.matches}</td>
                    <td>{item?.overs}</td>
                    {/* <td>{item?.bestinning}</td> */}
                    <td>{item?.runs}</td>
                    <td>{item?.wickets}</td>
                    {/* <td>{item?.maidens}</td> */}
                    {/* <td>{item?.strike}</td> */}
                    {/* <td>{item?.econ}</td> */}
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "bowling_five_wickets"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.wicket5i}</td>
                    {/* <td className="activeTd" >{item?.strike}</td> */}
                    <td>{item?.matches}</td>
                    <td>{item?.overs}</td>
                    {/* <td>{item?.bestinning}</td> */}
                    <td>{item?.runs}</td>
                    <td>{item?.wickets}</td>
                    {/* <td>{item?.maidens}</td> */}
                    {/* <td>{item?.strike}</td> */}
                    {/* <td>{item?.econ}</td> */}
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "bowling_maidens"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.player?.title}</div>
                    </td>
                    <td>{item?.team?.title}</td>
                    <td className="activeTd">{item?.maidens}</td>
                    {/* <td className="activeTd" >{item?.strike}</td> */}
                    <td>{item?.matches}</td>
                    <td>{item?.overs}</td>
                    {/* <td>{item?.bestinning}</td> */}
                    <td>{item?.runs}</td>
                    <td>{item?.wickets}</td>
                    <td>{item?.wicket5i}</td>
                    {/* <td>{item?.strike}</td> */}
                    {/* <td>{item?.econ}</td> */}
                  </tr>
                ))
              : null}

            {/* ------------------------------------------------------------------------------------------------ Teams */}

            {!isLoading && selectedStat === "team_total_runs"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.team?.title}</div>
                    </td>
                    <td className="activeTd">{item?.runs}</td>
                    <td>{item?.run100}</td>
                    <td>{item?.run50}</td>
                    <td>{item?.wickets}</td>
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "team_total_run100"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.team?.title}</div>
                    </td>
                    <td className="activeTd">{item?.run100}</td>
                    <td>{item?.runs}</td>
                    <td>{item?.run50}</td>
                    <td>{item?.wickets}</td>
                  </tr>
                ))
              : null}

            {!isLoading && selectedStat === "team_total_run50"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.team?.title}</div>
                    </td>
                    <td className="activeTd">{item?.run50}</td>
                    <td>{item?.runs}</td>
                    <td>{item?.run100}</td>
                    <td>{item?.wickets}</td>
                  </tr>
                ))
              : null}
            {!isLoading && selectedStat === "team_total_wickets"
              ? data?.map((item, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td className="text-nowrap">
                      <div className="linkTxt">{item?.team?.title}</div>
                    </td>
                    <td className="activeTd">{item?.wickets}</td>
                    <td>{item?.runsconceded}</td>
                    <td>{item?.wicket4i}</td>
                    <td>{item?.wicket5i}</td>
                  </tr>
                ))
              : null}
              
            {isLoading ? (
              <>
                <tr>
                  <td colSpan={13} className="tableLoader"></td>
                </tr>
                <tr>
                  <td colSpan={13} className="tableLoader"></td>
                </tr>
                <tr>
                  <td colSpan={13} className="tableLoader"></td>
                </tr>
                <tr>
                  <td colSpan={13} className="tableLoader"></td>
                </tr>
                <tr>
                  <td colSpan={13} className="tableLoader"></td>
                </tr>
              </>
            ) : null}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StatsTable;
