<script>
    import Page from "$components/Page.svelte"
    import Columns from "$components/Columns.svelte"
    import Column from "$components/Column.svelte"
</script>
<Page maxSize="none">
<Columns>
    <Column col="2">
        <nav>
            <ul style="list-style: none">
                <li><a href="/manual">Installation</a></li>
                <li class="ml-2"><a href="/manual#dev-notes">Development Notes</a></li>
                <li><a href="/manual/spawnflags">Spawnflags</a></li>
                <li class="ml-2"><a class="" href="/manual/spawnflags#trigger-spawn">Trigger Spawned Monsters</a></li>
                <li class="ml-2"><a class="" href="/manual/spawnflags#appearance-flags">Appearance Flags</a></li>
            </ul>
        </nav>
    </Column>
    <Column col="1" classes="divider-vert"/>
    <Column col="9">
        <slot></slot>
    </Column>
</Columns>
</Page>