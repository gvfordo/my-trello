window.Trellino.Models.Board = Backbone.Model.extend({
	urlRoot: '/boards',
	
	lists: function() {
		var that = this;
		if(!this._lists) {
			this._lists = new Trellino.Collections.BoardLists([], {
				board: that
			});
			this._lists.fetch({ 
			});
		}
		return this._lists;
	}
	
});