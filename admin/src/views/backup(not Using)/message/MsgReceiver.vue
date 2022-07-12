<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>검색으로 수신자 입력</h1>
      <span class="supTxt">* 회원정보를 검색하여 수신자를 입력합니다.</span>
    </div>
    <div class="winContent">
      <!-- 테이블 유틸 -->
      <div class="boardTop">
        <div class="left-po">
          <strong>회원 개인정보 표출</strong>
          <span class="labelToggleSet">
            <input type="checkbox" id="push" />
            <label for="push">
              <span>차단</span>
              <span>사용</span>
            </label>
          </span>
        </div>
        <div class="listSearch">
          <div class="back">
            <div class="bdLine">
              <span class="lsItem">
                <span class="selectSet lCase">
                  <select name="" id="">
                    <option value="no" class="label">수강구분</option>
                    <option value="">유료수강</option>
                    <option value="">무료수강</option>
                    <option value="">미수강</option>
                  </select>
                </span>
              </span>
              <span class="lsItem">
                <span class="selectSet lCase">
                  <select name="" id="">
                    <option value="no" class="label">과목</option>
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
        <div class="right-po"><button class="btnM green">수신자 입력</button></div>
      </div>
      <!-- //테이블 유틸 -->

      <!-- 테이블 목록 -->
      <div class="tls subGreen">
    		<table>
    			<colgroup>
    				<col span="4">
            <col width="60px;">
    			</colgroup>
    			<thead>
    				<tr>
    					<th scope="col">회원번호</th>
    					<th scope="col">이름/아이디</th>
    					<th scope="col">휴대전화 번호</th>
    					<th scope="col">SMS 수신</th>
              <th scope="col">
                <span class="checkSet noLabel">
                  <input type="checkbox" id="chkall">
                  <label for="chkall"><i></i></label>
                </span>
              </th>
    				</tr>
    			</thead>
    			<tbody>
    				<!--Loop-->
    				<tr>
    					<td>287884</td>
              <td>김*수<br/>(k*****)</td>
              <td>010-****-5678</td>
              <td>동의</td>
              <td>
    						<span class="checkSet noLabel">
    							<input type="checkbox" id="chk5">
    							<label for="chk5"><i></i></label>
    						</span>
    					</td>
    				</tr>
    				<!--//Loop-->
            <tr>
    					<td>287884</td>
              <td>김*수<br/>(k*****)</td>
              <td>010-****-5678</td>
              <td>비동의</td>
              <td>
    						<span class="checkSet noLabel">
    							<input type="checkbox" id="chk4">
    							<label for="chk4"><i></i></label>
    						</span>
    					</td>
    				</tr>
            <tr>
    					<td>287884</td>
              <td>김*수<br/>(k*****)</td>
              <td>010-****-5678</td>
              <td>동의</td>
              <td>
    						<span class="checkSet noLabel">
    							<input type="checkbox" id="chk4">
    							<label for="chk4"><i></i></label>
    						</span>
    					</td>
    				</tr>
            <tr>
    					<td>287884</td>
              <td>김*수<br/>(k*****)</td>
              <td>010-****-5678</td>
              <td>비동의</td>
              <td>
    						<span class="checkSet noLabel">
    							<input type="checkbox" id="chk4">
    							<label for="chk4"><i></i></label>
    						</span>
    					</td>
    				</tr>
            <tr>
    					<td>287884</td>
              <td>김*수<br/>(k*****)</td>
              <td>010-****-5678</td>
              <td>동의</td>
              <td>
    						<span class="checkSet noLabel">
    							<input type="checkbox" id="chk4">
    							<label for="chk4"><i></i></label>
    						</span>
    					</td>
    				</tr>
            <tr>
    					<td>287884</td>
              <td>김*수<br/>(k*****)</td>
              <td>010-****-5678</td>
              <td>동의</td>
              <td>
    						<span class="checkSet noLabel">
    							<input type="checkbox" id="chk4">
    							<label for="chk4"><i></i></label>
    						</span>
    					</td>
    				</tr>
            <tr>
    					<td>287884</td>
              <td>김*수<br/>(k*****)</td>
              <td>010-****-5678</td>
              <td>동의</td>
              <td>
    						<span class="checkSet noLabel">
    							<input type="checkbox" id="chk4">
    							<label for="chk4"><i></i></label>
    						</span>
    					</td>
    				</tr>
            <tr>
    					<td>287884</td>
              <td>김*수<br/>(k*****)</td>
              <td>010-****-5678</td>
              <td>동의</td>
              <td>
    						<span class="checkSet noLabel">
    							<input type="checkbox" id="chk4">
    							<label for="chk4"><i></i></label>
    						</span>
    					</td>
    				</tr>
            <tr>
    					<td>287884</td>
              <td>김*수<br/>(k*****)</td>
              <td>010-****-5678</td>
              <td>동의</td>
              <td>
    						<span class="checkSet noLabel">
    							<input type="checkbox" id="chk4">
    							<label for="chk4"><i></i></label>
    						</span>
    					</td>
    				</tr>
            <!-- 데이터 없을 경우 -->
            <tr style="display:none;"><td colspan="5" class="noneData">등록된 데이터가 없습니다.</td></tr>
            <!-- //데이터 없을 경우 -->
    			</tbody>
    		</table>
    	</div>
      <!-- //테이블 목록 -->
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MsgReceiver',
  data() {
    return {
      popTrigger: false,
    }
  },
  components: {
  }
}
</script>
