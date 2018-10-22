
 export default {
   formateDate (time) {
      if(!time)return '';
      let date = new Date(time);
      let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
      let getSeconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + minutes + ':' + getSeconds;
   }
 }