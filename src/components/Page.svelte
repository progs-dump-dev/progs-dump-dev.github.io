<script>
    const allowedSizes = ["xs", "sm", "md", "lg", "xl"];
    export let maxSize = 'lg';
</script>
<div class="container {maxSize !== 'none' ? (allowedSizes.includes(maxSize) ? `grid-${maxSize}` : 'grid-xl') : ''}"><slot></slot></div>