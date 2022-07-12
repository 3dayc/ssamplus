<template lang="html">
  <div>
		<div class="pageTit">
			<h2>교재 입/출고 관리</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강좌/교재</router-link><router-link to="/mkup/lecture/bookMgt">교재 관리</router-link><em>교재 입/출고 관리</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="bookStockMgt">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">장소</option>
                      <option value="">온라인</option>
                      <option value="">이데아관</option>
                      <option value="">아이비관</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <div class="multiselectSet">
                    <div class="selectSet lCase" @click="multiSelect($event)">
                      <select>
                        <option>구분</option>
                      </select>
                      <div class="overSelect"></div>
                    </div>
                    <div class="checkArea">
                      <span class="checkSet">
                        <input type="checkbox" id="one" checked/>
                        <label for="one"><i></i>입고</label>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" id="two" checked/>
                        <label for="two"><i></i>판매</label>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" id="three" checked/>
                        <label for="two"><i></i>출고(기타)</label>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" id="four" checked/>
                        <label for="two"><i></i>출고(이동)</label>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" id="five" checked/>
                        <label for="two"><i></i>환불</label>
                      </span>
                    </div>
                  </div>
                </span>
                <span class="lsItem">
                  <input type="text" placeholder="주문번호, 교재명 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div><button class="btnRefresh">초기화</button></div>
            </div>
          </div>
          <div class="right-po">
            <button class="btnDownload">다운로드</button>
          </div>
        </div>
        <!-- //테이블 유틸 -->
        <!-- 테이블 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col width="150">
              <col width="230">
              <col width="80">
              <col width="80">
              <col width="80">
              <col width="80">
              <col width="120">
              <col width="120">
              <col width="200">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">일시</th>
                <th scope="col">교재명</th>
                <th scope="col">입고처<br/>판매/출고처</th>
                <th scope="col">구분</th>
                <th scope="col">수량</th>
                <th scope="col">잔여재고</th>
                <th scope="col">주문번호</th>
                <th scope="col">거래처</th>
                <th scope="col">비고</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr>
                <td>2021-03-10 (수)  08:41:23</td>
                <td class="tL">류지원 영어교육학 기출문제집</td>
                <td>온라인</td>
                <td>입고</td>
                <td>200</td>
                <td>348</td>
                <td>-</td>
                <td>미디어아트북스㈜</td>
                <td><button class="btnS line" @click="alertTrigger01 = true">메모추가</button></td>
              </tr>
              <!--//Loop-->
              <tr class="blue">
                <td>2021-03-10 (수)  08:41:23</td>
                <td class="tL">류지원 영어교육학 기출문제집</td>
                <td>아이비관</td>
                <td>판매</td>
                <td>-1</td>
                <td>59</td>
                <td><a @click="PaymentOrderOnline()">B-20210225-0000000</a></td>
                <td></td>
                <td></td>
              </tr>
              <tr class="blue">
                <td>2021-03-10 (수)  08:41:23</td>
                <td class="tL">류지원 영어교육학 기출문제집</td>
                <td>이데아관</td>
                <td>출고(기타)</td>
                <td>-20</td>
                <td>30</td>
                <td>-</td>
                <td></td>
                <td><button class="btnS line" @click="alertTrigger01 = true">메모추가</button></td>
              </tr>
              <tr>
                <td>2021-03-10 (수)  08:41:23</td>
                <td class="tL">류지원 영어교육학 기출문제집</td>
                <td>온라인</td>
                <td>판매</td>
                <td>-1</td>
                <td>148</td>
                <td><a @click="PaymentOrderOnline()">M202102250000000</a></td>
                <td></td>
                <td></td>
              </tr>
              <tr class="red">
                <td>2021-03-10 (수)  08:41:23</td>
                <td class="tL">류지원 영어교육학 기출문제집</td>
                <td>온라인</td>
                <td>환불</td>
                <td>1</td>
                <td>149</td>
                <td><a @click="PaymentOrderOnline()">B202102250000000</a></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2021-03-10 (수)  08:41:23</td>
                <td class="tL">류지원 영어교육학 기출문제집</td>
                <td>온라인</td>
                <td>판매</td>
                <td>-1</td>
                <td>148</td>
                <td><a @click="PaymentOrderOnline()">B202102250000000</a></td>
                <td></td>
                <td></td>
              </tr>
              <tr class="blue">
                <td>2021-03-10 (수)  08:41:23</td>
                <td class="tL">류지원 영어교육학 기출문제집</td>
                <td>아이비관</td>
                <td>출고(이동)</td>
                <td>-30</td>
                <td>60</td>
                <td>-</td>
                <td></td>
                <td>2021-03-10 박미진 | 재고부족 알림</td>
              </tr>
              <tr class="blue">
                <td>2021-03-10 (수)  08:41:23</td>
                <td class="tL">류지원 영어교육학 기출문제집</td>
                <td>이데아관</td>
                <td>입고</td>
                <td>50</td>
                <td>50</td>
                <td>-</td>
                <td>㈜아람 Books</td>
                <td><button class="btnS line" @click="alertTrigger01 = true">메모추가</button></td>
              </tr>
              <tr>
                <td>2021-03-10 (수)  08:41:23</td>
                <td class="tL">류지원 영어교육학 기출문제집</td>
                <td>온라인</td>
                <td>입고</td>
                <td>50</td>
                <td>149</td>
                <td>-</td>
                <td>㈜아람 Books</td>
                <td><button class="btnS line" @click="alertTrigger01 = true">메모추가</button></td>
              </tr>
              <tr>
                <td>2021-03-10 (수)  08:41:23</td>
                <td class="tL">류지원 영어교육학 기출문제집</td>
                <td>온라인</td>
                <td>판매</td>
                <td>-1</td>
                <td>99</td>
                <td><a @click="PaymentOrderOnline()">B202102250000000</a></td>
                <td></td>
                <td></td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="9" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
        <!-- //테이블 목록 -->
        <Paginate />
      </div>
    </article>
    </div>

    <!-- 메모 팝업 -->
		<Alert v-if='alertTrigger01' @close="alertTrigger01 = false">
			<template slot="modalbody">
				<p>메모는 한 건만 추가 가능합니다.</p>
				<textarea rows="2" placeholder="메모 입력" class="mt10"></textarea>
			</template>
			<template slot="modalfooter">
				<button class="btnM gray" @click="alertTrigger01 = false">취소</button>
        <button class="btnM green" @click="alertTrigger01 = false">추가</button>
			</template>
		</Alert>
		<!-- //메모 팝업 -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'BookStockMgt',
  data() {
    return {
      alertTrigger01: false,
    }
  },
  methods: {
		PaymentOrderOnline() {
      let routeData = this.$router.resolve({name: 'PaymentOrderOnline', query: {data: "someData"}});
      window.open('/mkup/windowPopup/pmtOrderOnline', '_blank', `width=850,height=20000`);
    },

  },
  components: {
  }
}
</script>
