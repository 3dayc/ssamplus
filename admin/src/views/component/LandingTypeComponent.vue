<template lang="html">
  <div class="landingType">
    <span class="radioSet">
      <input type="radio" name="urlLanding" v-model="urlLanding" id="urlLanding1" value="thisWindow" checked/>
      <label for="urlLanding1"><i></i>본 창 열림</label>
    </span>
    <span class="radioSet">
      <input type="radio" name="urlLanding" v-model="urlLanding" id="urlLanding2" value="newWindow"/>
      <label for="urlLanding2"><i></i>새 창 열림</label>
    </span>
    <span class="radioSet">
      <input type="radio" name="urlLanding" v-model="urlLanding" id="urlLanding3" value="no"/>
      <label for="urlLanding3"><i></i>링크 없음</label>
    </span>
    <span class="radioSet">
      <input type="radio" name="urlLanding" v-model="urlLanding" id="urlLanding4" value="player"/>
      <label for="urlLanding4"><i></i>Player 열림</label>
    </span>
    <span class="radioSet">
      <input type="radio" name="urlLanding" v-model="urlLanding" id="urlLanding5" value="youtube"/>
      <label for="urlLanding5"><i></i>유튜브 열림</label>
    </span>
    <div class="mt10">
      <template v-if="urlLanding === 'thisWindow' || urlLanding === 'newWindow'">
        <input type="text" value="http://www.ssamplus.com/"/>
      </template>
      <template v-if="urlLanding === 'no'">
        <input type="text" value="http://" disabled/>
      </template>
      <template v-if="urlLanding === 'player'">
        <div class="landingTypePlayer">
          <span class="selectSet">
            <select name="" id="">
              <option value="no" class="label">게시지점 선택</option>
              <option value=""></option>
            </select>
          </span>
          <span class="selectSet">
            <select name="" id="">
              <option value="no" class="label">연도 선택</option>
              <option value=""></option>
            </select>
          </span>
          <input type="text" placeholder="폴더명 입력"/>
          <input type="text" placeholder="파일명 입력"/>
        </div>
      </template>
      <template v-if="urlLanding === 'youtube'">
        <input type="text" placeholder="유튜브 URL 에서 '/watch?v=' 이하 난수를 작성해주세요"/>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingTypeComponent',
  data () {
    return {
      landingType: 'landingTypeUrl',
      urlLanding: 'thisWindow',
    }
  },
  methods: {

  },
}
</script>

<style lang="css" scoped>
</style>
