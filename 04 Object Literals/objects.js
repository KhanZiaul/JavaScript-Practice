// objects in array

// const arrayAre = [
//     {title: 'this is my first blog' , likes: 30},
//     {title: 'this is my second blog' , likes: 40}
// ] ;

// console.log(arrayAre);

const user= {
 
    blogs: [ {title: 'this is my first blog' , likes: 30}, {title: 'this is my second blog' , likes: 40}] ,

    blogsArray: function(){
      
        this.blogs.forEach(
          function(blog)  {
            console.log(blog.title, blog.likes);
           }
        );
    } 
};

user.blogsArray();