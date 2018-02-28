function crearHoras(){
	var minsInicio;
	var horaInicio;
	var horario;
	horario = "Horas disponibles";
	for (horaInicio = 08,minsInicio = 00;horaInicio < 21 ; horaInicio++){
		minsInicio=0;
		horario =horario +";   " +horaInicio+":00";

		if(horaInicio == 20){	
			for(var j = 0;j < 2; j++){
			minsInicio = minsInicio + 15;
			horario =horario +";   " +horaInicio+":"+minsInicio;
			}	
		}else{
			for(var i = 0;i < 3; i++){
				minsInicio = minsInicio + 15;
				horario =horario +";   " +horaInicio+":"+minsInicio;
			}	
			
		}	
	}
	alert(horario);
}