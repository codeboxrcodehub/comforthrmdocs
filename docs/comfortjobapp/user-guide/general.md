---
title: "Comfort Job Application Documentation"
description: "Documentation for Comfort Job Application"
keywords: "Comfort Job Application index keywords."
url: "/comfortjobapp/user-guide/general"
type: "type"
site_name: "Comfort HRM"
image: "https://comforthrm.com/assets/images/seo.png"
card: "article"

---

# Comfort Job Application User Guide

ComfortJobApp simplifies the job application process for candidates and recruiters. Manage applications efficiently with this plugin.

## File Structure

```
resume/
├── assets/
│   ├── css/
│   ├── js/
│   ├── vendors/
├── includes/
│   ├── Api/
│   ├── Controllers/
│   ├── Helpers/
│   ├── Models/
│   ├── ComfortJobApp.php
│   ├── ComfortJobAppAdmin.php
│   ├── ComfortJobAppHooks.php
│   ├── ComfortJobAppPublic.php
│   └── ComfortJobAppUninstall.php
├── templates/
│   ├── admin/
│   ├── emails/
│   ├── form-fields/
├── comfortjobapp.php
└── readme.txt
```
## Key Files and Directories

- **assets/**: Contains CSS, JavaScript, and vendor files.
- **includes/**: Contains core PHP files for the plugin, including API routes, controllers, helpers, models, and main plugin classes.
- **templates/**: Contains template files for the plugin's frontend and admin views.
- **comfortjobapp.php**: The main plugin file that initializes the plugin.

### ComfortJobApp

The main class for the plugin, located in `wp-content/plugins/comfortjobapp/includes/ComfortJobApp.php`.

```php
class ComfortJobApp {
    public static function instance() {
        // Returns the main instance of ComfortJobApp.
    }

    public function __construct() {
        // Constructor method.
    }

    private function include_files() {
        // Includes necessary files.
    }
}
```
### ComfortJobAppAdmin
Handles the admin functionalities of the plugin, located in `ComfortJobAppAdmin.php`.

```
<?php
class ComfortJobAppAdmin {
    public function create_menus() {
        // Creates admin menus.
    }

    public function display_resume_listing_page() {
        // Displays the resume listing page.
    }
}
```
### ComfortJobAppPublic
Handles the public-facing functionalities of the plugin, located in `ComfortJobAppPublic.php`.

```
<?php
class ComfortJobAppPublic {
    public function enqueue_scripts() {
        // Enqueues public scripts and styles.
    }
}
```

## Uninstallation

The uninstallation script is located in ComfortJobAppUninstall.php.

```
<?php
ComfortJobAppUninstall::uninstall();
```