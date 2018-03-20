/**
 * 
 */
app.factory('BlogService', function($http) {
	var blogService = {}
	blogService.addBlog=function(blog) {
		return $http.post("http://localhost:8080/MiddleWare/addblogpost",blog)
	}
	return blogService;

})