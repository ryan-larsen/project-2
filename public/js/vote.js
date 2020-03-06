var amountOfBoxes = 100;
		var order = [];
		function init(){
			event.preventDefault()
			let roulette = document.getElementById("fillMeUpDaddy");
			roulette.innerHTML = "";
			let tempBets = [
				["chef1", "orangered"], 
				["chef2", "orangered"]
			];
			for(var i = 0; i < amountOfBoxes; i++){
					var randomPlayer = rand(0, tempBets.length)
					var node = document.createElement("div");
					var h3 = document.createElement("h3");
					h3.innerHTML = tempBets[randomPlayer][0];
					h3.style.backgroundColor = tempBets[randomPlayer][1];
					node.appendChild(h3);
					roulette.appendChild(node);
				}
		}
    function rand (min, max) {
		event.preventDefault()
		return Math.floor(Math.random() * (max - min)) + min;
    }
		var colors= ['FF450', '#ee5c1f', '#f37e22', '#f4ac23'];
    var width = 80;
		var bets = [];
    function play () {
		event.preventDefault()
			var offset = rand(0, amountOfBoxes*140-180)+180;
			document.getElementById("fillMeUpDaddy").style.left = -(offset-180) + "px";
			let chosenPlayer = document.createElement("div")
			chosenPlayer.className = "winner"
			let playerInput = document.createElement("input")
			
			let inputDiv = document.createElement("div")
			inputDiv.className = "winnerInput"

			inputDiv.appendChild(playerInput)



			let winnerSubmit = document.createElement("button")
			winnerSubmit.appendChild(inputDiv)
			winnerSubmit.id = "winnerSubmit"
			winnerSubmit.innerHTML = "Submit" 
			winnerSubmit.addEventListener('click', function (event){
				event.preventDefault()
				let submittedMeal = document.createElement("p") 
				submittedMeal.innerText = this.parentNode.previousSibling.childNodes[0].value

				

				//add submitted meal to the div tag thats under the submit button
			})
			let submitDiv = document.createElement("div")
			submitDiv.className = "winnerSubmit"
			submitDiv.appendChild(winnerSubmit)
			
			// playerInput.innerHTML = "Enter Your Meal Here"
			let winnerDiv = document.createElement("div")
			winnerDiv.className = "row winnerRow"

			let meal = document.createElement("div")
			meal.className = "meal"


			// let secondForm = document.createElement("div")
			// secondForm.className ="secondForm"


		
			


            playerInput.innerHTML = bets[order[parseInt(offset/140)]][0];
            chosenPlayer.style.backgroundColor = bets[order[parseInt(offset/140)]][1];
			chosenPlayer.innerHTML = bets[order[parseInt(offset/140)]][0];

			setTimeout(function(){
				// document.querySelector("secondForm").appendChild(secondForm)
                winnerDiv.appendChild(chosenPlayer)
				winnerDiv.appendChild(inputDiv);
				winnerDiv.appendChild(submitDiv)
				let generatedWinners = document.getElementById("generatedWinners")
				generatedWinners.appendChild(winnerDiv)
				document.getElementById("fillMeUpDaddy").style.transitionDuration = "0s";
				document.getElementById("fillMeUpDaddy").style.left = "0px";
				setTimeout(function(){
					document.getElementById("fillMeUpDaddy").style.transitionDuration = "5s";
				}, 50)
				}, 5500)
		}
		function playTimer(whatTimer, min, max){
			event.preventDefault()
			var time = rand(min*60000, max*60000);
			setTimeout(function(){
				//add sound if you want
        //var audio = new Audio('spin.mp3');
				//audio.play();
				var offset = rand(0, amountOfBoxes*140-180)+180;
				document.getElementById("r" + whatTimer).style.left = -(offset-180) + "px";
				let chosenPlayer = document.createElement("div");
				chosenPlayer.style.backgroundColor = timerBets[whatTimer][timerOrder[whatTimer][parseInt(offset/140)]][1];
				chosenPlayer.innerHTML = timerBets[whatTimer][timerOrder[whatTimer][parseInt(offset/140)]][0];
				setTimeout(function(){
					document.getElementById("w" + whatTimer).appendChild(chosenPlayer);
					document.getElementById("r" + whatTimer).style.transitionDuration = "0s";
					document.getElementById("r" + whatTimer).style.left = "0px";
					setTimeout(function(){
					document.getElementById("r" + whatTimer).style.transitionDuration = "5s";
				}, 50)
				}, 5500)
				playTimer(whatTimer, min, max);
				}, time)
		}
		var amountOfTimers = 0;
		var timerBets = [];
		var timerOrder = [];
		function addTimer(){
			var min = document.getElementById("min").value;
			var max = document.getElementById("max").value;
			if(min.length == 0) min = 0;
			if(amountOfPlayers <= 0){
				alert("ingen spillere");
				return 0;
			}
			else if(max.length == 0){
				alert("Vennlist fyll inn en max verdi");
				return 0;
			}
			else if(max < 0 || min < 0){ 
				alert("Ingen negative tall vennligst");
				return 0;
			}
			else if(max < min){ 
				alert("Max må være større enn min");
				return 0;
			}
			else{
				var rouletteContainer = document.createElement("div");
				rouletteContainer.className = "rouletteContainer";
				rouletteContainer.style.marginTop = 100+ 400*amountOfTimers+"px";
				var line =document.createElement("div");
				line.className= "line";
				var roulette = document.createElement("div");
				roulette.className = "roulette";
				roulette.id = "r" + amountOfTimers;
				timerBets[amountOfTimers] = [];
				for(var i =0; i < bets.length; i++){
					if(bets[i] != 0){
						timerBets[amountOfTimers].push([bets[i][0],bets[i][1]]);
					}
				}
				timerOrder[amountOfTimers] = [];
				for(var i = 0; i < amountOfBoxes; i++){
					var randomPlayer = rand(0, timerBets[amountOfTimers].length);
					timerOrder[amountOfTimers].push(randomPlayer);
					var node = document.createElement("div");
					var h3 = document.createElement("h3");
					h3.innerHTML = timerBets[amountOfTimers][randomPlayer][0];
					node.style.backgroundColor = timerBets[amountOfTimers][randomPlayer][1];
					node.appendChild(h3);
					roulette.appendChild(node);
				}
				rouletteContainer.appendChild(line);
				rouletteContainer.appendChild(roulette);
				var winners = document.createElement("div");
				winners.id = "w" + amountOfTimers;
				winners.className = "winners";
				winners.style.marginTop = 250 + amountOfTimers*400 + "px";
				winners.style.height = "200px";
				amountOfTimers++;
				var removeAllButton = document.createElement("button");
				var name = document.getElementById("timerName").value;
				if(name == ""){ 
					name = "Timer nr." + amountOfTimers;
				}
				removeAllButton.innerHTML = "Clear " + name;
				document.getElementById("timerName").value = "";
				removeAllButton.style.marginLeft = "5px";
				(function(value){
        removeAllButton.addEventListener("click", function() {
           clearAll(value);
        }, false);})(amountOfTimers-1);
				document.getElementById("removeButtons").appendChild(removeAllButton);
				document.getElementById("timerContainer").appendChild(rouletteContainer);
				document.getElementById("timerContainer").appendChild(winners);
				document.getElementById("timerContainer").appendChild(removeAllButton);
				playTimer(amountOfTimers-1, min, max);
			}
			/*
			<div class="rouletteContainer">
				<div class="line">
				</div>
				<div id="fillMeUpDaddy" class="roulette">
				</div>
			</div>
			*/
		}
		function removeName(playerToRemove){
				bets[playerToRemove] = 0;
				document.getElementById("n"+playerToRemove).remove();
				amountOfPlayers--;
				refreshRoulette();
		}
		function clearAll(winnerToClear){
			if(winnerToClear == -1){
				document.getElementById("winners").innerHTML = "";
				return true;
			} else {
				document.getElementById("w"+winnerToClear).innerHTML = "";
			}
		}
		function addName() {
			event.preventDefault()
			var node = document.createElement("LI");
			var name = document.getElementById("inputName").value
			document.getElementById("inputName").value = ""
			if(name != ""){
				var textnode = document.createTextNode(name);
				let color = colors[rand(0,colors.length-1)];
				node.style.backgroundColor = color;
				node.className = "playerName";
				node.id = "n" + bets.length;
				(function(value){
        node.addEventListener("click", function() {
           removeName(value);
        }, false);})(bets.length);
				node.appendChild(textnode);
				document.getElementById("names").appendChild(node);
				bets.push([name, color]);
				amountOfPlayers++;
				refreshRoulette();
			}
		}
		var amountOfPlayers = 0;
		function refreshRoulette(){
			let roulette = document.getElementById("fillMeUpDaddy");
			roulette.innerHTML = "";
			order = [];
			if(amountOfPlayers <= 0){
				return 0;
			}
			for(var i = 0; i < amountOfBoxes; i++){
					var randomPlayer = rand(0, bets.length);
					while(bets[randomPlayer] == 0){
						randomPlayer = rand(0, bets.length);
					}
					order.push(randomPlayer);
					var node = document.createElement("div");
					var h3 = document.createElement("h3");
					h3.innerHTML = bets[randomPlayer][0];
					node.style.backgroundColor = bets[randomPlayer][1];
					node.appendChild(h3);
					roulette.appendChild(node);
				}
		}
		document.getElementById("inputName").addEventListener("keyup", function(event){
			if(event.keyCode == 13){
				document.getElementById("addButton").click();
			}
		})