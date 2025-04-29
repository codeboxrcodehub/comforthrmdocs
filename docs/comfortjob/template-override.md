---
title: "Comfort Job Documentation"
description: "Documentation for Comfort Job"
keywords: "comfort job, wordpress, wordpress job plugin, plugin"
url: "/comfortjob/template-override"
type: "type"
site_name: "Comfort HRM"
image: "https://comforthrm.com/assets/images/seo.png"
card: "article"
---
# How to Override Template


We have implemented woocommerce like template override system which means, you can override any template/view layer of this plugin in your theme. For this plugin, mainly admin interfaces of custom screens can be overridden. The frontend tour modals cannot be overridden as they load using JavaScript.

For core plugin: `wp-content/plugins/comfortjob/templates`  
For pro addon: `wp-content/plugins/comfortjobpro/templates`

To override any file from your theme you have to create a folder called `comfortjob` inside your theme or child theme and copy files from the plugin’s template folder and put in this newly created folder inside your theme folder `comfortjob`. The process is same as the woocommerce theme file override.  


