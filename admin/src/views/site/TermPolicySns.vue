<template lang="html">
	<div>
		<div class="listView" v-if="view == 'list'">
			<div class="boardTop">
				<span class="right">
					<button class="btnM">버전 추가</button>
				</span>
			</div>
			<div class="tls">
				<table>
					<colgroup>
						<col width="140"/>
						<col width="180"/>
						<col width="200"/>
						<col width="*"/>
						<col width="200"/>
					</colgroup>
					<thead>
						<tr>
							<th>적용여부</th>
							<th>버전번호</th>
							<th>버전 적용일</th>
							<th>비고</th>
							<th>관리</th>
						</tr>
					</thead>
					<tbody>
						<tr class="blue">
							<td></td>
							<td><input type="text" placeholder="YYYYMMDD"/></td>
							<td>
								<VCalendar class="calSet" v-model="date" color="green">
									<template v-slot="{ inputValue, togglePopover }">
										<input :value="inputValue" @click="togglePopover()" readonly placeholder="YYYY-MM-DD" />
									</template>
								</VCalendar>
							</td>
							<td><input type="text"/></td>
							<td>
								<button class="btnS">저장</button>
							</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="snbTg1">
									<label for="snbTg1">
										<span>차단</span>
										<span>적용</span>
									</label>
								</span>
							</td>
							<td><a @click="view = 'detail'">20210429_02</a></td>
							<td>2021-01-30  00:00</td>
							<td></td>
							<td>
								<button class="btnS mr5">수정</button>
								<button class="btnS redline" @click="alertVerDelete = true">삭제</button>
							</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="snbTg2" checked>
									<label for="snbTg2">
										<span>차단</span>
										<span>적용</span>
									</label>
								</span>
							</td>
							<td><a @click="view = 'detail'">20210429_01</a></td>
							<td>2021-01-30  00:00</td>
							<td>2021년 정보통신망법 개인정보 처리방침 개정으로 인한 동의내용 개정</td>
							<td>
								<button class="btnS mr5">수정</button>
								<button class="btnS redline" @click="alertVerDelete = true">삭제</button>
							</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="snbTg3">
									<label for="snbTg3">
										<span>차단</span>
										<span>적용</span>
									</label>
								</span>
							</td>
							<td><input type="text" placeholder="YYYYMMDD" value="20210429_01"/></td>
							<td>
								<VCalendar class="calSet" v-model="date" color="green">
									<template v-slot="{ inputValue, togglePopover }">
										<input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
									</template>
								</VCalendar>
							</td>
							<td><input type="text" value="2021년 정보통신망법 개인정보 처리방침 개정으로 인한 동의내용 개정"></td>
							<td>
								<button class="btnS mr5">수정</button>
								<button class="btnS redline" @click="alertVerDelete = true">삭제</button>
							</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="snbTg4">
									<label for="snbTg4">
										<span>차단</span>
										<span>적용</span>
									</label>
								</span>
							</td>
							<td><a @click="view = 'detail'">20210102_03</a></td>
							<td>2021-01-30  00:00</td>
							<td>-</td>
							<td>
								<button class="btnS mr5">수정</button>
								<button class="btnS redline" @click="alertVerDelete = true">삭제</button>
							</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="snbTg5">
									<label for="snbTg5">
										<span>차단</span>
										<span>적용</span>
									</label>
								</span>
							</td>
							<td><a @click="view = 'detail'">20210102_02</a></td>
							<td>2021-01-30  00:00</td>
							<td>-</td>
							<td>
								<button class="btnS mr5">수정</button>
								<button class="btnS redline" @click="alertVerDelete = true">삭제</button>
							</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="snbTg6">
									<label for="snbTg6">
										<span>차단</span>
										<span>적용</span>
									</label>
								</span>
							</td>
							<td><a @click="view = 'detail'">20210102_01</a></td>
							<td>2021-01-30  00:00</td>
							<td>2021년 정보통신망법 개인정보 처리방침 개정으로 인한 동의내용 개정</td>
							<td>
								<button class="btnS mr5">수정</button>
								<button class="btnS redline" @click="alertVerDelete = true">삭제</button>
							</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="snbTg7">
									<label for="snbTg7">
										<span>차단</span>
										<span>적용</span>
									</label>
								</span>
							</td>
							<td><a @click="view = 'detail'">20201205_01</a></td>
							<td>2021-01-30  00:00</td>
							<td>-</td>
							<td>
								<button class="btnS mr5">수정</button>
								<button class="btnS redline" @click="alertVerDelete = true">삭제</button>
							</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="snbTg8">
									<label for="snbTg8">
										<span>차단</span>
										<span>적용</span>
									</label>
								</span>
							</td>
							<td><a @click="view = 'detail'">20201101_02</a></td>
							<td>2021-01-30  00:00</td>
							<td>-</td>
							<td>
								<button class="btnS mr5">수정</button>
								<button class="btnS redline" @click="alertVerDelete = true">삭제</button>
							</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="snbTg9">
									<label for="snbTg9">
										<span>차단</span>
										<span>적용</span>
									</label>
								</span>
							</td>
							<td><a @click="view = 'detail'">20201101_01</a></td>
							<td>2021-01-30  00:00</td>
							<td>2021년 정보통신망법 개인정보 처리방침 개정으로 인한 동의내용 개정</td>
							<td>
								<button class="btnS mr5">수정</button>
								<button class="btnS redline" @click="alertVerDelete = true">삭제</button>
							</td>
						</tr>
						<tr>
							<td>
								<span class="labelToggleSet">
									<input type="checkbox" id="snbTg10">
									<label for="snbTg10">
										<span>차단</span>
										<span>적용</span>
									</label>
								</span>
							</td>
							<td><a @click="view = 'detail'">20201101_01</a></td>
							<td>2021-01-30  00:00</td>
							<td>-</td>
							<td>
								<button class="btnS mr5">수정</button>
								<button class="btnS redline" @click="alertVerDelete = true">삭제</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Paginate />
		</div>
		<div class="detailView" v-else-if="view == 'detail'">
			<div class="boxBrown pd10 mb20">
				<span class="selectSet">
					<select name="" id="">
						<option value="">20210421_01(적용 중)</option>
						<option value="">20210429_02</option>
						<option value="">20210429_01</option>
						<option value="">20210101_02</option>
						<option value="">20210101_01</option>
					</select>
				</span>
				<div class="right">
					<a @click="view = 'list'" class="btnList">목록으로</a>
					<button class="btnM green ml10" @click="alertModifySave = true">저장</button>
				</div>
			</div>
			<div>
				<div class="tvs mb10">
					<table>
						<colgroup>
							<col width="160"/>
							<col width="*"/>
						</colgroup>
						<tbody>
							<tr>
								<th>필수/선택 구분</th>
								<td>
									<span class="radioSet">
			              <input type="radio" name="agree" checked/>
			              <label for=""><i></i>필수 동의</label>
			            </span>
			            <span class="radioSet">
			              <input type="radio" name="agree" />
			              <label for=""><i></i>선택 동의</label>
			            </span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<textarea rows="10">에디터가 표출될 영역입니다.</textarea>
			</div>
		</div>

		<!-- Popup -->
		<!-- 수정 내용 저장 -->
		<Alert v-if='alertModifySave' @close="alertModifySave = false">
			<div slot="modalbody">수정한 내용을 저장하시겠습니까?</div>
			<div slot="modalfooter" class="modalfooter">
				<button class="btnM gray" @click="alertModifySave = false">취소</button>
				<button class="btnM green" @click="alertModifySave = false">저장</button>
			</div>
		</Alert>
		<!-- //수정 내용 저장 -->
		<!-- 버전 삭제 확인 -->
		<Alert v-if='alertVerDelete' @close="alertVerDelete = false">
			<div slot="modalbody">해당 버전을 삭제하시겠습니까?</div>
			<div slot="modalfooter" class="modalfooter">
				<button class="btnM gray" @click="alertVerDelete = false">취소</button>
				<button class="btnM green" @click="alertVerDelete = false">삭제</button>
			</div>
		</Alert>
		<!-- //버전 삭제 확인 -->
		<!-- //Popup -->
	</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'TermPolicySite',
	data() {
			return {
				view: 'list',
				alertModifySave: false,
				alertVerDelete: false,
				date: 'YYYY-MM-DD',
			}
	},
	methods: {
	},
	components: {
	},
}
</script>
