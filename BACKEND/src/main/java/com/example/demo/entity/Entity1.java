package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Entity1 {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int Id;
	
	private String title ;
	private String author;
	private int price;
	private String date;
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	
	
	public Entity1(int id, String title, String author, int price, String date) {
		super();
		Id = id;
		this.title = title;
		this.author = author;
		this.price = price;
		this.date = date;
	}
	public Entity1() {
		super();
	}
	@Override
	public String toString() {
		return "Entity1 [Id=" + Id + ", title=" + title + ", author=" + author + ", price=" + price + ", date=" + date
				+ "]";
	}
	
	
	
	
	
	
	
	

}
