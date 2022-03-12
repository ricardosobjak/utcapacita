package br.edu.utfpr.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
public class HelloWorldController {

    @GetMapping
    public String ola() {
        return "Olá... bem vindo ao projeto com Spring!";
    }
    
    
}
