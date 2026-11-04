---
layout: page
permalink: /teaching/
title: Teaching
description: The following are the courses which I taught or in which I served as a teaching assistant.
nav: true
nav_order: 3
display_categories:
horizontal: true
---

{% assign sorted_courses = site.teaching | sort: 'date' | reverse %}

{% if site.enable_teaching_categories and page.display_categories %}
{% for category in page.display_categories %}
<h2 id="{{ category | slugify }}">{{ category | escape }}</h2>
{% assign categorized_courses = sorted_courses | where: 'category', category %}
{% include teaching_cards.liquid courses=categorized_courses %}
{% endfor %}
{% else %}
{% include teaching_cards.liquid courses=sorted_courses %}
{% endif %}
