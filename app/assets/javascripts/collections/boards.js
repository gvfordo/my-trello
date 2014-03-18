window.Trellino.Collections.Boards = Backbone.Collection.extend({
	url: '/boards',
	model: window.Trellino.Models.Board,
	
	get_or_fetch: function(board_id) {
		var board = this.get(board_id)
		if(board){
			board.fetch();
			return board;
		} else {
			board = new Trellino.Models.Board({id: board_id})
			board.fetch();
			return board;
		}
		
	}
});