<template lang="html">
  <div id="windowLayout">
    <div class="winContent">
      <!-- 테이블 유틸 -->
      <div class="boardTop">
        <div class="left-po">
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <strong class="title">문의일자</strong><!-- 2021-08-23 타이틀 추가 -->
                  <span class="calDupSet">
                    <VCalendar class="calSet" v-model="date02" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="시작일 선택" />
                      </template>
                    </VCalendar>
                    <em>~</em>
                    <VCalendar class="calSet" v-model="date03" color="green">
                      <template v-slot="{ inputValue, togglePopover }">
                        <input :value="inputValue" @click="togglePopover()" readonly placeholder="종료일 선택" />
                      </template>
                    </VCalendar>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">처리상태</option>
                      <option value="">보류(처리중)</option>
                      <option value="">처리완료</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">문의분류</option>
                      <!-- 2021-08-23 option 추가 -->
                      <option value="">강의수강, 사이트 이용 관련</option>
                      <option value="">임용학습상담</option>
                      <option value="">환불</option>
                      <option value="">기타</option>
                      <!-- //2021-08-23 option 추가 -->
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <input type="text" placeholder="이름, 아이디, 휴대폰 검색" />
                  <button class="btnSearch">검색</button>
                </span>
              </div>
              <div>
                <button class="btnRefresh">초기화</button>
              </div>
            </div>
          </div>
        </div>
        <div class="right-po">
          <router-link to="/mkup/windowPopup/mmrCounseling/write" class="btnAdd">신규등록</router-link>
        </div>
      </div>
      <!-- //테이블 유틸 -->
      <!-- 목록써머리 -->
      <div class="listSummery">
        <div class="left">
          <strong>회원 개인정보 표출</strong>
          <span class="toggleSet">
            <input type="checkbox" id="push"/>
            <label for="push"></label>
          </span>
        </div>
      </div>
      <!-- //목록써머리 -->
      <!-- 테이블 목록 -->
      <div class="tls subGreen">
    		<table>
    			<colgroup>
            <col width="60"/>
            <col width="130"/>
            <col width="120"/>
            <col width="180"/><!-- 2021-08-23 추가 -->
            <col width="160"/>
            <col width="160"/>
            <col width="110"/>
            <col width="80"/>
    			</colgroup>
    			<thead>
    				<tr>
              <th scope="col">No</th>
    					<th scope="col">이름/아이디</th>
    					<th scope="col">연락처</th>
              <!-- 2021-08-23 대분류, 중분류 추가 -->
    					<th scope="col">대분류</th>
    					<th scope="col">중분류</th>
              <!-- //2021-08-23 대분류, 중분류 추가 -->
    					<th scope="col">문의일자/처리일자</th>
    					<th scope="col">처리상태</th>
    					<th scope="col">처리자</th>
    				</tr>
    			</thead>
    			<tbody>
    				<!--Loop-->
    				<tr>
              <td>153</td>
    					<td>김*민<br/>(jim******)</td>
    					<td>010-****-5678</td>
              <td><router-link to="/mkup/windowPopup/mmrCounseling/view">강의수강, 사이트 이용 관련</router-link></td>
              <td><router-link to="/mkup/windowPopup/mmrCounseling/view">회원정보</router-link></td>
              <td>2021-07-22 12:05:45<br/><span class="fBlue">2021-07-22 13:14:23</span></td>
              <td>보류(처리중)</td>
              <td>홍길동</td>
    				</tr>
    				<!--//Loop-->
    				<tr>
              <td>152</td>
    					<td>김*민<br/>(jim******)</td>
    					<td>010-****-5678</td>
              <td><router-link to="/mkup/windowPopup/mmrCounseling/view">임용학습상담</router-link></td>
              <td><router-link to="/mkup/windowPopup/mmrCounseling/view">교육학</router-link></td>
              <td>2021-07-22 12:05:45<br/><span class="fBlue">2021-07-22 13:14:23</span></td>
              <td>처리완료</td>
              <td>홍길동</td>
    				</tr>
    				<tr>
              <td>151</td>
    					<td>김*민<br/>(jim******)</td>
    					<td>010-****-5678</td>
              <td><router-link to="/mkup/windowPopup/mmrCounseling/view">환불</router-link></td>
              <td><router-link to="/mkup/windowPopup/mmrCounseling/view">강의수강불편</router-link></td>
              <td>2021-07-22 12:05:45<br/><span class="fBlue">2021-07-22 13:14:23</span></td>
              <td>처리완료</td>
              <td>홍길동</td>
    				</tr>
    				<tr>
              <td>150</td>
    					<td>-</td>
    					<td>010-****-5678</td>
              <td><router-link to="/mkup/windowPopup/mmrCounseling/view">기타</router-link></td>
              <td><router-link to="/mkup/windowPopup/mmrCounseling/view">기타</router-link></td>
              <td>2021-07-22 12:05:45<br/><span class="fBlue">2021-07-22 13:14:23</span></td>
              <td>처리완료</td>
              <td>홍길동</td>
    				</tr>
    				<tr>
              <td>149</td>
    					<td>김*민<br/>(jim******)</td>
    					<td>010-****-5678</td>
              <td><router-link to="/mkup/windowPopup/mmrCounseling/view">강의수강, 사이트 이용 관련</router-link></td>
              <td><router-link to="/mkup/windowPopup/mmrCounseling/view">사이트 문의</router-link></td>
              <td>2021-07-22 12:05:45<br/><span class="fBlue">2021-07-22 13:14:23</span></td>
              <td>보류(처리중)</td>
              <td>홍길동</td>
    				</tr>
    				<tr>
              <td>148</td>
    					<td>김*민<br/>(jim******)</td>
    					<td>010-****-5678</td>
              <td><router-link to="/mkup/windowPopup/mmrCounseling/view">임용학습상담</router-link></td>
              <td><router-link to="/mkup/windowPopup/mmrCounseling/view">유아</router-link></td>
              <td>2021-07-22 12:05:45<br/><span class="fBlue">2021-07-22 13:14:23</span></td>
              <td>처리완료</td>
              <td>홍길동</td>
    				</tr>
    				<tr>
              <td>147</td>
    					<td>김*민<br/>(jim******)</td>
    					<td>010-****-5678</td>
              <td><router-link to="/mkup/windowPopup/mmrCounseling/view">환불</router-link></td>
              <td><router-link to="/mkup/windowPopup/mmrCounseling/view">교재이용불편</router-link></td>
              <td>2021-07-22 12:05:45<br/><span class="fBlue">2021-07-22 13:14:23</span></td>
              <td>처리완료</td>
              <td>홍길동</td>
    				</tr>
    				<tr>
              <td>146</td>
    					<td>-</td>
    					<td>010-****-5678</td>
              <td><router-link to="/mkup/windowPopup/mmrCounseling/view">강의수강, 사이트 이용 관련</router-link></td>
              <td><router-link to="/mkup/windowPopup/mmrCounseling/view">온라인 강의</router-link></td>
              <td>2021-07-22 12:05:45<br/><span class="fBlue">2021-07-22 13:14:23</span></td>
              <td>처리완료</td>
              <td>홍길동</td>
    				</tr>
    				<tr>
              <td>145</td>
    					<td>김*민<br/>(jim******)</td>
    					<td>010-****-5678</td>
              <td><router-link to="/mkup/windowPopup/mmrCounseling/view">임용학습상담</router-link></td>
              <td><router-link to="/mkup/windowPopup/mmrCounseling/view">중등</router-link></td>
              <td>2021-07-22 12:05:45<br/><span class="fBlue">2021-07-22 13:14:23</span></td>
              <td>보류(처리중)</td>
              <td>홍길동</td>
    				</tr>
    				<tr>
              <td>144</td>
    					<td>김*민<br/>(jim******)</td>
    					<td>010-****-5678</td>
              <td><router-link to="/mkup/windowPopup/mmrCounseling/view">환불</router-link></td>
              <td><router-link to="/mkup/windowPopup/mmrCounseling/view">변경/결제</router-link></td>
              <td>2021-07-22 12:05:45<br/><span class="fBlue">2021-07-22 13:14:23</span></td>
              <td>처리완료</td>
              <td>홍길동</td>
    				</tr>
            <!-- 데이터 없을 경우 -->
            <tr style="display:none;"><td colspan="8" class="noneData">등록된 데이터가 없습니다.</td></tr>
            <!-- //데이터 없을 경우 -->
    			</tbody>
    		</table>
    	</div>
      <Paginate/>
      <!-- //테이블 목록 -->
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MemberCounseling',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>
