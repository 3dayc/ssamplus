<template >
  <div>
    <Echart
      :option="bar"
      :loading="loading"
    />
    <div>
    {{obj.data.random}}
    <button @click="init">444444444</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bar',
    data: () => ({
      loading: false,
      bar: {
        title: {
          text: 'ECharts Title'
        },
        tooltip: {},
        xAxis: {
          data: ['가', '나', '다', '라', '마', '사']
        },
        yAxis: {},
        series: [{
          name: 'Sales',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      },
      obj: {}
    }),
    methods: {
      init() {
        // alert(1);
        axios.get('/board/login').then(({ data }) => {
          this.obj = data;
          console.log(data);
        });
      }
    },
    created() {      
      axios.get('/board/login').then(({ data }) => {
        this.obj = data;
				console.log(data);
			});
    }
  };
</script>
