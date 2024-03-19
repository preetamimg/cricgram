import NoDataFound from 'components/noData';
import OverCard from 'components/overCard';
import React from 'react';

const Overs = ({ matchData }) => {
  const overs = [1,1,1,1];
  
  return (matchData.status_str !=="Scheduled" ?(
    <>
      <div className="commentaryTabs mb-3">
        <div className="commentaryTab active">
          <div className="d-flex justify-content-between">
            <div className="">
              <div className='value'>MUM 1 <sup>st</sup></div>
              <div className='name'>Innings</div>
            </div>
            <div>
              <img className='image' src={`https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fteam%2FthumbUrl%2Fnorthern-1-43_a162.png&w=40&q=75`} alt="" />
            </div>
          </div>
        </div>
        <div className="commentaryTab">
          <div className="d-flex justify-content-between">
            <div className="">
              <div className='value'>VID 1 <sup>st</sup></div>
              <div className='name'>Innings</div>
            </div>
            <div>
              <img className='image' src={`https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fteam%2FthumbUrl%2Fnorthern-1-42_85a2.png&w=40&q=75`} alt="" />
            </div>
          </div>
        </div>
        <div className="commentaryTab">
          <div className="d-flex justify-content-between">
            <div className="">
              <div className='value'>MUM 2 <sup>nd</sup></div>
              <div className='name'>Innings</div>
            </div>
            <div>
              <img className='image' src={`https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fteam%2FthumbUrl%2Fnorthern-1-43_a162.png&w=40&q=75`} alt="" />
            </div>
          </div>
        </div>
        <div className="commentaryTab">
          <div className="d-flex justify-content-between">
            <div className="">
              <div className='value'>VID 2 <sup>nd</sup></div>
              <div className='name'>Innings</div>
            </div>
            <div>
              <img className='image' src={`https://www.crictracker.com/_next/image/?url=https%3A%2F%2Fmedia.crictracker.com%2Fteam%2FthumbUrl%2Fnorthern-1-42_85a2.png&w=40&q=75`} alt="" />
            </div>
          </div>
        </div>
      </div>
      {
        overs?.map((item)=> (
          <OverCard/>
        ))
      }
    </>):<NoDataFound />
  )
};

export default Overs;