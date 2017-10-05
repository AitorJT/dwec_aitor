function crearHoras(){
	var minsInicio;
	var horaInicio;
	var horario;
	horario = "08:00";
	for (horaInicio = 08,minsInicio = 00;horaInicio =20 && minsInicio = 30; horaInicio++){
		if(horaInicio == 20){
			for(var i = 0;i < 2; i++){
			minsInicio = minsInicio + 15;
			horario =horario +"<br>" +horaInicio+":"+minsInicio;
			}	
		}else{
			for(var i = 0;i < 4; i++){
				minsInicio = minsInicio + 15;
				horario =horario +"<br>" +horaInicio+":"+minsInicio;
			}	
		}	
	}
}