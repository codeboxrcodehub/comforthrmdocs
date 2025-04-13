---
title: "Comfort Job Documentation"
description: "Documentation for Comfort Job"
keywords: "comfort job, wordpress, wordpress job plugin, plugin"
url: "/comfortjob/hooks-and-filters"
type: "type"
site_name: "Comfort HRM"
image: "https://comforthrm.com/assets/images/seo.png"
card: "article"
---


Comfort Job provides a variety of hooks and filters that allow developers to customize and extend the plugin's functionality. These hooks and filters can be used to modify the behavior of the plugin, add new features, or integrate with other plugins or themes.

## Hooks

Hooks in Comfort Job are points in the code where developers can add custom functions or code to modify the plugin's behavior. There are two types of hooks in WordPress: action hooks and filter hooks.

### Activation and Deactivation

- register_activation_hook(__FILE__, 'activate_comfortjob');
- register_deactivation_hook(__FILE__, 'deactivate_comfortjob');

### Action Hooks

Action hooks allow developers to execute custom functions at specific points in the plugin's code. These functions can perform actions such as displaying content, updating data, or sending notifications. Action hooks in Comfort Job are typically triggered by events such as saving a job listing or deleting a company.

Here are some common action hooks in Comfort Job:

- `comfortjob_before_job_listing`: Triggered before a job listing is displayed on the frontend.
- `comfortjob_after_job_listing`: Triggered after a job listing is displayed on the frontend.
- `comfortjob_job_saved`: Triggered after a job listing is saved in the database.

Developers can create custom functions and hook them into these action hooks to add new functionality to Comfort Job.

### Filter Hooks

Filter hooks allow developers to modify or filter data before it is displayed or processed by the plugin. Filters in Comfort Job are used to customize the output of job listings, companies, or other data displayed by the plugin. Developers can use filter hooks to change text, alter URLs, or modify data structures.

Here are some common filter hooks in Comfort Job:

- `comfortjob_job_title`: Filters the title of a job listing.
- `comfortjob_company_name`: Filters the name of a company.
- `comfortjob_job_location`: Filters the location of a job listing.

Developers can create custom filter functions and hook them into these filter hooks to customize the output of Comfort Job.

## Using Hooks and Filters

To use hooks and filters in Comfort Job, developers can create custom functions in their theme's `functions.php` file or in a custom plugin. These functions should be defined with the `add_action()` or `add_filter()` functions, specifying the hook name and the custom function to be executed.

For example, to add a custom function to the `comfortjob_after_job_listing` action hook, developers can use the following code:

```php
function my_custom_function() {
    // Custom code to be executed after a job listing is displayed
}
add_action('comfortjob_after_job_listing');
```

### Custom Actions

- `do_action('comfortjob_before_main_content');`
- `do_action('comfortjob_after_main_content');`
- `do_action('comfortjob_job_single_start', $job);`
- `do_action('comfortjob_job_single_end', $job);`


**Last modified:** December 26, 2025