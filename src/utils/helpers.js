import moment from "moment";

export const formatDate = (dateString, dateFormat = 'DD MMMM YYYY hh:mm A') => {
     const date = moment(dateString);
    
     const formattedDate = date.format('DD MMMM YYYY, ddd, h:mm A [IST]');
     
     return formattedDate;
  };