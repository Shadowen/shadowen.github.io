---
layout: gallery
title: Projects
skrollr-background: "/res/IMG-20150512-WA0002.jpg"
permalink: /projects/
active-menu-item: "projects"
---
<!-- Thumbnails -->
{% assign projects = site.collections.projects.docs | sort: 'thumbnail-size' | reverse %}
{% assign currentThumbsize = project.thumbnail-size %}
<div class="row">
{% for project in projects %}
{% if currentThumbsize != project.thumbnail-size %}
{% assign currentThumbsize = project.thumbnail-size %}
</div>
<div class="row">
{% endif %}
    <div class="col-xs-12 col-md-{{ project.thumbnail-size }}">
        <div class="thumbnail">
            <a href="{{ project.url }}">
                <img src="{{ project.thumbnail }}" alt="...">
                <div class="caption">{{project.title}}</div>
            </a>
            {% assign tags = project.tags | sort %}
            {% for tag in tags %}
            <span class="label label-{{ tag | downcase}}">{{tag}}</span>
            {% endfor %}
        </div>
    </div>
{% endfor %}
</div>