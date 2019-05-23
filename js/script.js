$(document).ready(function() { //comment - код внутри этой функции сработает когда загрузится html документ полностью
	$("#file").change(function() {
		var fileName = $(this)[0]['files'][0]['name'];
		$('.upload_file_name').text(fileName);
	});
});