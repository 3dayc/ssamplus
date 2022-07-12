<template lang="html">
  <div class="smartApply">
    <div class="smartApplyTop">
      <div class="subTit noLine">
        <h3>수강신청</h3>
      </div>
      <!-- <div class="smartPrice">
        <span class="choicePrice">
          <strong class="lec"><em>수강료</em> 1,712,000 <span>원</span></strong>
          <strong class="book"><em>교재</em> 84,000 <span>원</span></strong>
          <strong class="delivery"><em>배송비</em> 9,000 <span>원</span></strong>
          <strong class="sale"><em>할인</em> 30,000 <span>원</span></strong>
          <strong class="total"><em>예상 결제 금액</em>1,805,000 <span>원</span></strong>
        </span>
        <span class="btn" v-if="!this.mobile">
          <button class="btnL redline">장바구니</button>
          <button class="btnL red">즉시결제</button>
        </span>
      </div> -->
      <div class="smartApplyInfo">
        <p class="guideBox info">수강신청 계획을 확인하고 결제할 수 있으며 장바구니에 보관할 수 있습니다.</p>
        1) 강좌를 취소하시면 해당 교재도 같이 취소됩니다. <br/>
        2) 교재가 필요 없는 경우 교재 취소를 클릭해주세요. <br/>
        3) 스마트 수강신청은 장바구니 버튼을 클릭하여 보관할 수 있습니다.
      </div>
    </div>
    <!---->
    <div class="basketContents">
      <!-- 강좌 -->
      <div class="basketSet sjcCase"><!-- 강좌일 경우 class sjcCase 추가 -->
        <div class="totalCheck">
          <span class="checkSet">
            <input type="checkbox" id="one0" />
            <label for="one0"><i></i><strong>강좌</strong></label>
          </span>
        </div>
        <ul>
          <!-- Loop -->
          <li>
            <span class="checkSet noLabel">
              <input type="checkbox" id="one" />
              <label for="one"><i></i></label>
            </span>
            <div class="gridSet">
              <div class="gridItem tL">
                <em class="iLocSet online">온라인</em><em class="iPro">패키지</em><em class="iSet">2021</em>
                <strong class="tit">[교육학 김현] 연간쌤팩 베이직</strong>
              </div>
              <span class="gridItem col2 tR">
                <span class="price"><del>193,000</del><em>10<b>%</b></em><strong>2,712,000<i>원</i></strong> </span>
              </span>
            </div>
            <button class="btnDelete">삭제</button>
          </li>
          <!-- //Loop -->
          <li>
            <span class="checkSet noLabel">
              <input type="checkbox" id="one" />
              <label for="one"><i></i></label>
            </span>
            <div class="gridSet">
              <div class="gridItem tL">
                <em class="iLocSet">학원</em><em class="iPro">단과</em><em class="iSet">2021</em>
                <strong class="tit">[교육학 김현] 연간쌤팩 베이직</strong>
              </div>
              <span class="gridItem col2 tR">
                <span class="price"><del>193,000</del><em>10<b>%</b></em><strong>2,712,000<i>원</i></strong> </span>
              </span>
            </div>
            <button class="btnDelete">삭제</button>
          </li>
        </ul>
        <div class="totalPrice"><em>합계</em><strong>1,712,000<i>원</i></strong></div>
      </div>
      <!-- //강좌 -->
      <!-- 교재 -->
      <div class="basketSet">
        <div class="totalCheck">
          <span class="checkSet">
            <input type="checkbox" id="one" />
            <label for="one"><i></i><strong>교재</strong></label>
          </span>
        </div>
        <ul>
          <!-- Loop -->
          <li>
            <span class="checkSet noLabel">
              <input type="checkbox" id="one" />
              <label for="one"><i></i></label>
            </span>
            <div class="gridSet">
              <span class="gridItem col1">
                <em class="iPro book">교재</em>
              </span>
              <div class="gridItem tL">
                <strong class="tit">그린키위 교육학 (그린편 상권)<em class="inComeDed">소득공제</em></strong>
              </div>
              <div class="priceDetInfo">
                <span class="gridItem col3">
                  <div class="countBoxArrow">
                    <span class="countTag">수량</span>
                    <select name="count">
                      <option value="1"selected="selected">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </span>
                <span class="gridItem col2 tR">
                  <span class="price"><del>193,000</del><strong>2,712,000<i>원</i></strong> </span>
                </span>
              </div>
            </div>
            <button class="btnDelete">삭제</button>
          </li>
          <!-- //Loop -->
          <li>
            <span class="checkSet noLabel">
              <input type="checkbox" id="one" />
              <label for="one"><i></i></label>
            </span>
            <div class="gridSet">
              <span class="gridItem col1">
                <em class="iPro book">교재</em>
              </span>
              <div class="gridItem tL widthLecCase">
                <strong class="tit">키위잼</strong>
              </div>
              <em class="info red">해당 교재는 강좌신청 시에만 1권을 구매할 수 있도록 제한됨</em>
              <span class="gridItem col2 tR">
                <span class="price"><del>193,000</del><em>10<b>%</b></em><strong>2,712,000<i>원</i></strong> </span>
              </span>
            </div>
            <button class="btnDelete">삭제</button>
          </li>
        </ul>
        <div class="totalPrice"><em>합계</em><strong>1,712,000<i>원</i></strong></div>
      </div>
      <!-- //교재 -->
    </div>
    <!--//-->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SmartApply',
  components: {
  },
  data() {
    return {
      currentTab: 0,
    }
  },
}
</script>
