
var options = { dimBackground: true };
function getType() {
	 document.addEventListener("deviceready", function(){SpinnerPlugin.activityStart("Please wait Loading...", options); }, false);
	 $.ajax({
            url: 'http://dentrisdms.com/appcontroller.php',
            method: "GET",
            data: {
                action: 'viewtype'
            }, 
            success: function(data){  
             document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false); 
                var comboValues = data;
                var counter = 1;
                if(comboValues != undefined && comboValues.response){ 
                  for (var i = 0 ; i <=comboValues.data.length -1; i++) {
                     /// $("#type").append($("<option />").val(comboValues.data[i].id).text(comboValues.data[i].type));
                    var parent = document.getElementById("typeDiv");
                    var input = document.createElement("input");
                    input.type = "text";
                    input.id = 'typeText'+counter;
                    input.value = comboValues.data[i].type;
                    input.className = 'viewText';
					parent.appendChild(input);
                    $('.viewText').prop('readonly', true);
                    var parentHiddden = document.getElementById("typeText"+counter);
                    var hidden = document.createElement("input");
                    hidden.type = "hidden";
                    hidden.id = "type"+counter;
                    hidden.value = comboValues.data[i].id;
                    parentHiddden.appendChild(hidden);
					counter++;
                  }
                } else {

                	alert(comboValues.message);
                }
            },
            error: function(e) {
            	 document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false); 
                var networkState = navigator.connection.type;  
                if(networkState == Connection.NONE){
                    alert('No network connection');
                }else{
                    alert('Error: ' + e.message);
                }
            },
        });
}
$(document).ready(function () {
   
    $("#add_type_form").validate({ // initialize the plugin
     ignore: [],
     rules: {
            isbn: {
              required: true,
              digits: true,
              maxlength: 13,
              minlength: 13
            },
            modelYear: {
              digits: true,
              maxlength: 4,
              minlength: 4
            }
        },
     submitHandler: function (form) { 
         
     document.addEventListener("deviceready", function(){SpinnerPlugin.activityStart("Please wait Loading...", options); }, false);
         
         var formData = new FormData($("#add_type_form")[0]);
            $.ajax({
                url : $(form).attr('action'),
                type : $(form).attr('method'),
                data : formData,
                processData : false,
                contentType : false,
                success : function(data) {

                document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false);
                if(data.response) {
                    alert('type has been added');
                    window.location = "type.html";
                }
                else {
                    alert('Failed: ' + data.message);
                }
                    
                },
                error : function(e) {
                document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false);
                    
                    var networkState = navigator.connection.type;
                    
                    if(networkState == Connection.NONE){
                        alert('No network connection');
                    }else{
                        alert('Error: ' + e.message);
                    }
                }
            });
            return false;
     }
 });
 $('.requiredfield').each(function() {
        $(this).rules('add', {
            required: true
        });
    });
});


$(document).ready(function(){
    $('body').on('dblclick','.viewText', function() { 
             var id = $(this).children().val();
             var r = confirm("Do you Want to Delete it?");
            if (r == true) {
                    var options = { dimBackground: true };
                    document.addEventListener("deviceready", function(){SpinnerPlugin.activityStart("Please wait Loading...", options); }, false);
                     $.ajax({
                        url: 'http://dentrisdms.com/appcontroller.php',
                        method: "GET",
                        data: {
                            action: 'delete_type',
                            id: id
                        }, 
                        success: function(data){   
                            document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false);
                            var values = data; 
                            if(values.message == 'success' && values.response ) {
                                alert('Your data has been deleted');
                                window.location = "list_type.html";
                            }
                            else {
                                alert(values.message);
                            }
                                   
                        },
                        error: function(e) {
                            document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false);
                            var networkState = navigator.connection.type;  
                            if(networkState == Connection.NONE){
                                alert('No network connection');
                            }else{
                                alert('Error: ' + e.message);
                            }
                        },
                    });
            }
          });
});
