<template lang="html">
  <div>
		<div class="pageTit">
			<h2>패키지 강좌</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/singleCourse">강좌 관리</router-link><em>패키지 강좌</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="packageCourse">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="left-po">
            <router-link to="/mkup/lecture/packageCoursePremiumPolicy" class="btnS">프리미엄 정책관리</router-link>
          </div>
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">강좌구분</option>
                      <option value="">온라인</option>
                      <option value="">서울학원</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">과목</option>
                      <option value="">교육학</option>
                      <option value="">유아</option>
                      <option value="">초등</option>
                      <option value="">국어</option>
                      <option value="">영어</option>
                      <option value="">수학</option>
                      <option value="">음악</option>
                      <option value="">미술</option>
                      <option value="">체육</option>
                      <option value="">중국어</option>
                      <option value="">일본어</option>
                      <option value="">한문</option>
                      <option value="">가정</option>
                      <option value="">도덕윤리</option>
                      <option value="">미용</option>
                      <option value="">역사</option>
                      <option value="">지리</option>
                      <option value="">물리</option>
                      <option value="">화학</option>
                      <option value="">생물</option>
                      <option value="">전문상담</option>
                      <option value="">보건</option>
                      <option value="">유아특수</option>
                      <option value="">초등특수</option>
                      <option value="">중등특수</option>
                      <option value="">과학교육론</option>
                      <option value="">면접</option>
                      <option value="">한국사</option>
                      <option value="">사서직(공무원)</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">선생님</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <input type="text" placeholder="패키지번호, 패키지명 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div>
                <button class="btnRefresh">초기화</button>
              </div>
            </div>
          </div>
        </div>
        <div class="listSummery">
					<div class="left">
            <span class="checkSet">
              <input type="checkbox" checked="checked">
              <label for=""><i></i>숨김 강의 제외하고 조회</label>
            </span>
					</div>
          <div class="right">
            <router-link class="btnAdd" to="/mkup/lecture/packageCourse/write">신규등록</router-link>
            <button class="btnS line ml10">프리미엄 패키지 생성</button>
            <button class="btnS line ml10" @click="LectureSearchPlus()">프리미엄 플러스 패키지 생성</button>
          </div>
        </div>
        <!-- //테이블 유틸 -->
        <!-- 테이블 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="60">
              <col width="100">
              <col width="120">
              <col width="*">
              <col width="120">
              <col width="220">
              <col width="100">
              <col width="120">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">선택</th>
                <th scope="col">구분</th>
                <th scope="col">신청현황<br/>/노출여부</th>
                <th scope="col">패키지명  </th>
                <th scope="col">과목<br/>/선생님</th>
                <th scope="col">접수기간</th>
                <th scope="col">판매가<br/>/할인율</th>
                <th scope="col">수강인원<br/>(유/무료)</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="check1"/>
                    <label for="check1"><i></i></label>
                  </span>
                </td>
                <td>2504<br/>온라인</td>
                <td>
                  접수중<br/>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle1" checked>
                    <label for="toggle1">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">
                  <router-link to="/mkup/lecture/packageCourse/premium">[21 1~2월] <em class="iSet hotpink">프리미엄</em><br/>2021 완전정복 쌤팩</router-link>
                  <ul class="includeList">
                    <li>(15123 | 중국어 | 장영희) [21년 1~2월] 80점 도약 모의고사 반</li>
                    <li>(15123 | 중국어 | 장영희) [21년 1~2월] 80점 도약 모의고사 반</li>
                    <li>(15123 | 중국어 | 장영희) [21년 1~2월] 80점 도약 모의고사 반</li>
                  </ul>
                </td>
                <td>중국어<br/>장영희</td>
                <td>2021-01-01~2021-12-31</td>
                <td>500,000원<br/>33%</td>
                <td>200<br/>(160/40)</td>
              </tr>
              <!--//Loop-->
              <tr class="expiry">
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="check2" checked/>
                    <label for="check2"><i></i></label>
                  </span>
                </td>
                <td>2503<br/>서울</td>
                <td>
                  접수마감<br/>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle2">
                    <label for="toggle2">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">
                  <router-link to="/mkup/lecture/packageCourse/basic">[21 1~2월]<br/>2021 완전정복 쌤팩</router-link>
                  <ul class="includeList">
                    <li>(15123 | 중국어 | 장영희) [21년 1~2월] 80점 도약 모의고사 반</li>
                    <li>(15123 | 중국어 | 장영희) [21년 1~2월] 80점 도약 모의고사 반</li>
                  </ul>
                </td>
                <td>중국어<br/>희소중국어팀</td>
                <td>2021-01-01~2021-12-31</td>
                <td>500,000원<br/>33%</td>
                <td>450<br/>(400/50)</td>
              </tr>
              <tr class="blue">
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="check3" checked/>
                    <label for="check3"><i></i></label>
                  </span>
                </td>
                <td>2502<br/>서울</td>
                <td>
                  접수예정<br/>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle3">
                    <label for="toggle3">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">
                  <router-link to="/mkup/lecture/packageCourse/basic">[21 1~2월] <br/>2021 완전정복 쌤팩</router-link>
                  <ul class="includeList">
                    <li>(15123 | 중국어 | 장영희) [21년 1~2월] 80점 도약 모의고사 반</li>
                    <li>(15123 | 중국어 | 장영희) [21년 1~2월] 80점 도약 모의고사 반</li>
                    <li>(15123 | 중국어 | 장영희) [21년 1~2월] 80점 도약 모의고사 반</li>
                    <li>(15123 | 중국어 | 장영희) [21년 1~2월] 80점 도약 모의고사 반</li>
                    <li>(15123 | 중국어 | 장영희) [21년 1~2월] 80점 도약 모의고사 반</li>
                    <li>(15123 | 중국어 | 장영희) [21년 1~2월] 80점 도약 모의고사 반</li>
                  </ul>
                </td>
                <td>중국어<br/>장영희</td>
                <td>2021-01-01~2021-12-31</td>
                <td>500,000원<br/>33%</td>
                <td>접수예정</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="check4" disabled/>
                    <label for="check4"><i></i></label>
                  </span>
                </td>
                <td>2501<br/>온라인</td>
                <td>
                  접수중<br/>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle4">
                    <label for="toggle4">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">
                  <router-link to="/mkup/lecture/packageCourse/premiumPlus">[21.1~2월] <em class="iSet hotpink">프리미엄</em><br/>2021 완전정복 쌤팩 + LG Gram</router-link>
                  <ul class="includeList">
                    <li>(15123 | 중국어 | 장영희) [21년 1~2월] 80점 도약 모의고사 반</li>
                    <li>(15123 | 중국어 | 장영희) [21년 1~2월] 80점 도약 모의고사 반</li>
                  </ul>
                </td>
                <td>중국어<br/>희소중국어팀</td>
                <td>2021-01-01~2021-12-31</td>
                <td>500,000원<br/>33%</td>
                <td>200<br/>(160/40)</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="check5"/>
                    <label for="check5"><i></i></label>
                  </span>
                </td>
                <td>2500<br/>서울</td>
                <td>
                  접수중<br/>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle5">
                    <label for="toggle5">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">
                  <router-link to="/mkup/lecture/packageCourse/premium">[21 1~2월] <em class="iSet hotpink">프리미엄</em><br/>2021 완전정복 쌤팩</router-link>
                  <ul class="includeList">
                    <li>(15123 | 중국어 | 장영희) [21년 1~2월] 80점 도약 모의고사 반</li>
                    <li>(15123 | 중국어 | 장영희) [21년 1~2월] 80점 도약 모의고사 반</li>
                  </ul>
                </td>
                <td>중국어<br/>장영희</td>
                <td>2021-01-01~2021-12-31</td>
                <td>500,000원<br/>33%</td>
                <td>500<br/>(470/30)</td>
              </tr>
              <tr>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="check6"/>
                    <label for="check6"><i></i></label>
                  </span>
                </td>
                <td>2500<br/>서울</td>
                <td>
                  접수중<br/>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="toggle6" checked>
                    <label for="toggle6">
                      <span>숨김</span>
                      <span>노출</span>
                    </label>
                  </span>
                </td>
                <td class="tL">
                  <router-link to="/mkup/lecture/packageCourse/basic">[21 1~2월]<br/>2021 완전정복 쌤팩</router-link>
                  <ul class="includeList">
                    <li>(15123 | 중국어 | 장영희) [21년 1~2월] 80점 도약 모의고사 반</li>
                    <li>(15123 | 중국어 | 장영희) [21년 1~2월] 80점 도약 모의고사 반</li>
                  </ul>
                </td>
                <td>중국어<br/>장영희</td>
                <td>2021-01-01~2021-12-31</td>
                <td>500,000원<br/>33%</td>
                <td>500<br/>(470/30)</td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
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

export default {
  mixins: [Mixin],
  name: 'PackageCourse',
  data() {
    return {
    }
  },
  methods: {
    LectureSearchPlus() {
      let routeData = this.$router.resolve({name: 'LectureSearchPlus', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceSearchPlus', '_blank', `width=1100,height=900`);
    },
  },
  components: {
  }
}
</script>
