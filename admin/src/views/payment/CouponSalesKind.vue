<template lang="html">
  <div>
    <div class="couponSaleKind">
      <div class="listSearch mb10">
        <div class="back">
          <div class="bdLine">
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">2021년</option>
                </select>
              </span>
            </span>
            <span class="lsItem">
              <span class="selectSet lCase">
                <select name="" id="">
                  <option value="no" class="label">1월</option>
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
        </div>
      </div>
      <div class="gridSet grid2">
        <div class="gridItem">
          <div class="subTit"><h3>2021년</h3></div>
          <div class="tls">
            <table>
              <colgroup>
                <col width="70"/>
                <col width="120"/>
                <col width="120"/>
                <col width="120"/>
                <col width="120"/>
                <col width="120"/>
                <col width="120"/>
              </colgroup>
              <thead>
                <tr>
                  <th>1월</th>
                  <th>이벤트</th>
                  <th>대학제휴</th>
                  <th>복지할인</th>
                  <th>선생님 요청</th>
                  <th>협력사</th>
                  <th class="bgPoint">합계</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true;">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>2일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>3일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>4일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>5일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>6일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>7일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>8일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>9일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>10일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>11일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>12일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>13일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true;">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>14일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>15일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>16일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>17일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>18일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>19일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>20일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>21일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>22일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>23일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>24일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>25일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true;">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>26일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>27일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>28일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>29일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>30일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>31일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <!-- 데이터 없을 경우 -->
                <tr style="display:none;"><td colspan="7" class="noneData">등록된 데이터가 없습니다.</td></tr>
                <!-- //데이터 없을 경우 -->
              </tbody>
            </table>
          </div>
        </div>
        <div class="gridItem">
          <div class="subTit"><h3>2020년</h3></div>
          <div class="tls">
            <table>
              <colgroup>
                <col width="70"/>
                <col width="120"/>
                <col width="120"/>
                <col width="120"/>
                <col width="120"/>
                <col width="120"/>
                <col width="120"/>
              </colgroup>
              <thead>
                <tr>
                  <th>1월</th>
                  <th>이벤트</th>
                  <th>대학제휴</th>
                  <th>복지할인</th>
                  <th>선생님 요청</th>
                  <th>협력사</th>
                  <th class="bgPoint">합계</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true;">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>2일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>3일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>4일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>5일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>6일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>7일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>8일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>9일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>10일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>11일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>12일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>13일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true;">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>14일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>15일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>16일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>17일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>18일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>19일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>20일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>21일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>22일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>23일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>24일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>25일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true;">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>26일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>27일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>28일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>29일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>30일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <tr>
                  <td>31일</td>
                  <td class="tR"><a @click="popTrigger = true">10,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">12,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">9,000,000원</a></td>
                  <td class="tR"><a @click="popTrigger = true">3,000,000원</a></td>
                  <td class="tR">12,000,000원</td>
                </tr>
                <!-- 데이터 없을 경우 -->
                <tr style="display:none;"><td colspan="7" class="noneData">등록된 데이터가 없습니다.</td></tr>
                <!-- //데이터 없을 경우 -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Popup v-if='popTrigger' @close="popTrigger = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>쿠폰 현황 상세</h1>
        <span>* 쿠폰 매출별 상세 쿠폰 발급현황을 확인할 수 있습니다.</span>
      </div>
      <div slot="modalbody">
        <div class="tls subGreen">
          <table>
            <colgroup>
              <col width="100"/>
              <col width="400"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
              <col width="100"/>
              <col width="150"/>
            </colgroup>
            <thead>
              <tr>
                <th>카테고리</th>
                <th>쿠폰명</th>
                <th>발급건수</th>
                <th>사용건수</th>
                <th>미사용건수</th>
                <th>사용률</th>
                <th>결제금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>이벤트</td>
                <td>[신규회원] 교육학 1~2월 단과 10% 할인 쿠폰</td>
                <td>100건</td>
                <td>80건</td>
                <td>20건</td>
                <td>80%</td>
                <td class="tR">10,000,000원</td>
              </tr>
              <!-- 데이터 없을 경우 -->
              <tr style="display:none;"><td colspan="7" class="noneData">등록된 데이터가 없습니다.</td></tr>
              <!-- //데이터 없을 경우 -->
            </tbody>
          </table>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'CouponSalesKind',
  data() {
    return {
      classValue: "couponSalesTermPop",
      popTrigger: false,
      closeBtn: false,
    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>
