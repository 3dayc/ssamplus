<template lang="html">
  <div>
    <div class="studyCalender">
      <table>
        <thead>
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="notMonth">
              <strong>27</strong>
            </td>
            <td class="notMonth">
              <strong>28</strong>
            </td>
            <td class="notMonth">
              <strong>29</strong>
            </td>
            <td class="notMonth">
              <strong>30</strong>
            </td>
            <td @click="popupTrigger = true">
              <strong>1</strong>
              <em class="scSet num"><i>강</i>5강</em>
              <em class="scSet time"><i>수</i>32:10</em>
              <em class="scSet majors"><i>전</i>32:10</em>
              <em class="scSet edu"><i>교</i>32:10</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>2</strong>
              <em class="scSet num"><i>강</i>5강</em>
              <em class="scSet time"><i>수</i>32:10</em>
              <em class="scSet majors"><i>전</i>32:10</em>
              <em class="scSet edu"><i>교</i>32:10</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>3</strong>
              <em class="scSet num none"><i>강</i>0강</em>
              <em class="scSet time none"><i>수</i>00:00</em>
              <em class="scSet majors none"><i>전</i>00:00</em>
              <em class="scSet edu none"><i>교</i>00:00</em>
            </td>
          </tr>
          <tr>
            <td @click="popupTrigger = true">
              <strong>4</strong>
            </td>
            <td @click="popupTrigger = true">
              <strong>5</strong>
              <em class="scSet num"><i>강</i>5강</em>
              <em class="scSet time"><i>수</i>32:10</em>
              <em class="scSet majors"><i>전</i>32:10</em>
              <em class="scSet edu"><i>교</i>32:10</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>6</strong>
              <em class="scSet num"><i>강</i>5강</em>
              <em class="scSet time"><i>수</i>32:10</em>
              <em class="scSet majors"><i>전</i>32:10</em>
              <em class="scSet edu"><i>교</i>32:10</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>7</strong>
              <em class="scSet num none"><i>강</i>0강</em>
              <em class="scSet time none"><i>수</i>00:00</em>
              <em class="scSet majors none"><i>전</i>00:00</em>
              <em class="scSet edu none"><i>교</i>00:00</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>8</strong>
              <em class="scSet num"><i>강</i>5강</em>
              <em class="scSet time"><i>수</i>32:10</em>
              <em class="scSet majors"><i>전</i>32:10</em>
              <em class="scSet edu"><i>교</i>32:10</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>9</strong>
              <em class="scSet num"><i>강</i>5강</em>
              <em class="scSet time"><i>수</i>32:10</em>
              <em class="scSet majors"><i>전</i>32:10</em>
              <em class="scSet edu"><i>교</i>32:10</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>10</strong>
              <em class="scSet num none"><i>강</i>0강</em>
              <em class="scSet time none"><i>수</i>00:00</em>
              <em class="scSet majors none"><i>전</i>00:00</em>
              <em class="scSet edu none"><i>교</i>00:00</em>
            </td>
          </tr>
          <tr>
            <td @click="popupTrigger = true">
              <strong>11</strong>
            </td>
            <td @click="popupTrigger = true">
              <strong>12</strong>
              <em class="scSet num"><i>강</i>5강</em>
              <em class="scSet time"><i>수</i>32:10</em>
              <em class="scSet majors"><i>전</i>32:10</em>
              <em class="scSet edu"><i>교</i>32:10</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>13</strong>
              <em class="scSet num none"><i>강</i>0강</em>
              <em class="scSet time none"><i>수</i>00:10</em>
              <em class="scSet majors"><i>전</i>32:10</em>
              <em class="scSet edu"><i>교</i>32:10</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>14</strong>
              <em class="scSet num none"><i>강</i>0강</em>
              <em class="scSet time none"><i>수</i>00:00</em>
              <em class="scSet majors"><i>전</i>32:10</em>
              <em class="scSet edu"><i>교</i>32:10</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>15</strong>
              <em class="scSet num"><i>강</i>5강</em>
              <em class="scSet time"><i>수</i>32:10</em>
              <em class="scSet majors"><i>전</i>32:10</em>
              <em class="scSet edu"><i>교</i>32:10</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>16</strong>
              <em class="scSet num"><i>강</i>5강</em>
              <em class="scSet time"><i>수</i>32:10</em>
              <em class="scSet majors"><i>전</i>32:10</em>
              <em class="scSet edu none"><i>교</i>00:10</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>17</strong>
              <em class="scSet num none"><i>강</i>0강</em>
              <em class="scSet time none"><i>수</i>00:00</em>
              <em class="scSet majors none"><i>전</i>00:00</em>
              <em class="scSet edu none"><i>교</i>00:00</em>
            </td>
          </tr>
          <tr>
            <td @click="popupTrigger = true">
              <strong>18</strong>
            </td>
            <td @click="popupTrigger = true">
              <strong>19</strong>
              <em class="scSet num"><i>강</i>5강</em>
              <em class="scSet time"><i>수</i>32:10</em>
              <em class="scSet majors"><i>전</i>32:10</em>
              <em class="scSet edu"><i>교</i>32:10</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>20</strong>
              <em class="scSet num"><i>강</i>5강</em>
              <em class="scSet time"><i>수</i>32:10</em>
              <em class="scSet majors"><i>전</i>32:10</em>
              <em class="scSet edu"><i>교</i>32:10</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>21</strong>
              <em class="scSet num"><i>강</i>5강</em>
              <em class="scSet time"><i>수</i>32:10</em>
              <em class="scSet majors"><i>전</i>32:10</em>
              <em class="scSet edu"><i>교</i>32:10</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>22</strong>
              <em class="scSet num"><i>강</i>5강</em>
              <em class="scSet time"><i>수</i>32:10</em>
              <em class="scSet majors"><i>전</i>32:10</em>
              <em class="scSet edu"><i>교</i>32:10</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>23</strong>
              <em class="scSet num"><i>강</i>5강</em>
              <em class="scSet time"><i>수</i>32:10</em>
              <em class="scSet majors"><i>전</i>32:10</em>
              <em class="scSet edu none"><i>교</i>00:10</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>24</strong>
              <em class="scSet num none"><i>강</i>0강</em>
              <em class="scSet time none"><i>수</i>00:00</em>
              <em class="scSet majors none"><i>전</i>00:00</em>
              <em class="scSet edu none"><i>교</i>00:00</em>
            </td>
          </tr>
          <tr>
            <td @click="popupTrigger = true">
              <strong>25</strong>
            </td>
            <td @click="popupTrigger = true">
              <strong>26</strong>
              <em class="scSet num none"><i>강</i>0강</em>
              <em class="scSet time none"><i>수</i>00:00</em>
              <em class="scSet majors"><i>전</i>32:10</em>
              <em class="scSet edu"><i>교</i>32:10</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>27</strong>
              <em class="scSet num none"><i>강</i>0강</em>
              <em class="scSet time none"><i>수</i>00:00</em>
              <em class="scSet majors"><i>전</i>32:10</em>
              <em class="scSet edu"><i>교</i>32:10</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>28</strong>
              <em class="scSet num"><i>강</i>5강</em>
              <em class="scSet time"><i>수</i>32:10</em>
              <em class="scSet majors"><i>전</i>32:10</em>
              <em class="scSet edu"><i>교</i>32:10</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>29</strong>
              <em class="scSet num"><i>강</i>5강</em>
              <em class="scSet time"><i>수</i>32:10</em>
              <em class="scSet majors"><i>전</i>32:10</em>
              <em class="scSet edu"><i>교</i>32:10</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>30</strong>
              <em class="scSet num"><i>강</i>5강</em>
              <em class="scSet time"><i>수</i>32:10</em>
              <em class="scSet majors none"><i>전</i>00:00</em>
              <em class="scSet edu none"><i>교</i>00:00</em>
            </td>
            <td @click="popupTrigger = true">
              <strong>31</strong>
              <em class="scSet num none"><i>강</i>0강</em>
              <em class="scSet time none"><i>수</i>00:00</em>
              <em class="scSet majors none"><i>전</i>00:00</em>
              <em class="scSet edu none"><i>교</i>00:00</em>
            </td>
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
  name: 'StudyMyStatusCalender',
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {
  },
}
</script>
