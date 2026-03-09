# Email.js Setup Instructions

To complete the email functionality for your Luminarix contact form, you need to configure Email.js with your credentials.

## Steps to Configure Email.js:

### 1. Create Email.js Account
- Go to [Email.js](https://www.emailjs.com/)
- Sign up for a free account

### 2. Create Email Service
- Go to Email Services in your dashboard
- Add a new email service (Gmail recommended)
- Follow the instructions to connect your Gmail account
- Note down your **Service ID**

### 3. Create Email Template
- Go to Email Templates in your dashboard
- Create a new template
- Use this template structure:

```
From: {{from_name}} ({{from_email}})
Phone: {{from_phone}}
Service Type: {{service_type}}
Message: {{message}}

This message was sent from the Luminarix contact form.
```

- Note down your **Template ID**

### 4. Get Public Key
- Go to Account > API Keys
- Copy your **Public Key**

### 5. Update Configuration
Replace the placeholder values in `/src/services/emailService.js`:

```javascript
const EMAILJS_PUBLIC_KEY = 'YOUR_ACTUAL_PUBLIC_KEY_HERE';
const EMAILJS_SERVICE_ID = 'YOUR_ACTUAL_SERVICE_ID_HERE';
const EMAILJS_TEMPLATE_ID = 'YOUR_ACTUAL_TEMPLATE_ID_HERE';
```

### 6. Test the Form
- Start your development server: `npm run dev`
- Fill out the contact form and submit
- Check if you receive an email at luminarix.official@gmail.com

## Important Notes:
- The email will be sent from your connected Email.js service email
- The recipient is set to luminarix.official@gmail.com
- Form validation is already implemented
- Success/error messages will display to users
- The form resets after successful submission

## Security Considerations:
- Your Public Key is safe to expose in frontend code
- Never expose your Private Key in frontend code
- Consider adding reCAPTCHA for production use
