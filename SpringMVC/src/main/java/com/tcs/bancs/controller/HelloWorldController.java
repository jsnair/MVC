package com.tcs.bancs.controller;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Author: A Jayshanker Nair
 * EmpId: 560216
 * Date: 7/21/14
 * Time: 11:25 AM
 */
public class HelloWorldController extends AbstractController {
    @Override
    protected ModelAndView handleRequestInternal(HttpServletRequest request, HttpServletResponse response) throws Exception {

        ModelAndView modelAndView = new ModelAndView("HelloWorldPage");
        modelAndView.addObject("msg", "Hello World");
        return modelAndView;
    }
}
