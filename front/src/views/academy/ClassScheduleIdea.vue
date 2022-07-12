<template lang="html">
  <div>
    <div class="scheduleCal" id="ideaCal" style="position:relative;">
      <table>
        <thead>
          <tr>
            <th rowspan="2" class="firstchild">강의실</th>
            <th colspan="5" class="morning">오전</th>
            <th colspan="5" class="afternoon">오후</th>
            <th colspan="3" class="Nighttime">야간</th>
          </tr>
          <tr class="time">
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
            <th>13</th>
            <th>14</th>
            <th>15</th>
            <th>16</th>
            <th>17</th>
            <th>18</th>
            <th>19</th>
            <th>20</th>
            <th>21</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="firstchild">401호</th>
            <td id="firstTd"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th class="firstchild">501호</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th class="firstchild">502호</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th class="firstchild">601호</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th class="firstchild">602호</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th class="firstchild">1101호</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th class="firstchild">1102호</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      
      <div class="schBar" :class="obj.class" v-if="obj.width>0" v-for="(obj, idx) in list" :key="idx" :style="{position:'absolute', width:obj.width+'px', height:obj.height+'px', top:obj.top+'px', left:obj.left+'px'}">
        <div :title="`라이브 ${obj.div}/${obj.prof} ${obj.title} (${obj.start}~${obj.end}})`" class="schBarInner">
          <span>
            <!-- <em class="iSet">휴강</em> -->
            <em class="iSet">라이브</em>
            [{{obj.div}}/{{obj.prof}}] <strong>{{obj.title}}</strong> ({{obj.start}}~{{obj.end}})
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'ClassScheduleIdea',
  components: {
  },
  data() {
    return {
      list:[
        {ho:"401", start:"09:00", end:"18:00", div:"보건", prof:"임수진", title:"요약정리", class:"sbjHealth", top:0, left:0, width:0, height:0},
        {ho:"501", start:"10:00", end:"17:00", div:"중국어", prof:"한정은", title:"심화이론반", class:"sbjZh", top:0, left:0, width:0, height:0},
        {ho:"601", start:"10:00", end:"13:00", div:"국어", prof:"박노송", title:"갈래와 문학사반", class:"sbjKo", top:0, left:0, width:0, height:0},
        {ho:"601", start:"14:00", end:"17:00", div:"국어", prof:"박노성", title:"갈래와 문학사반", class:"sbjKo", top:0, left:0, width:0, height:0},
        {ho:"1101", start:"17:00", end:"19:00", div:"국어", prof:"박노성", title:"갈래와 문학사반", class:"sbjEn", top:0, left:0, width:0, height:0},
        {ho:"1101", start:"19:00", end:"20:00", div:"국어", prof:"박노성", title:"갈래와 문학사반", class:"sbjEn hidden", top:0, left:0, width:0, height:0}
      ]
    }
  },
  mounted() {
    this.$nextTick(this.redrawClass);
    window.addEventListener('resize', this.redrawClass);
	},
  beforeDestroy() {
    window.removeEventListener('resize', this.redrawClass);
  },
  methods: {
    redrawClass() {
      var top = document.querySelector("#firstTd").offsetTop;
      var left = document.querySelector("#firstTd").offsetLeft;
      var rect = document.querySelector("#firstTd").getBoundingClientRect();
      var width = rect.width;
      var height = rect.height;
      console.log(width);
      var ho = {"401":0, "501":1, "502":2, "601":3, "602":4, "1101":5, "1102":6};
      this.list.forEach(function (obj) {
        var start = Number(obj.start.split(":")[0])*60+Number(obj.start.split(":")[1])-9*60;
        var end = Number(obj.end.split(":")[0])*60+Number(obj.end.split(":")[1])-9*60;
        obj.top = ho[obj.ho]*height+top;
        obj.height = height + 1;
        obj.left = start/60*width+left;
        obj.width = ((end-start)/60*width) + 1;
      });
    }
  }
}
</script>
