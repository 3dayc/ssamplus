<template >
  <div>
    <br/><br/>
    <div style="width:700px;height:200px;">
    <Echart
      :option="bar31"
      :loading="loading"
    />
    </div>
    <br/><br/>
    <div style="width:400px;height:220px;">
    <Echart
      :option="bar32"
      :loading="loading"
    />
    </div>
    <br/><br/>
    <div style="width:800px;height:220px;">
    <Echart
      :option="bar33"
      :loading="loading"
    />
    </div>
    <br/><br/>
    <br/><br/>
    <br/><br/>
  </div>
</template>

<script>
  export default {
    name: 'bar3',
    data: () => ({
      loading: false,
      bar31: {
        backgroundColor:'#ffffff',
        title:{
          show: false,
        },
        grid: {
          top: '10',
          left: '20',
          right: '30',
          height: '110px'
        },
        tooltip: {
          formatter: "{a} <br> {c}% ( 000건 )"
        },
        legend: {
          bottom: '10px',
          left:'20',
          itemWidth: 7,
          itemHeight: 10,
          itemGap: 20,
          // textStyle:{
          //   color:'#89A7AF',
          // },
        },
        xAxis: [{
          type :'value',
          axisLabel: {
            // textStyle: {
            //   color: '#fff',
            // },
            formatter: '{value} %'
          }
        }],
        yAxis: [{
          data: [''],
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          }
        }],
        series: [
          {
            name:'학습자료',
            type:'bar',
            barWidth:50,
            stack:'total',
            // itemStyle: {
            //   color: '#E8A61F'
            // },
            data:[{
              value:12,
              // itemStyle: {
              //   color:'#E8A61F'
              // }
            }]
          },
          {
            name:'인쇄횟수추가',
            type:'bar',
            barWidth:50,
            stack:'total',
            // itemStyle: {
            //   color: '#E67C26'
            // },
            data:[{
              value:33.3,
              // itemStyle: {
              //   color:'#E67C26'
              // }
            }]
          },
          {
            name:'교재',
            type:'bar',
            barWidth:50,
            stack:'total',
            // itemStyle: {
            //   color: '#0CD8A7'
            // },
            data:[{
              value:33.4,
              // itemStyle: {
              //   color:'#0CD8A7'
              // }
            }]
          },
          {
            name:'배송',
            type:'bar',
            barWidth:50,
            stack:'total',
            // itemStyle: {
            //   color: '#0CD8A7'
            // },
            data:[{
              value:16.3,
              // itemStyle: {
              //   color:'#0CD8A7'
              // }
            }]
          },
          {
            name:'교환/반품',
            type:'bar',
            barWidth:50,
            stack:'total',
            // itemStyle: {
            //   color: '#0CD8A7'
            // },
            data:[{
              value:5,
              // itemStyle: {
              //   color:'#0CD8A7'
              // }
            }]
          }
        ]
      },
      bar32: {
        backgroundColor:'#ffffff',
        title: {
          show: true,
          text: '전체 수강생',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            height: 26,
            rich: {
                a: { // `lineHeight` is not set, then it will be 56}
                }
            }
          },
          subtext: '321',
          subtextStyle: {
            fontWeight: 'bold',
            fontSize: 32 ,
          },
          top: 'center',
          left: '120',
          textAlign: 'center'
        },
        grid: {
          top: '0',
          left: '0'
        },
        tooltip: {
            //trigger: 'item'
            formatter: "{b} <br> {c}% ( 000건 )"
        },
        legend: {
            itemWidth: 7,
            itemHeight: 10,
            top: '16%',
            right: '3%',
            width: '100px'
        },
        series: [
            {
                name: false,
                type: 'pie',
                radius: ['60%', '90%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                left: -150,
                labelLine: {
                    show: false
                },
                data: [
                    {value: 1048, name: '회원/로그인'},
                    {value: 735, name: '사이트 오류'},
                    {value: 580, name: '교재/학습자료'},
                    {value: 484, name: '강좌관련'},
                    {value: 300, name: '결제/환불'},
                    {value: 300, name: '학원(직강)'},
                    {value: 300, name: '기타/건의사항'},
                ]
            }
        ]
      },
      bar33: {
        backgroundColor:'#ffffff',
        tooltip: {
            trigger: 'axis',
            formatter: "2021년 {b}월 <br>{a0} {c0}명 (- 506) <br>{a1} {c1}명 (- 506)"
        },
        legend: {
            right: '0',
            width: '100',
            data: ['가입자', '탈퇴자']
        },
        grid: {
            left: '3%',
            right: '15%',
            bottom: '3%',
            top: '5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '가입자',
                type: 'line',
                stack: 'total',
                itemStyle: {
                  color: '#4f81bd'
                },
                data: [132,145,101,76,,,,,,,,,,]
            },
            {
                name: '탈퇴자',
                type: 'line',
                stack: 'total',
                itemStyle: {
                  color: '#c0504d'
                },
                data: [88,130,97,8,,,,,,,,,,]
            }
        ]
      }
    })
  };
</script>
