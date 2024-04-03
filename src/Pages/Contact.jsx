import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    message: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleInputBlur = (e) => {
    const { name } = e.target;
    setTouchedFields({
      ...touchedFields,
      [name]: true
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting || isSubmitted) {
      return;
    }
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setTouchedFields({
        name: true,
        email: true,
        message: true
      });
    } else {
      setIsSubmitting(true);

      fetch('https://getform.io/f/pbgxpyxa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setIsSubmitted(true); 
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    }
  };

  
  return (
    <div name= 'Contact'
    className='bg-gradient-to-b from-gray-950 to-black w-full border-b-2 border-gray-500 md:border-b-0'>
      <div className='flex flex-col justify-center max-w-screen-lg mx-auto h-full p-4 py-20'>
        <h2 className='text-2xl sm:text-5xl font-bold pb-12'>Contact Me</h2>

        <div className='flex justify-center items-center'>
          <form className='flex flex-col w-full md:w-2/3 relative p-6'
            onSubmit={handleSubmit}
          >
            <input
              type='text'
              name='name'
              placeholder='Your Name, Please'
              className='p-2 bg-transparent focus:outline-none'
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {touchedFields.name && !formData.name && <p className='text-red-500'>Please enter your name</p>}
            <input
              type='text'
              name='email'
              placeholder='Your Email, Please'
              className='p-4 my-4 bg-transparent focus:outline-none'
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {touchedFields.email && !formData.email && <p className='text-red-500'>Please enter your email</p>}
            <textarea
              name='message'
              placeholder='Your Message'
              rows='6'
              className= 'p-2 bg-transparent focus:outline-none'
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {touchedFields.message && !formData.message && <p className='text-red-500'>Please enter your message</p>}
            

            <button
              type='submit'
              className={`bg-gradient-to-r from-amber-400 to-amber-600 w-fit px-6 py-3 mt-4 flex mx-auto items-center rounded-md hover:scale-110 duration-300 ${isSubmitted ? 'cursor-not-allowed' : ''}`}
              disabled={!formData.name || !formData.email || !formData.message}>
             {isSubmitted ? 'Submitted' : (isSubmitting ? 'Submitting...' : 'Let\'s make magic')}

            </button>
            <div className="absolute top-0 left-0 w-2 h-2 bg-white rounded-tl-xl"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-white rounded-bl-xl"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-white rounded-br-lg"></div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
