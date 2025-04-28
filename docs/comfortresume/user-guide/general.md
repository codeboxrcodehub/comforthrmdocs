---
title: "Comfort Resume Documentation"
description: "Documentation for Comfort Resume"
keywords: "Comfort Resume index keywords."
url: "/resume/user-guide/general"
type: "type"
site_name: "Comfort HRM"
image: "https://comforthrm.com/assets/images/seo.png"
card: "article"

---

# Comfort Resume User Guide

The Comfort Resume plugin is designed to simplify resume/CV management within WordPress. It provides features for resume listings, resume builder related functionalities.

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
│   ├── ComfortResume.php
│   ├── ComfortResumeAdmin.php
│   ├── ComfortResumeHooks.php
│   ├── ComfortResumePublic.php
│   ├── ComfortResumeShortcode.php
│   └── ComfortResumeUninstall.php
├── templates/
│   ├── admin/
│   ├── emails/
│   ├── global/
│   ├── loop/
│   ├── resume/
│   └── shortcodes/
├── comfortresume.php
└── readme.txt
```
## Key Files and Directories

- **assets/**: Contains CSS, JavaScript, and vendor files.
- **includes/**: Contains core PHP files for the plugin, including API routes, controllers, helpers, models, and main plugin classes.
- **templates/**: Contains template files for the plugin's frontend and admin views.
- **comfortresume.php**: The main plugin file that initializes the plugin.

### ComfortResume

The main class for the plugin, located in `wp-content/plugins/comfortresume/includes/ComfortResume.php`.

```php
class ComfortResume {
    public static function instance() {
        // Returns the main instance of ComfortResume.
    }

    public function __construct() {
        // Constructor method.
    }

    private function include_files() {
        // Includes necessary files.
    }
}
```
### ComfortResumeAdmin
Handles the admin functionalities of the plugin, located in `ComfortResumeAdmin.php`.

```
<?php
class ComfortResumeAdmin {
    public function create_menus() {
        // Creates admin menus.
    }

    public function display_resume_listing_page() {
        // Displays the resume listing page.
    }
}
```
### ComfortResumePublic
Handles the public-facing functionalities of the plugin, located in `ComfortResumePublic.php`.

```
<?php
class ComfortResumePublic {
    public function enqueue_scripts() {
        // Enqueues public scripts and styles.
    }
}
```
### ComfortResumeShortcode
Handles the public-facing functionalities of the plugin, located in `ComfortResumeShortcode.php`.

```
<?php
class ComfortResumeShortcode {
    public function init_shortcode() {
        // Initializes shortcodes.
    }

    public function resume_resume_details_shortcode($atts) {
        // Handles the resume details shortcode.
    }
}
```

### Resume Details

To display resume details, use the following shortcode:

```php
[comfortresume_resume_details]
```

### Resume Archive

To display a list of resume listings, use the following shortcode:

```php
[comfortresume_resume_archive]
```

### Resume Dashboard

To display the resume dashboard, use the following shortcode:

```php
[comfortresume_resume_dashboard]
```

### Frontend Resume Management

1. Create a new page in WordPress.
2. Add the `[comfortresume_resume_manager]` shortcode to the page content.
3. Publish the page.
4. Users can now submit resume listings from the frontend.


## Uninstallation

The uninstallation script is located in ComfortResumeUninstall.php.

```
<?php
ComfortResumeUninstall::uninstall();
```