/**
 * 
 */
app.controller('NotificationCtrl',function($scope,$rootScope,$routeParams,$location,NotificationService){
	var id=$routeParams.id
	function getNotificationsNotViewed(){
		NotificationService.getNotificationsNotViewed().then(
		function(response){
			$rootScope.notifications=response.data
			$rootScope.notificationCount=$rootScope.notifications.length
			
		},
		function(response){
			$rootScope.error=response.data
			if(response.status==401)
				$location.path('/login')
		})
		
			
	}
	if(id!=undefined){
		
		
		NotificationService.getNotification(id).then(
			function(response){
//				console.log(response.data)
				$scope.notification=response.data
			},
			function(response){
				$rootScope.error=reponse.data//ErrorClazz object
				if(response.status==401)
					$location.path('/login')
			})
			
			NotificationService.updateNotification(id).then(function(response){
				getNotificationsNotViewed()
			},function(response){
				$rootScope.error=response.data
				if(response.status==401)
					$location.path('/login')
			})
			
				
			
		
	}
	
	
	getNotificationsNotViewed()
	
})