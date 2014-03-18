window.Trellino.Models.List = Backbone.Model.extend({
	initialize: function(options) {
		// ?\this.board = options.board
	},
	
	// urlRoot : function(options){
// 		return "/boards/"+this.board.id+"/lists"
// 	},
// 	
	cards: function() {
		var that = this;
		if(!this._cards) {
			this._cards = new Trellino.Collections.ListCards([], {
				list: that
			});

		}
		return this._cards;
	},
	
	parse: function(json) {
		if(json.cards) {
			this.cards().set(json.cards);
			delete json.cards;
		}
		
		return json;
	}

});