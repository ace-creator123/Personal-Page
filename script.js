document.getElementById('contactForm')
.addEventListener('submit', function(event)
 { event.preventDefault(); 
    // Prevent form submission 
    const name = document.getElementById('name').value; const email = document.getElementById('email').value; const message = document.getElementById('message').value; // Simple form validation
     if (name && email && message) { document.getElementById('response').textContent = `Thank you, ${name}! Your message has been sent.`; } else { document.getElementById('response').textContent = 'Please fill in all the fields.'; } }); 