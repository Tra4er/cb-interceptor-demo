package com.itrach.cbinterceptordemo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Pages {

    @RequestMapping("/user")
    public String returnUser() {
        return "/user.html";
    }

    @RequestMapping("/admin")
    public String returnService() {
        return "/service.html";
    }
}
