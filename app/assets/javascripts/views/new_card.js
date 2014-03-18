window.Trellino.Views.NewCardForm = Backbone.View.extend({
	
	initialize: function(options){
		this.list = options.list;
		this.rank = options.rank;
	},
	
	className : 'card-div',
	
	events: {
		"submit form" : "createCard",
		"click .remove-form" : "removeForm"
	},
	
	template: JST['cards/new'],
	
	render: function() {
		var renderedContent = this.template({ 
				list: this.list,
			  rank: this.rank
		})
		this.$el.html(renderedContent)
		return this;
	},
	
	createCard: function(event) {
		event.preventDefault()
		var $form = $(event.target);
		var data = $form.serializeJSON();
		var that = this;
		data = _.extend({ list: this.list }, data)
		var card = new window.Trellino.Models.Card(data);
		card.save({}, {
			success: function (newCard) {
				debugger
				that.list.cards().add(newCard);
			}
		});
  	$form.parent().remove()
	},
	
	removeForm: function(event) {
		event.preventDefault()
		this.remove();
	} 
	
});