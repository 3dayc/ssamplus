<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>강의검색</h1>
      <span class="supTxt">* 무료강의로 등록할 강좌 및 강의를 선택할 수 있습니다.</span>
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
                      <select name="" id="" disabled>
                        <option value="no" class="label">인강</option>
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
                        <option value="" selected>중국어</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">선생님</option>
                        <option value="" selected>장영희</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="" disabled>
                        <option value="no" class="label">강좌유형</option>
                        <option value="" selected>단과</option>
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
                  <col width="80">
                  <col width="100">
                  <col width="120">
                  <col width="120">
                  <col>
                  <col width="180">
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">선택</th>
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
                    <td><button class="btnS">선택</button></td>
                    <td>인강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>50,000원</td>
                  </tr>
                  <!--//Loop-->
                  <tr>
                    <td><button class="btnS">선택</button></td>
                    <td>인강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>50,000원</td>
                  </tr>
                  <tr>
                    <td><button class="btnS">선택</button></td>
                    <td>인강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>50,000원</td>
                  </tr>
                  <tr>
                    <td><button class="btnS">선택</button></td>
                    <td>인강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>50,000원</td>
                  </tr>
                  <tr>
                    <td><button class="btnS">선택</button></td>
                    <td>인강</td>
                    <td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21.1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>50,000원</td>
                  </tr>
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
            <strong>강의 정보</strong>
            <span class="right">
              <button class="btnM green">완료</button>
              <button class="btnM gray">취소</button>
            </span>
          </h3>
          <div class="tls subGreen">
            <table>
              <colgroup>
                <col width="120">
                <col width="80">
                <col width="*">
                <col width="180">
                <col width="100">
                <col width="150">
                <col width="60">
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">카테고리</th>
                  <th scope="col">회차</th>
                  <th scope="col">강의 제목</th>
                  <th scope="col">파일명</th>
                  <th scope="col">시간</th>
                  <th scope="col">직강일(업데이트일)</th>
                  <th scope="col">선택</th>
                </tr>
              </thead>
              <tbody>
                <!--Loop-->
                <tr>
                  <td>중국철학</td>
                  <td>1강</td>
                  <td class="tL">중국철학의 기원</td>
                  <td>21ks_ysh_210301</td>
                  <td>27:35</td>
                  <td>2021-01-01(월)</td>
                  <td>
                    <span class="radioSet noLabel">
                      <input type="radio" name="chka2l">
                      <label for="chka2l"><i></i></label>
                    </span>
                  </td>
                </tr>
                <!--//Loop-->
                <tr>
                  <td>중국철학</td>
                  <td>1강</td>
                  <td class="tL">중국철학의 기원</td>
                  <td>21ks_ysh_210301</td>
                  <td>27:35</td>
                  <td>2021-01-01(월)</td>
                  <td>
                    <span class="radioSet noLabel">
                      <input type="radio" name="chka2l">
                      <label for="chka2l"><i></i></label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>중국철학</td>
                  <td>1강</td>
                  <td class="tL">중국철학의 기원</td>
                  <td>21ks_ysh_210301</td>
                  <td>27:35</td>
                  <td>2021-01-01(월)</td>
                  <td>
                    <span class="radioSet noLabel">
                      <input type="radio" name="chka2l">
                      <label for="chka2l"><i></i></label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>중국철학</td>
                  <td>1강</td>
                  <td class="tL">중국철학의 기원</td>
                  <td>21ks_ysh_210301</td>
                  <td>27:35</td>
                  <td>2021-01-01(월)</td>
                  <td>
                    <span class="radioSet noLabel">
                      <input type="radio" name="chka2l">
                      <label for="chka2l"><i></i></label>
                    </span>
                  </td>
                </tr>
                <!-- 데이터 없을 경우 -->
                <tr style="display:none;"><td colspan="8" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
  name: 'LectureSearch',
  data() {
    return {

    }
  },
  components: {
  }
}
</script>
