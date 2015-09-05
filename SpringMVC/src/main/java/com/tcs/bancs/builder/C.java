package com.tcs.bancs.builder;



/**
 * Author: A Jayshanker Nair
 * EmpId: 560216
 * Date: 7/22/14
 * Time: 6:18 PM
 */
public class C extends B implements Runnable{
    void test(){

        ((A) this).test();
        System.out.println("in c");
    }
    int f() { return 2; }

    public synchronized void test1(){
        test1();
        test();

    }

         public static void main(String[] args) {
      /*  C c = new C();
        c.test();*/

        A ref1 = new C();



        B ref2 = (B) ref1;



        System.out.println(ref2.f());

        A a=new A();
        B b=new B();

             System.out.println(a.hashCode()==(b.hashCode()));


    }

    @Override
    public void run() {
        //To change body of implemented methods use File | Settings | File Templates.
    }
}
