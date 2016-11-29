let head = document.getElementsByTagName('header')[0];
let lis = head.getElementsByTagName('ul')[0].getElementsByTagName('li');

//oUl中li的内容
let liList = ['找解决方案','找产品','业务合作','加入我们','售后服务'];

lis[0].addEventListener('mouseenter',() => {
	let oUl = document.createElement('ul');
	oUl.setAttribute('class','oUl');
	for(let i = 0; i < liList.length; i ++){
		var liItem = document.createElement('li');
		let a = document.createElement('a');
		a.innerHTML = liList[i];
		a.href = '#';
		liItem.appendChild(a);
		oUl.appendChild(liItem);
	}
	lis[0].appendChild(oUl);

	oUl.addEventListener('mouseleave',() => {
		oUl.remove();
	});
});

lis[0].addEventListener('mouseleave',() => {
	let oUl = document.getElementsByClassName('oUl')[0];
	oUl.remove();
})

