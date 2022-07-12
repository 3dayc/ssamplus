<template lang="html">
  <div class="recruitmentType">
    <li>
      <span class="checkSet">
        <input type="checkbox"/>
        <label for=""><i></i>일반</label>
      </span>
    </li>
    <li>
      <span class="checkSet">
        <input type="checkbox"/>
        <label for=""><i></i>장애</label>
      </span>
    </li>
    <li>
      <span class="checkSet">
        <input type="checkbox"/>
        <label for=""><i></i>지역</label>
      </span>
    </li>
    <li>
      <span class="checkSet">
        <input type="checkbox"/>
        <label for=""><i></i>IB학교</label>
      </span>
    </li>
  </div>
</template>

<script>
export default {
  name: 'RecruitmentTypeComponent',
  data () {
    return {
      recruitmentType: 'recruitmentTypeUrl',
    }
  },
  methods: {
  },
}
</script>

<style lang="css" scoped>
</style>
