function getclass(classname,ss){
	ss= ss===undefined?document:ss;
		if(document.getElementsByClassName){
			return ss.getElementsByClassName(classname);
		}else{
			var a=ss.getElementsByTagName('*');
			var b=[];
			for(var i=0;i<a.length;i++){
				var flag=checkClass(a[i].className,classname);
				if(flag){
					b.push(a[i]);
				}
			}
			return b;
		}
	}
// 低版本浏览器 classname调用↑

// checkClass(str,values)
// 检测str里面包含values
// str:类名 values:指定:classname
// 包含 true 否则 false 
// str转换为数组
// 数组里面是否存在values
function checkClass(str,values){
	var arr=str.split(' ');
	for(var i=0;i<arr.length;i++){
		if(arr[i]==values){
			return true;
		}
	}
	return false;
}

// 选择id class 标签↓
function $(select,range){
	if(typeof(select)=='string'){
		range = range === undefined ? document : range;
		var d=select.charAt(0);
		if(d=='.'){
			return getclass(select.slice(1),range);
		}else if(d=='#'){
			return range.getElementById(select.slice(1));
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){
        	return range.getElementsByTagName(select);
		}else if(/^<[a-zA-Z][a-zA-Z1-6]{0,8}>$/.test(select)){
        	return document.createElement(select.slice(1,-1));
		}
	}else if(typeof(select)=='function'){
		// window.onload=function(){
		// 	select();
		// }
		// *********************************  可以写两个$(function)
		addEvent(window,'load',select);
	}
	
}
// 文本获取设置
	function setText(obj,value){
		if(value){
			// 获取
			if(obj.innerText){
				obj.innerText=value;
			}else{
				obj.textContent=value;
			}
		}else{
			// 设置
			if(obj.innerText){
				return obj.innerText;
			}else{
				return obj.textContent;
			}
		}
	}
// 样式获取
	function getStyle(obj,attr){
		if(window.getComputedStyle){
			return getComputedStyle(obj,null)[attr];
		}else{
			return obj.currentStyle[attr];
		}
	}
// getChilds(obj,type)
// 获取obj的元素节点集合
// obj:指定的元素
// type:获取类型
//  true:有意义的文本和元素节点
//  false:元素节点
// 1.获取所有子节点
// 2.筛选节点类型
function getChilds(obj,type){
	type=type||false;
	var childs=obj.childNodes;
	var arr=[];
	if(type){
		for(var i=0;i<childs.length;i++){
		if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.trim().length!=0)){
			arr.push(childs[i]);
			}
		}
		return arr;
	}else{
		for(var i=0;i<childs.length;i++){
		if(childs[i].nodeType==1){
			arr.push(childs[i]);
			}
		}
		return arr;
	}
	
}
// 获取第一个节点
function firstchild(obj,type){
	var a=getChilds(obj,type)[0];
	return a;
}
// 获取最后一个节点
function lastchild(obj,type){
	var a=getChilds(obj,type);
	var b=a[a.length-1];
	return b;
}
// 获取任意一个元素节点
function randomchild(obj,num){
	var a=getChilds(obj)[num];
	return a;
}
// 上一个兄弟元素
function getNext(obj){
	var next=obj.nextSibling;
	if(next==null){
		return false;
	}
	while(next.nodeType!=1){
		next=next.nextSibling;
		if(next==null){
			return false;
		}
	}
	return next;
}
// 下个兄弟元素
function getPrevious(obj){
	var previous=obj.previousSibling;
	if(previous==null){
		return false;
	}
	while(previous.nodeType!=1){
		previous=previous.previousSibling;
		if(previous==null){
			return false;
		}
	}
	return previous;
}
function insertAfter(nnode,pnode){
	var sibling=gettNext(pnode);
	if(sibling){
		var parent=pnode.parentNode;
		parent.insertBefore(nnode,sibling);
	}else{
		var parent=pnode.parentNode;
		parent.appendChild(nnode);
	}
}
function appendAfter(parent,node){
	parent.appendChild(node);
}
function appendBefore(parent,node){
	var first=firstchild(parent);
	parent.insertBefore(node,first);
}
// 同一个事件绑定多个事件处理程序  添加
function addEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.addEventListener(type,fn,false);
	}else{
		obj.attachEvent('on'+type,fn);
	}
}
// 同一个事件绑定多个事件处理程序  删除
function removerEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.removerEventListener(type,fn,false);
	}else{
		obj.detachEvent('on'+type,fn);
	}
}
// 获取页面中任意一个元素相对于浏览器的坐标
function offset(obj){
	var result={left:0,top:0};
	var parent=obj.parentNode;
	var arr=[];
	arr.push(obj);
	while(parent.nodeName!=="BODY"){
		var flag=getStyle(parent,"position")=="relative"||getStyle(parent,"position")=="absolute";
		if(flag){
			arr.push(parent);
		}
		parent=parent.parentNode;
	}
	for(var i=0;i<arr.length;i++){
		var lefts=arr[i].offsetLeft;
		var tops=arr[i].offsetTop;
		var borderleft=getStyle(arr[i],"border-left-width")?parseInt(getStyle(arr[i],"borderleft-left-width")):0;
		var bordertop=getStyle(arr[i],"border-top-width")?parseInt(getStyle(arr[i],"border-top-width")):0;
		if(i==0){
			borderleft=0;
			bordertop=0;
		}
		result.left+=(lefts+borderleft);
		result.top+=(tops+bordertop);
	}
	return result;
}
// 鼠标滚轮
function mouseWheel(obj,upFn,downFn){
	if(document.attachEvent){
		obj.attachEvent('onmousewheel',fn)
	}else if(document.addEventListener){
		obj.addEventListener('mousewheel',fn,false);
		obj.addEventListener('DOMMouseScroll',fn,false);
	}
	function fn(e){
		e=e||window.event;
		if(e.wheelDelta==-120||e.detail==3){
			upFn();
		}else if(e.wheelDelta==120||e.detail==-3){
			downFn();
		}
	}
}