import React from 'react'
import PlayerImage from 'assets/img/playerPlaceholder.webp'

const TopRankerCard = ({
  name,
  run,
  team,
  batting_style,
  bowling_style,
  wickets
}) => {
  return (
    <>
      <div className="topRankerCard">
        <div className="playerImg">
          <img src={PlayerImage} alt="" />
        </div>
        <div className="playerName">{name}({team})</div>
{!wickets ? 
       <>
       <div className="playerCategory">Highest Run Scorer</div>
        <div className="score">{run}</div>
        <div className="scoreName">Runs</div>
        </>
:
<>
        <div className="playerCategory">Most Wicket Taker</div>
        <div className="score">{wickets}</div>
        <div className="scoreName">Wicket</div>
        </>
}
      </div>
    </>
  )
}

export default TopRankerCard