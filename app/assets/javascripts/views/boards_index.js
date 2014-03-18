window.Trellino.Views.BoardsIndexView = Backbone.View.extend({
	initialize : function() {
		this.listenTo(this.collection, "sync add", this.render);
	},
	
	events: {
		"click div.board" 				: "showBoard",
		"click button.new-button" : "newBoardForm"
	},
	
	template: JST['boards/index'],
	
	render: function(){
		var that = this;
		var renderedContent = this.template({ boards: that.collection });
		this.$el.html(renderedContent);
		return this
	},
	
	showBoard : function(event) {
		event.preventDefault();
		$board = $(event.target);
		if( $board.hasClass('board-form') || 
		  $board.is('input')) {
		} else {		
			var url = "boards/" + $board.data('id');
			Backbone.history.navigate(url, { trigger: true });
		}
	
	},
	
	newBoardForm : function(){
		var newBoardForm = new Trellino.Views.NewBoardForm();
		
		$('.boards-div').append(newBoardForm.render().$el);
	}
	
});