<script>
    export let col;
    export let xl = 0;
    export let lg = 0;
    export let md = 0;
    export let sm = 0;
    export let xs = 0;
    export let mxAuto = null;
    export let mlAuto = null;
    export let mrAuto = null;
    export let classes = "";
</script>

<div class="column col-{col}
{xl ? `col-xl-${xl}` : ''}
{lg ? `col-lg-${lg}` : ''}
{md ? `col-md-${md}` : ''}
{sm ? `col-sm-${sm}` : ''}
{xs ? `col-xs-${xs}` : ''}
{(mxAuto && mxAuto !== 'false' && mxAuto !== 0) ? 'col-mx-auto' : ''}
{(mrAuto && mrAuto !== 'false' && mrAuto !== 0) ? 'col-mr-auto' : ''}
{(mlAuto && mlAuto !== 'false' && mlAuto !== 0) ? 'col-ml-auto' : ''}
{classes}">

<slot></slot>
</div>