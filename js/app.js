var appController = function(){	
	var dias;
	var horas;
	var minutos;
	var segundos;
	var percent;

	var getDuration = function(){
		var carnaval = moment('01/03/2019 18:00', 'DD/MM/YYYY HH:ii').unix();
		var current  = moment().unix();

		var diff = carnaval - current;
		var duration = moment.duration(diff*1000, 'milliseconds');

		return duration;
	};

	var doMath = function(duration){
		dias = Math.floor(duration.asDays());
		horas = Math.floor(duration.asHours() % 24);
		minutos = Math.floor(duration.asMinutes() % 60);
		segundos = Math.floor(duration.asSeconds() % 60);

		var passedTime = moment().unix() - moment('14/02/2018', 'DD/MM/YYYY').unix();
		percent = (passedTime/32900400) * 100;
	};

	var doStuff = function(){
		var duration = getDuration();
		doMath(duration);

		$("#dayscounter").find('p').text(dias+' Dias');
		$("#hourscounter").find('p').text(horas+' Horas');
		$("#minutescounter").find('p').text(minutos+' Minutos');
		$("#secondscounter").find('p').text(segundos+' Segundos');


		$("#inDivBar").attr("aria-valuenow", percent);
		$("#inDivBar").css("width", percent+'%');
		$("#labelBar").text(percent.toFixed(5)+'%');
	};

	doStuff();
	
	$("#blockScreen").css("display", "none");
	$("#appBody").css("display", "block");
	
	setInterval(function(){
		doStuff();
	}, 1000);
};
