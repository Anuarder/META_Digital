<template>
    <div class="arrow_back" @click="goBack">
        <img src="/img/Main/back.svg">
    </div>
</template>
<script>
export default {
    methods: {
        goBack(){
            this.$router.push('/about');
        }
    }
}
</script>

<style scoped>
.arrow_back{
    position: absolute;
    top: 150px;
    left: 45px;
    color: #24f2ad;
    cursor: pointer;
}
/* MEDIA RULES */
@media (min-width: 481px) and (max-width: 850px) and (orientation: landscape){ /* Mobile landscape*/
    .arrow_back{
        top: 50px;
        left: 20px;
    }
}
@media (max-width: 480px) { /* Mobile portrait*/
    .arrow_back{
        top: 75px;
        left: 20px;
    }
}
@media (max-width: 320px){ /* Mobile portrait*/
    .arrow_back{
        top: 60px;
        left: 20px;
    }
}
</style>
