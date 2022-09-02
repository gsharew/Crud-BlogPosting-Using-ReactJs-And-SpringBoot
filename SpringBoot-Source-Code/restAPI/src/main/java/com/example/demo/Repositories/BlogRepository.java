package com.example.demo.Repositories;

import com.example.demo.EntityModel.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Blog, Integer> {
}
