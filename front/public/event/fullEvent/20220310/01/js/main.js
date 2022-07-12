$(function(){
	$('.btn_del').each(function(){
			
		$(this).on('click', function(){
			$('#orderArea').css('display','none');
		});
	});

	var oParams = getUrlParams();
  
	if (oParams.tab != undefined) {
	  if ($("#" + oParams.tab).length > 0) {
		$("ul.menutab li").removeClass("active");
		$("ul.menutab li > a[href*=" + oParams.tab + "]").parent().addClass("active");
		$("div.menucnt").hide();
		$("#" + oParams.tab).show();
	  }
	}

	//function cartFolding(){
		/* 장바구니 접기 */
		$(".btn_folder").on("click", function(){
		  $(this).toggleClass("close");
		  $("#orderArea").toggleClass("close");
		});
	//}

	  //function dwrk_viewAnim (target){

	//}
	//dwrk_viewAnim('.dwrk_viewAnim')
	$(window).on("scroll.counting", function () {
		//dwrk_viewAnim('.dwrk_viewAnim')
		$(".count").each(function(){
			var targetTop = $(this).offset().top;
			if ($(window).scrollTop() >= targetTop - ($(window).height()*2/3)){
				$({ val : 0 }).animate({ val : 10304 }, {
					duration: 3000,
					step: function() {
					  var num = numberWithCommas(Math.floor(this.val));
					  $(".count").text(num);
					},
					complete: function() {
					  var num = numberWithCommas(Math.floor(this.val));
					  $(".count").text(num);
					}
				  });
				function numberWithCommas(x) {
					return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
				}
				$(window).off("scroll.counting");
			} else {
				//$(this).removeClass('on')					
			}
		})
	})
  


	var gnb = $('.menutab'),
		spw = $('.ssampackWrap'),
		fq = $('#float_quick'),
		gnbPo = gnb.offset().top,
		spwPo = spw.offset().top,
		fqPo = fq.offset().top,
		gnbH = $('.menutab').outerHeight(),
		gnbMenu = $('.menutab li'),
		gnbMenuLeng = gnbMenu.length;

	//$(".float_quickconsulting").css('top',spwPo);
    $(window).scroll(function(e){
        var dScroll=$(window).scrollTop();
  
        if(dScroll>=gnbPo){
          $("#menutab").removeClass('menutab');
          $("#menutab").addClass('menutab_fix');
        } else {
          $("#menutab").removeClass('menutab_fix');
          $("#menutab").addClass('menutab');
        }
        
        if(dScroll>=fqPo){
          $("#float_quick").removeClass('float_quickconsulting');
          $("#float_quick").addClass('float_quickconsulting_fix');
        } else {
          $("#float_quick").removeClass('float_quickconsulting_fix');
          $("#float_quick").addClass('float_quickconsulting');
        }
    });

	var ElderCheck_wrap = new Swiper('.ElderCheck_wrap .swiper-container', {
		effect: "fade",
		fadeEffect: { crossFade: true },
		loop: true,
		autoplay: {
		  delay: 3000,
		  disableOnInteraction: false,
		},
		observer: true,
		observeParents: true,
	});

	var menu = ['유아', '교육학', '국어', '수학', '음악', '미술' , '체육', '중국어 / 일본어', '한문 / 가정 / 미용', '전문상담 / 보건', '역사 / 지리', '화학 / 생물', '특수', '한국사']
	var rollinTeacher = new Swiper ('.rollinTeacher .swiper-container', {
		effect: "fade",
		fadeEffect: { crossFade: true },
		loop: true,
		autoplay: {
		  delay: 2500,
		  disableOnInteraction: false,
		},
		// If we need pagination
		pagination: {
		  el: '.rollinTeacher .swiper-pagination',
		  clickable: true,
			renderBullet: function (index, className) {
			  return '<span class="' + className + '">' + (menu[index]) + '</span>';
			},
		},
		// Navigation arrows
		navigation: {
		  nextEl: '.rollinTeacher .swiper-button-next',
		  prevEl: '.rollinTeacher .swiper-button-prev',
		},
		observer: true,
		observeParents: true,
	});

	var PassSubjectWrap = new Swiper('.PassSubjectWrap .swiper-container', {
		loop: true,
		effect: "fade",
		fadeEffect: { crossFade: true },
		autoplay: {
		  delay: 2500,
		  disableOnInteraction: false,
		},
		pagination: {
			el: ".PassSubjectWrap .swiper-pagination",
			type: "fraction",
		  },
		  navigation: {
			nextEl: ".PassSubjectWrap .swiper-button-next",
			prevEl: ".PassSubjectWrap .swiper-button-prev",
		  },
		observer: true,
		observeParents: true,
	});

	var ElderCheck_wrap1 = new Swiper('.ElderCheck_wrap1 .swiper-container', {
		loop: true,
		effect: "fade",
		fadeEffect: { crossFade: true },
		autoplay: {
		  delay: 3000,
		  disableOnInteraction: false,
		},
		observer: true,
		observeParents: true,
	});

	$(".product_tabs li a").click(function () {
		$(this).parent().siblings("li").removeClass("on");
		$(this).parent().addClass("on"); $(this).parent().parent().parent().parent().find(".product_tab_content").hide();
	});

	var gubun_l = "S";
	var gubun_r = "S";
	
	function left_fn_gubun(gubun){
	  gubun_l = gubun;
	  var div_cd 		= $("#left_div_cd").val();
	  left_fn_prof(div_cd);
	}
	
	function rigth_fn_gubun(gubun){
	  gubun_r = gubun;
	  
	  var div_cd 		= $("#right_div_cd").val();
	  rigth_fn_prof(div_cd);
	}
	
	//선생님
	function left_fn_prof(div_cd){
	  $.ajax({
		  url:'./ajax_prof_seq.asp', 
		  type:'post', 
		  data:{'div_cd':div_cd,'gubun':gubun_l}, 
		  success: function(data) {
			$("#left_prof_seq").html(data);
		  },
		  error: function(err) {
			  //서버로부터 응답이 정상적으로 처리되지 못햇을 때 실행
		  }
	  });
	}
	
	function rigth_fn_prof(div_cd){
	  $.ajax({
		  url:'./ajax_prof_seq.asp', 
		  type:'post', 
		  data:{'div_cd':div_cd,'gubun':gubun_r}, 
		  success: function(data) {
			$("#right_prof_seq").html(data);
		  },
		  error: function(err) {
			  //서버로부터 응답이 정상적으로 처리되지 못햇을 때 실행
		  }
	  });
	}
	
	function left_click(){
	  var div_cd 		= $("#left_div_cd").val();
	  var prof_seq 	= $("#left_prof_seq").val();
	  if(prof_seq ==""){
		alert("선생님을 선택해주세요.");
		return;
	  }
	  
	  $.ajax({
		  url:'./ajax_cart_add.asp', 
		  type:'post', 
		  data:{'div_cd':div_cd,'gubun':gubun_l,'prof_seq':prof_seq,'post':'L'}, 
		  success: function(data) {
			showCartTemp('');
		  },
		  error: function(err) {
			  //서버로부터 응답이 정상적으로 처리되지 못햇을 때 실행
		  }
	  });
	}
	
	function right_click(){
	  var div_cd 		= $("#right_div_cd").val();
	  var prof_seq 	= $("#right_prof_seq").val();
	  
	  if(prof_seq ==""){
		alert("선생님을 선택해주세요.");
		return;
	  }
	  $.ajax({
		  url:'./ajax_cart_add.asp', 
		  type:'post', 
		  data:{'div_cd':div_cd,'gubun':gubun_r,'prof_seq':prof_seq,'post':'R'}, 
		  success: function(data) {
			showCartTemp('');
		  },
		  error: function(err) {
			  //서버로부터 응답이 정상적으로 처리되지 못햇을 때 실행
		  }
	  });
	}
	
	left_fn_prof('');
	rigth_fn_prof('');

	var edu; //교육한 내용을 담기 위한 변수
      
	function cartLoginCheck(obj) {
	  
	  obj.checked = false; alert("로그인 후에 이용해주세요."); location.href='/member/login/login_form.asp?bPage='+escape(document.URL);
	  
	}
	
	
	function showCartTemp(obj) {
	  var chk = "true";
	  var val = ""; //"2|2644||O|";
	  var gbn = "O"; //동영상

	  //$.post( "/campus_new/lecture/ajax_cart_temp.asp", { "chk": chk, "items": val, "gubun": gbn }, function(data,text){ if (text == "success") { try { if (data == "") { $("#orderArea").hide(); } else { $("#orderArea").show(); $(".wrap_order").html(data); } } catch(e) { } } else { alert("임시 장바구니 오류~!!!"); } });
	  $.post( "./ajax_onoff_cart_temp.asp", { "chk": chk, "items": val, "gubun": gbn }, function(data,text){ if (text == "success") { try { if (data == "") { $("#orderArea").hide(); } else { $("#orderArea").show(); $(".wrap_order").html(data); cartFolding(); } } catch(e) { } } else { alert("임시 장바구니 오류~!!!"); } });

	  if ($("#orderArea").hasClass("close")) { $("#orderArea").toggleClass("close"); }
	  setTimeout(
		function() {
		  /* 장바구니 스크롤 */
		  $('.scrollbar-inner').scrollbar();
		  //$(".group_plan").scrollLeft($(".item_plan.active").position().left+250); /* 스크롤 이동 */
		},
		1000
	  );
	}

	function removeCartTemp(val) {
	  if(confirm("전체 삭제 하시겠습니까?")){
		$.post( "./ajax_cart_remove.asp", { "items": val }, function(data,text){ if (text == "success") { try { $("#orderArea").hide(); } catch(e) { } } else { alert("임시 장바구니 삭제 오류~!!!"); } });
	  }
	}

	function gotoBasket() {
	  $.post( "/campus_new/lecture/ajax_cart_init.asp", { "chk": "O" }, function(data,text){ if (text == "success") { try { } catch(e) { } } else { alert("장바구니 초기화 오류~!!!"); } });

	  var f = document.getElementById("frmCart");
	  f.submit();
	}

	function cartFloating(){
	  var scr = $(window).scrollTop();
	  var scr2 = $(window).scrollTop();
	  var winHeight = $(window).height();
	  var orderBox = $(".wrap_order");
	  //var footerTop = $(".footer2020").offset().top;
	  var orderBoxHeight = orderBox.height();
	  var footerTop;
	  var tabPosition;
	  var footerPosition;
	  //if( $(".footer2020").length > 0) footerTop = $(".footer2020").offset().top;
	  //if( $(".applyWrap").length > 0) tabPosition = $(".applyWrap").offset().top;
	  //if( $(".footer2020").length > 0) footerPosition = footerTop-1000;

	  if( scr > tabPosition ){
		if( scr > footerPosition ){
		  orderBox.css({
			"position":"relative",
			"bottom": "auto"
		  });
		}else{
		  orderBox.css({
			"position":"fixed",
			"z-index":"100",
			"bottom": 0
		  });
		}
	  }else{
		  orderBox.css({
			"position":"relative",
			"bottom": "auto"
		  });
	  }
	}

	function midMenuLineBreak(){
	  var midMenu = $(".menu_middle li").length;
	  var lineBreak = parseInt(midMenu/10);
	  if( lineBreak > 0 ){
		for( var i=1; i<midMenu; i++ ){
		  if( i % 10 == 0 ){
			$(".menu_middle li").eq( i-1 ).after("</ul><ul class='menu_middle'>");
		  }
		}
	  }
	}

	function menuClickActive(){
	  /* 교수명 클릭하면 active */
	  $(".menu_depth02 .link").on("click", function(){
		$(".menu_middle li, .menu_depth02 .link").removeClass("active");
		$(this).addClass("active");
	  });

	  /* 중등메뉴 과목 클릭하면 active */
	  $(".menu_middle .subject").on("click", function(){
		$(".menu_middle li, .menu_depth02 .link").removeClass("active");
		$(this).parents("li").addClass("active");
	  });
	}



	$(function(){
	  edu = $(".subj01").html();
	  $("#lectureMenuBtn").on("click", function(){ $(this).toggleClass("close"); $(".menu_depth02").slideToggle(); }); /* 메뉴 열기/닫기 */

	  /* 메뉴 클릭 */
	  $(".menu_depth01 li").on("click", function(){
		var idx = $(this).index();
		var menuType = $(this).data("name");
		var menuGroup = $(".menu_depth02 .group");
		var menu2Depth = $(".menu_depth02");
		var lectureMenuBtn = $("#lectureMenuBtn");

		//1depth active
		$(this).addClass("active");
		$(this).siblings().removeClass("active");

		//2depth
		menuGroup.css("display","none");
		if (menuType == "all") {
		  menu2Depth.addClass("all"); menuGroup.fadeIn(); $("#lectureMenuBtn").show();

		  $(".subj01").hide();
		  $("#edu_top").html(edu);
		  $("#edu_top").show();
		} else {
		  menu2Depth.removeClass("all"); menu2Depth.find("."+menuType).fadeIn(); $("#lectureMenuBtn").hide();

		  if (menuType != "child") { $(".subj01").show(); }
		  $("#edu_top").html("");
		  $("#edu_top").hide();
		}

		//lectureMenu
		lectureMenuBtn.removeClass("close");
		menu2Depth.slideDown();
	  });

	  /* 자세히보기 클릭 */
	  $(".btn_read").on("click", function(){
		$(this).toggleClass("close");
		if( $(this).hasClass("close") ){
		  $(this).text("닫기");
		}else{
		  $(this).text("자세히보기");
		}
		$(this).parents("li").toggleClass("open");
		if ($(this).parents("li").find(".box.contents").html() != "") { $(this).parents(".box.button").siblings(".box.contents").slideToggle(200); }
		$(this).parents("li").find(".sub_list").slideToggle(200);
	  });

	  $(".close_benefits").on("click", function(){ $(this).parents(".pop_benefits").fadeOut(200); }); /* 수강혜택 닫기 */
	  $(".open_benefits").on("click", function(){ $(this).parents(".box.button").find(".pop_benefits").fadeIn(200); }); /* 수강혜택 열기 */
	  $(".tab_lecture li").on("click", function(){ $(this).addClass("active").siblings().removeClass("active"); }); /* 탭 */

	  /* 아이콘안내팝업 */
	  $(".btn_guide").on("click", function(){
		$("#popIconGuide").fadeIn(200);
	  });

	  $("#popIconGuideClose").on("click", function(){
		$("#popIconGuide").fadeOut(200);
	  });

	  /* 탑버튼 */
	  $(".wrap_lecture .top_btn").on("click", function(){
		$( 'html, body' ).animate( { scrollTop : 0 }, 600 );
	  });

	  //showSubject('');
		$('.menu_depth01 li').eq(0).trigger('click');

	  showCartTemp('');

	  //cartFloating(); /* 장바구니 floating */
	  $(window).scroll(function(e){ cartFloating(); }); /* 스크롤 fixed */
	});

	function fn_01(){
		gotoBasket();
	}

	/** 링크에 대한 클릭 이벤트 처리 */
	$(".collapsible .terms-title").click(function() {
		$(this).toggleClass("selected");
		//클릭된 나 자신을 제외한 나머리 링크들은 slected 클래스를 무조건 제거
		$(".collapsible .terms-title").not(this).removeClass("selected");

		// 펼칠 내용 영역 선택
		var target = $(this).parents(".collapsible").find(".content");

		// 나머지 내용 영역을 선택
		var other = $(".collapsible .terms-title").not(this).parents(".collapsible").find(".content");

		// 애니메이션으로 열고 닫기 처리
		target.slideToggle(300);
		other.slideUp(300);

		// 링크 페이지 이동 중지
		return false;
	});

	$("#menutab > li").on("click", function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".menucnt").css("display","none");
        $(".menucnt").eq( $(this).index() ).fadeIn();
        
        ElderCheck_wrap.update();
        ElderCheck_wrap1.update();
        PassSubjectWrap.update();
        rollinTeacher.update();
  
    });
  
	$(".float_quickconsulting").click(function() {
	var offset = $('.product-list-wrap').offset();
		$('html, body').animate({scrollTop : offset.top - 128}, 500);
	});

	/* 탭클릭시 상단이동 */
	$("#menutab > li").click(function() {
	var offset = $('.cnt_1').offset();
		$('html, body').animate({scrollTop : offset.top + 745 - 96}, 500);
	});

	var $title1 = $('.title1'),
	$title2 = $('.title2');
	setTimeout(function(){$title1.addClass('on');}, 900);
	setTimeout(function(){$title2.addClass('on');}, 1800);
	setTimeout(function(){
		$("html, body").stop(false, true).animate({scrollTop : $("#header2020").height()}, 400, function(){
		});
	}, 500);
	return false;

	function getUrlParams() {
		var params = {};
		window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) {
		  params[key] = value;
		});
		return params;
	}

	var oParams = getUrlParams();
  
	if (oParams.tab != undefined) {
	  if ($("#" + oParams.tab).length > 0) {
		$("ul.menutab li").removeClass("active");
		$("ul.menutab li > a[href*=" + oParams.tab + "]").parent().addClass("active");
		$("div.menucnt").hide();
		$("#" + oParams.tab).show();
	  }
	}


  
      function evt_submit(){
      
        alert("로그인 후에 이용해주세요."); location.href='/member/login/login_form.asp?bPage='+escape(document.URL);
      
      }
      function evt_popup(){
      
        alert("로그인 후에 이용해주세요."); location.href='/member/login/login_form.asp?bPage='+escape(document.URL);
      
      }





});