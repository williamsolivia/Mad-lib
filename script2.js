$(document).ready(function(){
	
	$("button").click(function(){
		console.log("YES");
		
		var verb1 = $("#verb1").val();
		var verb2 = $("#verb2").val();
		var noun1 = $("#noun1").val();
		var noun2 = $("#noun2").val();
		var adverb = $("#adverb").val();
		var adjective = $("#adjective").val();
		
		var sentence = noun1  + " " + verb1  + " very " +  adverb  + " to the destination. " +  noun2  + " is " +  adjective  + " and " +  verb2  + " on broadway.";
		console.log(sentence);
		$("#result").html(sentence);
	});
});