---
title: "Comfort Job Documentation"
description: "Comfort Job index description."
keywords: "Comfort Job index keywords."
url: "/comfortjob/shortcodes"
type: "type"
site_name: "Comfort HRM"
image: "https://comforthrm.com/assets/images/seo.png"
card: "article"
---
# Shortcodes

There are multiple shortcodes in both core plugin and pro addon.

## 1. Job List \[comfortjob_job_archive\] Shortcode(Core) ##

**Where to use:** You can add this shortcode to any page to show job list, useful when you want it for specific post.
| param name   | default value                                      | possible values                                                                                                                 |
|--------------|----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| search       |                                                    | Any text you want to search.   |
| orderby      | id                                                 | id,title
| order        | DESC                                               | ASC, DESC         |
| limit        | 10                                                 | any numeric value |
| page         | 1                                                  | any numeric value |
| company      |                                                    | All possible company name  
| type         |                                                    | All possible job type    |
| is_filled    |                                                    | 1 = filled, 0 = not filled    |
| feature      |                                                    | 1 = feature, 0 = not featured    |
| remote       |                                                    | 1 = remote, 0 = on site  |
| min_salary   |                                                    | any float value        |
| max_salary   |                                                    | any float value        |


## 2. Job Details \[comfortjob_job_details\] Shortcode(Core) ##

**Where to use:** You can add this shortcode to any page to show a specific job details, useful when you want it for specific post.
| param name   | default value         | possible Value                                                                                                                 |
|--------------|----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| id        | 0 | All possible job ID.

## 3. Frontend Job Manager \[comfortjob_job_manager\] Shortcode(Core) ##

**Where to use:** You can add this shortcode to manage jobs from frontend.

Shortcode can be added in theme directly following this below code snippet

https://gist.github.com/manchumahara/c4761d5c30f309694d0bd269b9fccaf9


## 4. Employer Dashboard \[comfortjob_employer_dashboard\] Shortcode(Core) ##

**Where to use:** You can add this shortcode to manage jobs from frontend.

| param name   | default value         | possible Value                                                                                                                 |
|--------------|----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| components        | NULL | employer_jobs, employer_applications, employer_application_forms
| init_menu         | NULL | any one of the components mentioned earlier

Shortcode can be added in theme directly following this below code snippet

https://gist.github.com/manchumahara/c4761d5c30f309694d0bd269b9fccaf9


## 5. Candidate Dashboard \[comfortjob_candidate_dashboard\] Shortcode(Core) ##

**Where to use:** You can add this shortcode to manage jobs from frontend.

| param name   | default value         | possible Value                                                                                                                 |
|--------------|----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| components        | NULL | candidate_resumes,candidate_applications
| init_menu         | NULL | any one of the components mentioned earlier

Shortcode can be added in theme directly following this below code snippet

https://gist.github.com/manchumahara/c4761d5c30f309694d0bd269b9fccaf9

## 6. Frontend Job Dashboard \[comfortjob_job_dashboard\] Shortcode(Core) ##

**Where to use:** You can add this shortcode to see job statistics in frontend.

Shortcode can be added in theme directly following this below code snippet

https://gist.github.com/manchumahara/c4761d5c30f309694d0bd269b9fccaf9


## 7. Company List \[comfortjob_company_archive\] Shortcode(Pro) ##

**Where to use:** You can add this shortcode to any page to show company list, useful when you want it for specific post.
| param name   | default value                                      | possible values                                                                                                                 |
|--------------|----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| search       |                                                    | Any text you want to search.   |
| orderby      | id                                                 | id,title
| order        | DESC                                               | ASC, DESC         |
| limit        | 10                                                 | any numeric value |
| page         | 1                                                  | any numeric value |
| type         |                                                    | All possible company type    |
| feature      |                                                    | 1 = feature, 0 = not featured    |


## 8. Company Details \[comfortjob_company_details\] Shortcode(Pro) ##

**Where to use:** You can add this shortcode to any page to show a specific job details, useful when you want it for specific post.
| param name   | default value         | possible Value                                                                                                                 |
|--------------|----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| id        | 0 | All possible job ID.

## 9. Frontend Company Manager \[comfortjob_company_manager\] Shortcode(Pro) ##

**Where to use:** You can add this shortcode to manage company from frontend.

Shortcode can be added in theme directly following this below code snippet

https://gist.github.com/manchumahara/c4761d5c30f309694d0bd269b9fccaf9


**Last modified:** December 9, 2025