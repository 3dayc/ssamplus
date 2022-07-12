<template lang="html">
  <div>
    <div class="scheduleCal">
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
            <td colspan="9"><div class="schBar sbjMusic" title="[음악/박서형] 슬기로운 시창청음 심화반 (09:00~18:00)"><div class="schBarInner"><span>[음악/박서형] <strong>슬기로운 시창청음 심화반</strong> (09:00~18:00)</span></div></div></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th class="firstchild">402호</th>
            <td></td>
            <td colspan="7"><div class="schBar sbjZh"><div class="schBarInner" title="휴강 [중국어/한정은] 심화이론반 (10:00~17:00)"><span><em class="iSet">휴강</em>[중국어/한정은] <strong>심화이론반</strong> (10:00~17:00)</span></div></div></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th class="firstchild">403호</th>
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
            <td colspan="3"><div class="schBar sbjZhWr"><div class="schBarInner" title="라이브 [한문/원주용] 갈래와 문학사반2 (10:00~13:00)"><span><em class="iSet">라이브</em>[한문/원주용] <strong>갈래와 문학사반2</strong> (10:00~13:00)</span></div></div></td>
            <td></td>
            <td colspan="3"><div class="schBar sbjSpeMiddle"><div class="schBarInner" title="[특수/한경] 선행모의고사1 (14:00~17:10)"><span>[특수/한경] <strong>선행모의고사1</strong> (14:00~17:10)</span></div></div></td>
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
          <tr>
            <th class="firstchild">1103호</th>
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
            <th class="firstchild">기타</th>
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
    </div>
  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';

export default {
  mixins: [Mixin],
  name: 'ClassScheduleIvy',
  components: {
  },
  data() {
    return {
    }
  },
}
</script>
