export default {
  data () {
      return {

      }
  },
  components: {     
  },
  filters: {
    withCommas(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");      
    },
    toDateFmt(dt) {
      var date=new Date(dt);
      var year = date.getFullYear();
      var month = (1 + date.getMonth());
      month = month >= 10 ? month : '0' + month;
      var day = date.getDate();
      day = day >= 10 ? day : '0' + day;
      return year + '-' + month + '-' + day;
    },
    toDateTimeFmt(dt) {
      if(!dt){
        return '-';
      }
      var date=new Date(dt);
      var year = date.getFullYear();
      var month = (1 + date.getMonth());
      month = month >= 10 ? month : '0' + month;
      var day = date.getDate();
      day = day >= 10 ? day : '0' + day;
      var hour = date.getHours();
      hour = hour >= 10 ? hour : '0' + hour;
      var min = date.getMinutes();
      min = min >= 10 ? min : '0' + min;
      return year + '-' + month + '-' + day + ' ' + hour + ':' + min;
    }      
  },
  methods: {
    // init () {
    //   console.log('init function22');
    // }    
  },
  mounted() {    
    // this.init();
  },
  created() {    
  }
}