---
title: "Comfort Resume Documentation"
description: "Documentation for Comfort Resume"
keywords: "comfort resume, wordpress, wordpress resume plugin, plugin"
url: "/comfortresume/user-guide/emails"
type: "type"
site_name: "Comfort HRM"
image: "https://comforthrm.com/assets/images/seo.png"
card: "article"

---

## Email System

The Comfort Resume plugin includes an email system to notify users about various events such as resume application submissions, resume approvals, and more.

#### Customizing Email Templates

1. Copy the desired email template file from `wp-content/plugins/comfortresume/templates/emails/` to your theme's directory, maintaining the folder structure.
2. Edit the copied template file as needed.

#### Available Email Templates
- **Resume creation guest user Email for Admin**: `guest_resume_create_to_admin.php`
- **Job Application Email with resume Email**: `job_applied_by_resume.php`
- **Resume Saved as Draft Email For User**: `resume_draft_to_user.php`
- **Resume Published Email For User**: `resume_published_to_user.php`
- **Resume creation guest user Email For User**: `guest_resume_create_to_user.php`
- **Resume verified  Email For Admin**: `guest_resume_verify_to_admin.php`
- **Resume verified  Email For User**: `guest_resume_verify_to_user.php`
### Single Email Settings

1. Go to `Comfort Resume > Emails`.
2. Configure the following email settings:

   - **Subject**: The subject of the email.
   - **Email heading**: The heading of the email.
   - **Additional content**: The Additional content of the emails.
   - **From Name**: The name that will appear as the sender of the emails.
   - **From Email**: The email address that will appear as the sender of the emails.
   - **Admin Email**: The email address where admin notifications will be sent.
   - **CC/BCC**: The CC & BCC of the email.

3. Save changes.

