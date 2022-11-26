function toDouble(num) {
  num >= 10 ? num = '' + num : num = '0' + num;
  return num;
}
var main = $$('main'),
  span = $$('main').getElementsByTagName('span')[0];


function timer(year, month, day, hour, minute, seconds, elem) {
  var hour = hour || 0,
    minute = minute || 0,
    seconds = seconds || 0;
  var endTime = new Date();
  endTime.setFullYear(parseInt(year)),
    endTime.setMonth(parseInt(month) - 1),
    endTime.setDate(parseInt(day)),
    endTime.setHours(parseInt(hour)),
    endTime.setMinutes(parseInt(minute)),
    endTime.setSeconds(parseInt(seconds));
  setTime();
  setInterval(function () {
    setTime()
  }, 1000);

  function setTime() {
    var startTime = new Date();
    var lengthTime = parseInt((startTime.getTime() - endTime.getTime()) / 1000);
    var lSeconds = parseInt(lengthTime % 60),
      lMinute = parseInt((lengthTime / 60) % 60),
      lHour = Math.floor((lengthTime / 3600) % 24),
      lDay = Math.floor(lengthTime / (24 * 3600));
    span.innerHTML = lDay + '天' + toDouble(lHour) + '小时' + toDouble(lMinute) + '分钟' + toDouble(lSeconds) + '秒';
  }
}

function $$(id) {
  return document.getElementById(id);
}
timer(2022, 08, 02, 0, 0, 0, span);
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?e0a1048b7b0e93e7ecd0a7f9a1a81083";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();