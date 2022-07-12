<template lang="html">
  <div>
    <div v-if="this.mobile" class="mobileLnb">
      <MobileSnb />
    </div>
    <!-- container -->
    <div id="container">
    <section>
      <PcSnb v-if="!this.mobile" />
      <!-- content -->
      <div class="content">
      <article>
        <!-- page layout -->
        <div class="myInfoAddress">
          <!-- 서브 타이틀 -->
          <div class="subTit">
            <h3>배송지 정보</h3>
          </div>
          <!-- //서브 타이틀 -->
          <div class="addressSetting">
            <h4>
              기본 배송지
              <em>※ 최근 배송지를 표시합니다</em>
            </h4>
            <div class="boardWrite">
              <dl>
                <dt>수령인(이름)</dt>
                <dd>
                  <input type="text" value="홍길동" />
                </dd>
              </dl>
              <dl class="phone">
                <dt>연락처</dt>
                <dd>
                  <input type="text" placeholder="- (하이픈)을 제외하고 입력" value="010-0000-0000" />
                </dd>
              </dl>
              <dl>
                <dt>주소</dt>
                <dd>
                  <div class="addressSet">
                    <!-- <div @click="agencyOKTrigger = true">
                      <span v-if="!this.addressRecord">[00000] 서울특별시 마포구 상암동</span>
                      <p v-if="addressRecord">[00000] 서울특별시 마포구 상암동</p>
                    </div>
                    <input type="text" placeholder="행복빌라1동 1011호" v-if="addressRecord" />
                  </div> -->
                    <div class="addressArea">
                      <!-- <span>[00000] 서울특별시 마포구 상암동</span> -->
                      <p>[00000] 서울특별시 마포구 상암동</p><span>우편번호</span>
                    </div>
                    <input type="text" placeholder="행복빌라1동 1011호"/>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
          <!-- 상세 버튼영역 -->
          <div class="boardBtn noLine">
            <button class="btnL line">취소</button>
            <button class="btnL">확인</button>
          </div>
          <!-- //상세 버튼영역 -->
        </div>
        <!-- //page layout -->
      </article>
      </div>
      <!-- //content -->
    </section>
    </div>
    <!-- //container -->

    <!-- 우편번호 검색 예시  -->
    <Popup v-if='agencyOKTrigger' @close="agencyOKTrigger = false" class="agencyOKPop">
      <template slot="modalbody">
        <img :src="require(`@/assets/images/img_agencyOK2.png`)" alt="" @click="agencyOKTrigger = false; addressRecord = true" />
      </template>
    </Popup>
    <!-- //우편번호 검색 예시 -->
  </div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MyInfoAddress',
  components: {
  },
  data() {
    return {
      addressRecord: false,
      agencyOKTrigger: false
    }
  },
  mounted() {
  },
}
</script>
