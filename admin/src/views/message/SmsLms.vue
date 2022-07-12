<template lang="html">
  <div>
    <div class="pageTit">
      <h2>SMS/LMS 발송</h2>
      <span><router-link to="/mkup/message/smsLms">메시지 관리</router-link><router-link to="/mkup/message/smsLms">SMS 관리</router-link><em>SMS/LMS 발송</em></span>
    </div>

    <div class="content">
    <article>
      <!-- page layout -->
      <div class="smsLms"><!-- class 없어도 유지 -->
        <div class="tabwrap">
          <div class="tabBack">
            <div class="tabNav">
              <nav>
                <ul>
                  <li :class="{on:messageTab===0}">
                    <button @click="messageTab = 0">관리자 발송</button>
                  </li>
                  <li :class="{on:messageTab===1}">
                    <button @click="messageTab = 1">매크로 발송</button>
                  </li>
                  <li :class="{on:messageTab===2}">
                    <button @click="messageTab = 2">시스템 발송 목록</button>
                  </li>
                  <li :class="{on:messageTab===3}">
                    <button @click="messageTab = 3">사용자 유입 LMS</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
            <!--// tab -->
          <div class="tabLayout">
            <!-- 관리자 발송 -->
            <div v-if="messageTab == 0" class="tabData">
              <SmsLmsAdmin />
            </div>
            <!-- //관리자 발송 -->
            <!-- 매크로 발송 -->
            <div v-if="messageTab == 1" class="tabData">
              <SmsLmsMacro />
            </div>
            <!-- //매크로 발송 -->
            <!-- 시스템 발송 목록 -->
            <div v-if="messageTab == 2" class="tabData">
              <SmsLmsSystem />
            </div>
            <!-- //시스템 발송 목록 -->
            <!-- 사용자 유입 LMS -->
            <div v-if="messageTab == 3" class="tabData">
              <SmsLmsUser />
            </div>
            <!-- //사용자 유입 LMS -->
          </div>
        </div>

			</div>
			<!-- //page layout -->
    </article>
    </div>

  </div>
</template>

<script>
import Mixin from '@/plugins/mixins/Mixins.js';
import SmsLmsAdmin from '@/views/message/SmsLmsAdmin.vue'
import SmsLmsMacro from '@/views/message/SmsLmsMacro.vue'
import SmsLmsSystem from '@/views/message/SmsLmsSystem.vue'
import SmsLmsUser from '@/views/message/SmsLmsUser.vue'

export default {
  mixins: [Mixin],
  name: 'SmsLms',
  data() {
    return {
      messageTab: 0,
    }
  },
  methods: {
  },
  components: {
    SmsLmsAdmin,
    SmsLmsMacro,
    SmsLmsSystem,
    SmsLmsUser,
  },
}
</script>
