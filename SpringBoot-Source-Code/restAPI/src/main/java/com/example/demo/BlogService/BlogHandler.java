package com.example.demo.BlogService;

import com.example.demo.EntityModel.Blog;
import com.example.demo.Repositories.BlogRepository;
import com.fasterxml.jackson.databind.JsonNode;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class BlogHandler {
    @Autowired
    BlogRepository blogRepository;

    //Two Post Methods used to push post to the table
    public Blog saveBlog(Blog IncommingBlog)
    {
         return blogRepository.save(IncommingBlog);
    }

    public List<Blog> saveBlogs(List<Blog> blogsList)
    {
         return blogRepository.saveAll(blogsList);
    }

    //Now Two Get Methods used to get the data from the table
    public Blog getSingleBlog(int username)
    {
         return blogRepository.findById(username).orElse(null);
    }

    public List<Blog> getAllBlogs()
    {
        return blogRepository.findAll();
    }

    //Now time to delete the blog by its username or whatever else

    public String deleteSingleBlog(JsonNode jsonNode)
    {
       int username = jsonNode.get("username").asInt();
       String password = jsonNode.get("password").asText();
       Blog existingBlog = blogRepository.findById(username).orElse(null);
       if(existingBlog != null)
       {
           //this means that the blog is found and the user can delete the data from the database
           if (existingBlog.getUsername() == username && existingBlog.getPassword().equals(password))
           {
               blogRepository.deleteById(username);
               return "The Blog Deleted Successfully";
           }

           else {
               return "There is no a blog with that username or password";
           }
       }

        return  "There is no a blog with that credential ";
    }

    public String deleteAllBlogs()
    {
        blogRepository.deleteAll();
        return  "All Blogs are Deleted from the repository";
    }

    //Now time to update the blog by its username
    public String updateSingleRepository(Blog blog)
    {
    //        System.out.println("the new username : " + blog.getUsername());
    //        System.out.println("the new passowrd : " + blog.getPassword());
    //        System.out.println("the new fullname : " + blog.getFullName());
    //        System.out.println("the new blog type is as follow : " + blog.getBlogType());
    //        System.out.println(("the new blog value is : ") + blog.getBlogContent());

        Blog existingBlog = blogRepository.findById(blog.getUsername()).orElse(null);

        //this means that the blog is found so, we can update as requested for the incoming request for updating the data.
        if (existingBlog != null && existingBlog.getPassword().equals(blog.getPassword()))
        {
                //deleting the existing repostory
                blogRepository.delete(existingBlog);

                //and now inserting the new one to the database
                blogRepository.save(blog);
                return "Successfully updated your blog";
        }

        else
        {
             return  "There is no blog with that credential";
        }
    }
}
