window.Trellino.Views.CardShowView = Backbone.View.extend({
	
	initialize: function() {
		
	},
	
	template: JST['cards/show'],
	
	className: 'list-card',
	
	events: {
		"click div.card-div" : "displayCard",
		"click span.card-menu" : "cardMenu"
	},
	
	render: function() {
		var renderedContent = this.template({ card: this.model });
		this.$el.html(renderedContent);
		this.$('.card-menu').popover({html: true, title: "Delete this card?"});
		return this;
	},
	
	displayCard: function(event) {
		event.preventDefault();
		if ($(event.target).hasClass("card-div")) {
			$card = $(event.target);
			// pass in collection of todos here. 
			var cardModal = new Trellino.Views.CardModalView
			//console.log("You clicked card #" + $card.data('card-id'));
			$('body').append(cardModal.render().$el);
			$('#card-modal').modal({
			
			});
		}
	},
	
	cardMenu: function(event) {
		this.$('.card-menu').popover({html: true, title: "Delete this card?"});
		
	}
	
});