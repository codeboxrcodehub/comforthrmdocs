---
title: "Comfort Job Application Documentation"
description: "Documentation for Comfort Job Application"
keywords: "comfort job application, wordpress, wordpress job application plugin, plugin"
url: "/comfortjobapp/code-samples"
type: "type"
site_name: "Comfort HRM"
image: "https://comforthrm.com/assets/images/seo.png"
card: "article"

---

# Code Samples for ComfortJobApp & ComfortJobAppPro

## ComfortJobApp Plugin

### 1. Apply Job Form Hooks

Add custom content before and after the job application form using action hooks.

```php
do_action( 'comfortjobapp_apply_job_form_before', $form_id, $job_id, $job, $fields );
?>
<form method="post" id="comfortjobapp-apply-form" enctype="multipart/form-data" class="cbx_form_wrapper">
    <?php do_action( 'comfortjobapp_apply_job_form_start', $form_id, $job_id, $job, $fields ); ?>
    <input type="hidden" name="job_id" value="<?php echo intval( $job['id'] ); ?>" />
    <?php do_action( 'comfortjobapp_apply_job_form_end', $form_id, $job_id, $job, $fields ); ?>
</form>
<?php
do_action( 'comfortjobapp_apply_job_form_after', $form_id, $job_id, $job, $fields );
```

### 2. Get Application Forms

Retrieve a list of application forms for the current user.

```php
<?php
$forms = comfortjobapp_get_application_forms([
    'limit'      => 10,
    'page'       => 1,
    'created_by' => get_current_user_id(),
]);

foreach ( $forms as $form ) {
    echo esc_html( $form['title'] );
}
```

### 3. Delete an Application
Delete an application by ID. 
```php
<?php
comfortjobapp_delete_application( $application_id );
```

### 4. Delete a Form

```php
// Delete a form by ID 
$result = comfortjobapp_delete_form($form_id);
```

## ComfortJobAppPro Plugin

### 1. Add Employer Dashboard Menu
Add a custom menu to the employer dashboard.

```php
<?php
add_filter( 'comfortjobapp_employer_dashboard_menus', function( $menus ) {
    $menus['custom_menu'] = [
        'title'    => esc_html__( 'My Custom Menu', 'comfortjobapppro' ),
        'type'     => 'callback',
        'callback' => 'custom_menu_callback',
    ];
    return $menus;
} );

function custom_menu_callback() {
    echo '<h2>' . esc_html__( 'Welcome to My Custom Menu', 'comfortjobapppro' ) . '</h2>';
}
```

### 2. Filter Application Steps
Modify the application steps for the job application process.

```php
<?php
add_filter( 'comfortjobapp_steps', function( $steps ) {
    $steps['custom_step'] = esc_html__( 'Custom Step', 'comfortjobapppro' );
    return $steps;
} );
```

### 3. Export Application Data
Export application data in JSON format.

```php
<?php
add_action( 'admin_post_export_applications', function() {
    $applications = ComfortJobApp::query()->get()->toArray();
    $json_data    = json_encode( $applications, JSON_PRETTY_PRINT );

    header( 'Content-Type: application/json' );
    header( 'Content-Disposition: attachment; filename="applications.json"' );
    echo $json_data;
    exit;
} );

```

For more details, see the plugin documentation or explore the helpers in:

- [`ComfortJobAppHelpers`]
- [`comfortjobapp-functions.php`]
- [`ComfortJobAppProMisc`]


