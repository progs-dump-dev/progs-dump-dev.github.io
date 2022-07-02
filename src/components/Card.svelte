<script>
    export let color = "";
    export let classes = "";
</script>
<div class="card my-2 {color ? `bg-${color}` : ''} {classes}">
    <slot></slot>
</div>