<template lang="html">
  <div>
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
                  <option value="" selected>5월</option>
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
        </div>
      </div>
      <span class="right-po">
        <button class="btnS line" @click="popupTrigger = true">환불사유 선택</button>
      </span>
    </div>
    <!-- //검색 -->
    <div class="tls">
      <table>
        <colgroup>
          <col width="100"/>
          <col width="120"/>
          <col width="120"/>
          <col width="120"/>
          <col width="120"/>
          <col width="120"/>
          <col width="120"/>
          <col width="120"/>
        </colgroup>
        <thead>
          <tr>
            <th>과목</th>
            <th>강사</th>
            <th>결제인원</th>
            <th>환불인원</th>
            <th>건수환불율</th>
            <th>결제금액</th>
            <th>환불금액</th>
            <th>금액환불율</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>가정</td>
            <td><a @click="popupTrigger02 = true">문영은</a></td>
            <td class="tR"> 71 </td>
            <td class="tR">-9</td>
            <td class="tR">13%</td>
            <td class="tR"> 23,691,000 </td>
            <td class="tR">-3,150,900 </td>
            <td class="tR">13%</td>
          </tr>
          <tr>
            <td>과학교과교육론</td>
            <td><a @click="popupTrigger02 = true">김창만</a></td>
            <td class="tR"> 1  </td>
            <td class="tR">0</td>
            <td class="tR">0%</td>
            <td class="tR"> 175,000 </td>
            <td class="tR"> - </td>
            <td class="tR">0%</td>
          </tr>
          <tr>
            <td>교육학</td>
            <td><a @click="popupTrigger02 = true">권구현</a></td>
            <td class="tR"> 21 </td>
            <td class="tR">-2</td>
            <td class="tR">10%</td>
            <td class="tR"> 12,122,000  </td>
            <td class="tR">-2,054,710 </td>
            <td class="tR">17%</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
            <td class="tR"></td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="emphasisBlack fBig">
            <td colspan="2">합계</td>
            <td class="tR">3620</td>
            <td class="tR">-494</td>
            <td class="tR">14%</td>
            <td class="tR"> 2,569,030,000</td>
            <td class="tR">-404,224,383</td>
            <td class="tR">16%</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <!-- Popup -->
    <Popup v-if='popupTrigger' @close="popupTrigger = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>환불사유 선택</h1>
        <span>* 환불현황을 조회할 환불사유를 선택/해제 할 수 있습니다.</span>
      </div>
      <div slot="modalbody">
        <div class="tls subGreen">
          <table>
            <colgroup>
              <col width="100"/>
              <col width="200"/>
              <col width="60"/>
            </colgroup>
            <thead>
              <tr>
                <th colspan="2">환불사유</th>
                <th>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="7">강의수강불편</td>
                <td class="tL">강사/강의 내용 불만</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="tL">수강료 불만</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="tL">강의재생/화질/음질 불만</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="tL">강의자료 인쇄 불만</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="tL">폐강/시간표 변경</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="tL">쌤플러스 다른 강사로 변경</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="tL">타 학원 강의 수강</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td rowspan="6">교재이용불편</td>
                <td class="tL">다른 경로로 교재 구매(다른 사이트 이용)</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="tL">교재가격/배송비 불만</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="tL">교재 내용 불만</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="tL">교재 파본 및 품질 불만</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="tL">교재 품절</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="tL">배송 불만</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td rowspan="5">변경/결제</td>
                <td class="tL">직강<->인강변경</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="tL">할인, 이벤트, 쿠폰 적용 받기 위해</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="tL">결제 방법(할부, 결제방식 등)</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="tL">강의/교재 잘못구매</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="tL">중복결제</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td>사이트</td>
                <td class="tL">사이트 이용 불만</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td>상담</td>
                <td class="tL">상담 및 처리 루만</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td rowspan="2">개인사정</td>
                <td class="tL">개인 학습계획/일정 변경</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td class="tL">시험응시 계획 없음</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
              <tr>
                <td>기타</td>
                <td class="tL">기타</td>
                <td>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id=""/>
                    <label for=""><i></i></label>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div slot="modalfooter" class="modalfooter">
        <button class="btnM line" @click="popupTrigger = false">취소</button>
        <button class="btnM green" @click="popupTrigger = false">저장</button>
      </div>
    </Popup>
    <Popup v-if='popupTrigger02' @close="popupTrigger02 = false" :popClass="classValue02">
      <div slot="modalheader" class="tL">
        <h1>강사별 환불현황</h1>
        <span>* 선택한 강사의 월별 환불인원을 조회할 수 있습니다.</span>
      </div>
      <div slot="modalbody">
        <!-- 2021년 1월 -->
        <div class="subTit">
          <h3><em class="fBlue">2021년 1월</em></h3>
        </div>
        <div class="tls">
          <table class="wAuto">
            <colgroup>
              <col width="120"/>
              <col width="120"/>
              <col width="300"/>
              <col width="105"/>
              <col width="105"/>
              <col width="105"/>
              <col width="105"/>
              <col width="105"/>
            </colgroup>
            <thead>
              <tr>
                <th>과목</th>
                <th>강사</th>
                <th>강좌명</th>
                <th>학원(강좌)</th>
                <th>동영상(강좌)</th>
                <th class="bgRed">합계</th>
                <th>전월대비(명)</th>
                <th>전월대비(%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fBold">유아</td>
                <td>이동건</td>
                <td class="tL">연간쌤팩</td>
                <td class="tR">2</td>
                <td class="tR">2</td>
                <td class="tR">4</td>
                <td class="tR">4</td>
                <td class="tR">-34%</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td class="tL">연간쌤팩 (논술비첨삭)</td>
                <td class="tR">5</td>
                <td class="tR">60</td>
                <td class="tR">65</td>
                <td class="tR">10</td>
                <td class="tR">19%</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td class="tL">유아교육개론</td>
                <td class="tR">1</td>
                <td class="tR">7</td>
                <td class="tR">8</td>
                <td class="tR">6</td>
                <td class="tR">300%</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="emphasisBlack">
                <td colspan="3">합계</td>
                <td class="tR">8</td>
                <td class="tR">69</td>
                <td class="tR">77</td>
                <td class="tR">14</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
        <!-- //2021년 1월 -->
        <!-- 2020년 12월 -->
        <div class="subTit">
          <h3><em class="fBlue">2020년 12월</em></h3>
        </div>
        <div class="tls">
          <table class="wAuto">
            <colgroup>
              <col width="120"/>
              <col width="120"/>
              <col width="300"/>
              <col width="105"/>
              <col width="105"/>
              <col width="105"/>
            </colgroup>
            <thead>
              <tr>
                <th>과목</th>
                <th>강사</th>
                <th>강좌명</th>
                <th>학원(강좌)</th>
                <th>동영상(강좌)</th>
                <th class="bgRed">합계</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="fBold">유아</td>
                <td>이동건</td>
                <td class="tL">연간쌤팩</td>
                <td class="tR">2</td>
                <td class="tR">2</td>
                <td class="tR">4</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td class="tL">연간쌤팩 (논술비첨삭)</td>
                <td class="tR">5</td>
                <td class="tR">60</td>
                <td class="tR">65</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td class="tL">유아교육개론</td>
                <td class="tR">1</td>
                <td class="tR">7</td>
                <td class="tR">8</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="emphasisBlack">
                <td colspan="3">합계</td>
                <td class="tR">8</td>
                <td class="tR">69</td>
                <td class="tR">77</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <!-- //2020년 12월 -->
      </div>
    </Popup>
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'IndicatorRefundTeacher',
  data() {
    return {
      range: {
				start: new Date(),
				end: new Date(),
			},
      popupTrigger: false,
      popupTrigger02: false,
      classValue: "refundReasonPop",
      classValue02: "stsDetailPop",
    }
  },
  methods: {
  },
  components: {
  },
}
</script>
