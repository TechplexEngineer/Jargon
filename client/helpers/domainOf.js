UI.registerHelper('domainOf', function(context, options) {

	if(context) {
		var a = document.createElement('a');
	    a.href = context;
	    return a.hostname;
	} else {
		return context;
	}
});