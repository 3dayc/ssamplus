<template lang="html">
  <div>
    <div class="pageTit">
			<h2>리얼 적중</h2>
      <span><router-link to="/mkup/bbs">게시판 관리</router-link><router-link to="/mkup/bbs/noticeNews">선생님 게시판</router-link><em>리얼 적중</em></span>
		</div>
    <div class="content">
    <article>
      <!-- page layout -->
      <div class="teacherInterview">
        <!-- 테이블 유틸 -->
        <div class="boardTop">
          <span class="left-po">
            <span class="frontTooltip">
              <em>ⓘ Front</em>
              <span>- 선생님 스페셜 – 리얼적중 > 노출 건 표시</span>
            </span>
          </span>
          <div class="listSearch">
            <div class="back">
              <div class="bdLine">
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">과목</option>
                      <option value="">교육학</option>
                      <option value="">논술면접</option>
                      <option value="">한국사</option>
                    </select>
                  </span>
                </span>
                <span class="lsItem">
                  <span class="selectSet lCase">
                    <select name="" id="">
                      <option value="no" class="label">선생님</option>
                    </select>
                  </span>
                </span>
              </div>
              <div>
                <button class="btnRefresh">초기화</button>
              </div>
            </div>
          </div>
          <div class="right-po">
            <span class="checkSet">
              <input type="checkbox">
              <label for=""><i></i>노출 허용으로 설정된 정보 조회</label>
            </span>
          </div>
        </div>
        <!-- //테이블 유틸 -->
        <!-- 선생님 목록 -->
    		<div class="teacherList">
          <div class="subTit"><h3>교육학</h3></div>
          <ul>
    				<li>
    					<router-link to="/mkup/bbs/teacherRealHit/view">
    						<div class="teacherCard">
    							<div class="tSumnail">
    								<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
    							</div>
    							<div class="tDetail">
    								<strong class="name">김현</strong>
    								<span class="subject">교육학</span>
    							</div>
    						</div>
    					</router-link>
    					<span class="frontSet">
    						<span class="labelToggleSet">
    							<input type="checkbox" id="push1">
    							<label for="push1">
    								<span>숨김</span>
    								<span>노출</span>
    							</label>
    						</span>
    					</span>
    				</li>
    				<li>
    					<router-link to="/mkup/bbs/teacherRealHit/view">
    						<div class="teacherCard">
    							<div class="tSumnail">
    								<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
    							</div>
    							<div class="tDetail">
    								<strong class="name">권구현</strong>
    								<span class="subject">교육학</span>
    							</div>
    						</div>
    					</router-link>
    					<span class="frontSet">
    						<span class="labelToggleSet">
    							<input type="checkbox" id="push2">
    							<label for="push2">
    								<span>숨김</span>
    								<span>노출</span>
    							</label>
    						</span>
    					</span>
    				</li>
    				<li>
    					<router-link to="/mkup/bbs/teacherRealHit/view">
    						<div class="teacherCard">
    							<div class="tSumnail">
    								<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
    							</div>
    							<div class="tDetail">
    								<strong class="name">윤중샘</strong>
    								<span class="subject">교육학</span>
    							</div>
    						</div>
    					</router-link>
    					<span class="frontSet">
    						<span class="labelToggleSet">
    							<input type="checkbox" id="push3">
    							<label for="push3">
    								<span>숨김</span>
    								<span>노출</span>
    							</label>
    						</span>
    					</span>
    				</li>
    			</ul>
          <div class="subTit"><h3>유아</h3></div>
          <ul>
    				<li>
    					<router-link to="/mkup/bbs/teacherRealHit/view">
    						<div class="teacherCard">
    							<div class="tSumnail">
    								<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
    							</div>
    							<div class="tDetail">
    								<strong class="name">배지윤</strong>
    								<span class="subject">유아</span>
    							</div>
    						</div>
    					</router-link>
    					<span class="frontSet">
    						<span class="labelToggleSet">
    							<input type="checkbox" id="push4">
    							<label for="push4">
    								<span>숨김</span>
    								<span>노출</span>
    							</label>
    						</span>
    					</span>
    				</li>
    				<li>
    					<router-link to="/mkup/bbs/teacherRealHit/view">
    						<div class="teacherCard">
    							<div class="tSumnail">
    								<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
    							</div>
    							<div class="tDetail">
    								<strong class="name">이동건</strong>
    								<span class="subject">유아</span>
    							</div>
    						</div>
    					</router-link>
    					<span class="frontSet">
    						<span class="labelToggleSet">
    							<input type="checkbox" id="push4">
    							<label for="push4">
    								<span>숨김</span>
    								<span>노출</span>
    							</label>
    						</span>
    					</span>
    				</li>
    				<li>
    					<router-link to="/mkup/bbs/teacherRealHit/view">
    						<div class="teacherCard">
    							<div class="tSumnail">
    								<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
    							</div>
    							<div class="tDetail">
    								<strong class="name">양재웅</strong>
    								<span class="subject">유아</span>
    							</div>
    						</div>
    					</router-link>
    					<span class="frontSet">
    						<span class="labelToggleSet">
    							<input type="checkbox" id="push5">
    							<label for="push5">
    								<span>숨김</span>
    								<span>노출</span>
    							</label>
    						</span>
    					</span>
    				</li>
    			</ul>
          <div class="subTit"><h3>국어</h3></div>
          <ul>
    				<li>
    					<router-link to="/mkup/bbs/teacherRealHit/view">
    						<div class="teacherCard">
    							<div class="tSumnail">
    								<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
    							</div>
    							<div class="tDetail">
    								<strong class="name">송헌김준팀</strong>
    								<span class="subject">국어</span>
    							</div>
    						</div>
    					</router-link>
    					<span class="frontSet">
    						<span class="labelToggleSet">
    							<input type="checkbox" id="push6">
    							<label for="push6">
    								<span>숨김</span>
    								<span>노출</span>
    							</label>
    						</span>
    					</span>
    				</li>
    				<li>
    					<router-link to="/mkup/bbs/teacherRealHit/view">
    						<div class="teacherCard">
    							<div class="tSumnail">
    								<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
    							</div>
    							<div class="tDetail">
    								<strong class="name">송헌</strong>
    								<span class="subject">국어</span>
    							</div>
    						</div>
    					</router-link>
    					<span class="frontSet">
    						<span class="labelToggleSet">
    							<input type="checkbox" id="push7">
    							<label for="push7">
    								<span>숨김</span>
    								<span>노출</span>
    							</label>
    						</span>
    					</span>
    				</li>
    				<li>
    					<router-link to="/mkup/bbs/teacherRealHit/view">
    						<div class="teacherCard">
    							<div class="tSumnail">
    								<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
    							</div>
    							<div class="tDetail">
    								<strong class="name">김준</strong>
    								<span class="subject">국어</span>
    							</div>
    						</div>
    					</router-link>
    					<span class="frontSet">
    						<span class="labelToggleSet">
    							<input type="checkbox" id="push8">
    							<label for="push8">
    								<span>숨김</span>
    								<span>노출</span>
    							</label>
    						</span>
    					</span>
    				</li>
    				<li>
    					<router-link to="/mkup/bbs/teacherRealHit/view">
    						<div class="teacherCard">
    							<div class="tSumnail">
    								<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
    							</div>
    							<div class="tDetail">
    								<strong class="name">박노송</strong>
    								<span class="subject">국어</span>
    							</div>
    						</div>
    					</router-link>
    					<span class="frontSet">
    						<span class="labelToggleSet">
    							<input type="checkbox" id="push9">
    							<label for="push9">
    								<span>숨김</span>
    								<span>노출</span>
    							</label>
    						</span>
    					</span>
    				</li>
    			</ul>
          <div class="subTit"><h3>영어</h3></div>
          <ul>
    				<li>
    					<router-link to="/mkup/bbs/teacherRealHit/view">
    						<div class="teacherCard">
    							<div class="tSumnail">
    								<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
    							</div>
    							<div class="tDetail">
    								<strong class="name">차류쉘팀</strong>
    								<span class="subject">영어</span>
    							</div>
    						</div>
    					</router-link>
    					<span class="frontSet">
    						<span class="labelToggleSet">
    							<input type="checkbox" id="push10">
    							<label for="push10">
    								<span>숨김</span>
    								<span>노출</span>
    							</label>
    						</span>
    					</span>
    				</li>
    				<li>
    					<router-link to="/mkup/bbs/teacherRealHit/view">
    						<div class="teacherCard">
    							<div class="tSumnail">
    								<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
    							</div>
    							<div class="tDetail">
    								<strong class="name">차미아</strong>
    								<span class="subject">영어</span>
    							</div>
    						</div>
    					</router-link>
    					<span class="frontSet">
    						<span class="labelToggleSet">
    							<input type="checkbox" id="push11">
    							<label for="push11">
    								<span>숨김</span>
    								<span>노출</span>
    							</label>
    						</span>
    					</span>
    				</li>
    				<li>
    					<router-link to="/mkup/bbs/teacherRealHit/view">
    						<div class="teacherCard">
    							<div class="tSumnail">
    								<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
    							</div>
    							<div class="tDetail">
    								<strong class="name">류지원</strong>
    								<span class="subject">영어</span>
    							</div>
    						</div>
    					</router-link>
    					<span class="frontSet">
    						<span class="labelToggleSet">
    							<input type="checkbox" id="push12">
    							<label for="push12">
    								<span>숨김</span>
    								<span>노출</span>
    							</label>
    						</span>
    					</span>
    				</li>
    				<li>
    					<router-link to="/mkup/bbs/teacherRealHit/view">
    						<div class="teacherCard">
    							<div class="tSumnail">
    								<span class="sumImg"><img img :src="require(`@/assets/images/img_teacher_sample.png`)" alt="김현"/></span>
    							</div>
    							<div class="tDetail">
    								<strong class="name">미쉘킴</strong>
    								<span class="subject">영어</span>
    							</div>
    						</div>
    					</router-link>
    					<span class="frontSet">
    						<span class="labelToggleSet">
    							<input type="checkbox" id="push13">
    							<label for="push13">
    								<span>숨김</span>
    								<span>노출</span>
    							</label>
    						</span>
    					</span>
    				</li>
    			</ul>
    		</div>
        <!-- //선생님 목록 -->
      </div>
      <!-- //page layout -->
    </article>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'TeacherInterview',
  data() {
    return {
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
