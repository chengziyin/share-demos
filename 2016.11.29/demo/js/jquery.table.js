/*
 * 表格行样式
 * author:tiger
 * v1.1.0
 */

;(function($){
	$.fn.tableUI=function(options)
	{
		 var defaults={
		 	evenRowClass:"evenrow",
		 	oddRowClass:"oddrow",
		 	activeRowClass:"activerow"
		 }
		 var option=$.extend(defaults,options);
		 this.each(
		 	function(){
		 		
		 	$(this).find("tr:even").addClass(option.evenRowClass);//奇数行
		 	$(this).find("tr:odd").addClass(option.oddRowClass);//偶数行
		 	$(this).find("tr").hover(
		 		function(){
		 			$(this).addClass(option.activeRowClass);
		 		},
		 		function(){
		 			$(this).removeClass(option.activeRowClass);
		 		}
		 	);
		 	
		 });
		 
		 
	}
})(jQuery)
