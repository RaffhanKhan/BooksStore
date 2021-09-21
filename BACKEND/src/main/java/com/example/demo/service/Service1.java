package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Entity1;
import com.example.demo.repository.Repository1;

@Service
public class Service1 {
	
	
	@Autowired
	Repository1 repo1;
	
	public Entity1 addBook(Entity1 e1) {
		return repo1.save(e1);
		
		
		
	}
	
	public List<Entity1> getBook() {
		return repo1.findAll();
	}
	
	

}
