/* start Device 대응 사전 정의 ***********************************/
var isMobile = function () {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
var isAndroid = function () {
	return /iPhone|iPad|iPod/i.test(navigator.userAgent);
	return /Android/i.test(navigator.userAgent);
};
var userAgent = window.navigator.userAgent;
var isChrome = userAgent.indexOf('Chrome');
var isChromeMobile = userAgent.indexOf('CriOS');
var isSamsungBrowser = userAgent.indexOf('SamsungBrowser');
var isWindows = userAgent.indexOf('Windows NT');
var isEdge = userAgent.indexOf('Edge');
var isIE = userAgent.indexOf('Trident');
var g_bMainPageChk = false;
function comDeviceActive(){
	if (isMobile()){
		$('.eventWrap, .realHitWrap').addClass('mDevice');
		if (isAndroid()){
			$('.eventWrap, .realHitWrap').addClass('is-Android');
		} else {
			$('.eventWrap, .realHitWrap').addClass('is-iOS');
		}
	} else if (!isMobile()){
		$('.eventWrap, .realHitWrap').removeClass('mDevice');
	}
	if (isEdge >= 0){
		$('.eventWrap, .realHitWrap').addClass('is-Edge');
	}
}

$(document).ready(function(){
  comDeviceActive();
  $(".tabNav li button").click(function () {
    var tN = $(this).closest(".tabNav");
    var tL = $(tN).parent(".tabBack").siblings(".tabLayout");
    var activeTab = $(this).attr("data-name");
    
    $(tN).find("li").removeClass("on");
    $(this).parent("li").addClass("on");
    $(tL).children(".tabData").hide();
    $(tL).children('.tData' + activeTab).show();
  });
});