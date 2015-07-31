---
layout: default
---
<!-- Galleria -->
<script src="/js/galleria/galleria-1.4.2.min.js"></script>
<script>
    $(function () {
        Galleria.loadTheme('/js/galleria/themes/custom/galleria.custom.js');
        Galleria.run('.galleria');
    });
</script>

<div class="galleria full-size">
    {{ content }}
</div>
