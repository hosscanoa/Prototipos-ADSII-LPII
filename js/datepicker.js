$(function() {
	$("#datepicker").datepicker({
		numberOfMonths : 2,
		showButtonPanel : true
	});
	$("#datepicker").datepicker("option", "dateFormat", ("yy-mm-dd").val());
});
