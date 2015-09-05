package com.tcs.bancs.builder;

/**
 * Author: A Jayshanker Nair
 * EmpId: 560216
 * Date: 7/22/14
 * Time: 5:16 PM
 */
public class InvalidQueryBuilder {

    private BatchQuery batchQuery;

    public InvalidQueryBuilder(BatchQuery batchQuery){
        this.batchQuery = batchQuery;
    }

    public InvalidQueryBuilder createSelectQuery(String query) {
        batchQuery.setSelectQuery(query);
        return this;
    }

    public ValidQueryBuilder createFromQuery(String query) {
        batchQuery.setFromQuery(query);
        return new ValidQueryBuilder(batchQuery);
    }
}
