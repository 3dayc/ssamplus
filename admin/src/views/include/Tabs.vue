<template lang="html">
  <div class="tabwrap">
    <div class="tabBack">
      <div class="tabNav">
        <nav>
          <ul>
            <li
              v-for="(tab, index) in tabs" :key="index"
              :class="{ 'on': tab.on }">
              <button @click="selectTab(tab)">
                      {{ tab.name }}
              </button>
          </li>
        </ul>
        </nav>
      </div>
    </div>

    <div class="tabLayout">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: []
    }
  },
  methods: {
    selectTab(selectTab) {
      this.tabs.forEach(tab => {
        tab.on = (tab.name == selectTab.name);
      });
    }
  },
  created() {
    this.tabs = this.$children;
  }
}
</script>
