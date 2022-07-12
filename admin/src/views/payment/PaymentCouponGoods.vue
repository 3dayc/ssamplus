<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>적용상품</h1>
      <span class="supTxt">* 쿠폰을 적용할 상품을 선택할 수 있습니다.</span>
      <div class="btnArea">
        <button class="btnM green">선택</button>
        <button class="btnM ml10">취소</button>
      </div>
    </div>
    <div class="winContent">
      <div class="choiceStyle">
        <div class="chSearch">
          <div class="boardTop">
            <div class="listSearch left">
              <div class="back">
                <div class="bdLine">
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">상품분류</option>
                        <option value="">노트북</option>
                        <option value="">태블릿</option>
                        <option value="">스마트폰</option>
                        <option value="">기타</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <input type="text" placeholder="상품명 검색" />
                    <button class="btnSearch">검색</button>
                  </span>
                </div>
                <div>
                  <span class="checkSet">
                    <input type="checkbox" checked>
                    <label for=""><i></i>현재 오픈된 데이터만 조회</label>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="chListArea">
            <div class="tls subBrown">
              <table>
                <colgroup>
                  <col width="60"/>
                  <col width="*"/>
                  <col width="120"/>
                </colgroup>
                <thead>
                  <tr>
                    <th colspan="2">상품명</th>
                    <th>판매가</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" />
                        <label for=""><i></i></label>
                      </span>
                    </td>
                    <td class="tL">LG gram</td>
                    <td>1,449,000</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" />
                        <label for=""><i></i></label>
                      </span>
                    </td>
                    <td class="tL">갤럭시 탭A 10.1</td>
                    <td>330,000</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" />
                        <label for=""><i></i></label>
                      </span>
                    </td>
                    <td class="tL">갤럭시 S21 울트라</td>
                    <td>990,000</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" />
                        <label for=""><i></i></label>
                      </span>
                    </td>
                    <td class="tL">교육학 김현+애플 아이패드</td>
                    <td>850,000</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" />
                        <label for=""><i></i></label>
                      </span>
                    </td>
                    <td class="tL">갤럭시 북 FLEX 알파</td>
                    <td>1,256,000</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" />
                        <label for=""><i></i></label>
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
        </div>
        <div class="chView">
          <h3><strong>선택내역</strong></h3>
          <div class="tls subGreen">
            <!-- 2021-07-06 -->
            <table>
              <colgroup>
                <col width="*"/>
                <col width="60"/>
              </colgroup>
              <thead>
                <tr>
                  <th>상품명</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="tL">LG gram</td>
                  <td><button class="btnDelete">삭제</button></td>
                </tr>
                <tr>
                  <td class="tL">갤럭시 탭A 10.1</td>
                  <td><button class="btnDelete">삭제</button></td>
                </tr>
                <tr>
                  <td class="tL">갤럭시 S21 울트라</td>
                  <td><button class="btnDelete">삭제</button></td>
                </tr>
                <tr>
                  <td class="tL">교육학 김현+애플 아이패드</td>
                  <td><button class="btnDelete">삭제</button></td>
                </tr>
                <tr>
                  <td class="tL">갤럭시 북 FLEX 알파</td>
                  <td><button class="btnDelete">삭제</button></td>
                </tr>
                <!-- 데이터 없을 경우 -->
                <tr style="display:none;"><td colspan="2" class="noneData">등록된 데이터가 없습니다.</td></tr>
                <!-- //데이터 없을 경우 -->
              </tbody>
            </table>
            <!-- //2021-07-06 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PaymentCouponGoods',
  data() {
    return {
      popTrigger: false,
      closeBtn: false,
    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>
