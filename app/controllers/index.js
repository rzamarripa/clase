function saludarTab1(e){
	var button = Titanium.UI.createButton({
	   title: 'Hello',
	   top: 10,
	   width: 100,
	   height: 50
	});
	button.addEventListener('click',function(e)
	{
	   Titanium.API.info("You clicked the button");
	});
	
	$.wintab1.add(button);
}

var url = "https://pagos.culiacan.gob.mx/mipredio/07000015005004001";
 var client = Ti.Network.createHTTPClient({
     // function called when the response data is available
     onload : function(e) {
         //Ti.API.info("Received text: " + this.responseText["Nombre_Propietario"]);
        var cliente = JSON.parse(this.responseText);
        var tableData = [ 	{title: cliente["Detalle"]["Detalle"][0]["anio"] + " " + cliente["Detalle"]["Detalle"][0]["trimestre"]}, 
        					{title: cliente["Detalle"]["Detalle"][1]["anio"] + " " + cliente["Detalle"]["Detalle"][1]["trimestre"]}, 
        					{title: cliente["Detalle"]["Detalle"][2]["anio"] + " " + cliente["Detalle"]["Detalle"][2]["trimestre"]}, 
        					{title: cliente["Detalle"]["Detalle"][3]["anio"] + " " + cliente["Detalle"]["Detalle"][3]["trimestre"]},
        					{title: cliente["Detalle"]["Detalle"][4]["anio"] + " " + cliente["Detalle"]["Detalle"][4]["trimestre"]} ];

		var table = Ti.UI.createTableView({
		  data: tableData
		});
        $.wintab1.add(table);
        
     },
     // function called when an error occurs, including a timeout
     onerror : function(e) {
         Ti.API.debug(e.error);
         alert('error');
     },
     timeout : 5000  // in milliseconds
 });
 // Prepare the connection.
 client.open("GET", url);
 // Send the request.
 client.send();

$.index.open();