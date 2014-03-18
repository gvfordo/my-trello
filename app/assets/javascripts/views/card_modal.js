window.Trellino.Views.CardModalView = Backbone.View.extend({
	
	intitialize: function() {
		
	},
	
	events: {
		
	
	},
	
	template: JST['cards/modal'],
	
	render: function() {
		//emtpy array will be this.collection
		var renderedContent = this.template({ todos: [] });
		
		this.$el.html(renderedContent);
		return this;
	}
	
	
	
})