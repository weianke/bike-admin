
 export default {
   formateDate (time) {
      if(!time)return '';
      let date = new Date(time);
      let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
      let getSeconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + minutes + ':' + getSeconds;
   },
   pagination(data, callback){
      return {
          onChange:(current) => {
              callback(current);
          },
          current: data.result.page,
          pageSize: data.result.page_size,
          total: data.result.total_count,
          showTotal: () => {
            return `共${data.result.total_count}条`
          },
          showQuickJumper: true
      }
   }
 }