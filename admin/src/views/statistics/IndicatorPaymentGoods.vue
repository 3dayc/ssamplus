<template lang="html">
  <div>
    <!-- 검색 -->
    <div class="boardTop">
      <div class="left">
        <div class="menuHelp">
          <ul>
            <li>ⓘ 결제 상품기준으로 결제 현황을 집계합니다</li>
            <li>Ⓘ 상품 중 ‘강좌’는 상세 분류로 확인 가능합니다</li>
            <li>Ⓘ 금액/건수 기준으로 확인 가능합니다</li>
          </ul>
        </div>
      </div>
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
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="typeSelect" @change="typeSelect()">
                  <option value="typeAll">상품 전체</option>
                  <option value="typeLectureEtc">강좌(상품)</option>
                  <option value="typeLecture">강좌(카테고리)</option>
                </select>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div class="right-po">
        <button class="btnM redline" id="numberBaseBtn" @click="numberBase()" v-if="numberBaseBtn">결제건수 기준으로 조회</button>
        <button class="btnM redline" id="priceBaseBtn" @click="priceBase()" v-if="priceBaseBtn">금액 기준으로 조회</button>
      </div>
    </div>
    <!-- //검색 -->
    <div class="gridSet grid2" v-if="typeAll">
      <div class="gridItem vTop pr10">
        <div class="subTit"><h3><em class="fBlue">2021년</em></h3></div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="60"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
            </colgroup>
            <thead> 
              <tr>
                <th>1월</th>
                <th>학원(강좌)</th>
                <th>온라인(강좌)</th>
                <th>교재</th>
                <th>배송비</th>
                <th>기타</th>
                <th class="bgRed">합계</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>2월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>3월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>4월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>5월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>6월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>7월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>8월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>9월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>10월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>11월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>12월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="emphasisBlack fBig">
                <td>합계</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div class="gridItem vTop">
        <div class="subTit"><h3><em class="fBlue">2020년</em></h3></div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="60"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
            </colgroup>
            <thead>
              <tr>
                <th>1월</th>
                <th>학원(강좌)</th>
                <th>온라인(강좌)</th>
                <th>교재</th>
                <th>배송비</th>
                <th>기타</th>
                <th class="bgRed">합계</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>2월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>3월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>4월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>5월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>6월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>7월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>8월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>9월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>10월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>11월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>12월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="emphasisBlack fBig">
                <td>합계</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
    <div class="gridSet grid2 scrollCase" v-if="typeLectureEtc">
      <div class="gridItem vTop pr10">
        <div class="subTit"><h3><em class="fBlue">2021년</em></h3></div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="50"/>
              <col width="100"/>
              <col width="100"/>
              <col width="80"/>
              <col width="80"/>
              <col width="80"/>
              <col width="80"/>
              <col width="100"/>
              <col width="100"/>
            </colgroup>
            <thead>
              <tr>
                <th>1월</th>
                <th>단과</th>
                <th>패키지</th>
                <th>유료보강</th>
                <th>사물함</th>
                <th>기간연장</th>
                <th>시간연장</th>
                <th>모의고사</th>
                <th class="bgRed">합계</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">100,000</td>
                <td class="tR">120,000</td>
                <td class="tR">120,000</td>
                <td class="tR">90,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>2월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">150,000</td>
                <td class="tR">140,000</td>
                <td class="tR">140,000</td>
                <td class="tR">130,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>3월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">100,000</td>
                <td class="tR">120,000</td>
                <td class="tR">120,000</td>
                <td class="tR">90,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>4월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">150,000</td>
                <td class="tR">140,000</td>
                <td class="tR">140,000</td>
                <td class="tR">130,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>5월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">100,000</td>
                <td class="tR">120,000</td>
                <td class="tR">120,000</td>
                <td class="tR">90,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>6월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">150,000</td>
                <td class="tR">140,000</td>
                <td class="tR">140,000</td>
                <td class="tR">130,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>7월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">100,000</td>
                <td class="tR">120,000</td>
                <td class="tR">120,000</td>
                <td class="tR">90,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>8월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">150,000</td>
                <td class="tR">140,000</td>
                <td class="tR">140,000</td>
                <td class="tR">130,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>9월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">100,000</td>
                <td class="tR">120,000</td>
                <td class="tR">120,000</td>
                <td class="tR">90,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>10월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">150,000</td>
                <td class="tR">140,000</td>
                <td class="tR">140,000</td>
                <td class="tR">130,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>11월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">100,000</td>
                <td class="tR">120,000</td>
                <td class="tR">120,000</td>
                <td class="tR">90,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>12월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">150,000</td>
                <td class="tR">140,000</td>
                <td class="tR">140,000</td>
                <td class="tR">130,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="emphasisBlack fBig">
                <td>합계</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">100,000</td>
                <td class="tR">120,000</td>
                <td class="tR">120,000</td>
                <td class="tR">90,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">3,000,000</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div class="gridItem vTop">
        <div class="subTit"><h3><em class="fBlue">2020년</em></h3></div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="50"/>
              <col width="100"/>
              <col width="100"/>
              <col width="80"/>
              <col width="80"/>
              <col width="80"/>
              <col width="80"/>
              <col width="100"/>
              <col width="100"/>
            </colgroup>
            <thead>
              <tr>
                <th>1월</th>
                <th>단과</th>
                <th>패키지</th>
                <th>유료보강</th>
                <th>사물함</th>
                <th>기간연장</th>
                <th>시간연장</th>
                <th>모의고사</th>
                <th class="bgRed">합계</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">100,000</td>
                <td class="tR">120,000</td>
                <td class="tR">120,000</td>
                <td class="tR">90,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>2월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">150,000</td>
                <td class="tR">140,000</td>
                <td class="tR">140,000</td>
                <td class="tR">130,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>3월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">100,000</td>
                <td class="tR">120,000</td>
                <td class="tR">120,000</td>
                <td class="tR">90,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>4월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">150,000</td>
                <td class="tR">140,000</td>
                <td class="tR">140,000</td>
                <td class="tR">130,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>5월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">100,000</td>
                <td class="tR">120,000</td>
                <td class="tR">120,000</td>
                <td class="tR">90,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>6월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">150,000</td>
                <td class="tR">140,000</td>
                <td class="tR">140,000</td>
                <td class="tR">130,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>7월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">100,000</td>
                <td class="tR">120,000</td>
                <td class="tR">120,000</td>
                <td class="tR">90,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>8월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">150,000</td>
                <td class="tR">140,000</td>
                <td class="tR">140,000</td>
                <td class="tR">130,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>9월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">100,000</td>
                <td class="tR">120,000</td>
                <td class="tR">120,000</td>
                <td class="tR">90,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>10월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">150,000</td>
                <td class="tR">140,000</td>
                <td class="tR">140,000</td>
                <td class="tR">130,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>11월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">100,000</td>
                <td class="tR">120,000</td>
                <td class="tR">120,000</td>
                <td class="tR">90,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>12월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">150,000</td>
                <td class="tR">140,000</td>
                <td class="tR">140,000</td>
                <td class="tR">130,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="emphasisBlack fBig">
                <td>합계</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">100,000</td>
                <td class="tR">120,000</td>
                <td class="tR">120,000</td>
                <td class="tR">90,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">3,000,000</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
    <div class="gridSet grid2" v-if="typeLecture">
      <div class="gridItem vTop pr10">
        <div class="subTit"><h3><em class="fBlue">2021년</em></h3></div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="60"/>
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
                <th>1월</th>
                <th>이론강의</th>
                <th>문제풀이</th>
                <th>모의고사</th>
                <th>면접실연</th>
                <th>기타특강</th>
                <th>설명회</th>
                <th>사례발표</th>
                <th class="bgRed">합계</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1일</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>2일</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>3일</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>4일</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>5일</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>6일</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>7일</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>8일</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>9일</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>10일</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>11월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>12월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="emphasisBlack fBig">
                <td>합계</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div class="gridItem vTop">
        <div class="subTit"><h3><em class="fBlue">2020년</em></h3></div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="60"/>
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
                <th>1월</th>
                <th>이론강의</th>
                <th>문제풀이</th>
                <th>모의고사</th>
                <th>면접실연</th>
                <th>기타특강</th>
                <th>설명회</th>
                <th>사례발표</th>
                <th class="bgRed">합계</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1일</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>2일</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>3일</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>4일</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>5일</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>6일</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>7일</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>8일</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>9일</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>10일</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
              <tr>
                <td>11월</td>
                <td class="tR">10,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">12,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">9,000,000</td>
                <td class="tR">3,000,000</td>
                <td class="tR">12,000,000</td>
              </tr>
              <tr>
                <td>12월</td>
                <td class="tR">15,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">14,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">13,000,000</td>
                <td class="tR">10,000,000</td>
                <td class="tR">14,000,000</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="emphasisBlack fBig">
                <td>합계</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
                <td class="tR">200,000,000</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'IndicatorPaymentGoods',
  data() {
    return {
      numberBaseBtn: true,
      priceBaseBtn: false,
      typeAll: true,
      typeLectureEtc: false,
      typeLecture: false,
    }
  },
  methods: {
    typeSelect() {
      var tgSelect = document.getElementById("typeSelect");
      var selectValue = tgSelect.options[tgSelect.selectedIndex].value;
      if(selectValue == "typeAll") {
        this.typeAll = true;
        this.typeLectureEtc = false;
        this.typeLecture = false;
      } else if(selectValue == "typeLectureEtc") {
        this.typeAll = false;
        this.typeLectureEtc = true;
        this.typeLecture = false;
      } else if(selectValue == "typeLecture") {
        this.typeAll = false;
        this.typeLectureEtc = false;
        this.typeLecture = true;
      }
    },
    numberBase() {
      this.numberBaseBtn = !this.numberBaseBtn;
      this.priceBaseBtn = !this.priceBaseBtn;
	 		this.priceTls = false;
	 		this.numberTls = true;
	  },
    priceBase() {
      this.numberBaseBtn = !this.numberBaseBtn;
      this.priceBaseBtn = !this.priceBaseBtn;
	 		this.priceTls = true;
	 		this.numberTls = false;
	  },
  },
  components: {
  },
}
</script>
