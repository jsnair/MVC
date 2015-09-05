package com.tcs.bancs.controller;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Author: A Jayshanker Nair
 * EmpId: 560216
 * Date: 7/21/14
 * Time: 11:53 AM
 */
public class CustomerController extends MultiActionController {

    public ModelAndView add(HttpServletRequest request,
                            HttpServletResponse response) throws Exception {

        return new ModelAndView("CustomerPage", "msg", "add() method");

    }

    public ModelAndView delete(HttpServletRequest request,
                               HttpServletResponse response) throws Exception {

        return new ModelAndView("CustomerPage", "msg", "delete() method");

    }

    public ModelAndView update(HttpServletRequest request,
                               HttpServletResponse response) throws Exception {

        return new ModelAndView("CustomerPage", "msg", "update() method");

    }

    public ModelAndView list(HttpServletRequest request,
                             HttpServletResponse response) throws Exception {

        return new ModelAndView("CustomerPage", "msg", "list() method");

    }
}
