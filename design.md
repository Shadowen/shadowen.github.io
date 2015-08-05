---
layout: gallery
title: Design
skrollr-background: "/res/DSC_0853.jpg"
active-menu-item: "design"
permalink: "/design/"
---
<div class="row">
{% include under-construction.md %}
    {% for design in site.collections.design.docs %}
    <div class="col-xs-12 col-md-3">
        <div class="thumbnail">
            <a href="{{ design.url }}">
                <img src="{{ design.thumbnail }}">
                <div class="caption">{{ design.title }}</div>
            </a>
        </div>
    </div>
    {% endfor %}
</div>