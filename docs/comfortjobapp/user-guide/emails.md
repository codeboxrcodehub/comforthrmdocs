---
title: "Comfort Job Application Documentation"
description: "Documentation for Comfort Job Application"
keywords: "comfort resume, wordpress, wordpress resume plugin, plugin"
url: "/comfortjobapp/user-guide/emails"
type: "type"
site_name: "Comfort HRM"
image: "https://comforthrm.com/assets/images/seo.png"
card: "article"

---

## Email System

The Comfort Job Application plugin includes an email system to notify users about various events such as job application submissions.

#### Customizing Email Templates

1. Copy the desired email template file from `wp-content/plugins/comfortjobapp/templates/emails/` to your theme's directory, maintaining the folder structure.
2. Edit the copied template file as needed.

#### Available Email Templates
- **Notify Employer on application submission**: `job_apply_employer_notification.php`
- **Notify Candidate on application submission**: `job_apply_candidate_notification.php`
- **Notify guest user on application submission**: `guest_email_confirmation.php`

### Single Email Settings

1. Go to `Comfort Job Application > Emails`.
2. Configure the following email settings:

   - **Subject**: The subject of the email.
   - **Email heading**: The heading of the email.
   - **Additional content**: The Additional content of the emails.
   - **From Name**: The name that will appear as the sender of the emails.
   - **From Email**: The email address that will appear as the sender of the emails.
   - **Admin Email**: The email address where admin notifications will be sent(if admin notification).
   - **CC/BCC**: The CC & BCC of the email.

3. Save changes.

