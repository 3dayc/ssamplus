<template lang="html">
  <div>
    <div class="content">
      <article>
        <!-- page layout -->
        <div class="packageCoursePremiumMgt">
          <!-- 학원 프리미엄 패키지 수강혜택 -->
          <div class="subTit cpRight">
            <h3>학원 프리미엄 패키지 수강혜택</h3>
            <span class="right">
              <em>2501  |  장영희  | <em class="iSet hotpink">프리미엄</em> 2021 완전정복 쌤팩 + LG Gram</em> 강좌입니다.
            </span>
          </div>
          <div class="tvs">
            <table>
              <colgroup>
                <col width="160"/>
                <col width="*"/>
              </colgroup>
              <tbody>
                <tr>
                  <th>무료 보강</th>
                  <td colspan="3">
                    무료 <span class="unit small ml10"><input type="number" value="2"><em>회</em></span>
                  </td>
                </tr>
                <tr>
                  <th>쿠폰</th>
                  <td colspan="3">
                    <button class="btnS line" @click="LectureCouponSet()">쿠폰 설정</button>
                    <div class="tls mt10">
                      <table>
                        <colgroup>
                          <col width="100"/>
                          <col width="100"/>
                          <col width="250"/>
                          <col width="110"/>
                          <col width="80"/>
                          <col width="200"/>
                          <col width="100"/>
                          <col width="80"/>
                        </colgroup>
                        <thead>
                          <tr>
                            <th>쿠폰번호</th>
                            <th>카테고리</th>
                            <th>쿠폰명</th>
                            <th>할인혜택/조건</th>
                            <th>중복할인</th>
                            <th>유효기간</th>
                            <th>제공 개수</th>
                            <th>삭제</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>101234</td>
                            <td>배송비</td>
                            <td>배송비 Free 쿠폰</td>
                            <td>2,500원</td>
                            <td>불가능</td>
                            <td>2021-02-04 ~ 2021-03-15</td>
                            <td><span class="unit small"><input type="number"><em>개</em></span></td>
                            <td><button class="btnDelete">삭제</button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- //학원 프리미엄 패키지 수강혜택 -->
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
                      <li><strong>[2021-02-23 14:25  / 박미진(mjpark111) ]</strong> 수정</li>
                      <li><strong>[2021-02-23 13:25  / 박미진(mjpark111) ]</strong> 등록</li>
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
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PackageCoursePremiumPlusMgt',
  data() {
    return {
    }
  },
  methods: {
    LectureCouponSet() {
      let routeData = this.$router.resolve({name: 'LectureCouponSet', query: {data: "someData"}});
      window.open('/mkup/windowPopup/lceCouponSet', '_blank', `width=1100,height=900`);
    },
  },
  components: {
  },

}
</script>

<style lang="css" scoped>
</style>
