package com.example.demo.restController;

import com.example.demo.BlogService.ContactHandler;
import com.example.demo.EntityModel.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Contacts")
public class ContactRequestController {
    @Autowired
    ContactHandler contactHandler;
    @PostMapping("/addContact")
    public String addContact(@RequestBody Contact contact)
    {
        return contactHandler.addComment(contact);
    }
}
