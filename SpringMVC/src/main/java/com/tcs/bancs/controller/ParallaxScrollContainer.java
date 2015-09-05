package com.tcs.bancs.controller;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created with IntelliJ IDEA.
 * User: 560216
 * Date: 9/26/14
 * Time: 1:45 PM
 * To change this template use File | Settings | File Templates.
 */
public class ParallaxScrollContainer  extends AbstractController {

    @Override
    protected ModelAndView handleRequestInternal(HttpServletRequest request, HttpServletResponse response) throws Exception {
        ModelAndView modelAndView = new ModelAndView("ParaScroll");
        return modelAndView;
    }

}