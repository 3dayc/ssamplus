<template lang="html">
  <div>
      <div class="paginate">
        <a class="first">처음</a>
        <a class="prev">이전</a>
        <span>
          <a class="on">1</a>
          <a>2</a>
          <a>3</a>
          <a>4</a>
          <a>5</a>
          <a>6</a>
          <a>7</a>
          <a>8</a>
          <a>9</a>
          <a>10</a>
        </span>
        <a class="next">다음</a>
        <a class="last">마지막</a>
        <span class="selectSet pcCase">
          <select>
            <option>10</option>
            <option selected>20</option>
            <option>50</option>
          </select>
        </span>
        <span class="selectSet mCase">
          <select>
            <option selected>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </span>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Paginate',
  components: {
  },
  data() {
    return {
    }
  },
	methods: {
	},
  computed: {
  },
  mounted() {
  }
}
</script>
