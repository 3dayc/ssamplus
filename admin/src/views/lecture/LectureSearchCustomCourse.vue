<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>포함강좌 검색 - 사용자 정의강좌</h1>
      <span class="supTxt">* 사용자 정의강좌에 포함시킬 강좌를 선택할 수 있습니다.</span>
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
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">강좌유형</option>
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
                  <span class="checkSet ml10">
                    <input type="checkbox" checked="checked">
                    <label for=""><i></i>현재 오픈된 데이터만 조회</label>
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
                  <col width="60px;">
                  <col width="100">
                  <col width="150px;" span="2">
                  <col>
          				<col width="100px;"> 
          			</colgroup>
          			<thead>
          				<tr>
          					<th scope="col" colspan="2">직/인강</th>
          					<th scope="col">강좌번호</th>
          					<th scope="col">선생님</th>
          					<th scope="col">강좌명</th>
          					<th scope="col">수강료</th>
          				</tr>
          			</thead>
          			<tbody>
          				<!--Loop-->
          				<tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td>교재</td>
          					<td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>50,000원</td>
          				</tr>
          				<!--//Loop-->
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td>교재</td>
          					<td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>50,000원</td>
          				</tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td>교재</td>
          					<td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>50,000원</td>
          				</tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td>프린트</td>
          					<td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                    <td>50,000원</td>
          				</tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td>교재</td>
          					<td>12345</td>
                    <td>장영희</td>
                    <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
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
            <strong>선택내역</strong>
            <span class="right">
              <button class="btnM green" @click="toastPop('error', '선택된 강좌가 없습니다.')">완료</button>
              <button class="btnM gray">취소</button>
              <button class="btnM line">선택삭제</button>
            </span>
          </h3>
          <div class="tls subGreen">
            <table>
              <colgroup>
                <col width="100">
                <col width="150px;" span="2">
                <col>
                <col width="120px;">
                <col width="60px;">
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">직/인강</th>
                  <th scope="col">강좌번호</th>
                  <th scope="col">선생님</th>
                  <th scope="col">강좌명</th>
                  <th scope="col" colspan="2">수강료</th>
                </tr>
              </thead>
              <tbody>
                <!--Loop-->
                <tr>
                  <td>직강</td>
                  <td>12345</td>
                  <td>장영희</td>
                  <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>50,000원</td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk5">
                      <label for="chk5"><i></i></label>
                    </span>
                  </td>
                </tr>
                <!--//Loop-->
                <tr>
                  <td>인강</td>
                  <td>12345</td>
                  <td>장영희</td>
                  <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>50,000원</td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk5">
                      <label for="chk5"><i></i></label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>직강</td>
                  <td>12345</td>
                  <td>장영희</td>
                  <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>50,000원</td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk5">
                      <label for="chk5"><i></i></label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>인강</td>
                  <td>12345</td>
                  <td>장영희</td>
                  <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>50,000원</td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk5">
                      <label for="chk5"><i></i></label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>직강</td>
                  <td>12345</td>
                  <td>장영희</td>
                  <td class="tL">[21 1~2월] <em class="iSet orange">제작완료</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>50,000원</td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk5">
                      <label for="chk5"><i></i></label>
                    </span>
                  </td>
                </tr>
                <!-- 데이터 없을 경우 -->
                <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
  name: 'LectureSearchCustomCourse',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>
