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

## ComfortJob Plugin

### Action Hooks

1. **`comfortjob_job_single_start`**
   - Triggered at the start of the single job template.
   - **Parameters**:
     - `$job` (array): The job data.
   - **Example**:
     ```php
     add_action( 'comfortjob_job_single_start', function( $job ) {
         // Custom logic for single job start
     } );
     ```

2. **`comfortjob_job_single_end`**
   - Triggered at the end of the single job template.
   - **Parameters**:
     - `$job` (array): The job data.
   - **Example**:
     ```php
     add_action( 'comfortjob_job_single_end', function( $job ) {
         // Custom logic for single job end
     } );
     ```

3. **`comfortjob_job_details_before`**
   - Triggered before the job details are displayed.
   - **Parameters**:
     - `$job` (array): The job data.
   - **Example**:
     ```php
     add_action( 'comfortjob_job_details_before', function( $job ) {
         // Custom logic before job details
     } );
     ```

4. **`comfortjob_job_details_after`**
   - Triggered after the job details are displayed.
   - **Parameters**:
     - `$job` (array): The job data.
   - **Example**:
     ```php
     add_action( 'comfortjob_job_details_after', function( $job ) {
         // Custom logic after job details
     } );
     ```

5. **`comfortjob_job_published`**
   - Triggered when a job is published.
   - **Parameters**:
     - `$job_id` (int): The ID of the published job.
     - `$status` (string): The status of the job.
     - `$user_id` (int): The ID of the user who published the job.
     - `$data` (array): Additional data.
   - **Example**:
     ```php
     add_action( 'comfortjob_job_published', function( $job_id, $status, $user_id, $data ) {
         // Custom logic after job is published
     }, 10, 4 );
     ```

---

### Filter Hooks

1. **`comfortjob_settings_fields`**
   - Filters the settings fields for the plugin.
   - **Parameters**:
     - `$fields` (array): The settings fields.
   - **Example**:
     ```php
     add_filter( 'comfortjob_settings_fields', function( $fields ) {
         $fields['new_field'] = [
             'name' => 'new_field',
             'label' => 'New Field',
             'type' => 'text',
         ];
         return $fields;
     } );
     ```

2. **`comfortjob_js_translation`**
   - Filters the JavaScript translations for the plugin.
   - **Parameters**:
     - `$translations` (array): Translations for JavaScript.
   - **Example**:
     ```php
     add_filter( 'comfortjob_js_translation', function( $translations ) {
         $translations['custom_key'] = 'Custom Value';
         return $translations;
     } );
     ```

3. **`comfortjob_single_job`**
   - Filters the single job data.
   - **Parameters**:
     - `$job` (array): The job data.
     - `$job_id` (int): The job ID.
   - **Example**:
     ```php
     add_filter( 'comfortjob_single_job', function( $job, $job_id ) {
         $job['custom_field'] = 'Custom Value';
         return $job;
     }, 10, 2 );
     ```

4. **`comfortjob_employer_dashboard_menus`**
   - Filters the employer dashboard menus.
   - **Parameters**:
     - `$menus` (array): The dashboard menus.
   - **Example**:
     ```php
     add_filter( 'comfortjob_employer_dashboard_menus', function( $menus ) {
         $menus['custom_menu'] = [
             'title' => 'Custom Menu',
             'url' => 'custom-url',
         ];
         return $menus;
     } );
     ```

5. **`comfortjob_default_file_mimes`**
   - Filters the default file MIME types for uploads.
   - **Parameters**:
     - `$mimes` (string): The default MIME types.
   - **Example**:
     ```php
     add_filter( 'comfortjob_default_file_mimes', function( $mimes ) {
         return $mimes . ',application/pdf';
     } );
     ```

---

## ComfortJobPro Plugin

### Action Hooks

1. **`comfortjob_company_delete_after`**
   - Triggered after a company is deleted.
   - **Parameters**:
     - `$company_id` (int): The ID of the deleted company.
     - `$data` (array): Additional data.
   - **Example**:
     ```php
     add_action( 'comfortjob_company_delete_after', function( $company_id, $data ) {
         // Custom logic after company deletion
     }, 10, 2 );
     ```

2. **`comfortjob_wpheading_wrap_right_before`**
   - Triggered before the settings import/export button is added.
   - **Example**:
     ```php
     add_action( 'comfortjob_wpheading_wrap_right_before', function() {
         // Add custom content before the button
     } );
     ```

3. **`comfortjob_settings_form_before`**
   - Triggered before the settings form is displayed.
   - **Example**:
     ```php
     add_action( 'comfortjob_settings_form_before', function() {
         // Add custom content before the settings form
     } );
     ```

---

### Filter Hooks

1. **`comfortjob_guest_login_forms`**
   - Filters the guest login forms.
   - **Parameters**:
     - `$forms` (array): The login forms.
   - **Example**:
     ```php
     add_filter( 'comfortjob_guest_login_forms', function( $forms ) {
         $forms['custom_form'] = 'Custom Form HTML';
         return $forms;
     } );
     ```

2. **`comfortjob_max_job_per_user`**
   - Filters the maximum number of jobs a user can create.
   - **Parameters**:
     - `$max` (int): Maximum number of jobs.
     - `$user_id` (int): The user ID.
   - **Example**:
     ```php
     add_filter( 'comfortjob_max_job_per_user', function( $max, $user_id ) {
         return 10; // Set max jobs to 10
     }, 10, 2 );
     ```

3. **`comfortjob_rest_routes`**
   - Filters the REST API routes for the plugin.
   - **Parameters**:
     - `$routes` (array): The REST API routes.
   - **Example**:
     ```php
     add_filter( 'comfortjob_rest_routes', function( $routes ) {
         $routes['custom_route'] = 'Custom Route Handler';
         return $routes;
     } );
     ```

4. **`comfortjob_login_html`**
   - Filters the login HTML for the plugin.
   - **Parameters**:
     - `$html` (string): The login HTML.
     - `$args` (array): Additional arguments.
   - **Example**:
     ```php
     add_filter( 'comfortjob_login_html', function( $html, $args ) {
         return $html . '<p>Custom Login Message</p>';
     }, 10, 2 );
     ```

5. **`comfortjob_register_html`**
   - Filters the registration HTML for the plugin.
   - **Parameters**:
     - `$html` (string): The registration HTML.
     - `$args` (array): Additional arguments.
   - **Example**:
     ```php
     add_filter( 'comfortjob_register_html', function( $html, $args ) {
         return $html . '<p>Custom Registration Message</p>';
     }, 10, 2 );
     ```

---

This documentation provides an overview of the available hooks and filters in the `ComfortJob` and `ComfortJobPro` plugins. Use these to extend or customize the functionality as needed.