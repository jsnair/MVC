package com.tcs.bancs.strategy.shoppingcart;

/**
 * Created with IntelliJ IDEA.
 * User: 560216
 * Date: 9/8/14
 * Time: 2:47 PM
 * To change this template use File | Settings | File Templates.
 */
public class CreditCardStrategy implements PaymentStrategy {

    private String name;
    private String cardNumber;
    private String cvv;
    private String dateOfExpiry;

    public CreditCardStrategy(String nm, String ccNum, String cvv, String expiryDate){
        this.name=nm;
        this.cardNumber=ccNum;
        this.cvv=cvv;
        this.dateOfExpiry=expiryDate;
    }


    @Override
    public void pay(int amount) {
        System.out.println(amount +" paid with credit/debit card");
    }

}
