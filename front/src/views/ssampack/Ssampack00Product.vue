<template> <!--  lang="html" -->
  <div>
    <!-- 상품선택 -->
    <div class="product-wrap">
      <!-- 2023연간쌤팩+프리미엄 -->
      <div class="product productYsp" :class="{ active: tabToggle === 1 }">
        <h6>
          <img
            :src="require(`@/assets/images/ssampackEvent/img_productYsp_title.png`)"
            alt=""
          />
        </h6>
        <div class="tab_container">
          <ul class="product_tabs">
            <li>
              <button :class="{ on: toggleBtn1 === 0 }" @click.prevent="toggleBtn1 = 0">서울학원 강의</button>
            </li>
            <li>
              <button :class="{ on: toggleBtn1 === 1 }" @click.prevent="toggleBtn1 = 1">동영상 강의</button>
            </li>
          </ul>
          <div id="tab11">
            <div class="courseSelectWrap">
              <dl>
                <dt>과목</dt>
                <dd>
                  <select name="div_cd" id="left_div_cd">
                    <option value="0101">교육학</option>
                    <option value="0201">유아</option>
                    <option value="0301">전공국어</option>
                    <option value="0305">전공음악</option>
                    <option value="0310">전공미술</option>
                    <option value="0309">전공체육</option>
                    <option value="0307">전공중국어</option>
                    <option value="0308">전공일본어</option>
                    <option value="0318">전공한문</option>
                    <option value="0304">전공가정</option>
                    <option value="0331">전문상담</option>
                    <option value="0405">전공역사</option>
                    <option value="0403">전공생물</option>
                    <option value="0402">전공화학</option>
                    <option value="0501">보건</option>
                    <option value="0502">특수</option>
                  </select>
                </dd>
              </dl>
              <dl>
                <dt>선생님</dt>
                <dd>
                  <select name="left_prof_seq" id="left_prof_seq">
                    <option value="">선생님 선택</option>
                    <option value="1">김현(연간)</option>
                    <option value="60">김현(3~11월)</option>
                    <option value="2">권구현(연간)</option>
                    <option value="61">권구현(3~11월)</option>
                    <option value="3">윤중샘(연간)</option>
                    <option value="62">윤중샘(3~10월)</option>
                  </select>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <button class="btn_Add"><i></i><span>선택</span></button>
      </div>
      <!-- 2023연간쌤팩+프리미엄 //-->
      <!-- 2023쌤팩 -->
      <div class="product productYs" :class="{ active: tabToggle === 0 }">
        <h6>
          <img
            :src="require(`@/assets/images/ssampackEvent/img_productYs_title.png`)"
            alt=""
          />
        </h6>
        <div class="tab_container">
          <ul class="product_tabs">
            <li>
              <button :class="{ on: toggleBtn2 === 0 }" @click.prevent="toggleBtn2 = 0">서울학원 강의</button>
            </li>
            <li>
              <button :class="{ on: toggleBtn2 === 1 }" @click.prevent="toggleBtn2 = 1">동영상 강의</button>
            </li>
          </ul>
          <div id="tab21">
            <div class="courseSelectWrap">
              <dl>
                <dt>과목</dt>
                <dd>
                  <select name="div_cd" id="right_div_cd">
                    <option value="0101">교육학</option>
                    <option value="0201">유아</option>
                    <option value="0301">전공국어</option>
                    <option value="0305">전공음악</option>
                    <option value="0310">전공미술</option>
                    <option value="0309">전공체육</option>
                    <option value="0307">전공중국어</option>
                    <option value="0308">전공일본어</option>
                    <option value="0318">전공한문</option>
                    <option value="0304">전공가정</option>
                    <option value="0331">전문상담</option>
                    <option value="0405">전공역사</option>
                    <option value="0403">전공생물</option>
                    <option value="0402">전공화학</option>
                    <option value="0501">보건</option>
                    <option value="0502">특수</option>
                  </select>
                </dd>
              </dl>
              <dl>
                <dt>선생님</dt>
                <dd>
                  <select name="right_prof_seq" id="right_prof_seq">
                    <option value="">선생님 선택</option>
                    <option value="1">김현(연간)</option>
                    <option value="60">김현(3~11월)</option>
                    <option value="2">권구현(연간)</option>
                    <option value="61">권구현(3~11월)</option>
                    <option value="3">윤중샘(연간)</option>
                    <option value="62">윤중샘(3~10월)</option>
                  </select>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <button class="btn_Add"><i></i><span>선택</span></button>
      </div>
      <!-- 2023쌤팩 //-->
      <!-- 2023쌤팩+프리미엄플러스 -->
      <div class="product productYspp" :class="{ active: tabToggle === 2 }">
        <h6>
          <img
            :src="require(`@/assets/images/ssampackEvent/img_productYspp_title.png`)"
            alt=""
          />
        </h6>
        <div class="tab_container">
          <ul class="product_tabs">
            <li>
              <button :class="{ on: toggleBtn3 === 0 }" @click.prevent="toggleBtn3 = 0">서울학원 강의</button>
            </li>
            <li>
              <button :class="{ on: toggleBtn3 === 1 }" @click.prevent="toggleBtn3 = 1">동영상 강의</button>
            </li>
          </ul>
          <div id="tab21">
            <div class="courseSelectWrap">
              <dl>
                <dt>과목</dt>
                <dd>
                  <select name="div_cd" id="div_cd03">
                    <option value="0101">교육학</option>
                    <option value="0201">유아</option>
                    <option value="0301">전공국어</option>
                    <option value="0305">전공음악</option>
                    <option value="0310">전공미술</option>
                    <option value="0309">전공체육</option>
                    <option value="0308">전공일본어</option>
                    <option value="0318">전공한문</option>
                    <option value="0304">전공가정</option>
                    <option value="0331">전문상담</option>
                    <option value="0405">전공역사</option>
                    <option value="0403">전공생물</option>
                    <option value="0402">전공화학</option>
                    <option value="0501">보건</option>
                    <option value="0502">특수</option>
                  </select>
                </dd>
              </dl>
              <dl>
                <dt>선생님</dt>
                <dd>
                  <select name="prof_seq03" id="prof_seq03">
                    <option value="">선생님 선택</option>
                    <option value="7">송헌/김준팀(연간)</option>
                    <option value="8">박노송(연간)</option>
                    <option value="65">박노송(3~11월)</option>
                  </select>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <button class="btn_Add"><i></i><span>선택</span></button>
      </div>
      <!-- 2023쌤팩+프리미엄플러스 //-->
    </div>
    <div class="product-list-notice">
      * 강좌 추가 신청을 원하시면 다시 선택해 주세요.
    </div>
    <!-- 주문내역&금액 시작// -->
    <div id="orderArea">
      <div class="wrap_order">
        <form id="frmCart" name="frmCart" method="post">
          <input type="hidden" id="intGoodsSeq" name="intGoodsSeq" value="2|1742|" />
          <input type="hidden" id="intGoodsSeq" name="intGoodsSeq" value="1|10329|" />
        </form>
        <button type="button" class="btn_folder">
          <span class="icon"></span>
        </button>
        <div class="left">
          <div class="inner scrollbar-inner">
            <dl class="order_list">
              <dt>서울학원강의</dt>
              <dd>
                <strong class="tit_study">[교육학 김현] [직영상반]연간쌤팩(h)</strong
                ><button class="btn_del">삭제</button>
              </dd>
              <dd>
                <strong class="tit_study">[교육학 김현] 쌤팩 프리미엄(h)</strong
                ><button class="btn_del">삭제</button>
              </dd>
            </dl>
          </div>
          <ul class="order_guide">
            <!-- <li><span class="point">★교육학 5% 추가할인★ 기간한정 이벤트(~1/31 까지)<br>전공 연간쌤팩+교육학 연간쌤팩 동시 신청 시, 교육학 연간쌤팩 수강료 추가 5%할인</span></li> -->
            <li>결제 단계에서 보유하신 쿠폰 적용 시 금액이 상이 할 수 있습니다.</li>
            <li>교재 배송비는 결제 단계에서 표기 됩니다.</li>
          </ul>
        </div>
        <div class="right">
          <dl class="order_price">
            <dt>강좌</dt>
            <dd>1,723,000원</dd>
          </dl>
          <dl class="order_price">
            <dt>할인</dt>
            <dd class="sale">0원</dd>
          </dl>
          <div class="total_price">총 금액 <strong>1,723,000</strong> 원</div>
          <button class="btn_submit">장바구니 담기</button>
        </div>
      </div>
    </div>
    <!-- //주문내역&금액 끝 -->
  </div>
</template>

<script>
import Mixin from "@/plugins/mixins/Mixins.js";

export default {
  mixins: [Mixin],
  name: "Ssampack00Product",
  data() {
    return {
      toggleBtn1: 0,
      toggleBtn2: 0,
      toggleBtn3: 0,
    };
  },
  props: {
    tabToggle: Number,
  }
};
</script>
