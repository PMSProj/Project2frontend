/**
 * 
 */
app.factory('BlogService', function($http) {
	var blogService = {}
	
	blogService.addBlog=function(blog) {
		return $http.post("http://localhost:8080/MiddleWare/addblogpost",blog)
	}
	blogService.getBlogsWaitingForApproval=function()
	{
		return $http.get("http://localhost:8080/MiddleWare/getblogs/"+0)
	}
	
	blogService.getBlogsApproved=function()
	{
		return $http.get("http://localhost:8080/MiddleWare/getblogs/"+1)
	}
	blogService.getBlog=function(id)
	{
		return $http.get("http://localhost:8080/MiddleWare/getblog/"+id)
	}
	
	blogService.hasUserLikedBlog=function(id)
	{
		return $http.get("http://localhost:8080/MiddleWare/hasuserlikedblog/"+id)
	}
	
	blogService.approve=function(blog){
		//blog.approved=0
		return $http.put("http://localhost:8080/MiddleWare/approve",blog)
	    //blog.approved=1
	}
	
	blogService.reject=function(blog,rejectionReason){
		//blog.approved=0
		return $http.put("http://localhost:8080/MiddleWare/reject/"+rejectionReason,blog)
	    //blog record will get deleted
	}
	blogService.updateLikes=function(id)
	{
		return $http.put("http://localhost:8080/MiddleWare/updatelikes/"+id);
	}
	blogService.addComment=function(blogComment)
	{
		return $http.post("http://localhost:8080/MiddleWare/addcomment",blogComment);
	}
	blogService.getBlogComments=function(id)
	{
		return $http.get("http://localhost:8080/MiddleWare/blogcomments/"+id);
	}
	return blogService;

})