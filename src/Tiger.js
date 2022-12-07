import React from 'react';
import emailjs from 'emailjs-com';
const Tiger = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        var frm = document.getElementById('myform')
        emailjs.sendForm(
            'service_c5cjb2p',
            'template_b42h0bk',
            '#myform',
            '7UHd1JsNtmzGFUsnP'
        )
            .then((response) => {
                // console.log(response);
                console.log('SUCCESS!', response.status, response.text);
                alert('SUCCESS! Please check your email');
                frm.reset();
            })
            .catch((err) => {
                alert('FAILED...', err);
            });
    };
    return (
        <div style={{ height: '70vh' }} className='text-center flex flex-col justify-center'>
            <h3 className='text-2xl font-bold mb-2'>Get an admin credential of Tiger Carpentry</h3>
            <form onSubmit={sendEmail} id="myform">
                <input className='input' type='email' name='user_email' placeholder='Your email' required /> <button className='btn' type="submit">Get the
                    password</button>
            </form>
        </div>
    );
};

export default Tiger;