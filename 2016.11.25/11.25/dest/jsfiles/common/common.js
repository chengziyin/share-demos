let headList = document.getElementsByTagName('header')[0];
let navList = headList.getElementsByTagName('ul')[0].getElementsByTagName('li');

navList[0].addEventListener('mouseenter',() => {
	let aboutArr = ['公司介绍','资质证书','联系我们','人才招聘'];
	//创建div
	let aboutusDiv = document.createElement('div');
	aboutusDiv.setAttribute('class','aboutusDiv clearfix');
	//创建ul
	let aboutusList = document.createElement('ul');
	for(let i = 0; i < aboutArr.length; i ++){
		let aboutLi = document.createElement('li');
		let aboutA = document.createElement('a');
		aboutA.innerHTML = aboutArr[i];
		aboutLi.appendChild(aboutA);
		aboutusList.appendChild(aboutLi);
	}
	aboutusDiv.appendChild(aboutusList);
	navList[0].appendChild(aboutusDiv);

	//创建图片div
	let imgDiv = document.createElement('div');
	imgDiv.setAttribute('class','imgDiv');
	let img = document.createElement('img');
	img.src = '../../images/upload/pic5.jpg';
	let imgA = document.createElement('a');
	imgA.href = '#';
	imgA.innerHTML = '深圳市康索特软件有限公司';
	let imgP = document.createElement('p');
	imgP.innerHTML = '深圳市康索特软件有限公司是一家立足电信行业，以电信软件及相关配套设备开发、生产、销售和服务为主营业务的企业，是国内领先的支付';
	imgDiv.appendChild(img);
	imgDiv.appendChild(imgA);
	imgDiv.appendChild(imgP);
	aboutusDiv.appendChild(imgDiv);

	let imgsDiv = document.getElementsByClassName('aboutusDiv')[0];
	imgsDiv.addEventListener('mouseleave',() => {
		imgsDiv.remove();
	});
});
navList[0].addEventListener('mouseleave',() =>{
	let imgsDiv1 = document.getElementsByClassName('aboutusDiv')[0];
	imgsDiv1.remove();
});

for(let i = 1; i < navList.length -1; i ++){
	navList[i].addEventListener('mouseenter',() => {
		let topList = ['通信行业','教育行业','政企行业','金融行业'];
		let listItems = ['>> 数字化校园','>> 高效校园一卡通','>> 中小学校园一卡通','>> 手机校园一卡通','>> 金融IC卡校园卡一卡通'];
		let oDiv = document.createElement('div');
		oDiv.setAttribute('class','oDiv');

		//弹出div的标题h5
		let h5 = document.createElement('h5');
		h5.innerHTML = '按需求分类';
		oDiv.appendChild(h5);
		for(let j = 0; j < topList.length; j ++){
			var listTop = document.createElement('div');
			listTop.setAttribute('class','listTop');
			var title = document.createElement('p');
			title.innerHTML = topList[j];
			listTop.appendChild(title);

			// 添加里面具体列表到listTop
			for(let k = 0; k < listItems.length; k ++){
				let liItem = document.createElement('a');
				liItem.href = '#';
				liItem.innerHTML = listItems[k];
				listTop.appendChild(liItem);
			}
			oDiv.appendChild(listTop);
		}
		navList[i].appendChild(oDiv);

		let oDivs = document.getElementsByClassName('oDiv')[0];
		oDivs.addEventListener('mouseleave',() => {
			oDivs.remove();
		});
	});

	navList[i].addEventListener('mouseleave',() => {
		let oDivs = document.getElementsByClassName('oDiv')[0];
		oDivs.remove();
	})	
}