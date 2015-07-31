<!DOCTYPE html>
<html>
  {% include head.html %}

  <body>
      {% include header.md active=page.active-menu-item %}
      {{ content }}
  </body>

</html>
