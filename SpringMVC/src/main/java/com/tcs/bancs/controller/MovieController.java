package com.tcs.bancs.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Author: A Jayshanker Nair
 * EmpId: 560216
 * Date: 7/18/14
 * Time: 3:12 PM
 */

@Controller
@RequestMapping("/movie")
public class MovieController {

    @RequestMapping(value = "/{name}", method = RequestMethod.GET)
    public String getMovie(@PathVariable String name, ModelMap modelMap) {
        modelMap.addAttribute("movie", name);
        return "list";
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String getDefaultMovie(ModelMap modelMap) {
        modelMap.addAttribute("movie", "Avengers");
        return "list";
    }

}
