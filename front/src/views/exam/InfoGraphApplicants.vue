<template >
  <div>
    <div style="width:90%;height:300px;margin:0 auto;">
    <Echart
      :option="bar33"
      :loading="loading"
    />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InfoGraphApplicants',
    data: () => ({
      loading: false,
      bar33: {
        backgroundColor:'#ffffff',
        tooltip: {
            trigger: 'axis',
            formatter: "{a0} : {c0}",
            trigger: "item",
            position: 'top'
        },
        legend: {
            right: '0',
            bottom: '0',
            width: '200',
            data: ['사전예고인원', '모집인원']
        },
        grid: {
            left: '0',
            right: '0',
            bottom: '10%',
            top: '13%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            //boundaryGap: false,
            data: ['2019', '2020', '2021']
        },
        yAxis: {
            type: 'value',
            show: true,
            nameTextStyle: {
              fontWeight: "bold",
              lineHeight: 30,
              color: "#333"
            },
            name: "일반 기준",
            nameLocation: "end"
        },
        series: [
            {
                name: '사전예고인원',
                type: 'bar',
                barGap: 0.1,
                barMaxWidth: 50,
                itemStyle: {
                  color: '#888'
                },
                data: [132,145,101],
                label: {
                  show: true,
                  position: "insideTop",
                  distance: 12,
                  color: '#ffffff'
                }
            },
            {
                name: '모집인원',
                type: 'bar',
                barMaxWidth: 50,
                itemStyle: {
                  color: '#0e935d'
                },
                data: [88,130,97],
                label: {
                  show: true,
                  position: "insideTop",
                  distance: 12,
                  color: '#ffffff'
                }
            }
        ]
      }
    })
  };
</script>
