function quote(author, quote, color){
	this.author=author;
	this.quote=quote;
	this.color=color;
}

var arr=[];
arr.push(new quote("Jaws", "You're gonna need a bigger boat.", "#f39c12"));
arr.push(new quote("Little Cesar", "Mother of mercy, is this the end of Rico?", "#333399"));
arr.push(new quote("The pride of the Yenkees", "Today, I consider myself the luckiest man on the face of the earth.", "#77b1a9"));

$(document).ready(function(){
	var html_std=arr[0].author+"<br><br>"+arr[0].quote;
	$(".quote").html(html_std);
		$(".quote").css("color", arr[0].color);
		$("#link").attr("href", "https://twitter.com/intent/tweet?text="+arr[0].author+" - "+arr[0].quote);
		$("h1").css("color", arr[0].color);
	$(".new-quote").on("click", function(val){
		var i=Math.floor(Math.random()*(arr.length));
		var html=arr[i].author+"<br><br>"+arr[i].quote;
		$(".quote").html(html);
		$(".quote").css("color", arr[i].color);
		$("#link").attr("href", "https://twitter.com/intent/tweet?text="+arr[i].author+" - "+arr[i].quote);
		$("h1").css("color", arr[i].color);
	});
});