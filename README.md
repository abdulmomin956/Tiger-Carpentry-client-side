# Tiger Carpentry
## [Live Site](https://tiger-carpentry.web.app/)

<u><b>Features</b></u>
* Full Funcional website with full stack development.
* This is SPA site with react route and nested route.
* Users can buy a product purchase with atm card info.
* They can save their data in website database.
* Admin can manage all product. He/She can make another user admin too.
<hr>
<u>Techology</u><br>
Frontend: React.js, TailwindCSS, DaisyUI, Firebase, Toastify<br>
Backend: Nodejs, Express, MongoDB, JWT<br>
Payment gateway: Stripe
<hr>
<u>User credential-</u><br>
email: salman@khan.com<br>
pass: 123456 
<hr>
<u>Admin credential-</u><br>
  email: john@sina.com<br>
  <form onsubmit="sendEmail(event)" id="myform">
    <input type='email' name='user_email' placeholder='Your email' required> <button type="submit">Get the
      password</button>
  </form>
  <hr>

  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
  </script>
  <script type="text/javascript">
    (function () {
      emailjs.init("7UHd1JsNtmzGFUsnP");
    })();
  </script>
  <script type="text/javascript">
    function sendEmail(e) {
      e.preventDefault();
      var frm = document.getElementById('myform')
      console.log('clicked');
      emailjs.sendForm("service_c5cjb2p", 'template_b42h0bk', '#myform')
        .then(function (response) {
        //   console.log('SUCCESS!', response.status, response.text);
          alert('SUCCESS!', 'Please check your email');
          frm.reset();
        }, function (error) {
          console.log('FAILED...', error);
        });
    } 
  </script>