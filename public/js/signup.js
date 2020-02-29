$(document).ready(function () {
  // Getting references to our form and input
  const signUpForm = $('form.signup-form')
  const emailInput = $('input#email-input')
  const passwordInput = $('input#password-input')
<<<<<<< HEAD
  const userNameInput = $('input#username-input')
=======
  const usernameInput = $('input#username-input')
>>>>>>> ff98071133cadca47b404ff0dce93b9d2dae794f

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on('click', function (event) {
    event.preventDefault()
    const userData = {
      email: emailInput.val().trim(),
<<<<<<< HEAD
      password: passwordInput.val().trim(),
      userNameInput: userNameInput.val().trim()
=======
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim()
>>>>>>> ff98071133cadca47b404ff0dce93b9d2dae794f
    }
    console.log(userData)

    if (!userData.email || !userData.username || !userData.password) {
      return
    }
    // If we have an email and password, run the signUpUser function
<<<<<<< HEAD
    signUpUser(userData.email, userData.password, userData.username)
    event.preventDefault()
=======
    signUpUser(userData.email, userData.username, userData.password)
>>>>>>> ff98071133cadca47b404ff0dce93b9d2dae794f
    emailInput.val('')
    usernameInput.val('')
    passwordInput.val('')
    userNameInput.val('')
  })

  // Does a post to the signup route. If successful, we are redirected to the vote page
  // Otherwise we log any errors
<<<<<<< HEAD
  function signUpUser (email, password, username) {
    event.preventDefault()
    $.post('/api/signup', {
      email: email,
      password: password,
      username: username
=======
  function signUpUser (email, username, password) {
    $.post('/api/signup', {
      email: email,
      username: username,
      password: password
>>>>>>> ff98071133cadca47b404ff0dce93b9d2dae794f
    })
      .then(function (data) {
        window.location.replace('/vote')
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr)
  }

  function handleLoginErr (err) {
<<<<<<< HEAD
    $('#alert.msg').text(err.responseJSON)
    $('#alert').fadeIn('Please enter a valid email')
    
=======
    $('#alert .msg').text(err.responseJSON)
    $('#alert').fadeIn(500)
>>>>>>> ff98071133cadca47b404ff0dce93b9d2dae794f
  }
})
