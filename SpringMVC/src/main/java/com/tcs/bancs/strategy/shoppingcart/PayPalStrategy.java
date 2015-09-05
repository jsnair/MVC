package com.tcs.bancs.strategy.shoppingcart;

/**
 * Created with IntelliJ IDEA.
 * User: 560216
 * Date: 9/8/14
 * Time: 2:49 PM
 * To change this template use File | Settings | File Templates.
 */
public class PayPalStrategy implements PaymentStrategy {

    private String emailId;
    private String password;

    public PayPalStrategy(String email, String pwd){
        this.emailId=email;
        this.password=pwd;
    }

    @Override
    public void pay(int amount) {
        System.out.println(amount + " paid using Paypal.");
    }
}
