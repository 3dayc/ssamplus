<template lang="html">
	<div class="bannerSpecialRealHitView">
		<div class="pageTit">
			<h2>2_리얼적중</h2>
      <span><router-link to="/mkup/site/bannerIntro">사이트 관리</router-link><router-link to="/mkup/site/bannerIntro">배너 관리</router-link><router-link to="/mkup/site/bannerSpecial">선생님 스폐셜</router-link><em>2_리얼적중</em></span>
		</div>
	  <div class="content">
	    <article>
        <!-- page layout -->
        <div><!-- class 없어도 유지 -->
					<div class="boardTop">
						<div class="left bannerMainT">
		          <span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
		          <strong>배지윤<em>선생님</em></strong>
						</div>
						<div class="right">
            	<router-link to="/mkup/site/bannerSpecial" class="btnList">목록으로</router-link>
							<button class="btnPreview ml5">미리보기</button>
						</div>
					</div>
          <p class="boxBrown pd10">※ 가장 상단에 위치하여 랜덤 순서로 전체 선생님의 리스트를 표시함</p>
					<div class="bannerSet">
						<div class="subTit">
				      <h3>소개</h3>
							<span class="right">
								<button class="btnS redline">삭제</button>
								<button class="btnT ml5" @click="popupModify = true">수정</button>
							</span>
						</div>
						<div class="tvs">
							<table>
								<colgroup>
									<col width="160"/>
									<col width="*"/>
								</colgroup>
								<tbody>
									<tr>
										<th>내용</th>
										<td>
											지금 바로 빠져든다!<br/>
											교육학의 레전드 김현 선생님의 공부 전략 비법 하이라이트!
										</td>
									</tr>
									<tr>
										<th>Target URL</th>
										<td>https://www.youtube.com/premium</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
        </div>
        <!-- //page layout -->
    </article>
  </div>

	<!-- Popup -->
	<!-- 사이트관리 내 공통사용 팝업 -->
	<Popup v-if='popupModify' @close="popupModify = false" :popClass="classValue">
		<h1 slot="modalheader" class="tC">배너</h1>
		<div slot="modalbody">
			<dl>
				<dt>내용</dt>
				<dd>
					<textarea class="wFull h8">점수를 키우기 위한 교육학 완벽한 기본 개념 정립으로 막힘 없는 답안지 작성 가능!</textarea>
					<p>※ 상세 내용은 최대 100자 이내를 권장함</p>
				</dd>
			</dl>
			<dl>
				<dt>Target URL</dt>
				<dd>
					<input type="text" value="https://youtu.be/fNvOlYjWDZM" class="wFull"/>
					<p>※ 이미지를 클릭했을 때 이동 페이지 또는 재생할 영상 URL을 등록함</p>
				</dd>
			</dl>
		</div>
		<div slot="modalfooter" class="modalfooter">
			<button class="btnM line" @click="popupModify = false">취소</button>
			<button class="btnM green" @click="popupModify = false">저장</button>
		</div>
	</Popup>
	<!-- //사이트관리 내 공통사용 팝업 -->
	<!-- //Popup -->
</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
export default {
  mixins: [Mixin],
  name: 'BannerSpecialRealHitView',
	data() {
			return {
	      classValue: "siteMgtPop",
				popupModify: false,
			}
	},
	methods: {
	},
	components: {
	},
}
</script>

<style lang="css" scoped>
</style>
