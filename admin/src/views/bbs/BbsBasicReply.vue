<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>기본 답변</h1>
      <span class="supTxt">* 기본 답변을 등록하고 관리합니다.</span>
    </div>
    <div class="winContent">
      <!-- 테이블 유틸 -->
      <div class="boardTop tL">
        <div class="listSearch">
          <div class="back">
            <div class="bdLine">
              <span class="lsItem">
                <span class="selectSet lCase">
                  <select name="" id="">
                    <option value="no" class="label">대분류</option>
                    <option value="">회원/로그인</option>
                    <option value="">사이트 오류</option>
                    <option value="">교재/학습자료</option>
                    <option value="">강좌 관련</option>
                    <option value="">결제/환불</option>
                    <option value="">학원(직강)</option>
                    <option value="">기타/건의사항</option>
                    <option value="">희소모의고사</option>
                  </select>
                </span>
              </span>
              <span class="lsItem">
                <span class="selectSet lCase">
                  <select name="" id="">
                    <option value="no" class="label">중분류</option>
                  </select>
                </span>
              </span>
              <span class="lsItem">
                <span class="selectSet lCase">
                  <select name="" id="">
                    <option value="no" class="label">소분류</option>
                  </select>
                </span>
              </span>
              <span class="lsItem">
                <input type="text" placeholder="제목 검색" />
                <button class="btnSearch">검색</button>
              </span>
            </div>
          </div>
        </div>
        <div class="right-po"><router-link to="/mkup/windowPopup/bbsBasicReply/write" class="btnAdd">신규등록</router-link></div>
      </div>
      <!-- //테이블 유틸 -->
      <!-- 테이블 목록 -->
      <div class="tls">
    		<table>
    			<colgroup>
            <col width="80">
            <col width="80">
            <col width="140">
            <col width="140">
            <col width="160">
            <col width="*">
            <col width="40">
    			</colgroup>
    			<thead>
    				<tr>
    					<th scope="col">선택</th>
    					<th scope="col">빠른 답변</th>
    					<th scope="col">대분류</th>
    					<th scope="col">중분류</th>
    					<th scope="col">소분류</th>
    					<th scope="col">제목</th>
    					<th scope="col"></th>
    				</tr>
    			</thead>
    			<tbody>
    				<!--Loop-->
    				<tr class="dropOpen">
    					<td><button>답변선택</button></td>
              <td>
    						<span class="checkSet noLabel">
    							<input type="checkbox" id="chk1">
    							<label for="chk1"><i></i></label>
    						</span>
    					</td>
              <td>강의 수강,<br/>사이트 이용 관련</td>
              <td>교재/학습자료</td>
              <td>교재 교환/반품</td>
              <td>교재반품</td>
              <td><button class="dropToggle" @click="toggleBtn">토글 버튼</button></td>
    				</tr>
            <tr v-if="toggleTrigger" class="dropClose">
              <td colspan="7" class="tL">
                네 선생님 반품 접수되었습니다.<br/>
                기사님 방문 시 교재 박스 포장하시어 배송비 2500원 과 같이 전달해 주시면 됩니다.<br/>
                교재는 물류센터 입고 후 확인작업 거쳐 환불 진행되어 최대 2주정도 소요되며<br/>
                환불 시 무료배송 2500원 추가 차감 후 환불됩니다~<br/>
              </td>
            </tr>
    				<!--//Loop-->
            <tr>
    					<td><button>답변선택</button></td>
              <td>
    						<span class="checkSet noLabel">
    							<input type="checkbox" id="chk12">
    							<label for="chk12"><i></i></label>
    						</span>
    					</td>
    					<td>임용학습상담</td>
    					<td>중등</td>
    					<td>-</td>
    					<td>중등 면접</td>
              <td><button class="dropToggle" @click="toggleBtn2">토글 버튼</button></td>
    				</tr>
            <tr v-show="toggleTrigger2">
              <td colspan="7" class="tL">
                네 선생님 반품 접수되었습니다.<br/>
                기사님 방문 시 교재 박스 포장하시어 배송비 2500원 과 같이 전달해 주시면 됩니다.<br/>
                교재는 물류센터 입고 후 확인작업 거쳐 환불 진행되어 최대 2주정도 소요되며<br/>
                환불 시 무료배송 2500원 추가 차감 후 환불됩니다~<br/>
              </td>
            </tr>
            <tr>
    					<td><button>답변선택</button></td>
              <td>
    						<span class="checkSet noLabel">
    							<input type="checkbox" id="chk13">
    							<label for="chk13"><i></i></label>
    						</span>
    					</td>
    					<td>환불</td>
    					<td>강의수강불편</td>
    					<td>강사/강의 내용 불만</td>
    					<td>강의 내용 불만</td>
              <td><button class="dropToggle" @click="toggleBtn3">토글 버튼</button></td>
    				</tr>
            <tr v-show="toggleTrigger3">
              <td colspan="7" class="tL">
                네 선생님 반품 접수되었습니다.<br/>
                기사님 방문 시 교재 박스 포장하시어 배송비 2500원 과 같이 전달해 주시면 됩니다.<br/>
                교재는 물류센터 입고 후 확인작업 거쳐 환불 진행되어 최대 2주정도 소요되며<br/>
                환불 시 무료배송 2500원 추가 차감 후 환불됩니다~<br/>
              </td>
            </tr>
            <tr>
    					<td><button>답변선택</button></td>
              <td>
    						<span class="checkSet noLabel">
    							<input type="checkbox" id="chk14">
    							<label for="chk14"><i></i></label>
    						</span>
    					</td>
    					<td>환불</td>
    					<td>교재이용불편</td>
    					<td>다른 경로로 교재 구매<br/>(다른 사이트 이용)</td>
    					<td>인직강타 사이트 이용</td>
              <td><button class="dropToggle" @click="toggleBtn4">토글 버튼</button></td>
    				</tr>
            <tr v-show="toggleTrigger4">
              <td colspan="7" class="tL">
                네 선생님 반품 접수되었습니다.<br/>
                기사님 방문 시 교재 박스 포장하시어 배송비 2500원 과 같이 전달해 주시면 됩니다.<br/>
                교재는 물류센터 입고 후 확인작업 거쳐 환불 진행되어 최대 2주정도 소요되며<br/>
                환불 시 무료배송 2500원 추가 차감 후 환불됩니다~<br/>
              </td>
            </tr>
            <tr>
    					<td><button>답변선택</button></td>
              <td>
    						<span class="checkSet noLabel">
    							<input type="checkbox" id="chk15">
    							<label for="chk15"><i></i></label>
    						</span>
    					</td>
    					<td>강의 수강,<br/>사이트 이용 관련</td>
    					<td>사이트 문의</td>
    					<td>이용환경 / OS</td>
    					<td>이용환경</td>
              <td><button class="dropToggle" @click="toggleBtn5">토글 버튼</button></td>
    				</tr>
            <tr v-show="toggleTrigger5">
              <td colspan="7" class="tL">
                네 선생님 반품 접수되었습니다.<br/>
                기사님 방문 시 교재 박스 포장하시어 배송비 2500원 과 같이 전달해 주시면 됩니다.<br/>
                교재는 물류센터 입고 후 확인작업 거쳐 환불 진행되어 최대 2주정도 소요되며<br/>
                환불 시 무료배송 2500원 추가 차감 후 환불됩니다~<br/>
              </td>
            </tr>
            <tr>
    					<td><button>답변선택</button></td>
              <td>
    						<span class="checkSet noLabel">
    							<input type="checkbox" id="chk16">
    							<label for="chk16"><i></i></label>
    						</span>
    					</td>
    					<td>임용학습상담</td>
    					<td>비교과</td>
    					<td>전문상담</td>
    					<td>상담 필기</td>
              <td><button class="dropToggle" @click="toggleBtn6">토글 버튼</button></td>
    				</tr>
            <tr v-show="toggleTrigger6">
              <td colspan="7" class="tL">
                네 선생님 반품 접수되었습니다.<br/>
                기사님 방문 시 교재 박스 포장하시어 배송비 2500원 과 같이 전달해 주시면 됩니다.<br/>
                교재는 물류센터 입고 후 확인작업 거쳐 환불 진행되어 최대 2주정도 소요되며<br/>
                환불 시 무료배송 2500원 추가 차감 후 환불됩니다~<br/>
              </td>
            </tr>
            <tr>
    					<td><button>답변선택</button></td>
              <td>
    						<span class="checkSet noLabel">
    							<input type="checkbox" id="chk17">
    							<label for="chk17"><i></i></label>
    						</span>
    					</td>
    					<td>환불</td>
    					<td>강의수강불편</td>
    					<td>강사/강의 내용 불만</td>
    					<td>강의 내용 불만</td>
              <td><button class="dropToggle" @click="toggleBtn7">토글 버튼</button></td>
    				</tr>
            <tr v-show="toggleTrigger7">
              <td colspan="7" class="tL">
                네 선생님 반품 접수되었습니다.<br/>
                기사님 방문 시 교재 박스 포장하시어 배송비 2500원 과 같이 전달해 주시면 됩니다.<br/>
                교재는 물류센터 입고 후 확인작업 거쳐 환불 진행되어 최대 2주정도 소요되며<br/>
                환불 시 무료배송 2500원 추가 차감 후 환불됩니다~<br/>
              </td>
            </tr>
            <tr>
    					<td><button>답변선택</button></td>
              <td>
    						<span class="checkSet noLabel">
    							<input type="checkbox" id="chk18">
    							<label for="chk18"><i></i></label>
    						</span>
    					</td>
    					<td>환불</td>
    					<td>교재이용불편</td>
    					<td>다른 경로로 교재 구매<br/>(다른 사이트 이용)</td>
    					<td>타 사이트 이용</td>
              <td><button class="dropToggle" @click="toggleBtn8">토글 버튼</button></td>
    				</tr>
            <tr v-show="toggleTrigger8">
              <td colspan="7" class="tL">
                네 선생님 반품 접수되었습니다.<br/>
                기사님 방문 시 교재 박스 포장하시어 배송비 2500원 과 같이 전달해 주시면 됩니다.<br/>
                교재는 물류센터 입고 후 확인작업 거쳐 환불 진행되어 최대 2주정도 소요되며<br/>
                환불 시 무료배송 2500원 추가 차감 후 환불됩니다~<br/>
              </td>
            </tr>
            <!-- 데이터 없을 경우 -->
            <tr style="display:none;"><td colspan="7" class="noneData">등록된 데이터가 없습니다.</td></tr>
            <!-- //데이터 없을 경우 -->
    			</tbody>
    		</table>
    	</div>
      <Paginate />
      <!-- //테이블 목록 -->
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'BbsBasicReply',
  data() {
    return {
      toggleTrigger: false,
      toggleTrigger2: false,
      toggleTrigger3: false,
      toggleTrigger4: false,
      toggleTrigger5: false,
      toggleTrigger6: false,
      toggleTrigger7: false,
      toggleTrigger8: false
    }
  },
  methods: {
    toggleBtn(event) {
      if (!this.toggleTrigger) {event.target.classList += ' on';
        this.toggleTrigger = true;
        this.toggleTrigger2 = false;
        this.toggleTrigger3 = false;
        this.toggleTrigger4 = false;
        this.toggleTrigger5 = false;
        this.toggleTrigger6 = false;
        this.toggleTrigger7 = false;
      } else {event.target.classList.remove('on');this.toggleTrigger = false;
      }
    },
    toggleBtn2(event) {
      if (!this.toggleTrigger2) {event.target.classList += ' on';
        this.toggleTrigger = false;
        this.toggleTrigger2 = true;
        this.toggleTrigger3 = false;
        this.toggleTrigger4 = false;
        this.toggleTrigger5 = false;
        this.toggleTrigger6 = false;
        this.toggleTrigger7 = false;
        this.toggleTrigger8 = false;
    } else {event.target.classList.remove('on');this.toggleTrigger2 = false;}
    },
    toggleBtn3(event) {
      if (!this.toggleTrigger3) {event.target.classList += ' on';
        this.toggleTrigger = false;
        this.toggleTrigger2 = false;
        this.toggleTrigger3 = true;
        this.toggleTrigger4 = false;
        this.toggleTrigger5 = false;
        this.toggleTrigger6 = false;
        this.toggleTrigger7 = false;
        this.toggleTrigger8 = false;
    } else {event.target.classList.remove('on');this.toggleTrigger3 = false;}
    },
    toggleBtn4(event) {
      if (!this.toggleTrigger4) {event.target.classList += ' on';
        this.toggleTrigger = false;
        this.toggleTrigger2 = false;
        this.toggleTrigger3 = false;
        this.toggleTrigger4 = true;
        this.toggleTrigger5 = false;
        this.toggleTrigger6 = false;
        this.toggleTrigger7 = false;
        this.toggleTrigger8 = false;
    } else {event.target.classList.remove('on');this.toggleTrigger4 = false;}
    },
    toggleBtn5(event) {
      if (!this.toggleTrigger5) {event.target.classList += ' on';
        this.toggleTrigger = true;
        this.toggleTrigger2 = false;
        this.toggleTrigger3 = false;
        this.toggleTrigger4 = false;
        this.toggleTrigger5 = true;
        this.toggleTrigger6 = false;
        this.toggleTrigger7 = false;
        this.toggleTrigger8 = false;
    } else {event.target.classList.remove('on');this.toggleTrigger5 = false;}
    },
    toggleBtn6(event) {
      if (!this.toggleTrigger6) {event.target.classList += ' on';
        this.toggleTrigger = false;
        this.toggleTrigger2 = false;
        this.toggleTrigger3 = false;
        this.toggleTrigger4 = false;
        this.toggleTrigger5 = false;
        this.toggleTrigger6 = true;
        this.toggleTrigger7 = false;
        this.toggleTrigger8 = false;
    } else {event.target.classList.remove('on');this.toggleTrigger6 = false;}
    },
    toggleBtn7(event) {
      if (!this.toggleTrigger7) {event.target.classList += ' on';
        this.toggleTrigger = false;
        this.toggleTrigger2 = false;
        this.toggleTrigger3 = false;
        this.toggleTrigger4 = false;
        this.toggleTrigger5 = false;
        this.toggleTrigger6 = false;
        this.toggleTrigger7 = true;
        this.toggleTrigger8 = false;
    } else {event.target.classList.remove('on');this.toggleTrigger7 = false;}
    },
    toggleBtn8(event) {
      if (!this.toggleTrigger8) {event.target.classList += ' on';
        this.toggleTrigger = false;
        this.toggleTrigger2 = false;
        this.toggleTrigger3 = false;
        this.toggleTrigger4 = false;
        this.toggleTrigger5 = false;
        this.toggleTrigger6 = false;
        this.toggleTrigger7 = false;
        this.toggleTrigger8 = true;
    } else {event.target.classList.remove('on');this.toggleTrigger8 = false;}
    },
  },
  components: {
  }
}
</script>
