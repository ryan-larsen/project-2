$(document).ready(function () {
  // Getting references to our form and input
  const signUpForm = $('form.login-form')
  const emailInput = $('input#email-input')
  const passwordInput = $('input#password-input')
  const userNameInput = $('input#username-input')

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on('click', function (event) {
    event.preventDefault()
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      userNameInput: userNameInput.val().trim()
    }
    console.log(userData)

    if (!userData.email || !userData.password) {
      return
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.username)
    event.preventDefault()
    emailInput.val('')
    passwordInput.val('')
    userNameInput.val('')
  })

  // Does a post to the signup route. If successful, we are redirected to the vote page
  // Otherwise we log any errors
  function signUpUser (email, password, username) {
    event.preventDefault()
    $.post('/api/signup', {
      email: email,
      password: password,
      username: username
    })
      .then(function (data) {
        window.location.replace('/vote')
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr)
  }

  function handleLoginErr (err) {
    $('#alert.msg').text(err.responseJSON)
    $('#alert').fadeIn('Please enter a valid email')
    
  }
})
