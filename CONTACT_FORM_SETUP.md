# Contact Form Email Setup Guide

## Overview
The contact form on the Madugai website sends messages to **info@madugai.com** using Web3Forms API.

---

## ✅ Setup Complete (Local)

Your Web3Forms access key has been added to `.env.local`:

```env
WEB3FORMS_ACCESS_KEY=34c089c-5e68-4b85-8774-4a70a8b28725
```

---

## 🚀 Production Deployment (Vercel)

### Step 1: Go to Vercel Dashboard

1. Open [https://vercel.com](https://vercel.com)
2. Log in to your account
3. Click on your **map-website** project

### Step 2: Add Environment Variable

1. Click **Settings** in the top menu
2. Click **Environment Variables** in the left sidebar
3. Add the following:

| Name | Value |
|------|-------|
| `WEB3FORMS_ACCESS_KEY` | `34c089c-5e68-4b85-8774-4a70a8b28725` |

4. Select environments: ✅ Production, ✅ Preview, ✅ Development
5. Click **Save**

### Step 3: Redeploy

1. Go to **Deployments** tab
2. Click the **...** menu on the latest deployment
3. Click **Redeploy**

---

## 🧪 Testing

### Local Testing

```bash
npm run dev
```

1. Go to `http://localhost:3000/contact`
2. Fill out the form
3. Click "Send Message"
4. Check your email at **info@madugai.com**

### Production Testing

1. Go to your live website `/contact` page
2. Submit a test message
3. Verify email is received at **info@madugai.com**

---

## 📁 Files Configuration

| File | Purpose |
|------|---------|
| `.env.local` | Environment variables (local only) |
| `src/app/api/contact/route.ts` | API endpoint |
| `src/app/contact/page.tsx` | Contact form UI |

---

## 🔧 Troubleshooting

### Form shows "Failed to send message"

1. Check if environment variable is set correctly
2. Restart the development server
3. Check browser console for errors

### Not receiving emails

1. Check spam/junk folder
2. Verify email in Web3Forms dashboard: [https://web3forms.com](https://web3forms.com)
3. Make sure the access key matches

### Vercel deployment not working

1. Verify environment variable is added in Vercel
2. Redeploy after adding the variable
3. Check Vercel function logs for errors

---

## 📧 Email Format

When someone submits the contact form, you'll receive an email like this:

**Subject:** Contact Form: [Subject Selected]

**Body:**
- Name: [Customer Name]
- Phone: [Customer Phone]
- Message: [Customer Message]

---

## 🔗 Resources

- Web3Forms Dashboard: [https://web3forms.com](https://web3forms.com)
- Web3Forms Documentation: [https://docs.web3forms.com](https://docs.web3forms.com)
- Vercel Environment Variables: [https://vercel.com/docs/environment-variables](https://vercel.com/docs/environment-variables)

---

## ✅ Checklist

- [x] Web3Forms account created
- [x] Access key generated
- [x] `.env.local` configured
- [ ] Vercel environment variable added
- [ ] Production deployment tested
