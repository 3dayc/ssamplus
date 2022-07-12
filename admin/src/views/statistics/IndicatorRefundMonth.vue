<template lang="html">
  <div>
    <!-- 종합 -->
    <div class="wHalf">
      <div class="subTit">
        <h3>종합</h3>
        <span class="right">
          <button class="btnS line" @click="popupTrigger = true">환불사유 선택</button>
        </span>
      </div>
      <div class="tls">
        <table>
          <colgroup>
            <col width="80"/>
            <col width="120"/>
            <col width="120"/>
            <col width="120"/>
            <col width="120"/>
            <col width="120"/>
            <col width="120"/>
          </colgroup>
          <thead class="duble">
            <tr>
              <th rowspan="2">결제월</th>
              <th colspan="3">건수 (%)</th>
              <th colspan="3">매출 (%) </th>
            </tr>
            <tr>
              <th><em class="fBlue">2021년</em></th>
              <th><em class="fBlue">2020년</em></th>
              <th>전년대비(%)</th>
              <th><em class="fBlue">2021년</em></th>
              <th><em class="fBlue">2020년</em></th>
              <th>전년대비(%)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1월</td>
              <td class="tR bgRed">9.8%</td>
              <td class="tR">9.8%</td>
              <td class="tR">102.1%</td>
              <td class="tR bgRed">6.2%</td>
              <td class="tR">10.2%</td>
              <td class="tR">167%</td>
            </tr>
            <tr>
              <td>2월</td>
              <td class="tR bgRed">9.3%</td>
              <td class="tR">12.0%</td>
              <td class="tR">129.0%</td>
              <td class="tR bgRed">10.2%</td>
              <td class="tR">12.2%</td>
              <td class="tR">83%</td>
            </tr>
            <tr>
              <td>3월</td>
              <td class="tR bgRed">10.0%</td>
              <td class="tR">13.6%</td>
              <td class="tR">136.0%</td>
              <td class="tR bgRed">13.7%</td>
              <td class="tR">15.7%</td>
              <td class="tR">107%</td>
            </tr>
            <tr>
              <td>4월</td>
              <td class="tR bgRed">9.4%</td>
              <td class="tR">0.0%</td>
              <td class="tR">-</td>
              <td class="tR bgRed">15.1%</td>
              <td class="tR">0.0%</td>
              <td class="tR">-</td>
            </tr>
            <tr>
              <td>5월</td>
              <td class="tR bgRed">9.2%</td>
              <td class="tR">0.0%</td>
              <td class="tR">-</td>
              <td class="tR bgRed">16.8%</td>
              <td class="tR">0.0%</td>
              <td class="tR">-</td>
            </tr>
            <tr>
              <td>6월</td>
              <td class="tR bgRed">7.9%</td>
              <td class="tR">0.0%</td>
              <td class="tR">-</td>
              <td class="tR bgRed">10.4%</td>
              <td class="tR">0.0%</td>
              <td class="tR">-</td>
            </tr>
            <tr>
              <td>7월</td>
              <td class="tR bgRed">5.1%</td>
              <td class="tR">0.0%</td>
              <td class="tR">-</td>
              <td class="tR bgRed">10.8%</td>
              <td class="tR">0.0%</td>
              <td class="tR">-</td>
            </tr>
            <tr>
              <td>8월</td>
              <td class="tR bgRed">5.8%</td>
              <td class="tR">0.0%</td>
              <td class="tR">-</td>
              <td class="tR bgRed">7.7%</td>
              <td class="tR">0.0%</td>
              <td class="tR">-</td>
            </tr>
            <tr>
              <td>9월</td>
              <td class="tR bgRed">6.4%</td>
              <td class="tR">0.0%</td>
              <td class="tR">-</td>
              <td class="tR bgRed">8.0%</td>
              <td class="tR">0.0%</td>
              <td class="tR">-</td>
            </tr>
            <tr>
              <td>10월</td>
              <td class="tR bgRed">5.6%</td>
              <td class="tR">0.0%</td>
              <td class="tR">-</td>
              <td class="tR bgRed">6.7%</td>
              <td class="tR">0.0%</td>
              <td class="tR">-</td>
            </tr>
            <tr>
              <td>11월</td>
              <td class="tR bgRed">8.1%</td>
              <td class="tR">0.0%</td>
              <td class="tR">-</td>
              <td class="tR bgRed">8.5%</td>
              <td class="tR">0.0%</td>
              <td class="tR">-</td>
            </tr>
            <tr>
              <td>12월</td>
              <td class="tR bgRed">10.1%</td>
              <td class="tR">0.0%</td>
              <td class="tR">-</td>
              <td class="tR bgRed">5.8%</td>
              <td class="tR">0.0%</td>
              <td class="tR">-</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="emphasisBlack fBig">
              <td>연간평균</td>
              <td class="tR bgRed">7.9%</td>
              <td class="tR">11.6%</td>
              <td class="tR">29%</td>
              <td class="tR bgRed">8.7%</td>
              <td class="tR">12.1%</td>
              <td class="tR">51%</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <!-- //종합 -->
    <!-- 2021년 -->
    <div class="subTit"><h3>2021년</h3></div>
    <div class="tls">
      <table>
        <colgroup>
          <col width="75"/>
          <col width="55"/>
          <col width="55"/>
          <col width="40"/>
          <col width="55"/>
          <col width="55"/>
          <col width="40"/>
          <col width="55"/>
          <col width="55"/>
          <col width="40"/>
          <col width="100"/>
          <col width="100"/>
          <col width="40"/>
          <col width="100"/>
          <col width="100"/>
          <col width="40"/>
          <col width="100"/>
          <col width="100"/>
          <col width="40"/>
        </colgroup>
        <thead class="duble">
          <tr>
            <th rowspan="3">결제월</th>
            <th colspan="9">결제 및 환불 건수</th>
            <th colspan="9">결제 및 환불 매출</th>
          </tr>
          <tr>
            <th colspan="3">학원(강좌)</th>
            <th colspan="3">온라인(강좌)</th>
            <th colspan="3">합계</th>
            <th colspan="3">학원(강좌)</th>
            <th colspan="3">온라인(강좌)</th>
            <th colspan="3">합계</th>
          </tr>
          <tr>
            <th>결제</th>
            <th>환불</th>
            <th>환불율</th>
            <th>결제</th>
            <th>환불</th>
            <th>환불율</th>
            <th>결제</th>
            <th>환불</th>
            <th>환불율</th>
            <th>결제</th>
            <th>환불</th>
            <th>환불율</th>
            <th>결제</th>
            <th>환불</th>
            <th>환불율</th>
            <th>결제</th>
            <th>환불</th>
            <th>환불율</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1월</td>
            <td class="tR">374</td>
            <td class="tR fRed">(75)</td>
            <td class="tR fItalic">20.1%</td>
            <td class="tR">4,662</td>
            <td class="tR fRed">(421)</td>
            <td class="tR fItalic">9.0%</td>
            <td class="tR"> 5,036 </td>
            <td class="tR fRed">(496) </td>
            <td class="tR bgRed fItalic">9.8%</td>
            <td class="tR"> 427,336,000 </td>
            <td class="tR fRed">(56,435,652) </td>
            <td class="tR fItalic">13.2%</td>
            <td class="tR"> 4,465,685,000 </td>
            <td class="tR fRed">(442,932,515) </td>
            <td class="tR fItalic">9.9%</td>
            <td class="tR"> 4,893,021,000 </td>
            <td class="tR fRed">(499,368,167) </td>
            <td class="tR bgRed fItalic">10.2%</td>
          </tr>
          <tr>
            <td>2월</td>
            <td class="tR">189</td>
            <td class="tR fRed">(15) </td>
            <td class="tR fItalic">7.9%</td>
            <td class="tR"> 2,115 </td>
            <td class="tR fRed">(261) </td>
            <td class="tR fItalic">12.3%</td>
            <td class="tR"> 2,304 </td>
            <td class="tR fRed">(276) </td>
            <td class="tR bgRed fItalic">12.0%</td>
            <td class="tR"> 160,958,000 </td>
            <td class="tR fRed">(19,027,280) </td>
            <td class="tR fItalic">11.8%</td>
            <td class="tR"> 1,902,110,800 </td>
            <td class="tR fRed">(232,549,154) </td>
            <td class="tR fItalic">12.2%</td>
            <td class="tR"> 2,063,068,800 </td>
            <td class="tR fRed">(251,576,434) </td>
            <td class="tR bgRed fItalic">12.2%</td>
          </tr>
          <tr>
            <td>3월</td>
            <td class="tR">207</td>
            <td class="tR fRed">(38) </td>
            <td class="tR fItalic">18.4%</td>
            <td class="tR">3,413</td>
            <td class="tR fRed">(456) </td>
            <td class="tR fItalic">13.4%</td>
            <td class="tR"> 3,620 </td>
            <td class="tR fRed">(494)</td>
            <td class="tR bgRed fItalic">13.6%</td>
            <td class="tR"> 156,789,000 </td>
            <td class="tR fRed">(28,355,560) </td>
            <td class="tR fItalic">18.1%</td>
            <td class="tR"> 2,412,241,000 </td>
            <td class="tR fRed">(375,868,823) </td>
            <td class="tR fItalic">15.6%</td>
            <td class="tR"> 2,569,030,000 </td>
            <td class="tR fRed">(404,224,383) </td>
            <td class="tR bgRed fItalic">15.7%</td>
          </tr>
          <tr>
            <td>4월</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR bgRed">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR bgRed">0.0%</td>
          </tr>
          <tr>
            <td>5월</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR bgRed">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR bgRed">0.0%</td>
          </tr>
          <tr>
            <td>6월</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR bgRed">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR bgRed">0.0%</td>
          </tr>
          <tr>
            <td>7월</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR bgRed">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR bgRed">0.0%</td>
          </tr>
          <tr>
            <td>8월</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR bgRed">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR bgRed">0.0%</td>
          </tr>
          <tr>
            <td>9월</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR bgRed">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR bgRed">0.0%</td>
          </tr>
          <tr>
            <td>10월</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR bgRed">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR bgRed">0.0%</td>
          </tr>
          <tr>
            <td>11월</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR bgRed">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR bgRed">0.0%</td>
          </tr>
          <tr>
            <td>12월</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR bgRed">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR">0.0%</td>
            <td class="tR">-</td>
            <td class="tR fRed">-</td>
            <td class="tR bgRed">0.0%</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="emphasisBlack">
            <td>합계/평균</td>
            <td class="tR"> 770 </td>
            <td class="tR fRed">(128)</td>
            <td class="tR">16.6%</td>
            <td class="tR"> 10,190 </td>
            <td class="tR fRed">(1,138) </td>
            <td class="tR">11.2%</td>
            <td class="tR"> 10,960 </td>
            <td class="tR fRed">(1,266) </td>
            <td class="tR bgRed">11.6%</td>
            <td class="tR"> 745,083,000 </td>
            <td class="tR fRed">(103,818,492) </td>
            <td class="tR">13.9%</td>
            <td class="tR"> 8,780,036,800 </td>
            <td class="tR fRed">(1,051,350,492) </td>
            <td class="tR">12.0%</td>
            <td class="tR"> 9,525,119,800 </td>
            <td class="tR fRed">(1,155,168,984) </td>
            <td class="tR bgRed">12.1%</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- //2021년 -->
    <!-- 2020년 -->
    <div class="subTit"><h3>2020년</h3></div>
    <div class="tls">
      <table>
        <colgroup>
          <col width="75"/>
          <col width="55"/>
          <col width="55"/>
          <col width="40"/>
          <col width="55"/>
          <col width="55"/>
          <col width="40"/>
          <col width="55"/>
          <col width="55"/>
          <col width="40"/>
          <col width="100"/>
          <col width="100"/>
          <col width="40"/>
          <col width="100"/>
          <col width="100"/>
          <col width="40"/>
          <col width="100"/>
          <col width="100"/>
          <col width="40"/>
        </colgroup>
        <thead class="duble">
          <tr>
            <th rowspan="3">결제월</th>
            <th colspan="9">결제 및 환불 건수</th>
            <th colspan="9">결제 및 환불 매출</th>
          </tr>
          <tr>
            <th colspan="3">학원(강좌)</th>
            <th colspan="3">온라인(강좌)</th>
            <th colspan="3">합계</th>
            <th colspan="3">학원(강좌)</th>
            <th colspan="3">온라인(강좌)</th>
            <th colspan="3">합계</th>
          </tr>
          <tr>
            <th>결제</th>
            <th>환불</th>
            <th>환불율</th>
            <th>결제</th>
            <th>환불</th>
            <th>환불율</th>
            <th>결제</th>
            <th>환불</th>
            <th>환불율</th>
            <th>결제</th>
            <th>환불</th>
            <th>환불율</th>
            <th>결제</th>
            <th>환불</th>
            <th>환불율</th>
            <th>결제</th>
            <th>환불</th>
            <th>환불율</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1월</td>
            <td class="tR">374</td>
            <td class="tR fRed">(75)</td>
            <td class="tR fItalic">20.1%</td>
            <td class="tR">4,662</td>
            <td class="tR fRed">(421)</td>
            <td class="tR fItalic">9.0%</td>
            <td class="tR"> 5,036 </td>
            <td class="tR fRed">(496) </td>
            <td class="tR bgRed fItalic">9.8%</td>
            <td class="tR"> 427,336,000 </td>
            <td class="tR fRed">(56,435,652) </td>
            <td class="tR fItalic">13.2%</td>
            <td class="tR"> 4,465,685,000 </td>
            <td class="tR fRed">(442,932,515) </td>
            <td class="tR fItalic">9.9%</td>
            <td class="tR"> 4,893,021,000 </td>
            <td class="tR fRed">(499,368,167) </td>
            <td class="tR bgRed fItalic">10.2%</td>
          </tr>
          <tr>
            <td>2월</td>
            <td class="tR">189</td>
            <td class="tR fRed">(15) </td>
            <td class="tR fItalic">7.9%</td>
            <td class="tR"> 2,115 </td>
            <td class="tR fRed">(261) </td>
            <td class="tR fItalic">12.3%</td>
            <td class="tR"> 2,304 </td>
            <td class="tR fRed">(276) </td>
            <td class="tR bgRed fItalic">12.0%</td>
            <td class="tR"> 160,958,000 </td>
            <td class="tR fRed">(19,027,280) </td>
            <td class="tR fItalic">11.8%</td>
            <td class="tR"> 1,902,110,800 </td>
            <td class="tR fRed">(232,549,154) </td>
            <td class="tR fItalic">12.2%</td>
            <td class="tR"> 2,063,068,800 </td>
            <td class="tR fRed">(251,576,434) </td>
            <td class="tR bgRed fItalic">12.2%</td>
          </tr>
          <tr>
            <td>3월</td>
            <td class="tR">207</td>
            <td class="tR fRed">(38) </td>
            <td class="tR fItalic">18.4%</td>
            <td class="tR">3,413</td>
            <td class="tR fRed">(456) </td>
            <td class="tR fItalic">13.4%</td>
            <td class="tR"> 3,620 </td>
            <td class="tR fRed">(494)</td>
            <td class="tR bgRed fItalic">13.6%</td>
            <td class="tR"> 156,789,000 </td>
            <td class="tR fRed">(28,355,560) </td>
            <td class="tR fItalic">18.1%</td>
            <td class="tR"> 2,412,241,000 </td>
            <td class="tR fRed">(375,868,823) </td>
            <td class="tR fItalic">15.6%</td>
            <td class="tR"> 2,569,030,000 </td>
            <td class="tR fRed">(404,224,383) </td>
            <td class="tR bgRed fItalic">15.7%</td>
          </tr>
          <tr>
            <td>4월</td>
            <td class="tR">374</td>
            <td class="tR fRed">(75)</td>
            <td class="tR fItalic">20.1%</td>
            <td class="tR">4,662</td>
            <td class="tR fRed">(421)</td>
            <td class="tR fItalic">9.0%</td>
            <td class="tR"> 5,036 </td>
            <td class="tR fRed">(496) </td>
            <td class="tR bgRed fItalic">9.8%</td>
            <td class="tR"> 427,336,000 </td>
            <td class="tR fRed">(56,435,652) </td>
            <td class="tR fItalic">13.2%</td>
            <td class="tR"> 4,465,685,000 </td>
            <td class="tR fRed">(442,932,515) </td>
            <td class="tR fItalic">9.9%</td>
            <td class="tR"> 4,893,021,000 </td>
            <td class="tR fRed">(499,368,167) </td>
            <td class="tR bgRed fItalic">10.2%</td>
          </tr>
          <tr>
            <td>5월</td>
            <td class="tR">189</td>
            <td class="tR fRed">(15) </td>
            <td class="tR fItalic">7.9%</td>
            <td class="tR"> 2,115 </td>
            <td class="tR fRed">(261) </td>
            <td class="tR fItalic">12.3%</td>
            <td class="tR"> 2,304 </td>
            <td class="tR fRed">(276) </td>
            <td class="tR bgRed fItalic">12.0%</td>
            <td class="tR"> 160,958,000 </td>
            <td class="tR fRed">(19,027,280) </td>
            <td class="tR fItalic">11.8%</td>
            <td class="tR"> 1,902,110,800 </td>
            <td class="tR fRed">(232,549,154) </td>
            <td class="tR fItalic">12.2%</td>
            <td class="tR"> 2,063,068,800 </td>
            <td class="tR fRed">(251,576,434) </td>
            <td class="tR bgRed fItalic">12.2%</td>
          </tr>
          <tr>
            <td>6월</td>
            <td class="tR">207</td>
            <td class="tR fRed">(38) </td>
            <td class="tR fItalic">18.4%</td>
            <td class="tR">3,413</td>
            <td class="tR fRed">(456) </td>
            <td class="tR fItalic">13.4%</td>
            <td class="tR"> 3,620 </td>
            <td class="tR fRed">(494)</td>
            <td class="tR bgRed fItalic">13.6%</td>
            <td class="tR"> 156,789,000 </td>
            <td class="tR fRed">(28,355,560) </td>
            <td class="tR fItalic">18.1%</td>
            <td class="tR"> 2,412,241,000 </td>
            <td class="tR fRed">(375,868,823) </td>
            <td class="tR fItalic">15.6%</td>
            <td class="tR"> 2,569,030,000 </td>
            <td class="tR fRed">(404,224,383) </td>
            <td class="tR bgRed fItalic">15.7%</td>
          </tr>
          <tr>
            <td>7월</td>
            <td class="tR">374</td>
            <td class="tR fRed">(75)</td>
            <td class="tR fItalic">20.1%</td>
            <td class="tR">4,662</td>
            <td class="tR fRed">(421)</td>
            <td class="tR fItalic">9.0%</td>
            <td class="tR"> 5,036 </td>
            <td class="tR fRed">(496) </td>
            <td class="tR bgRed fItalic">9.8%</td>
            <td class="tR"> 427,336,000 </td>
            <td class="tR fRed">(56,435,652) </td>
            <td class="tR fItalic">13.2%</td>
            <td class="tR"> 4,465,685,000 </td>
            <td class="tR fRed">(442,932,515) </td>
            <td class="tR fItalic">9.9%</td>
            <td class="tR"> 4,893,021,000 </td>
            <td class="tR fRed">(499,368,167) </td>
            <td class="tR bgRed fItalic">10.2%</td>
          </tr>
          <tr>
            <td>8월</td>
            <td class="tR">189</td>
            <td class="tR fRed">(15) </td>
            <td class="tR fItalic">7.9%</td>
            <td class="tR"> 2,115 </td>
            <td class="tR fRed">(261) </td>
            <td class="tR fItalic">12.3%</td>
            <td class="tR"> 2,304 </td>
            <td class="tR fRed">(276) </td>
            <td class="tR bgRed fItalic">12.0%</td>
            <td class="tR"> 160,958,000 </td>
            <td class="tR fRed">(19,027,280) </td>
            <td class="tR fItalic">11.8%</td>
            <td class="tR"> 1,902,110,800 </td>
            <td class="tR fRed">(232,549,154) </td>
            <td class="tR fItalic">12.2%</td>
            <td class="tR"> 2,063,068,800 </td>
            <td class="tR fRed">(251,576,434) </td>
            <td class="tR bgRed fItalic">12.2%</td>
          </tr>
          <tr>
            <td>9월</td>
            <td class="tR">207</td>
            <td class="tR fRed">(38) </td>
            <td class="tR fItalic">18.4%</td>
            <td class="tR">3,413</td>
            <td class="tR fRed">(456) </td>
            <td class="tR fItalic">13.4%</td>
            <td class="tR"> 3,620 </td>
            <td class="tR fRed">(494)</td>
            <td class="tR bgRed fItalic">13.6%</td>
            <td class="tR"> 156,789,000 </td>
            <td class="tR fRed">(28,355,560) </td>
            <td class="tR fItalic">18.1%</td>
            <td class="tR"> 2,412,241,000 </td>
            <td class="tR fRed">(375,868,823) </td>
            <td class="tR fItalic">15.6%</td>
            <td class="tR"> 2,569,030,000 </td>
            <td class="tR fRed">(404,224,383) </td>
            <td class="tR bgRed fItalic">15.7%</td>
          </tr>
          <tr>
            <td>10월</td>
            <td class="tR">374</td>
            <td class="tR fRed">(75)</td>
            <td class="tR fItalic">20.1%</td>
            <td class="tR">4,662</td>
            <td class="tR fRed">(421)</td>
            <td class="tR fItalic">9.0%</td>
            <td class="tR"> 5,036 </td>
            <td class="tR fRed">(496) </td>
            <td class="tR bgRed fItalic">9.8%</td>
            <td class="tR"> 427,336,000 </td>
            <td class="tR fRed">(56,435,652) </td>
            <td class="tR fItalic">13.2%</td>
            <td class="tR"> 4,465,685,000 </td>
            <td class="tR fRed">(442,932,515) </td>
            <td class="tR fItalic">9.9%</td>
            <td class="tR"> 4,893,021,000 </td>
            <td class="tR fRed">(499,368,167) </td>
            <td class="tR bgRed fItalic">10.2%</td>
          </tr>
          <tr>
            <td>11월</td>
            <td class="tR">189</td>
            <td class="tR fRed">(15) </td>
            <td class="tR fItalic">7.9%</td>
            <td class="tR"> 2,115 </td>
            <td class="tR fRed">(261) </td>
            <td class="tR fItalic">12.3%</td>
            <td class="tR"> 2,304 </td>
            <td class="tR fRed">(276) </td>
            <td class="tR bgRed fItalic">12.0%</td>
            <td class="tR"> 160,958,000 </td>
            <td class="tR fRed">(19,027,280) </td>
            <td class="tR fItalic">11.8%</td>
            <td class="tR"> 1,902,110,800 </td>
            <td class="tR fRed">(232,549,154) </td>
            <td class="tR fItalic">12.2%</td>
            <td class="tR"> 2,063,068,800 </td>
            <td class="tR fRed">(251,576,434) </td>
            <td class="tR bgRed fItalic">12.2%</td>
          </tr>
          <tr>
            <td>12월</td>
            <td class="tR">207</td>
            <td class="tR fRed">(38) </td>
            <td class="tR fItalic">18.4%</td>
            <td class="tR">3,413</td>
            <td class="tR fRed">(456) </td>
            <td class="tR fItalic">13.4%</td>
            <td class="tR"> 3,620 </td>
            <td class="tR fRed">(494)</td>
            <td class="tR bgRed fItalic">13.6%</td>
            <td class="tR"> 156,789,000 </td>
            <td class="tR fRed">(28,355,560) </td>
            <td class="tR fItalic">18.1%</td>
            <td class="tR"> 2,412,241,000 </td>
            <td class="tR fRed">(375,868,823) </td>
            <td class="tR fItalic">15.6%</td>
            <td class="tR"> 2,569,030,000 </td>
            <td class="tR fRed">(404,224,383) </td>
            <td class="tR bgRed fItalic">15.7%</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="emphasisBlack">
            <td>합계/평균</td>
            <td class="tR"> 770 </td>
            <td class="tR fRed">(128)</td>
            <td class="tR">16.6%</td>
            <td class="tR"> 10,190 </td>
            <td class="tR fRed">(1,138) </td>
            <td class="tR">11.2%</td>
            <td class="tR"> 10,960 </td>
            <td class="tR fRed">(1,266) </td>
            <td class="tR bgRed">11.6%</td>
            <td class="tR"> 745,083,000 </td>
            <td class="tR fRed">(103,818,492) </td>
            <td class="tR">13.9%</td>
            <td class="tR"> 8,780,036,800 </td>
            <td class="tR fRed">(1,051,350,492) </td>
            <td class="tR">12.0%</td>
            <td class="tR"> 9,525,119,800 </td>
            <td class="tR fRed">(1,155,168,984) </td>
            <td class="tR bgRed">12.1%</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- //2020년 -->


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
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'IndicatorRefundMonth',
  data() {
    return {
      popupTrigger: false,
      classValue: "refundReasonPop",
    }
  },
  methods: {
  },
  components: {
  },
}
</script>
