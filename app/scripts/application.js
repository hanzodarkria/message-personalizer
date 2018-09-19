define( function( require ) {
	'use strict';

	var Backbone   = require( 'backbone' );
	var Marionette = require( 'marionette' );

	var App        = new Marionette.Application();

	/* Add application regions here */
	App.addRegions( {
		'header'     : '#header',
		'navigation' : '#navigation',
		'content'    : '#content-container'
	} );

	/* Add initializers here */
	App.addInitializer( function() {} );

	return App;
} );