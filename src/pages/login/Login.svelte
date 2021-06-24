<script>
    import Bubble from "../../components/efectos/Bubble.svelte";
    import LoginForm from "../../components/forms/LoginForm.svelte";
    import { isLogin } from "../../stores/login";
    isLogin.set(false)
</script>

<div>
    <div class="wrapper">
        <LoginForm />
    </div>
    <Bubble />
</div>

<style>
    .wrapper {
        display: flex;
        background: #0d67cc;
        background: -webkit-gradient(
            linear,
            left top,
            right bottom,
            from(#0d67cc),
            to(#14a6ff)
        );

        background: linear-gradient(to bottom, #0d67cc 0%, #14a6ff 100%);
        width: 100vw;
        height: 100vh;
        justify-content: center;
        align-items: flex-start;
        overflow: hidden;
    }
</style>
