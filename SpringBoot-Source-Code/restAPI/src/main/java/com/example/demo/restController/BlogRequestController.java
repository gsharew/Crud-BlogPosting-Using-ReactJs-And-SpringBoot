package com.example.demo.restController;
import com.example.demo.BlogService.BlogHandler;
import com.example.demo.EntityModel.Blog;
import com.fasterxml.jackson.databind.JsonNode;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/Blogs")
public class BlogRequestController {
    @Autowired
    BlogHandler blogHandler;

    @PostMapping("/addBlog")
    public String addBlog(@RequestBody Blog blog)
    {
        return blogHandler.saveBlog(blog) != null ? "Successfully inserted your blog" : "Unable to insert your blog";
    }

    @PostMapping("/addBlogs")
    public String addBlogs(@RequestBody  List<Blog> blogList)
    {
         return  blogHandler.saveBlogs(blogList).size() > 0 ? "Successfully inserted all blogs" : "Unable to insert your blog";
    }

    @GetMapping("/getBlog")
    public Blog getBlog(@RequestBody  int username)
    {
         return blogHandler.getSingleBlog(username);
    }

    @GetMapping("/getBlogs")
    public List<Blog> getAllBlogs()
    {
         return blogHandler.getAllBlogs();
    }

    @DeleteMapping("/deleteBlog")
    public String deleteBlog(@RequestBody JsonNode jsonNode)
    {
         return blogHandler.deleteSingleBlog(jsonNode);
    }

    @DeleteMapping("/deleteAllBlogs")
    public String deleteBlogs()
    {
         return blogHandler.deleteAllBlogs();
    }

    @PutMapping("/updateBlog")
    public String updateBlog(@RequestBody  Blog blog)
    {
       return  blogHandler.updateSingleRepository(blog);
    }
}
