window.Trellino.Collections.BoardLists = Backbone.Collection.extend({
	url: function(board_id){
		return this.board.url() + "/lists"
	},
	
	model: window.Trellino.Models.List,
	
	initialize: function(models, options) {
		this.board = options.board;
		this.comparator = 'rank';
	}
})