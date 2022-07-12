<template lang="html">
    <div class="subjectQrWrap">
        <div class="header">
            <div class="logo">  <img img :src="require(`@/assets/images/qr_logo.png`)" alt="qr 로고 이미지"/></div>
            <dl class="main_title">
                <dt>수학</dt>
                <dd style="height:180px">이정훈 <br/>안후상 팀</dd>
            </dl>
            <div class="qrBox">
                <dl class="qrBoxTitle">
                    <dt>[3~4월]</dt>
                    <dd>핵심 플랫폼반 교육학 완전 정복</dd>
                </dl>
                <div class="qrBoxContent">
                     <img img :src="require(`@/assets/images/qr_sample.png`)" alt="qr코드"/>
                </div>

            </div>
        </div>
        <div class="body">
            <div class="teacherImg">
                  <img img :src="require(`@/assets/images/qr_teacher.png`)" alt="이벤트 이미지"/>
            </div>
        </div>
        <span class="design">
            <span class="front">
                 <img img :src="require(`@/assets/images/qr_front.png`)" alt="이벤트 이미지"/>
            </span>
        </span>
        <div class="print_button_box" ><span class="btnArea"><button class="btnPrint">인쇄</button></span></div><!--@click="printWindow"-->
    </div>

</template>

<script>
export default {

  name: 'SingleCourseSubjectQr',
  data() {
    return {

    }
  },
 methods:{
    //  인쇄 버튼
    printWindow: function () {
      window.print();
    }
  },
  components: {
  }
}
</script>