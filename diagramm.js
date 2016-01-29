 app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
	request();
	window.setInterval(function() {request();}, 30000);

	var response;
	var xhr;
	function request() {

		//var div = document.getElementById( 'answers' );
		//div.insertAdjacentHTML( 'beforeBegin', 'my text must be added here' );
		xhr = new XMLHttpRequest();

		xhr.open('GET', 'http://arsnova.eu/api/statistics',true);
		xhr.send(null);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == XMLHttpRequest.DONE) {

				response = JSON.parse(xhr.responseText);
			}


          
 
           
		}
	}
 console.log(response.answers);
           console.log(response.questions);
           console.log(response.sessions);

var clicks = 0;



    function onClick() {
        clicks += 1;
        document.getElementById("mehr").innerHTML;
    };


function myFunction() {
 if((clicks%2)==1)   {

    document.getElementById("schrift").innerHTML = "Unser Equipment und know how sichert ihnen kostengünstige Lösungen zu. Wir verfügen unter anderem über  Gabelstapler, LKW 12t mit Hebebühne und mehrere Transporter. <br /><br />Langjährige Erfahrungen haben wir durch logistische Betreuung von z.B. über 1000 Videotheken in ganz Deutschland und Österreich erlangt. Wir verfügen über ein gut ausgebildetes und geschultes Personal. Mit über 40 Jahren Erfahrung im Transport- und Lagerwesen bietet Ihnen eine umfangreiche Palette an Dienstleistungen in diesem Bereich an. ";
}else{     document.getElementById("schrift").innerHTML = "Unser Equipment und know how sichert ihnen kostengünstige Lösungen zu. Wir verfügen unter anderem über  Gabelstapler, LKW 12t mit Hebebühne und mehrere Transporter. ";
} }
