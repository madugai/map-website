# Strapi Deployment Guide (Monorepo)

This guide explains how to deploy your Strapi sub-folder (`/strapi-cms`) to production using **Railway**, and how to handle persistent image storage using **Cloudinary**.

---

## 🏗️ Project Structure
Your project is set up as a **Monorepo**:
- `/` (Root) -> Next.js Website
- `/strapi-cms` -> Strapi Backend

---

## 1. Prepare Persistent Image Storage (Cloudinary)
In production, Strapi's local disk is "ephemeral" (files disappear on redeploy). To keep your images, you must use Cloudinary.

1.  Create a free account at [Cloudinary.com](https://cloudinary.com).
2.  In your local terminal (`/strapi-cms`), install the plugin:
    ```bash
    cd strapi-cms
    npm install @strapi/provider-upload-cloudinary
    ```
3.  Create/Update `/strapi-cms/config/plugins.ts` (or `.js`):
    ```javascript
    export default ({ env }) => ({
      upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
          },
          actionOptions: {
            upload: {},
            delete: {},
          },
        },
      },
    });
    ```

---

## 2. Push to GitHub
Ensure your code is pushed to a GitHub repository:
1.  `git add .`
2.  `git commit -m "Add Strapi CMS and deployment config"`
3.  `git push origin main`

---

## 3. Deploy to Railway.app
Railway is the best host for Strapi because it provides a PostgreSQL database automatically.

1.  Login to [Railway.app](https://railway.app/).
2.  Click **New Project** > **Deploy from GitHub repository**.
3.  Select your repo.
4.  **Crucial Settings**:
    *   Railway will ask for a **Root Directory**. Enter: `strapi-cms`
    *   Railway will automatically detect Strapi and ask to add a **PostgreSQL Database**. Say Yes.
5.  Wait for the first build (it might fail initially until you add variables).

---

## 4. Configure Environment Variables
In the Railway dashboard, go to the **Variables** tab for your Strapi service and add these:

| Key | Value (Example) |
| :--- | :--- |
| `NODE_ENV` | `production` |
| `STRAPI_URL` | `https://your-railway-url.up.railway.app` |
| `APP_KEYS` | (Copy from your local `.env`) |
| `API_TOKEN_SALT` | (Copy from your local `.env`) |
| `ADMIN_JWT_SECRET` | (Copy from your local `.env`) |
| `JWT_SECRET` | (Copy from your local `.env`) |
| **Cloudinary** | |
| `CLOUDINARY_NAME` | (From Cloudinary Dashboard) |
| `CLOUDINARY_KEY` | (From Cloudinary Dashboard) |
| `CLOUDINARY_SECRET` | (From Cloudinary Dashboard) |

---

## 5. Update the Frontend (Next.js)
Once the CMS is live at `https://your-cms.up.railway.app`:

1.  **Vercel/Production Environment Variables**:
    Update `NEXT_PUBLIC_STRAPI_API_URL` to your production CMS URL.
    
2.  **next.config.ts**:
    Ensure your production domain is added to `remotePatterns`:
    ```typescript
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // For Cloudinary images
      },
      {
        protocol: 'https',
        hostname: 'your-railway-url.up.railway.app', // For direct API images
      }
    ]
    ```

---

## 6. Accessing the Production Admin
Your admin panel will be at:
`https://your-railway-url.up.railway.app/admin`

*Note: You will need to create a **new** admin user for production. Your local users do not sync to production.*
