import moment from "moment";

export const formatDate = (dateString, dateFormat = 'DD MMMM YYYY, ddd, h:mm A [IST]') => {
     const date = moment(dateString);
    
     const formattedDate = date.format(dateFormat);
     
     return formattedDate;
  };


  export function formatDobWithAge(dobString) {
    if (!dobString) return null; 
  
    const dob = moment(dobString);
    const today = moment();
  
    const years = today.diff(dob, 'years');
    const days = today.diff(dob, 'days') % 365;
  
    const formattedDob = dob.format('D MMM YYYY');
    const ageString = `${years}y ${days}d`;
  
    return `${formattedDob} (${ageString})`;
  }

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