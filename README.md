# General

This is the website of HANG LOOSErs. The site is accesible via hangloosers.ch.

# Setup project

The web editor brackets.io ws used to implement this webpage.

* git clone
* npm install

# Effects

* animated header
* smooth scrolling
* scrollspy
* parallalx scrolling
* carousel: http://coolcarousels.frebsite.nl/c/7/
* slick-carousel
* flipcountdown

# Hacks

stellar.js needs jquery 2.2.4 in order that it works properly. Newer versions of jquery caused stellar.js to throw exceptions. Also note following issue of stellar.js: https://github.com/markdalgleish/stellar.js/issues/89 Two lines (435 and 436) in stellar.js have to be edited manually as mentioned in the comment. 


# Worth knowing (remembering)

## 3rd party libs

Whenever possible, all 3rd party libraries were included via npm. Otherwise they were manually downloaded and placed in js/libs.

## Adding events

Events are added in the events.json. They are automatically displayed in the calendar and in the upcoming events section. Countdown timers for events have to be created manually.

## Contact form

As github pages only supports static websites, it is not possible to integrate phb in order to send emails. Therefore, enformed.io is used for sending emails.

## DNS

DNS is configured as described here. The CNAME file was created automatically by github. Whenever the dNS is changed it takes a couple of hours before it is working.

## Jekyll

The .nojekyll file causes that the node_modules directory is not ignored on github.

## Precompile less

Less files are precompiled via the brackets less autocompile plugin. That allows to inlcude only plain css stylesheets in html files.

## Not yet implemented
	
* Babel
* webpack
* Build

## Integrate Facebook album

No facebook album is integrated directly on the page. But if this should be done, it can be performed as follows:

```javascript
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
```

Replace data-href with the link of the desired facebook album.

## Performance 

* Pictures are lazy-loaded (recliner.js)
* Cloudflare is used as nameserver which makes the website faster, safer and smarter
* js scripts and css files are minimized (npm i -g minifiy)
* Additional Js, CSS and HTML files are minimized by cloudflare
* Browser Caching is provided by cloudflare and set to 8 days (additional page rule is configured to cache everything)
* loadCss is used to load CSS script asynchronously
* critical css had no effect on this page and so it is removed again (was generated with https://jonassebastianohlsson.com/criticalpathcssgenerator/)
* images were compressed via google page speed


