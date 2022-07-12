<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>제외교재</h1>
      <span class="supTxt">* 쿠폰 적용에서 제외할 교재를 선택할 수 있습니다</span>
        <!-- 2021-07-06 -->
      <span class="checkSet ml10">
        <input type="checkbox" @change="feeFree = !feeFree">
        <label for=""><i></i>배송비 Free 쿠폰 (쌤팩 프리미엄)</label>
      </span>
      <!-- //2021-07-06 -->
      <div class="btnArea">
        <button class="btnM green">선택</button>
        <button class="btnM ml10">취소</button>
      </div>
    </div>
    <div class="winContent">
      <div class="choiceStyle">
        <div class="chSearch">
          <div class="boardTop">
            <div class="listSearch left">
              <div class="back">
                <div class="bdLine">
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">과목</option>
                        <option value="">교육학</option>
                        <option value="">국어</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <span class="selectSet lCase">
                      <select name="" id="">
                        <option value="no" class="label">교수</option>
                      </select>
                    </span>
                  </span>
                  <span class="lsItem">
                    <input type="text" placeholder="교재명 검색" />
                    <button class="btnSearch">검색</button>
                  </span>
                </div>
                <div>
                  <span class="checkSet">
                    <input type="checkbox" checked>
                    <label for=""><i></i>현재 오픈된 데이터만 조회</label>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="chListArea">
            <div class="tls subBrown">
              <table>
                <colgroup>
                  <col width="60"/>
                  <col width="140"/>
                  <col width="*"/>
                </colgroup>
                <thead>
                  <tr>
                    <th colspan="2">과목</th>
                    <th>교재명</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" />
                        <label for=""><i></i></label>
                      </span>
                    </td>
                    <td>영어</td>
                    <td class="tL">류지원 영어교육학 기출문제집</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" />
                        <label for=""><i></i></label>
                      </span>
                    </td>
                    <td>영어</td>
                    <td class="tL">류지원 영어교육학 기출문제집</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" />
                        <label for=""><i></i></label>
                      </span>
                    </td>
                    <td>영어</td>
                    <td class="tL">류지원 영어교육학 기출문제집</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" />
                        <label for=""><i></i></label>
                      </span>
                    </td>
                    <td>영어</td>
                    <td class="tL">류지원 영어교육학 기출문제집</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" />
                        <label for=""><i></i></label>
                      </span>
                    </td>
                    <td>영어</td>
                    <td class="tL">류지원 영어교육학 기출문제집</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" />
                        <label for=""><i></i></label>
                      </span>
                    </td>
                    <td>영어</td>
                    <td class="tL">류지원 영어교육학 기출문제집</td>
                  </tr>
                  <tr>
                    <td>
                      <span class="checkSet noLabel">
                        <input type="checkbox" />
                        <label for=""><i></i></label>
                      </span>
                    </td>
                    <td>영어</td>
                    <td class="tL">류지원 영어교육학 기출문제집</td>
                  </tr>
                  <!-- 데이터 없을 경우 -->
                  <tr style="display:none;"><td colspan="3" class="noneData">등록된 데이터가 없습니다.</td></tr>
                  <!-- //데이터 없을 경우 -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="chView">
          <h3><strong>선택내역</strong></h3>
          <div class="tls subGreen" v-if="feeFree">
            <table>
              <colgroup>
                <col width="*"/>
                <col width="60"/>
              </colgroup>
              <thead>
                <tr>
                  <th>교재명</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="tL">전체</td>
                  <td><button class="btnDelete">삭제</button></td>
                </tr>
                <!-- 데이터 없을 경우 -->
                <tr style="display:none;"><td colspan="2" class="noneData">등록된 데이터가 없습니다.</td></tr>
                <!-- //데이터 없을 경우 -->
              </tbody>
            </table>
          </div>
          <div class="tls subGreen" v-else>
            <!-- 2021-07-06 -->
            <table>
              <colgroup>
                <col width="*"/>
                <col width="60"/>
              </colgroup>
              <thead>
                <tr>
                  <th>교재명</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="tL">류지원 영어교육학 기출문제집</td>
                  <td><button class="btnDelete">삭제</button></td>
                </tr>
                <tr>
                  <td class="tL">류지원 영어교육학 기출문제집</td>
                  <td><button class="btnDelete">삭제</button></td>
                </tr>
                <tr>
                  <td class="tL">류지원 영어교육학 기출문제집</td>
                  <td><button class="btnDelete">삭제</button></td>
                </tr>
                <tr>
                  <td class="tL">류지원 영어교육학 기출문제집</td>
                  <td><button class="btnDelete">삭제</button></td>
                </tr>
                <tr>
                  <td class="tL">류지원 영어교육학 기출문제집</td>
                  <td><button class="btnDelete">삭제</button></td>
                </tr>
                <tr>
                  <td class="tL">전체</td>
                  <td><button class="btnDelete">삭제</button></td>
                </tr>
                <!-- 데이터 없을 경우 -->
                <tr style="display:none;"><td colspan="2" class="noneData">등록된 데이터가 없습니다.</td></tr>
                <!-- //데이터 없을 경우 -->
              </tbody>
            </table>
            <!-- //2021-07-06 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'PaymentCouponBookExc',
  data() {
    return {
      popTrigger: false,
      closeBtn: false,
      feeFree: false,
    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>
