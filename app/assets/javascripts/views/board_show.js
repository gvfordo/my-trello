window.Trellino.Views.BoardShowView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.model, "sync change", this.render);
		this.listenTo(this.model.lists(), "sync change add", this.render);
	},
	
	events: {
		"click button.new-list" : "newList",
		"click" : "hidePopovers"
	},
	
	templates: JST['boards/show'],
	
	render: function(){
		var that = this;
		var renderedContent = this.templates({ board: that.model });
		
		this.$el.html(renderedContent);
		$('.list-wrapper').html(this.renderListSubViews());
		$('.board-lists').sortable({ 
			cursor: "move",
		  stop: that.finishListSort.bind(that),
		  placeholder: "temp-list" });
		return this;
	},
	
	renderListSubViews : function() {
		var $subLists = $('<div class="board-lists">');
		var boardView = this;
		// var $subLists.addClass("board-lists")
		this.model.lists().sort(function() {
			
		}).forEach(function(this_list) {
			var listContent = new window.Trellino.Views.ListShowView({ 
					model: this_list,
				  boardView: boardView
			});
			var renderedList = listContent.render().$el;
			$subLists.append(renderedList);
		});
		return $subLists;
	},
	
	newList : function(event) {
		event.preventDefault();
		var that = this;
		var newListForm = new Trellino.Views.NewListForm({
			board: that.model,
			rank: that.model.lists().length
		});
		$('.board-lists').append(newListForm.render().$el);
	},
	
	finishListSort: function (event, ui) {
		var lists = $('.board-lists').children()
	  for(var i = 0; i < lists.length; i++) {
			// debugger
			
			this.model.lists().get($($(lists[i])
			.find('.list-cards')).data('list-id')).set("rank", i);
			// debugger
	  }
		this.model.lists().forEach( function(list) {
			list.save({ rank: list.get('rank')}, {patch: true});
		});
	},
	
	hidePopovers : function(event) {

	}
});