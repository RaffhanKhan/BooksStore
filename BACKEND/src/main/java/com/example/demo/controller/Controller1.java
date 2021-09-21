package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Entity1;
import com.example.demo.service.Service1;

@RestController

public class Controller1 {
	@Autowired
	Service1 ser1;
	
	@PostMapping("/add")
	@CrossOrigin(origins="http://localhost:4200")
	public Entity1 add(@RequestBody Entity1 e1) {
		 return ser1.addBook(e1);
	}
	
	@GetMapping("/get")
	@CrossOrigin(origins="http://localhost:4200")
	public List<Entity1> get() {
		return ser1.getBook();
	}
	
}
