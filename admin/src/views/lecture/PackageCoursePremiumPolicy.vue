<template lang="html">
  <div>
		<div class="pageTit">
			<h2>패키지 강좌</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/singleCourse">강좌 관리</router-link><router-link to="/mkup/lecture/packageCourse">패키지 강좌</router-link><em>프리미엄 정책관리</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="packageCourseWrite">
        <!-- 기본 설정 -->
        <div class="subTit">
          <h3>기본 설정</h3>
          <span class="right">
            <router-link to="/mkup/lecture/bookMgt" class="btnList">목록으로</router-link>
            <button class="btnM green ml10">저장</button>
          </span>
        </div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="*"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>수강료 <sup>필수</sup></th>
                <td>
                  <span class="unit mr5">
                    <input type="text" class="tR">
                    <em>원</em>
                  </span>
                  추가
                </td>
                <td>
                  <span class="right fGreen">* 일반 패키지를 프리미엄 패키지로 생성 시, 기본으로 수강료에 포함될 금액을 입력해주세요</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //기본 설정 -->
        <!-- 온라인 프리미엄 패키지 수강혜택 -->
        <div class="subTit">
          <h3>온라인 프리미엄 패키지 수강혜택</h3>
        </div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="*"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>무료 연장</th>
                <td>
                  <span class="unit">
                    <span class="mr5">
                      <input type="text" class="tR w70">
                      <em>일</em>
                    </span>
                  </span> 
                  <p class="inBlock mr20">간</p>
                  <span class="unit">
                    <span>
                      <input type="text" class="tR w70">
                      <em>회</em>
                    </span>
                  </span> 
                </td>
                <td><span class="right fGreen">* 온라인 프리미엄 패키지에 기본으로 제공할 무료 연장 기간 및 횟수를 입력해주세요</span></td>
              </tr>
              <tr>
                <th>쿠폰</th>
                <td colspan="2">
                  <button class="btnS line ml5" @click="LectureCouponSet()">쿠폰 설정</button>
                  <span class="right fGreen mt5">* 온라인 프리미엄 패키지에 기본으로 제공할 쿠폰을 선택해주세요</span>
                  <div class="tls discountList">
                    <table>
                      <colgroup>
                        <col width="160">
                        <col width="160">
                        <col width="260">
                        <col width="160">
                        <col width="160">
                        <col width="160">
                        <col width="160">
                        <col width="160">
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">쿠폰번호</th>
                          <th scope="col">카테고리</th>
                          <th scope="col">쿠폰명</th>
                          <th scope="col">할인혜택 / 조건</th>
                          <th scope="col">중복할인</th>
                          <th scope="col">유효기간</th>
                          <th scope="col">제공 개수</th>
                          <th scope="col">삭제</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>101235</td>
                          <td>사물함</td>
                          <td>사물함 1개월 할인 쿠폰</td>
                          <td>100%</br>최대 5,000원 할인</td>
                          <td>불가능</td>
                          <td>발급 후 30일</td>
                          <td>
                            <span class="unit">
                              <input type="text" class="w70"> 
                              <em>개</em>
                            </span>
                          </td>
                          <td class="lgItem item8">
                            <button class="btnDelete">삭제</button>
                          </td>
                        </tr>
                        <!-- 데이터 없을 경우 -->
                        <tr style="display:none;"><td colspan="8" class="noneData">등록된 데이터가 없습니다.</td></tr>
                        <!-- //데이터 없을 경우 -->
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //온라인 프리미엄 패키지 수강혜택 -->
        <!-- 학원 프리미엄 패키지 수강혜택 -->
        <div class="subTit">
          <h3>학원 프리미엄 패키지 수강혜택</h3>
        </div>
        <div class="tvs">
          <table>
            <colgroup>
              <col width="160"/>
              <col width="*"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>무료 보강</th>
                <td>
                  <span class="unit mr10">
                    무료
                    <span class="mlr5">
                      <input type="text" class="tR w70">
                      <em>회</em>
                    </span>
                  </span> 
                </td>
                <td><span class="right fGreen">* 학원 프리미엄 패키지에 기본으로 제공할 무료 보강 기간 및 횟수를 입력해주세요</span></td>
              </tr>
              <tr>
                <th>쿠폰</th>
                <td colspan="2">
                  <button class="btnS line ml5" @click="LectureCouponSet()">쿠폰 설정</button>
                  <span class="right fGreen mt5">* 학원 프리미엄 패키지에 기본으로 제공할 쿠폰을 선택해주세요</span>
                  <div class="tls discountList">
                    <table>
                      <colgroup>
                        <col width="160">
                        <col width="160">
                        <col width="260">
                        <col width="160">
                        <col width="160">
                        <col width="160">
                        <col width="160">
                        <col width="160">
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="col">쿠폰번호</th>
                          <th scope="col">카테고리</th>
                          <th scope="col">쿠폰명</th>
                          <th scope="col">할인혜택 / 조건</th>
                          <th scope="col">중복할인</th>
                          <th scope="col">유효기간</th>
                          <th scope="col">제공 개수</th>
                          <th scope="col">삭제</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>101235</td>
                          <td>사물함</td>
                          <td>사물함 1개월 할인 쿠폰</td>
                          <td>100%</br>최대 5,000원 할인</td>
                          <td>불가능</td>
                          <td>발급 후 30일</td>
                          <td>
                            <span class="unit">
                              <input type="text" class="w70"> 
                              <em>개</em>
                            </span>
                          </td>
                          <td class="lgItem item8">
                            <button class="btnDelete">삭제</button>
                          </td>
                        </tr>
                        <!-- 데이터 없을 경우 -->
                        <tr style="display:none;"><td colspan="8" class="noneData">등록된 데이터가 없습니다.</td></tr>
                        <!-- //데이터 없을 경우 -->
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //학원 프리미엄 패키지 수강혜택 -->
      </div>
    </article>
    </div>

    <!-- Layer Popup -->
    <!-- //Layer Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PackageCoursePremiumPolicy',
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
  }
}
</script>
