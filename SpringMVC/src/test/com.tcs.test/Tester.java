package com.tcs.test;

import com.tcs.bancs.controller.Test1;
import junit.framework.Assert;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * Author: A Jayshanker Nair
 * EmpId: 560216
 * Date: 7/21/14
 * Time: 3:29 PM
 */



@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {
        "/context/bpmn-config.xml"
})
public class Tester {

    @Autowired
    Test1 test;

    @Test
    public void getTestMessageObjectCreationfromBusinessObject(){
        System.out.println("Testing");
        test.test();
        Assert.assertEquals(2,1);
    }
}
