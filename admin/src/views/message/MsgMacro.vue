<template lang="html">
  <div id="windowLayout">
    <div class="winHeader">
      <h1>매크로 템플릿</h1>
      <span class="supTxt">* 등록된 매크로 템플릿을 관리하고 불러옵니다.</span>
    </div>
    <div class="winContent">
      <!-- 테이블 유틸 -->
      <div class="boardTop">
        <div class="left-po">
          <span class="selectSet mr10">
            <select name="" id="">
              <option value="no" class="label">전체</option>
              <option value="">불법녹화/녹음</option>
              <option value="">불법공유</option>
              <option value="">쿠폰발급</option>
              <option value="">쿠폰만료</option>
            </select>
          </span>
          <span class="checkSet">
            <input type="checkbox" name="chkType" id="chkType" checked/>
            <label for="chkType"><i></i>내가 등록한 건만 보기</label>
          </span>
        </div>
        <div class="right-po">
          <button class="btnM" @click="toastPop('error', '불러오기는 한 건만 가능합니다.')">불러오기</button>
          <button class="btnM line">삭제</button>
        </div>
      </div>
      <!-- //테이블 유틸 -->
      <!-- 테이블 목록 -->
      <div class="tls subGreen">
  			<table>
  				<colgroup>
  					<col width="80">
  					<col width="80">
  					<col width="250">
  					<col width="600">
  					<col width="100px;">
  					<col width="150px;">
  				</colgroup>
  				<thead>
  					<tr>
  						<th scope="col">
  							<span class="checkSet noLabel">
  								<input type="checkbox" id="chkall">
  								<label for="chkall"><i></i></label>
  							</span>
  						</th>
  						<th scope="col">발송<br/>유형</th>
  						<th scope="col">템플릿 명</th>
  						<th scope="col">내용</th>
  						<th scope="col">관리자</th>
  						<th scope="col">등록일</th>
  					</tr>
  				</thead>
  				<tbody>
  					<!--Loop-->
  					<tr>
  						<td>
  							<span class="checkSet noLabel">
  								<input type="checkbox" id="chk5">
  								<label for="chk5"><i></i></label>
  							</span>
  						</td>
  						<td>LMS</td>
  						<td class="tL">
                <a @click="popTrigger = true">불법 녹화/녹음 경고 1회차</a>
              </td>
              <td class="tL">
                <p class="ellipsis02">안녕하세요, KG에듀원 저작권 담당자입니다. {매크로1}에 회원님께서 접속하신 ID {매크로2}로 강의재생 중안녕하세요, KG에듀원 저작권 담당자입니다. {매크로1}에 회원님께서 접속하신 ID {매크로2}로 강의재생 중안녕하세요, KG에듀원 저작권 담당자입니다. {매크로1}에 회원님께서 접속하신 ID {매크로2}로 강의재생 중</p>
              </td>
              <td>박미진</td>
              <td>2020-02-11</td>
  					</tr>
  					<!--//Loop-->
            <tr>
  						<td>
  							<span class="checkSet noLabel">
  								<input type="checkbox" id="chk5">
  								<label for="chk5"><i></i></label>
  							</span>
  						</td>
  						<td>SMS</td>
  						<td class="tL">
                <a>불법 녹화/녹음 경고 1회차</a>
              </td>
              <td class="tL">
                <p class="ellipsis02">안녕하세요. 희소고시학원입니다. 연간쌤팩 할인에 50만원 추가 할인까지~ 할인쿠폰제공완료! 결제시 사용</p>
              </td>
              <td>박미진</td>
              <td>2020-02-11</td>
  					</tr>
            <tr>
  						<td>
  							<span class="checkSet noLabel">
  								<input type="checkbox" id="chk5">
  								<label for="chk5"><i></i></label>
  							</span>
  						</td>
  						<td>SMS</td>
  						<td class="tL">
                <a>불법 녹화/녹음 경고 1회차</a>
              </td>
              <td class="tL">
                <p class="ellipsis02">안녕하세요. 희소고시학원입니다. 연간쌤팩 할인에 50만원 추가 할인까지~ 할인쿠폰제공완료! 결제시 사용</p>
              </td>
              <td>박미진</td>
              <td>2020-02-11</td>
  					</tr>
            <tr>
  						<td>
  							<span class="checkSet noLabel">
  								<input type="checkbox" id="chk5">
  								<label for="chk5"><i></i></label>
  							</span>
  						</td>
  						<td>LMS</td>
  						<td class="tL">
                <a>불법 녹화/녹음 경고 1회차</a>
              </td>
              <td class="tL">
                <p class="ellipsis02">안녕하세요. 희소고시학원입니다. 연간쌤팩 할인에 50만원 추가 할인까지~ 할인쿠폰제공완료! 결제시 사용</p>
              </td>
              <td>박미진</td>
              <td>2020-02-11</td>
  					</tr>
            <tr>
  						<td>
  							<span class="checkSet noLabel">
  								<input type="checkbox" id="chk5">
  								<label for="chk5"><i></i></label>
  							</span>
  						</td>
  						<td>LMS</td>
  						<td class="tL">
                <a>불법 녹화/녹음 경고 1회차</a>
              </td>
              <td class="tL">
                <p class="ellipsis02">안녕하세요. 희소고시학원입니다. 연간쌤팩 할인에 50만원 추가 할인까지~ 할인쿠폰제공완료! 결제시 사용</p>
              </td>
              <td>박미진</td>
              <td>2020-02-11</td>
  					</tr>
            <tr>
  						<td>
  							<span class="checkSet noLabel">
  								<input type="checkbox" id="chk5">
  								<label for="chk5"><i></i></label>
  							</span>
  						</td>
  						<td>LMS</td>
  						<td class="tL">
                <a>불법 녹화/녹음 경고 1회차</a>
              </td>
              <td class="tL">
                <p class="ellipsis02">안녕하세요. 희소고시학원입니다. 연간쌤팩 할인에 50만원 추가 할인까지~ 할인쿠폰제공완료! 결제시 사용</p>
              </td>
              <td>박미진</td>
              <td>2020-02-11</td>
  					</tr>
            <tr>
  						<td>
  							<span class="checkSet noLabel">
  								<input type="checkbox" id="chk5">
  								<label for="chk5"><i></i></label>
  							</span>
  						</td>
  						<td>SMS</td>
  						<td class="tL">
                <a>불법 녹화/녹음 경고 1회차</a>
              </td>
              <td class="tL">
                <p class="ellipsis02">안녕하세요. 희소고시학원입니다. 연간쌤팩 할인에 50만원 추가 할인까지~ 할인쿠폰제공완료! 결제시 사용</p>
              </td>
              <td>박미진</td>
              <td>2020-02-11</td>
  					</tr>
            <tr>
  						<td>
  							<span class="checkSet noLabel">
  								<input type="checkbox" id="chk5">
  								<label for="chk5"><i></i></label>
  							</span>
  						</td>
  						<td>LMS</td>
  						<td class="tL">
                <a>불법 녹화/녹음 경고 1회차</a>
              </td>
              <td class="tL">
                <p class="ellipsis02">안녕하세요. 희소고시학원입니다. 연간쌤팩 할인에 50만원 추가 할인까지~ 할인쿠폰제공완료! 결제시 사용</p>
              </td>
              <td>박미진</td>
              <td>2020-02-11</td>
  					</tr>
            <tr>
  						<td>
  							<span class="checkSet noLabel">
  								<input type="checkbox" id="chk5">
  								<label for="chk5"><i></i></label>
  							</span>
  						</td>
  						<td>LMS</td>
  						<td class="tL">
                <a>불법 녹화/녹음 경고 1회차</a>
              </td>
              <td class="tL">
                <p class="ellipsis02">안녕하세요. 희소고시학원입니다. 연간쌤팩 할인에 50만원 추가 할인까지~ 할인쿠폰제공완료! 결제시 사용</p>
              </td>
              <td>박미진</td>
              <td>2020-02-11</td>
  					</tr>
            <tr>
  						<td>
  							<span class="checkSet noLabel">
  								<input type="checkbox" id="chk5">
  								<label for="chk5"><i></i></label>
  							</span>
  						</td>
  						<td>SMS</td>
  						<td class="tL">
                <a>불법 녹화/녹음 경고 1회차</a>
              </td>
              <td class="tL">
                <p class="ellipsis02">안녕하세요. 희소고시학원입니다. 연간쌤팩 할인에 50만원 추가 할인까지~ 할인쿠폰제공완료! 결제시 사용</p>
              </td>
              <td>박미진</td>
              <td>2020-02-11</td>
  					</tr>
            <!-- 데이터 없을 경우 -->
            <tr style="display:none;"><td colspan="6" class="noneData">등록된 데이터가 없습니다.</td></tr>
            <!-- //데이터 없을 경우 -->
  				</tbody>
  			</table>
  		</div>
      <!-- //테이블 목록 -->
      <Paginate />
    </div>
    <!-- Popup -->
    <Popup v-if='popTrigger' @close="popTrigger = false" :popClass="layerPopClass">
      <h1 slot="modalheader" class="tC">템플릿 내용 보기</h1>
      <div slot="modalbody">
        <div class="tvs">
          <table>
            <caption>템플릿 내용보기</caption>
            <colgroup><col style="width:20%;"/><col></colgroup>
            <tbody>
              <tr>
                <th scope="row">메시지명</th>
                <td>불법녹화/녹음 경고 1회차</td>
              </tr>
              <tr>
                <th scope="row">제목</th>
                <td>불법 녹화/녹음 탐지 안내</td>
              </tr>
              <tr>
                <th scope="row">메시지 내용</th>
                <td>
                  안녕하세요 KG에듀원입니다.<br/>
                  많은 수강생들이 기다려 온 2022 연간 쌤팩이 1월 10일 수강 신청 오픈합니다. 일찍 신청하는 수강생들에게는 희소 모의고사 무료 쿠폰까지! 선착순 200명에게만 지급되는 혜택이니 서둘러 주세요.
                  <br/><br/>
                  무료 수신거부<br/>
                  02-870-8502
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div slot="modalfooter" class="modalfooter">
        <button class="btnM green" @click="popTrigger = false">불러오기</button>
        <button class="btnM line" @click="popTrigger = false">닫기</button>
      </div>
    </Popup>
    <!-- //Popup -->
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'MsgMacro',
  data() {
    return {
      popTrigger: false,
    }
  },
  components: {
  }
}
</script>
