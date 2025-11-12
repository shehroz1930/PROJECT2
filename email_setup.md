# 📧 Email Setup Guide for Prime Auto Parts Website

## 🚀 Quick Setup (5 minutes)

Your website is now configured to send emails when customers submit forms! Here's how to complete the setup:

### 1. **Create Formspree Account**
1. Go to [https://formspree.io](https://formspree.io)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. **Create a New Form**
1. In your Formspree dashboard, click "New Form"
2. Choose "HTML Form" 
3. Set the form name: "Prime Auto Parts Contact Forms"
4. Set the email to receive submissions: `info@primeautoparts.com`
5. Click "Create Form"

### 3. **Get Your Form Endpoint**
1. After creating the form, you'll see a form endpoint URL like:
   `https://formspree.io/f/xpwnqkqk`
2. **Copy this URL** - you'll need it in the next step

### 4. **Update Your Website**
Replace the form action URLs in your HTML files with your actual Formspree endpoint:

**Files to update:**
- `index.html` (2 forms)
- `contact.html` (1 form)
- `services.html` (1 form)
- `running-cars.html` (1 form)
- `damaged-cars.html` (1 form)
- `non-running-cars.html` (1 form)
- `free-towing.html` (1 form)

**Find this line in each file:**
```html
action="https://formspree.io/f/xpwnqkqk"
```

**Replace with your actual endpoint:**
```html
action="https://formspree.io/f/YOUR_ACTUAL_ENDPOINT"
```

### 5. **Test Your Forms**
1. Go to your website: `http://192.168.100.74:3000`
2. Fill out and submit a form
3. Check your email (`info@primeautoparts.com`) for the submission
4. Check your Formspree dashboard for form analytics

## 📋 What Happens When Customers Submit Forms

### **Contact Form** (`contact.html`)
- **Email Subject:** "New Contact Form Submission - Prime Auto Parts"
- **Contains:** Name, email, phone, car details, message
- **Sent to:** `info@primeautoparts.com`

### **Quote Forms** (All pages)
- **Email Subject:** "New Quote Request - Prime Auto Parts"  
- **Contains:** Car make, model, year, condition, contact info
- **Sent to:** `info@primeautoparts.com`

### **Success Messages**
- Customers see a success message after submitting
- They're redirected back to the same page with a success parameter
- No page refresh needed - smooth user experience

## 🎯 Formspree Features You Get

### **Free Plan Includes:**
- ✅ 50 submissions per month
- ✅ Email notifications
- ✅ Spam protection
- ✅ Form analytics
- ✅ Custom email subjects
- ✅ Reply-to functionality

### **Paid Plans** (if you need more):
- More submissions per month
- Custom styling
- Advanced integrations
- Priority support

## 🔧 Troubleshooting

### **Forms Not Sending Emails?**
1. Check your Formspree endpoint URL is correct
2. Verify your email address in Formspree settings
3. Check spam folder for emails
4. Look at Formspree dashboard for submission logs

### **Getting Spam?**
- Formspree has built-in spam protection
- You can enable additional filters in your dashboard
- Consider upgrading to a paid plan for advanced spam protection

### **Need More Submissions?**
- Free plan: 50/month
- Paid plans start at $10/month for 1,000 submissions

## 📞 Support

- **Formspree Support:** [https://formspree.io/help](https://formspree.io/help)
- **Your Website:** `http://192.168.100.74:3000`

---

## 🎉 You're All Set!

Once you complete the setup above, every form submission on your website will automatically send an email to `info@primeautoparts.com` with all the customer's information. This will help you:

- ✅ **Never miss a lead** - Get instant email notifications
- ✅ **Respond quickly** - Reply directly to customer emails  
- ✅ **Track inquiries** - See all submissions in one place
- ✅ **Professional service** - Customers get confirmation messages

**Next Steps:**
1. Set up your Formspree account
2. Update the form endpoints in your HTML files
3. Test the forms
4. Start receiving customer inquiries via email!

---

*This setup uses Formspree, a reliable service trusted by thousands of websites for form handling.*



