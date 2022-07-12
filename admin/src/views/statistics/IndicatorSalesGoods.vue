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
                  <option value="">2022년</option>
                  <option value="">2021년</option>
                </select>
              </span>
            </span>
          </div>
          <div><button class="btnRefresh">초기화</button></div>
        </div>
      </div>
    </div>
    <!-- //검색 -->
    <div class="tls">
      <table>
        <colgroup>
          <col width="80"/>
          <col width="120"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
          <col width="100"/>
        </colgroup>
        <thead>
          <tr>
            <th colspan="2">구분</th>
            <th>1월</th>
            <th>2월</th>
            <th>3월</th>
            <th>4월</th>
            <th>5월</th>
            <th>6월</th>
            <th>7월</th>
            <th>8월</th>
            <th>9월</th>
            <th>10월</th>
            <th>11월</th>
            <th>12월</th>
            <th>합계</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="5">2022년</td>
            <td>학원 (강좌)</td>
            <td class="tR"><a @click="popupTrigger = true">100,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">100,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">100,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">100,000원</a></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td class="tR fRed fBold">400,000원</td>
          </tr>
          <tr>
            <td>온라인 (강좌)</td>
            <td class="tR"><a @click="popupTrigger02 = true">100,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">100,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">100,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">100,000원</a></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td class="tR fRed fBold">400,000원</td>
          </tr>
          <tr>
            <td>교재</td>
            <td class="tR"><a @click="popupTrigger03 = true">100,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">100,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">100,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">100,000원</a></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td class="tR fRed fBold">400,000원</td>
          </tr>
          <tr>
            <td>기타</td>
            <td class="tR"><a @click="popupTrigger04 = true">100,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">100,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">100,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">100,000원</a></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td class="tR fRed fBold">400,000원</td>
          </tr>
          <tr>
            <td class="bgRed fBold">합계</td>
            <td class="tR bgRed fBold">400,000원</td>
            <td class="tR bgRed fBold">400,000원</td>
            <td class="tR bgRed fBold">400,000원</td>
            <td class="tR bgRed fBold">400,000원</td>
            <td class="bgRed">-</td>
            <td class="bgRed">-</td>
            <td class="bgRed">-</td>
            <td class="bgRed">-</td>
            <td class="bgRed">-</td>
            <td class="bgRed">-</td>
            <td class="bgRed">-</td>
            <td class="bgRed">-</td>
            <td class="tR fRed bgRed fBold">1,600,000원</td>
          </tr>
          <tr>
            <td rowspan="5">2021년</td>
            <td>학원 (강좌)</td>
            <td class="tR"><a @click="popupTrigger = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">50,000원</a></td>
            <td class="tR fRed fBold">600,000원</td>
          </tr>
          <tr>
            <td>온라인 (강좌)</td>
            <td class="tR"><a @click="popupTrigger02 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">50,000원</a></td>
            <td class="tR fRed fBold">600,000원</td>
          </tr>
          <tr>
            <td>교재</td>
            <td class="tR"><a @click="popupTrigger03 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">50,000원</a></td>
            <td class="tR fRed fBold">600,000원</td>
          </tr>
          <tr>
            <td>기타</td>
            <td class="tR"><a @click="popupTrigger04 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">50,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">50,000원</a></td>
            <td class="tR fRed fBold">600,000원</td>
          </tr>
          <tr>
            <td class="bgRed fBold">합계</td>
            <td class="tR bgRed fBold">200,000원</td>
            <td class="tR bgRed fBold">200,000원</td>
            <td class="tR bgRed fBold">200,000원</td>
            <td class="tR bgRed fBold">200,000원</td>
            <td class="tR bgRed fBold">200,000원</td>
            <td class="tR bgRed fBold">200,000원</td>
            <td class="tR bgRed fBold">200,000원</td>
            <td class="tR bgRed fBold">200,000원</td>
            <td class="tR bgRed fBold">200,000원</td>
            <td class="tR bgRed fBold">200,000원</td>
            <td class="tR bgRed fBold">200,000원</td>
            <td class="tR bgRed fBold">200,000원</td>
            <td class="tR fRed bgRed fBold">2,400,000원</td>
          </tr>
          <tr>
            <td rowspan="5">2020년</td>
            <td>학원 (강좌)</td>
            <td class="tR"><a @click="popupTrigger = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger = true">30,000원</a></td>
            <td class="tR fRed fBold">360,000원</td>
          </tr>
          <tr>
            <td>온라인 (강좌)</td>
            <td class="tR"><a @click="popupTrigger02 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger02 = true">30,000원</a></td>
            <td class="tR fRed fBold">360,000원</td>
          </tr>
          <tr>
            <td>교재</td>
            <td class="tR"><a @click="popupTrigger03 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger03 = true">30,000원</a></td>
            <td class="tR fRed fBold">360,000원</td>
          </tr>
          <tr>
            <td>기타</td>
            <td class="tR"><a @click="popupTrigger04 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">30,000원</a></td>
            <td class="tR"><a @click="popupTrigger04 = true">30,000원</a></td>
            <td class="tR fRed fBold">360,000원</td>
          </tr>
          <tr>
            <td class="bgRed fBold">합계</td>
            <td class="tR bgRed fBold">120,000원</td>
            <td class="tR bgRed fBold">120,000원</td>
            <td class="tR bgRed fBold">120,000원</td>
            <td class="tR bgRed fBold">120,000원</td>
            <td class="tR bgRed fBold">120,000원</td>
            <td class="tR bgRed fBold">120,000원</td>
            <td class="tR bgRed fBold">120,000원</td>
            <td class="tR bgRed fBold">120,000원</td>
            <td class="tR bgRed fBold">120,000원</td>
            <td class="tR bgRed fBold">120,000원</td>
            <td class="tR bgRed fBold">120,000원</td>
            <td class="tR bgRed fBold">120,000원</td>
            <td class="tR fRed bgRed fBold">1,440,000원</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Popup -->
    <!-- 학원 (강좌) -->
    <Popup v-if='popupTrigger' @close="popupTrigger = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>매출현황 – <em class="fBlue fInherit">2021년 04월</em></h1>
        <span>* 매출현황 내역을 상품별 팝업으로 상세 조회할 수 있습니다.</span>
      </div>
      <div slot="modalbody">
        <div class="tls">
          <table>
            <colgroup>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
            </colgroup>
            <thead class="duble">
              <tr>
                <th rowspan="2">구분</th>
                <th colspan="3">학원 (강좌)</th>
              </tr>
              <tr>
                <th><em class="fBlue">2021년</em></th>
                <th><em class="fBlue">2020년</em></th>
                <th>성장율</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>04/01</td>
                <td>10,000원</td>
                <td>5,000원</td>
                <td>200%</td>
              </tr>
              <tr>
                <td>04/02</td>
                <td>5,000원</td>
                <td>10,000원</td>
                <td class="fRed">50%</td>
              </tr>
              <tr>
                <td>04/03</td>
                <td>10,000원</td>
                <td>5,000원</td>
                <td>200%</td>
              </tr>
              <tr>
                <td>04/04</td>
                <td>5,000원</td>
                <td>10,000원</td>
                <td class="fRed">50%</td>
              </tr>
              <tr>
                <td>04/05</td>
                <td>10,000원</td>
                <td>5,000원</td>
                <td>200%</td>
              </tr>
              <tr>
                <td>04/06</td>
                <td>5,000원</td>
                <td>10,000원</td>
                <td class="fRed">50%</td>
              </tr>
              <tr>
                <td>04/07</td>
                <td>10,000원</td>
                <td>5,000원</td>
                <td>200%</td>
              </tr>
              <tr>
                <td>04/08</td>
                <td>5,000원</td>
                <td>10,000원</td>
                <td class="fRed">50%</td>
              </tr>
              <tr>
                <td>04/09</td>
                <td>10,000원</td>
                <td>5,000원</td>
                <td>200%</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="emphasisBlack">
                <td class="bgRed">합계</td>
                <td class="bgRed"></td>
                <td class="bgRed">200%</td>
                <td class="bgRed">200%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </Popup>
    <!-- //학원 (강좌) -->
    <!-- 온라인 (강좌) -->
    <Popup v-if='popupTrigger02' @close="popupTrigger02 = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>매출현황 – <em class="fBlue fInherit">2021년 04월</em></h1>
        <span>* 매출현황 내역을 상품별 팝업으로 상세 조회할 수 있습니다.</span>
      </div>
      <div slot="modalbody">
        <div class="tls">
          <table>
            <colgroup>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
            </colgroup>
            <thead class="duble">
              <tr>
                <th rowspan="2">구분</th>
                <th colspan="3">온라인 (강좌)</th>
              </tr>
              <tr>
                <th><em class="fBlue">2021년</em></th>
                <th><em class="fBlue">2020년</em></th>
                <th>성장율</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>04/01</td>
                <td>10,000원</td>
                <td>5,000원</td>
                <td>200%</td>
              </tr>
              <tr>
                <td>04/02</td>
                <td>5,000원</td>
                <td>10,000원</td>
                <td class="fRed">50%</td>
              </tr>
              <tr>
                <td>04/03</td>
                <td>10,000원</td>
                <td>5,000원</td>
                <td>200%</td>
              </tr>
              <tr>
                <td>04/04</td>
                <td>5,000원</td>
                <td>10,000원</td>
                <td class="fRed">50%</td>
              </tr>
              <tr>
                <td>04/05</td>
                <td>10,000원</td>
                <td>5,000원</td>
                <td>200%</td>
              </tr>
              <tr>
                <td>04/06</td>
                <td>5,000원</td>
                <td>10,000원</td>
                <td class="fRed">50%</td>
              </tr>
              <tr>
                <td>04/07</td>
                <td>10,000원</td>
                <td>5,000원</td>
                <td>200%</td>
              </tr>
              <tr>
                <td>04/08</td>
                <td>5,000원</td>
                <td>10,000원</td>
                <td class="fRed">50%</td>
              </tr>
              <tr>
                <td>04/09</td>
                <td>10,000원</td>
                <td>5,000원</td>
                <td>200%</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="emphasisBlack">
                <td class="bgRed">합계</td>
                <td class="bgRed"></td>
                <td class="bgRed">200%</td>
                <td class="bgRed">200%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </Popup>
    <!-- //온라인 (강좌) -->
    <!-- 교재 -->
    <Popup v-if='popupTrigger03' @close="popupTrigger03 = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>매출현황 – <em class="fBlue fInherit">2021년 04월</em></h1>
        <span>* 매출현황 내역을 상품별 팝업으로 상세 조회할 수 있습니다.</span>
      </div>
      <div slot="modalbody">
        <div class="tls">
          <table>
            <colgroup>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
            </colgroup>
            <thead class="duble">
              <tr>
                <th rowspan="2">구분</th>
                <th colspan="3">교재</th>
              </tr>
              <tr>
                <th><em class="fBlue">2021년</em></th>
                <th><em class="fBlue">2020년</em></th>
                <th>성장율</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>04/01</td>
                <td>10,000원</td>
                <td>5,000원</td>
                <td>200%</td>
              </tr>
              <tr>
                <td>04/02</td>
                <td>5,000원</td>
                <td>10,000원</td>
                <td class="fRed">50%</td>
              </tr>
              <tr>
                <td>04/03</td>
                <td>10,000원</td>
                <td>5,000원</td>
                <td>200%</td>
              </tr>
              <tr>
                <td>04/04</td>
                <td>5,000원</td>
                <td>10,000원</td>
                <td class="fRed">50%</td>
              </tr>
              <tr>
                <td>04/05</td>
                <td>10,000원</td>
                <td>5,000원</td>
                <td>200%</td>
              </tr>
              <tr>
                <td>04/06</td>
                <td>5,000원</td>
                <td>10,000원</td>
                <td class="fRed">50%</td>
              </tr>
              <tr>
                <td>04/07</td>
                <td>10,000원</td>
                <td>5,000원</td>
                <td>200%</td>
              </tr>
              <tr>
                <td>04/08</td>
                <td>5,000원</td>
                <td>10,000원</td>
                <td class="fRed">50%</td>
              </tr>
              <tr>
                <td>04/09</td>
                <td>10,000원</td>
                <td>5,000원</td>
                <td>200%</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="emphasisBlack">
                <td class="bgRed">합계</td>
                <td class="bgRed"></td>
                <td class="bgRed">200%</td>
                <td class="bgRed">200%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </Popup>
    <!-- //교재 -->
    <!-- 기타 (수강기기, 제본교재) -->
    <Popup v-if='popupTrigger04' @close="popupTrigger04 = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>매출현황 – <em class="fBlue fInherit">2021년 04월</em></h1>
        <span>* 매출현황 내역을 상품별 팝업으로 상세 조회할 수 있습니다.</span>
      </div>
      <div slot="modalbody">
        <div class="tls">
          <table>
            <colgroup>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
            </colgroup>
            <thead class="duble">
              <tr>
                <th rowspan="2">구분</th>
                <th colspan="3">기타 (수강기기, 제본교재)</th>
              </tr>
              <tr>
                <th><em class="fBlue">2021년</em></th>
                <th><em class="fBlue">2020년</em></th>
                <th>성장율</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>04/01</td>
                <td>10,000원</td>
                <td>5,000원</td>
                <td>200%</td>
              </tr>
              <tr>
                <td>04/02</td>
                <td>5,000원</td>
                <td>10,000원</td>
                <td class="fRed">50%</td>
              </tr>
              <tr>
                <td>04/03</td>
                <td>10,000원</td>
                <td>5,000원</td>
                <td>200%</td>
              </tr>
              <tr>
                <td>04/04</td>
                <td>5,000원</td>
                <td>10,000원</td>
                <td class="fRed">50%</td>
              </tr>
              <tr>
                <td>04/05</td>
                <td>10,000원</td>
                <td>5,000원</td>
                <td>200%</td>
              </tr>
              <tr>
                <td>04/06</td>
                <td>5,000원</td>
                <td>10,000원</td>
                <td class="fRed">50%</td>
              </tr>
              <tr>
                <td>04/07</td>
                <td>10,000원</td>
                <td>5,000원</td>
                <td>200%</td>
              </tr>
              <tr>
                <td>04/08</td>
                <td>5,000원</td>
                <td>10,000원</td>
                <td class="fRed">50%</td>
              </tr>
              <tr>
                <td>04/09</td>
                <td>10,000원</td>
                <td>5,000원</td>
                <td>200%</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="emphasisBlack">
                <td class="bgRed">합계</td>
                <td class="bgRed"></td>
                <td class="bgRed">200%</td>
                <td class="bgRed">200%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </Popup>
    <!-- //기타 (수강기기, 제본교재) -->
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'IndicatorSalesGoods',
  data() {
    return {
      popupTrigger: false,
      popupTrigger02: false,
      popupTrigger03: false,
      popupTrigger04: false,
      classValue: "refundReasonPop",
    }
  },
  methods: {
  },
  components: {
  },
}
</script>
