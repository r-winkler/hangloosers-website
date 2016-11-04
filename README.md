# General

This is the website of Hangloosers. The site is accesible via https://r-winkler.github.io/hangloosers-website or hangloosers.ch.

# Setup project

npm install

# Effects

* animated header
* smooth scrolling
* scrollspy
* parallalx scrolling
* carousel: http://coolcarousels.frebsite.nl/c/7/

# Hacks

stellar.js needs jquery 2.2.4 in order that it works properly. Newer versions of jquery caused stellar.js to throw exceptions. Also note following issue of stellar.js: https://github.com/markdalgleish/stellar.js/issues/89 Two lines (435 and 436) in stellar.js have to be edited manually as mentioned in the comment. 


# How to

## Facebook album

<div id="fb-root"></div>
<script>
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>
<div class="fb-post col-md-3" data-href="https://www.facebook.com/media/set/?set=a.1714099655517991.1073741839.1591625684432056&type=1&l=ecc9889222"></div>

replace data-href with the link of the desired facebook album.