package com.tcs.bancs.strategy;

/**
 * Author: A Jayshanker Nair
 * EmpId: 560216
 * Date: 7/22/14
 * Time: 3:29 PM
 */
public class SoyTemplateStrategy implements TemplateStrategy {

    @Override
    public void getTemplate(String templateName) {
        System.out.println("I want to use Google Closure template");
    }

}
