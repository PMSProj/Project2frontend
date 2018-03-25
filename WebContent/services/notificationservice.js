/**
 * 
 */
app.factory('NotificationService', function($http) {
	var notificationService = {}
	notificationService.getNotificationsNotViewed = function() {
		return $http.get("http://localhost:8080/MiddleWare/getnotifications")
	}
	
	notificationService.getNotification = function(id) {
		return $http.get("http://localhost:8080/MiddleWare/getnotification/"+ id)
	}
	
	notificationService.updateNotification = function(id) {
		return $http.put("http://localhost:8080/MiddleWare/updatenotification/"+ id)
	}

	return notificationService;
})