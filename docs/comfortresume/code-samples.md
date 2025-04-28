---
title: "Comfort Job Application Documentation"
description: "Documentation for Comfort Resume"
keywords: "comfort resume, wordpress, wordpress resume plugin, plugin"
url: "/comfortresume/code-samples"
type: "type"
site_name: "Comfort HRM"
image: "https://comforthrm.com/assets/images/seo.png"
card: "article"
---

# Comfort Resume Plugin – Code Samples

## Add a Resume Programmatically

```php
use Comfort\Resume\Helpers\ComfortResumeHelpers;

// Add a new resume
$resume_data = [
    'name'       => 'John Doe',
    'email'      => 'john.doe@example.com',
    'privacy'    => 'public',
    'sections'   => [
        'aboutme' => [
            'given_name'  => 'John',
            'family_name' => 'Doe',
            'headline'    => 'Software Engineer',
            'email'       => 'john.doe@example.com',
        ],
        'experience' => [
            [
                'title'       => 'Software Developer',
                'company'     => 'TechCorp',
                'start_date'  => '2020-01-01',
                'end_date'    => '2022-01-01',
                'description' => 'Developed web applications.',
            ],
        ],
    ],
];
$new_resume = ComfortResumeHelpers::addResume($resume_data);
```

## Fetch Resume Data

```php
use Comfort\Resume\Helpers\ComfortResumeHelpers;

// Get a resume by ID
$resume_id = 123;
$resume = ComfortResumeHelpers::getResume($resume_id);
```

## Delete a Resume

```php
use Comfort\Resume\Helpers\ComfortResumeHelpers;

// Delete a resume by ID
$resume_id = 123;
$result = ComfortResumeHelpers::resume_delete($resume_id);
```

## Export Resume to JSON

```php
use Comfort\Resume\Helpers\ComfortResumeHelpers;

// Export resume data to JSON
$resume_id = 123;
$resume = ComfortResumeHelpers::getResume($resume_id);
$json_data = json_encode($resume, JSON_PRETTY_PRINT);
file_put_contents('resume_' . $resume_id . '.json', $json_data);
```

---

# Comfort Resume Pro Addon – Code Samples

## Generate PDF for a Resume

```php
use Comfort\ResumePro\Helpers\ComfortResumeProHelpers;

// Generate a PDF for a resume
$resume_id = 123;
$resume_data = ComfortResumeHelpers::getResume($resume_id);
$pdf_html = ComfortResumeProHelpers::displayResumePdfHtml($resume_id, $resume_data);

// Save the PDF
file_put_contents('resume_' . $resume_id . '.pdf', $pdf_html);
```

## Add Custom Sections to a Resume

```php
use Comfort\ResumePro\Helpers\ComfortResumeProHelpers;

// Add a custom section to a resume
$custom_section = [
    'title'   => 'Custom Section',
    'content' => 'This is a custom section.',
];
ComfortResumeProHelpers::addCustomSection($resume_id, $custom_section);
```

## Bookmark a Resume

```php
use Comfort\ResumePro\Models\CBXBookmark;

// Bookmark a resume for a user
$user_id = get_current_user_id();
$resume_id = 123;
$result = CBXBookmark::bookmarkResume($user_id, $resume_id);
```

---

For more details, refer to the plugin documentation or explore the helper classes:

- [`ComfortResumeHelpers`]
- [`ComfortResumeProHelpers`]



