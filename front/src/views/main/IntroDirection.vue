<template lang="html">
	<div>
    <div class="introDirectionBack" :class="{bg0:iDTab===0, bg1:iDTab===1, bg2:iDTab===2}">
			<div class="introDirection">
				<div class="leftArea">
					<div class="tit"><h2>Case by Case <strong>맞춤 합격전략</strong></h2></div>
					<ul>
						<li :class="{active:iDTab===0}" @click="iDTab = 0">고득점의 비밀</li>
						<li :class="{active:iDTab===1}" @click="iDTab = 1">초시 합격의 영광</li>
						<li :class="{active:iDTab===2}" @click="iDTab = 2">수험생활과 JOB</li>
					</ul>
				</div>
				<div class="rightArea">
					<div class="data01" v-if="iDTab == 0">
						<p>
							<strong>합격에는 우연이 없으며, 반드시 필연입니다.</strong>
							합격한 선배들의 다양한 사례를 통해 나만의 합격스토리를 완성해보세요!
						</p>
						<img :src="require(`@/assets/images/i_intro_direction01_txt.png`)" alt="" />
						<span>기출문제 분석에 따른 <strong>전략적 사고</strong>와 <strong>자신감</strong>을 가지자!!</span>
						<router-link to="">고득점의 비결 <em>자세히 보기</em></router-link>
					</div>
					<div class="data02" v-if="iDTab == 1">
						<p>
							<strong>합격에는 우연이 없으며, 반드시 필연입니다.</strong>
							합격한 선배들의 다양한 사례를 통해 나만의 합격스토리를 완성해보세요!
						</p>
						<img :src="require(`@/assets/images/i_intro_direction02_txt.png`)" alt="" />
						<span><strong>초시 합격생은 무엇이 다른가?</strong> 한번에 합격한 그 특별함은 무엇일까?</span>
						<router-link to="">초시합격의 영광 <em>자세히 보기</em></router-link>
					</div>
					<div class="data03" v-if="iDTab == 2">
						<p>
							<strong>합격에는 우연이 없으며, 반드시 필연입니다.</strong>
							합격한 선배들의 다양한 사례를 통해 나만의 합격스토리를 완성해보세요!
						</p>
						<img :src="require(`@/assets/images/i_intro_direction03_txt.png`)" alt="" />
						<span><em><strong>합격 핵심</strong>은 <strong>시간관리</strong>다!!</em> 구체적인 시간계획과 <strong>틈새시간 활용</strong>으로 일과 시험합격 <strong>무도 성공</strong>하자!!</span>
						<router-link to="">수험생활과 JOB <em>자세히 보기</em></router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'IntroDirection',
  components: {
  },
  data() {
    return {
			iDTab:0,
    }
  },
}
</script>
