/**
 * 
 */
app.controller('UserController', function($scope, $rootScope,$location, UserService,$cookieStore) {
	
	if($rootScope.loggedInUser!=undefined){
		UserService.getUserDetails().then(function(response){
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
			$location.path('/login')
		}, function(response) {
			$scope.error = response.data
		})

	}
$scope.login=function()
{
	//console.log('UserController ->login')
	//console.log(user)
	UserService.login($scope.user).then(function(response)
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
})