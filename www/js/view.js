 var idbAdapter = new LokiIndexedAdapter('myIdbAdapter');
 var pa = new loki.LokiPartitioningAdapter(idbAdapter);
 var entriesCounter = 1;

 function loadSearchData() {
 	var folder = '';
 	//var box = '';
 	//var type = '';
 	var text = '';
 	var date = '';
 	var imgUrl1 = '';
	var imgUrl2 = '';
 	var imgUrl3 = '';
 	var imgUrl4 = '';
 	var imgUrl5 = '';

 	var f5keydate2 = '';
 	var f5keytext2 = '';
	var f5keytext3 = '';
 	var f5keyamt1 = '';
 	var f5keyamt2 = '';
 	var f5keyamt3 = '';
 	var f5majorcat = '';
 	var f5minorcat = '';



var db = new loki('mobile', 
      {
      	adapter: pa,
        autoload: true,
        autoloadCallback : loadHandler
      }); 

function loadHandler() {
    var entries = db.getCollection('entries');
    if (!entries) {
        entries = db.addCollection('entries');
    }
    if(entries.get(1).folder !=null) {
    	folder = entries.get(1).folder;
    }
   /* if(entries.get(1).box !=null) {
    	box = entries.get(1).box;
    }
    if(entries.get(1).type !=null) {
    	type = entries.get(1).type;
    }*/
    if(entries.get(1).text !=null) {
    	text = entries.get(1).text;
    }
    if(entries.get(1).date !=null) {
    	date = entries.get(1).date;
    }
    if(entries.get(1).file !=null) {
    	file = entries.get(1).file;
    }


    if(entries.get(1).f5keydate2 !=null) {
    	f5keydate2 = entries.get(1).f5keydate2;
    }
    if(entries.get(1).f5keytext2 !=null) {
    	f5keytext2 = entries.get(1).f5keytext2;
    }
    if(entries.get(1).f5keytext3 !=null) {
    	f5keytext3 = entries.get(1).f5keytext3;
    }
    if(entries.get(1).f5keyamt1 !=null) {
    	f5keyamt1 = entries.get(1).f5keyamt1;
    }
    if(entries.get(1).f5keyamt2 !=null) {
    	f5keyamt2 = entries.get(1).f5keyamt2;
    }
    if(entries.get(1).f5keyamt3 !=null) {
    	f5keyamt3 = entries.get(1).f5keyamt3;
    }
    if(entries.get(1).f5majorcat !=null) {
    	f5majorcat = entries.get(1).f5majorcat;
    }
    if(entries.get(1).f5minorcat !=null) {
    	f5minorcat = entries.get(1).f5minorcat;
    }

    if(entries.get(1).img_url1 !=null && entries.get(1).img_url1 != undefined) {
    	imgUrl1 = entries.get(1).img_url1;
    }
    if(entries.get(1).img_url2 !=null && entries.get(1).img_url2 != undefined) {
    	imgUrl2 = entries.get(1).img_url2;
    }
    if(entries.get(1).img_url3 !=null && entries.get(1).img_url3 != undefined) {
    	imgUrl3 = entries.get(1).img_url3;
    }
    if(entries.get(1).img_url4 !=null && entries.get(1).img_url4 != undefined) {
    	imgUrl4 = entries.get(1).img_url4;
    }
    if(entries.get(1).img_url5 !=null && entries.get(1).img_url5 != undefined) {
    	imgUrl5 = entries.get(1).img_url5;
    }
    if(entries.maxId == entriesCounter) {
	    $("#nextBtn").hide();
	    $("#preBtn").hide();
	}
	document.getElementById('counter').innerHTML = 'Showing ' + entriesCounter+  ' of ' +  entries.maxId + ' entries';
	$("#folder").val(folder);
	/*$("#box").val(box);
	$("#type").val(type);*/
	$("#text").val(text);
	$("#date").val(date);

	$("#f5keydate2").val(f5keydate2);
	$("#f5keytext2").val(f5keytext2);
	$("#f5keytext3").val(f5keytext3);
	$("#f5keyamt1").val(f5keyamt1);
	$("#f5keyamt2").val(f5keyamt2);
	$("#f5keyamt3").val(f5keyamt3);

	$("#f5majorcat").val(f5majorcat);
	$("#f5minorcat").val(f5minorcat);

	//$('#assetImage').attr('src', "data:image/png;base64," + file);
	if(imgUrl1 != "") {
		$("#img1").show();
		$('#assetImage1').attr('src', imgUrl1);
	}else {
		$("#img1").hide();
	}
	if(imgUrl2 != "") {
		$("#img2").show();
		$('#assetImage2').attr('src', imgUrl2);
	}else {
		$("#img2").hide();
	}
	if(imgUrl3 != "") {
		$("#img3").show();
		$('#assetImage3').attr('src', imgUrl3);
	}else {
		$("#img3").hide();
	}
	if(imgUrl4 != "") {
		$("#img4").show();
		$('#assetImage4').attr('src', imgUrl4);
	}else {
		$("#img4").hide();
	}
	if(imgUrl5 != "") {
		$("#img5").show();
		$('#assetImage5').attr('src', imgUrl5);
	}else {
		$("#img5").hide();
	}

}

}
function nextEntry() {
	var folder = '';
/* 	var box = '';
 	var type = '';*/
 	var text = '';
 	var date = '';
 	var file = '';

 	var f5keydate2 = '';
 	var f5keytext2 = '';
	var f5keytext3 = '';
 	var f5keyamt1 = '';
 	var f5keyamt2 = '';
 	var f5keyamt3 = '';
 	var f5majorcat = '';
 	var f5minorcat = '';

 	var imgUrl1 = '';
	var imgUrl2 = '';
 	var imgUrl3 = '';
 	var imgUrl4 = '';
 	var imgUrl5 = '';
	entriesCounter++;
	$("#preBtn").show();
	var db = new loki('mobile', 
      {
      	adapter: pa,
        autoload: true,
        autoloadCallback : loadHandler
      }); 

	function loadHandler() {
	    var entries = db.getCollection('entries');
	    if (!entries) {
	        entries = db.addCollection('entries');
	    }
	    document.getElementById('counter').innerHTML = 'Showing ' + entriesCounter+  ' of ' +  entries.maxId + ' entries';
	    if(entries.maxId < entriesCounter) {
	    	$("#nextBtn").hide();

	    }else {
		    if(entries.get(entriesCounter).folder !=null) {
		    	folder = entries.get(entriesCounter).folder;
		    }
		/*    if(entries.get(entriesCounter).box !=null) {
		    	box = entries.get(entriesCounter).box;
		    }
		    if(entries.get(entriesCounter).type !=null) {
		    	type = entries.get(entriesCounter).type;
		    }*/
		    if(entries.get(entriesCounter).text !=null) {
		    	text = entries.get(entriesCounter).text;
		    }
		    if(entries.get(entriesCounter).date !=null) {
		    	date = entries.get(entriesCounter).date;
		    }
		    	// new enries
		    if(entries.get(entriesCounter).f5keydate2 !=null) {
		    	f5keydate2 = entries.get(entriesCounter).f5keydate2;
		    }
		    if(entries.get(entriesCounter).f5keytext2 !=null) {
		    	f5keytext2 = entries.get(entriesCounter).f5keytext2;
		    }
		    if(entries.get(entriesCounter).f5keytext3 !=null) {
		    	f5keytext3 = entries.get(entriesCounter).f5keytext3;
		    }
		    if(entries.get(entriesCounter).f5keyamt1 !=null) {
		    	f5keyamt1 = entries.get(entriesCounter).f5keyamt1;
		    }
		    if(entries.get(entriesCounter).f5keyamt2 !=null) {
		    	f5keyamt2 = entries.get(entriesCounter).f5keyamt2;
		    }
		    if(entries.get(entriesCounter).f5keyamt3 !=null) {
		    	f5keyamt3 = entries.get(entriesCounter).f5keyamt3;
		    }
			if(entries.get(entriesCounter).f5majorcat !=null) {
			    	f5majorcat = entries.get(entriesCounter).f5majorcat;
			 }
			if(entries.get(entriesCounter).f5minorcat !=null) {
			    	f5minorcat = entries.get(entriesCounter).f5minorcat;
			}

		    // end
		    if(entries.get(entriesCounter).img_url1 !=null && entries.get(entriesCounter).img_url1 != undefined) {
		    	imgUrl1 = entries.get(entriesCounter).img_url1;
		    }
		    if(entries.get(entriesCounter).img_url2 !=null && entries.get(entriesCounter).img_url2 != undefined) {
		    	imgUrl2 = entries.get(entriesCounter).img_url2;
		    }
		    if(entries.get(entriesCounter).img_url3 !=null && entries.get(entriesCounter).img_url3 != undefined) {
		    	imgUrl3 = entries.get(entriesCounter).img_url3;
		    }
		    if(entries.get(entriesCounter).img_url4 !=null && entries.get(entriesCounter).img_url4 != undefined) {
		    	imgUrl4 = entries.get(entriesCounter).img_url4;
		    }
		    if(entries.get(entriesCounter).img_url5 !=null && entries.get(entriesCounter).img_url5 != undefined) {
		    	imgUrl5 = entries.get(entriesCounter).img_url5;
		    }					   

		    $("#folder").val(folder);
			/*$("#box").val(box);
			$("#type").val(type);*/
			$("#text").val(text);
			$("#date").val(date);

			$("#f5keydate2").val(f5keydate2);
			$("#f5keytext2").val(f5keytext2);
			$("#f5keytext3").val(f5keytext3);
			$("#f5keyamt1").val(f5keyamt1);
			$("#f5keyamt2").val(f5keyamt2);
			$("#f5keyamt3").val(f5keyamt3);
			$("#f5majorcat").val(f5majorcat);
			$("#f5minorcat").val(f5minorcat);

			//$('#assetImage').attr('src', "data:image/png;base64," + file);
			if(imgUrl1 != "") {
				$("#img1").show();
				$('#assetImage1').attr('src', imgUrl1);
			}else {
				$("#img1").hide();
			}
			if(imgUrl2 != "") {
				$("#img2").show();
				$('#assetImage2').attr('src', imgUrl2);
			}else {
				$("#img2").hide();
			}
			if(imgUrl3 != "") {
				$("#img3").show();
				$('#assetImage3').attr('src', imgUrl3);
			}else {
				$("#img3").hide();
			}
			if(imgUrl4 != "") {
				$("#img4").show();
				$('#assetImage4').attr('src', imgUrl4);
			}else {
				$("#img4").hide();
			}
			if(imgUrl5 != "") {
				$("#img5").show();
				$('#assetImage5').attr('src', imgUrl5);
			}else {
				$("#img5").hide();
			}
			if(entries.maxId == entriesCounter) {
	    		$("#nextBtn").hide();
	    	}

	    }
	}	
}


function preEntry() {
	$("#nextBtn").show();
	var folder = '';
 	/*var box = '';
 	var type = '';*/
 	var text = '';
 	var date = '';

 	var f5keydate2 = '';
 	var f5keytext2 = '';
	var f5keytext3 = '';
 	var f5keyamt1 = '';
 	var f5keyamt2 = '';
 	var f5keyamt3 = '';
 	var f5majorcat = '';
 	var f5minorcat = '';

 	var imgUrl1 = '';
	var imgUrl2 = '';
 	var imgUrl3 = '';
 	var imgUrl4 = '';
 	var imgUrl5 = '';
	entriesCounter--;
	var db = new loki('mobile', 
      {
      	adapter: pa,
        autoload: true,
        autoloadCallback : loadHandler
      }); 

	function loadHandler() {
		
	    var entries = db.getCollection('entries');
	    if (!entries) {
	        entries = db.addCollection('entries');
	    }
	    document.getElementById('counter').innerHTML = 'Showing ' + entriesCounter+  ' of ' +  entries.maxId + ' entries';
	    if(entries.maxId >= entriesCounter && entriesCounter>0) { 
	        if(entries.get(entriesCounter).folder !=null) {
		    	folder = entries.get(entriesCounter).folder;
		    }
		 /*   if(entries.get(entriesCounter).box !=null) {
		    	box = entries.get(entriesCounter).box;
		    }
		    if(entries.get(entriesCounter).type !=null) {
		    	type = entries.get(entriesCounter).type;
		    }*/
		    if(entries.get(entriesCounter).text !=null) {
		    	text = entries.get(entriesCounter).text;
		    }
		    if(entries.get(entriesCounter).date !=null) {
		    	date = entries.get(entriesCounter).date;
		    }
		    // new entries
		    if(entries.get(entriesCounter).f5keydate2 !=null) {
		    	f5keydate2 = entries.get(entriesCounter).f5keydate2;
		    }
		    if(entries.get(entriesCounter).f5keytext2 !=null) {
		    	f5keytext2 = entries.get(entriesCounter).f5keytext2;
		    }
		    if(entries.get(entriesCounter).f5keytext3 !=null) {
		    	f5keytext3 = entries.get(entriesCounter).f5keytext3;
		    }
		    if(entries.get(entriesCounter).f5keyamt1 !=null) {
		    	f5keyamt1 = entries.get(entriesCounter).f5keyamt1;
		    }
		    if(entries.get(entriesCounter).f5keyamt2 !=null) {
		    	f5keyamt2 = entries.get(entriesCounter).f5keyamt2;
		    }
		    if(entries.get(entriesCounter).f5keyamt3 !=null) {
		    	f5keyamt3 = entries.get(entriesCounter).f5keyamt3;
		    }
			if(entries.get(entriesCounter).f5majorcat !=null) {
			    	f5majorcat = entries.get(entriesCounter).f5majorcat;
			 }
			if(entries.get(entriesCounter).f5minorcat !=null) {
			    	f5minorcat = entries.get(entriesCounter).f5minorcat;
			}
			    
		    // end

		    if(entries.get(entriesCounter).img_url1 !=null && entries.get(entriesCounter).img_url1 != undefined) {
		    	imgUrl1 = entries.get(entriesCounter).img_url1;
		    }
		    if(entries.get(entriesCounter).img_url2 !=null && entries.get(entriesCounter).img_url2 != undefined) {
		    	imgUrl2 = entries.get(entriesCounter).img_url2;
		    }
		    if(entries.get(entriesCounter).img_url3 !=null && entries.get(entriesCounter).img_url3 != undefined) {
		    	imgUrl3 = entries.get(entriesCounter).img_url3;
		    }
		    if(entries.get(entriesCounter).img_url4 !=null && entries.get(entriesCounter).img_url4 != undefined) {
		    	imgUrl4 = entries.get(entriesCounter).img_url4;
		    }
		    if(entries.get(entriesCounter).img_url5 !=null && entries.get(entriesCounter).img_url5 != undefined) {
		    	imgUrl5 = entries.get(entriesCounter).img_url5;
		    }	
		    $("#folder").val(folder);
		/*	$("#box").val(box);
			$("#type").val(type);*/
			$("#text").val(text);
			$("#date").val(date);

			$("#f5keydate2").val(f5keydate2);
			$("#f5keytext2").val(f5keytext2);
			$("#f5keytext3").val(f5keytext3);
			$("#f5keyamt1").val(f5keyamt1);
			$("#f5keyamt2").val(f5keyamt2);
			$("#f5keyamt3").val(f5keyamt3);
			$("#f5majorcat").val(f5majorcat);
			$("#f5minorcat").val(f5minorcat);

			//$('#assetImage').attr('src', "data:image/png;base64," + file);
			if(imgUrl1 != "") {
				$("#img1").show();
				$('#assetImage1').attr('src', imgUrl1);
			}else {
				$("#img1").hide();
			}
			if(imgUrl2 != "") {
				$("#img2").show();
				$('#assetImage2').attr('src', imgUrl2);
			}else {
				$("#img2").hide();
			}
			if(imgUrl3 != "") {
				$("#img3").show();
				$('#assetImage3').attr('src', imgUrl3);
			}else {
				$("#img3").hide();
			}
			if(imgUrl4 != "") {
				$("#img4").show();
				$('#assetImage4').attr('src', imgUrl4);
			}else {
				$("#img4").hide();
			}
			if(imgUrl5 != "") {
				$("#img5").show();
				$('#assetImage5').attr('src', imgUrl5);
			}else {
				$("#img5").hide();
			}
			if(entriesCounter == 1) {
				$("#preBtn").hide();
			}
	    }
	    else {
	    	$("#preBtn").hide();
	    }
	 }
}