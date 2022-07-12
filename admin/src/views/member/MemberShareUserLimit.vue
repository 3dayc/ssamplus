<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>공유의심 - 수강 제한 관리</h1>
      <span class="supTxt">* 강의 공유 여부을 확인하고, 강좌 배수를 변경하여 수강을 제한함.</span>
      <strong class="right boxGray fBlue">361145  |  김*민  |  jim***** 님의 정보입니다.</strong>
    </div>
    <div class="winContent">
      <!-- 적발 내역 -->
      <h3>
        <strong>공유의심 적발 내역</strong>
        <span class="userLimit">1 강좌 / 총 3회 (유효 2회 , 취소 1회)</span>
        <span class="right"><button class="btnM" @click="alertTrigger04 = true">직접 입력</button></span>
      </h3>
      <div class="tls subGreen">
        <table>
          <colgroup>
            <!-- <col width="80"/> -->
            <col width="80"/>
            <col width="200"/>
            <col width="100"/>
            <col width="300"/>
            <col width="100"/>
            <col width="100"/>
          </colgroup>
          <thead>
            <tr>
              <!-- <th>구분</th> -->
              <th>적발회ssss차</th>
              <th>공유 의심 일시</th>
              <th>신규 수강 IP</th>
              <th>강좌명</th>
              <th>강의</th>
              <th>유효 여부</th>
            </tr>
          </thead>
          <tbody>
            <tr class="newAdd"> <!-- 수동일 시 클래스 newAdd 추가 -->
              <!-- <td>수동</td> -->
              <td>2회차</td>
              <!-- <td><input type="text" value="2021-02-24(목) 23:52:08"><button class="btnT line">수정</button></td> -->
              <td>2021-02-24(목) 23:52:08<button class="btnT line">수정</button></td>
              <td>3.254.38.998</td>
              <td class="lectureName">[21 1~2월]<br/>김현 키위교육학</td>
              <!-- <td><input type="text" value="[한지민] 공유 제보로 인한 수동 적발"></td> -->
              <td>3강</td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push5" checked>
                  <label for="push5">
                    <span>취소</span>
                    <span>유효</span>
                  </label>
                </span>
              </td>
            </tr>
            <tr>
              <!-- <td>자동</td> -->
              <td>1회차</td>
              <td>2021-02-24(목) 23:52:08</td>
              <td>3.254.38.998</td>
              <td class="lectureName">[21 1~2월]<br/>김현 키위교육학</td>
              <td>2강</td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push4" checked>
                  <label for="push4">
                    <span>취소</span>
                    <span>유효</span>
                  </label>
                </span>
              </td>
            </tr>
            <tr>
              <!-- <td>자동</td> -->
              <td>-</td>
              <td>2021-02-24(목) 23:52:08</td>
              <td>3.254.38.998</td>
              <td class="lectureName">[21 1~2월]<br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
              <td>1강</td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push3">
                  <label for="push3">
                    <span>취소</span>
                    <span>유효</span>
                  </label>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- //적발 내역 -->
      <!-- 강좌별 수강 제한 -->
      <h3 class="mt10">
        <strong>수강 제한 강좌 설정</strong>
        <!-- <span class="right">
          <button class="btnM" @click="alertTrigger = true">초기화</button>
          <button class="btnM ml5" @click="alertTrigger02 = true">배수 변경</button>
        </span> -->
      </h3>
      <div class="tls subGreen">
  			<table>
          <thead>
            <tr>
              <th>적발회차</th>
              <!-- <th>중복 재생 일시</th> -->
              <th>강좌명</th>
              <th>기본 배수</th>
              <th>변경 배수</th>
            </tr>
          </thead>
  				<tbody>
  					<tr>
  						<td>1회차</td>
  						<!-- <td>2020.07.15 (목) 20:18:33</td> -->
              <td class="tL">[21 1~2월]<br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
              <td>1.4배수</td>
              <td>
                <span class="selectSet">
                  <select name="" id="">
                    <option value="">0배수</option>
                    <option value="">0.5배수</option>
                    <option value="" selected>0.8배수</option>
                    <option value="">기존배수</option>
                    <!-- <option value="">1배수</option>
                    <option value="">1.5배수</option>
                    <option value="">원래대로</option> -->
                  </select>
                </span>
              </td>
  					</tr>
            <!-- 데이터 없을 경우 -->
            <tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
            <!-- //데이터 없을 경우 -->
  				</tbody>
  			</table>
  		</div>

      <!-- <div class="tls subGreen">
        <table>
          <colgroup>
            <col width="40"/>
            <col width="60"/>
            <col width="200"/>
            <col width="80"/>
            <col width="90"/>
            <col width="90"/>
            <col width="90"/>
            <col width="100"/>
          </colgroup>
          <thead>
            <tr>
              <th>
                <span class="checkSet noLabel">
                  <input type="checkbox" />
                  <label for=""><i></i></label>
                </span>
              </th>
              <th>강의<br/>회차</th>
              <th>강의명</th>
              <th>강의시간</th>
              <th>수강가능시간<br/>(강의시간x배수)</th>
              <th>수강현황</th>
              <th colspan="2">배수 변경</th>
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
              <td>1강</td>
              <td class="tL">O.T 안내 / 도약 모고 A형 해설</td>
              <td>28분 00초</td>
              <td>39분 12초</td>
              <td>
                수강: <em class="fBlue">10분 02초</em><br/>
                잔여: <em class="fBlue">29분 10초</em>
              </td>
              <td>
                <span class="unit small">
                  <input type="text" class="tC"><em>분</em>
                </span>
                ( 초)
              </td>
              <td>
                <span class="ipBtn">
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">배수 선택</option>
                      <option value="">1.2 배수</option>
                    </select>
                  </span>
                  <button class="btnS">변경</button>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span class="checkSet noLabel">
                  <input type="checkbox" />
                  <label for=""><i></i></label>
                </span>
              </td>
              <td>2강</td>
              <td class="tL">O.T 안내 / 도약 모고 A형 해설</td>
              <td>28분 00초</td>
              <td>39분 12초</td>
              <td>
                수강: <em class="fBlue">10분 02초</em><br/>
                잔여: <em class="fBlue">29분 10초</em>
              </td>
              <td>
                <span class="unit small">
                  <input type="text" class="tC" value="10"><em>분</em>
                </span>
                (600초)
              </td>
              <td>
                <span class="ipBtn">
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no" class="label">배수 선택</option>
                      <option value="" selected>1.2배수</option>
                    </select>
                  </span>
                  <button class="btnS">변경</button>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div> -->
      <!-- //강좌별 수강 제한 -->
      <!-- 관리 -->
      <h3 class="mt10"><strong>관리</strong></h3>
      <div class="tvs record">
        <table>
          <colgroup>
            <col width="160"/>
            <col width="*"/>
          </colgroup>
          <tbody>
            <tr>
              <th>비고</th>
              <td>
                <span class="ipBtn sizeM">
                  <input type="text" />
                  <button class="btnM line">저장</button>
                </span>
                <ul class="recordList">
                  <li><strong>[2021-02-23 15:35 / 박미진 ]</strong> 중복 재생 강좌에 대해 수강제한 설정함. </li>
                  <li><strong>[2021-02-23 15:35 / 박미진 ]</strong> 확인 후 취소 진행</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>수정 이력</th>
              <td>
                <ul class="recordList">
                  <li><strong>[2021-02-23 15:35  / 박미진(mjpark111) ]</strong></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 관리 -->
    </div>

    <!-- Alert Popup -->
    <!-- 초기화 Alert Popup -->
    <Alert v-if='alertTrigger' @close="alertTrigger = false">
      <div slot="modalbody">현재까지 변경된 모든 내용을 초기화 하고 최초 시간으로 설정 하시겠습니까?</div>
      <template slot="modalfooter">
        <button class="btnM gray" @click="alertTrigger = false">취소</button>
        <button class="btnM green" @click="alertTrigger = false">초기화</button>
      </template>
    </Alert>
    <!-- //초기화 Alert Popup -->
    <!-- 배수변경 Alert Popup -->
    <Alert v-if='alertTrigger02' @close="alertTrigger02 = false">
      <div slot="modalbody">
        일괄 변경 배수를 선택해주세요.
        <span class="selectSet mt10">
          <select name="" id="">
            <option value="no" class="label">배수 선택</option>
            <option value="">0배수</option>
            <option value="">0.5배수</option>
            <option value="">0.8배수</option>
            <option value="">1배수</option>
            <option value="">1.5배수</option>
            <option value="">2배수</option>
            <option value="">원래대로</option>
          </select>
        </span>
      </div>
      <template slot="modalfooter">
        <button class="btnM gray" @click="alertTrigger02 = false">취소</button>
        <button class="btnM green" @click="alertTrigger02 = false">배수 변경</button>
      </template>
    </Alert>
    <!-- //배수변경 Alert Popup -->
    <!-- 유효해제 Alert Popup -->
    <Alert v-if='alertTrigger03' @close="alertTrigger03 = false">
      <div slot="modalbody">
        <p>해당 공유의심 건을 유효 해제하시겠습니까?<br> 
        해제 시, 회차에 따라 배수가 변경될 수 있습니다.</p>
        <div class="notice">
          <p class="red">(1회차: 기존배수, 2회차: 0.8배수, 3회차: 0배수)</p>
        </div>
      </div>
      <template slot="modalfooter">
        <button class="btnM gray" @click="alertTrigger03 = false">취소</button>
        <button class="btnM green" @click="alertTrigger03 = false">유효 해제</button>
      </template>
    </Alert>
    <!-- //유효해제 Alert Popup -->
    <!-- 직접입력 Popup -->
    <Popup v-if='alertTrigger04' @close="alertTrigger04 = false">
      <h1 slot="modalheader" class="tC">공유의심 직접 입력</h1>
      <div slot="modalbody" style="padding-bottom:35px">
        <div class="tvs">
          <table>
            <colgroup>
              <col width="130"/>
              <col width="*"/>
            </colgroup>
            <tbody>
              <tr>
                <th>강좌 선택 <sup>필수</sup></th>
                <td>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="no">강좌 선택</option>
                    </select>
                  </span>
                </td>
              </tr>
              <tr>
                <th>적발회차 <sup>필수</sup></th>
                <td>
                  <input class="times" type="text"/> 회차
                </td>
              </tr>
              <tr>
                <th>공유의심 일시 <sup>필수</sup></th>
                <td>
                  <span class="lsItem">
                    <VCalendar class="calSet" v-model="date" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                      </template>
                    </VCalendar>
                  </span>
                  <!--[D]시간 입력이 시/분으로 나눠서 들어갈 경우-->
                  <span class="timeSet"><input type="text" value=":"/></span>
                  <!--//[D]시간 입력이 시/분으로 나눠서 들어갈 경우-->
                  <!-- <span class="setTime"><input type="text"/></span> --> <!--[D]시간 입력이 한칸에 들어갈 경우-->
                </td>
              </tr>
              <tr>
                <th>신규수강 IP</th>
                <td><input type="text" value=""/></td>
              </tr>
              <tr>
                <th>강의 회차</th>
                <td><input class="times" type="text" /> 강</td>
              </tr>
              <tr>
                <th>유효여부</th>
                <td>
                  <span class="labelToggleSet">
                    <input type="checkbox" id="push2">
                    <label for="push2">
                      <span>취소</span>
                      <span>유효</span>
                    </label>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div slot="modalfooter" class="modalfooter">
        <button class="btnM line" @click="alertTrigger04 = false">취소</button>
        <button class="btnM green" @click="alertTrigger04 = false">저장</button>
      </div>
    </Popup>
    <!-- //직접입력 Popup -->
    <!-- //Alert Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MemberShareUserLimit',
  data() {
    return {
      alertTrigger: false,
      alertTrigger02: false,
      alertTrigger03: false,
      alertTrigger04: false,
    }
  },
  components: {
  }
}
</script>
