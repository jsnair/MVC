package com.tcs.bancs.builder;

/**
 * Author: A Jayshanker Nair
 * EmpId: 560216
 * Date: 7/22/14
 * Time: 4:41 PM
 */
public class QueryBuilder {

    private BatchQuery batchQuery = new BatchQuery();

    public InvalidQueryBuilder createSelectQuery(String query) {
        batchQuery.setSelectQuery(query);
        return new InvalidQueryBuilder(batchQuery);
    }

    public ValidQueryBuilder createFromQuery(String query) {
        batchQuery.setFromQuery(query);
        return new ValidQueryBuilder(batchQuery);
    }

}
