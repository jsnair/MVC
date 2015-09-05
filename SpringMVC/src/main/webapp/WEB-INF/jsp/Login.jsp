<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="assets/css/login.css" media="all">
    <link href="assets/css/font-awesome.css" rel="stylesheet" type="text/css"/>
    <title></title>
</head>
<body style="background-image: url('assets/images/login.jpg')">
<div class="main-block">

    <c:if test="${not empty error}">
        <div class="error">${error}</div>
    </c:if>
    <c:if test="${not empty msg}">
        <div class="msg">${msg}</div>
    </c:if>
<div class="login-block">
    <s:url var="authUrl" value="/login"></s:url>

    <h1 class="login-header">Login</h1>
    <%--<span class="arrow-down"></span>--%>
    <form:form name="loginForm" model="UserBean" action="${authUrl}" method="POST">
        <ul>
            <li>
                <span class="user-icon fa fa-user"></span>
                <input type="text" placeholder="Username" id="username" name="username"/>

            </li>
            <li>
                <span class="user-icon fa fa-eye"></span>
                <input id="password" type="password" placeholder="Password" name="password">
            </li>
            <li class="submit-block">
                <input type="checkbox">Remember Me
                <input class="myButton" name="submitButton" type="submit" value="Sign In">
            </li>
            <li>
                <span class="forget-password"><a>Forget Password ?</a></span>
                <span class="sign-up"><a>Sign Up</a></span>
            </li>
        </ul>

    </form:form>
</div>

</div>
</body>
</html>