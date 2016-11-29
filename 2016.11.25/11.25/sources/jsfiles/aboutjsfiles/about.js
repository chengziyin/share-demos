var bannerSrc = ['../../images/upload/banner.jpg','../../images/upload/banner_a.jpg'];

let banner = document.getElementsByClassName('banner')[0];
let dot = document.getElementsByClassName('dots')[0];
let li = dot.getElementsByTagName('ul')[0].getElementsByTagName('li');
let img = banner.getElementsByClassName('banner_div')[0].getElementsByTagName('img');

//banner部分图片轮播效果
for(let i = 0; i < li.length; i ++){
	li[i].addEventListener('click',() => {
		var tt = setInterval(()=>{
			for(let j = 0; j < li.length; j ++){
			img[j].style.left = parseInt(img[j].style.left) - 300 + 'px';
			}
			if(img[0].style.left == '-1200px'){
				clearInterval(tt);
				img[0].style.left = '1200px';
			}
			if(img[li.length -1].style.left == '-2400px'){
				clearInterval(tt);
				img[li.length -1].style.left = '0px';
			}
		},20);
	});
}
