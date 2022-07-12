<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>교재 (이데아관)</h1>
      <span class="supTxt">* 판매할 교재를 선택할 수 있습니다.</span>
    </div>
    <div class="winContent">
      <div class="choiceStyle">
        <div class="chSearch">
          <!-- 검색조건 -->
          <div class="boardTop">
            <div class="listSearch left">
              <span class="radioSet">
                <input type="radio" id="ISBN" name="search">
                <label for="ISBN"><i></i>ISBN</label>
              </span>
              <div class="back">
                <div class="bdLine">
                  <span class="lsItem">
                    <input type="text" placeholder="ISBN" class="w150"/>
                  </span>
                </div>
              </div>
              <span class="radioSet ml20">
                <input type="radio" id="direct" name="search">
                <label for="direct"><i></i>직접검색</label>
              </span>
              <div class="back">
                <div class="bdLine">
                  <span class="lsItem">
                    <span class="selectSet">
                      <select name="" id="" disabled>
                        <option value="">이데아관</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <input type="text" placeholder="교재명, 저자 검색" />
                    <button class="btnSearch">검색</button>
                  </span>
                </div>
                <div>
                  <button class="btnRefresh">초기화</button>
                </div>
              </div>
              <span class="checkSet">
                <input type="checkbox" id="sorting">
                <label for="sorting"><i></i>현재 오픈된 데이터만 조회</label>
              </span>
            </div>
          </div>
          <!-- 검색조건 -->
          <!-- 검색결과 -->
          <div class="chListArea">
            <div class="tls subBrown">
              <table>
                <colgroup>
                  <col width="60">
                  <col width="80">
                  <col width="140">
                  <col width="140">
                  <col width="120">
                  <col>
                  <col width="160">
                  <col width="80">
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col" colspan="2">구분</th>
                    <th scope="col">교재코드</th>
                    <th scope="col">ISBN</th>
                    <th scope="col">저자</th>
                    <th scope="col">교재명</th>
                    <th scope="col">정가/판매가</th>
                    <th scope="col">잔여재고</th>
                  </tr>
                </thead>
                <tbody>
                  <!--Loop-->
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk1">
                        <label for="chk1"><i></i></label>
                      </span>
                    </td>
                    <td>교재</td>
                    <td>a1520B00008</td>
                    <td>2277547920025</td>
                    <td>장영희</td>
                    <td>장영희 적중 모의고사 모음집 1</td>
                    <td>
                      <span class="price">
                        <span class="origin"><del><strong>25,000</strong>원</del></span>
                        <span class="dcBasic">
                          <strong>22,500</strong>원<em class="dc">10<b>%</b></em>
                        </span>
                      </span>
                    </td>
                    <td>20</td>
                  </tr>
                  <!--//Loop-->
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk1">
                        <label for="chk1"><i></i></label>
                      </span>
                    </td>
                    <td>교재</td>
                    <td>a1520B00008</td>
                    <td>2277547920025</td>
                    <td>장영희</td>
                    <td>장영희 적중 모의고사 모음집 1</td>
                    <td>
                      <span class="price">
                        <span class="origin"><del><strong>25,000</strong>원</del></span>
                        <span class="dcBasic">
                          <strong>22,500</strong>원<em class="dc">10<b>%</b></em>
                        </span>
                      </span>
                    </td>
                    <td>30</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk1">
                        <label for="chk1"><i></i></label>
                      </span>
                    </td>
                    <td>교재</td>
                    <td>a1520B00008</td>
                    <td>2277547920025</td>
                    <td>장영희</td>
                    <td>장영희 적중 모의고사 모음집 1</td>
                    <td>
                      <span class="price">
                        <span class="origin"><del><strong>25,000</strong>원</del></span>
                        <span class="dcBasic">
                          <strong>22,500</strong>원<em class="dc">10<b>%</b></em>
                        </span>
                      </span>
                    </td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk1">
                        <label for="chk1"><i></i></label>
                      </span>
                    </td>
                    <td>프린트</td>
                    <td>a1520B00008</td>
                    <td>2277547920025</td>
                    <td>장영희</td>
                    <td>장영희 적중 모의고사 모음집 1</td>
                    <td>
                      <span class="price">
                        <span class="origin"><del><strong>25,000</strong>원</del></span>
                        <span class="dcBasic">
                          <strong>22,500</strong>원<em class="dc">10<b>%</b></em>
                        </span>
                      </span>
                    </td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" id="chk1">
                        <label for="chk1"><i></i></label>
                      </span>
                    </td>
                    <td>교재</td>
                    <td>a1520B00008</td>
                    <td>2277547920025</td>
                    <td>장영희</td>
                    <td>장영희 적중 모의고사 모음집 1</td>
                    <td>
                      <span class="price">
                        <span class="origin"><del><strong>25,000</strong>원</del></span>
                        <span class="dcBasic">
                          <strong>22,500</strong>원<em class="dc">10<b>%</b></em>
                        </span>
                      </span>
                    </td>
                    <td>1</td>
                  </tr>
                  <!-- 데이터 없을 경우 -->
                  <tr style="display:none;"><td colspan="8" class="noneData">등록된 데이터가 없습니다.</td></tr>
                  <!-- //데이터 없을 경우 -->
                </tbody>
              </table>
            </div>
          </div>
          <!-- //검색결과 -->
        </div>
        <!-- 선택내역 -->
        <div class="chView">
          <h3>
            <strong>선택내역</strong>
            <span class="right">
              <button class="btnM green">완료</button>
              <button class="btnM gray">취소</button>
              <button class="btnM line">선택삭제</button>
            </span>
          </h3>
          <div class="tls subGreen">
            <table>
              <colgroup>
                <col width="80">
                <col width="140">
                <col width="140">
                <col width="120">
                <col>
                <col width="160">
                <col width="60">
                <col width="60">
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">구분</th>
                  <th scope="col">교재코드</th>
                  <th scope="col">ISBN</th>
                  <th scope="col">저자</th>
                  <th scope="col">교재명</th>
                  <th scope="col">정가/판매가</th>
                  <th scope="col" colspan="2">잔여재고</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th colspan="6">Total</th>
                  <td colspan="2">250,000원</td>
                </tr>
              </tfoot>
              <tbody>
                <!--Loop-->
                <tr>
                  <td>교재</td>
                  <td>a1520B00008</td>
                  <td>2277547920025</td>
                  <td>장영희</td>
                  <td>장영희 적중 모의고사 모음집 1</td>
                  <td>
                    <span class="price">
                      <span class="origin"><del><strong>25,000</strong>원</del></span>
                      <span class="dcBasic">
                        <strong>22,500</strong>원<em class="dc">10<b>%</b></em>
                      </span>
                    </span>
                  </td>
                  <td>20</td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk1">
                      <label for="chk1"><i></i></label>
                    </span>
                  </td>
                </tr>
                <!--//Loop-->
                <tr>
                  <td>교재</td>
                  <td>a1520B00008</td>
                  <td>2277547920025</td>
                  <td>장영희</td>
                  <td>장영희 적중 모의고사 모음집 1</td>
                  <td>
                    <span class="price">
                      <span class="origin"><del><strong>25,000</strong>원</del></span>
                      <span class="dcBasic">
                        <strong>22,500</strong>원<em class="dc">10<b>%</b></em>
                      </span>
                    </span>
                  </td>
                  <td>30</td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk1">
                      <label for="chk1"><i></i></label>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>프린트</td>
                  <td>a1520B00008</td>
                  <td>2277547920025</td>
                  <td>장영희</td>
                  <td>장영희 적중 모의고사 모음집 1</td>
                  <td>
                    <span class="price">
                      <span class="origin"><del><strong>25,000</strong>원</del></span>
                      <span class="dcBasic">
                        <strong>22,500</strong>원<em class="dc">10<b>%</b></em>
                      </span>
                    </span>
                  </td>
                  <td>1</td>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="chk1">
                      <label for="chk1"><i></i></label>
                    </span>
                  </td>
                </tr>
                <!-- 데이터 없을 경우 -->
                <tr style="display:none;"><td colspan="8" class="noneData">등록된 데이터가 없습니다.</td></tr>
                <!-- //데이터 없을 경우 -->
              </tbody>
            </table>
          </div>
        </div>
        <!-- //선택내역 -->
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'SchoolBookIdea',
  data() {
    return {

    }
  },
  components: {
  }
}
</script>
