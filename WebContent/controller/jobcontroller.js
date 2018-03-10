/**
 * JobController
 */
app.controller('JobCtrl',function($scope,$rootScope,$location,JobService,$routeParams)
{
//call this function from jobfrom.html
	var id=$routeParams.id
	$scope.addJob=function(job){
		console.log(job)
		JobService.addJob(job).then(
		function(response){
			alert('Job details posted successfully..')
			$location.path('/home')
		},function(response){
		//3 return statements for error
			//1. not authenticated ,not authorized -401
			$rootScope.error=response.data
			if(response.status==401)
				$location.path('/login')
		})	
		
		
	}
	
	JobService.getAllJobs().then(function(response){
		$scope.jobs=response.data
	},function(response)
	{
		$rootScope.error=response.data
		if(response.status==401)
			$location.path('/login')
	
	})
	if(id!=undefined){
		JobService.getJob(id).then(function(response){
			$scope.job=response.data
		},function(response){
			$rootScope.error=response.data
			if(response.status==401)
				$location.path('/login')
		})
	}
	

}) 