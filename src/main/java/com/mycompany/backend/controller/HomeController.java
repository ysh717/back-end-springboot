package com.mycompany.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

//@Controller rest에서는 사용하지 않는다 viewResolver도 사용X
public class HomeController {
	@RequestMapping("/")
	public String home() {
		return "home";
	}
}
