<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css" media="all">
    <link rel="stylesheet" type="text/css" href="assets/css/home.css" media="all">
    <link rel="stylesheet" type="text/css" href="assets/css/animate.css" media="all">
    <link rel="stylesheet" type="text/css" href="assets/css/image-slider.css" media="all">
    <link rel="stylesheet" type="text/css" href="assets/css/Overlay.css" media="all">
    <link href="assets/css/font-awesome.css" rel="stylesheet" type="text/css"/>

    <title></title>
</head>
<body>
<div class="main-block">
    <div class="nav-bar">
        <div class="navbar-right">
            <span id="user-info" class="fa fa-user"></span>
        </div>
        <ul class="login-info">
            <li class="user-header">
                <img class="img-circle" alt="User Image" src="assets/images/photo.jpg"/>

                <p>
                    ${pageContext.request.userPrincipal.name} - Web Developer
                    <small>Member since Nov. 2012</small>
                </p>
            </li>
            <li class="user-footer">
                <div>
                    <a class="btn btn-default btn-flat profile" href="#">Profile</a>
                </div>
                <div>
                    <a class="btn btn-default btn-flat sign-out" href="#">Sign Out</a>
                </div>
            </li>
        </ul>
    </div>

    <div class="left-nav-block">
        <div class="logo">
           <span class="image avatar48">
                <img alt="" src="assets/images/photo.jpg">
           </span>

            <h1 id="title">Jay Nair</h1>
        </div>
        <nav id="nav">
            <ul class="navigator">
                <li>
                    <a class="nav-link" id="top-link" href="#top">
                        <span class="icon fa fa-home"></span>
                        <span class="nav-title">Intro</span>
                    </a>
                </li>
                <li>
                    <a class="nav-link" id="portfolio-link" href="#portfolio">
                        <span class="icon fa fa-th"></span>
                        <span class="nav-title">Portfolio</span>
                    </a>
                </li>
                <li>
                    <a class="nav-link" id="about-link" href="#about">
                        <span class="icon fa fa-user"></span>
                        <span class="nav-title">About Me</span>
                    </a>
                </li>
                <li>
                    <a class="nav-link" id="contact-link" href="#contact">
                        <span class="icon fa fa-envelope"></span>
                        <span class="nav-title">Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="bottom"><!-- Social Icons -->
            <ul class="icons">
                <li><a class="icon fa fa-twitter" href="#"></a></li>
                <li><a class="icon fa fa-facebook" href="#"></a></li>
                <li><a class="icon fa fa-github" href="#"></a></li>
                <li><a class="icon fa fa-dribbble" href="#"></a></li>
                <li><a class="icon fa fa-envelope" href="#"></a></li>
            </ul>
        </div>
    </div>
    <div class="maincontainer">
        <section class="one dark cover" id="top">
            <%--  <div class="container">
                  <header><h2 class="alt">Hi! Vel Elementum, cep cras adipiscing<br> quam interdum lobortis mi Ullamcorper.
                  </h2>

                      <p>Ligula scelerisque justo sem accumsan diam quis<br> vitae natoque dictum sollicitudin elementum.</p>
                  </header>
                  <footer><a class="button scrolly" href="#portfolio">Magna Aliquam</a></footer>
              </div>--%>
            <div class="bancs-slider" data-role="bancs.ImageSlider"<%-- style="display: none"--%>></div>
        </section>

        <section class="two" id="portfolio">
             <div class="container">
                 <header><h2>Portfolio</h2></header>
                 <p>Vitae natoque dictum <br etiam semper magnis enim feugiat <br>convallis convallis egestas rhoncus ridiculus in
                     quis risus amet <br>curabitur tempor orci penatibus. <br> Tellus erat mauris ipsum fermentum etiam vivamus eget.  <br>
                     Nunc nibh morbi quis fusce hendrerit lacus ridiculus.</p>

                 <div class="row">
                     <div class="4u">
                         <article class="item"><a class="image thumb" href="#"><img alt="" src="assets/images/01.jpg"></a>
                             <header><h3>Ipsum Feugiat</h3></header>
                         </article>

                     </div>
                 </div>
             </div>
         </section>
    </div>

</div>


</body>
<script type="text/javascript" data-main="assets/js/core/main" src="assets/js/require-2.1.2.min.js"></script>
</html>