var amountOfBoxes = 100
var order = []

function init () {
  event.preventDefault()
  const roulette = document.getElementById('fillMeUpDaddy')
  roulette.innerHTML = ''
  const tempBets = [
    ['chef1', 'orangered'],
    ['chef2', 'orangered']
  ]
  for (var i = 0; i < amountOfBoxes; i++) {
    var randomPlayer = rand(0, tempBets.length)
    var node = document.createElement('div')
    var h3 = document.createElement('h3')
    h3.innerHTML = tempBets[randomPlayer][0]
    h3.style.backgroundColor = tempBets[randomPlayer][1]
    node.appendChild(h3)
    roulette.appendChild(node)
  }
}

function rand (min, max) {
  event.preventDefault()
  return Math.floor(Math.random() * (max - min)) + min
}
var colors = ['FF450', '#ee5c1f', '#f37e22', '#f4ac23']
var width = 80
var bets = []
let count = 0
count = count + 1

function play () {
  event.preventDefault()
  var offset = rand(0, amountOfBoxes * 140 - 180) + 180
  document.getElementById('fillMeUpDaddy').style.left = -(offset - 180) + 'px'
  const chosenPlayer = document.createElement('div')
  chosenPlayer.className = 'winner'

  const playerInput = document.createElement('input')
  playerInput.setAttribute('id', 'input-' + count++)
  playerInput.setAttribute('class', 'playInput')

  const inputDiv = document.createElement('div')
  inputDiv.className = 'winnerInput'

  inputDiv.appendChild(playerInput)

  // playerInput.innerHTML = "Enter Your Meal Here"
  const winnerDiv = document.createElement('form')
  winnerDiv.className = 'row winnerRow'

  const meal = document.createElement('h1')
  meal.className = 'meal'

  // const winnerSubmit = document.createElement('button')
  // winnerSubmit.appendChild(inputDiv)
  // winnerSubmit.id = 'winnerSubmit'
  // winnerSubmit.innerHTML = 'Submit'
  const winnerSubmit = document.querySelector('#winnerSubmit')
  winnerSubmit.addEventListener('click', function (event) {
    event.preventDefault()

    const val1 = document.getElementById('input-1').value
    console.log(val1)
    const submittedMealLabel1 = document.createElement('label')
    submittedMealLabel1.setAttribute('for', val1)
    submittedMealLabel1.textContent = val1
    const submittedMeal1 = document.createElement('input')
    submittedMeal1.setAttribute('type', 'radio')
    submittedMeal1.setAttribute('name', val1)
    submittedMeal1.setAttribute('value', val1)
    submittedMeal1.textContent = val1
    document.getElementById('meal-container').appendChild(submittedMeal1)
    document.getElementById('meal-container').appendChild(submittedMealLabel1)

    const val2 = document.getElementById('input-2').value
    console.log(val2)
    const submittedMealLabel2 = document.createElement('label')
    submittedMealLabel2.setAttribute('for', val2)
    submittedMealLabel2.textContent = val2
    const submittedMeal2 = document.createElement('input')
    submittedMeal2.setAttribute('type', 'radio')
    submittedMeal2.setAttribute('name', val2)
    submittedMeal2.setAttribute('value', val2)
    submittedMeal2.textContent = val2
    document.getElementById('meal-container').appendChild(submittedMeal2)
    document.getElementById('meal-container').appendChild(submittedMealLabel2)

    const val3 = document.getElementById('input-3').value
    console.log(val3)
    const submittedMealLabel3 = document.createElement('label')
    submittedMealLabel3.setAttribute('for', val3)
    submittedMealLabel3.textContent = val3
    const submittedMeal3 = document.createElement('input')
    submittedMeal3.setAttribute('type', 'radio')
    submittedMeal3.setAttribute('name', val3)
    submittedMeal3.setAttribute('value', val3)
    submittedMeal3.textContent = val3
    document.getElementById('meal-container').appendChild(submittedMeal3)
    document.getElementById('meal-container').appendChild(submittedMealLabel3)

    const val4 = document.getElementById('input-4').value
    console.log(val4)
    const submittedMealLabel4 = document.createElement('label')
    submittedMealLabel4.setAttribute('for', val4)
    submittedMealLabel4.textContent = val4
    const submittedMeal4 = document.createElement('input')
    submittedMeal4.setAttribute('type', 'radio')
    submittedMeal4.setAttribute('name', val4)
    submittedMeal4.setAttribute('value', val4)
    submittedMeal4.textContent = val4
    document.getElementById('meal-container').appendChild(submittedMeal4)
    document.getElementById('meal-container').appendChild(submittedMealLabel4)

    const val5 = document.getElementById('input-5').value
    console.log(val5)
    const submittedMealLabel5 = document.createElement('label')
    submittedMealLabel5.setAttribute('for', val5)
    submittedMealLabel5.textContent = val5
    const submittedMeal5 = document.createElement('input')
    submittedMeal5.setAttribute('type', 'radio')
    submittedMeal5.setAttribute('name', val5)
    submittedMeal5.setAttribute('value', val5)
    submittedMeal5.textContent = val5
    document.getElementById('meal-container').appendChild(submittedMeal5)
    document.getElementById('meal-container').appendChild(submittedMealLabel5)

    const val6 = document.getElementById('input-6').value
    console.log(val6)
    const submittedMealLabel6 = document.createElement('label')
    submittedMealLabel6.setAttribute('for', val6)
    submittedMealLabel6.textContent = val6
    const submittedMeal6 = document.createElement('input')
    submittedMeal6.setAttribute('type', 'radio')
    submittedMeal6.setAttribute('name', val6)
    submittedMeal6.setAttribute('value', val6)
    submittedMeal6.textContent = val6
    document.getElementById('meal-container').appendChild(submittedMeal6)
    document.getElementById('meal-container').appendChild(submittedMealLabel6)

    const val7 = document.getElementById('input-7').value
    console.log(val7)
    const submittedMealLabel7 = document.createElement('label')
    submittedMealLabel7.setAttribute('for', val7)
    submittedMealLabel7.textContent = val7
    const submittedMeal7 = document.createElement('input')
    submittedMeal7.setAttribute('type', 'radio')
    submittedMeal7.setAttribute('name', val7)
    submittedMeal7.setAttribute('value', val7)
    submittedMeal7.textContent = val7
    document.getElementById('meal-container').appendChild(submittedMeal7)
    document.getElementById('meal-container').appendChild(submittedMealLabel7)

    const val8 = document.getElementById('input-8').value
    console.log(val8)
    const submittedMealLabel8 = document.createElement('label')
    submittedMealLabel8.setAttribute('for', val8)
    submittedMealLabel8.textContent = val8
    const submittedMeal8 = document.createElement('input')
    submittedMeal8.setAttribute('type', 'radio')
    submittedMeal8.setAttribute('name', val8)
    submittedMeal8.setAttribute('value', val8)
    submittedMeal8.textContent = val8
    document.getElementById('meal-container').appendChild(submittedMeal8)
    document.getElementById('meal-container').appendChild(submittedMealLabel8)

    const val9 = document.getElementById('input-9').value
    console.log(val9)
    const submittedMealLabel9 = document.createElement('label')
    submittedMealLabel9.setAttribute('for', val9)
    submittedMealLabel9.textContent = val9
    const submittedMeal9 = document.createElement('input')
    submittedMeal9.setAttribute('type', 'radio')
    submittedMeal9.setAttribute('name', val9)
    submittedMeal9.setAttribute('value', val9)
    submittedMeal9.textContent = val9
    document.getElementById('meal-container').appendChild(submittedMeal9)
    document.getElementById('meal-container').appendChild(submittedMealLabel9)

    const val10 = document.getElementById('input-10').value
    console.log(val10)
    const submittedMealLabel10 = document.createElement('label')
    submittedMealLabel10.setAttribute('for', val10)
    submittedMealLabel10.textContent = val10
    const submittedMeal10 = document.createElement('input')
    submittedMeal10.setAttribute('type', 'radio')
    submittedMeal10.setAttribute('name', val10)
    submittedMeal10.setAttribute('value', val10)
    submittedMeal10.textContent = val10
    document.getElementById('meal-container').appendChild(submittedMeal10)
    document.getElementById('meal-container').appendChild(submittedMealLabel10)
  })

  const submitDiv = document.createElement('div')
  submitDiv.className = 'winnerSubmit'
  submitDiv.appendChild(winnerSubmit)

  // let secondForm = document.createElement("div")
  // secondForm.className ="secondForm"

  playerInput.innerHTML = bets[order[parseInt(offset / 140)]][0]
  chosenPlayer.style.backgroundColor = bets[order[parseInt(offset / 140)]][1]
  chosenPlayer.innerHTML = bets[order[parseInt(offset / 140)]][0]

  setTimeout(function () {
    // document.querySelector("secondForm").appendChild(secondForm)
    winnerDiv.appendChild(chosenPlayer)
    winnerDiv.appendChild(inputDiv)
    winnerDiv.appendChild(submitDiv)
    const generatedWinners = document.getElementById('generatedWinners')
    generatedWinners.appendChild(winnerDiv)
    document.getElementById('fillMeUpDaddy').style.transitionDuration = '0s'
    document.getElementById('fillMeUpDaddy').style.left = '0px'
    setTimeout(function () {
      document.getElementById('fillMeUpDaddy').style.transitionDuration = '5s'
    }, 50)
  }, 5500)
}

function playTimer (whatTimer, min, max) {
  event.preventDefault()
  var time = rand(min * 60000, max * 60000)
  setTimeout(function () {
    // add sound if you want
    // var audio = new Audio('spin.mp3');
    // audio.play();
    var offset = rand(0, amountOfBoxes * 140 - 180) + 180
    document.getElementById('r' + whatTimer).style.left = -(offset - 180) + 'px'
    const chosenPlayer = document.createElement('div')
    chosenPlayer.style.backgroundColor = timerBets[whatTimer][timerOrder[whatTimer][parseInt(offset / 140)]][1]
    chosenPlayer.innerHTML = timerBets[whatTimer][timerOrder[whatTimer][parseInt(offset / 140)]][0]
    setTimeout(function () {
      document.getElementById('w' + whatTimer).appendChild(chosenPlayer)
      document.getElementById('r' + whatTimer).style.transitionDuration = '0s'
      document.getElementById('r' + whatTimer).style.left = '0px'
      setTimeout(function () {
        document.getElementById('r' + whatTimer).style.transitionDuration = '5s'
      }, 50)
    }, 5500)
    playTimer(whatTimer, min, max)
  }, time)
}
var amountOfTimers = 0
var timerBets = []
var timerOrder = []

function addTimer () {
  var min = document.getElementById('min').value
  var max = document.getElementById('max').value
  if (min.length == 0) min = 0
  if (amountOfPlayers <= 0) {
    return 0
  } else if (max.length == 0) {
    return 0
  } else if (max < 0 || min < 0) {
    return 0
  } else if (max < min) {
    return 0
  } else {
    var rouletteContainer = document.createElement('div')
    rouletteContainer.className = 'rouletteContainer'
    rouletteContainer.style.marginTop = 100 + 400 * amountOfTimers + 'px'
    var line = document.createElement('div')
    line.className = 'line'
    var roulette = document.createElement('div')
    roulette.className = 'roulette'
    roulette.id = 'r' + amountOfTimers
    timerBets[amountOfTimers] = []
    for (var i = 0; i < bets.length; i++) {
      if (bets[i] != 0) {
        timerBets[amountOfTimers].push([bets[i][0], bets[i][1]])
      }
    }
    timerOrder[amountOfTimers] = []
    for (var i = 0; i < amountOfBoxes; i++) {
      var randomPlayer = rand(0, timerBets[amountOfTimers].length)
      timerOrder[amountOfTimers].push(randomPlayer)
      var node = document.createElement('div')
      var h3 = document.createElement('h3')
      h3.innerHTML = timerBets[amountOfTimers][randomPlayer][0]
      node.style.backgroundColor = timerBets[amountOfTimers][randomPlayer][1]
      node.appendChild(h3)
      roulette.appendChild(node)
    }
    rouletteContainer.appendChild(line)
    rouletteContainer.appendChild(roulette)
    var winners = document.createElement('div')
    winners.id = 'w' + amountOfTimers
    winners.className = 'winners'
    winners.style.marginTop = 250 + amountOfTimers * 400 + 'px'
    winners.style.height = '200px'
    amountOfTimers++
    var removeAllButton = document.createElement('button')
    var name = document.getElementById('timerName').value
    if (name == '') {
      name = 'Timer nr.' + amountOfTimers
    }
    removeAllButton.innerHTML = 'Clear ' + name
    document.getElementById('timerName').value = ''
    removeAllButton.style.marginLeft = '5px';
    (function (value) {
      removeAllButton.addEventListener('click', function () {
        clearAll(value)
      }, false)
    })(amountOfTimers - 1)
    document.getElementById('removeButtons').appendChild(removeAllButton)
    document.getElementById('timerContainer').appendChild(rouletteContainer)
    document.getElementById('timerContainer').appendChild(winners)
    document.getElementById('timerContainer').appendChild(removeAllButton)
    playTimer(amountOfTimers - 1, min, max)
  }
}

function clearAll (winnerToClear) {
  if (winnerToClear == -1) {
    document.getElementById('winners').innerHTML = ''
    return true
  } else {
    document.getElementById('w' + winnerToClear).innerHTML = ''
  }
}

function addName () {
  event.preventDefault()
  var node = document.createElement('LI')
  var name = document.getElementById('inputName').value
  document.getElementById('inputName').value = ''
  if (name != '') {
    var textnode = document.createTextNode(name)
    const color = colors[rand(0, colors.length - 1)]
    node.style.backgroundColor = color
    node.className = 'playerName'
    node.id = 'n' + bets.length;
    (function (value) {
      node.addEventListener('click', function () {
        removeName(value)
      }, false)
    })(bets.length)
    node.appendChild(textnode)
    document.getElementById('names').appendChild(node)
    bets.push([name, color])
    amountOfPlayers++
    refreshRoulette()
  }
}
var amountOfPlayers = 0

function refreshRoulette () {
  const roulette = document.getElementById('fillMeUpDaddy')
  roulette.innerHTML = ''
  order = []
  if (amountOfPlayers <= 0) {
    return 0
  }
  for (var i = 0; i < amountOfBoxes; i++) {
    var randomPlayer = rand(0, bets.length)
    while (bets[randomPlayer] == 0) {
      randomPlayer = rand(0, bets.length)
    }
    order.push(randomPlayer)
    var node = document.createElement('div')
    var h3 = document.createElement('h3')
    h3.innerHTML = bets[randomPlayer][0]
    node.style.backgroundColor = bets[randomPlayer][1]
    node.appendChild(h3)
    roulette.appendChild(node)
  }
}
document.getElementById('inputName').addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    document.getElementById('addButton').click()
  }
})

// Voting Chart JS
var ctx = document.getElementById('myChart').getContext('2d')
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
})
