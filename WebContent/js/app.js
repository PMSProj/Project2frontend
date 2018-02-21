/**
 * Angular JS module  and config SPA
 * 
 */
var app=angular.module('app',['ngRoute','ngCookies'])
app.config(function($routeProvider){
$routeProvider
.when('/register',{
	templateUrl:'views/registrationform.html',
	controller:'UserController'
		
})
.when('/login',{
	templateUrl:'views/login.html',
	controller:'UserController'
})
.otherwise({
	templateUrl:'views/home.html'
})
})
app.run(function($location,$rootScope,$cookieStore,UserService)
{
	if($rootScope.loggedInUser==undefined)
		$rootScope.loggedInUser=$cookieStore.get('currentuser')
		$rootScope.logout=function(){
		UserService.logout().then(
		function(response){
			delete $rootScope.loggedInUser;
			$cookieStore.remove('currentuser')
			$rootScope.message="Successfully Logout.."
			$location.path("/login");
		},function(response)
		{
			$rootScope.error=response.data
			if(response.status==401)
			$location.path('/login')
		})
		
		
	}

})