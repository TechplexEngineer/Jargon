UI.registerHelper('csl', function(context, options) {

	if(context && _.isArray(context)) {
		var out = "";
		for (var i = 0; i < context.length; i++) {
			if (options && _.isString(options)) {
				out += "<a href=\""+pathFor(options, {name:context[i]} )+"\">"+context[i]+"</a>";
			} else {
				out += context[i];
			}

			if (i != context.length-1)
				out += ", ";
		}
		return out;
	} else {
		return context;
	}
});

