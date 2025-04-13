---
title: "Comfort Job Documentation"
description: "Documentation for Comfort Job"
keywords: "Comfort Job index keywords."
url: "/comfortjob/user-guide/general"
type: "type"
site_name: "Comfort HRM"
image: "https://comforthrm.com/assets/images/seo.png"
card: "article"

---

# Comfort Job User Guide

The Comfort Job plugin is designed to simplify job management within WordPress. It provides features for job listings, company management, and various job-related functionalities.

## File Structure

```
comfortjob/
├── assets/
│   ├── css/
│   ├── js/
│   ├── vendors/
├── includes/
│   ├── Api/
│   ├── Controllers/
│   ├── Helpers/
│   ├── Models/
│   ├── ComfortJob.php
│   ├── ComfortJobAdmin.php
│   ├── ComfortJobHooks.php
│   ├── ComfortJobPublic.php
│   ├── ComfortJobShortcode.php
│   └── ComfortJobUninstall.php
├── templates/
│   ├── admin/
│   ├── global/
│   ├── job/
│   └── shortcodes/
├── comfortjob.php
└── readme.txt
```
## Key Files and Directories

- **assets/**: Contains CSS, JavaScript, and vendor files.
- **includes/**: Contains core PHP files for the plugin, including API routes, controllers, helpers, models, and main plugin classes.
- **templates/**: Contains template files for the plugin's frontend and admin views.
- **comfortjob.php**: The main plugin file that initializes the plugin.

### ComfortJob

The main class for the plugin, located in `wp-content/plugins/comfortjob/includes/ComfortJob.php`.

```php
class ComfortJob {
    public static function instance() {
        // Returns the main instance of ComfortJob.
    }

    public function __construct() {
        // Constructor method.
    }

    private function include_files() {
        // Includes necessary files.
    }
}
```
### ComfortJobAdmin
Handles the admin functionalities of the plugin, located in `ComfortJobAdmin.php`.

```
<?php
class ComfortJobAdmin {
    public function create_menus() {
        // Creates admin menus.
    }

    public function display_job_listing_page() {
        // Displays the job listing page.
    }
}
```
### ComfortJobPublic
Handles the public-facing functionalities of the plugin, located in `ComfortJobPublic.php`.

```
<?php
class ComfortJobPublic {
    public function enqueue_scripts() {
        // Enqueues public scripts and styles.
    }
}
```
### ComfortJobShortcode
Handles the public-facing functionalities of the plugin, located in `ComfortJobShortcode.php`.

```
<?php
class ComfortJobShortcode {
    public function init_shortcode() {
        // Initializes shortcodes.
    }

    public function comfortjob_job_details_shortcode($atts) {
        // Handles the job details shortcode.
    }
}
```

### Job Details

To display job details, use the following shortcode:

```php
[comfortjob_job_details]
```

### Job Archive

To display a list of job listings, use the following shortcode:

```php
[comfortjob_job_archive]
```

### Employer Dashboard

To display the employer dashboard, use the following shortcode:

```php
[comfortjob_employer_dashboard]
```

### Candidate Dashboard

To display the candidate dashboard, use the following shortcode:

```php
[comfortjob_candidate_dashboard]
```

### Job Dashboard

To display the job dashboard, use the following shortcode:

```php
[comfortjob_job_dashboard]
```

### Frontend Job Management

1. Create a new page in WordPress.
2. Add the `[comfortjob_job_manager]` shortcode to the page content.
3. Publish the page.
4. Users can now submit job listings from the frontend.


## Uninstallation

The uninstallation script is located in ComfortJobUninstall.php.

```
<?php
do_action('comfortjob_plugin_uninstall');
```