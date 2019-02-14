
//var count = 5;
var totalCount = 1;
var options = { dimBackground: true };
function captureImage() {
    if(totalCount<=5){
                navigator.camera.getPicture(onSuccess, onFail, { 
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
            });
            function onSuccess(imageData) {
                var image = document.getElementById('img' + totalCount);
                image.src = "data:image/jpeg;base64," + imageData;
                $('#image' + totalCount).val(imageData);
              //  document.getElementById('removeButton' + totalCount).style.visibility = 'visible';
              
                totalCount++;
                toggleImagesValues();
            }
            function onFail(message) {
                alert('Failed because: ' + message);
            }  
    }else {
        messgaeAlert();
    }
  
}

function getImage() {
    if(totalCount<=5) {
         navigator.camera.getPicture(onSuccess, onFail, { 
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            });
            function onSuccess(imageData) {
                var image = document.getElementById('img' + totalCount);
                image.src = "data:image/jpeg;base64," + imageData;
                $('#image' + totalCount).val(imageData);
              //  document.getElementById('removeButton' + totalCount).style.visibility = 'visible';
              
                totalCount++;
                toggleImagesValues();
            }
            function onFail(message) {
                alert('Failed because: ' + message);
            }  
    }
    else {
        messgaeAlert();
    }
}



function messgaeAlert() {
    if(totalCount>5) { 
       // alert('You can not upload more than 5 Images');
       $.notify("You can not upload more than 5 Images", {color: "#fff", background: "#6db7c2"});
       //$.notify("Alert!", {delay:2000});
    }
}

function removeImage(number) {
    
    var imageSrc = document.getElementById('img' + number).src;
    var imageValue = document.getElementById('image' + number).value;

        for (var i = number; i <= 4; i++) {
            var src = document.getElementById('img' + (parseInt(i)+1)).src;
            var value = document.getElementById('image' + (parseInt(i)+1)).value;
            document.getElementById('img' + (parseInt(i)+1)).src = "#";
            document.getElementById('image' + (parseInt(i)+1)).value='';
            document.getElementById('img' + i).src = src;
            document.getElementById('image' + i).value=value;
        }
        document.getElementById('img5').src = "#";
        document.getElementById('image5').value = '';
        totalCount--;
        toggleImagesValues();

}

function toggleImagesValues() {
    for (var i = 5; i > 0; i--) { 
      var storedValue = document.getElementById('image' + i).value;
         if(storedValue == '') {
             document.getElementById('removeButton' + i).style.visibility = 'hidden';
         }else {
            document.getElementById('removeButton' + i).style.visibility = 'visible';
         }
    }
}

function loadCombos() {
   loadFolder();
   loadMajorCategories();
  // loadType();
   //loadBox();
}

/*function loadType() {
   
 $.ajax({
            url: 'http://dentrisdms.com/appcontroller.php',
            method: "GET",
            data: {
                action: 'viewtype'
            }, 
            success: function(data){  
            
                var comboValues = data;
                if(comboValues != undefined && comboValues.response){ 
                  for (var i = 0 ; i <=comboValues.data.length -1; i++) {
                      $("#type").append($("<option />").val(comboValues.data[i].type).text(comboValues.data[i].type));
                  }
                  if(window.localStorage.getItem('type') != undefined && window.localStorage.getItem('type') != '') {
                    $("#type").val(window.localStorage.getItem('type'));
                  }
                }
                else {
                    alert('Failed' + comboValues.message);
                }
                       
            },
            error: function(e) {
               // document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false);
                var networkState = navigator.connection.type;  
                if(networkState == Connection.NONE){
                    alert('No network connection');
                }else{
                    alert('Error: ' + e.message);
                }
            },
        });
}*/

function loadFolder() {
 //   document.addEventListener("deviceready", function(){SpinnerPlugin.activityStart("Please wait Loading...", options); }, false);
 $.ajax({
            url: 'http://dentrisdms.com/appcontroller.php',
            method: "GET",
            data: {
                action: 'viewfolder'
            }, 
             async: false,
            success: function(data){  
         //   document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false); 
                var comboValues = JSON.parse(data); 
                if(comboValues != undefined && comboValues.response){ 
                  for (var i = 0 ; i <=comboValues.data.length -1; i++) {
                      $("#folder_name").append($("<option />").val(comboValues.data[i].fid).text(comboValues.data[i].name));
                  }
                  if(window.localStorage.getItem('folder') != undefined && window.localStorage.getItem('folder') != '') {
                    $("#folder_name").val(window.localStorage.getItem('folder'));
                  }
                }
                 else {
                    alert('Failed' + comboValues.message);
                }
                    
                       
            },
            error: function(e) {
             //   document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false);
                var networkState = navigator.connection.type;  
                if(networkState == Connection.NONE){
                    alert('No network connection');
                }else{
                    alert('Error: ' + e.message);
                }
            },
        });
}

/*function loadBox() {
  //  document.addEventListener("deviceready", function(){SpinnerPlugin.activityStart("Please wait Loading...", options); }, false);
 $.ajax({
            url: 'http://dentrisdms.com/appcontroller.php',
            method: "GET",
            data: {
                action: 'viewbox'
            }, 
             async: false,
            success: function(data){  
        //    document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false); 
                var comboValues = data; 
                if(comboValues != undefined && comboValues.response){ 
                  for (var i = 0 ; i <=comboValues.data.length -1; i++) {
                      $("#box").append($("<option />").val(comboValues.data[i].name).text(comboValues.data[i].name));
                  }
                  if(window.localStorage.getItem('box') != undefined && window.localStorage.getItem('box') != '') {
                    $("#box").val(window.localStorage.getItem('box'));
                  }
                   
                }
                 else {
                    alert('Failed' + comboValues.message);
                }
                    
                       
            },
            error: function(e) {
               // document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false);
                var networkState = navigator.connection.type;  
                if(networkState == Connection.NONE){
                    alert('No network connection');
                }else{
                    alert('Error: ' + e.message);
                }
            },
        });
}*/

var arr = [];
$(document).ready(function () {
   
    $(".add_asset_form").validate({ // initialize the plugin
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
         
    // document.addEventListener("deviceready", function(){SpinnerPlugin.activityStart("Please wait Loading...", options); }, false);
         
        // var formData = new FormData($(".add_asset_form")[0]);
         var formData = $('.add_asset_form').serializeArray();
         var formJsonData = getFormData(formData);
         arr.push(getFormData(formData));

         console.log(JSON.stringify(arr));
         $.notify("Record Successfully Added", {color: "#fff", background: "#6db7c2",icon: "check"});
        $("#image1").val("");
        $("#image2").val("");
        $("#image3").val("");
        $("#image4").val("");
        $("#image5").val("");
        document.getElementById('img1').src = "#";
        document.getElementById('img2').src = "#";
        document.getElementById('img3').src = "#";
        document.getElementById('img4').src = "#";
        document.getElementById('img5').src = "#";
        $("#f5keytext").val("");
        $("#f5keydate").val("");
       // $(".imagebuttons").hide();
       document.getElementById('removeButton1').style.visibility = 'hidden';
       document.getElementById('removeButton2').style.visibility = 'hidden';
       document.getElementById('removeButton3').style.visibility = 'hidden';
       document.getElementById('removeButton4').style.visibility = 'hidden';
       document.getElementById('removeButton4').style.visibility = 'hidden';
        totalCount = 1;
            return false;
     }
 });
 $('.requiredfield').each(function() {
        $(this).rules('add', {
            required: true
        });
    });
});

function checkArrayData() {
    if(arr.length > 0) {
        saveToServer();
    }else {
        alert('Add to local First !');
    }
}

function saveToServer() {
    var options = { dimBackground: true };
        document.addEventListener("deviceready", function(){SpinnerPlugin.activityStart("Please wait Loading...", options); }, false);
         $.ajax({
            url: 'http://dentrisdms.com/appcontroller.php',
            method: "POST",
            data: {
                action: 'uploadimagewithjson',
                formdetails: JSON.stringify(arr)
            }, 
            success: function(data){   
                document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false);
                var values = data; 
                if(values.response ) {
                    alert('Your data has been ' +values.message);
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
}


function getFolderValue(value) {
    window.localStorage.setItem('folder', value);
}
function getMajorCategoriesValue(value) {
  window.localStorage.setItem('majorCategory', value);
  getMinorCategories();
}
function getMinorCategories() {
  if($("#major_id").val() != "" && $("#major_id").val() != undefined) {
    $.ajax({
            url: 'http://dentrisdms.com/appcontroller.php',
            method: "GET",
            data: {
                action: 'viewminorcategories',
                major_id: $("#major_id").val()
            }, 
             async: false,
            success: function(data){  
        //    document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false); 
                var comboValues = data; 
                if(comboValues != undefined && comboValues != ''){ 
                    $("#minor_id").empty();
                    $("#minor_id").append("<option value=''>Select Minor Category</option>");
                       if(comboValues.data.length > 0) {
                           for (var i = 0 ; i <=comboValues.data.length -1; i++) {
                           $("#minor_id").append($("<option />").val(comboValues.data[i].name).text(comboValues.data[i].name));
                        }    
                    }
                                 
                }
                 else {
                    alert('Failed to load minor categories');
                }          
            },
            error: function(e) {
               // document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false);
                var networkState = navigator.connection.type;  
                if(networkState == Connection.NONE){
                    alert('No network connection');
                }else{
                    alert('Error: ' + e.message);
                }
            },
        });
  }else {
        $("#minor_id").empty();
        $("#minor_id").append("<option value=''>Select Minor Category</option>");
  }
   
}
// function getTypeValue(value) {
//     window.localStorage.setItem('type', value);
// }
// function getBoxValue(value) {
//     window.localStorage.setItem('box', value);
// }

function getFormData(data) {
   var unindexed_array = data;
   var indexed_array = {};

   $.map(unindexed_array, function(n, i) {
    indexed_array[n['name']] = n['value'];
   });

   return indexed_array;
}

function loadMajorCategories() {
   
 $.ajax({
            url: 'http://dentrisdms.com/appcontroller.php',
            method: "GET",
            data: {
                action: 'viewmajorcategories'
            },
            success: function(data){  
                var comboValues = data;
                if(comboValues != undefined && comboValues.response){ 
                  for (var i = 0 ; i <=comboValues.data.length -1; i++) {
                      $("#major_id").append($("<option />").val(comboValues.data[i].id).text(comboValues.data[i].name));
                  }
                  if(window.localStorage.getItem('majorCategory') != undefined && window.localStorage.getItem('majorCategory') != '') {
                    $("#major_id").val(window.localStorage.getItem('majorCategory'));
                  }
                  getMinorCategories();
                }
                else {
                    alert('Failed to load major categories');
                }
                       
            },
            error: function(e) {
               // document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false);
                var networkState = navigator.connection.type;  
                if(networkState == Connection.NONE){
                    alert('No network connection');
                }else{
                    alert('Error: ' + e.message);
                }
            },
        });
}

