<template>
    <div class="meta-navigation-wrap">
        <div class="meta-navigation">
            <router-link to="/home">
                <div class="logo">
                    <img src="/img/Main/logo.svg" alt="logo">
                </div>
            </router-link>
            <div class="menu">
                <img src="/img/Main/menu.svg">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "meta-navigation",
    props: {
        modal: Boolean,
        sidebar: Boolean
    }
}
</script>
<style scoped>
.meta-navigation{
    padding: 40px 45px;
    position: relative;
    top: 0;
    display: flex;
    justify-content: space-between;
}
@media (min-width: 481px) and (max-width: 850px) and (orientation: landscape){
    .meta-navigation {
        padding: 20px 20px 0 20px;
    }
}
@media (min-width: 320px) and (max-width: 480px) {
    .meta-navigation {
        padding: 20px 20px 0 20px;
    }
}
</style>