/**
 * UserService-to make server side calls
 * 
 */
app.factory('UserService', function($http) {
	var userService = {}
	userService.registerUser = function(user) {
	//alert('entering userservice registerUser function')
	//format of user-JSON
	console.log('in userservice ' + user.contactnumber)
	console.log(user)
	return $http.post("http://localhost:8080/MiddleWare/registerUser", user)
	}
	
	
	userService.login=function(user){
	console.log('userservice ->login')	
	console.log(user)
	return $http.post("http://localhost:8080/MiddleWare/login", user)
	}
	userService.logout=function()
	{
		return $http.put("http://localhost:8080/MiddleWare/logout")
	}
	return userService;
})
