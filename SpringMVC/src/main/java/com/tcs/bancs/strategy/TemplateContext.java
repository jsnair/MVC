package com.tcs.bancs.strategy;

/**
 * Author: A Jayshanker Nair
 * EmpId: 560216
 * Date: 7/22/14
 * Time: 3:32 PM
 */
public class TemplateContext {

    private TemplateStrategy templateStrategy;

    void setTemplateStrategy(TemplateStrategy templateStrategy) {
        this.templateStrategy = templateStrategy;

    }

    public void createTemplate(String name) {
        templateStrategy.getTemplate(name);
    }
}
