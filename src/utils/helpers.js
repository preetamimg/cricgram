import moment from "moment";

export const formatDate = (dateString, dateFormat = 'DD MMMM YYYY hh:mm A') => {
     const date = moment(dateString);
    
     const formattedDate = date.format('DD MMMM YYYY, ddd, h:mm A [IST]');
     
     return formattedDate;
  };


export const shareUrl=async(url,title="CricGram",)=>{
   if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
        console.log('Shared successfully');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      console.log('Web Share API not supported');
    }
}