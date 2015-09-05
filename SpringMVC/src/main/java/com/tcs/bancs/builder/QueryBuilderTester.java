package com.tcs.bancs.builder;

/**
 * Author: A Jayshanker Nair
 * EmpId: 560216
 * Date: 7/23/14
 * Time: 2:10 PM
 */
public class QueryBuilderTester {

    public static void main(String[] args) {
        BatchQuery batchQuery = new QueryBuilder().createSelectQuery("Select * ").createFromQuery("from emp").createWhereQuery("where id=101").createOrderByQuery("order by id").build();
        System.out.println(batchQuery.getSelectQuery()+" "+batchQuery.getFromQuery() +" "+batchQuery.getWhereQuery()+" "+batchQuery.getOrderbyQuery());
    }
}
