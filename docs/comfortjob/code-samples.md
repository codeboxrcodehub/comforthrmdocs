---
title: "Comfort Job Documentation"
description: "Documentation for Comfort Job"
keywords: "comfort job, wordpress, wordpress job plugin, plugin"
url: "/comfortjob/code-samples"
type: "type"
site_name: "Comfort HRM"
image: "https://comforthrm.com/assets/images/seo.png"
card: "article"
---

# Comfort Job Plugin – Code Samples

## Add a Job Programmatically

```php
<?php 
use Comfort\Job\Models\ComfortJob;

$currentDate             = gmdate( 'Y-m-d' );  // Get the current date
$expiry_date             = gmdate( 'Y-m-d', strtotime( $currentDate . " +$listing_duration days" ) );

// Add a new job
$job_data = [
    'title'         => 'Software Engineer',
    'slug'          => 'software-engineer',
    'description'   => 'We are looking for a skilled software engineer.',
    'status'        => 'published',
    'salary_amount' => '5000',
    'company_id'    => 1,
    'owner'         => 1,
    'expiry_date'   => $expiry_date,
    'add_by'        = 1,
    'add_date'      = gmdate( 'Y-m-d H:i:s' );
];
$new_job = ComfortJob::create($job_data);
```

## Fetch Job Listings

```php
use Comfort\Job\Helpers\ComfortJobHelpers;

// Get all published jobs
$jobs = ComfortJobHelpers::jobListing([
    'status' => 'published',
    'limit'  => 10,
]);
```

## Export Job Data

```php
use Comfort\Job\Helpers\ComfortJobHelpers;

// Export job data to JSON
$job_id = 123;
$job_data = ComfortJobHelpers::getJob($job_id);
$json_data = json_encode($job_data, JSON_PRETTY_PRINT);
file_put_contents('job_' . $job_id . '.json', $json_data);
```

---

# Comfort Job Pro Addon – Code Samples

## Manage Company Pages

```php
use Comfort\JobPro\Helpers\JobProHelpers;

// Create a company manager page
JobProHelpers::create_pages();
```

## Add Custom Dashboard Menus

```php
use Comfort\JobPro\Helpers\JobProHelpers;

// Add a custom menu to the employer dashboard
add_filter('comfortjob_employer_dashboard_menus', function($menus) {
    $menus['custom_menu'] = [
        'title' => 'Custom Menu',
        'url'   => admin_url('admin.php?page=custom_menu'),
    ];
    return $menus;
});
```

---

For more details, refer to the plugin documentation or explore the helper classes:

- [`ComfortJobHelpers`]
- [`JobProHelpers`]



