---
title: "Comfort Job Application Documentation"
description: "Documentation for Comfort Resume"
keywords: "comfort resume, wordpress, wordpress resume plugin, plugin"
url: "/comfortresume/hooks-and-filters"
type: "type"
site_name: "Comfort HRM"
image: "https://comforthrm.com/assets/images/seo.png"
card: "article"

---

# Hooks and Filters Documentation for ComfortResume & ComfortResumePro

## ComfortResume Plugin

### Action Hooks

1. **`comfortresume_resume_delete_after`**
   - Triggered after a resume is deleted.
   - **Parameters**:
     - `$resume_id` (int): The ID of the deleted resume.
   - **Example**:
     ```php
     add_action( 'comfortresume_resume_delete_after', function( $resume_id ) {
         // Custom logic after resume deletion
     } );
     ```

2. **`comfortresume_resume_created`**
   - Triggered when a resume is created.
   - **Parameters**:
     - `$resume` (object): The resume object.
     - `$queryParams` (array): Request query params received in api.
     - `$source` (string): From where the api is called(frontent/backend).
   - **Example**:
     ```php
     add_action( 'comfortresume_resume_created', function( $resume, $queryParams, $source ) {
         // Custom logic for displaying a resume section
     }, 10, 3 );
     ```

3. **`comfortresume_before_vuejs_mount_after`**
   - Triggered before Vue.js components are mounted.
   - **Example**:
     ```php
     add_action( 'comfortresume_before_vuejs_mount_after', function() {
         // Custom logic before Vue.js mount
     } );
     ```

4. **`comfortresume_sidebar_archive`**
   - Triggered to add content to the sidebar in the resume archive.
   - **Example**:
     ```php
     add_action( 'comfortresume_sidebar_archive', function() {
         // Add custom sidebar content
     } );
     ```

5. **`comfortresume_after_main_content`**
   - Triggered after the main content of the resume archive.
   - **Example**:
     ```php
     add_action( 'comfortresume_after_main_content', function() {
         // Add custom content after main content
     } );
     ```

---

### Filter Hooks

1. **`comfortresume_archive_title`**
   - Filters the title of the resume archive.
   - **Parameters**:
     - `$title` (string): The archive title.
   - **Example**:
     ```php
     add_filter( 'comfortresume_archive_title', function( $title ) {
         return 'Custom Archive Title';
     } );
     ```

2. **`comfortresume_allowed_html_tags`**
   - Filters the allowed HTML tags for the plugin.
   - **Parameters**:
     - `$tags` (array): Allowed HTML tags.
   - **Example**:
     ```php
     add_filter( 'comfortresume_allowed_html_tags', function( $tags ) {
         $tags['div'] = [];
         return $tags;
     } );
     ```

3. **`comfortresume_resume_js_translation`**
   - Filters the JavaScript translations for the plugin.
   - **Parameters**:
     - `$translations` (array): Translations for JavaScript.
   - **Example**:
     ```php
     add_filter( 'comfortresume_resume_js_translation', function( $translations ) {
         $translations['custom_key'] = 'Custom Value';
         return $translations;
     } );
     ```

4. **`comfortresume_setting_js_vars`**
   - Filters the JavaScript variables used in settings.
   - **Parameters**:
     - `$vars` (array): JavaScript variables.
   - **Example**:
     ```php
     add_filter( 'comfortresume_setting_js_vars', function( $vars ) {
         $vars['custom_var'] = 'Custom Value';
         return $vars;
     } );
     ```

5. **`comfortresume_resume_listing_params`**
   - Filters the parameters for resume listings.
   - **Parameters**:
     - `$params` (array): Listing parameters.
   - **Example**:
     ```php
     add_filter( 'comfortresume_resume_listing_params', function( $params ) {
         $params['limit'] = 50;
         return $params;
     } );
     ```

---

## ComfortResumePro Plugin

### Action Hooks

1. **`comfortresume_resume_published`**
   - Triggered when a resume is published.
   - **Parameters**:
     - `$resume_id` (int): The ID of the published resume.
     - `$status` (string): The status of the resume.
     - `$user_id` (int): The ID of the user who published the resume.
     - `$data` (array): Additional data.
   - **Example**:
     ```php
     add_action( 'comfortresume_resume_published', function( $resume_id, $status, $user_id, $data ) {
         // Custom logic after resume is published
     }, 10, 4 );
     ```

2. **`bp_activity_register_activity_actions`**
   - Registers BuddyPress activity actions for resumes.
   - **Example**:
     ```php
     add_action( 'bp_activity_register_activity_actions', function() {
         // Register custom BuddyPress actions
     } );
     ```

3. **`comfortresume_archive_loop_item_actions_end`**
   - Triggered at the end of each archive loop item.
   - **Parameters**:
     - `$resume_id` (int): The ID of the resume.
   - **Example**:
     ```php
     add_action( 'comfortresume_archive_loop_item_actions_end', function( $resume_id ) {
         // Add custom actions to archive loop items
     } );
     ```

---

### Filter Hooks

1. **`comfortresume_max_resume_per_user`**
   - Filters the maximum number of resumes a user can create.
   - **Parameters**:
     - `$max` (int): Maximum number of resumes.
     - `$user_id` (int): The ID of the user.
   - **Example**:
     ```php
     add_filter( 'comfortresume_max_resume_per_user', function( $max, $user_id ) {
         return 10; // Set max resumes to 10
     }, 10, 2 );
     ```

2. **`comfortresume_resume_export_types`**
   - Filters the available export types for resumes.
   - **Parameters**:
     - `$types` (array): Export types.
   - **Example**:
     ```php
     add_filter( 'comfortresume_resume_export_types', function( $types ) {
         $types[] = 'custom_export';
         return $types;
     } );
     ```

3. **`comfortresume_front_listing_filters`**
   - Filters the front-end listing filters for resumes.
   - **Parameters**:
     - `$filters` (array): Listing filters.
   - **Example**:
     ```php
     add_filter( 'comfortresume_front_listing_filters', function( $filters ) {
         $filters['custom_filter'] = 'value';
         return $filters;
     } );
     ```

4. **`comfortresume_global_comfortresume_front_dashboard_fields`**
   - Filters the fields displayed in the front-end dashboard.
   - **Parameters**:
     - `$fields` (array): Dashboard fields.
   - **Example**:
     ```php
     add_filter( 'comfortresume_global_comfortresume_front_dashboard_fields', function( $fields ) {
         $fields['custom_field'] = 'Custom Value';
         return $fields;
     } );
     ```

5. **`comfortresume_email_classes`**
   - Filters the email classes used by the plugin.
   - **Parameters**:
     - `$classes` (array): Email classes.
   - **Example**:
     ```php
     add_filter( 'comfortresume_email_classes', function( $classes ) {
         $classes[] = 'CustomEmailClass';
         return $classes;
     } );
     ```

---

This documentation provides an overview of the available hooks and filters in the `ComfortResume` and `ComfortResumePro` plugins. Use these to extend or customize the functionality as needed.






