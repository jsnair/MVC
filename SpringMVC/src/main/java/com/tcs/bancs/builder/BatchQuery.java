package com.tcs.bancs.builder;

/**
 * Author: A Jayshanker Nair
 * EmpId: 560216
 * Date: 7/22/14
 * Time: 4:42 PM
 */
public class BatchQuery {
    private String selectQuery;
    private String fromQuery;
    private String whereQuery;
    private String orderbyQuery;

    public String getSelectQuery() {
        return selectQuery;
    }

    public void setSelectQuery(String selectQuery) {
        this.selectQuery = selectQuery;
    }

    public String getFromQuery() {
        return fromQuery;
    }

    public void setFromQuery(String fromQuery) {
        this.fromQuery = fromQuery;
    }

    public String getWhereQuery() {
        return whereQuery;
    }

    public void setWhereQuery(String whereQuery) {
        this.whereQuery = whereQuery;
    }

    public String getOrderbyQuery() {
        return orderbyQuery;
    }

    public void setOrderbyQuery(String orderbyQuery) {
        this.orderbyQuery = orderbyQuery;
    }
}
