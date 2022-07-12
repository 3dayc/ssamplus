<template lang="html">
  <div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div class="singleCourseViewUser">
          <!-- 수강생 검색 -->
          <div class="subTit cpRight">
            <div class="listSearch left">
              <div class="back">
                <div class="bdLine">
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="" @change="onChange($event)">
                        <option value="0" class="label">온라인</option>
                        <option value="1">서울학원</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem" v-show="userOnlineTigger">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">전체 수강생</option>
                        <option value="">수강중</option>
                        <option value="">수강대기</option>
                        <option value="">수강완료</option>
                        <option value="">수강연장 가능</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <input type="text" placeholder="이름. 아이디 검색" />
                    <button class="btnSearch">검색</button>
                  </span>
                </div>
                <button class="btnRefresh">초기화</button>
              </div>
            </div>
            <span class="right"><em>MO-2104-001 | MS-2104-001 |  장영희 | 전공중국어 – 80점 도약모의고사반</em> 강좌입니다.</span><!-- 2021-07-14 수정 -->
          </div>
          <!-- //수강생 검색 -->
          <!-- 수강생 온라인일 경우 검색결과 -->
          <div v-if="userOnlineTigger">
            <div class="listSummery">
              <div class="left">
                <strong>회원 개인정보 표출</strong>
                <span class="toggleSet">
                  <input type="checkbox" id="push" />
                  <label for="push"><!--적용여부--></label>
                </span>
              </div>
              <div class="right">
                <button class="btnT line" @click="alertTrigger = true">시작일 변경</button>
                <button class="btnT line ml10" @click="alertTrigger3 = true">기간 연장</button>
                <button class="btnMsg mrl10" @click="MemberMsgSend();">메세지발송</button>
                <button class="btnDownload" @click="popTrigger = true">다운로드</button>
              </div>
            </div>
            <div class="tls">
              <table>
                <colgroup>
                  <col width="40">
                  <col width="120">
                  <col width="100">
                  <col width="190">
                  <col width="80">
                  <col width="80">
                  <col width="120">
                  <col width="100">
                  <col width="100">
                </colgroup>
                <thead>
                  <tr>
                    <th>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu">
                        <label for="svu"><i></i></label>
                      </span>
                    </th>
                    <th>이름/아이디</th>
                    <th>연락처</th>
                    <th>수강기간 (일수)</th>
                    <th>수강/전체</th>
                    <th>연장사용</th>
                    <th>홀딩사용<br/>횟수 / 재시작일</th>
                    <th>수강구분/ <br/>결제금액</th>
                    <th>결제일</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu1">
                        <label for="svu1"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td>2021-02-04 ~ 2021-04-15 (70일)</td>
                    <td>10/50<br/>(20.0%)</td>
                    <td>1회</td>
                    <td>미사용</td>
                    <td>무료수강<br/>0원</td>
                    <td>2021-03-21</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu2">
                        <label for="svu2"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td><span class="fBlue">보너스</span><br/>시작일 미설정</td>
                    <td>10/50<br/>(20.0%)</td>
                    <td>미사용</td>
                    <td>1회 / 2021-03-20</td>
                    <td>유료수강<br/>250,000원</td>
                    <td>2021-03-21</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu3">
                        <label for="svu3"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td>2021-02-04 ~ 2021-04-15 (70일)</td>
                    <td>10/50<br/>(20.0%)</td>
                    <td>1회</td>
                    <td>미사용</td>
                    <td>무료수강<br/>0원</td>
                    <td>2021-03-21</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu4">
                        <label for="svu4"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td><span class="fBlue">보너스</span><br/>2021-02-04 ~ 2021-03-04 (30일)</td>
                    <td>10/50<br/>(20.0%)</td>
                    <td>미사용</td>
                    <td>1회 / 2021-04-20</td>
                    <td>유료수강<br/>250,000원</td>
                    <td>2021-03-21</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu5">
                        <label for="svu5"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td><span class="fBlue">재수강</span><br/>2021-02-04 ~ 2021-04-15 (70일)</td>
                    <td>10/50<br/>(20.0%)</td>
                    <td>1회</td>
                    <td>미사용</td>
                    <td>무료수강<br/>0원</td>
                    <td>2021-03-21</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu6">
                        <label for="svu6"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td>2021-02-04 ~ 2021-04-15 (70일)</td>
                    <td>10/50<br/>(20.0%)</td>
                    <td>미사용</td>
                    <td>1회 / 2021-04-20</td>
                    <td>유료수강<br/>250,000원</td>
                    <td>2021-03-21</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu7">
                        <label for="svu7"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td>2021-02-04 ~ 2021-04-15 (70일)</td>
                    <td>10/50<br/>(20.0%)</td>
                    <td>1회</td>
                    <td>미사용</td>
                    <td>무료수강<br/>0원</td>
                    <td>2021-03-21</td>
                  </tr>
                  <tr style="display:none;">
                    <td colspan="9" class="noneData">해당 강좌에 수강생이 없습니다</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- //수강생 온라인일 경우 검색결과 -->
          <!-- 수강생 오프라인일 경우 검색결과 -->
          <div v-if="userDirectTigger">
            <div class="listSummery">
              <div class="left">
                <strong>회원 개인정보 표출</strong>
                <span class="toggleSet">
                  <input type="checkbox" id="push" />
                  <label for="push"><!--적용여부--></label>
                </span>
              </div>
              <div class="right">
                <button class="btnT line" @click="alertTrigger2 = true">보충강의 제공</button>
                <button class="btnMsg mrl10" @click="MemberPartnerMsgSend();">메세지발송</button>
                <button class="btnDownload" @click="popTrigger = true">다운로드</button>
              </div>
            </div>
            <div class="tls">
              <table>
                <colgroup>
                  <col width="50">
                  <col width="120">
                  <col width="100">
                  <col width="150">
                  <col width="120">
                  <col width="100">
                  <col width="120">
                </colgroup>
                <thead>
                  <tr>
                    <th>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu">
                        <label for="svu"><i></i></label>
                      </span>
                    </th>
                    <th>이름/아이디</th>
                    <th>연락처</th>
                    <th>개강-종강일</th>
                    <th>보충강의 사용</th>
                    <th>수강구분/ <br/>결제금액</th>
                    <th>결제일</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu1">
                        <label for="svu1"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td>2021-02-04 ~ 2021-03-15</td>
                    <td>미사용</td>
                    <td>무료수강<br/>0원</td>
                    <td>2021-03-21</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu2">
                        <label for="svu2"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td>2021-02-04 ~ 2021-03-15</td>
                    <td>유료 1회 / 2021-04-20</td>
                    <td>유료수강<br/>250,000원</td>
                    <td>2021-03-21</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu3">
                        <label for="svu3"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td>2021-02-04 ~ 2021-03-15</td>
                    <td>미사용</td>
                    <td>무료수강<br/>0원</td>
                    <td>2021-03-21</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu4">
                        <label for="svu4"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td>2021-02-04 ~ 2021-03-15</td>
                    <td>1회 / 유료보강</td>
                    <td>유료수강<br/>250,000원</td>
                    <td>2021-03-21</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu5">
                        <label for="svu5"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td>2021-02-04 ~ 2021-03-15</td>
                    <td>미사용</td>
                    <td>무료수강<br/>0원</td>
                    <td>2021-03-21</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu6">
                        <label for="svu6"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td>2021-02-04 ~ 2021-03-15</td>
                    <td>1회 / 2021-04-20</td>
                    <td>유료수강<br/>250,000원</td>
                    <td>2021-03-21</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="svu7">
                        <label for="svu7"><i></i></label>
                      </span>
                    </td>
                    <td><router-link to="/mkup/member/userMgt/view">김*민<br/>(jim******)</router-link></td>
                    <td>010-****-5678</td>
                    <td>2021-02-04 ~ 2021-03-15</td>
                    <td>미사용</td>
                    <td>무료수강<br/>0원</td>
                    <td>2021-03-21</td>
                  </tr>
                  <tr style="display:none;">
                    <td colspan="7" class="noneData">등록된 데이터가 없습니다.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- //수강생 오프라인일 경우 검색결과 -->
					<!-- 관리 -->
					<div class="subTit mt10"><h3>관리</h3></div>
					<div class="tvs record">
		  			<table>
		  				<colgroup>
		  					<col width="160"/>
		  					<col width="*"/>
		  				</colgroup>
		  				<tbody>
								<tr>
									<th>수정 이력</th>
									<td>
                    <ul class="recordList">
                      <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 수정</li>
                      <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong> 등록</li>
                    </ul>
                  </td>
								</tr>
		  				</tbody>
		  			</table>
		  		</div>
					<!-- //관리 -->
        </div>
        <!-- //page layout -->
      </article>
    </div>


		<!-- 다운로드 마스터 팝업 -->
    <Popup v-if='popTrigger' @close="popTrigger = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>다운로드 마스터 – 회원</h1>
        <span>* 다운로드 조건을 설정하여 엑셀 파일로 다운로드 할 수 있습니다.</span>
      </div>
      <div slot="modalbody">
				<!-- 항목선택 -->
				<div class="downloadForm">
					<dl>
						<dt>조건1</dt>
						<dd>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">가입기간</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="calDupSet">
	              <VCalendar class="calSet" v-model="downloadCal1" color="green">
	                <template v-slot="{ inputValue, togglePopover }">
	                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
	                </template>
	              </VCalendar>
	              <em>~</em>
	              <VCalendar class="calSet" v-model="downloadCal2" color="green">
	                <template v-slot="{ inputValue, togglePopover }">
	                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
	                </template>
	              </VCalendar>
	            </span>
						</dd>
					</dl>
					<dl>
						<dt>조건2</dt>
						<dd>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">수강구분</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">유료수강</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
						</dd>
					</dl>
					<dl>
						<dt>조건3</dt>
						<dd>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">수강교수</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">교육학</option>
	                <option value="">Select Option 1</option>
	              </select>
	            </span>
	            <span class="selectSet">
	              <select name="" id="">
	                <option value="no" class="label">김현</option>
	                <option value="" >Select Option 1</option>
	              </select>
	            </span>
						</dd>
					</dl>
					<a class="btnDownload" download>다운로드</a>
				</div>
				<!-- //항목선택 -->
      </div>
    </Popup>
		<!-- //다운로드 마스터 팝업 -->
    <!-- Popup -->
    <Alert v-if='alertTrigger' @close="alertTrigger = false" class="ohInher">
      <template slot="modalbody">
        <div>
          선택한 회원의 변경 시작일을 <br/>선택해 주세요.<br/>
          <VCalendar class="calSet mt10" v-model="date" color="green">
            <template v-slot="{ inputValue, togglePopover }">
              <input
              :value="inputValue"
              @click="togglePopover()"
              readonly
              placeholder="일자 선택"
              />
            </template>
          </VCalendar>
        </div>
      </template>
      <template slot="modalfooter">
        <div>
          <button class="btnM gray" @click="alertTrigger = false">취소</button>
          <button class="btnM green" @click="alertTrigger = false">변경</button>
        </div>
      </template>
    </Alert>
    <Alert v-if='alertTrigger2' @close="alertTrigger2 = false">
      <template slot="modalbody">
        <div>
          선택한 회원에게 보충강의로 제공할<br/>직강 일자를 선택해 주세요.
          <span class="selectSet mt10">
            <select name="" id="">
              <option value="no" class="label">직강일 선택</option>
              <option value=""></option>
            </select>
          </span>
        </div>
      </template>
      <template slot="modalfooter">
        <div>
          <button class="btnM gray" @click="alertTrigger2 = false">취소</button>
          <button class="btnM green" @click="alertTrigger2 = false">완료</button>
        </div>
      </template>
    </Alert>
    <Alert v-if='alertTrigger3' @close="alertTrigger3 = false">
      <template slot="modalbody">
        <div>
          선택한 회원의 수강기간 연장일을<br/>입력해 주세요
          <div class="mt10">
            - 연장일수
            <span class="unit small ml5"><input type="number"><em>일</em></span>
          </div>
        </div>
      </template>
      <template slot="modalfooter">
        <div>
          <button class="btnM gray" @click="alertTrigger3 = false">취소</button>
          <button class="btnM green" @click="alertTrigger3 = false">완료</button>
        </div>
      </template>
    </Alert>
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SingleCourseViewUser',
  data() {
    return {
      classValue: "downloadPop",
      popTrigger: false,
      downloadCal1: '',
      downloadCal2: '',
      date: '',
      alertTrigger: false,
      alertTrigger2: false,
      alertTrigger3: false,
      userOnlineTigger: true,
      userDirectTigger: false,
    }
  },
  methods: {
    MemberMsgSend() {
      let routeData = this.$router.resolve({name: 'MemberMsgSend', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrMsgSend', '_blank', `width=850,height=20000`);
    },
    onChange(event) {
      let value = event.target.value;
      this.userOnlineTigger = false;
      this.userDirectTigger = false;

      if (value == '0') {
        this.userOnlineTigger = true;
      } else {
        this.userDirectTigger = true;
      }
    }
  },
  components: {
  },
}
</script>

<style lang="css" scoped>
</style>
