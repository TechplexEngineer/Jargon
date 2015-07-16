UI.registerHelper('csl', function(context, options) {
	console.log(context, _.isArray(context));
	if(context && _.isArray(context)) {
		var out = "";
		for (var i = 0; i < context.length; i++) {
			out += context[i];
			if (i != context.length-1)
				out += ", ";
		}
		return out;
	} else {
		return context;
	}
});