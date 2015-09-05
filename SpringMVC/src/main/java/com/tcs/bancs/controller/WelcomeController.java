package com.tcs.bancs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*@Controller
@RequestMapping("/welcome")*/
public class WelcomeController extends AbstractController {

    /*   @RequestMapping(method = RequestMethod.GET)
       public String printMessage(ModelMap modelMap){
           modelMap.addAttribute("message", "Spring 3 MVC Hello World");
           return "hello";
       }
   */
    @Override
    protected ModelAndView handleRequestInternal(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ModelAndView modelAndView = new ModelAndView("HelloWorldPage");
        modelAndView.addObject("msg", "Welcome to Spring MVC");
        return modelAndView;
    }
}
