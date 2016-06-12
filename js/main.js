// swal({
// 	title: "Are you sure?",
// 	text: "You will not be able to recover this imaginary file!",
// 	type: "warning",
// 	showCancelButton: true,
// 	confirmButtonColor: "#DD6B55",
// 	confirmButtonText: "Yes, delete it!",
// 	closeOnConfirm: false 
// },

// function wannaEmail(){
// 	swal("Deleted!", "Your imaginary file has been deleted.", "success");
// });


function wannaEmail(){
	swal({
		title: "Want your project here?",
		text: "Why not let's talk about your new project? Write me a brief email and I will get back to you with further information!! I promise!!",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#313E96",
		confirmButtonText: "Yes, Sure!",
		cancelButtonText: "No, I am busy today!",
		closeOnConfirm: false,
		closeOnCancel: false }, 
	
	function(isConfirm){
		if (isConfirm) {
			swal("Great!", "Here is my email address hello@syedsami.com", "success");
		}
		else {
			swal("No problemo!!", "Probably next time. :)");
		}
	});
}