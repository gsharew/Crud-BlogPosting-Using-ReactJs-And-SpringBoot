package com.example.demo.EntityModel;

import javax.persistence.*;

@Entity
public class Blog {

    public Blog()
    {

    }
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int Username;
    String Password;
    String FullName;
    String BlogType;
    String BlogContent;

    public String getFullName() {
        return FullName;
    }

    public void setFullName(String fullName) {
        FullName = fullName;
    }

    public String getBlogType() {
        return BlogType;
    }

    public void setBlogType(String blogType) {
        BlogType = blogType;
    }

    public String getBlogContent() {
        return BlogContent;
    }

    public void setBlogContent(String blogContent) {
        BlogContent = blogContent;
    }

    public int getUsername() {
        return Username;
    }

    public void setUsername(int username) {
        Username = username;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }
}
