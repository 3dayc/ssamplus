<template lang="html">
  <div>
		<div class="pageTit">
			<h2>단과 강좌</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강과/교재</router-link><router-link to="/mkup/lecture/singleCourse">강좌 관리</router-link><em>단과 강좌</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="singleCourse">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="left-po">
            <span class="checkSet">
              <input type="checkbox" v-model="hiddenLecture">
              <label for=""><i></i>숨김 강의 제외하고 조회</label>
            </span>
          </div>
          <div class="listSearch">
            <div class="back">              
              <div class="bdLine">
                <span class="lsItem">
                  <div class="multiselectSet">
                    <div class="selectSet lCase" @click="multiSelect($event)">
                      <select>
                        <option>강좌 구분</option>
                      </select>
                      <div class="overSelect"></div>
                    </div>
                    <div class="checkArea">
                      <span class="checkSet">
                        <input type="checkbox" id="one" v-model="searchForm.online"/>
                        <label for="one"><i></i>온라인</label>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" id="two" v-model="searchForm.seoul"/>
                        <label for="two"><i></i>서울학원</label>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" id="three" v-model="searchForm.deagu"/>
                        <label for="two"><i></i>대구학원</label>
                      </span>
                    </div>
                  </div>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select v-model="searchForm.subject">
                      <option value="" class="label">과목</option>
                      <option value="a">교육학</option>
                      <option value="b">논술면접</option>
                      <option value="c">한국사</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">교수</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <input type="text" placeholder="강좌명 검색" :value="searchForm.keyword" @input="searchForm.keyword=$event.target.value" @keyup.enter="search()"/>
                  <!-- <input type="text" placeholder="강좌명 검색" v-model="searchForm.keyword"/> -->
                  <button class="btnSearch" @click="search()">검색</button>
                </span>
              </div>              
            </div>
          </div>
          <div class="right-po"><router-link class="btnAdd" to="/mkup/lecture/singleCourse/write">신규등록</router-link></div>
        </div>
        <!-- //테이블 유틸 -->
        <!-- 테이블 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="80px;" span="3">
              <col>
              <col width="110px;" span="6">
            </colgroup>
            <thead class="duble">
              <tr>
                <th scope="col" colspan="3">신청현황/노출여부</th>
                <th scope="col" rowspan="2">강좌명</th>
                <th scope="col" rowspan="2">전공과목<br/>/ 교수</th>
                <th scope="col" rowspan="2">수강료</th>
                <th scope="col" rowspan="2">제작년월</th>
                <th scope="col" colspan="3">개강여부/개강일</th>
              </tr>
              <tr>
                <th scope="col">온라인</th>
                <th scope="col">서울</th>
                <th scope="col">대구</th>
                <th scope="col">온라인</th>
                <th scope="col">서울</th>
                <th scope="col">대구</th>
              </tr>
            </thead>
            <tbody v-if="list.length > 0">
              <!--Loop-->
              <tr v-for="(obj, idx) in list"                
                v-bind:key="idx"
              >
                <td>
                  신청중
                  <span class="labelToggleSet">
                    <input type="checkbox" :checked="obj.online === '1'">
                    <label>
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  신청마감
                  <span class="labelToggleSet">
                    <input type="checkbox" :checked="obj.seoul === '1'">
                    <label>
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td>
                  신청마감
                  <span class="labelToggleSet">
                    <input type="checkbox" :checked="obj.daegu === '1'">
                    <label>
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">
                  <router-link :to="{name:'SingleCourseView', params:{id:1}}">
                    [21.3~4월]  <em class="iSet yellow">제작중</em><br/>
                    장영희 전공중국어 – 80점 도약 모의고사반
                  </router-link>
                </td>
                <td>중등중국어<br/>장영희</td>
                <td>{{ obj.price | withCommas }}원</td>
                <td>{{ obj.date | toDateFmt }}</td>
                <td>개강<br/>2021-02-03</td>
                <td>개강<br/>2021-02-03</td>
                <td>개강<br/>2021-02-03</td>
              </tr>
              <!--//Loop-->              
            </tbody>
            <tbody v-else>
              <!-- 데이터 없을 경우 -->
              <tr><td colspan="10" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
        <!-- //테이블 목록 -->
        <Paginate />
      </div>
    </article>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import Common from '@/plugins/mixins/Common.js';

export default {
  mixins: [Mixin, Common],
  name: 'SingleCourse',
  data() {
    return {
      temp: 1000,
      searchForm:{
        online:false,
        seoul:false,
        deagu:false,
        subject:'',
        kind:'',
        keyword:''
      },
      hiddenLecture:false,      
      list:[]
    }
  },
  components: {
  },
  watch: {
    hiddenLecture: function(val) {
      if (val) this.list = [];      
      else this.search();
    }
  },
  computed: {

  },
  methods: {
    search() {
      axios.get('/a-lecture/singleCourse', this.searchForm)
				.then(({ statusCode, responseMessage, data }) => {										
          console.log(statusCode);
          console.log(responseMessage);
					console.log(data.row);
          this.list = data.row;
				}).catch((error) => {					
					console.log(error);
				});			
      
    },
  },
  mounted() {

  },
  created() {

  }
}
</script>
