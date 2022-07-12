<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>포함교재 검색 - 사용자 정의교재</h1>
      <span class="supTxt">* 사용자 정의교재에 포함시킬 교재를 선택할 수 있습니다.</span>
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
                    <input type="text" placeholder="교재명, 저자 검색" />
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
                  <col width="150px;" span="2">
                  <col width="120px;">
                  <col>
          				<col width="100px;"> 
          			</colgroup>
          			<thead>
          				<tr>
          					<th scope="col" colspan="2">도서코드</th>
          					<th scope="col">과목</th>
          					<th scope="col">선생님</th>
          					<th scope="col">교재명</th>
          					<th scope="col">정가</th>
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
                    <td>a1520B00008</td>
          					<td>a1520B00008</td>
                    <td>영어</br>류지원</td>
                    <td class="tL">류지원 영어교육학 기출문제집</td>
                    <td>15,000원</td>
          				</tr>
          				<!--//Loop-->
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td>a1520B00008</td>
          					<td>a1520B00008</td>
                    <td>영어</br>류지원</td>
                    <td class="tL">류지원 영어교육학 기출문제집</td>
                    <td>15,000원</td>
          				</tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td>a1520B00008</td>
          					<td>a1520B00008</td>
                    <td>영어</br>류지원</td>
                    <td class="tL">류지원 영어교육학 기출문제집</td>
                    <td>15,000원</td>
          				</tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td>a1520B00008</td>
          					<td>a1520B00008</td>
                    <td>영어</br>류지원</td>
                    <td class="tL">류지원 영어교육학 기출문제집</td>
                    <td>15,000원</td>
          				</tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td>a1520B00008</td>
          					<td>a1520B00008</td>
                    <td>영어</br>류지원</td>
                    <td class="tL">류지원 영어교육학 기출문제집</td>
                    <td>15,000원</td>
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
                <col width="150px" span="2">
                <col width="120px;">
                <col>
                <col width="120px;">
                <col width="60px;">
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">도서코드</th>
                  <th scope="col">과목</th>
                  <th scope="col">선생님</th>
                  <th scope="col">교재명</th>
                  <th scope="col" colspan="2">정가</th>
                </tr>
              </thead>
              <tbody>
                <!--Loop-->
                <tr>
                  <td>a1520B00008</td>
                  <td>a1520B00008</td>
                  <td>영어</br>류지원</td>
                  <td class="tL">류지원 영어교육학 기출문제집</td>
                  <td>15,000원</td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk5">
                      <label for="chk5"><i></i></label>
                    </span>
                  </td>
                </tr>
                <!--//Loop-->
                <tr>
                  <td>a1520B00008</td>
                  <td>a1520B00008</td>
                  <td>영어</br>류지원</td>
                  <td class="tL">류지원 영어교육학 기출문제집</td>
                  <td>15,000원</td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk5">
                      <label for="chk5"><i></i></label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>a1520B00008</td>
                  <td>a1520B00008</td>
                  <td>영어</br>류지원</td>
                  <td class="tL">류지원 영어교육학 기출문제집</td>
                  <td>15,000원</td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk5">
                      <label for="chk5"><i></i></label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>a1520B00008</td>
                  <td>a1520B00008</td>
                  <td>영어</br>류지원</td>
                  <td class="tL">류지원 영어교육학 기출문제집</td>
                  <td>15,000원</td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk5">
                      <label for="chk5"><i></i></label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>a1520B00008</td>
                  <td>a1520B00008</td>
                  <td>영어</br>류지원</td>
                  <td class="tL">류지원 영어교육학 기출문제집</td>
                  <td>15,000원</td>
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
  name: 'LectureSearchCustomBook',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>
