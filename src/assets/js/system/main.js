
document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.querySelector('form');
    const submit = document.querySelector("input[type='submit']")
    
    submit.addEventListener('click', async function(event) {
      event.preventDefault();
      
      submit.disabled = true;
      submit.value = 'Aguarde...';
      
      const user = document.querySelector("#user").value
      const pass = document.querySelector("#pass").value

      const formData = { user, pass }

      console.log(formData)
      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          const responseData = await response.json();

          if (responseData.success) {
            window.location.href = '/dashboard';
          } else {
            document.getElementById('error-message').textContent = `${responseData.error}`;
          }
        } else {
            document.getElementById('error-message').textContent = `${response.error}`;
        }
      } catch (error) {
            document.getElementById('error-message').textContent = 'Erro de conexão';
      } finally {
        submit.disabled = false;
        submit.value = 'Logar';
      }
    });
  });