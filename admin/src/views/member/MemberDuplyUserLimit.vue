<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>수강 제한 관리</h1>
      <span class="supTxt">* 중복 재생으로 인한 배수 제한을 관리하고, 강좌 배수를 변경하여 수강을 제한함</span>
			<strong class="right boxGray fBlue">361145  |  김*민  |  jim***** 님의 정보입니다.</strong>
    </div>
    <div class="winContent">
      <!-- 중복 재생 적발 내역 -->
      <h3>
        <strong>중복 재생 적발 내역</strong>
        <span class="right">
          <em>1</em> 강좌 / 총 <em>2</em>회 (유효 <em>1</em>회 , 취소 <em>1</em>회)
        </span>
      </h3>
      <div class="tls subGreen">
  			<table>
          <thead>
            <tr>
              <th>적발회차</th>
              <th>중복 재생 일시</th>
              <th>충돌 IP</th>
              <th>강좌명</th>
              <th>강좌</th>
              <th>유효 여부</th>
            </tr>
          </thead>
  				<tbody>
  					<tr>
  						<td>1회차</td>
  						<td>2020.07.15 (목) 20:18:33</td>
              <td>3.254.38.998</td>
              <td class="tL">[21 1~2월]<br/>장영희 과목중국어 – 80점 도약 모의고사반</td>
              <td>2강</td>
              <td>
                <span class="labelToggleSet">
                  <input type="checkbox" id="push1" checked>
                  <label for="push1">
                    <span>취소</span>
                    <span>유효</span>
                  </label>
                </span>
              </td>
  					</tr>
            <tr class="expiry"><!--20210715 class 변경-->
  						<td>-</td>
  						<td>2020.07.15 (목) 20:18:33</td>
              <td>3.254.38.998</td>
              <td class="tL">[21 1~2월]<br/>장영희 과목중국어 – 80점 도약 기본반</td>
              <td>32강</td>
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
            <!-- 데이터 없을 경우 -->
            <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
            <!-- //데이터 없을 경우 -->
  				</tbody>
  			</table>
  		</div>
      <!-- //중복 재생 적발 내역 -->
      <!-- 수강 제한 강좌 설정 -->
      <h3 class="mt10"><strong>수강 제한 강좌 설정</strong></h3>
      <div class="tls subGreen">
  			<table>
          <thead>
            <tr>
              <th>적발회차</th>
              <th>강좌명</th>
              <th>기본 배수</th>
              <th>변경 배수</th>
            </tr>
          </thead>
  				<tbody>
  					<tr>
  						<td>1회차</td>
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
      <!-- //수강 제한 강좌 설정 -->
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
  								<li><strong>[2021-02-23 15:35  / 박미진 ]</strong> 중복 재생 강좌에 대해 수강제한 설정함.</li>
  								<li><strong>[2021-02-23 15:35  / 박미진 ]</strong> 중복 재생 확인 후 취소 진행</li>
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
      <!-- //관리 -->
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MemberDuplyUserLimit',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>
