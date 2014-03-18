window.Trellino = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function () { 
		
		window.Trellino.boards = new Trellino.Collections.Boards();
		
		new window.Trellino.Routers.AppRouter();
		Backbone.history.start();   
  }
};

Backbone.CompositeView = Backbone.View.extend({
	
	addSubView: function(selector, view) {
		var selectorSubviews = 
		this.subviews[selector] || (this.subviews[selector] = []);
		
	selectorSubviews.push(view);
	},
	
	
	//Keys will be jQuery selectors.  Value will be array of views to render
	//into the selector.
	subviews:{}
	
})


$(Trellino.initialize);