---
layout: gallery
title: Art
skrollr-background: "/res/IMG-20150512-WA0001.jpg"
permalink: "/art/"
active-menu-item: "art"
---
<div class="row">
{% include under-construction.md %}
    {% for album in site.collections.art.docs %}
    <div class="col-xs-12 col-md-4">
        <div class="thumbnail">
            <a href="{{ album.url }}">
                <img src="{{ album.thumbnail }}">
                <div class="caption">{{ album.title }}</div>
            </a>
        </div>
    </div>
    {% endfor %}
</div>