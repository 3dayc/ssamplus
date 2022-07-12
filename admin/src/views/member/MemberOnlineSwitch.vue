<template lang="html">
    <div id="windowLayout">
      <div class="winHeader">
        <h1>인강 전환</h1>
        <span class="supTxt">* 해당 학원강좌의 인강 전환을 관리</span>
        <div class="btnArea">
          <button class="btnM green">저장</button>
          <button class="btnM ml10">취소</button>
        </div>
      </div>
      <div class="winContent">
        <div class="boxGray">
          <div class="lectureSwitch">
            <div class="before">
              <p>
                <strong>직강</strong>
                장영희 과목중국어 – 80점 도약 모의고사 (개강: 2021-03-02)
              </p>
              <!-- 2021-08-23 권한보기 버튼 추가 -->
              <div class="tR mb10">
                <button class="btnT line" @click="popupTrigger = true">권한보기</button>
              </div>
              <!-- //2021-08-23 권한보기 버튼 추가 -->
              <div class="tls subGreen">
                <table>
                  <colgroup>
                    <col width="30"/>
                    <col width="40"/>
                    <col width="120"/>
                    <col width="40"/>
                  </colgroup>
                  <thead>
                    <tr>
                      <th>
                        <span class="checkSet noLabel">
                          <input type="checkbox"/>
                          <label for=""><i></i></label>
                        </span>
                      </th>
                      <th>직강회차</th>
                      <th>직강일자</th>
                      <th>출석여부</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <span class="checkSet noLabel">
                          <input type="checkbox" checked disabled/>
                          <label for=""><i></i></label>
                        </span>
                      </td>
                      <td>1회</td>
                      <td>2021-04-01</td>
                      <td>미출석</td>
                    </tr>
                    <tr>
                      <td>
                        <span class="checkSet noLabel">
                          <input type="checkbox" checked disabled/>
                          <label for=""><i></i></label>
                        </span>
                      </td>
                      <td>2회</td>
                      <td>2021-04-05</td>
                      <td>미출석</td>
                    </tr>
                    <tr class="expiry"><!--20210715 class 변경-->
                      <td>
                        <span class="checkSet noLabel">
                          <input type="checkbox" disabled />
                          <label for=""><i></i></label>
                        </span>
                      </td>
                      <td>3회</td>
                      <td>2021-04-08</td>
                      <td>-</td>
                    </tr>
                    <tr class="expiry"><!--20210715 class 변경-->
                      <td>
                        <span class="checkSet noLabel">
                          <input type="checkbox" disabled />
                          <label for=""><i></i></label>
                        </span>
                      </td>
                      <td>4회</td>
                      <td>2021-04-12</td>
                      <td>-</td>
                    </tr>
                    <tr class="expiry"><!--20210715 class 변경-->
                      <td>
                        <span class="checkSet noLabel">
                          <input type="checkbox" disabled />
                          <label for=""><i></i></label>
                        </span>
                      </td>
                      <td>5회</td>
                      <td>2021-04-15</td>
                      <td>-</td>
                    </tr>
                    <tr class="expiry"><!--20210715 class 변경-->
                      <td>
                        <span class="checkSet noLabel">
                          <input type="checkbox" disabled />
                          <label for=""><i></i></label>
                        </span>
                      </td>
                      <td>6회</td>
                      <td>2021-04-15</td>
                      <td>-</td>
                    </tr>
                    <!-- 데이터 없을 경우 -->
                    <tr style="display:none;"><td colspan="4" class="noneData">등록된 데이터가 없습니다.</td></tr>
                    <!-- //데이터 없을 경우 -->
                  </tbody>
                </table>
              </div>
            </div>
            <div class="after boxBrown">
              <p>
                <strong>인강</strong>
                [21 1~2월] 장영희 과목중국어 – 80점 도약 모의고사반
              </p>
              <!-- 2021-08-23 권한보기 버튼 추가 -->
              <div class="tR mb10">
                <button class="btnT line" @click="popupTrigger = true">권한보기</button>
              </div>
              <!-- //2021-08-23 권한보기 버튼 추가 -->
          		<div class="tls subGreen">
          			<table>
          				<colgroup>
          					<col width="60"/>
          					<col width="30"/>
          					<col width="90"/>
          					<col width="90"/>
          				</colgroup>
          				<thead>
          					<tr>
          						<th>인강 전환</th>
          						<th>강의회차</th>
          						<th>직강일자</th>
          						<th>시간제한</th>
          					</tr>
          				</thead>
          				<tbody>
          					<tr class="expiry"><!--20210715 class 변경-->
          						<td>
                        <span class="checkSet noLabel">
                          <input type="checkbox" disabled />
                          <label for=""><i></i></label>
                        </span>
                      </td>
                      <td>1강</td>
                      <td>2021-04-01</td>
                      <td>
                        <span class="selectSet">
                          <select name="" id="">
                            <option value="no" class="label">배수 선택</option>
                            <option value="" selected>0배수</option>
                            <option value="">0.5배수</option>
                            <option value="">0.8배수</option>
                            <option value="">1배수</option>
                            <option value="">1.5배수</option>
                            <option value="">2배수</option>
                            <option value="">원래대로</option>
                          </select>
                        </span>
                      </td>
          					</tr>
          					<tr class="expiry"><!--20210715 class 변경-->
          						<td>
                        <span class="checkSet noLabel">
                          <input type="checkbox" disabled />
                          <label for=""><i></i></label>
                        </span>
                      </td>
                      <td>2강</td>
                      <td>2021-04-01</td>
                      <td>
                        <span class="selectSet">
                          <select name="" id="">
                            <option value="no" class="label">배수 선택</option>
                            <option value="" selected>0배수</option>
                            <option value="">0.5배수</option>
                            <option value="">0.8배수</option>
                            <option value="">1배수</option>
                            <option value="">1.5배수</option>
                            <option value="">2배수</option>
                            <option value="">원래대로</option>
                          </select>
                        </span>
                      </td>
          					</tr>
          					<tr class="expiry">
          						<td>
                        <span class="checkSet noLabel">
                          <input type="checkbox" />
                          <label for=""><i></i></label>
                        </span>
                      </td>
                      <td>3강</td>
                      <td>2021-04-05</td>
                      <td>
                        <span class="selectSet">
                          <select name="" id="">
                            <option value="no" class="label">배수 선택</option>
                            <option value="" selected>0배수</option>
                            <option value="">0.5배수</option>
                            <option value="">0.8배수</option>
                            <option value="">1배수</option>
                            <option value="">1.5배수</option>
                            <option value="">2배수</option>
                            <option value="">원래대로</option>
                          </select>
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
                      <td>4강</td>
                      <td>2021-04-08</td>
                      <td>
                        <span class="selectSet">
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
                      </td>
          					</tr>
          					<tr>
          						<td>
                        <span class="checkSet noLabel">
                          <input type="checkbox" />
                          <label for=""><i></i></label>
                        </span>
                      </td>
                      <td>5강</td>
                      <td>2021-04-12</td>
                      <td>
                        <span class="selectSet">
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
                      </td>
          					</tr>
          					<tr>
          						<td>
                        <span class="checkSet noLabel">
                          <input type="checkbox" />
                          <label for=""><i></i></label>
                        </span>
                      </td>
                      <td>6강</td>
                      <td>2021-04-12</td>
                      <td>
                        <span class="selectSet">
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
                      </td>
          					</tr>
                    <!-- 데이터 없을 경우 -->
                    <tr style="display:none;"><td colspan="4" class="noneData">등록된 데이터가 없습니다.</td></tr>
                    <!-- //데이터 없을 경우 -->
          				</tbody>
          			</table>
          		</div>
            </div>
          </div>
          <!---->
          <h3><strong>인강 수강기간</strong></h3>
          <div class="tvsWhite">
            <table>
              <tbody>
                <tr>
                  <td>
                    <span class="calDupSet">
                      <VCalendar class="calSet" v-model="calDate01" color="green">
                        <template v-slot="{ inputValue, togglePopover }">
                          <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                        </template>
                      </VCalendar>
                      <em>~</em>
                      <VCalendar class="calSet" v-model="calDate02" color="green">
                        <template v-slot="{ inputValue, togglePopover }">
                          <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                        </template>
                      </VCalendar>
                    </span>
                  </td>
                </tr>
                <!-- <tr>
                  <td class="fRed">
                    * 유예기간 내에만 인강 재생 및 자료 다운로드가 가능합니다.<br/>
                    * 유예기간 동안 수강 가능한 인강은 직강 전환 시작일 이전 범위까지로만 제한됩니다. 이후 일자 강의는 자동 0배수로 수강이 제한됩니다.</p>
                  </td>
                </tr> -->
              </tbody>
            </table>
          </div>
          <!---->
          <h3><strong>전환 전 점검사항</strong></h3>
          <div class="tvsWhite">
            <table>
              <tbody>
                <tr>
                  <td>
                    <div class="pb10">
                      <span class="checkSet">
                        <input type="checkbox" />
                        <label for="" class="fRed"><i></i>(필수) 인강 전환 시 직강 수강증 반납을 확인하였습니다.</label>
                      </span>
                    </div>
                    <span class="checkSet">
                      <input type="checkbox" />
                      <label for="" class="fRed"><i></i>(필수) 환불 불가 및 재전환 불가 유의사항을 안내하였습니다.</label>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!---->
          <h3><strong>관리</strong></h3>
          <div class="tvs record">
            <table>
              <colgroup>
                <col width="160"/>
                <col width="*"/>
              </colgroup>
              <tbody>
                <tr>
                  <th>수정 이력</th>
                  <td>
                    <ul class="recordList">
                      <li><strong>[2021-02-23 15:35  / 박미진 ]</strong> 수정</li>
                      <li><strong>[2021-02-23 15:35  / 홍길동 ]</strong> 등록</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!---->
        </div>
  		</div>

      <!-- Popup -->
      <!-- 2021-08-23 권한보기 팝업 -->
      <Popup v-if='popupTrigger' @close="popupTrigger = false">
        <div slot="modalheader" class="tL">
  	      <h1>권한보기</h1>
  	      <span>* 단과별 수강 권한을 확인할 수 있습니다.</span>
  	    </div>
        <div slot="modalbody">
          <div class="tls subGreen">
            <table>
              <colgroup>
                <col width="80"/>
                <col width="*"/>
                <col width="80"/>
              </colgroup>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>대상</th>
                  <th>할인율</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>회원</td>
                  <td class="tL">일반회원</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>강좌</td>
                  <td class="tL">[21 1~2월] <em class="iSet yellow">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>상품</td>
                  <td class="tL">갤럭시 북 FLEX 알파</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>보너스</td>
                  <td class="tL">[21 1~2월] <em class="iSet orange">제작중</em><br/>장영희 전공중국어 – 80점 도약 모의고사반</td>
                  <td>보너스</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Popup>
      <!-- //2021-08-23 권한보기 팝업 -->
      <!-- //Popup -->
    </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MemberOnlineSwitch',
  data() {
    return {
      popupTrigger: false,
    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
</style>
