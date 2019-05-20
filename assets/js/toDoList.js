$('ul').on("click", "li", function(){
	$(this).toggleClass("completed");
})

// click on X to delete line
$('ul').on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropagation()
})

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		// grab text from input box
		const toDoText = $(this).val()
		$(this).val("")
		// add new li to ul
		$('ul').append("<li><span><i class='far fa-trash-alt'></i></span> "+ toDoText+"</li>")
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})