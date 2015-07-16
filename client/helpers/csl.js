UI.registerHelper('csl', function(context, options) {
	console.log(context);
	if(context && _.isArray(context)) {
		var out = "";
		for (var i = 0; i < context.length; i++) {
			out += context[i];
			if (i != context.length)
				out += ", ";
		};
	} else {
		return context;
	}
});