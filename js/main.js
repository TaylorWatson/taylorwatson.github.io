$('.changing.example .demo.segment')
.visibility({
  once       : false,
  continuous : true,
  onPassing  : function(calculations) {
    var newColor = 'rgba(0, 0, 0, ' + calculations.percentagePassed +')';
    $(this)
      .css('background-color', newColor)
    ;
  }
})
;


$("#night-toggle").click(function() {
    $('body').toggleClass('night-mode');
    return false;
});



// Image model for swift calculator portfolio segment
$(document).ready(function() {
    // Modal 1
    $('#popup-1').slickModals({
        // Hide on pages
        hideOnPages: ['/page1/','/page2/','/page3/'],
        // Popup type
        popupType: 'none',
        delayTime: 0,
        scrollTopDistance: 400,
        // Auto closing
        autoClose: false,
        autoCloseDelay: 10000,
        // Statistics
        enableStats: false,
        fileLocation: 'slickStats/collect.php',
        modalName: 'My awesome modal 1',
        modalSummary: 'Lorem ipsum dolor sit amet',
        callToAction: 'cta',
        // Popup cookies
        setCookie: false,
        cookieDays: 30,
        cookieTriggerClass: 'setCookie-1',
        cookieName: 'slickModal-1',
        cookieScope: 'domain',
        // Overlay styling
        overlayVisible: true,
        overlayClosesModal: true,
        overlayColor: 'rgba(0, 0, 0, 0.8)',
        overlayAnimationDuration: '0.4',
        overlayAnimationEffect: 'fadeIn',
        // Background effects
        pageAnimationDuration: '0.4',
        pageAnimationEffect: 'none',
        pageBlurRadius: '6px',
        pageScaleValue: '0.9',
        pageMoveDistance: '30%',
        // Popup styling
        popupWidth: '403px',
        popupHeight: '280px',
        popupLocation: 'center',
        popupAnimationDuration: '0.2',
        popupAnimationEffect: 'flowIn',
        popupBoxShadow: '0 0 20px rgba(0,0,0,0.4)',
        popupBackground: 'rgba(255, 255, 255, 1)',
        popupRadius: '4px',
        popupMargin: '30px',
        popupPadding: '30px',
        // Mobile rules
        showOnMobile: true,
        responsive: true,
        mobileBreakPoint: '480px',
        mobileLocation: 'center',
        mobileWidth: '90%',
        mobileHeight: '280px',
        mobileRadius: '0px',
        mobileMargin: '0px',
        mobilePadding: '24px',
        // Animate content
        contentAnimation: true,
        contentAnimationEffect: 'slideBottom',
        contentAnimationDuration: '0.4',
        contentAnimationDelay: '0.4',
        // Youtube videos
        videoSupport: false,
        videoAutoPlay: false,
        videoStopOnClose: false,
        // Close and reopen button
        addCloseButton: true,
        buttonStyle: 'icon',
        enableESC: true,
        reopenClass: 'openSlickModal-1',
        // Additional events
        onSlickLoad: function() {
            // Your code goes here
        },
        onSlickClose: function() {
            // Your code goes here
        }
    });
});




// Image model for shifts portfolio segment
$(document).ready(function() {
    // Modal 2
    $('#popup-2').slickModals({
        // Hide on pages
        hideOnPages: ['/page1/','/page2/','/page3/'],
        // Popup type
        popupType: 'none',
        delayTime: 0,
        scrollTopDistance: 400,
        // Auto closing
        autoClose: false,
        autoCloseDelay: 10000,
        // Statistics
        enableStats: false,
        fileLocation: 'slickStats/collect.php',
        modalName: 'My awesome modal 1',
        modalSummary: 'Lorem ipsum dolor sit amet',
        callToAction: 'cta',
        // Popup cookies
        setCookie: false,
        cookieDays: 30,
        cookieTriggerClass: 'setCookie-1',
        cookieName: 'slickModal-2',
        cookieScope: 'domain',
        // Overlay styling
        overlayVisible: true,
        overlayClosesModal: true,
        overlayColor: 'rgba(0, 0, 0, 0.8)',
        overlayAnimationDuration: '0.4',
        overlayAnimationEffect: 'fadeIn',
        // Background effects
        pageAnimationDuration: '0.4',
        pageAnimationEffect: 'none',
        pageBlurRadius: '6px',
        pageScaleValue: '0.9',
        pageMoveDistance: '30%',
        // Popup styling
        popupWidth: '403px',
        popupHeight: '280px',
        popupLocation: 'center',
        popupAnimationDuration: '0.2',
        popupAnimationEffect: 'flowIn',
        popupBoxShadow: '0 0 20px rgba(0,0,0,0.4)',
        popupBackground: 'rgba(255, 255, 255, 1)',
        popupRadius: '4px',
        popupMargin: '30px',
        popupPadding: '30px',
        // Mobile rules
        showOnMobile: true,
        responsive: true,
        mobileBreakPoint: '480px',
        mobileLocation: 'center',
        mobileWidth: '90%',
        mobileHeight: '280px',
        mobileRadius: '0px',
        mobileMargin: '0px',
        mobilePadding: '24px',
        // Animate content
        contentAnimation: true,
        contentAnimationEffect: 'slideBottom',
        contentAnimationDuration: '0.4',
        contentAnimationDelay: '0.4',
        // Youtube videos
        videoSupport: false,
        videoAutoPlay: false,
        videoStopOnClose: false,
        // Close and reopen button
        addCloseButton: true,
        buttonStyle: 'icon',
        enableESC: true,
        reopenClass: 'openSlickModal-2',
        // Additional events
        onSlickLoad: function() {
            // Your code goes here
        },
        onSlickClose: function() {
            // Your code goes here
        }
    });
});




// Image model for todo portfolio segment
$(document).ready(function() {
    // Modal 3
    $('#popup-3').slickModals({
        // Hide on pages
        hideOnPages: ['/page1/','/page2/','/page3/'],
        // Popup type
        popupType: 'none',
        delayTime: 0,
        scrollTopDistance: 400,
        // Auto closing
        autoClose: false,
        autoCloseDelay: 10000,
        // Statistics
        enableStats: false,
        fileLocation: 'slickStats/collect.php',
        modalName: 'My awesome modal 3',
        modalSummary: 'Lorem ipsum dolor sit amet',
        callToAction: 'cta',
        // Popup cookies
        setCookie: false,
        cookieDays: 30,
        cookieTriggerClass: 'setCookie-1',
        cookieName: 'slickModal-2',
        cookieScope: 'domain',
        // Overlay styling
        overlayVisible: true,
        overlayClosesModal: true,
        overlayColor: 'rgba(0, 0, 0, 0.8)',
        overlayAnimationDuration: '0.4',
        overlayAnimationEffect: 'fadeIn',
        // Background effects
        pageAnimationDuration: '0.4',
        pageAnimationEffect: 'none',
        pageBlurRadius: '6px',
        pageScaleValue: '0.9',
        pageMoveDistance: '30%',
        // Popup styling
        popupWidth: '403px',
        popupHeight: '280px',
        popupLocation: 'center',
        popupAnimationDuration: '0.2',
        popupAnimationEffect: 'flowIn',
        popupBoxShadow: '0 0 20px rgba(0,0,0,0.4)',
        popupBackground: 'rgba(255, 255, 255, 1)',
        popupRadius: '4px',
        popupMargin: '30px',
        popupPadding: '30px',
        // Mobile rules
        showOnMobile: true,
        responsive: true,
        mobileBreakPoint: '480px',
        mobileLocation: 'center',
        mobileWidth: '90%',
        mobileHeight: '280px',
        mobileRadius: '0px',
        mobileMargin: '0px',
        mobilePadding: '24px',
        // Animate content
        contentAnimation: true,
        contentAnimationEffect: 'slideBottom',
        contentAnimationDuration: '0.4',
        contentAnimationDelay: '0.4',
        // Youtube videos
        videoSupport: false,
        videoAutoPlay: false,
        videoStopOnClose: false,
        // Close and reopen button
        addCloseButton: true,
        buttonStyle: 'icon',
        enableESC: true,
        reopenClass: 'openSlickModal-3',
        // Additional events
        onSlickLoad: function() {
            // Your code goes here
        },
        onSlickClose: function() {
            // Your code goes here
        }
    });
});


$(document)
.ready(function() {

  // fix menu when passed
  $('.masthead')
    .visibility({
      once: false,
      onBottomPassed: function() {
        $('.fixed.menu').transition('fade in');
      },
      onBottomPassedReverse: function() {
        $('.fixed.menu').transition('fade out');
      }
    })
  ;

  // create sidebar and attach to menu open
  $('.ui.sidebar')
    .sidebar('attach events', '.toc.item')
  ;

})
;