package com.tcs.bancs.strategy;

/**
 * Author: A Jayshanker Nair
 * EmpId: 560216
 * Date: 7/22/14
 * Time: 3:36 PM
 */
public class TemplateProvider {
    public static void main(String[] args) {
        TemplateContext templateContext = new TemplateContext();
        templateContext.setTemplateStrategy(new FreemarkerTemplateStrategy());
        templateContext.createTemplate("freemarker");

        templateContext.setTemplateStrategy(new SoyTemplateStrategy());
        templateContext.createTemplate("soy");
    }
}
