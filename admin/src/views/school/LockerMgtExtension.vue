<template lang="html">
	<div>
		<div class="pageTit">
			<h2>수강생 판매</h2>
			<span><router-link to="/mkup/school/userSale">학원 관리</router-link><router-link to="/mkup/school/lockerMgt">사물함 관리</router-link><em>기간연장 가능 내역</em></span>
		</div>
	  <div class="content">
	    <article>
	      <!-- page layout -->
	      <div class="lockerMgtExtension">
					<!-- 상단 -->
          <div class="updateForm clearBh">
            <span class="selectSet">
              <select name="" id="">
                <option value="no" class="label">선택하세요</option>
                <option value="" selected>이데아관</option>
                <option value="">아이비관</option>
              </select>
            </span>
            <span class="selectSet">
              <select name="" id="">
                <option value="no" class="label">전체</option>
                <option value="">4층 A구역 1~60</option>
                <option value="">5층 A구역 1~80</option>
                <option value="">5층 B구역 81~180</option>
                <option value="">6층 A구역 1~105</option>
                <option value="">11층 A 구역 1~96</option>
                <option value="">11층 B 구역 97~198</option>
              </select>
            </span>
            <!-- <span class="selectSet">
              <select name="" id="">
                <option value="no" class="label">전체</option>
                <option value="">4층 A구역(1~35)</option>
                <option value="">4층 B구역(36~110)</option>
                <option value="">4층 C구역(111~185)</option>
                <option value="">6층 A구역(1~95)</option>
                <option value="">6층 B구역(96~190)</option>
                <option value="">6층 C구역(191~230)</option>
                <option value="">11층 A구역(1~36)</option>
                <option value="">11층 B구역(37~72)</option>
              </select>
            </span> -->
            <span class="right">
              <router-link to="/mkup/bbs/infoCompetition" class="btnList">목록으로</router-link>
              <button class="btnMsg ml10" @click="MemberMsgSend();">메세지발송</button>
            </span>
          </div>
					<!-- 상단 -->
          <div class="tls">
            <table>
              <colgroup>
                <col width="80"/>
                <col width="90"/>
                <col width="150"/>
                <col width="170"/>
                <col width="200	"/>
                <col width="90"/>
                <col width="200"/>
                <col width="100"/>
              </colgroup>
              <thead>
                <th>
                  <span class="checkSet noLabel">
                    <input type="checkbox" id="check00">
                    <label for="check00"><i></i></label>
                  </span>
                </th>
                <th>번호</th>
                <th>구역</th>
                <th>사용자</th>
                <th>사용일자</th>
                <th>사용구문</th>
                <th>비고</th>
                <th>기간연장</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="check01">
                      <label for="check01"><i></i></label>
                    </span>
                  </td>
                  <td>1</td>
                  <td>4층 A구역  |  27번</td>
                  <td>361145 |  김*민  |  jim*****</td>
                  <td>2021-05-01 ~ 2021-05-31</td>
                  <td>유료</td>
                  <td></td>
                  <td><button class="btnT" @click="popupTrigger02 = true">기간연장</button></td>
                </tr>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="check02" checked="checked">
                      <label for="check02"><i></i></label>
                    </span>
                  </td>
                  <td>2</td>
                  <td>4층 A구역  |  27번</td>
                  <td>361145 |  김*민  |  jim*****</td>
                  <td>2021-05-01 ~ 2021-05-31</td>
                  <td>무료</td>
                  <td>김현 선생님 지인</td>
                  <td><button class="btnT" @click="popupTrigger02 = true">기간연장</button></td>
                </tr>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="check03">
                      <label for="check03"><i></i></label>
                    </span>
                  </td>
                  <td>3</td>
                  <td>3층 B구역  |  15번</td>
                  <td>361145 |  김*민  |  jim*****</td>
                  <td>2021-05-01 ~ 2021-05-31</td>
                  <td>유료</td>
                  <td></td>
                  <td><button class="btnT" @click="popupTrigger02 = true">기간연장</button></td>
                </tr>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="check04">
                      <label for="check04"><i></i></label>
                    </span>
                  </td>
                  <td>4</td>
                  <td>4층 A구역  |  27번</td>
                  <td>361145 |  김*민  |  jim*****</td>
                  <td>2021-05-01 ~ 2021-05-31</td>
                  <td>유료</td>
                  <td></td>
                  <td><button class="btnT" @click="popupTrigger02 = true">기간연장</button></td>
                </tr>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="check05">
                      <label for="check05"><i></i></label>
                    </span>
                  </td>
                  <td>5</td>
                  <td>4층 A구역  |  27번</td>
                  <td>361145 |  김*민  |  jim*****</td>
                  <td>2021-05-01 ~ 2021-05-31</td>
                  <td>무료</td>
                  <td>김현 선생님 지인</td>
                  <td><button class="btnT" @click="popupTrigger02 = true">기간연장</button></td>
                </tr>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="check06">
                      <label for="check06"><i></i></label>
                    </span>
                  </td>
                  <td>6</td>
                  <td>3층 B구역  |  15번</td>
                  <td>361145 |  김*민  |  jim*****</td>
                  <td>2021-05-01 ~ 2021-05-31</td>
                  <td>유료</td>
                  <td></td>
                  <td><button class="btnT" @click="popupTrigger02 = true">기간연장</button></td>
                </tr>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="check07"  checked="checked">
                      <label for="check07"><i></i></label>
                    </span>
                  </td>
                  <td>7</td>
                  <td>4층 A구역  |  27번</td>
                  <td>361145 |  김*민  |  jim*****</td>
                  <td>2021-05-01 ~ 2021-05-31</td>
                  <td>유료</td>
                  <td></td>
                  <td><button class="btnT" @click="popupTrigger02 = true">기간연장</button></td>
                </tr>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="check08">
                      <label for="check08"><i></i></label>
                    </span>
                  </td>
                  <td>8</td>
                  <td>4층 A구역  |  27번</td>
                  <td>361145 |  김*민  |  jim*****</td>
                  <td>2021-05-01 ~ 2021-05-31</td>
                  <td>무료</td>
                  <td>김현 선생님 지인</td>
                  <td><button class="btnT" @click="popupTrigger02 = true">기간연장</button></td>
                </tr>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="check09">
                      <label for="check09"><i></i></label>
                    </span>
                  </td>
                  <td>9</td>
                  <td>3층 B구역  |  15번</td>
                  <td>361145 |  김*민  |  jim*****</td>
                  <td>2021-05-01 ~ 2021-05-31</td>
                  <td>유료</td>
                  <td></td>
                  <td><button class="btnT" @click="popupTrigger02 = true">기간연장</button></td>
                </tr>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="check10">
                      <label for="check10"><i></i></label>
                    </span>
                  </td>
                  <td>10</td>
                  <td>4층 A구역  |  27번</td>
                  <td>361145 |  김*민  |  jim*****</td>
                  <td>2021-05-01 ~ 2021-05-31</td>
                  <td>유료</td>
                  <td></td>
                  <td><button class="btnT" @click="popupTrigger02 = true">기간연장</button></td>
                </tr>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="check11">
                      <label for="check11"><i></i></label>
                    </span>
                  </td>
                  <td>11</td>
                  <td>4층 A구역  |  27번</td>
                  <td>361145 |  김*민  |  jim*****</td>
                  <td>2021-05-01 ~ 2021-05-31</td>
                  <td>무료</td>
                  <td>김현 선생님 지인</td>
                  <td><button class="btnT" @click="popupTrigger02 = true">기간연장</button></td>
                </tr>
                <tr>
                  <td>
                    <span class="checkSet noLabel">
                      <input type="checkbox" id="check12">
                      <label for="check12"><i></i></label>
                    </span>
                  </td>
                  <td>12</td>
                  <td>3층 B구역  |  15번</td>
                  <td>361145 |  김*민  |  jim*****</td>
                  <td>2021-05-01 ~ 2021-05-31</td>
                  <td>유료</td>
                  <td></td>
                  <td><button class="btnT" @click="popupTrigger02 = true">기간연장</button></td>
                </tr>
              </tbody>
            </table>
          </div>
				</div>
				<!-- //page layout -->
			</article>
		</div>

		<!-- Popup -->
    <!-- 사물함 기간 연장 -->
    <Popup v-if='popupTrigger02' @close="popupTrigger02 = false" :popClass="classValue">
      <div slot="modalheader" class="tL">
        <h1>사물함 기간 연장</h1>
        <span>* 이미 신청한 사물함의 사용 기간을 연장할 수 있습니다. </span>
      </div>
      <div slot="modalbody">
        <div class="subTit">
          <h3>361154  |  jimin0123  |  김지민</h3>
        </div>
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
                <th>신청 기간 <sup>필수</sup></th>
                <td>
                  <VCalendar class="calSet mr5" v-model="date" color="green">
                    <template v-slot="{ inputValue, togglePopover }">
                      <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" disabled/>
                    </template>
                  </VCalendar>
                  <span class="selectSet">
                    <select name="" id="">
                      <option value="">1개월</option>
                    </select>
                  </span>
                  <div class="tC fBlue mt10 backGray pd5">2021-05-15 ~ 2021-05-31</div>
                </td>
              </tr>
              <tr>
                <th>신청 구분 <sup>필수</sup></th>
                <td>
                  <span class="radioSet">
                    <input type="radio" name="radio1" checked/>
                    <label for=""><i></i>유료</label>
                  </span>
                  <span class="radioSet">
                    <input type="radio" name="radio1"/>
                    <label for=""><i></i>무료</label>
                  </span>
                </td>
              </tr>
              <tr>
                <th>비고</th>
                <td><textarea rows="2" placeholder="무료 신청 사유 입력"></textarea></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div slot="modalfooter" class="modalfooter">
        <router-link to="/mkup/school/userSale/locker/pay" class="btnM">신청</router-link>
        <button class="btnM line" @click="popupTrigger02 = false">취소</button>
      </div>
    </Popup>
    <!-- //사물함 기간 연장 -->
		<!-- //Popup -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'LockerMgtExtension',
	data() {
		return {
      popupTrigger02: false,
      alertTrigger: false,
    }
	},
	methods: {
    MemberMsgSend() {
      let routeData = this.$router.resolve({name: 'MemberMsgSend', query: {data: "someData"}});
      window.open('/mkup/windowPopup/mmrMsgSend', '_blank', `width=850,height=20000`);
    },
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
