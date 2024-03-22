import React, { useEffect, useState } from 'react';
import arrowIcons from 'assets/img/arrow.svg';
import { API_ROUTES } from '../../../constants';
import { getAPI } from 'utils/services';
import { formatDate } from 'utils/helpers';
import NoDataFound from 'components/noData';

const Standings = ({ id,tab,seriesName }) => {
  const [data,setData] = useState({});
  const [ isLoading,setIsLoading ] = useState(false);
  const [activeTableIndex, setActiveTableIndex] = useState(null);

  const handleTableAccordian = (index)=> {
    if(activeTableIndex === index) {
      setActiveTableIndex(null);
    } else {
      setActiveTableIndex(index)
    }
  }


  const getSeriesData =async()=>{
    setIsLoading(true);
    try {
      const res = await getAPI(`${API_ROUTES.SERIES_GET_MATCH_DATA}/${id}?type=${tab}`);
      setData(res?.data?.data[0]);
    } catch (error) {
      console.log({ error });
    }finally{
      setIsLoading(false);
    }
  }; 

  useEffect(()=>{
    getSeriesData();
  },[]);//eslint-disable-line

  return (
    <>
      <div className="commonHeading mb-1">POINTS TABLE</div>
      <div className="commonHeading text-capitalize">{data?.name}</div>
      <div className="table-responsive">
        <table className='table commonTable mb-0'>
          <thead>
            <tr>
              <th>No</th>
              <th>Team</th>
              <th>M</th>
              <th>W</th>
              <th>L</th>
              <th>T</th>
              <th>N/R</th>
              <th>PTS</th>
              <th>Net RR</th>
              <th>Form</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.standingData?.map((item, index)=> {
                const formArray = item?.lastfivematchresult?.split(",");
                const array =[0,1,2,3,4];

                return(
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td className='text-nowrap'>
                      <div className='linkTxt'>{item?.team?.title}</div>
                    </td>
                    <td>{item?.played ? item?.played : "-" }</td>
                    <td>{item?.win ? item?.win : "-"}</td>
                    <td>{item?.loss ? item?.loss :"-" }</td>
                    <td>{item?.draw ?item?.draw :"-"}</td>
                    <td>{item?.nr?item?.nr:"-"}</td>
                    <td>{item?.points ? item?.points :"-"}</td>
                    <td>{item?.netrr ? item?.netrr :"-"}</td>
                    <td>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="overBalls d-flex align-items-center gap-2">
                          {/* use red, green class here */}
                          {array.map((num)=>{
                          if(formArray?.[num]){
                            return <div className={`overBall ${formArray?.[num]==="W" ?"green":"red" } `}>{formArray?.[num]}</div>
                          }else{
                            return <div>-</div>
                          }
                          })}
                        </div>
                        <div  onClick={()=>{
                          // if(item.match.length){
                            handleTableAccordian(index)
                          // }else{
                          //   handleTableAccordian(null);
                          // }
                        }} className={`tableArrowIcon ${activeTableIndex === index ? 'active' : ''}`}>
                          <img src={arrowIcons} alt="" />
                        </div>
                      </div>
                    </td>
                  </tr>
                  {
                    activeTableIndex === index ? 
                      <tr>
                        <td className='px-0 py-1 roundedTd' colSpan={10}>
                          <table className='w-100 innerTable'>
                            <thead>
                              <tr>
                                <th>Opponent</th>
                                <th>Description</th>
                                <th>Date</th>
                              </tr>
                            </thead>
                            <tbody>
                              {item?.match?.length ? item?.match?.map((el)=>(
                               <tr key={el?.teamaid} >
                                <td>
                                  <div>{el?.teamaname}</div>
                                  <div className='linkTxt'>{el?.status_note}</div>
                                </td>
                                <td>{el?.subtitle}</td>
                                <td>{formatDate(el?.date_start,"DD MMMM YYYY")}</td>
                              </tr>
                              )): <NoDataFound />
                            }
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    : ''
                  }

                </>
              )
            })
            }
            {isLoading ?<> <tr>
              <td colSpan={10} className='tableLoader'></td>
            </tr>
            <tr>
              <td colSpan={10} className='tableLoader'></td>
            </tr>
            <tr>
              <td colSpan={10} className='tableLoader'></td>
            </tr>
            <tr>
              <td colSpan={10} className='tableLoader'></td>
            </tr>
            <tr>
              <td colSpan={10} className='tableLoader'></td>
            </tr>
            <tr>
              <td colSpan={10} className='tableLoader'></td>
            </tr>
            </>:null}
          </tbody>
        </table>
      </div>
      {/* <div className="statsDetailTxt mt-3">Last Updated On 15 Mar 2024, 10:40 IST</div> */}
      <div className="statsDetailTxt"><span>M:</span> Matches, <span>W:</span> Won, <span>L:</span> Lost, <span>T:</span> Tie, <span>N/R:</span> No Result, <span>PTS:</span> Points, <span>Net RR:</span> Net run rate, <span>Q:</span> Qualified</div>
    </>
  )
}

export default Standings