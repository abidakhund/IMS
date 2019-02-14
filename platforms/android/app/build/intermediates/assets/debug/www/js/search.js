var options = { dimBackground: true };
/* var idbAdapter = new LokiIndexedAdapter('myIdbAdapter');
 var pa = new loki.LokiPartitioningAdapter(idbAdapter);*/
function loadCombosForSearch() {
   loadFolder();
   loadMajorCategories();
 //  loadType();
  // loadBox();
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
                      $("#f5type").append($("<option />").val(comboValues.data[i].type).text(comboValues.data[i].type));
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
}*/

function loadFolder() {
 $.ajax({
            url: 'http://dentrisdms.com/appcontroller.php',
            method: "GET",
            data: {
                action: 'viewfolder'
            }, 
             async: false,
            success: function(data){  
                var comboValues = JSON.parse(data); 
                if(comboValues != undefined && comboValues.response){ 
                  for (var i = 0 ; i <=comboValues.data.length -1; i++) {
                      $("#folder_id").append($("<option />").val(comboValues.data[i].fid).text(comboValues.data[i].name));
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

/*function loadBox() {
 $.ajax({
            url: 'http://dentrisdms.com/appcontroller.php',
            method: "GET",
            data: {
                action: 'viewbox'
            }, 
             async: false,
            success: function(data){  
                var comboValues = data; 
                if(comboValues != undefined && comboValues.response){ 
                  for (var i = 0 ; i <=comboValues.data.length -1; i++) {
                      $("#f5box").append($("<option />").val(comboValues.data[i].name).text(comboValues.data[i].name));
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
}*/


/*function wildSearch() {
    document.addEventListener("deviceready", function(){SpinnerPlugin.activityStart("Please wait Loading...", options); }, false);
 $.ajax({
            url: 'http://dentrisdms.com/appcontroller.php',
            method: "GET",
            data: {
                action: 'search',
                search_type: 'Wide Search',
                f5name: $("#f5name").val(),
                f5box:$("#f5box").val(),
                f5type:$("#f5type").val(),
                f5keytext:$("#f5keytext").val(),
                f5keydate:$("#f5keydate").val(),
                folder_id:$("#folder_id").val(),

                f5keytext:$("#f5keytext2").val(),
                f5keydate:$("#f5keytext3").val(),
                folder_id:$("#f5keydate2").val(),
                f5keytext:$("#f5keyamt1").val(),
                f5keydate:$("#f5keyamt2").val(),
                folder_id:$("#f5keyamt3").val()
            }, 
             async: false,
            success: function(data){  
             document.addEventListener("deviceready", function(){SpinnerPlugin.activityStart("Please wait Loading...", options); }, false);
                var searchData = JSON.parse(data); 
                if(searchData != undefined && searchData.response && searchData != null && searchData != ''){ 

                   var idbAdapter = new LokiIndexedAdapter('myIdbAdapter');
                   var pa = new loki.LokiPartitioningAdapter(idbAdapter);
          // Create/Load lokijs database and set agruments
                  var db = new loki('mobile', {
                    adapter: pa,
                    autoload: true,
                    autoloadCallback : databaseInitialize,
                    autosave: true, 
                    autosaveInterval: 500
                  });
          
                    function databaseInitialize(){
                        var entries = db.addCollection('entries');
                      for (var i = 0 ; i <=searchData.data.length -1; i++) {
                            var imgUrl1 = searchData.data[i].img_url[1];
                            var imgUrl2 = searchData.data[i].img_url[2];
                            var imgUrl3 = searchData.data[i].img_url[3];
                            var imgUrl4 = searchData.data[i].img_url[4];
                            var imgUrl5 = searchData.data[i].img_url[5];
                            
                            entries.insert({
                              folder:searchData.data[i].f5name,
                              box:searchData.data[i].f5box,
                              type:searchData.data[i].f5type,
                              text:searchData.data[i].f5keytext,
                              date:searchData.data[i].f5keydate,
                              file:searchData.data[i].file,
                              img_url1:imgUrl1,
                              img_url2:imgUrl2,
                              img_url3:imgUrl3,
                              img_url4:imgUrl4,
                              img_url5:imgUrl5,
                              counter:i,});                     
                      }

                    }

                      db.saveDatabase();
                          setInterval(function(){ 
                            document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false);
                            window.location = "view_asset.html";
                          }, 1500);
                   
                }
                 else {
                    document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false);
                    alert('No record found');
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
*/


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
         document.addEventListener("deviceready", function(){SpinnerPlugin.activityStart("Please wait Loading...", options); }, false);
         var formData = new FormData($(".add_asset_form")[0]);
        $.ajax({
            url : 'http://dentrisdms.com/appcontroller.php',
            type : $(form).attr('method'),
            data : formData,
            processData : false,
            contentType : false,
            success : function(data) {

                var searchData = JSON.parse(data); 
                if(searchData != undefined && searchData.response && searchData != null && searchData != ''){ 

                   var idbAdapter = new LokiIndexedAdapter('myIdbAdapter');
                   var pa = new loki.LokiPartitioningAdapter(idbAdapter);
          // Create/Load lokijs database and set agruments
                  var db = new loki('mobile', {
                    adapter: pa,
                    autoload: true,
                    autoloadCallback : databaseInitialize,
                    autosave: true, 
                    autosaveInterval: 500
                  });
          
                    function databaseInitialize(){
                        var entries = db.addCollection('entries');
                      for (var i = 0 ; i <=searchData.data.length -1; i++) {
                            var imgUrl1 = searchData.data[i].img_url[0];
                            var imgUrl2 = searchData.data[i].img_url[1];
                            var imgUrl3 = searchData.data[i].img_url[2];
                            var imgUrl4 = searchData.data[i].img_url[3];
                            var imgUrl5 = searchData.data[i].img_url[4];

                            entries.insert({
                              folder:searchData.data[i].f5name,
                            //  box:searchData.data[i].f5box,
                            //  type:searchData.data[i].f5type,
                              text:searchData.data[i].f5keytext,
                              date:searchData.data[i].f5keydate,
                              f5majorcat:searchData.data[i].major,
                              f5minorcat:searchData.data[i].minor,
                              f5keytext2:searchData.data[i].f5keytext2,
                              f5keytext3:searchData.data[i].f5keytext3,
                              f5keydate2:searchData.data[i].f5keydate2,
                              f5keyamt1:searchData.data[i].f5keyamt1,
                              f5keyamt2:searchData.data[i].f5keyamt2,
                              f5keyamt3:searchData.data[i].f5keyamt3,
                              img_url1:imgUrl1,
                              img_url2:imgUrl2,
                              img_url3:imgUrl3,
                              img_url4:imgUrl4,
                              img_url5:imgUrl5,
                              counter:i,});                     
                      }

                    }

                      db.saveDatabase();
                          setInterval(function(){ 
                            document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false);
                            window.location = "view_asset.html";
                          }, 1500);
                   
                }
                 else {
                    document.addEventListener("deviceready", function(){SpinnerPlugin.activityStop(); }, false);
                    alert('No record found');
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
                           $("#minor_id").append($("<option />").val(comboValues.data[i].id).text(comboValues.data[i].name));
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
function getMajorCategoriesValue(value) {
  window.localStorage.setItem('majorCategory', value);
  getMinorCategories();
}