$(function() {
	$("#login").submit(function(event) {
	 
	  /* stop form from submitting normally */
	  event.preventDefault();
	 
	  /* get some values from elements on the page: */
	  var $form = $( this ),
	      username = $form.find( 'input[name="username"]' ).val(),
	      password = $form.find( 'input[name="password"]' ).val(),
	      url = $form.attr( 'action' );
	 
	  /* Send the data using post */
	  var posting = $.post( url, { username: username, password: password } );
	 
	  /* Put the results in a div */
	  posting.done(function( data ) {
	  	alert(data);
	  	console.log(data);
	    //var content = $( data ).find( '#content' );
	    //$( "#result" ).empty().append( content );
	  });
	
	});

});