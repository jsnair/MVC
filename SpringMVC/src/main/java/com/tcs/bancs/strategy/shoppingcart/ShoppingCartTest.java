package com.tcs.bancs.strategy.shoppingcart;

/**
 * Created with IntelliJ IDEA.
 * User: 560216
 * Date: 9/8/14
 * Time: 2:51 PM
 * To change this template use File | Settings | File Templates.
 */
public class ShoppingCartTest {

    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();

        Item item1 = new Item("1234",10);
        Item item2 = new Item("5678",40);

        cart.addItem(item1);
        cart.addItem(item2);

        //pay by paypal
        cart.pay(new PayPalStrategy("myemail@example.com", "mypwd"));

        //pay by credit card
        cart.pay(new CreditCardStrategy("Pankaj Kumar", "1234567890123456", "786", "12/15"));
    }
}
