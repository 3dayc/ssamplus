<template lang="html">
  <div>
    <div class="pageTit">
      <h2>전화상담 통계</h2>
      <span><router-link to="/mkup/statistics/visitSite">통계</router-link><router-link to="/mkup/statistics/counselCall">상담센터 통계</router-link><em>전화상담 통계</em></span>
    </div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="counselCall"><!-- class 없어도 유지 -->
        <!-- 검색 -->
        <div class="boardTop">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="">2021년</option>
                      <option value="">2020년</option>
                      <option value="">2019년</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="">전체</option>
                      <option value="">1월</option>
                      <option value="">2월</option>
                      <option value="">3월</option>
                      <option value="">4월</option>
                      <option value="">5월</option>
                      <option value="">6월</option>
                      <option value="">7월</option>
                      <option value="">8월</option>
                      <option value="">9월</option>
                      <option value="">10월</option>
                      <option value="">11월</option>
                      <option value="">12월</option>
                    </select>
                  </span>
                </span>
              </div>
              <div>
                <button class="btnRefresh">초기화</button>
              </div>
            </div>
          </div>
        </div>
        <!-- //검색 -->
        <!-- 목록 -->
        <div class="gridSet grid3">
          <div class="gridItem pr30 vTop">
            <div class="subTit">
              <h3><router-link to="/mkup/statistics/counselCall/use" class="underline">강의수강, 사이트 이용 관련</router-link></h3>
            </div>
            <div class="tls">
              <table>
                <colgroup>
                  <col width="200"/>
                  <col width="100"/>
                </colgroup>
                <thead>
                  <tr>
                    <th>중분류</th>
                    <th>상담건수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><router-link to="/mkup/statistics/counselCall/use">회원정보</router-link></td>
                    <td>10건</td>
                  </tr>
                  <tr>
                    <td><router-link to="/mkup/statistics/counselCall/use">사이트 문의</router-link></td>
                    <td>10건</td>
                  </tr>
                  <tr>
                    <td><router-link to="/mkup/statistics/counselCall/use">온라인 강의</router-link></td>
                    <td>10건</td>
                  </tr>
                  <tr>
                    <td><router-link to="/mkup/statistics/counselCall/use">학원 강의(직강)</router-link></td>
                    <td>10건</td>
                  </tr>
                  <tr>
                    <td><router-link to="/mkup/statistics/counselCall/use">교재/학습자료</router-link></td>
                    <td>10건</td>
                  </tr>
                  <tr>
                    <td><router-link to="/mkup/statistics/counselCall/use">결제</router-link></td>
                    <td>10건</td>
                  </tr>
                  <tr>
                    <td><router-link to="/mkup/statistics/counselCall/use">기타/건의사항</router-link></td>
                    <td>10건</td>
                  </tr>
                  <tr>
                    <td><router-link to="/mkup/statistics/counselCall/use">모의고사</router-link></td>
                    <td>10건</td>
                  </tr>
                  <tr>
                    <td><router-link to="/mkup/statistics/counselCall/use">설명회</router-link></td>
                    <td>10건</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr class="emphasisBlack fBig">
                    <td>합계</td>
                    <td>100건</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div class="gridItem pr30 vTop">
            <div class="subTit">
              <h3><router-link to="/mkup/statistics/counselCall/refund" class="underline">환불</router-link></h3>
            </div>
            <div class="tls">
              <table>
                <colgroup>
                  <col width="200"/>
                  <col width="100"/>
                </colgroup>
                <thead>
                  <tr>
                    <th>중분류</th>
                    <th>상담건수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><router-link to="/mkup/statistics/counselCall/refund">강의수강불편</router-link></td>
                    <td>10건</td>
                  </tr>
                  <tr>
                    <td><router-link to="/mkup/statistics/counselCall/refund">교재이용불편</router-link></td>
                    <td>10건</td>
                  </tr>
                  <tr>
                    <td><router-link to="/mkup/statistics/counselCall/refund">변경/결제</router-link></td>
                    <td>10건</td>
                  </tr>
                  <tr>
                    <td><router-link to="/mkup/statistics/counselCall/refund">사이트</router-link></td>
                    <td>10건</td>
                  </tr>
                  <tr>
                    <td><router-link to="/mkup/statistics/counselCall/refund">상담</router-link></td>
                    <td>10건</td>
                  </tr>
                  <tr>
                    <td><router-link to="/mkup/statistics/counselCall/refund">개인사정</router-link></td>
                    <td>10건</td>
                  </tr>
                  <tr>
                    <td><router-link to="/mkup/statistics/counselCall/refund">기타</router-link></td>
                    <td>10건</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr class="emphasisBlack fBig">
                    <td>합계</td>
                    <td>70건</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div class="gridItem vTop">
            <div class="subTit">
              <h3><router-link to="/mkup/statistics/counselCall/study" class="underline">임용학습상담</router-link></h3>
            </div>
            <div class="tls">
              <table>
                <colgroup>
                  <col width="200"/>
                  <col width="100"/>
                </colgroup>
                <thead>
                  <tr>
                    <th>중분류</th>
                    <th>상담건수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><router-link to="/mkup/statistics/counselCall/study">초시생</router-link></td>
                    <td>10건</td>
                  </tr>
                  <tr>
                    <td><router-link to="/mkup/statistics/counselCall/study">N수생</router-link></td>
                    <td>10건</td>
                  </tr>
                  <tr>
                    <td><router-link to="/mkup/statistics/counselCall/study">재수생</router-link></td>
                    <td>10건</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr class="emphasisBlack fBig">
                    <td>합계</td>
                    <td>30건</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class="subTit mt20">
              <h3><router-link to="/mkup/statistics/counselCall/etc" class="underline">기타</router-link></h3>
            </div>
            <div class="tls">
              <table>
                <colgroup>
                  <col width="200"/>
                  <col width="100"/>
                </colgroup>
                <thead>
                  <tr>
                    <th>중분류</th>
                    <th>상담건수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><router-link to="/mkup/statistics/counselCall/etc">기타</router-link></td>
                    <td>10건</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr class="emphasisBlack fBig">
                    <td>합계</td>
                    <td>10건</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        <!-- 목록 -->
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
  name: 'CounselCall',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  },
}
</script>
