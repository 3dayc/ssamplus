<template lang="html">
  <div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div class="packageCoursePremiumInfo">
          <!-- 강좌 기본정보 -->
          <div class="subTit cpRight">
            <h3>강좌 기본정보</h3>
            <div class="grayBgBox">
              <span class="checkSet ml10">
                <input type="checkbox" checked="checked">
                <label for=""><i></i>신규개설 표시</label>
              </span>
            </div>
            <button class="btnS line ml10" @click="LectureSearchPlus()">프리미엄 플러스 패키지 생성</button>
            <span class="right">
              <span class="grayBgBox">수강인원 (유/무료) <strong class="fBlue ml5">50 (40/10)</strong></span>
              <em>2501  |  장영희  | <em class="iSet hotpink">프리미엄</em> 2021 완전정복 쌤팩</em> 강좌입니다.
            </span><!-- 2021-07-14 수정 -->
          </div>
          <div class="tvs">
            <table>
              <colgroup>
                <col width="160"/>
                <col width="40%"/>
                <col width="160"/>
                <col width="*"/>
              </colgroup>
              <tbody>
                <tr>
                  <th class="backBrown">수강유형 <sup>필수</sup></th>
                  <td>
                    <span class="radioSet">
                      <input type="radio" checked name="type"/>
                      <label for="type01"><i></i>온라인</label>
                    </span>
                    <span class="radioSet">
                      <input type="radio" name="type"/>
                      <label for="type02"><i></i>서울</label>
                    </span>
                    <span class="radioSet">
                      <input type="radio" name="type"/>
                      <label for="type03"><i></i>라이브 전용</label>
                    </span>
                  </td>
                  <th class="backBrown">노출여부 <sup>필수</sup></th>
                  <td>
                    <span class="labelToggleSet">
                      <input type="checkbox" id="hide">
                      <label for="hide">
                        <span>숨김</span>
                        <span>노출</span>
                      </label>
                    </span>
                    <span class="labelToggleSet long ml10">
                      <input type="checkbox" id="systemToggle">
                      <label for="systemToggle">
                        <span>강사시스템</span>
                        <span>강사시스템</span>
                      </label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>과목/선생님 <sup>필수</sup></th>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="no" class="label">과목 선택</option>
                        <option value="">교육학</option>
                        <option value="">유아</option>
                        <option value="">초등</option>
                        <option value="">국어</option>
                        <option value="">영어</option>
                        <option value="">수학</option>
                        <option value="">음악</option>
                        <option value="">미술</option>
                        <option value="">체육</option>
                        <option value="" selected>중국어</option>
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
                    <span class="selectSet ml10">
                      <select name="" id="">
                        <option value="no" class="label">선생님 선택</option>
                        <option value="" selected>장영희</option>
                      </select>
                    </span>
                  </td>
                  <th>강좌유형 <sup>필수</sup></th>
                  <td>
                    <div>
                      <span class="selectSet">
                        <select name="" id="">
                          <option value="no" class="label">강좌유형 선택</option>
                          <option value="" selected>이론강의</option>
                          <option value="">문제풀이</option>
                          <option value="">모의고사</option>
                          <option value="">면접실연</option>
                          <option value="">기타특강</option>
                        </select>
                      </span>
                      <!-- <span class="erMsg">필수항목 입니다.</span> -->
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>패키지명 <sup>필수</sup></th>
                  <td colspan="3"><input type="text" class="w60p" value="2021 완전정복 쌤팩 – 임고생 필승전랴 강의"/></td>
                </tr>
                <tr>
                  <th>한 줄 메시지 <sup>필수</sup></th>
                  <td colspan="3"><input type="text"/></td>
                </tr>
                <tr>
                  <th>강의 특징 <sup>필수</sup></th>
                  <td colspan="3"><textarea rows="4">에디터가 들어올 영역입니다.</textarea></td>
                </tr>
                <!-- 2021-12-02 수강혜택 컬럼 추가 -->
                <tr>
                  <th>수강혜택</th>
                  <td colspan="3"><textarea rows="4"></textarea></td>
                </tr>
                <!-- //2021-12-02 수강혜택 컬럼 추가 -->
              </tbody>
            </table>
          </div>
          <!-- //강좌 기본정보 -->
          <!-- 패키지 구성 -->
          <div class="subTit">
            <h3>패키지 구성</h3>
            <span class="ml20">
              <button class="btnS line" @click="[LectureSearchPackage(), showIncludePackList()]">단과검색</button>
              <button class="btnS line ml10" @click="[LectureSearchPackageGoods(), showIncludeGoodsList()]">상품검색</button>
            </span>
          </div>
          <!-- 포함강좌 -->
          <div class="tls mt10" v-if="includePackList">
            <table>
              <colgroup>
                <col width="120"/>
                <col width="100"/>
                <col width="100"/>
                <col width="*"/>
                <col width="260"/>
                <col width="100"/>
                <col width="140"/>
                <col width="200"/>
                <col width="120"/>
              </colgroup>
              <thead>
                <tr>
                  <th>정렬</th>
                  <th>강좌번호</th>
                  <th>선생님</th>
                  <th>강좌명/상품명</th>
                  <th>개강-종강일<br/><span class="fRed">* 미개강 강좌는 빨간 글씨로 표시됩니다</span></th>
                  <th>수강기간</th>
                  <th>수강료</th>
                  <th>판매가</th>
                  <th>수강권한</th>
                </tr>
              </thead>
              <tfoot>
                <tr class="gray">
                  <th colspan="6">Total</th>
                  <th class="fBold">628,000</th>
                  <th class="fBold halfUnit">
                    <span><input type="text" class="tR" value="314,000"></span>
                    <span class="unit">
                      <input type="text" class="tR" value="50.00">
                      <em>%</em>  
                    </span>
                  </th>
                  <td></td>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>
                    <button class="btnPosArrow">위로</button>
                    <button class="btnPosArrow down">아래로</button>
                  </td>
                  <td>12345</td>
                  <td>장영희</td>
                  <td class="tL">[21.1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>2021-03-01</td>
                  <td>70일</td>
                  <td>200,000</td>
                  <td>100,000 (↓50%)</td>
                  <td><button class="btnS line" @click="popupTrigger = true">권한보기</button></td>
                </tr>
                <tr>
                  <td>
                    <button class="btnPosArrow">위로</button>
                    <button class="btnPosArrow down">아래로</button>
                  </td>
                  <td>12345</td>
                  <td>장영희</td>
                  <td class="tL">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>2021-03-01</td>
                  <td>70일</td>
                  <td>200,000</td>
                  <td>100,000 (↓50%)</td>
                  <td><button class="btnS line" @click="popupTrigger = true">권한보기</button></td>
                </tr>
                <tr>
                  <td>
                    <button class="btnPosArrow">위로</button>
                    <button class="btnPosArrow down">아래로</button>
                  </td>
                  <td>12345</td>
                  <td>장영희</td>
                  <td class="tL">[21.1~2월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td class="fRed">2021-03-01</td>
                  <td>70일</td>
                  <td>228,000</td>
                  <td>114,000 (↓50%)</td>
                  <td><button class="btnS line" @click="popupTrigger = true">권한보기</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- //포함강좌 -->
          <!-- 포함상품 -->
          <div class="tls mt10 w80p" v-if="includeGoodsList">
          <table>
              <colgroup>
                <col width="120"/>
                <col width="200"/>
                <col width="*"/>
                <col width="200"/>
                <col width="120"/>
              </colgroup>
              <thead>
                <tr>
                  <th>정렬</th>
                  <th>상품번호</th>
                  <th>강좌명/상품명</th>
                  <th>수강료/정가</th>
                  <th>수강권한</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th colspan="3">Total</th>
                  <th class="fBold">1,342,000</th>
                  <td></td>
                </tr>
              </tfoot>
              <tbody>
                  <td>
                    <button class="btnPosArrow">위로</button>
                    <button class="btnPosArrow down">아래로</button>
                  </td>
                  <td>e1521a00001</td>
                  <td class="tL">갤럭시 탭A 10.1</td>
                  <td>352,000</td>
                  <td><button class="btnS line" @click="popupTrigger = true">권한보기</button></td>
                </tr>
                <tr>
                  <td>
                    <button class="btnPosArrow">위로</button>
                    <button class="btnPosArrow down">아래로</button>
                  </td>
                  <td>e1521a00001</td>
                  <td class="tL">갤럭시 S21 울트라</td>
                  <td>590,000</td>
                  <td><button class="btnS line" @click="popupTrigger = true">권한보기</button></td>
                </tr>
                <tr class="dYellow">
                  <td></td>
                  <td></td>
                  <td class="tL">프리미엄 추가금액</td>
                  <td>400,000원</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>  
          <!-- //포함상품 -->
          <!-- //패키지 구성 -->
          <!-- 패키지 추가정보 -->
          <div class="subTit">
            <h3>패키지 추가정보</h3>
          </div>
          <div class="tvs">
            <table>
              <colgroup>
                <col width="160"/>
                <col width="40%"/>
                <col width="160"/>
                <col width="*"/>
              </colgroup>
              <tbody>
                <tr>
                  <th>개강일</th>
                  <td>
                    <VCalendar class="calSet" v-model="date" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="예)2021-01-01" />
                      </template>
                    </VCalendar>
                  </td>
                  <th>제작년월 <sup>필수</sup></th>
                  <td>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="">2021년</option>
                      </select>
                    </span>
                    <span class="selectSet ml10">
                      <select name="" id="">
                        <option value="">1월</option>
                        <option value="">2월</option>
                        <option value="" selected>3월</option>
                        <option value="">4월</option>
                        <option value="">5월</option>
                        <option value="">6월</option>
                        <option value="">7월</option>
                        <option value="">8월</option>
                        <option value="">9월</option>
                        <option value="">10월</option>
                        <option value="">11월</option>
                        <option value="">12월</option>
                      </select>
                    </span>
                    <em> ~ </em>
                    <span class="selectSet">
                      <select name="" id="">
                        <option value="">1월</option>
                        <option value="">2월</option>
                        <option value="">3월</option>
                        <option value="" selected>4월</option>
                        <option value="">5월</option>
                        <option value="">6월</option>
                        <option value="">7월</option>
                        <option value="">8월</option>
                        <option value="">9월</option>
                        <option value="">10월</option>
                        <option value="">11월</option>
                        <option value="">12월</option>
                      </select>
                    </span>
                  </td>
                </tr>
                <tr>
                  <th>접수기간 <sup>필수</sup></th>
                  <td>
                    <span class="calDupSet">
                      <VCalendar class="calSet" v-model="date01" color="green">
                        <template v-slot="{ inputValue, togglePopover }">
                          <input :value="inputValue" @click="togglePopover()" readonly placeholder="예) 2021-01-01" value="2021-02-03" />
                        </template>
                      </VCalendar>
                      <span class="unit small ml5">
                        <input type="text" value="00" class="tR">
                        <em>시</em>
                      </span>
                      <em>~</em>
                      <VCalendar class="calSet" v-model="date02" color="green">
                        <template v-slot="{ inputValue, togglePopover }">
                          <input :value="inputValue" @click="togglePopover()" readonly placeholder="예) 2021-01-01" value="2021-03-03" />
                        </template>
                      </VCalendar>
                      <span class="unit small ml5">
                        <input type="text" value="24" class="tR">
                        <em>시</em>
                      </span>
                    </span>
                  </td>
                  <th>패키지 수강일수</th>
                  <td>
                    <span class="unit small"><input type="number"/><em>일</em></span>
                    <p class="infoMsg fGreen inBlock vMiddle ml10">* 수강유형 ‘온라인’ 패키지만 입력 가능합니다.<br/>* 포함 단과의 개강일이 모두 지난 경우만 입력 가능합니다.</p>
                  </td>
                </tr>
              <tr>
              <th>정상가 <sup>필수</sup></th>
              <td>
                <span class="mr10"> 
                  <span class="unit ml5">
                    <input type="text" class="tR" value="1,970,000" disabled>
                    <em>원</em>
                  </span>
                </span>
                <p class="infoMsg fRed inBlock vMiddle ml10">* 단과, 상품, 프리미엄 추가금액의 정가를 합산한 금액입니다</p>
              </td>
              <th>판매가 <sup>필수</sup></th>
              <td>
                <span>
                  <span class="unit">
                    <input type="text" class="tR ml5" value="1,656,000" disabled>
                    <em>원</em>
                  </span>
                  <span class="unit small ml10">
                    <input type="text" class="tR" value="16" disabled>
                    <em>%</em>
                  </span> 할인
                </span>
              </td>
              </tr>
                <tr>
                  <th>수강권한</th>
                  <td colspan="3">
                    <button class="btnS line" @click="LectureUserChoiceOnlinePackage()">회원권한</button>
                    <button class="btnS line ml5" @click="LectureGoodsChoicePackage()">상품권한</button>
                    <button class="btnS line ml5" @click="LectureBonusChoicePackage()">보너스권한</button>
                    <button class="btnS redline ml5" @click="LectureAuthCopyPackage()">권한 불러오기</button>
                    <div class="tls discountList">
                      <table>
                        <colgroup>
                          <col width="160">
                          <col width="260">
                          <col width="160">
                          <col width="160">
                          <col width="160">
                        </colgroup>
                        <thead>
                          <tr>
                            <th scope="col">구분</th>
                            <th scope="col">대상</th>
                            <th scope="col">할인율</th>
                            <th scope="col">할인금액</th>
                            <th scope="col">본 강좌 실결제금액</th>
                          </tr>
                        </thead>
                        <tbody>
                          <!--Loop-->
                          <tr>
                            <td>회원</td>
                            <td class="tL">일반회원</td>
                            <td>10%</td>
                            <td>125,600</td>
                            <td>1,130,400</td>
                          </tr>
                          <!--//Loop-->
                          <tr>
                            <td>회원</td>
                            <td class="tL">[21.1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                            <td>10%</td>
                            <td>125,600</td>
                            <td>1,130,400</td>
                          </tr>
                          <tr>
                            <td>강좌</td>
                            <td class="tL">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                            <td>10%</td>
                            <td>125,600</td>
                            <td>1,130,400</td>
                          </tr>
                          <tr>
                            <td>상품</td>
                            <td class="tL">갤럭시 북 FLEX 알파</td>
                            <td>10%</td>
                            <td>125,600</td>
                            <td>1,130,400</td>
                          </tr>
                          <tr>
                            <td>보너스</td>
                            <td class="tL">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                            <td>보너스</td>
                            <td>-</td>
                            <td>-</td>
                          </tr>
                          <!-- 데이터 없을 경우 -->
                          <tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
                          <!-- //데이터 없을 경우 -->
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- //패키지 추가정보 -->
          <!-- 관리 -->
          <div class="subTit">
            <h3>관리</h3>
          </div>
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

    <!-- Layer Popup -->
    <Popup v-if='popupTrigger' @close="popupTrigger = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>권한보기</h1>
        <span>* 패키지 포함강좌의 수강권한을 확인할 수 있습니다.<br/>보너스권한은 패키지에 동일하게 적용됩니다.</span>
      </div>
      <div slot="modalbody">
        <div class="tls">
          <table>
            <colgroup>
              <col width="80">
              <col width="*">
              <col width="80">
            </colgroup>
            <thead>
              <tr>
                <th>구분</th>
                <th>대상</th>
                <th>할인율</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>회원</td>
                <td class="tL">일반회원</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>강좌</td>
                <td class="tL">[21.1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>상품</td>
                <td class="tL">갤럭시 북 FLEX 알파</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>보너스</td>
                <td class="tL">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                <td>보너스</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Popup>
    <!-- //Layer Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PackageCoursePremiumInfo',
  data() {
    return {
      includePackList: false,
      includeGoodsList: false,
      date: '예)2021-01-01',
      date01: '2021-02-03',
      date02: '2021-03-03',
      popupTrigger: false,
      classValue: 'packageIncludeCourseAuthPop',
    }
  },
  methods: {
    showIncludePackList() {
      this.includePackList = !this.includePackList;
    },
    showIncludeGoodsList() {
      this.includeGoodsList = !this.includeGoodsList;
    },
    LectureSearchPlus() {
      let routeData = this.$router.resolve({name: 'LectureSearchPlus', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceSearchPlus', '_blank', `width=1100,height=900`);
    },
    LectureSearchPackage() {
      let routeData = this.$router.resolve({name: 'LectureUserChoice', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceSearchPackage', '_blank', `width=1100,height=900`);
    },
    LectureSearchPackageGoods() {
      let routeData = this.$router.resolve({name: 'LectureSearchPackageGoods', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceSearchPackageGoods', '_blank', `width=1100,height=900`);
    },
    LectureUserChoiceOnlinePackage() {
      let routeData = this.$router.resolve({name: 'LectureUserChoiceOnlinePackage', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceUserChoiceOnlinePackage', '_blank', `width=1100,height=900`);
    },
    LectureGoodsChoicePackage() {
      let routeData = this.$router.resolve({name: 'LectureGoodsChoicePackage', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceGoodsChoicePackage', '_blank', `width=1100,height=900`);
    },
    LectureBonusChoicePackage() {
      let routeData = this.$router.resolve({name: 'LectureBonusChoicePackage', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceBonusChoicePackage', '_blank', `width=1100,height=900`);
    },
    LectureAuthCopyPackage() {
      let routeData = this.$router.resolve({name: 'LectureAuthCopyPackage', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceAuthCopyPackage', '_blank', `width=1100,height=900`);
    },
  },
  components: {
  },

}
</script>

<style lang="css" scoped>
</style>
