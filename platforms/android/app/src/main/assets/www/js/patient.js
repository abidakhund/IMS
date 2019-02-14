
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


$(document).ready(function () {
   
    $(".add_patient_form").validate({ // initialize the plugin
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
         
         var arr = [];
         var formData = $('.add_patient_form').serializeArray();
         var formJsonData = getFormData(formData);
         arr.push(getFormData(formData));
          var options = { dimBackground: true };
         document.addEventListener("deviceready", function(){SpinnerPlugin.activityStart("Please wait Loading...", options); }, false);
         $.ajax({
            url: "http://hbs.muetmun.com/appcontroller.php",
            method: "POST",
            data: {
                action: 'uploadpatientimage',
                formdetails: JSON.stringify(arr)
            }, 
            success: function(data){   
                document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false);
                var values = data; 
                if(values.response ) {
                    alert('Your data has been ' +values.message);
                    window.location = "patient_form.html";
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

         console.log(JSON.stringify(arr));
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
        $("#chart_num").val("");
        $("#type").val("");
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



function getFormData(data) {
   var unindexed_array = data;
   var indexed_array = {};

   $.map(unindexed_array, function(n, i) {
    indexed_array[n['name']] = n['value'];
   });

   return indexed_array;
}