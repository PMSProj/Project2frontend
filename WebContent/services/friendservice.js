/**
 * 
 */
app.factory('FriendService',function($http){
	var friendService={}
	friendService.getAllSuggestedUsers=function(){
		return $http.get("http://localhost:8080/MiddleWare/suggestedusers")
	}
	
	friendService.addFriend=function(toId){
		return $http.post("http://localhost:8080/MiddleWare/addfriend",toId)
	}
	
	friendService.getPendingRequests=function(){
		return $http.get("http://localhost:8080/MiddleWare/pendingrequests")
	}
	
	friendService.acceptRequest=function(request){
		return $http.put("http://localhost:8080/MiddleWare/acceptrequest",request)
	}
	
	friendService.deleteRequest=function(request){
		return $http.put("http://localhost:8080/MiddleWare/deleterequest",request)
	}
	
	return friendService;
})