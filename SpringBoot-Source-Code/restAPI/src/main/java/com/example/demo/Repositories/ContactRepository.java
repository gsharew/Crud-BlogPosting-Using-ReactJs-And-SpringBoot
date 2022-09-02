package com.example.demo.Repositories;

import com.example.demo.EntityModel.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Integer> {
}
