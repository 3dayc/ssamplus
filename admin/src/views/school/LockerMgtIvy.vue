<template lang="html">
  <div>
    <div class="boardTop">
      <span class="left">
        <span class="selectSet mr10">
          <select name="" id="">
            <option value="no" class="label">선택하세요</option>
            <option value="" selected>4층 A구역</option>
            <option value="">4층 B구역</option>
            <option value="">4층 C구역</option>
            <option value="">6층 A구역</option>
            <option value="">6층 B구역</option>
            <option value="">6층 C구역</option>
            <option value="">11층 A구역</option>
            <option value="">11층 B구역</option>
          </select>
        </span>
      </span>
      <div class="right">
        <div class="tR">
          <strong>회원 개인정보 표출</strong>
          <span class="toggleSet ml5">
            <input type="checkbox" id="push" />
            <label for="push"><!--적용여부--></label>
          </span>
        </div>
        <dl>
          <dt>사용가능</dt>
          <dd><strong>13</strong>개</dd>
        </dl>
        <dl>
          <dt>사용중</dt>
          <dd><strong>13</strong>개 (기간만료  <strong>3</strong>개)</dd>
        </dl>
        <dl>
          <dt>고장</dt>
          <dd><strong>13</strong>개</dd>
        </dl>
      </div>
    </div>
    <!-- 사물함 -->
    <div class="locker">
      <table>
        <tbody>
          <tr>
            <td>
              <strong class="lockNum">1</strong>
              <span class="status">사용가능</span>
              <ul></ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
              </div>
            </td>
            <td class="on">
              <strong class="lockNum">2</strong>
              <span class="status">사용 중</span>
              <ul>
                <li>361145 |  김*민  |  jim*****</li>
                <li>2021-05-01 ~ 2021-05-31</li>
                <li>유료</li>
              </ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
                <button class="btnT" @click="alertTrigger = true">사용종료</button>
                <button class="btnT" @click="popupTrigger2 = true">사용이력</button>
              </div>
            </td>
            <td class="break">
              <strong class="lockNum">3</strong>
              <span class="status">고장</span>
              <ul></ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
              </div>
            </td>
            <td class="expire">
              <strong class="lockNum">4</strong>
              <span class="status">기간만료</span>
              <ul>
                <li>361145 |  김*민  |  jim*****</li>
                <li>2021-05-01 ~ 2021-05-31</li>
                <li>유료</li>
              </ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
                <button class="btnT" @click="alertTrigger = true">사용종료</button>
              </div>
            </td>
            <td class="on">
              <strong class="lockNum">2</strong>
              <span class="status">사용 중</span>
              <ul>
                <li>361145 |  김*민  |  jim*****</li>
                <li>2021-05-01 ~ 2021-05-31</li>
                <li>유료</li>
              </ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
                <button class="btnT" @click="alertTrigger = true">사용종료</button>
                <button class="btnT" @click="popupTrigger2 = true">사용이력</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <strong class="lockNum">6</strong>
              <span class="status">사용가능</span>
              <ul></ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
              </div>
            </td>
            <td class="on">
              <strong class="lockNum">7</strong>
              <span class="status">사용 중</span>
              <ul>
                <li>361145 |  김*민  |  jim*****</li>
                <li>2021-05-01 ~ 2021-05-31</li>
                <li class="ellipsis01">무료 (쌤팩 프리미엄 회원)</li>
              </ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
                <button class="btnT" @click="alertTrigger = true">사용종료</button>
                <button class="btnT" @click="popupTrigger2 = true">사용이력</button>
              </div>
            </td>
            <td class="break">
              <strong class="lockNum">8</strong>
              <span class="status">고장</span>
              <ul></ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
              </div>
            </td>
            <td class="expire">
              <strong class="lockNum">9</strong>
              <span class="status">기간만료</span>
              <ul>
                <li>361145 |  김*민  |  jim*****</li>
                <li>2021-05-01 ~ 2021-05-31</li>
                <li class="ellipsis01">무료 (김현 선생님 지인)</li>
              </ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
                <button class="btnT" @click="alertTrigger = true">사용종료</button>
              </div>
            </td>
            <td class="on">
              <strong class="lockNum">10</strong>
              <span class="status">사용 중</span>
              <ul>
                <li>361145 |  김*민  |  jim*****</li>
                <li>2021-05-01 ~ 2021-05-31</li>
                <li class="ellipsis01">무료 (쌤팩 프리미엄 회원)</li>
              </ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
                <button class="btnT" @click="alertTrigger = true">사용종료</button>
                <button class="btnT" @click="popupTrigger2 = true">사용이력</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <strong class="lockNum">11</strong>
              <span class="status">사용가능</span>
              <ul></ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
              </div>
            </td>
            <td class="on">
              <strong class="lockNum">12</strong>
              <span class="status">사용 중</span>
              <ul>
                <li>361145 |  김*민  |  jim*****</li>
                <li>2021-05-01 ~ 2021-05-31</li>
                <li>유료</li>
              </ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
                <button class="btnT" @click="alertTrigger = true">사용종료</button>
                <button class="btnT" @click="popupTrigger2 = true">사용이력</button>
              </div>
            </td>
            <td>
              <strong class="lockNum">13</strong>
              <span class="status">사용가능</span>
              <ul></ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
              </div>
            </td>
            <td class="expire">
              <strong class="lockNum">14</strong>
              <span class="status">기간만료</span>
              <ul>
                <li>361145 |  김*민  |  jim*****</li>
                <li>2021-05-01 ~ 2021-05-31</li>
                <li>유료</li>
              </ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
                <button class="btnT" @click="alertTrigger = true">사용종료</button>
              </div>
            </td>
            <td class="on">
              <strong class="lockNum">15</strong>
              <span class="status">사용 중</span>
              <ul>
                <li>361145 |  김*민  |  jim*****</li>
                <li>2021-05-01 ~ 2021-05-31</li>
                <li>유료</li>
              </ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
                <button class="btnT" @click="alertTrigger = true">사용종료</button>
                <button class="btnT" @click="popupTrigger2 = true">사용이력</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <strong class="lockNum">16</strong>
              <span class="status">사용가능</span>
              <ul></ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
              </div>
            </td>
            <td class="on">
              <strong class="lockNum">17</strong>
              <span class="status">사용 중</span>
              <ul>
                <li>361145 |  김*민  |  jim*****</li>
                <li>2021-05-01 ~ 2021-05-31</li>
                <li class="ellipsis01">무료 (김현쌤 직강 1년차 학생입니다)무료 (김현쌤 직강 1년차 학생입니다)무료 (김현쌤 직강 1년차 학생입니다)</li>
              </ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
                <button class="btnT" @click="alertTrigger = true">사용종료</button>
                <button class="btnT" @click="popupTrigger2 = true">사용이력</button>
              </div>
            </td>
            <td>
              <strong class="lockNum">18</strong>
              <span class="status">사용가능</span>
              <ul></ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
              </div>
            </td>
            <td>
              <strong class="lockNum">19</strong>
              <span class="status">사용가능</span>
              <ul></ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
              </div>
            </td>
            <td class="on">
              <strong class="lockNum">20</strong>
              <span class="status">사용 중</span>
              <ul>
                <li>361145 |  김*민  |  jim*****</li>
                <li>2021-05-01 ~ 2021-05-31</li>
                <li class="ellipsis01">무료 (쌤팩 프리미엄 회원)</li>
              </ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
                <button class="btnT" @click="alertTrigger = true">사용종료</button>
                <button class="btnT" @click="popupTrigger2 = true">사용이력</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <strong class="lockNum">21</strong>
              <span class="status">사용가능</span>
              <ul></ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
              </div>
            </td>
            <td class="on">
              <strong class="lockNum">22</strong>
              <span class="status">사용 중</span>
              <ul>
                <li>361145 |  김*민  |  jim*****</li>
                <li>2021-05-01 ~ 2021-05-31</li>
                <li>유료</li>
              </ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
                <button class="btnT" @click="alertTrigger = true">사용종료</button>
                <button class="btnT" @click="popupTrigger2 = true">사용이력</button>
              </div>
            </td>
            <td>
              <strong class="lockNum">23</strong>
              <span class="status">사용가능</span>
              <ul></ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
              </div>
            </td>
            <td>
              <strong class="lockNum">24</strong>
              <span class="status">사용가능</span>
              <ul></ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
              </div>
            </td>
            <td class="on">
              <strong class="lockNum">25</strong>
              <span class="status">사용 중</span>
              <ul>
                <li>361145 |  김*민  |  jim*****</li>
                <li>2021-05-01 ~ 2021-05-31</li>
                <li>유료</li>
              </ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
                <button class="btnT" @click="alertTrigger = true">사용종료</button>
                <button class="btnT" @click="popupTrigger2 = true">사용이력</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <strong class="lockNum">26</strong>
              <span class="status">사용가능</span>
              <ul></ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
              </div>
            </td>
            <td class="on">
              <strong class="lockNum">27</strong>
              <span class="status">사용 중</span>
              <ul>
                <li>361145 |  김*민  |  jim*****</li>
                <li>2021-05-01 ~ 2021-05-31</li>
                <li class="ellipsis01">무료 (관리자 제공)</li>
              </ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
                <button class="btnT" @click="alertTrigger = true">사용종료</button>
                <button class="btnT" @click="popupTrigger2 = true">사용이력</button>
              </div>
            </td>
            <td>
              <strong class="lockNum">28</strong>
              <span class="status">사용가능</span>
              <ul></ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
              </div>
            </td>
            <td>
              <strong class="lockNum">29</strong>
              <span class="status">사용가능</span>
              <ul></ul>
              <div class="lockerSet">
                <button class="btnT" @click="popupTrigger = true">관리</button>
              </div>
            </td>
            <td class="add">
              <button class="btnLockerAdd">+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- //사물함 -->

    <!-- Popup -->
    <!-- 사물함 신규 신청 -->
    <Popup v-if='popupTrigger' @close="popupTrigger = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
	      <h1>사물함 관리</h1>
	      <span>* 선택한 사물함의 상태를 관리할 수 있습니다.</span>
	    </div>
      <div slot="modalbody">
        <div class="tvs">
          <table>
            <colgroup>
              <col width="130"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>사물함 위치 <sup>필수</sup></th>
                <td class="halfUnit">
                  <span class="selectSet">
                    <select name="" id="" disabled>
                      <option value="no" class="label">선택하세요</option>
                      <option value="" selected>4층 A구역</option>
                      <option value="">4층 B구역</option>
                      <option value="">5층 A구역</option>
                      <option value="">5층 B구역</option>
                      <option value="">5층 C구역</option>
                      <option value="">6층 A구역</option>
                      <option value="">6층 B구역</option>
                      <option value="">11층 A구역</option>
                      <option value="">11층 B구역</option>
                    </select>
                  </span>
                  <span class="selectSet">
                    <select name="" id="" disabled>
                      <option value="" selected>16번</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <th>상태 관리 <sup>필수</sup></th>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="" selected>정상</option>
                      <option value="" selected>고장</option>
                    </select>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div slot="modalfooter" class="modalfooter">
        <button class="btnM" @click="popupTrigger = false">완료</button>
        <button class="btnM line" @click="popupTrigger = false">취소</button>
      </div>
    </Popup>
    <!-- //사물함 신규 신청 -->
    <!-- 사물함 사용 이력 -->
    <Popup v-if='popupTrigger2' @close="popupTrigger2 = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>사물함 사용이력</h1>
        <span>* 사용중인 사물함의 사용이력을 조회 및 다운로드 할 수 있습니다.</span>
      </div>
      <div slot="modalbody">
        <div class="tvs">
          <table>
            <colgroup>
              <col width="130"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>사물함 위치</th>
                <td class="halfUnit">
                  <span class="selectSet">
                    <select name="" id="" disabled>
                      <option value="no" class="label">선택하세요</option>
                      <option value="" selected>4층 A구역</option>
                      <option value="">4층 B구역</option>
                      <option value="">5층 A구역</option>
                      <option value="">5층 B구역</option>
                      <option value="">5층 C구역</option>
                      <option value="">6층 A구역</option>
                      <option value="">6층 B구역</option>
                      <option value="">11층 A구역</option>
                      <option value="">11층 B구역</option>
                    </select>
                  </span>
                  <span class="selectSet">
                    <select name="" id="" disabled>
                      <option value="" selected>16번</option>
                    </select>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="subTit">
          <h3>사용이력</h3>
          <div class="right">
            <button type="button" class="btnDownload">다운로드</button>
          </div>
        </div>
        <div class="tls">
          <table>
            <colgroup>
              <col width="*"/>
              <col width="120"/>
              <col width="90"/>
            </colgroup>
            <thead>
              <tr>
                <th>사용자</th>
                <th>사용일자</th>
                <th>신청구문</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>361145 |  김*민  |  jim*****</td>
                <td>2021-05-01 ~ <br/>2021-05-31</td>
                <td>유료</td>
              </tr>
              <tr>
                <td>361145 |  김*민  |  jim*****</td>
                <td>2021-05-01 ~ <br/>2021-05-31</td>
                <td>유료</td>
              </tr>
              <tr>
                <td>361145 |  김*민  |  jim*****</td>
                <td>2021-05-01 ~ <br/>2021-05-31</td>
                <td>유료</td>
              </tr>
              <tr>
                <td>361145 |  김*민  |  jim*****</td>
                <td>2021-05-01 ~ <br/>2021-05-31</td>
                <td>유료</td>
              </tr>
              <tr>
                <td>361145 |  김*민  |  jim*****</td>
                <td>2021-05-01 ~ <br/>2021-05-31</td>
                <td>유료</td>
              </tr>
              <tr>
                <td>361145 |  김*민  |  jim*****</td>
                <td>2021-05-01 ~ <br/>2021-05-31</td>
                <td>유료</td>
              </tr>
              <tr>
                <td>361145 |  김*민  |  jim*****</td>
                <td>2021-05-01 ~ <br/>2021-05-31</td>
                <td>유료</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Popup>
    <!-- //사물함 사용 이력 -->
    <!-- 사물함 사용 종료 -->
    <Alert v-if='alertTrigger' @close="alertTrigger = false">
      <template slot="modalbody">
        해당 사물함을 사용 종료 처리하시겠습니까?
      </template>
      <template slot="modalfooter">
        <button class="btnM gray" @click="alertTrigger = false">아니오</button>
        <button class="btnM green" @click="alertTrigger = false">예</button>
      </template>
    </Alert>
    <!-- 사물함 사용 종료 -->
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'userSaleLockerIdea',
  data() {
    return {
      popupTrigger: false,
      popupTrigger2: false,
      alertTrigger: false,
      date: '',
    }
  },
  methods: {
  },
  components: {
  },
}
</script>
