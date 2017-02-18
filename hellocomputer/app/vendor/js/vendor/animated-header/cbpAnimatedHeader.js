var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.header' ),
		didScroll = false,
		changeHeaderOn = 400;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 550 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'header-shrink' );
		}
		else {
			classie.remove( header, 'header-shrink' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();