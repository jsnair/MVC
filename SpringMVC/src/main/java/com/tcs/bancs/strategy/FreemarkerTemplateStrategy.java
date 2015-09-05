package com.tcs.bancs.strategy;

/**
 * Author: A Jayshanker Nair
 * EmpId: 560216
 * Date: 7/22/14
 * Time: 3:30 PM
 */
public class FreemarkerTemplateStrategy implements TemplateStrategy {
    @Override
    public void getTemplate(String templateName) {
        System.out.println("I want to use Freemarker template");
    }
}
