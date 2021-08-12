---
layout: page
permalink: /publications/
title: publications

article_years: [2020]
inproceedings_years: [2021, 2018, 2017, 2016]
techreport_years: [2020]
manual_years: [2020]
misc_years: [2019, 2017, 2016, 2015, 2014]
nav: true
---

<div class="publications">    
<h1>Refereed Journal Articles</h1>
{% for y in page.article_years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @article[year={{y}}]* %}
{% endfor %}

<h1>Refereed Conference Papers</h1>
{% for y in page.inproceedings_years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @inproceedings[year={{y}}]* %}
{% endfor %}

<h1>Ph.D. Thesis Proposal</h1>
{% for y in page.manual_years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @manual[year={{y}}]* %}
{% endfor %}

<h1>Technical Reports</h1>
{% for y in page.techreport_years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @techreport[year={{y}}]* %}
{% endfor %}

<h1>Miscellaneous</h1>
{% for y in page.misc_years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @misc[year={{y}}]* %}
{% endfor %}

</div>
