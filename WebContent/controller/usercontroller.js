	/**
 * 
 */
app.controller('UserController', function($scope, $rootScope,$location, UserService,$cookieStore) {
	
	if($rootScope.loggedInUser!=undefined){
		UserService.getUser().then(function(response){
			$scope.user=response.data
			},function(response){
				console.log(response.status)
				$scope.error=response.data
				$location.path('/login')
			})
	}
	$scope.registerUser = function() {
		// alert('entering usercontroller registerUser function in
		// frontend'+user)
		//console.log('entering usercontroller registerUser function in frontend'+ user)
		UserService.registerUser($scope.user).then
		(function(response) {
			alert('Registered Successfully....please login again...')
			$location.path('/home')
		}, function(response) {
			$scope.error=response.data
		})

	}
$scope.login=function(user)
{
	//console.log('UserController ->login')
	//console.log(user)
	UserService.login(user).then(function(response)
    {
		console.log('success')
		$rootScope.loggedInUser=response.data
		$cookieStore.put('currentuser',response.data)
		$location.path('/home')
    },function(response){
    	console.log('error')
    	console.log(response.data)
    	$scope.error=response.data
    	$location.path('/login')
         
			})

}
//Statement  which will get executed automatically when gets loaded
//Controller to view 
if($rootScope.loggedInUser!=undefined){
UserService.getUser().then(
		function(response){
			$scope.user=response.data
		
		},
		function(response){
			if(response.status==401)
				$location.path('/login')
	    else
	    	$scope.error=response.data;
		})
}
//View to Controller
$scope.updateUser=function(user){
	UserService.updateUser(user).then(function(response){
	console.log(job.jobtitle)
	alert('updated user profile successfully..')
	$rootScope.loggedInUser=response.data
		$cookieStore.put('loggedInUser',response.data)
		$location.path('/home')
	},function(response){
		if(reponse.status==401)
			$location.path('/login')
			else
				$scope.error=response.data
	})
}
})