# 📧 EmailJS Setup Guide for Prime Auto Parts Website

## 🚀 Quick Setup (10 minutes)

Your website is now configured to use EmailJS instead of Formspree! Here's how to complete the setup:

### 1. **Create EmailJS Account**
1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. **Add Email Service**
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account: **Aliraza4102001@gmail.com**
5. Note down the **Service ID** (you'll need this)

### 3. **Create Email Template**
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** `New Contact Form Submission - Prime Auto Parts`

**Content:**
```
Hello,

You have received a new contact form submission from your Prime Auto Parts website:

=== CONTACT INFORMATION ===
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Preferred Contact Method: {{preferred_contact}}

=== CAR DETAILS ===
Make: {{car_make}}
Model: {{car_model}}
Year: {{car_year}}
Condition: {{car_condition}}

=== MESSAGE ===
{{message}}

=== ADDITIONAL INFO ===
To Email: {{to_email}}
Submission Time: {{current_time}}

---
This email was sent from your Prime Auto Parts website contact form.
Please respond to the customer at: {{from_email}}
```

4. Save the template and note down the **Template ID**

### 3.1. **Alternative Simple Template (if above doesn't work)**
If you're still getting empty emails, try this simpler template:

**Subject:** `Contact Form - {{from_name}}`

**Content:**
```
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Message: {{message}}

Car: {{car_make}} {{car_model}} {{car_year}}
Condition: {{car_condition}}

Time: {{current_time}}
```

### 4. **Get Your Public Key**
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)
3. Copy this key

### 5. **Update Your Website**
Replace the placeholder values in your HTML files:

**Files to update:**
- `contact.html`
- `index.html`

**Find these lines and replace:**
```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
```

**Replace with your actual values:**
```javascript
emailjs.init("your_actual_public_key_here");
emailjs.send('your_service_id_here', 'your_template_id_here', formData)
```

### 6. **Test Your Forms**
1. Go to your website: `http://192.168.100.74:3000`
2. Fill out and submit a form
3. Check your email (**Meharraza7474@gmail.com**) for the submission
4. Check your EmailJS dashboard for delivery logs

## 📋 What Happens When Customers Submit Forms

### **Contact Form** (`contact.html`)
- **Email Subject:** "New Contact Form Submission - Prime Auto Parts"
- **Contains:** Name, email, phone, car details, message
- **Sent to:** **Aliraza4102001@gmail.com**

### **Quote Forms** (Homepage)
- **Email Subject:** "New Contact Form Submission - Prime Auto Parts"
- **Contains:** Car make, model, year, condition, contact info
- **Sent to:** **Aliraza4102001@gmail.com**

### **Success Messages**
- Customers see a success message after submitting
- Forms reset automatically
- No page refresh needed - smooth user experience

## 🎯 EmailJS Features You Get

### **Free Plan Includes:**
- ✅ 200 emails per month
- ✅ Email templates
- ✅ Multiple email services
- ✅ Form integration
- ✅ Delivery tracking
- ✅ Spam protection

### **Paid Plans** (if you need more):
- More emails per month
- Advanced templates
- Priority support
- Custom domains

## 🔧 Troubleshooting

### **Forms Not Sending Emails?**
1. Check your EmailJS public key is correct
2. Verify your Service ID and Template ID
3. Check your email service connection in EmailJS dashboard
4. Look at EmailJS dashboard for delivery logs
5. Check browser console for JavaScript errors

### **Getting Spam?**
- EmailJS has built-in spam protection
- You can configure additional filters in your dashboard
- Consider using a dedicated email service for better deliverability

### **Need More Emails?**
- Free plan: 200/month
- Paid plans start at $15/month for 1,000 emails

## 📞 Support

- **EmailJS Support:** [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **Your Website:** `http://192.168.100.74:3000`

---

## 🎉 You're All Set!

Once you complete the setup above, every form submission on your website will automatically send an email to **Aliraza4102001@gmail.com** with all the customer's information.

### **Benefits of EmailJS over Formspree:**
- ✅ **More reliable** - Direct email service integration
- ✅ **Better customization** - Full control over email templates
- ✅ **Real-time delivery** - Instant email notifications
- ✅ **Professional appearance** - Custom email formatting
- ✅ **No redirects** - Forms stay on your website

### **Next Steps:**
1. Set up your EmailJS account
2. Create your email service and template
3. Update the configuration in your HTML files
4. Test the forms
5. Start receiving customer inquiries via email!

---

*This setup uses EmailJS, a reliable service trusted by thousands of websites for email functionality.*



