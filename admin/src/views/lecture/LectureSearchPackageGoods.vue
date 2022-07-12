<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>포함상품 검색</h1>
      <span class="supTxt">* 패키지에 포함할 상품(학습기기, 굿즈)을 검색 및 선택할 수 있습니다. </span>
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
                        <option value="no" class="label">분류</option>
                        <option value="">노트북</option>
                        <option value="">태블릿</option>
                        <option value="">스마트폰</option>
                        <option value="">기타</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <input type="text" placeholder="상품명, 상품번호 검색" />
                    <button class="btnSearch">검색</button>
                  </span>
                </div>
                <div>
                  <button class="btnRefresh">초기화</button>
                </div>
              </div>
              <span class="checkSet">
                <input type="checkbox" id="sorting">
                <label for="sorting"><i></i>현재 오픈된 데이터만 조회</label>
              </span>
            </div>
          </div>
          <!-- 검색조건 -->
          <!-- 검색결과 -->
          <div class="chListArea">
            <div class="tls subBrown">
              <table>
                <colgroup>
                  <col width="60px;">
                  <col>
                  <col width="150px;">
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col" colspan="2">상품명</th>
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
                    <td class="tL">Lg gram</td>
                    <td>1,449,000</td>
                  </tr>
                  <!--//Loop-->
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td class="tL">갤럭시 탭A 10.1</td>
                    <td>330,000</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td class="tL">갤럭시 S21 울트라</td>
                    <td>990,000</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td class="tL">교육학 김현+애플 아이패드</td>
                    <td>850,000</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk5">
                        <label for="chk5"><i></i></label>
                      </span>
                    </td>
                    <td class="tL">갤럭시 북 FLEX 알파</td>
                    <td>1,256,000</td>
                  </tr>
                  <!-- 데이터 없을 경우 -->
                  <tr style="display:none;"><td colspan="3" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
          <div class="tls subGreen wHalf">
            <table>
              <colgroup>
                <col>
                <col width="130">
                <col width="80">
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">대상</th>
                  <th scope="col" colspan="2">정가</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Total</th>
                  <td colspan="2">1,320,000원</td>
                </tr>
              </tfoot>
              <tbody>
                <!--Loop--> 
                <tr>
                  <td class="tL">갤럭시 탭A 10.1</td>
                  <td>330,000원</td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk21">
                      <label for="chk21"><i></i></label>
                    </span>
                  </td>
                </tr>
                <!--//Loop-->
                <tr>
                  <td class="tL">갤럭시 S21 울트라</td>
                  <td>990,000원</td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk22" checked>
                      <label for="chk22"><i></i></label>
                    </span>
                  </td>
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
  name: 'LectureSearchPackage',
  data() {
    return {

    }
  },
  components: {
  }
}
</script>
