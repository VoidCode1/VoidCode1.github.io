function showForm(formId) {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('forgot-pass-form').style.display = 'none';
  document.getElementById('registration-form').style.display = 'none';

  document.getElementById(formId).style.display = 'block';
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = {
    index: document.getElementById('index').value,
    nrc: document.getElementById('nrc').value,
    email: document.getElementById('email-register').value,
    cadre: document.getElementById('cadre').value,
      password: document.getElementById('password-register').value,
  };

  const success = document.getElementById('notify-register-success');
  const error = document.getElementById('notify-register-error');

  fetch('https://students-9af6.restdb.io/rest/students', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-apikey': '512d1a743d5834ba317de004b76a998f5b04f'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (!response.ok) {
      error.style.display = 'block';
    }
    return response.json();
  })
  .then(data => {
    success.style.display = 'block';
  })
  .catch(error => {   
    error.style.display = 'block';
    console.error('Error:', error);
  });
});

async function getData() {
  const url = 'https://students-9af6.restdb.io/rest/students';
  const apiKey = '512d1a743d5834ba317de004b76a998f5b04f';
  const headers = {
    'Content-Type': 'application/json',
    'x-apikey': apiKey
  };

  const dataDase = document.getElementById("student-data");

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: headers,
      mode: 'cors',
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    // Process the retrieved data here
    // Stringify the data before assigning to innerHTML
    return JSON.stringify(data);
  } catch (error) {
      ('Error fetching data: ' + error.message);
    return null;
  }
}

function validateLoginWithApiData(apiData) {
  var email = document.getElementById('email-login').value;
  var password = document.getElementById('password').value;
    
  const success = document.getElementById('notify-login-success');
  const error = document.getElementById('notify-login-error');
    // Convert apiData to an array
  const dataArray = apiData;
// Initialize a variable to store the user data
  var user = null;

  // Loop through the array of data to find the user with the matching email
  for (var i = 0; i < dataArray.length; i++) {
    if (dataArray[i].email === email) {
      user = dataArray[i];
      break; // Exit the loop once the user is found
    }
  }
    
  if (!user) {
    error.style.display = 'block';
    return false;
  }

  // Check if password matches the password associated with the email
  if (user.password !== password) {
    error.style.display = 'block';
    return false;
  }

  // Redirect to index.html if user is valid
  window.location.href = 'index.html';
    success.style.display = 'block';
  return true;
}

async function validateLoginForm() {
  try {
    const apiData = await getData();
    if (apiData) {
      return validateLoginWithApiData(apiData);
    } else {
      // Handle case where data retrieval fails
      return false;
    }
  } catch (error) {
    // Handle errors here
    console.error('Error:', error);
    return false;
  }
}

document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  await validateLoginForm();
});