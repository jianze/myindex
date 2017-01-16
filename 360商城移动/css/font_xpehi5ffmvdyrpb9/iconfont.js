;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-home" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1024 608l-192-192 0-288-128 0 0 160-192-192-512 512 0 32 128 0 0 320 320 0 0-192 128 0 0 192 320 0 0-320 128 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tubiao4" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M817.344 919.68c-44.992 0-81.6-36.48-81.6-81.664 0-44.928 36.608-81.472 81.6-81.472s81.536 36.544 81.536 81.472C898.944 883.2 862.4 919.68 817.344 919.68zM817.344 794.112c-24.192 0-43.968 19.584-43.968 43.904 0 24.384 19.776 44.032 43.968 44.032 24.256 0 43.904-19.712 43.904-44.032C861.248 813.696 841.6 794.112 817.344 794.112z"  ></path>' +
    '' +
    '<path d="M449.28 919.68c-44.992 0-81.664-36.48-81.664-81.664 0-44.928 36.672-81.472 81.664-81.472 44.928 0 81.536 36.544 81.536 81.472C530.816 883.2 494.208 919.68 449.28 919.68zM449.28 794.112c-24.32 0-43.968 19.584-43.968 43.904 0 24.384 19.648 44.032 43.968 44.032 24.256 0 43.968-19.712 43.968-44.032C493.184 813.696 473.472 794.112 449.28 794.112z"  ></path>' +
    '' +
    '<path d="M892.992 732.544 310.784 732.544c-6.336 0-11.968-3.136-15.552-8.128-3.584-5.12-4.288-11.648-2.048-17.408l54.08-143.36L204.032 141.952 82.88 141.952C72.384 141.952 64 133.504 64 123.136S72.384 104.32 82.88 104.32l134.656 0c8.064 0 15.232 5.12 17.792 12.8l149.696 440.832c1.408 4.096 1.408 8.576-0.192 12.672l-46.976 124.352 555.136 0c10.304 0 18.752 8.32 18.752 18.752C911.744 724.032 903.296 732.544 892.992 732.544z"  ></path>' +
    '' +
    '<path d="M836.352 582.656l-469.12 0c-10.368 0-18.752-8.32-18.752-18.688 0-10.496 8.384-18.944 18.752-18.944l455.296 0 92.864-290.048L260.096 254.976c-10.56 0-18.88-8.384-18.88-18.816 0-10.368 8.32-18.816 18.88-18.816l681.024 0c6.08 0 11.776 2.816 15.168 7.68 3.648 4.928 4.544 11.136 2.88 16.896L854.4 569.6C851.84 577.536 844.544 582.656 836.352 582.656z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gengduo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M76.165704 77.489862c-17.692964 0-32.05609 14.364149-32.05609 32.158421l0 317.166593c0 18.028609 14.364149 32.219819 32.05609 32.219819l346.800517 0c17.886369 0 32.260751-14.20042 32.260751-32.219819L455.226972 109.648282c0-17.794271-14.364149-32.158421-32.260751-32.158421L76.165704 77.489862z"  ></path>' +
    '' +
    '<path d="M76.165704 571.015092c-17.692964 0-32.05609 14.364149-32.05609 32.158421l0 317.166593c0 18.028609 14.364149 32.219819 32.05609 32.219819l346.800517 0c17.886369 0 32.260751-14.201443 32.260751-32.219819L455.226972 603.173512c0-17.794271-14.364149-32.158421-32.260751-32.158421L76.165704 571.015092z"  ></path>' +
    '' +
    '<path d="M600.078011 571.015092c-17.692964 0-32.05609 14.364149-32.05609 32.158421l0 317.166593c0 18.028609 14.364149 32.219819 32.05609 32.219819l346.800517 0c17.886369 0 32.260751-14.201443 32.260751-32.219819L979.13928 603.173512c0-17.794271-14.364149-32.158421-32.260751-32.158421L600.078011 571.015092z"  ></path>' +
    '' +
    '<path d="M946.878528 77.489862 600.078011 77.489862c-17.692964 0-32.05609 14.364149-32.05609 32.158421l0 317.166593c0 18.028609 14.364149 32.219819 32.05609 32.219819l346.800517 0c17.886369 0 32.260751-14.20042 32.260751-32.219819L979.13928 109.648282C979.13928 91.854011 964.764897 77.489862 946.878528 77.489862zM890.614084 358.52863c0 10.261715-8.184403 18.34481-18.364253 18.34481L674.788573 376.87344c-10.06831 0-18.252713-8.083096-18.252713-18.34481l0-180.582845c0-10.128685 8.184403-18.314111 18.252713-18.314111l197.460234 0c10.190083 0 18.364253 8.184403 18.364253 18.314111L890.61306 358.52863z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M521.424138 91.275843c-238.699474 0-432.193373 193.46013-432.193373 432.193373 0 238.669798 193.493899 432.193373 432.193373 432.193373 238.70152 0 432.193373-193.522552 432.193373-432.193373C953.616488 284.735973 760.124635 91.275843 521.424138 91.275843zM804.83186 805.938566c-36.656875-83.381036-109.390409-147.099243-198.603267-171.298388 54.397934-29.951149 91.273796-87.787392 91.273796-154.286945 0-97.262184-78.831416-176.078251-176.078251-176.078251-97.244788 0-176.078251 78.816067-176.078251 176.078251 0 68.000743 38.626739 126.901225 95.105055 156.229181-88.571245 26.260084-160.149467 91.726098-194.836477 176.360683C169.142793 740.065276 121.2449 637.456317 121.2449 523.468193c0-221.035162 179.160449-400.178215 400.178215-400.178215 221.020836 0 400.178215 179.143053 400.178215 400.178215C921.602354 633.736599 876.973924 733.562165 804.83186 805.938566z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)