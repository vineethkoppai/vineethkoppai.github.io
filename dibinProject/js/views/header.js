define([
'jquery',
'backbone',
'underscore',
'text!templates/header.html'
],
function(
$,
Backbone,
_,
headerTemplate){

	var headerView = Backbone.View.extend({
		el:"#headerContent",
		template:_.template( headerTemplate ),
		events: {
			
		},

		initialize:function(){
			console.log("initialize header");
			this.render();
		},
		render:function(){
			console.log("render header");
			this.$el.html( this.template );
		},
		show:function(){
			console.log("show header");
			this.$el.show();
		},
		hide:function(){
			console.log("hide header");
			this.$el.hide();
		},
		moveImage:function(){

		}
	});
	return headerView;
});