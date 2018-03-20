/**
 * 
 */
app.controller('BlogCtrl',function($scope,$location,$rootScope,BlogService)
		{
	$scope.addBlog=function(blog){
		BlogService.addBlog(blog).then(
				function(response)
				{
					console.log('welcome')
					alert('BlogPost is added successfully and it is waiting for approval');
					$location.path('/home')
				},
				function(response){
					$rootScope.error=response.data
					if(response.status==401)
						$location.path('/login')
				
				})
		
	}
		})