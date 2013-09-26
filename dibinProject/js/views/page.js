define(
[
'jquery',
'underscore',
'backbone' ,
'views/header',
'views/homeContent',
'views/footer'
],
function(
$,
_, 
Backbone,
header,
homeContent,
footer){

	var pageView = Backbone.View.extend({
		el:"body",

		initialize:function(){
			console.log("initialize pageView");
			this.route   	   = window.location.hash;
			this.header   	   = new header();
			this.homeContent   = new homeContent();
			this.footer		   = new footer();
		},
		showHeader:function(){
			this.header.show();
		},
		showHome:function(){
			this.homeContent.show();
		},
		showFooter:function(){
			this.footer.show();
		}
	});
	return pageView;
});