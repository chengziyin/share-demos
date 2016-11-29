
let checkall = document.getElementById('checkall');
let checkbox = document.getElementsByName('cartCheckBox');
let deleteAll = document.getElementById('deleteAll');
let trs = document.getElementsByClassName('product');
let allTotalPrice = document.getElementById('total');
let allTotalJifen = document.getElementById('integral');

/*
* 实现全选功能
 */
checkall.addEventListener('click',() => {
	let flag = (checkall.checked == true ? 1 : 0);
		for(let i = 0; i < checkbox.length; i ++){
			if(flag == 1){
			checkbox[i].checked = true;
			}else{
				checkbox[i].checked = false;
			}
		}
});

/*
* 点击选择框按钮，实现全选按钮的选中与非选中
 */
for(let i = 0; i < checkbox.length; i ++){
	checkbox[i].addEventListener('click',() => {
		checkedFun();
	});
}

function checkedFun(){
	for(let i = 0; i < checkbox.length; i ++){
		if(!checkbox[i].checked){
			checkall.checked = false;
			return;
		}
		checkall.checked = true;
	}
}


/*
* 删除全部按钮方法
 */
deleteAll.onclick = function(){
	for(let i = checkbox.length - 1; i >= 0;i --){
		// alert(checkbox.length);
		if(checkbox[i].checked == true){
			var cur = trs[i].previousSibling;
			while(cur.nodeType == 3){
				cur = cur.previousSibling;
			}
		trs[i].remove();
		cur.remove();
		}
	}
	addTotal();
};

/**
 * 实现商品数量的选择及小计、获得积分的数字变化
 */

let inputNum = document.getElementsByClassName('num_input');
for(let i in inputNum){
	let jifen = inputNum[i].parentElement.parentElement.children[2];
	let danjia = inputNum[i].parentElement.parentElement.children[3].innerHTML;
	let total = inputNum[i].parentElement.parentElement.children[5];
	let deleteBtn = inputNum[i].parentElement.parentElement.children[6];

	//初始化页面时计算总价、总的积分的值
	total.innerHTML = (inputNum[i].value * danjia).toFixed(2);
	addTotal();
	//点击减，数量减1
	inputNum[i].parentNode.firstChild.onclick = function(){
		this.parentNode.children[1].value = parseInt(this.parentNode.children[1].value) - 1;
		if(this.parentNode.children[1].value <= 0){
			this.parentNode.children[1].value = 0;
		}
		//实现总价的计算
		total.innerHTML = (this.parentNode.children[1].value * danjia).toFixed(2);

		//实现积分的减计数
		jifen.innerHTML = this.parentNode.children[1].value * 5;
		addTotal();
		// alert(total.innerHTML);
		}
	//点击加，数量加1
	inputNum[i].parentNode.lastChild.onclick = function(){
		this.parentNode.children[1].value = parseInt(this.parentNode.children[1].value) + 1;
		//实现总价的计算
		total.innerHTML = (this.parentNode.children[1].value * danjia).toFixed(2);

		//实现积分的加计数
		jifen.innerHTML = this.parentNode.children[1].value * 5;
		addTotal();
		// alert(total.innerHTML);
	}

	//删除按钮
	deleteBtn.onclick = function(){
		var current = this.parentNode.previousSibling;
		while(current.nodeType == 3){
			current = current.previousSibling;
		}
		current.remove();
		this.parentNode.remove();
		addTotal();
	}
}

/*
* 计算总价方法
 */
function addTotal(){
	allTotalPrice.innerHTML = 0.00;
	allTotalJifen.innerHTML = 0;
	let t = document.getElementsByClassName('w80');
	for(let i = 0; i < t.length; i ++){
		let litterJifen = trs[i].children[2];
	allTotalPrice.innerHTML =  (parseFloat(t[i].innerHTML) + parseFloat(allTotalPrice.innerHTML)).toFixed(2);
	allTotalJifen.innerHTML = parseInt(litterJifen.innerHTML) + parseInt(allTotalJifen.innerHTML);
	}
}

