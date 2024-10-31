'use strict';

$(document).ready(function() {
	
	var dayArray = {
		en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
		sv: ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"],
		es: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
		de: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
		pt: ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado", "domingo"],
		it: ["Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato","Domenica"],
		fr: ["lundi","mardi","mercredi","jeudi","vendredi","semedi","dimanche"],
		pl:	["Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota","Niedziela"],
		ru: ["понедельник","вторник","среда","четверг","пятница","суббота","воскресенье"]
	};
	var dayShortArray = {
		en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
		sv: ["Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"],
		es: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
		de: ["Mon", "Die", "Mit", "Don", "Fre", "Sam", "Son"],
		pt: ["seg", "ter", "qua", "qui", "sex", "sáb", "dom"],
		it: ["Lun","Mar","Mer","Gio","Ven","Sab","Dom"],
		fr: ["lun","mar","mer","jeu","ven","sem","dim"],	
		pl: ["Pon","Wto","Śro","Czw","Pią","Sob","Nie"],
		ru: ["пон","вто","сре","чет","пят","суб","вос"]
	};
	var monthArray = {
		en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		sv: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
		es: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
		de: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
		pt: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
		it: ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],
		fr: ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],
		pl: ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],
		ru: ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]
	};
	var timeArray = {
		"12hour": ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM" , "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM", "12 AM"],
		military: ["00", "01", "02", "03", "04", "05" , "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]
	};
	
	var minutesFullArray = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59"];
	var time12Array = ["12", "1", "2", "3", "4", "5" , "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
	var time12ArrayAddon = ["AM", "AM", "AM", "AM", "AM", "AM" , "AM", "AM", "AM", "AM", "AM", "AM", "PM", "PM", "PM", "PM", "PM", "PM", "PM", "PM", "PM", "PM", "PM", "PM", "AM"];
	var hoursArray = [0, 1, 2, 3, 4, 5 , 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
	var minutesArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
	var dayDisplayArray = [0, 1, 2, 3, 4, 5, 6];
	var timeStartArray = {
		en: ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"],
	};
	var scheduleSettingsArray = {startDay:"0", endDay:"4", startTime:"8", endTime:"16", timeFormat:"12hour", timeMarks:"corners", startDate:"0", useBackground:"no", backgroundUrl:"", backgroundHeight:"", backgroundX:"", backgroundY:"", uniqueId:"", autoResize:"no"};
	var objectsArray = {};
	objectsArray[0] = {};
	objectsArray[1] = {};
	objectsArray[2] = {};
	objectsArray[3] = {};
	objectsArray[4] = {};
	objectsArray[5] = {};
	objectsArray[6] = {};
	var scheduleHeight = 599;
	var language = "en";
	var scheduleArray = [];
	
	var objectCount = 0;		
	var timeMarkHideArray = [];
	var startDay, endDay , startDate, startTime, endTime, hoursHeight, maxHoursHeight, uniqueID, timeFormat,
		timeMarks, autoResize, backgroundOption, hoursAmount, imgBgHeight, k, e, i;
	
	/**
	* Adds transparency to activities.
	*
	* @since 1.0.0
	*/
	function addTransparency (){
		$(".sboDayObject" + "." + uniqueID).each(function (){
			var bgColor = $(this).css("background-color");
			if(!bgColor.indexOf("rgba") > -1 && !bgColor.indexOf("0.75") > -1){
				bgColor = bgColor.replace(')', ', 0.75)').replace('rgb', 'rgba');
				$(this).css("background-color", bgColor);	
			}								
		});
	}
	
	/**
	* Removes transparency from activities.
	*
	* @since 1.0.0
	*/
	function removeTransparency (){
		$(".sboDayObject" + "." + uniqueID).each(function (){
			var bgColor = $(this).css("background-color");
			bgColor = bgColor.replace(',0.75', '').replace('rgba', 'rgb');
			$(this).css("background-color", bgColor);					
		});
	}
	
	/**
	* Adds timemarks to activities.
	*
	* @since 1.0.0
	*/
	function addTimeMarks(){
		if(timeMarks == "corners" || timeMarks == "yes"){
			$('.timeMarkTop ' + '.' + uniqueID + ', .timeMarkBottom'  + '.' + uniqueID).each(function(){
				$(this).css("display","block");
			});
		}else{
			$('.timeMarkTop ' + '.' + uniqueID + ', .timeMarkBottom'  + '.' + uniqueID).each(function(){
				$(this).css("display","none");
			});
			$('.timeMarkInline' + '.' + uniqueID).each(function(){
				$(this).css("display","block");
			});
		}
		for(k = 0; k < timeMarkHideArray.length; k++){
			$(".timeMarkTop" + timeMarkHideArray[k] + "." + uniqueID).hide();
		}
	}
	
	/**
	* Finds the height of the activity with the largest overflowing content.
	*
	* @since 1.0.0
	*/
	function getMaxHoursHeight(){	
		maxHoursHeight = 75;
		$(".sboDay" + "." + uniqueID).each(function(){
			$(".sboDayObject" + "." + uniqueID).each(function(){
				var activityContentHeight = $(this).find(".sboObjectName").outerHeight(true) + $(this).find(".sboObjectText").outerHeight(true);
				if(timeMarks == "inline"){
					activityContentHeight += $(this).find(".timeMarkInline").outerHeight(true);
				}
				var activityRatio = activityContentHeight / $(this).height();
				var newHoursHeight = Math.ceil(activityRatio*hoursHeight);
				if(newHoursHeight >= maxHoursHeight){
					maxHoursHeight = newHoursHeight;
				}				
			});
		});		
	}
	
	/**
	* Creates the foundation of the schedule with the days, hour and background.
	*
	* @since 1.0.0
	*/
	function reCreateSchedule() {
		
		var daysAmount;
		if(startDay < endDay || startDay == endDay){
			daysAmount =  endDay - startDay + 1;
		}else{
			daysAmount = 8 - startDay + endDay;
		}
		
		var dayWidth = (860 - (daysAmount * 1 - 1)) / daysAmount;
		for(k = startDay; k <= endDay; k++){
			$(".sboDays" + "." + uniqueID).append("<div class='sboDay " + dayArray[language][k] + " " + uniqueID + "' style='width: " + dayWidth + "px';></div>");
			if(startDate == "0"){
				$(".sboWeekDays" + "." + uniqueID).append("<div class='sboWeekDay " + uniqueID + "' style='width: " + dayWidth + "px';><p>" + dayArray[language][k] + "</p></div>");
				$(".sboWeekDays" + "." + uniqueID).css("height","29px");
			} else {
				$(".sboWeekDays" + "." + uniqueID).append("<div class='sboWeekDay " + uniqueID + "' style='width: " + dayWidth + "px';><p>" + dayArray[language][k] + "</p><p class='sboWeekDayDate'>" + startDate.date() + " " + monthArray[language][startDate.get("month")] + "</p></div>");
				$(".sboWeekDays" + "." + uniqueID).css("height","54px");
				startDate.add(1, "days");
			}
			
			if(startDay == 6){
				startDay = 0;
			}
		}
		
		hoursAmount = endTime - startTime;

		if(backgroundOption == "yes" || backgroundOption == "yesUpload"){
			$(".sboTemplate" + "." + uniqueID).css({
				"background-image":"url(" + scheduleSettingsArray["backgroundUrl"] + ")",
				"background-size":"auto " + scheduleSettingsArray["backgroundHeight"] + "px",
				"background-position-x":scheduleSettingsArray["backgroundX"],
				"background-position-y":scheduleSettingsArray["backgroundY"]
			});
			$(".sboWeekDays" + "." + uniqueID).css("background","rgba(255, 255, 255, 0.75)");
			$(".sboHours" + "." + uniqueID).css("background","rgba(255, 255, 255, 0.75)");
			$(".sboDays" + "." + uniqueID).css("background","none");                              
		} else if(backgroundOption == "yesColor"){
			$(".sboTemplate" + "." + uniqueID).css("background-color", scheduleSettingsArray["backgroundColor"]);
			$(".sboWeekDays" + "." + uniqueID).css("background","rgba(255, 255, 255, 0.75)");
			$(".sboHours" + "." + uniqueID).css("background","rgba(255, 255, 255, 0.75)");
			$(".sboDays" + "." + uniqueID).css("background","transparent");   
		}
		
		$(".sboHours" + "." + uniqueID).height(hoursAmount*hoursHeight-1);
		$(".sboDays" + "." + uniqueID).height(hoursAmount*hoursHeight-1);
		
		reAddObjects();
		
		if(autoResize == "yes"){
			getMaxHoursHeight();
			if(hoursHeight != maxHoursHeight){
				hoursHeight = maxHoursHeight;
				$(".sboHours" + "." + uniqueID).height(hoursAmount*hoursHeight-1);
				$(".sboDays" + "." + uniqueID).height(hoursAmount*hoursHeight-1);
				reAddObjects();
			}			
		}		
		$(window).trigger("resize");
		loadSchedules();
	}
	
	/**
	* Appends all activities in the objectsArray to the schedule.
	*
	* @since 1.0.0
	*/
	function reAddObjects() {
		$(".sboHours" + "." + uniqueID).html("");
		$('.sboDay' + "." + uniqueID).each(function(){
			$(this).html("");
		});
		
		for(k = startTime; k < endTime; k++){
			$(".sboHours" + "." + uniqueID).append("<div class='sboHour " + uniqueID + "' style='height: " + hoursHeight + "px;'><div class='sboHourText " + uniqueID + "'><p class='sboPHour " + uniqueID + "'>" + timeArray[timeFormat][k]  + "</p></div></div>");
		}
		
		for(k = 0; k < 7; k++){
			var objectsOnDay = 0;
			for (e in objectsArray[k]) {
				if (objectsArray[k].hasOwnProperty(e)) {
					objectsOnDay++;
				}
			}
			for(i = 0; i < objectsOnDay; i++){
				var startTimeObject = parseInt(objectsArray[k][i]["startTime"]);
				var endTimeObject = parseInt(objectsArray[k][i]["endTime"]);
				if(endTimeObject == 0){
					endTimeObject = 1440;
				}
				var timeMarkTop;
				var timeMarkBottom;
				var timeMarkInline;
				var marginTop = 0;
				var objectHeight = 0;
				
				for(e = startTimeObject; e < endTimeObject; e++){
					objectHeight++;
				}
				objectHeight = (objectHeight * (hoursHeight / 60) + 1).toFixed(4);		
				for(e = (startTime * 60); e < startTimeObject; e++){
					marginTop++;
				}
				marginTop = (marginTop * (hoursHeight / 60) - 1).toFixed(4);
				var objectEnd = marginTop + objectHeight;
				
				var objectName = decodeURIComponent(objectsArray[k][i]["objectName"]);
				var objectText = decodeURIComponent(objectsArray[k][i]["objectInfo"]);
				objectText = objectText.split("\n").join("<br />");
				
				var backgroundColor = objectsArray[k][i]["backgroundColor"];
				var textColor1 = objectsArray[k][i]["textColor1"];
				var textColor2 = objectsArray[k][i]["textColor2"];
								
				var thisObjectNumber = parseInt(objectsArray[k][i]["objectNumber"]);
				if(thisObjectNumber > objectCount){
					objectCount = thisObjectNumber;
				}

				if(marginTop < -1 || objectEnd > (scheduleHeight + 5)){
					continue;
				}
				
				var timeMarkStartMinute = startTimeObject % 60;
				var timeMarkStartHour = (startTimeObject - timeMarkStartMinute) / 60;
				var timeMarkEndMinute = endTimeObject % 60;
				var timeMarkEndHour = (endTimeObject - timeMarkEndMinute) / 60;				
				
				if(timeFormat == "military"){
					timeMarkTop = timeArray["military"][hoursArray.indexOf(timeMarkStartHour)] + ":" + minutesFullArray[minutesArray.indexOf(timeMarkStartMinute)];
					timeMarkBottom = timeArray["military"][hoursArray.indexOf(timeMarkEndHour)] + ":" + minutesFullArray[minutesArray.indexOf(timeMarkEndMinute)];
					timeMarkInline = timeMarkTop + " - " + timeMarkBottom;
				}else{
					timeMarkTop = time12Array[hoursArray.indexOf(timeMarkStartHour)] + ":" + minutesFullArray[minutesArray.indexOf(timeMarkStartMinute)] + " " + time12ArrayAddon[hoursArray.indexOf(timeMarkStartHour)];
					timeMarkBottom = time12Array[hoursArray.indexOf(timeMarkEndHour)] + ":" + minutesFullArray[minutesArray.indexOf(timeMarkEndMinute)] + " " + time12ArrayAddon[hoursArray.indexOf(timeMarkEndHour)];
					timeMarkInline = timeMarkTop + " - " + timeMarkBottom;
				}
				
				var sameDayTimeMatches = 0;
				var sameDayTimeObject;
				//Check if there's another object on the same time and day			
				for(e = 0; e < objectsOnDay; e++){
					var dayObjectsStart = parseInt(objectsArray[k][e]["startTime"]);
					var dayObjectsEnd = parseInt(objectsArray[k][e]["endTime"]);
					var sameDayObjectNumber = objectsArray[k][e]["objectNumber"];
					
					if(startTimeObject >= dayObjectsEnd || endTimeObject <= dayObjectsStart || thisObjectNumber == sameDayObjectNumber){
						
					}else{
						sameDayTimeMatches++;
						if($("."+sameDayObjectNumber + "." + uniqueID).is(":visible")){
							sameDayTimeObject = sameDayObjectNumber;
						}						
					}
					
					if(timeMarks == "corners" && thisObjectNumber != sameDayObjectNumber){
						var dayObjectStartTime = $("."+sameDayObjectNumber + "." + uniqueID).find(".timeMarkTop").html();
						var dayObjectEndTime = $("."+sameDayObjectNumber + "." + uniqueID).find(".timeMarkBottom").html();
							
						if(timeMarkTop == dayObjectEndTime){							
							timeMarkHideArray.push(thisObjectNumber);
						}else if(timeMarkBottom == dayObjectStartTime){
							timeMarkHideArray.push(sameDayObjectNumber);
						}
					}
				}
				var appendDiv = "";
				if(sameDayTimeMatches == 0){
					appendDiv = "<div class='sboDayObject " + thisObjectNumber + " " + uniqueID + "' style='height: "+ objectHeight + "px; top: " + marginTop + "px; background-color: " + backgroundColor + ";'><div class='sboObjectPContainer " + uniqueID + "'><p class='sboObjectName " + uniqueID + "' style='color: " + textColor1 + ";'>" + objectName + "</p><p class='sboObjectText " + uniqueID + "' style='color: " + textColor2 + ";'>" + objectText + "</p></div></div>";
				}else if($("."+sameDayTimeObject).is(":visible")){
					if(parseInt($("."+sameDayTimeObject)[0].style.width) < 100 && $("."+sameDayTimeObject)[0].style.left == ""){
						appendDiv = "<div class='sboDayObject " + thisObjectNumber + " " + uniqueID + "' style='width: 50%; left: 50%; height: "+ objectHeight + "px; top: " + marginTop + "px; background-color: " + backgroundColor + "; border-left: 1px solid;'><div class='sboObjectPContainer " + uniqueID + "'><p class='sboObjectName " + uniqueID + "' style='color: " + textColor1 + ";'>" + objectName + "</p><p class='sboObjectText " + uniqueID + "' style='color: " + textColor2 + ";'>" + objectText + "</p></div></div>";
					}else{
						appendDiv = "<div class='sboDayObject " + thisObjectNumber + " " + uniqueID + "' style='width: 50%; height: "+ objectHeight + "px; top: " + marginTop + "px; background-color: " + backgroundColor + ";'><div class='sboObjectPContainer " + uniqueID + "'><p class='sboObjectName " + uniqueID + "' style='color: " + textColor1 + ";'>" + objectName + "</p><p class='sboObjectText " + uniqueID + "' style='color: " + textColor2 + ";'>" + objectText + "</p></div></div>";
					}				
				}else{
					appendDiv = "<div class='sboDayObject " + thisObjectNumber + " " + uniqueID + "' style='width: 50%; height: "+ objectHeight + "px; top: " + marginTop + "px; background-color: " + backgroundColor + ";'><div class='sboObjectPContainer " + uniqueID + "'><p class='sboObjectName " + uniqueID + "' style='color: " + textColor1 + ";'>" + objectName + "</p><p class='sboObjectText " + uniqueID + "' style='color: " + textColor2 + ";'>" + objectText + "</p></div></div>";
				}
				
				timeMarkTop = "<span class='timeMarkTop timeMarkTop" + thisObjectNumber + " " + uniqueID + "'>" + timeMarkTop + "</span>";
				timeMarkBottom = "<span class='timeMarkBottom timeMarkBottom" + thisObjectNumber + " " + uniqueID + "'>" + timeMarkBottom + "</span>";
				timeMarkInline = "<span class='timeMarkInline timeMarkInline" + thisObjectNumber + " " + uniqueID + "'>" + timeMarkInline + "</span>";
				
				var multipleDay = "." + dayArray[language][k] + "." + uniqueID;
				$(multipleDay).append(appendDiv);
				var timeMarkObject = "." + thisObjectNumber + ".sboDayObject" + "." + uniqueID;
				$(timeMarkObject).append(timeMarkTop);
				$(timeMarkObject).append(timeMarkBottom);
				$(timeMarkObject).find(".sboObjectPContainer").append(timeMarkInline);
			}
		}
		
		objectCount++;
		addTimeMarks();
		
		if ($(".sboTemplate" + "." + uniqueID).css("background-image") != "none") {
			addTransparency();
		}else{
			removeTransparency();
		}
	}
	
	var jsSchedules = [];
	/**
	* Finds all schedules on current page and adds their id:s to a list.
	*
	* @since 1.0.0
	*/
	$(".sboTemplate").each(function(){
		var scheduleAttr = ($(this).attr('class')).split(' ');
		uniqueID = scheduleAttr[1];
		jsSchedules.push(uniqueID);
	}).promise().done(function () { 
		loadSchedules();
	});
	
	/**
	* Loads all schedules from "jsSchedules" one by one.
	*
	* @since 1.0.0
	*/
	function loadSchedules(){
		if(jsSchedules.length > 0){
			$.getScript('https://schedulebuilder.org/schedules/' + jsSchedules[0] + ".js").done(function(script, textStatus) {
				var scheduleAttr = ($(".sboTemplate." + jsSchedules[0]).attr('class')).split(' ');
				jsSchedules.splice(0,1);
				
				uniqueID = scheduleAttr[1];
				scheduleSettingsArray = dbSchedule;
				objectsArray = dbObjects;
				
				objectCount = 0;		
				timeMarkHideArray = [];
				startDay = scheduleSettingsArray["startDay"];
				endDay = scheduleSettingsArray["endDay"];
				startDate = scheduleSettingsArray["startDate"];
				if(startDate != "0"){
					startDate = moment(startDate.substring(0,10), "YYYY-MM-DD");
				} 
				startTime = parseInt(scheduleSettingsArray["startTime"]);
				endTime = parseInt(scheduleSettingsArray["endTime"]);
				hoursHeight = 75;
				timeFormat = scheduleSettingsArray["timeFormat"];
				timeMarks = scheduleSettingsArray["timeMarks"];
				autoResize = scheduleSettingsArray["autoResize"];
				backgroundOption = scheduleSettingsArray["useBackground"];
				language = scheduleAttr[2];
				hoursAmount = 0;
				imgBgHeight = "null";
				
				$(".sboTemplate." + uniqueID).append('<div class="sboWeekDays ' + uniqueID + '"><div class="leftScheduleCorner ' + uniqueID + '"></div></div><div class="sboHours ' + uniqueID + '" style="height: 599px;"><div class="startTimeMarker ' + uniqueID + '"></div><div class="endTimeMarker ' + uniqueID + '"></div></div><div class="sboDays ' + uniqueID + '" style="height: 599px;"></div>');
				reCreateSchedule();
			});
		}		
	}
	
	
	var scaleWidth = 0;
	/**
	* Scales schedules to fit their parent container.
	*
	* @since 1.0.0
	*/
	$( window ).resize(function() {
		$(".sboTemplate").each(function(){
			if(893 > $(this).parent().width()){
				scaleWidth = $(this).parent().width()/893;
				$(this).css({'transform': 'scale(' + scaleWidth + ')'});
				$(this).parent().height($(this).height()*scaleWidth);							
			} else {
				$(this).css({'transform': 'none'});
			}
		});
	});	
	
	/**
	* Toggles schedules.
	*
	* @since 1.0.0
	*/
	$(".sboToggle").click(function(){
		if($(this).parent().hasClass('sboToggled')){
			$(this).parent().removeClass('sboToggled',1000, function(){
				$(this).parent().height($(this).height()*scaleWidth);
			});
			$(this).html("Click to collapse &#x25B2;");	
		} else {
			$(this).parent().addClass('sboToggled',1000, function(){
				$(this).parent().height($(this).height()*scaleWidth);
			});
			$(this).html("Click to expand &#x25BC;");	
			$('html,body').animate({
				scrollTop: $($(this).parent()).offset().top - 100
			}, 'slow');
		}
	});		
		
});