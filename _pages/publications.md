---
layout: page
permalink: /publications/
title: Publications 
description: \* indicates my student, † indicates equal contribution
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}




<div class="publications">

<h1>Peer-reviewed Articles</h1>

{% bibliography -f papers %}

<h1>Workshop Articles</h1>

{% bibliography -f workshop-papers %}

<h1>Book Chapters</h1>

{% bibliography -f bookchapter %}

<h1>Patent</h1>

{% bibliography -f patents %}

<h1>Submitted Articles</h1>

{% bibliography -f preprints %}


</div>
