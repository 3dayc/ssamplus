<template>  
    <span class="selectSet" :class="clz">
      <select :value="value" @change="onChange($event.target.value)">
        <option value="">선택하세요</option>
        <option v-for="(item, idx) in items" :value="item.value" v-bind:key="idx">          
          {{item.text}}
        </option>        
      </select>
    </span>  
</template>

<script>
  export default {
    props: ['items', 'value'],
    data() {
      return {
        clz:'label'
      }
    },
    methods: {
      onChange: function(value) {        
        if (value === '') {
          this.clz = 'label';          
        } else {
          this.clz = '';
        }
        this.$emit('input', value);
      }
    },
    created() {      
      console.log(this.items);
    }
  }
</script>