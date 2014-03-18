window.Trellino.Views.ListShowView = Backbone.View.extend({
	
	initialize: function(options) {
		this.boardView = options.boardView;
		this.listenTo(this.model.cards(), "sync add remove", this.render);
	},
	
	events: {
		"click div.add-card" : "newCard",
		"click div.list-cards" : "showCardModal"
	},
	
	className: 'list-div',
	
	template: JST['lists/show'],
	
	render: function() {
		var renderedContent = this.template({ 
				list: this.model, 
		});
		this.$el.html(renderedContent);
		var that = this;
		this.model.cards().sort().forEach(function(card) {
			var cardSubView = new window.Trellino.Views.CardShowView({ model: card });
			that.$(".list-cards").append(cardSubView.render().$el);
		});
		
		this.$('.list-cards').sortable({
			stop: that.finishedSort.bind(that),
			connectWith: ".list-cards",
			placeholder: "temp-card",
			cursor: "move"
		});
		return this;
	},

	newCard: function(event) {
		event.preventDefault();
		var $clicked = $(event.target);
		//console.log("Add the card to list #" + $clicked.data('list-id'));
		
		var that = this;
		var newCardForm = new Trellino.Views.NewCardForm({
			list: that.model,
			rank: that.model.cards().length
		});
		this.$('.list-cards').append(newCardForm.render().$el);
	},
	
	finishedSort: function(event, ui){
		var cardId = ui.item.children().first().data("card-id");
		var listId = ui.item.parent().data("list-id")
		var card = this.model.cards().get(cardId);
		console.log(card);
		
		card.set("list_id", listId);
		
		var $targetList = $(".list-cards[data-list-id='"+listId+"']")
		var listCards = $targetList.children()
		console.log(listCards);
		
		if(this.model.id !== +listId) {
			this.model.cards().remove(card);
			var newList = this.boardView.model.lists().get(listId);
			var newListCards = newList.cards()
			newListCards.add(card, { silent: true });
		} else {
			var newListCards = this.model.cards();
		}
		
	  for(var i = 0; i < listCards.length; i++) {
	  	var listCard = listCards[i];
			newListCards.get($($(listCard).children()[0]).data('card-id')).set("rank", i);
	  }
		newListCards.forEach(function(card){
			card.save({rank: card.get('rank'), list_id: card.get("list_id")}, {patch: true});
		});
		
		
		//newListCards.sync();
		// Need to reorder cards some how. 
		
		
		// var cards = this.$('.list-card')
		// console.log(cards);
	},
	
	showCardModal: function() {
		//alert("You had to click it dincha' ?");
	}

	
});

