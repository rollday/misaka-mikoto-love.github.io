var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?60297d1229e157e97320df253bf06e97";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s)
})();
$(function () {
  $(".sidebar").on("click", "li", function () {
    var sId = $(this).data("id");
    window.location.hash = sId;
    loadInner(sId)
  });

  function loadInner(sId) {
    var sId = window.location.hash;
    var pathn, i;
    switch (sId) {
      case "#center":
        pathn = "./pages/index.html";
        i = 0;
        break;
      case "#about-railgun":
        pathn = "./pages/about-railgun.html";
        i = 1;
        break;
      case "#artalk":
        pathn = "./pages/artalk.html";
        i = 2;
        break;
      case "#links":
        pathn = "./pages/links.html";
        i = 3;
        break;
      case "#about":
        pathn = "./pages/about.html";
        i = 4;
        break;
      case "#blog":
        pathn = "./pages/logs.html";
        i = 5;
        break;
      case "#need-help":
        pathn = "./pages/need-help.html";
        i = 6;
        break;

      default:
        pathn = "./pages/index.html";
        i = 0;
        break
    }
    $("#content").load(pathn);
    $(".userMenu li").eq(i).addClass("current").siblings().removeClass("current")
  }
  var sId = window.location.hash;
  loadInner(sId)
});
var nwscript = document.createElement('script');
newscript.setAttribute('type', 'text/javascript');
newscript.setAttribute('src', 'https://image-1309525160.cos.ap-beijing.myqcloud.com/live2d%2Fstatic%2Fpio.js');
var hed = document.getElementsByTagName('head')[0];
hed.appendChild(nwscript);

var newscript = document.createElement('script');
newscript.setAttribute('type', 'text/javascript');
newscript.setAttribute('src', 'https://image-1309525160.cos.ap-beijing.myqcloud.com/live2d%2Fstatic%2Fl2d.js');
var head = document.getElementsByTagName('head')[0];
head.appendChild(newscript);

