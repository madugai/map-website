# Vercel Deployment Instructions

## Add Environment Variable to Vercel

### Step 1: Go to Vercel Dashboard

1. Open [https://vercel.com](https://vercel.com)
2. Log in to your account
3. Click on your **map-website** project

### Step 2: Navigate to Environment Variables

1. Click **Settings** in the top menu
2. Click **Environment Variables** in the left sidebar

### Step 3: Add the Variable

| Field | Value |
|-------|-------|
| **Name** | `WEB3FORMS_ACCESS_KEY` |
| **Value** | `34c089c-5e68-4b85-8774-4a70a8b28725` |

1. Enter the Name: `WEB3FORMS_ACCESS_KEY`
2. Enter the Value: `34c089c-5e68-4b85-8774-4a70a8b28725`
3. Select all environments:
   - ✅ Production
   - ✅ Preview
   - ✅ Development
4. Click **Save**

### Step 4: Redeploy Your Site

1. Go to **Deployments** tab
2. Click the **...** (three dots) menu on the latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete

### Step 5: Test

1. Go to your live website: `https://your-domain.com/contact`
2. Fill out the contact form
3. Submit
4. Check **info@madugai.com** for the email

---

## Done! ✅

Your contact form will now send emails to **info@madugai.com**
