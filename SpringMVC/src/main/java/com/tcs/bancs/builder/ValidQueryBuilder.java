package com.tcs.bancs.builder;

/**
 * Author: A Jayshanker Nair
 * EmpId: 560216
 * Date: 7/22/14
 * Time: 5:16 PM
 */
public class ValidQueryBuilder {

    private BatchQuery batchQuery;

    ValidQueryBuilder(BatchQuery batchQuery){
        this.batchQuery = batchQuery;
    }

    public InvalidQueryBuilder createSelectQuery(String query) {
        batchQuery.setSelectQuery(query);
        return new InvalidQueryBuilder(batchQuery);
    }

    public ValidQueryBuilder createFromQuery(String query) {
        batchQuery.setFromQuery(query);
        return this;
    }

    public ValidQueryBuilder createWhereQuery(String query){
        batchQuery.setWhereQuery(query);
        return this;
    }

    public ValidQueryBuilder createOrderByQuery(String query){
        batchQuery.setOrderbyQuery(query);
        return this;
    }

    public BatchQuery build(){
        return batchQuery;
    }
}
