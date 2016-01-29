
	request();
	window.setInterval(function() {

		request(); //calling every 30 seconds
	}, 30000);

	var response;
	var xhr;
	function request() {

		//var div = document.getElementById( 'answers' );
		//div.insertAdjacentHTML( 'beforeBegin', 'my text must be added here' );
		xhr = new XMLHttpRequest();

		xhr.open('GET', 'http://arsnova.eu/api/statistics',
				true);
		xhr.send(null);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == XMLHttpRequest.DONE) {

				response = JSON.parse(xhr.responseText);
			}

			document.getElementById("answers").innerHTML = response.answers;
			document.getElementById("lectureQuestions").innerHTML = response.lectureQuestions;
			document.getElementById("preparationQuestions").innerHTML = response.preparationQuestions;
			document.getElementById("openSessions").innerHTML = response.openSessions;
			document.getElementById("closedSessions").innerHTML = response.closedSessions;
			document.getElementById("creators").innerHTML = response.creators;
			document.getElementById("activeUsers").innerHTML = response.activeUsers;
			document.getElementById("activeStudents").innerHTML = response.activeStudents;
			document.getElementById("loggedinUsers").innerHTML = response.loggedinUsers;
			document.getElementById("interposedQuestions").innerHTML = response.interposedQuestions;
			document.getElementById("conceptQuestions").innerHTML = response.conceptQuestions;
			document.getElementById("questions").innerHTML = response.questions;
			document.getElementById("sessions").innerHTML = response.sessions;

		}
	}