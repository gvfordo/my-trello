window.Trellino.Collections.ListCards = Backbone.Collection.extend({
	url: "/cards",
	
	model : window.Trellino.Models.Card,
	
	initialize : function(models, options) {
		this.list = options.list;
		this.comparator = 'rank';
	}
})