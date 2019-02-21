function getTableData() {
	var tableData = JSON.parse(localStorage.getItem('tableData'));
	generateTable(tableData);
}


function generateTable(tableData) {
	var tBody = "";
	for (var i = 0; i < tableData.length; i++) {
			tBody+= "<tr><td>"+tableData[i].location_name+"</td><td>" + tableData[i].ing_name + "</td><td>" +tableData[i].quantity+"</td><td>" +tableData[i].unit+"</td></tr>";
	}
	  $("table tbody").append(tBody);
}

