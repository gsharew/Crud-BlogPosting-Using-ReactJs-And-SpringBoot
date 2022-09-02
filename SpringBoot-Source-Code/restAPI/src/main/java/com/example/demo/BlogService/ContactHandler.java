package com.example.demo.BlogService;

import com.example.demo.EntityModel.Contact;
import com.example.demo.Repositories.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactHandler {
    @Autowired
    ContactRepository contactRepository;

    public String addComment(Contact contact)
    {
        contactRepository.save(contact);
        return  "Successfully submitted your info";
    }

}
