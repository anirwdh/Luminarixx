import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_PUBLIC_KEY = 'cfePsxk3ay_UresGt';
const EMAILJS_SERVICE_ID = 'service_9o2r4l8';
const EMAILJS_TEMPLATE_ID = 'template_ucx8ifs';

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

// Send email function
export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      service_type: formData.service,
      message: formData.message,
      to_email: 'luminarix.official@gmail.com'
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return {
      success: true,
      message: 'Email sent successfully!',
      response
    };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      success: false,
      message: 'Failed to send email. Please try again.',
      error
    };
  }
};
