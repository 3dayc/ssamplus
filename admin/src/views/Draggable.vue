<template lang="html">
  <div class="tls mt20">
    <table>
      <colgroup>
        <col width="60"/>
        <col width="150"/>
        <col width="60"/>
        <col width="350"/>
        <col width="350"/>
        <col width="80"/>
        <col width="150"/>
        <col width="150"/>
        <col width="60"/>
      </colgroup>
      <thead>
        <tr>
          <th>순번</th>
          <th>카테고리</th>
          <th>회차</th>
          <th>강의 제목</th>
          <th>파일명</th>
          <th>시간</th>
          <th>업데이트일</th>
          <th>직강일</th>
          <th>삭제</th>
        </tr>
      </thead>
      <draggable v-model="list" tag="tbody" handle=".handle">
        <tr v-for="(element, idx) in list" :key="element.id">
          <td class="handle">=</td>
          <td>
            <span class="selectSet wFull">
              <select name="" id="" v-model="element.subject">
                <option value="no" class="label">선택</option>
                <option value="sj1">중국철학</option>
                <option value="sj2">중국무학</option>
              </select>
            </span>
          </td>
          <td>{{ element.count }}강</td>
          <td class="lgItem item3"><input type="text" v-model="element.name"/></td>
          <td class="lgItem item4"><input type="text" v-model="element.fileName"/></td>
          <td class="lgItem item5"><input type="text" placeholder=":" class="tC" v-model="element.time"/></td>
          <td class="lgItem item6">
            <span class="selectSet wFull">
              <select name="" id="" v-model="element.updateDate">
                <option value="no" class="label">선택</option>
                <option value="">2021-01-01(월)</option>
              </select>
            </span>
          </td>
          <td class="lgItem item7">
            <span class="selectSet wFull">
              <select name="" id="" v-model="element.onDate">
                <option value="no" class="label">선택</option>
                <option value="">2021-01-01(월)</option>
              </select>
            </span>
          </td>
          <td class="lgItem item8">
            <button class="btnDelete" @click="removeAt(idx)">삭제</button>
          </td>
        </tr>
      </draggable>
      <tbody>
        <tr>
          <td colspan="9">
            <button class="btnM blueline wFull" @click="add">+ 행 추가</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
let id = 3;
import Mixin from '@/plugins/mixins/Mixins.js';
import draggable from 'vuedraggable';

export default {
  mixins: [Mixin],
  name: 'Draggable',
  components: {
    draggable
  },
  data() {
    return {
      list: [
        { id: 0, count: 1, fileName: "", time: "01:12", subject: "sj1",  },
        { id: 1, count: 2, fileName: "21ks_ysh_210301", time: "02:12", subject: "sj2", },
        { id: 2, count: 3, fileName: "", time: "03:12", subject: "sj1",}
      ],
      dragging: false,
    }
  },
  methods: {
    removeAt(idx) {
      this.list.splice(idx, 1);
    },
    add: function() {
      id++;
      this.list.push({ id, count: "", fileName: "", time: "", subject: "" });
    }
  }
}
</script>

<style scoped>
</style>