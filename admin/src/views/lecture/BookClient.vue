<template lang="html">
  <div>
		<div class="pageTit">
			<h2>거래처 관리</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/bookMgt">교재 관리</router-link><em>거래처 관리</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="bookClient">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <input type="text" placeholder="거래처명, 거래처코드 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div><button class="btnRefresh">초기화</button></div>
            </div>
          </div>
          <div class="right-po">
            <router-link to="/mkup/lecture/bookClient/write" class="btnAdd">신규등록</router-link>
          </div>
        </div>
        <!-- //테이블 유틸 -->
        <!-- 테이블 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="80"/>
              <col width="150"/>
              <col width="250"/>
              <col width="*">
              <col width="180"/>
              <col width="180"/>
              <col width="100"/>
              <col width="100"/>
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>거래처코드<br/>(SAP)</th>
                <th>거래처명</th>
                <th>주소</th>
                <th>전화/FAX</th>
                <th>담당자/연락처</th>
                <th>매입률</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr>
                <td>65</td>
                <td>B10005224</td>
                <td><router-link to="/mkup/lecture/bookClient/view">동문사</router-link></td>
                <td class="tL">서울시 서대문구 홍제원 1길 12(홍제동, 101호)</td>
                <td>02-123-4567<br/>050-1234-5678</td>
                <td>김철수<br/>010-1234-5678</td>
                <td>70%</td>
                <td>
                  <span class="memoTooltip">
    								<a>메모</a>
    								<span>김현 키위주스 교재 독점판매 거래처</span>
    							</span>
                </td>
              </tr>
              <!--//Loop-->
              <tr class="expiry">
                <td>64</td>
                <td>B10005224</td>
                <td><router-link to="/mkup/lecture/bookClient/view">조은기획</router-link></td>
                <td class="tL">경기도 파주시 문발로 23, 2층 (문발동, ㈜우진테크)</td>
                <td>02-123-4567<br/>050-1234-5678</td>
                <td>김철수<br/>010-1234-5678</td>
                <td>100%</td>
                <td></td>
              </tr>
              <tr>
                <td>63</td>
                <td>B10005224</td>
                <td><router-link to="/mkup/lecture/bookClient/view">스페라플러스</router-link></td>
                <td class="tL">경기도 고양시 일산서구 가좌2로 58</td>
                <td>02-123-4567<br/>050-1234-5678</td>
                <td>김철수<br/>010-1234-5678</td>
                <td>50%</td>
                <td></td>
              </tr>
              <tr>
                <td>62</td>
                <td>B10005224</td>
                <td><router-link to="/mkup/lecture/bookClient/view">나우 퍼블리셔</router-link></td>
                <td class="tL">서울시 서대문구 홍제원 1길 12(홍제동, 101호)</td>
                <td>02-123-4567<br/>050-1234-5678</td>
                <td>김철수<br/>010-1234-5678</td>
                <td>70%</td>
                <td>
                  <span class="memoTooltip">
    								<a>메모</a>
    								<span>김현 키위주스 교재 독점판매 거래처</span>
    							</span>
                </td>
              </tr>
              <tr>
                <td>61</td>
                <td>B10005224</td>
                <td><router-link to="/mkup/lecture/bookClient/view">도서출판 커버넌트</router-link></td>
                <td class="tL">경기도 파주시 문발로 23, 2층 (문발동, ㈜우진테크)</td>
                <td>02-123-4567<br/>050-1234-5678</td>
                <td>김철수<br/>010-1234-5678</td>
                <td>100%</td>
                <td>
                  <span class="memoTooltip">
    								<a>메모</a>
    								<span>김현 키위주스 교재 독점판매 거래처</span>
    							</span>
                </td>
              </tr>
              <tr>
                <td>60</td>
                <td>B10005224</td>
                <td><router-link to="/mkup/lecture/bookClient/view">동문사</router-link></td>
                <td class="tL">경기도 고양시 일산서구 가좌2로 58</td>
                <td>02-123-4567<br/>050-1234-5678</td>
                <td>김철수<br/>010-1234-5678</td>
                <td>50%</td>
                <td></td>
              </tr>
              <tr>
                <td>59</td>
                <td>B10005224</td>
                <td><router-link to="/mkup/lecture/bookClient/view">조은기획</router-link></td>
                <td class="tL">서울시 서대문구 홍제원 1길 12(홍제동, 101호)</td>
                <td>02-123-4567<br/>050-1234-5678</td>
                <td>김철수<br/>010-1234-5678</td>
                <td>70%</td>
                <td>
                  <span class="memoTooltip">
    								<a>메모</a>
    								<span>김현 키위주스 교재 독점판매 거래처</span>
    							</span>
                </td>
              </tr>
              <tr>
                <td>58</td>
                <td>B10005224</td>
                <td><router-link to="/mkup/lecture/bookClient/view">스페라플러스</router-link></td>
                <td class="tL">경기도 파주시 문발로 23, 2층 (문발동, ㈜우진테크)</td>
                <td>02-123-4567<br/>050-1234-5678</td>
                <td>김철수<br/>010-1234-5678</td>
                <td>100%</td>
                <td></td>
              </tr>
              <tr>
                <td>57</td>
                <td>B10005224</td>
                <td><router-link to="/mkup/lecture/bookClient/view">나우 퍼블리셔</router-link></td>
                <td class="tL">경기도 고양시 일산서구 가좌2로 58</td>
                <td>02-123-4567<br/>050-1234-5678</td>
                <td>김철수<br/>010-1234-5678</td>
                <td>50%</td>
                <td></td>
              </tr>
              <tr>
                <td>56</td>
                <td>B10005224</td>
                <td><router-link to="/mkup/lecture/bookClient/view">도서출판 커버넌트</router-link></td>
                <td class="tL">서울시 서대문구 홍제원 1길 12(홍제동, 101호)</td>
                <td>02-123-4567<br/>050-1234-5678</td>
                <td>김철수<br/>010-1234-5678</td>
                <td>70%</td>
                <td>
                  <span class="memoTooltip">
    								<a>메모</a>
    								<span>김현 키위주스 교재 독점판매 거래처</span>
    							</span>
                </td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="8" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
        <!-- //테이블 목록 -->
        <Paginate />
      </div>
    </article>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'BookClient',
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
  }
}
</script>
