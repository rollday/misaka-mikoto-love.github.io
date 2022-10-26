// JavaScript Document
$(function() {
    $(".userWrap").on("click", "li", function() {
      var sId = $(this).data("id"); //获取data-id的值
      window.location.hash = sId; //设置锚点
      loadInner(sId);
    });

    function loadInner(sId) {
      var sId = window.location.hash;
      var pathn, i;
      switch (sId) {
        case "#center":
          pathn = "./pages/single-page/s-index.html";
          i = 0;
          break;
        case "#about-railgun":
          pathn = "./pages/single-page/about-railgun.html";
          i = 1;
          break;
        case "#links":
          pathn = "./pages/single-page/links.html";
          i = 2;
          break;
        case "#about":
          pathn = "./pages/single-page/about.html";
          i = 3;
          break;
		case "#need-help":
          pathn = "./pages/single-page/need-help.html";
          i = 4;
          break;
		case "#artalk":
          pathn = "./pages/single-page/artalk.html";
          i = 5;
          break;
        default:
          pathn = "./pages/single-page/s-index.html";
          i = 0;
          break;
      }
      $("#content").load(pathn); //加载相对应的内容
      $(".userMenu li").eq(i).addClass("current").siblings().removeClass("current"); //当前列表高亮
    }
    var sId = window.location.hash;
    loadInner(sId);
  });