package com.mycompany.backend.controller;

import java.net.URI;

import javax.servlet.http.HttpServletResponse;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Controller
public class ErrorHandlerController implements ErrorController{
  @RequestMapping("/error")
  public ResponseEntity<String> error(HttpServletResponse response) {
    //401,403,404도 나올 수 있다
    int status = response.getStatus();
    
    if(status == 404) {
      return ResponseEntity
              .status(HttpStatus.MOVED_PERMANENTLY) //리다이렉트의 코드인 301번으로 대체가능
              .location(URI.create("/"))
              .body("");
    } else {
      return ResponseEntity.status(status).body(""); //404이외의 에러는 그대로 프론트로 전달
    }
  }
  
}
