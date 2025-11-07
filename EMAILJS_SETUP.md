# EmailJS Setup Instructions

To enable email functionality for the "Get Started" form, you need to set up EmailJS (it's free for up to 200 emails per month).

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Create an Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (arbabhussan63@gmail.com)
5. Copy the **Service ID** (you'll need this)

## Step 3: Create an Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template structure:

**Subject:** New Get Started Form Submission from {{from_name}}

**Content:**
```
New form submission from Arbabxada website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Interested In: {{service}}
Newsletter Subscription: {{subscribe}}

Message:
{{message}}

---
This email was sent from the Arbabxada Get Started form.
Reply to: {{reply_to}}
```

4. Set the "To Email" field to: arbabhussan63@gmail.com
5. Set the "From Name" field to: Arbabxada Website
6. Set the "Reply To" field to: {{reply_to}}
7. Save the template and copy the **Template ID**

## Step 4: Get Your Public Key
1. Go to "Account" → "General" in EmailJS dashboard
2. Copy your **Public Key** (also called API Key)

## Step 5: Update the Code
1. Open `my-react-app/src/conponents/GetStarted/GetStartedModal.jsx`
2. Find line 71-75 and replace with your actual values:

**Find this code:**
```javascript
const response = await emailjs.send(
  'YOUR_SERVICE_ID',  // Replace with your EmailJS Service ID (e.g., 'service_abc123')
  'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID (e.g., 'template_xyz789')
  templateParams,
  'YOUR_PUBLIC_KEY'   // Replace with your EmailJS Public Key (e.g., 'abc123xyz456')
)
```

**Replace with your actual values:**
```javascript
const response = await emailjs.send(
  'service_abc123',  // Your Service ID from Step 2
  'template_xyz789', // Your Template ID from Step 3
  templateParams,
  'abc123xyz456'     // Your Public Key from Step 4
)
```

**Example:**
If your Service ID is `service_abcd1234`, Template ID is `template_xyz5678`, and Public Key is `abcdefgh123456`, it would look like:

```javascript
const response = await emailjs.send(
  'service_abcd1234',
  'template_xyz5678',
  templateParams,
  'abcdefgh123456'
)
```

## Testing
1. Fill out the form on your website
2. Submit it
3. Check your email (arbabhussan63@gmail.com)
4. You should receive the form submission with all details

## Troubleshooting
- Make sure all IDs are correct (no extra spaces)
- Check that your EmailJS service is connected properly
- Verify your template has all the variables ({{from_name}}, {{from_email}}, etc.)
- Check the browser console for any error messages

## Security Note
The Public Key is safe to use in frontend code. EmailJS uses it to identify your account but it doesn't grant full access.

## Using Same Credentials for Multiple Websites

**Yes, you can use the same EmailJS credentials for multiple websites!**

### What You Can Reuse:
- ✅ **Public Key**: Same across all websites (tied to your EmailJS account)
- ✅ **Service ID**: Same service (e.g., Gmail) can be used for all websites
- ✅ **Template ID**: Can reuse the same template, or create different ones for each website

### Options:

**Option 1: Use Same Template for All Websites**
- Use the same Service ID, Template ID, and Public Key
- All websites will send emails using the same format
- Simplest setup - just copy the same credentials

**Option 2: Different Templates per Website (Recommended)**
- Use the same Service ID and Public Key
- Create separate Template ID for each website
- Allows customized email formats for each site
- Example:
  - Website 1: `template_website1`
  - Website 2: `template_website2`
  - Both use: `service_gmail` and same Public Key

### Benefits of Reusing:
- ✅ Faster setup - no need to create new services
- ✅ Easier management - one set of credentials
- ✅ Same email account receives all submissions

### When to Create Separate Templates:
- If you want different email formats for different websites
- If you want to send to different email addresses per website
- If you want to track which website the submission came from

**Note**: The free tier allows 200 emails/month total across all websites using your account.

