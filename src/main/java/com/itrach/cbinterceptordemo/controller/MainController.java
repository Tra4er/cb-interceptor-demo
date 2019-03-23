package com.itrach.cbinterceptordemo.controller;

import com.hazelcast.core.HazelcastInstance;
import com.itrach.cbinterceptor.annotation.CbInterceptor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class MainController {

    @GetMapping
    @CbInterceptor
    public String get() {
        HazelcastInstance a;
        return "Response from Get";
    }

}
