<script>
    import TopBar from "../../components/layout/TopBar.svelte";
</script>

<div class="container_area">
    <TopBar />
    <div class="main_container_elements">
        <slot></slot>
    </div>
</div>

<style>
    .container_area {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        background: var(--line_color_light);
        /* height: calc(100vh - var(--top_bar_height)); */
        height: auto;
        overflow: hidden;
    }
    .main_container_elements {
        position: relative;
        padding: 20px;
        background: var(--line_color_light);
        overflow:auto;
        max-height: calc(100vh - var(--top_bar_height));
    }

</style>
