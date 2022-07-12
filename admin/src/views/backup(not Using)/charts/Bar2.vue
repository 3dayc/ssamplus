<template >
  <div>
    <div style="height:400px;">
    <Echart
      :option="bar21"
      :loading="loading"
    />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bar2',
    data: () => ({
      loading: false,
      bar21: {
        tooltip: {
        // trigger: 'axis',
        // axisPointer: {            // Use axis to trigger tooltip
        //     type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
        // }
        },
        legend: {
            data: ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            //data: ['Mon']
        },
        series: [
            {
                name: 'Direct',
                type: 'bar',
                stack: 'total',
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: [320]
            },
            {
                name: 'Mail Ad',
                type: 'bar',
                stack: 'total',
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: [120]
            },
            {
                name: 'Affiliate Ad',
                type: 'bar',
                stack: 'total',
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: [220]
            },
            {
                name: 'Video Ad',
                type: 'bar',
                stack: 'total',
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: [150]
            },
            {
                name: 'Search Engine',
                type: 'bar',
                stack: 'total',
                label: {
                    show: false
                },
                emphasis: {
                    focus: 'series'
                },
                data: [820]
            }
        ]
      }
    })
  };
</script>
