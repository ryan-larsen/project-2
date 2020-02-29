$(document).ready(function () {
  // Getting references to our form and input
  const signUpForm = $('form.signup-form')
  const emailInput = $('input#email-input')
  const passwordInput = $('input#password-input')
  const usernameInput = $('input#username-input')

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on('click', function (event) {
    event.preventDefault()
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      username: usernameInput.val().trim()
    }
    console.log(userData)

    if (!userData.email || !userData.username || !userData.password) {
      return
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.username, userData.password,)
    emailInput.val('')
    usernameInput.val('')
    passwordInput.val('')
  })

  // Does a post to the signup route. If successful, we are redirected to the vote page
  // Otherwise we log any errors
  function signUpUser (email, username, password) {
    $.post('/api/signup', {
      email: email,
      username: username,
      password: password
      
    })
      .then(function (data) {
        window.location.replace('/vote')
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr)
  }

  function handleLoginErr (err) {
    $('#alert.msg').text(err.responseJSON)
    $('#alert').fadeIn(500)
    
  }
})


var ddData = [
  {
      text: "French Fry Samurai",
      value: 1,
      selected: true,
      description: "Once he unsheathes his blades he must draw ketchup",
      imageSrc: "/assets/images/frenchFry.png"
  },
  {
      text: "Burger Boxer",
      value: 2,
      selected: false,
      description: "Don't forget the pickles",
      imageSrc: "/assets/images/burgerBoxer.png"
  },
  {
      text: "Spartan Soda",
      value: 3,
      selected: false,
      description: "300 psi of power",
      imageSrc: "/assets/images/colaFighter.png"
  },
  {
    text: "Taco Templar",
    value: 4,
    selected: false,
    description: "Get ready to feel the crunch",
    imageSrc: "/assets/images/tacoFighter.png"
  },
  {
      text: "Noodle Ninja",
      value: 4,
      selected: false,
      description: "He's coming to take you out",
      imageSrc: "/assets/images/noodleFighter.png"
  },
  {
    text: "Burrito Barbarian",
    value: 4,
    selected: false,
    description: "If you're Romaine* you should run",
    imageSrc: "/assets/images/burritoFighter.png"
  }
];

$('#myDropdown').ddslick({
  data: ddData,
  width: 300,
  imagePosition: "left",
  selectText: "Select your favorite social network",
  onSelected: function (data) {
      console.log(data);
  }
});