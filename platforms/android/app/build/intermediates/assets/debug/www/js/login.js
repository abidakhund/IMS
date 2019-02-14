function verifyLogin(){

	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;    
	
	if(username != "" || password != "") {
		var options = { dimBackground: true };
		document.addEventListener("deviceready", function(){SpinnerPlugin.activityStart("Please wait Loading...", options); }, false);
		 $.ajax({
            url: 'http://dentrisdms.com/appcontroller.php',
            method: "GET",
            data: {
            	action: 'login',
                fname: username,
                password: password
            }, 
            success: function(data){   
            	document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false);
            	var values = data; 
            	if(values.message == 'success' && values.response ) {
            		window.location = "dashboard.html";
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
	}else  {
 		alert('Required User Name & Password');
 		//window.location = "dashboard.html";
	}

  }


