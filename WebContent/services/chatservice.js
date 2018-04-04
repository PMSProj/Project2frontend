/**
 * 
 */
 app.filter('reverse' ,function(){
	 return function(items){
		 return items.slice().reverse();
	 };
 });
 
 app.directive('ngFocus',function(){
	 return function(scope,element,attrs){
		 element.bind('click',function(){
			 $('.'+attrs.ngFocus)[0].focus();
		 });
	 };
 });
app.factory('ChatService',function($rootScope){
	var socket=new SockJS("/MiddleWare/chatmodule")
	var stompClient=Stomp.over(socket);
//      consolel.log(stompClient)
	stompClient.connect('','',function(frame){
		alert('in connect function in service')
		$rootScope.$broadcast('sockConnected',frame)
	})
	return{
		stompClient:stompClient
	}
})