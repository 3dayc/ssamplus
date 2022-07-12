<template>  
  <youtube :video-id="videoId" :player-vars="playerVars" :width="1100" :height="619"></youtube>
</template>

<script>
export default {
  props: {
    videoId: {
      type: String      
    },    
  },
  data() {
    return {      
      playerVars: {
        autoplay: 1
      }    
    }
  },
  methods: {    
  },  
}
</script>