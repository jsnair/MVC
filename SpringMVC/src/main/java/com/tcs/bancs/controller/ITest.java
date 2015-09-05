package com.tcs.bancs.controller;

/**
 * Author: A Jayshanker Nair
 * EmpId: 560216
 * Date: 7/21/14
 * Time: 3:53 PM
 */
public class ITest implements Test1 {
    @Override
    public void test() {
        System.out.println("Hi I am injected");
    }
}
