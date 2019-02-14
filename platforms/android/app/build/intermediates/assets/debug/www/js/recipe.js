var options = { dimBackground: true };
function loadRecipe() {
	 $.ajax({
            url: 'http://mealplanner.dentrisdms.com/appcontroller.php',
            method: "GET",
            data: {
                action: 'get_recipe_list'
            }, 
             async: false,
            success: function(data){  
                var recipes = data.data; 
                if(recipes != undefined && data.response){ 

    				for(i = 0 ; i < recipes.length ; i++){
    					 recipe = recipes[i];
    					 var textBox = $(document.createElement('div')).attr("id", "textBoxDiv");

    					 	textBox.after().html('<h4>'+ recipe.title + ' : </h4>' +
						      '<input type="text" name="' + recipe.id + 
						      '" id="' + recipe.id + '" value="" >');

    					 	textBox.appendTo("#recipes");	
    				}
                }
                 else {
                    alert('Failed' + comboValues.message);
                }
                             
            },
            error: function(e) {
                var networkState = navigator.connection.type;  
                if(networkState == Connection.NONE){
                    alert('No network connection');
                }else{
                    alert('Error: ' + e.message);
                }
            },
        });
}


function generateRecipe() {
	
	var formData = $('#recipe_form').serializeArray();
	var recipe = "";
	var serv = "";
	for (var i = 0; i < formData.length; i++) {
			if (formData[i].value != "") {
				recipe += formData[i].name + ",";
				serv += formData[i].value + ",";
			}

	}

	if(recipe != "" && serv != "") {
		recipe = recipe.slice(0, -1);
		serv = serv.slice(0, -1);
		getRecipeList(recipe,serv);
	}else {
		alert("Fill atleast one field");
	}
	
    
}

function getRecipeList(recipe,serv) {
	document.addEventListener("deviceready", function(){SpinnerPlugin.activityStart("Generating...", options); }, false);
	 $.ajax({
            url: 'http://mealplanner.dentrisdms.com/appcontroller.php',
            method: "GET",
            data: {
                action: 'get_recipe_ingredients',
                recipe: recipe,
                serv: serv
            },
            success: function(data){ 
            	document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false); 
                var tableData = data.data;
                if(tableData != undefined && data.response) {
                	 localStorage.setItem('tableData', JSON.stringify(tableData));
                	 window.location = "recipeList.html";
                }else {
                	alert("No Record Found");
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

