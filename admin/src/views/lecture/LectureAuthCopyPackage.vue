<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>권한 불러오기</h1>
      <span class="supTxt">* 타 강좌를 검색하여 동일한 권한을 불러올 수 있습니다.</span>
      <strong class="right boxGray fBlue">장영희 | 2021 완전정복 쌤팩 – 임고생 필승전략 강의 | 정상가 (1,570,000원)</strong>
    </div>
    <div class="winContent">
      <div class="choiceStyle">
        <div class="chSearch">
          <!-- 검색조건 -->
          <div class="boardTop">
            <div class="listSearch left">
              <div class="back">
                <div class="bdLine">
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">직/인강</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">연도</option>
                        <option value="">2021</option>
                        <option value="">2020</option>
                        <option value="">2019</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">과목</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">선생님</option>
                        <option value="">장영희</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">강좌유형</option>
                        <option value="">단과</option>
                        <option value="">패키지</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <input type="text" placeholder="강좌명, 강좌번호 검색" />
                    <button class="btnSearch">검색</button>
                  </span>
                </div>
                <div>
                  <button class="btnRefresh">초기화</button>
                  <span class="checkSet">
                    <input type="checkbox" id="sorting">
                    <label for="sorting"><i></i>현재 오픈된 데이터만 조회</label>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <!-- //검색조건 -->
          <!-- 검색결과 -->
          <div class="chListArea">
            <div class="tls subBrown">
              <table>
                <colgroup>
                  <col width="120">
                  <col width="80">
                  <col width="120">
                  <col width="120">
                  <col width="500">
                  <col width="150">
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">권한보기</th>
                    <th scope="col">직/인강</th>
                    <th scope="col">강좌번호</th>
                    <th scope="col">선생님</th>
                    <th scope="col">강좌명</th>
                    <th scope="col">수강료</th>
                  </tr>
                </thead>
                <tbody>
                  <!--Loop-->
                  <tr>
                    <td><button class="btnS line">권한보기</button></td>
                    <td>직강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td><button class="btnS line">권한보기</button></td>
                    <td>인강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 3~4월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td><button class="btnS line">권한보기</button></td>
                    <td>직강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 5~6월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td><button class="btnS line">권한보기</button></td>
                    <td>인강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td><button class="btnS line">권한보기</button></td>
                    <td>직강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 3~4월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>300,000</td>
                  </tr>
                  <!--//Loop-->
                  <!-- 데이터 없을 경우 -->
                  <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
                  <!-- //데이터 없을 경우 -->
                </tbody>
              </table>
            </div>
          </div>
          <!-- //검색결과 -->
        </div>
        <!-- 선택내역 -->
        <div class="chView">
          <h3>
            <strong>권한 보기</strong>
            <span class="right">
              <button class="btnM green">불러오기</button>
              <button class="btnM gray">취소</button>
            </span>
          </h3>
          <div class="tls subGreen w60p">
            <table>
              <colgroup>
                <col width="80">
                <col width="300">
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
                <!--Loop-->
                <tr>
                  <td>회원</td>
                  <td class="tL">일반회원</td>
                  <td>10%</td>
                </tr>
                <!--//Loop-->
                <tr>
                  <td>회원</td>
                  <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>회원</td>
                  <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>상품</td>
                  <td class="tL">갤럭시 북 FLEX 알파</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>보너스</td>
                  <td class="tL">[21 5-6월]<br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>보너스</td>
                </tr>
                <!-- 데이터 없을 경우 -->
                <tr style="display:none;"><td colspan="3" class="noneData">등록된 데이터가 없습니다.</td></tr>
                <!-- //데이터 없을 경우 -->
              </tbody>
            </table>
          </div>
        </div>
        <!-- //선택내역 -->
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'LectureAuthCopyPackage',
  data() {
    return {

    }
  },
  components: {
  }
}
</script>
