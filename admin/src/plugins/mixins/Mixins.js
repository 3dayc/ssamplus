//외부 플러그인 시작
import Vue from 'vue';
//WindowPopup
//import WindowPopup from '@/views/include/WindowPopup.vue';
// includ 샘플 컨텐츠
import Header from '@/views/include/Header.vue';
// 페이징 처리
import Paginate from '@/views/include/Paginate.vue';
//tostPop //npm install vue-toast-notification
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);
//Tab
import Tab from '@/views/include/Tab.vue';
import Tabs from '@/views/include/Tabs.vue';
//레이어 팝업
import Popup from '@/views/include/Popup.vue';
//얼럿 팝업
import Alert from '@/views/include/Alert.vue';
//Datepicker
//$ npm i --save v-calendar
import VCalendar from 'v-calendar/lib/components/date-picker.umd';

export default {
  data () {
      return {

      }
  },
  components: {
      Tab,
      Tabs,
      Popup,
      Alert,
      //WindowPopup,
      VCalendar,
      Header,
      Paginate
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
    scrollHiden(event) {
      if (event) {
        this.active = !this.active;
        let sitebody = document.body;
        this.active ? sitebody.classList.add("scrollHiden") : sitebody.classList.remove("scrollHiden");
      }
    },
  },
  mounted() {    
    this.mixinInit();
    this.scrollHiden();
  },  
}
