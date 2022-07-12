<template lang="html">
  <div>
		<div class="pageTit">
			<h2>교재 입고내역</h2>
			<span><router-link to="/mkup/lecture/singleCourse">강과/교재</router-link><router-link to="/mkup/lecture/bookMgt">교재 관리</router-link><em>교재 입고내역</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="bookReceive">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
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
                        <input type="checkbox" id="one" />
                        <label for="one"><i></i>온라인</label>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" id="two" />
                        <label for="two"><i></i>학원 전체</label>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" id="three" />
                        <label for="two"><i></i>학원 (아이비)</label>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" id="four" />
                        <label for="two"><i></i>학원 (이데아)</label>
                      </span>
                      <span class="checkSet">
                        <input type="checkbox" id="five" />
                        <label for="two"><i></i>학원 (에비뉴)</label>
                      </span>
                    </div>
                  </div>
                </span>
                <span class="lsItem">
                  <input type="text" placeholder="도서코드, 교재명 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div><button class="btnRefresh">초기화</button></div>
            </div>
          </div>
          <div class="right-po">
            <button class="btnDownload">다운로드</button> <!--2021-06-30-->
          </div>
        </div>
        <!-- //테이블 유틸 -->

        <!-- 테이블 목록 -->
        <div class="tls">
          <table>
            <colgroup>
              <col span="3">
              <col width="300px;">
              <col span="4">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">구분</th>
                <th scope="col">입고 일자</th>
                <th scope="col">도서코드</th>
                <th scope="col">교재명</th>
                <th scope="col">출판사</th>
                <th scope="col">입고량</th>
                <th scope="col">총 재고</th>
                <th scope="col">북센 총재고</th>
              </tr>
            </thead>
            <tbody>
              <!--Loop-->
              <tr>
                <td>온라인</td>
                <td>2020-03-14 (수) 08:41:23</td>
                <td>a1520B00008</td>
                <td class="tL">류지원 영어교육학 기출문제집</td>
                <td>아람출판사</td>
                <td>200</td>
                <td>
                  <span class="memoTooltip">
                    <em class="borderNone">200</em>
                    <span class="tC">
                      기존 (20) / 입고 (200)
                    </span>
                  </span>
                </td>
                <td><button class="btnS line">보기</button></td>
              </tr>
              <!--//Loop-->
              <tr>
                <td>학원(아이비)</td>
                <td>2020-03-14 (수) 08:41:23</td>
                <td>a1520B00008</td>
                <td class="tL">류지원 영어교육학 기출문제집</td>
                <td>아람출판사</td>
                <td>200</td>
                <td>
                  <span class="memoTooltip">
                    <em class="borderNone">200</em>
                    <span class="tC">
                      기존 (20) / 입고 (200)
                    </span>
                  </span>
                </td>
                <td>
                  <span class="memoTooltip">
                    <em class="borderNone">20</em>
                    <span class="tC">
                      판매가능재고(219) / 반품재고(1)
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>학원(이데아)</td>
                <td>2020-03-14 (수) 08:41:23</td>
                <td>a1520B00008</td>
                <td class="tL">류지원 영어교육학 기출문제집</td>
                <td>아람출판사</td>
                <td>200</td>
                <td>
                  <span class="memoTooltip">
                    <em class="borderNone">200</em>
                    <span class="tC">
                      기존 (20) / 입고 (200)
                    </span>
                  </span>
                </td>
                <td>
                  <span class="memoTooltip">
                    <em class="borderNone">20</em>
                    <span class="tC">
                      판매가능재고(219) / 반품재고(1)
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>학원(에비뉴)</td>
                <td>2020-03-14 (수) 08:41:23</td>
                <td>a1520B00008</td>
                <td class="tL">류지원 영어교육학 기출문제집</td>
                <td>아람출판사</td>
                <td>200</td>
                <td>
                  <span class="memoTooltip">
                    <em class="borderNone">200</em>
                    <span class="tC">
                      기존 (20) / 입고 (200)
                    </span>
                  </span>
                </td>
                <td><button class="btnS line">보기</button></td>
              </tr>
              <tr>
                <td>온라인</td>
                <td>2020-03-14 (수) 08:41:23</td>
                <td>a1520B00008</td>
                <td class="tL">류지원 영어교육학 기출문제집</td>
                <td>아람출판사</td>
                <td>200</td>
                <td>
                  <span class="memoTooltip">
                    <em class="borderNone">200</em>
                    <span class="tC">
                      기존 (20) / 입고 (200)
                    </span>
                  </span>
                </td>
                <td><button class="btnS line">보기</button></td>
              </tr>
              <tr>
                <td>온라인</td>
                <td>2020-03-14 (수) 08:41:23</td>
                <td>a1520B00008</td>
                <td class="tL">류지원 영어교육학 기출문제집</td>
                <td>아람출판사</td>
                <td>200</td>
                <td>
                  <span class="memoTooltip">
                    <em class="borderNone">200</em>
                    <span class="tC">
                      기존 (20) / 입고 (200)
                    </span>
                  </span>
                </td>
                <td><button class="btnS line">보기</button></td>
              </tr>
              <tr>
                <td>온라인</td>
                <td>2020-03-14 (수) 08:41:23</td>
                <td>a1520B00008</td>
                <td class="tL">류지원 영어교육학 기출문제집</td>
                <td>아람출판사</td>
                <td>200</td>
                <td>
                  <span class="memoTooltip">
                    <em class="borderNone">200</em>
                    <span class="tC">
                      기존 (20) / 입고 (200)
                    </span>
                  </span>
                </td>
                <td><button class="btnS line">보기</button></td>
              </tr>
              <tr>
                <td>온라인</td>
                <td>2020-03-14 (수) 08:41:23</td>
                <td>a1520B00008</td>
                <td class="tL">류지원 영어교육학 기출문제집</td>
                <td>아람출판사</td>
                <td>200</td>
                <td>
                  <span class="memoTooltip">
                    <em class="borderNone">200</em>
                    <span class="tC">
                      기존 (20) / 입고 (200)
                    </span>
                  </span>
                </td>
                <td><button class="btnS line">보기</button></td>
              </tr>
              <tr>
                <td>온라인</td>
                <td>2020-03-14 (수) 08:41:23</td>
                <td>a1520B00008</td>
                <td class="tL">류지원 영어교육학 기출문제집</td>
                <td>아람출판사</td>
                <td>200</td>
                <td>
                  <span class="memoTooltip">
                    <em class="borderNone">200</em>
                    <span class="tC">
                      기존 (20) / 입고 (200)
                    </span>
                  </span>
                </td>
                <td>
                  <span class="memoTooltip">
                    <em class="borderNone">200</em>
                    <span class="tC">
                      판매가능재고(219) / 반품재고(1)
                    </span>
                  </span>
                </td>
              </tr>
              <tr>
                <td>온라인</td>
                <td>2020-03-14 (수) 08:41:23</td>
                <td>a1520B00008</td>
                <td class="tL">류지원 영어교육학 기출문제집</td>
                <td>아람출판사</td>
                <td>200</td>
                <td>
                  <span class="memoTooltip">
                    <em class="borderNone">200</em>
                    <span class="tC">
                      기존 (20) / 입고 (200)
                    </span>
                  </span>
                </td>
                <td><button class="btnS line">보기</button></td>
              </tr>

              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="10" class="noneData">등록된 데이터가 없습니다.</td></tr>
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
  name: 'BookMgt',
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
