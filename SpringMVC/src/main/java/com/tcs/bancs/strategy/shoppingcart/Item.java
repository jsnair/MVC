package com.tcs.bancs.strategy.shoppingcart;

/**
 * Created with IntelliJ IDEA.
 * User: 560216
 * Date: 9/8/14
 * Time: 2:49 PM
 * To change this template use File | Settings | File Templates.
 */
public class Item {

    private String upcCode;
    private int price;

    public Item(String upc, int cost){
        this.upcCode=upc;
        this.price=cost;
    }

    public String getUpcCode() {
        return upcCode;
    }

    public int getPrice() {
        return price;
    }
}
