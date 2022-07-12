<template lang="html">
  <div class="componentLayout">
    <div class="cptTable">
      <table>
        <tr>
          <th>Text</th>
        </tr>
        <tr>
          <td>
            <p>타이틀 및 강조 - 본고딕</p> <br/>
            <p style="font-weight:100;font-family:'NotoSans';font-size:18px;">폰트 사이즈는 18이며 두께 별 샘플입니다 font-weight : 100</p>
            <p style="font-weight:200;font-family:'NotoSans';font-size:18px;">폰트 사이즈는 18이며 두께 별 샘플입니다 font-weight : 200</p>
            <p style="font-weight:300;font-family:'NotoSans';font-size:18px;">폰트 사이즈는 18이며 두께 별 샘플입니다 font-weight : 300</p>
            <p style="font-weight:400;font-family:'NotoSans';font-size:18px;">폰트 사이즈는 18이며 두께 별 샘플입니다 font-weight : 400</p>
            <p style="font-weight:500;font-family:'NotoSans';font-size:18px;">폰트 사이즈는 18이며 두께 별 샘플입니다 font-weight : 500</p>
            <p style="font-weight:600;font-family:'NotoSans';font-size:18px;">폰트 사이즈는 18이며 두께 별 샘플입니다 font-weight : 600</p>
            <p style="font-weight:700;font-family:'NotoSans';font-size:18px;">폰트 사이즈는 18이며 두께 별 샘플입니다 font-weight : 700</p><br/>
            <p style="font-family:'NotoSans';font-size:18px;">폰트 사이즈는 18이며 두께 별 샘플입니다 font-weight : normal : 400</p>
            <p style="font-weight:bold;font-family:'NotoSans';font-size:18px;">폰트 사이즈는 18이며 두께 별 샘플입니다 font-weight : bold : 700</p>
            <p><strong style="font-family:'NotoSans';font-size:18px;">폰트 사이즈는 18이며 두께 별 샘플입니다 strong : 600</strong></p><br/>
          </td>
        </tr>
        <tr>
          <th>Color Chip</th>
        </tr>
        <tr>
          <td>
            <span class="componentbox" style="background:#333;">#333 기본 검정 $blackColor</span>&nbsp;
            <span class="componentbox" style="background:#666;">#666 서브 검정 $lightBlackColor</span>&nbsp;
            <span class="componentbox" style="background:#888;">#888 강조 회색2 $brightGrayColor</span>&nbsp;
            <span class="componentbox" style="background:#999;">#999 강조 회색 $darkGrayColor</span>&nbsp;
            <span class="componentbox" style="color:#333;background:#ddd;">#ddd 기본 회색 $grayColor</span>&nbsp;
            <span class="componentbox" style="color:#333;background:#fafafa;">#fafafa 서브 회색 $lightGrayColor</span>&nbsp;
            <br />
            <br />
            <div class="componentgreenbox">#0e935d 기본 녹색 $greenColor</div>&nbsp;
            <div class="componentredbox">#d1555F 기본 빨간색 $redColor</div>&nbsp;
            <div class="componentredbox" style="background:#3079ff;">#3079ff 기본 파란색 $blueColor</div>&nbsp;
            <br />
            <br />
            <br />
            <div class="compoColorBox">
              <span class="sbjMath">수학 그라디언트색</span>
              <span class="sbjMath solo">수학 단색</span>
              <span class="sbjMath opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjSc">과학교육론 그라디언트색</span>
              <span class="sbjSc solo">과학교육론 단색</span>
              <span class="sbjSc opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjEdu">교육학 그라디언트색</span>
              <span class="sbjEdu solo">교육학 단색</span>
              <span class="sbjEdu opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjInterview">면접 그라디언트색</span>
              <span class="sbjInterview solo">면접 단색</span>
              <span class="sbjInterview opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjKhistory">한국사 그라디언트색</span>
              <span class="sbjKhistory solo">한국사 단색</span>
              <span class="sbjKhistory opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjChild">유아 그라디언트색</span>
              <span class="sbjChild solo">유아 단색</span>
              <span class="sbjChild opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjKo">국어 그라디언트색</span>
              <span class="sbjKo solo">국어 단색</span>
              <span class="sbjKo opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjEn">영어 그라디언트색</span>
              <span class="sbjEn solo">영어 단색</span>
              <span class="sbjEn opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjMusic">음악 그라디언트색</span>
              <span class="sbjMusic solo">음악 단색</span>
              <span class="sbjMusic opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjArt">미술 그라디언트색</span>
              <span class="sbjArt solo">미술 단색</span>
              <span class="sbjArt opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjPys">체육 그라디언트색</span>
              <span class="sbjPys solo">체육 단색</span>
              <span class="sbjPys opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjZh">중국어 그라디언트색</span>
              <span class="sbjZh solo">중국어 단색</span>
              <span class="sbjZh opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjJa">일본어 그라디언트색</span>
              <span class="sbjJa solo">일본어 단색</span>
              <span class="sbjJa opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjZhWr">한문 그라디언트색</span>
              <span class="sbjZhWr solo">한문 단색</span>
              <span class="sbjZhWr opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjHome">가정 그라디언트색</span>
              <span class="sbjHome solo">가정 단색</span>
              <span class="sbjHome opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjMor">도덕윤리 그라디언트색</span>
              <span class="sbjMor solo">도덕윤리 단색</span>
              <span class="sbjMor opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjBeauty">미용 그라디언트색</span>
              <span class="sbjBeauty solo">미용 단색</span>
              <span class="sbjBeauty opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjHistory">역사 그라디언트색</span>
              <span class="sbjHistory solo">역사 단색</span>
              <span class="sbjHistory opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjGeo">지리 그라디언트색</span>
              <span class="sbjGeo solo">지리 단색</span>
              <span class="sbjGeo opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjPhy">물리 그라디언트색</span>
              <span class="sbjPhy solo">물리 단색</span>
              <span class="sbjPhy opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjChemi">화학 그라디언트색</span>
              <span class="sbjChemi solo">화학 단색</span>
              <span class="sbjChemi opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjBio">생물 그라디언트색</span>
              <span class="sbjBio solo">생물 단색</span>
              <span class="sbjBio opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjCounsel">전문상담 그라디언트색</span>
              <span class="sbjCounsel solo">전문상담 단색</span>
              <span class="sbjCounsel opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjHealth">보건 그라디언트색</span>
              <span class="sbjHealth solo">보건 단색</span>
              <span class="sbjHealth opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjSpeChild">유아특수 그라디언트색</span>
              <span class="sbjSpeChild solo">유아특수 단색</span>
              <span class="sbjSpeChild opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjSpeElement">초등특수 그라디언트색</span>
              <span class="sbjSpeElement solo">초등특수 단색</span>
              <span class="sbjSpeElement opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjSpeMiddle">중등특수 그라디언트색</span>
              <span class="sbjSpeMiddle solo">중등특수 단색</span>
              <span class="sbjSpeMiddle opacity">단색반투명</span>
            </div>
            <div class="compoColorBox">
              <span class="sbjLib">사서직 그라디언트색</span>
              <span class="sbjLib solo">사서직 단색</span>
              <span class="sbjLib opacity">단색반투명</span>
            </div>
            <br />
            이외의 색상 코드는 각 UI 별로 각각 적용하도록 함
            <br />
            <br />
            <br />
            전공 별 색상 (시험정보 > 기출문제 > 상세화면에서 적용)
            <br />
            <div class="compoColorBox">
              <span class="mjEdu">교육학</span>
              <span class="mjChild">유아·초등·특수</span>
              <span class="mjMiddle">중등</span>
              <span class="mjHealth">보건</span>
              <span class="mjSpeMiddle">중등특수</span>
              <span class="mjCounsel">전문상담</span>
              <span class="mjInterview">논술·면접·실기</span>
              <span class="mjTransfer">교대편입</span>
            </div>
          </td>
        </tr>
        <tr>
          <th>iCon</th>
        </tr>
        <tr>
          <td>
            강좌 수업시작(개강)여부 <br />
            <em class="iStartSet unOpen">미개강</em>&nbsp;
            <em class="iStartSet open">개강</em>&nbsp;
            <em class="iStartSet close">수강종료</em>&nbsp;<!--종강과 같음-->
            <em class="iStartSet waiting">수강대기</em>&nbsp;
            <em class="iStartSet continue">연장</em>&nbsp;
            <em class="iStartSet retake">재수강</em>&nbsp;
            <em class="iStartSet ing">수강 중</em>&nbsp;
            <br /><br />
            수강신청에 관한 상태 <br />
            <em class="iApplySet apply">신청예정</em>&nbsp;
            <em class="iApplySet ing">신청중</em>&nbsp;
            <em class="iApplySet complete">신청마감</em>&nbsp;
            <br /><br />
            결제 및 배송 관련 표시 <br />
            <em class="ipaySet pending">입금 대기중</em>&nbsp;
            <em class="ipaySet finished">결제 완료</em>&nbsp;
            <em class="ipaySet deliveryIng">배송중</em>&nbsp;
            <em class="ipaySet deliverEnd">배송 완료</em>&nbsp;
            <em class="ipaySet selfPickup">직접 수령</em>&nbsp;
            <em class="ipaySet received">취소 접수</em>&nbsp;
            <em class="ipaySet cancelEnd">취소 완료</em>&nbsp;
            <em class="ipaySet received">환불 접수</em>&nbsp;
            <em class="ipaySet refundEnd">환불 완료</em>&nbsp;
            <br /><br />
            <!-- Front에 노출여부 <br />
            <em class="iSet circle doubleLine"><span>화면<br/>비표시</span></em>&nbsp;
            <em class="iSet circle">화면표시</em>&nbsp;
            <br /><br /> -->
            모의고사 상태 <br />
            <em class="iMockSet">응시가능</em>&nbsp;
            <em class="iMockSet waiting">응시대기</em>&nbsp;
            <em class="iMockSet lecIng">수강 중</em>&nbsp;
            <em class="iMockSet lecwaiting">수강 대기</em>&nbsp;
            <em class="iMockSet lecEnd">수강 종료</em>&nbsp;
            <br /><br />
            과목 (원형) <br />
            <em class="iSbjSet">교육학</em>&nbsp;
            <em class="iSbjSet sbjEdu">교육학</em>&nbsp;
            <em class="iSbjSet sbjChild">유아</em>&nbsp;
            <em class="iSbjSet sbjKo">중등</em>&nbsp;
            <em class="iSbjSet ivy">아이비</em>&nbsp;
            <br /><br />
            과목 (태그형)<br />
            <em class="iSbjSetMini">중국어</em>
            <em class="iSbjSetMini">유아</em>
            <em class="iSbjSetMini">중등</em>
            <br /><br />
            강좌 수업장소 표시 <br />
            <em class="iLocSet ivy">아이비</em>&nbsp;
            <em class="iLocSet idea">이데아</em>&nbsp;
            <em class="iLocSet online">온라인</em>&nbsp;
            <em class="iLocSet live">라이브</em>&nbsp;
            <em class="iLocSet">학원</em>&nbsp;
            <br /><br />
            상품구분 <br />
            <em class="iPro">패키지</em>
            <em class="iPro">단과</em>
            <em class="iPro book">교재</em>
            <em class="iPro bonus">보너스</em>
            <em class="iPro device">노트북</em>
            <em class="iPro device">태블릿</em>
            <em class="iPro goods">문구</em>
            <br /><br />
            상품구분2<br />
            <em class="iPro line">교재도서</em>
            <em class="iPro line">학습기기</em>
            <em class="iPro my">내 강좌 교재</em>
            <br /><br />
            소득공제<br/>
            <em class="inComeDed">소득공제</em>
            <br /><br />
            강좌구분<br/>
            <em class="division">면접실연</em>&nbsp;
            <em class="division">문제풀이</em>&nbsp;
            <em class="division">모의고사</em>&nbsp;
            <em class="division">기타특강</em>&nbsp;
            <em class="division">이론강의</em>&nbsp;
            <br /><br />
            일반 안내표시 <br />
            <em class="iSet">2019</em>
            <em class="iSet">2020</em>
            <em class="iSet">2021</em>
            <em class="iSet red">신규개설</em>
            <br /><br />
            온라인강의 제작 상태<br/>
            <em class="iMaking ing">강의 제작중</em>&nbsp;
            <em class="iMaking end">제작완료</em>&nbsp;
            <br /><br />
            강좌 추가정보 안내표시 <br />
            <span class="iSetLine">
              <em>첨삭</em>
              <em>모바일</em>
              <em>PC</em>
              <em>PC+모바일</em>
              <em>인패키지</em>
              <em>패키지포함</em>
              <em>종강</em>
              <em>개강</em>
              <em>개강예정(2021년 09~12월)</em>
            </span>&nbsp;&nbsp;
            <span class="iSetLine white">
              <em>첨삭</em>
              <em>모바일</em>
              <em>PC</em>
              <em>PC+모바일</em>
              <em>인패키지</em>
              <em>패키지포함</em>
              <em>종강</em>
              <em>개강</em>
              <em>개강예정(2021년 09~12월)</em>
            </span>
            <br /><br />
            사물함 사용여부 상태 <br />
            <em class="iLockSet waiting">신청 완료</em>&nbsp;
            <em class="iLockSet">사용 중</em>&nbsp;
            <em class="iLockSet end">사용종료</em>&nbsp;
            <em class="iLockSet end">사용취소</em>&nbsp;
            <br/><br/>
            <em class="iPayTit">수강료</em>&nbsp;
            <em class="iPayTit">교재비</em>&nbsp;&nbsp;
            <em class="iPayTit">배송비</em>&nbsp;
            <em class="iPayTit total">합계</em>&nbsp;&nbsp;&nbsp;
            <br /><br />
            <em class="iBbsSet notice">공지</em>&nbsp;
            <em class="iBbsSet">대기중</em>&nbsp;
            <em class="iBbsSet end">답변완료</em>&nbsp;
            <em class="iBbsSet answer">답변</em>&nbsp;&nbsp;
            <em class="iAnswer">답변</em>&nbsp;
            <em class="iLock">비밀글</em>&nbsp;
            <br /><br />
            <!-- <span style="display:inline-block;padding:2px;background:#111;"><em class="iHome">홈</em></span>&nbsp;
            <span style="display:inline-block;padding:2px;background:#111;"><em class="iWrite">신청</em></span>&nbsp; -->
            <!-- <em class="imgEvent">EVENT</em>&nbsp; -->
            <em class="iFile">첨부파일</em>&nbsp;
          </td>
        </tr>
        <tr>
          <th>Unit Setting</th>
        </tr>
        <tr>
          <td>
            <span class="price">
              <del>193,000</del>
              <strong>2,712,000<i>원</i></strong>
            </span>&nbsp;&nbsp;
            <span class="price">
              <strong>2,712,000<i>원</i></strong>
              <del>193,000</del>
              <em>10<b>%</b></em>
            </span>
            <br/><br/>
            <span class="lecLimit">
              월, 목 9:30~13:00
              <em>70일간</em>
              <em>1.2배수</em>
            </span>
            <span class="lecLimit red">
              월, 목 9:30~13:00
              <em>70일간</em>
              <em>1.2배수</em>
            </span>
            <span class="limitNtime">수강기간 40일 <em>2021-03-01 ~ 2021-03-31</em> <i class="lecTimes">1.4배수</i></span>
            <span class="limitNtime">개강일 <em>2021-03-01 ~ 2021-03-31</em> <em class="red">월, 목 09:00 ~ 13:00</em></span>
          </td>
        </tr>
        <tr>
          <th>BUTTON</th>
        </tr>
        <tr>
          <td>
            <strong>large</strong>
            <button class="btnL">BUTTON - black </button>&nbsp;
            <button class="btnL green">BUTTON - Green </button>&nbsp;
            <button class="btnL red">BUTTON - Red </button>&nbsp;
            <button class="btnL redline">BUTTON - Red line</button>&nbsp;
            <button class="btnL line">BUTTON - Black line</button>&nbsp;
            <!-- <button class="btnL gray">BUTTON - Gray</button> -->
            <br /><br />
            <strong>Medium</strong>
            <button class="btnM">BUTTON - black </button>&nbsp;
            <button class="btnM green">BUTTON - Green </button>&nbsp;
            <button class="btnM red">BUTTON - Red </button>&nbsp;
            <button class="btnM redline">BUTTON - Red line</button>&nbsp;
            <button class="btnM line">BUTTON - Black line</button>&nbsp;
            <!-- <button class="btnM gray">BUTTON - Gray</button> -->
            <br /><br />
            <strong>small</strong>
            <button class="btnS">BUTTON - black </button>&nbsp;
            <button class="btnS green">BUTTON - GREEN </button>&nbsp;
            <button class="btnS red">BUTTON - Red </button>&nbsp;
            <button class="btnS redline">BUTTON - Red line</button>&nbsp;
            <button class="btnS line">BUTTON - Black line</button>&nbsp;
            <br /><br />
            <strong>Tiny</strong>
            <button class="btnT">BUTTON - black </button>&nbsp;
            <button class="btnT green">BUTTON - GREEN </button>&nbsp;
            <button class="btnT red">BUTTON - Red </button>&nbsp;
            <button class="btnT redline">BUTTON - Red line</button>&nbsp;
            <button class="btnT line">BUTTON - Black line</button>&nbsp;
            <!-- <button class="btnT gray">BUTTON - Gray</button> -->
            <br /><br />
            <!-- <strong>disabled</strong>
            <button class="btnL" disabled>BUTTON - Black</button>&nbsp;
            <button class="btnM line" disabled>BUTTON - Black line</button>&nbsp;
            <button class="btnS green" disabled>BUTTON - GREEN</button>&nbsp;
            <button class="btnM red" disabled>BUTTON - Red </button>&nbsp;
            <button class="btnL redline" disabled>BUTTON - Red line </button>&nbsp;
            <button class="btnM gray">BUTTON - Gray</button> -->
          </td>
        </tr>
        <tr>
          <th>Design Button</th>
        </tr>
        <tr>
          <td>
            <a href="#none;" class="btnContents">목차보기</a>&nbsp;
            <a href="#none;" class="btnBasket">장바구니</a>&nbsp;
            <a href="#none;" class="btnPay">즉시결제</a>&nbsp;
            <a href="#none;" class="btnInBook">입고안내</a>&nbsp;
            <a href="#none;" class="btnList">목록</a>&nbsp;
            <a href="#none;" class="btnLecSample">맛보기</a>&nbsp;
            <a href="#none;" class="btnGuide">가이드</a>&nbsp;
            <br/><br/>
            <a href="#none;" class="btnLecInfo">강좌소개</a>&nbsp;
            <a href="#none;" class="btnLecInfo">강의 리스트</a>&nbsp;
            <a href="#none;" class="btnOrderCancel">주문취소</a>&nbsp;
            <a href="#none;" class="btnDeliveryCancel">배송추적</a>&nbsp;
            <a href="#none;" class="btnPrintCancel">수강확인증</a>&nbsp;
            <a href="#none;" class="btnScheduleCancel">예약취소</a>&nbsp;
            <a href="#none;" class="btnReviewWrite">후기작성</a>&nbsp;
            <button class="btnCoupon">쿠폰선택</button>&nbsp;
            <button class="btnPwChange">비밀번호 변경</button>&nbsp;
            <button class="btnAddress">배송지 등록하기</button>&nbsp;
            <button class="btnCouponLec">적용상품보기</button>&nbsp;
            <button class="btnCouponLec on">적용상품보기</button>&nbsp;
            <br /><br />
            <button class="btnSmartDetail">수강혜택</button>&nbsp;
            <button class="btnSmartDetail">상세보기</button>&nbsp;
            <button class="btnSmartDetail">맛보기</button>&nbsp;&nbsp;
            <button class="btnHoldingOff">홀딩해지</button>&nbsp;
            <button class="btnAppCancel">신청취소</button>&nbsp;&nbsp;
            <button class="btnLecReAdd">재수강신청</button>&nbsp;
            <button class="btnLecReAdd">연장신청</button>&nbsp;
            <button class="btnLecReAdd">홀딩신청</button>&nbsp;
            <button class="btnLecReAdd" disabled>홀딩불가</button>&nbsp;
            <button class="btnLecReAdd">수강후기</button>
            <br /><br />
            <a href="#none;" class="btnFaceBook">페이스북</a>&nbsp;
            <a href="#none;" class="btnInsta">인스타그램</a>&nbsp;
            <a href="#none;" class="btnBlog">블로그</a>&nbsp;
            <a href="#none;" class="btnYoutube">유튜브</a>&nbsp;
            <br /><br />
            <a href="#none;" class="btnDownload">다운로드</a>&nbsp;
            <button class="btnDelete">삭제</button>&nbsp;
            <br /><br />
            <a href="#none;" class="btnInside">인사이드희소</a>&nbsp;
            <a href="#none;" class="btnAcademy">희소고시학원</a>&nbsp;
            <a href="#none;" class="btnTcHome">선생님 홈 <em>바로가기</em></a>&nbsp;
            <a href="#none;" class="btnTcHomeName">홍길동 <em>선생님</em></a>
            <br /><br />
            <span style="display:inline-block;padding:3px;background:#ccc;"><a href="#none;" class="btnNotice">공지사항</a></span>&nbsp;
            <span style="display:inline-block;padding:3px;background:#ccc;"><a href="#none;" class="btnNotice new">공지사항</a></span>&nbsp; <!-- 새 소식있을 경우 클래스 new 추가 -->
            <span style="display:inline-block;padding:3px;background:#ccc;"><a href="#none;" class="btnEvent">이벤트</a></span>&nbsp;
            <span style="display:inline-block;padding:3px;background:#ccc;"><a href="#none;" class="btnEvent new">이벤트</a></span>&nbsp;  <!-- 새 소식있을 경우 클래스 new 추가 -->
            <span style="display:inline-block;padding:3px;background:#ccc;"><a href="#none;" class="btnCounsel">상담센터</a></span>&nbsp;  <!-- 새 소식있을 경우 클래스 new 추가 -->
            <br /><br />
            <div class="lecBbsSet">
              <span>
                <button class="lecAtt">첨삭게시판</button>
                <button class="lecData">강의자료</button>
                <button class="lecReceipt">수강확인증</button>
              </span>
            </div>
            &nbsp;&nbsp;
            <span class="lecReAddSet">
              <button>재수강신청</button>
              <button>연장신청</button>
              <button>홀딩신청</button>
            </span>
            <br /><br />
            <a href="#none;" class="btnMore">더보기</a>&nbsp;&nbsp;
            <span class="countBox">
              <button class="minus">-</button>
              <span class="count">1</span>
              <button class="plus">+</button>
            </span>&nbsp;&nbsp;
            <span class="playPrevNext">
              <button class="btnMove prev">이전</button>
              <button class="btnMove next">다음</button>
            </span>&nbsp;&nbsp;
          </td>
        </tr>
        <tr>
          <th>INPUT</th>
        </tr>
        <tr>
          <td>
            <input type="text" placeholder="Placeholder" />
            <input type="text" placeholder="Placeholder" value="Value" />
            <input type="text" placeholder="Readonly" readonly />
            <input type="text" placeholder="Disabled" disabled />
            <div class="inError">
              <input type="text" placeholder="Error" value="Error">
              <span class="erMsg">입력 형식이 올바르지 않습니다.</span>
            </div>
            <br /><br />
            <VCalendar class="calSet" v-model="date" color="green">
              <template v-slot="{ inputValue, togglePopover }">
                <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
              </template>
            </VCalendar>
            <VCalendar class="calSet dupCal" v-model="range" is-range color="green">
              <template v-slot="{ inputValue, togglePopover, isDragging }">
                <input :value="inputValue.start + ' ~ ' + inputValue.end" :class="isDragging ? 'text-green-600' : 'text-green-900'" @click="togglePopover()" placeholder="시작일 선택 ~ 종료일 선택" />
              </template>
            </Vcalendar>
            <span class="calDupSet">
              <VCalendar class="calSet" v-model="date02" color="green">
                <template v-slot="{ inputValue, togglePopover }">
                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                </template>
              </VCalendar>
              <em>~</em>
              <VCalendar class="calSet" v-model="date03" color="green">
                <template v-slot="{ inputValue, togglePopover }">
                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                </template>
              </VCalendar>
            </span>
            <br /><br />
            <span class="ipBtn">
              <input type="text" />
              <button class="btnS">중복확인</button>
            </span>
            <br />
            <span class="ipSecurity">
              <input type="text" />
              <em>02:59</em>
              <button class="btnS black">재발송</button>
            </span>
            <br /><br />
            <SsamSelect :value="selected" :items="[{value:'0', text:'1번'},{value:'1', text:'2번'}]" @input="value => test(value)"/>  &nbsp;
            <span class="selectSet lCase">
              <select name="" id="">
                <option value="no" class="label">선택하세요</option><!-- 선택하세요만 색상 변경 > 반드시 value는 no 로 적용 -->
                <option value="">Select Option 1</option>
                <option value="">Select Option 2</option>
                <option value="">Select Option 3</option>
                <option value="">Select Option 4</option>
              </select>
            </span> &nbsp;
            <span class="selectSet">
              <select name="" id="">
                <option value="no" class="label">선택하세요</option>
                <option value="" selected>Select Option 1</option>
                <option value="">Select Option 2</option>
                <option value="">Select Option 3</option>
                <option value="">Select Option 4</option>
              </select>
            </span> &nbsp;
            <span class="selectSet">
              <select name="" id="" disabled>
                <option value="">Select Option 1</option>
                <option value="">Select Option 2</option>
                <option value="">Select Option 3</option>
                <option value="">Select Option 4</option>
              </select>
            </span>
            <br /><br />
            <span class="checkSet">
              <input type="checkbox" id="ck01"/>
              <label for="ck01"><i></i>checkSet</label>
            </span>
            <span class="checkSet" id="ck02">
              <input type="checkbox" checked />
              <label for="ck02"><i></i>checkSet</label>
            </span>
            <span class="checkSet" id="ck03">
              <input type="checkbox" disabled />
              <label for="ck03"><i></i>checkSet</label>
            </span>
            <span class="checkSet" id="ck04">
              <input type="checkbox" checked disabled />
              <label for="ck04"><i></i>checkSet</label>
            </span>
            <span class="checkSet noLabel" id="ck05">
              <input type="checkbox" />
              <label for="ck05"><i></i></label>
            </span>
            <br /><br />
            <span class="radioSet">
              <input type="radio" name="radio1" />
              <label for=""><i></i>radioSet</label>
            </span>
            <span class="radioSet">
              <input type="radio" name="radio1" checked />
              <label for=""><i></i>radioSet</label>
            </span>
            <span class="radioSet">
              <input type="radio" name="radio2" disabled />
              <label for=""><i></i>radioSet</label>
            </span>
            <span class="radioSet">
              <input type="radio" name="radio2" checked disabled />
              <label for=""><i></i>radioSet</label>
            </span>
            <br /><br />
            <span class="toggleSet">
              <input type="checkbox" id="push" />
              <label for="push">
                <!---->
              </label>
            </span>
            <span class="toggleSet">
              <input type="checkbox" id="push1" checked />
              <label for="push1">
                <!---->
              </label>
            </span>
            <span class="toggleSet">
              <input type="checkbox" id="push2" disabled />
              <label for="push2">
                <!---->
              </label>
            </span>
            <span class="toggleSet">
              <input type="checkbox" id="push3" checked disabled />
              <label for="push3">
                <!---->
              </label>
            </span> &nbsp;
            <span class="labelToggleSet long ml10">
              <input type="checkbox" id="professor">
              <label for="professor">
                <span>교수관리자</span>
                <span>교수관리자</span>
              </label>
            </span>
            <span class="labelToggleSet mode">
              <input type="checkbox" id="push55" checked>
              <label for="push55">
                <span>전공모드</span>
                <span>일반모드</span>
              </label>
            </span>
            <span class="labelToggleSet">
              <input type="checkbox" id="push5">
              <label for="push5">
                <span>미사용</span>
                <span>사용</span>
              </label>
            </span>
            <span class="labelToggleSet">
              <input type="checkbox" id="push4" checked="">
              <label for="push4">
                <span>미사용</span>
                <span>사용</span>
              </label>
            </span>
            <span class="labelToggleSet">
              <input type="checkbox" id="push7" disabled>
              <label for="push7">
                <span>미사용</span>
                <span>사용</span>
              </label>
            </span>
            <span class="labelToggleSet">
              <input type="checkbox" id="push6" checked="" disabled>
              <label for="push6">
                <span>미사용</span>
                <span>사용</span>
              </label>
            </span>
            <br /><br />
            <span class="priceCheck">
              <input type="checkbox" id="price0" />
              <label for="price0">
                <i></i><em>강좌(5)</em>
                <span class="price">
                  <del>2,568,000</del>
                  <strong>1,356,600<i>원</i></strong>
                </span>
              </label>
            </span>
            <span class="priceCheck">
              <input type="checkbox" id="price01" checked/>
              <label for="price01">
                <i></i><em>교재(2)</em>
                <span class="price">
                  <del>2,568,000</del>
                  <strong>1,356,600<i>원</i></strong>
                </span>
              </label>
            </span>
            <span class="priceCheck">
              <input type="checkbox" id="price02" disabled />
              <label for="price02">
                <i></i><em>교재(2)</em>
                <span class="price">
                  <del>2,568,000</del>
                  <strong>1,356,600<i>원</i></strong>
                </span>
              </label>
            </span>
            <span class="priceCheck">
              <input type="checkbox" id="price03" checked disabled />
              <label for="price03">
                <i></i><em>교재(2)</em>
                <span class="price">
                  <del>2,568,000</del>
                  <strong>1,356,600<i>원</i></strong>
                </span>
              </label>
            </span>
            <br /><br />
						<div class="sortSet">
	            <span>
	              <input type="radio" id="radioTab21" name="tadioTab2" checked /><label for="radioTab21">전체</label>
	            </span>
	            <span>
	              <input type="radio" id="radioTab22" name="tadioTab2" /><label for="radioTab22">노트북</label>
	            </span>
						</div>
            <br /><br />
						<div class="sortSet rndCase">
	            <span>
	              <input type="radio" id="radioTab1" name="tadioTab" checked /><label for="radioTab1">전체</label>
	            </span>
	            <span>
	              <input type="radio" id="radioTab2" name="tadioTab" /><label for="radioTab2">노트북</label>
	            </span>
	            <span>
	              <input type="radio" id="radioTab3" name="tadioTab" /><label for="radioTab3">태블릿</label>
	            </span>
	            <span>
	              <input type="radio" id="radioTab4" name="tadioTab" /><label for="radioTab4">스마트폰</label>
	            </span>
						</div>
            <br /><br />
						<div class="choiceSet">
	            <span>
	              <input type="radio" id="radioTab31" name="tadioTab3" checked /><label for="radioTab31">전체</label>
	            </span>
	            <span>
	              <input type="radio" id="radioTab32" name="tadioTab3" /><label for="radioTab32">노트북</label>
	            </span>
						</div>
            <br />
            <span class="unit wAuto"><input type="text" class="tR" placeholder="숫자만 입력"><em>회</em></span>
            <br />
            <strong>Error Message (Block Type)</strong>
            <div class="inError">
              <input type="text" placeholder="Error" value="Error">
              <span class="erMsg">입력 형식이 올바르지 않습니다.</span>
            </div>
            <div class="inError">
              <span class="unit"><input type="text" class="tR" placeholder="숫자만 입력"><em>회</em></span>
              <span class="erMsg">입력 형식이 올바르지 않습니다.</span>
            </div>
            <div class="inError">
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="no" class="label">선택하세요</option>
                  <option value="">Select Option 1</option>
                  <option value="">Select Option 2</option>
                  <option value="">Select Option 3</option>
                  <option value="">Select Option 4</option>
                </select>
              </span>
              <span class="erMsg">필수 선택 값입니다.</span>
            </div>
            <div class="inError">
              <VCalendar class="calSet" v-model="date" color="green">
                <template v-slot="{ inputValue, togglePopover }">
                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                </template>
              </VCalendar>
              <span class="erMsg">필수 선택 값입니다.</span>
            </div>
            <div class="inError">
              <VCalendar class="calSet dupCal" v-model="range" is-range color="green">
                <template v-slot="{ inputValue, togglePopover, isDragging }">
                  <input :value="inputValue.start + ' ~ ' + inputValue.end" :class="isDragging ? 'text-green-600' : 'text-green-900'" @click="togglePopover()" placeholder="시작일 선택 ~ 종료일 선택" />
                </template>
              </Vcalendar>
              <span class="erMsg">필수 선택 값입니다.</span>
            </div>
            <div class="inError">
              <span class="calDupSet">
                <VCalendar class="calSet" v-model="date02" color="green">
                  <template v-slot="{ inputValue, togglePopover }">
                    <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                  </template>
                </VCalendar>
                <em>~</em>
                <VCalendar class="calSet" v-model="date03" color="green">
                  <template v-slot="{ inputValue, togglePopover }">
                    <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                  </template>
                </VCalendar>
              </span>
              <span class="erMsg">필수 선택 값입니다.</span>
            </div>
            <div class="inError">
              <textarea name="" id="" rows="2"></textarea>
              <span class="erMsg">20자 이상 입력해주세요.</span>
            </div>
            <div class="inError">
              <span class="ipBtn">
                <input type="text" />
                <button class="btnS">중복확인</button>
              </span>
              <span class="erMsg">중복된 아이디입니다.</span>
            </div>
            <div class="inError">
              <span class="ipSecurity">
                <input type="text" />
                <em>02:59</em>
                <button class="btnS black">재발송</button>
              </span>
              <span class="erMsg">입력시간이 초과되었습니다.</span>
            </div>
            <span class="checkSet">
              <input type="checkbox" id="ck01"/>
              <label for="ck01"><i></i>checkSet</label>
            </span>
            <span class="checkSet" id="ck02">
              <input type="checkbox" checked />
              <label for="ck02"><i></i>checkSet</label>
            </span>
            <p class="erMsg">필수 선택 값입니다.</p>
            <strong>Error Message (Inline-Block Type)</strong>
            <div class="inError inBlock">
              <input type="text" placeholder="Error" value="Error">
              <span class="erMsg">입력 형식이 올바르지 않습니다.</span>
            </div>
            <div class="inError inBlock">
              <span class="unit"><input type="text" class="tR" placeholder="숫자만 입력"><em>회</em></span>
              <span class="erMsg">입력 형식이 올바르지 않습니다.</span>
            </div>
            <div class="inError inBlock">
              <span class="selectSet wFull">
                <select name="" id="">
                  <option value="no" class="label">선택하세요</option>
                  <option value="">Select Option 1</option>
                  <option value="">Select Option 2</option>
                  <option value="">Select Option 3</option>
                  <option value="">Select Option 4</option>
                </select>
              </span>
              <span class="erMsg">필수 선택 값입니다.</span>
            </div>
            <div class="inError inBlock">
              <VCalendar class="calSet" v-model="date" color="green">
                <template v-slot="{ inputValue, togglePopover }">
                  <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                </template>
              </VCalendar>
              <span class="erMsg">필수 선택 값입니다.</span>
            </div>
            <div class="inError inBlock">
              <VCalendar class="calSet dupCal" v-model="range" is-range color="green">
                <template v-slot="{ inputValue, togglePopover, isDragging }">
                  <input :value="inputValue.start + ' ~ ' + inputValue.end" :class="isDragging ? 'text-green-600' : 'text-green-900'" @click="togglePopover()" placeholder="시작일 선택 ~ 종료일 선택" />
                </template>
              </Vcalendar>
              <span class="erMsg">필수 선택 값입니다.</span>
            </div>
            <div class="inError inBlock">
              <span class="calDupSet">
                <VCalendar class="calSet" v-model="date02" color="green">
                  <template v-slot="{ inputValue, togglePopover }">
                    <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                  </template>
                </VCalendar>
                <em>~</em>
                <VCalendar class="calSet" v-model="date03" color="green">
                  <template v-slot="{ inputValue, togglePopover }">
                    <input :value="inputValue" @click="togglePopover()" readonly placeholder="일자 선택" />
                  </template>
                </VCalendar>
              </span>
              <span class="erMsg">필수 선택 값입니다.</span>
            </div>
          </td>
        </tr>
        <!-- 2021-10-12 -->
        <tr>
          <th>multiple select</th>
        </tr>
        <tr>
          <td>
            <div>
              <multiselect 
                v-model="value" 
                :options="options" 
                :close-on-select="true" 
                placeholder="Select one" 
                class="autoComplete" 
                :searchable="true">
                <span slot="noResult">검색결과가 없습니다. 다시 입력해주세요.</span>
              </multiselect>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <multiselect 
                class="baseMultiSelect" 
                v-model="multiValue" 
                :options="optionsMulti" 
                :multiple="false" 
                :close-on-select="true" 
                :clear-on-select="false" 
                :preserve-search="true" 
                placeholder="Pick some" 
                label="name" 
                track-by="name" 
                :preselect-first="true">
                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
              </multiselect>
              <multiselect 
                class="baseMultiSelect" 
                v-model="multiValue2" 
                :options="optionsMulti2" 
                :multiple="false" 
                :close-on-select="true" 
                group-values="dep2" 
                group-label="dep1" 
                :group-select="false" 
                :searchable="false"
                placeholder="과목" 
                track-by="name" 
                label="name">
                <template slot="selection" slot-scope="{ values, search, isOpen }"><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">{{ values.length }} options selected</span></template>
              </multiselect>
            </div>
          </td>
        </tr>
        <!--//2021-10-12 -->
        <tr>
          <th>fileUpload Style</th>
        </tr>
        <tr>
          <td>
            <ul class="fileList">
              <li>
                <span>부록_마음을 열어주는 가비국어.pdf</span>
                <button class="btnDownload">다운로드</button>
              </li>
              <li>
                <span>부록_마음을 열어주는 가비국어.pdf</span>
                <button class="btnDownload">다운로드</button>
              </li>
            </ul>
            <br/>
            <span class="uploadFile verM">
              <input type="file" id="fileUpload"/>
              <label for="fileUpload">+ 첨부파일</label>
            </span>
            <ul class="uploadFileList mt10">
              <li>
                <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                <span class="btnBox">
                  <button class="btnDownload">다운로드</button>
                </span>
              </li>
              <li class="printCase">
                <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                <span class="btnBox">
                  <em>(인쇄횟수제한 : <strong>3</strong>/5)</em>
                  <button class="btnPrint" v-if="!this.mobile">인쇄하기</button>
                </span>
              </li>
              <li>
                <span class="name">부록_마음을 열어주는 가비국어.pdf</span>
                <span class="btnBox">
                  <button class="btnDownload">다운로드</button>
                  <button class="btnDelete">삭제</button>
                </span>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>TAB</th>
        </tr>
        <tr>
          <td>
            <!-- tab-wrap -->
            <div class="tabwrap">
              <!-- tab -->
              <div class="tabBack">
                <div class="tabNav">
                  <nav>
                    <ul>
                      <li :class="{on:currentTab===0}"><button @click="currentTab = 0">tab1</button></li>
                      <li :class="{on:currentTab===1}"><button @click="currentTab = 1">tab2</button></li>
                      <li :class="{on:currentTab===2}"><button @click="currentTab = 2">tab3</button></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <!--// tab -->
              <div class="tabLayout">
                <div v-if="currentTab == 0" class="tabData" :key="currentTab">Tab Menu 0 Data</div>
                <div v-if="currentTab == 1" class="tabData">Tab Menu 1 Data</div>
                <div v-if="currentTab == 2" class="tabData">Tab Menu 2 Data</div>
              </div>
            </div>
            <!-- //tab-wrap -->
            <!-- tab-wrap2 -->
            <div class="tabwrap">
              <!-- tab -->
              <div class="tabBack">
                <div class="tabNav">
                  <nav>
                    <ul class="lineTab">
                      <li :class="{on:currentTab2===0}"><button @click="currentTab2 = 0">tab1</button></li>
                      <li :class="{on:currentTab2===1}"><button @click="currentTab2 = 1">tab2</button></li>
                      <li :class="{on:currentTab2===2}"><button @click="currentTab2 = 2">tab3</button></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <!--// tab -->
              <div class="tabLayout">
                <div v-if="currentTab2 == 0" class="tabData" :key="currentTab2">Tab Menu 0 Data</div>
                <div v-if="currentTab2 == 1" class="tabData">Tab Menu 1 Data</div>
                <div v-if="currentTab2 == 2" class="tabData">Tab Menu 2 Data</div>
              </div>
            </div>
            <!-- //tab-wrap2 -->
            <br/><br/>
            <!-- tab-wrap3 -->
            <div class="tabwrap">
              <!-- tab -->
              <div class="tabBack">
                <div class="tabNav">
                  <nav>
                    <ul class="blackLineTab">
                      <li :class="{on:currentTab3===0}"><button @click="currentTab3 = 0">tab0</button></li>
                      <li :class="{on:currentTab3===1}"><button @click="currentTab3 = 1">tab1</button></li>
                      <li :class="{on:currentTab3===2}"><button @click="currentTab3 = 2">tab2</button></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <!--// tab -->
              <div class="tabLayout">
                <div v-if="currentTab3 == 0" class="tabData" :key="currentTab3">Tab Menu 0 Data</div>
                <div v-if="currentTab3 == 1" class="tabData">Tab Menu 1 Data</div>
                <div v-if="currentTab3 == 2" class="tabData">Tab Menu 2 Data</div>
              </div>
            </div>
            <!-- //tab-wrap3 -->
            <br/><br/>
            <!-- tab-wrap4 -->
            <div class="tabwrap">
              <!-- tab -->
              <div class="tabBack">
                <div class="tabNav">
                  <nav>
                    <ul class="blockTab">
                      <li :class="{on:currentTab4===0}"><button @click="currentTab4 = 0">tab0</button></li>
                      <li :class="{on:currentTab4===1}"><button @click="currentTab4 = 1">tab1</button></li>
                      <li :class="{on:currentTab4===2}"><button @click="currentTab4 = 2">tab2</button></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <!--// tab -->
              <div class="tabLayout">
                <div v-if="currentTab4 == 0" class="tabData" :key="currentTab4">Tab Menu 0 Data</div>
                <div v-if="currentTab4 == 1" class="tabData">Tab Menu 1 Data</div>
                <div v-if="currentTab4 == 2" class="tabData">Tab Menu 2 Data</div>
              </div>
            </div>
            <!-- //tab-wrap4 -->
          </td>
        </tr>
        <tr>
          <th>POPUP</th>
        </tr>
        <tr>
          <td>
            <button class="btnS line" @click="popupTrigger02 = true">일반 layer팝업 유형1</button>&nbsp;
            <button class="btnS line" @click="popupTrigger = true">일반 layer팝업 유형1(Large)</button>&nbsp;
            <button class="btnS line" @click="popupTrigger03 = true">강좌 layer 유형</button>&nbsp;

            <button class="btnS line" @click="alertTrigger = true">alert 팝업</button>&nbsp;
            <button class="btnS line" @click="alertTrigger02 = true">alert 팝업</button>&nbsp;

            <button class="btnS line" @click="imgPopTrigger = true">img layer 팝업</button>&nbsp;

            <button class="btnS line" @click='WindowPopupComponent()'>윈도우 팝업 열기</button>&nbsp;

            <button class="btnS line" @click="toastPop('default', '안내성 토스트 팝업입니다. 정보안내, 설명 등에 사용합니다.')">안내 토스트 팝업 열기</button>&nbsp;
            <button class="btnS line" @click="toastPop('error', '에러/실패 토스트 팝업입니다.')">에러 토스트 팝업 열기</button>&nbsp;
            <button class="btnS line" @click="toastPop('success', '성공/완료 토스트 팝업입니다.')">성공 토스트 팝업 열기</button>

            <!-- Layer Popup -->
            <Popup v-if='popupTrigger' @close="popupTrigger = false" class="largePop">
              <template slot="modalheader">
                <div>
                  <h1>게시판</h1>
                  <button @click="popupTrigger = false" class="modalClose">close</button>
                </div>
              </template>
              <template slot="modalbody">
                <div>
                  <div>변경된 내용</div> <!-- 에디터 내용 들어갈 자리 -->
                  <span class="boardNavi">
                    <a href="#none;" class="next">
                      <strong>NEXT</strong>
                      <em>[전원100%증정] 연감쌤팩, 21학년도 최종합격수기 이벤트</em>
                    </a>
                    <a href="#none;" class="btnList">목록</a>
                    <a href="#none;" class="prev">
                      <strong>PREV</strong>
                      <em>[재도전 응원] 연감쌤팩, 3월 신규강의 할인 혜택을 누려보자!!</em>
                    </a>
                  </span>
                </div>
              </template>
            </Popup>

            <Popup v-if='popupTrigger02' @close="popupTrigger02 = false">
              <template slot="modalheader">
                <div><h1>약력/저서</h1></div>
              </template>
              <template slot="modalbody"><div>변경된 내용</div></template>
              <template slot="modalfooter">
                <div class="modalBtn">
                  <button class="btnL line" @click="popupTrigger02 = false">취소</button>
                  <button class="btnL" @click="popupTrigger02 = false">확인</button>
                </div>
              </template>
            </Popup>

            <Popup v-if='popupTrigger03' @close="popupTrigger03 = false" class="lecturePop">
              <template slot="modalheader">
                <div>
                  <h1>그린키위반 (기본반)</h1>
                  <span>기초부터 탄탄하게 쌓아가는 키위 교육학</span>
                  <button @click="popupTrigger03 = false" class="modalClose">close</button>
                </div>
              </template>
              <template slot="modalbody"><div>변경된 내용</div></template>
            </Popup>

            <Alert v-if='alertTrigger' @close="alertTrigger = false">
              <template slot="modalbody"><div class="basicNoty"><p>alert 팝업의 내용을 입력하기만 하면 됩니다</p></div></template>
            </Alert>

            <Alert v-if='alertTrigger02' @close="alertTrigger02 = false"> <!-- 하단 버튼 한개인 case -->
              <template slot="modalbody">
                <div class="basicNoty"><p>메시지가 임시저장 되었습니다.<br/>금일 내에 전송을 완료해주세요.</p></div>
              </template>
              <template slot="modalfooter">
                <button class="btnM" @click="alertTrigger02 = false">확인</button>
              </template>
            </Alert>

            <ImgPopup v-if='imgPopTrigger' @close="imgPopTrigger = false">
              <div slot="modalbody">
                <img :src="require(`@/assets/images/thumbnail/@tmp_img01.png`)" alt=""/>
              </div>
            </ImgPopup>
            <!-- // Layer Popup -->
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import Mixin from '@/plugins/mixins/Mixins.js';
  import SsamSelect from '@/components/SsamSelect.vue';

  export default {
    mixins: [Mixin],
    name: 'Uicomponent',
    components: {
      SsamSelect,
    },
    data() {
      return {
        selected:'',
        classValue: "downloadPop",
        classValue2: "test02",
        currentTab: 0,
        currentTab2: 0,
        currentTab3: 0,
        currentTab4: 0,
        tabs: ['tab1', 'tab2', 'tab3'],
        popupTrigger: false,
        popupTrigger02: false,
        popupTrigger03: false,
        popupTrigger04: false,
        alertTrigger: false,
        alertTrigger02: false,
        imgPopTrigger: false,
        date: '',
        date02: '',
        date03: '',
        range: {
          start: new Date(),
          end: new Date(),
        },
        fileName: '파일업로드 placeholder 샘플',
        multyFuleName: '파일업로드 placeholder 샘플',
        showFileChoice: true,
        showFileModify: false,
        //
        value: null,
        options: ['Vue.js', 'Rails', 'Sinatra', 'Laravel', 'Phoenix'],
        multiValue: null,
        multiValue2: null,
        optionsMulti: [
          { name: 'Vue.js', language: 'JavaScript' },
          { name: 'Adonis', language: 'JavaScript' },
          { name: 'Rails', language: 'Ruby' },
          { name: 'Sinatra', language: 'Ruby' },
          { name: 'Laravel', language: 'PHP' },
          { name: 'Phoenix', language: 'Elixir' }
        ],
        optionsMulti2: [
          {
            dep1: '교육학',
            dep2: [
              { name: '교육학', category: 'subject01' },
            ]
          },
          {
            dep1: '논술·면접',
            dep2: [
              { name: '면접', category: 'subject02' },
              { name: '논술', category: 'subject02' },
            ]
          },
          {
            dep1: '유아',
            dep2: [
              { name: '유아', category: 'subject03' },
            ]
          },
          {
            dep1: '초등',
            dep2: [
              { name: '초등', category: 'subject04' },
            ]
          },
          {
            dep1: '중등',
            dep2: [
              { name: '국어', category: 'subject05' },
              { name: '영어', category: 'subject05' },
              { name: '수학교육론', category: 'subject05' },
            ]
          }
        ],
      }
    },
    methods: {
      test(value) {
        this.selected = value;
        var i = value
        if( i == 1){
          alert();
        }
      },
      WindowPopupComponent() {
        let routeData = this.$router.resolve({name: 'WindowPopupComponent', query: {data: "someData"}});
        window.open('/mkup/windowPopup/windowPopupComponent', '_blank', `width=1300,height=900`);
      }, // 윈도우팝업 호출
      fileUpload(event) {
        this.fileName = event.target.value;
      }, // 파일 업로드
      uploadMulty(event) {
        this.multyFuleName = event.target.value;
        this.showFileChoice = false;
        this.showFileModify = true;
      }, // 파일 업로드2
    },

  }
</script>

<style lang="css" scoped>
.componentLayout {padding:10px 10px 100px;}
.componentLayout table {width:100%;border:1px solid #eee;border-collapse:collapse;}
.componentLayout table th {border:1px solid #dddddd;padding:0.5rem;text-align:center;font-weight:bold;color:#111;}
.componentLayout table td {border:1px solid #dddddd;padding:0.5rem;}
.componentLayout table td > strong {display:inline-block;width:100%;margin:0 0 5px;}
.componentbox {display:inline-block;padding:.2rem;font-size:12px;margin-bottom:5px;color:#fff;}
.componentgreenbox {display:inline-block;padding:.2rem;font-size:12px;background-color:#0e935d;color:#fff;}
.componentredbox {display:inline-block;padding:.2rem;font-size:12px;background-color:#d1555F;color:#fff;}
.compoColorBox {display:inline-block;margin:0 5px 5px;}
.compoColorBox * {padding:5px;color:#fff;font-size:11px;}
.compoColorBox span {display:inline-block;margin-right:4px;width:130px;}
.compoColorBox span:last-of-type {margin-right:20px;width:100px;}
.compoColorBox .opacity {color:#666;}
</style>
