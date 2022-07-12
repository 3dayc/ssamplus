//외부 플러그인 시작
import Vue from 'vue';
// Include 파일
import PcSnb from '@/views/include/PcSnb.vue';
import MobileSnb from '@/views/include/MobileSnb.vue';
import MobileGnb from '@/views/include/MobileGnb.vue';
//import MobileHeader from '@/views/include/MobileHeader.vue';
import Paginate from '@/views/include/Paginate.vue';
//tostPop //npm install vue-toast-notification
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);
//레이어 팝업
import Popup from '@/views/include/Popup.vue';
//얼럿 팝업
import Alert from '@/views/include/Alert.vue';
//이미지 레이어 팝업
import ImgPopup from '@/views/include/ImgPopup.vue';
//이미지 레이어 팝업
import VideoPopup from '@/views/include/VideoPopup.vue';
//Datepicker //$ npm i --save v-calendar
import VCalendar from 'v-calendar/lib/components/date-picker.umd';
//var foo = () => {alert('foo')}
import SsamSelect from '@/components/SsamSelect.vue';


export default {
  data () {
    return {
      mobile: false,
      type : '',
    }
  },
  components: {
      Popup,
      Alert,
      ImgPopup,
      VideoPopup,
      VCalendar,
      PcSnb,
      MobileSnb,
      //MobileHeader,
      Paginate,
      SsamSelect,
      MobileGnb
  },
  computed: {
    isActive() {
      return true;
    }
  },
  methods: {
    mixinInit () {
      console.log('init function');
    },
    toastPop(type, message) {
      Vue.$toast.open({
        message: message,
        type: type,
        position: 'top-left',
        duration: 1000
      });
    },
    multiSelect(event) {
      let multiSelect = event.currentTarget.parentNode;
      let checkboxes = event.currentTarget.nextSibling;
      let inp = checkboxes.childNodes;
      multiSelect.classList.toggle('on');

      for (let i=0; i < inp.length; i++) {
        if (inp[i].childNodes[0].checked) {
            event.currentTarget.classList.remove('lCase');
            return false;
        } else {
            event.currentTarget.classList.add('lCase');
        }
      }
    },
    dropList(event) {
      if (!this.dropTrigger) {
        event.target.classList += ' on';
        event.target.parentNode.parentNode.className = 'dropClose';
        this.dropTrigger = true;
      } else {
        event.target.classList.remove('on');
        event.target.parentNode.parentNode.className = 'dropOpen';
        this.dropTrigger = false;
      }
    },
    isMobile () {
      this.mobile = false;
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    },
    isInclude(type) {
      let includeID = type ;
      for (let i=0; i < 8; i++) {
        if ( includeID === i){
          console.log(includeID);
        } else {
          console.log('notThis');
        }
      }
    },
    scrollHiden(event) {
      if (event) {
        this.active = !this.active;
        let sitebody = document.body;
        this.active ? sitebody.classList.add("scrollHiden") : sitebody.classList.remove("scrollHiden");
      }
    },
    toggleOpner(event, triggerID) {
      if (event) {
        this.active = !this.active;
        let triggerEl = document.getElementById(triggerID);
        this.active ? triggerEl.classList.add("on") : triggerEl.classList.remove("on");
      }
    },
  },
  mounted() {
    this.mixinInit();
    this.isMobile();
    this.scrollHiden();
    this.toggleOpner();
  },
}
