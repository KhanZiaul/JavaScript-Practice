//this keyword

const user = {

    blogs:['this is my first blog', 'this is my second blog'],

    allBlogs : function(){
        this.blogs.forEach( function(blog) {
            console.log(blog);
        });
    }
};

user.allBlogs();