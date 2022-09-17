// JavaScript Document
//实现图片滚动
	window.onload = function()
	{
		var oDiv = document.getElementById('div1');
		var oUl = document.getElementsByTagName('ul')[0];
		var Li = oUl.getElementsByTagName('li'); //获取ul下的所有li
		oUl.innerHTML = oUl.innerHTML + oUl.innerHTML; //li下的内容进行想加
		oUl.style.width = Li[0].offsetWidth * Li.length + 'px'; //ul的宽度等于每个li的宽度乘以所有li的长度
		var speed = 2
		//主方法
		function move()
		{
			//如果左边横向滚动了长度一半之后,回到初始位置
			if (oUl.offsetLeft < -oUl.offsetWidth / speed)
			{
				oUl.style.left = '0'
			}
			//如果右边横向滚动的距离大于0 就让他的位置回到一半
			if (oUl.offsetLeft > 0)
			{
				oUl.style.left = -oUl.offsetWidth / -2 + 'px';
			}
			//oUl.style.left = oUl.offsetLeft-2+'px';//进行左横向滚动
			oUl.style.left = oUl.offsetLeft - 2 + 'px'; //进行右横向滚动
		}
		//调用方法
		var timer = setInterval(move, 30)
		//鼠标指向的时候 暂停
		oDiv.onmouseover = function()
		{
			clearInterval(timer);
		}
		//鼠标离开之后 继续滚动
		oDiv.onmouseout = function()
		{
			timer = setInterval(move, 30)
		}
	}
//结束