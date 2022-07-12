<template lang="html">
<div>
  <div class="boardTop tL"><button class="btnS">홈배너 과목추가</button></div>
	<!-- Loop : 교육학 -->
  <div class="bannerSet">
    <div class="subTit">
      <h3>교육학</h3>
      <span class="right">
        <button class="btnS redline">삭제</button>
        <button class="btnS ml5">선생님 추가</button>
      </span>
    </div>
    <div class="tls">
      <table>
        <colgroup>
          <col width="100"/>
          <col width="160"/>
          <col width="160"/>
          <col width="160"/>
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>프론트 노출</th>
            <th>탭 메뉴</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          <!-- 메뉴추가 -->
          <tr class="dropOpen">
            <td>1</td>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push1">
                <label for="push1">
                  <span>차단</span>
                  <span>사용</span>
                </label>
              </span>
            </td>
            <td><button class="btnSearch">검색</button></td>
            <td><button class="btnS line">삭제</button></td>
          </tr>
          <!-- //메뉴추가 -->
          <!-- Loop -->
          <tr>
            <td>2</td>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push12">
                <label for="push12">
                  <span>차단</span>
                  <span>사용</span>
                </label>
              </span>
            </td>
            <td><router-link to="/mkup/site/bannerSpecial/home">김현</router-link></td>
            <td><button class="btnS line">삭제</button></td>
          </tr>
          <!-- //Loop -->
          <tr>
            <td>3</td>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push13" checked/>
                <label for="push13">
                  <span>차단</span>
                  <span>사용</span>
                </label>
              </span>
            </td>
            <td><router-link to="/mkup/site/bannerSpecial/home">권구현</router-link></td>
            <td>적용 중 삭제불가</td>
          </tr>
          <!-- 데이터 없을 경우 -->
          <tr style="display:none;"><td colspan="4" class="noneData">등록된 데이터가 없습니다.</td></tr>
          <!-- //데이터 없을 경우 -->
        </tbody>
      </table>
    </div>
  </div>
	<!-- //Loop : 교육학  -->
	<!-- Loop : 유아 -->
  <div class="bannerSet">
    <div class="subTit">
      <h3>유아</h3>
      <span class="right">
        <button class="btnS redline">삭제</button>
        <button class="btnS ml5">선생님 추가</button>
      </span>
    </div>
    <div class="tls">
      <table>
        <colgroup>
          <col width="100"/>
          <col width="160"/>
          <col width="160"/>
          <col width="160"/>
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>프론트 노출</th>
            <th>탭 메뉴</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          <!-- 메뉴추가 -->
          <tr class="dropOpen">
            <td>1</td>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push21">
                <label for="push21">
                  <span>차단</span>
                  <span>사용</span>
                </label>
              </span>
            </td>
            <td><router-link to="/mkup/site/bannerSpecial/home">배지윤</router-link></td>
            <td><button class="btnS line">삭제</button></td>
          </tr>
          <!-- //메뉴추가 -->
          <!-- Loop -->
          <tr>
            <td>2</td>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push22">
                <label for="push22">
                  <span>차단</span>
                  <span>사용</span>
                </label>
              </span>
            </td>
            <td><router-link to="/mkup/site/bannerSpecial/home">이동건</router-link></td>
            <td>적용 중 삭제불가</td>
          </tr>
          <!-- //Loop -->
          <tr>
            <td>3</td>
            <td>
              <span class="labelToggleSet">
                <input type="checkbox" id="push23" checked/>
                <label for="push23">
                  <span>차단</span>
                  <span>사용</span>
                </label>
              </span>
            </td>
            <td><router-link to="/mkup/site/bannerSpecial/home">양재웅</router-link></td>
            <td>적용 중 삭제불가</td>
          </tr>
          <!-- 데이터 없을 경우 -->
          <tr style="display:none;"><td colspan="4" class="noneData">등록된 데이터가 없습니다.</td></tr>
          <!-- //데이터 없을 경우 -->
        </tbody>
      </table>
    </div>
  </div>
	<!-- //Loop : 유아  -->
</div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'BannerSpecialHome',
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
