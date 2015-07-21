//nasty hack based on http://git.io/vmjNG
pathFor = function (routeName, options) {

	var route = Router.routes[routeName];
	return route.path(options, {query: undefined, hash: undefined})

};