
$(document).ready(function () {
  // Getting references to our form and input
  const signUpForm = $('form.signup-form')
  const emailInput = $('input#email-input')
  const passwordInput = $('input#password-input')
  const usernameInput = $('input#username-input')
  const avatarSelect = $('select#myDropdown')
  
  
  

  // When the signup button is clicked, we validate the email, username and password are not blank
  signUpForm.on('click', function (event) {
    event.preventDefault()
    const userData = {
      email: emailInput.val().trim(),
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim(),
      avatar: avatarSelect.value
    }
    console.log(userData)

    if (!userData.email || !userData.username || !userData.password) {
      return
    }
    // If we have an email, password and username, run the signUpUser function
    signUpUser(userData.email, userData.username, userData.password)
    emailInput.val('')
    usernameInput.val('')
    passwordInput.val('')
    
  })

  // Does a post to the signup route. If successful, we are redirected to the vote page
  // Otherwise we log any errors
  function signUpUser (email, username, password ) {
    $.post('/api/signup', {
      email: email,
      username: username,
      password: password,
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
      text: "Burger Boxer",
      value: "burgerBoxer",
      selected: false,
      description: "Don't forget the pickles",
      imageSrc: "/assets/images/burgerBoxer.png"
  },
  {
      text: "Spartan Soda",
      value: "spartanSoda",
      selected: false,
      description: "300 psi of power",
      imageSrc: "/assets/images/colaFighter.png"
  },
  {
    text: "Taco Templar",
    value: "tacoTemplar",
    selected: false,
    description: "Get ready to feel the crunch",
    imageSrc: "/assets/images/tacoFighter.png"
  },
  {
    text: "French Fry Samurai",
    value: "frenchFry",
    selected: true,
    description: "Once he unsheathes his blades he must draw ketchup",
    imageSrc: "/assets/images/frenchFry.png"
 },
  {
      text: "Noodle Ninja",
      value: "noodleNinja",
      selected: false,
      description: "He's coming to take you out",
      imageSrc: "/assets/images/noodleFighter.png"
  },
  {
    text: "Burrito Barbarian",
    value: "burritoBarbarian",
    selected: false,
    description: "If you're a Romaine* you should run",
    imageSrc: "/assets/images/burritoFighter.png"
  }
];

$('#myDropdown').ddslick({
  data: ddData,
  width: 300,
  imagePosition: "left",
  selectText: "Select your favorite avatar",
  onSelected: function (data) {
      console.log(data);
  }
})

// div#myDropdown.dd-container
//  context: document
//    images
//      0: img.dd-selected-image
//        src: "image link"