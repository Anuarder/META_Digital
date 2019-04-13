<template>
    <div class="home" :class="homeBackground">
        <div class="navigation">
            <meta-navigation></meta-navigation>
        </div>
        <div class="hero-header">
            <div class="content-container" v-if="content == 1">
                <div class="content">
                   <div class="background">
                        <img src="/img/Header/Bespoke.jpg">
                   </div>
                    <div class="text">
                        <div class="title">
                            <p>ideas</p>
                            <p class="colored-text">bespoke</p>
                        </div>
                        <div class="links">
                            <router-link to="/about">about us</router-link>
                            <router-link to="/projects">projects</router-link>
                            <router-link to="/contact">contact us</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-container" v-if="content == 2">
                <div class="content">
                    <div class="background">
                        <img src="/img/Header/Colour.jpg">
                   </div>
                    <div class="text">
                        <div class="title">
                            <p>ideas</p>
                            <p class="colored-text">is colour</p>
                        </div>
                        <div class="links">
                            <router-link to="/about">about us</router-link>
                            <router-link to="/projects">projects</router-link>
                            <router-link to="/contact">contact us</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-container" v-if="content == 3">
                <div class="content">
                    <div class="background">
                        <img src="/img/Header/Shape.jpg">
                   </div>
                    <div class="text">
                        <div class="title">
                            <p>ideas</p>
                            <p class="colored-text">take shape</p>
                        </div>
                        <div class="links">
                            <router-link to="/about">about us</router-link>
                            <router-link to="/projects">projects</router-link>
                            <router-link to="/contact">contact us</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="visualized" v-if="content == 4">
                <div class="visualized-content">
                    <div class="text">
                        <div class="title">
                            <p>ideas</p>
                            <p class="colored-text">visualized</p>
                        </div>
                        <div class="links">
                            <router-link to="/about">about us</router-link>
                            <router-link to="/projects">projects</router-link>
                            <router-link to="/contact">contact us</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="limits" v-if="content == 5">
                <div class="limits-content">
                    <div class="title">
                        <p>ideas</p>
                        <p class="colored-text">with no limits</p>
                    </div>
                    <div class="links">
                        <router-link to="/about">about us</router-link>
                        <router-link to="/projects">projects</router-link>
                        <router-link to="/contact">contact us</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <meta-footer></meta-footer>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            content: 1
        }
    },
    computed:{
        homeBackground(){
            return {
                'visualized-home': this.content == 4,
                'limits-home': this.content == 5
            }
        }
    },
    created() {
        this.setRandomBlock();
    },
    methods: {
        setRandomBlock() {
            this.content = Math.floor(Math.random() * (6 - 1)) + 1;
        }
    }
}
</script>
<style scoped>
/* Main content */
img{
    width: 70vh;
    height: auto;
}
.home{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #fff;
    animation: show 2s ease-out;
}
.hero-header{
    flex: 1;
}
.content-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.content{
    display: flex;
    justify-content: center;
    align-items: center;
}
.title{
    font-size: 6rem;
    line-height: 5rem;
    font-weight: 600;
    letter-spacing: 2px;
    animation: showTitle 1s ease-out;
}
.text{
    margin-left: 70px;
}
.links{
    padding-top: 3rem;
    font-weight: 500;
    font-size: 1rem;
    animation: showLinks 1s ease-in-out;
}
.links a{
    margin-right: 20px;
}
.links a:hover{
    color: #24f2ad;
    transition: .2s;
}
/* Visialized */
.visualized-home {
    background-image: url("/img/Header/Visualized.jpg");
    background-size: 50%;
    background-position: left;
    background-repeat: no-repeat;
}
.visualized-content{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%);
}

/* Limits */
.limits-home{
    background-image: url('/img/Header/Limits.jpg');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
}
.limits{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.limits-content{
    text-align: center;
}

/* Animation */
@keyframes show {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@keyframes showTitle {
    0% {
        opacity: 0;
        transform: translateY(15px);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
}
@keyframes showLinks {
    0% {
        opacity: 0;
        transform: translateY(25px);
    }
    100% {
        opacity: 1;
        transform: translate(0);
    }
}

/* MEDIA RULES */
@media screen and (max-width: 1366px) and (orientation: landscape){ /* IPAD PRO */
    .content img{
        width: 60vh;
    }
    .visualized-home {
        background-size: 53%;
    }
}
@media (min-width: 768px) and (max-width: 1024px) { /* Tablets, Ipad (Portrait) */
    .visualized-home {
        background-size: cover;
    }
    .visualized-content .text{
        margin-left: 0;
    }
    .visualized-content{
        transform: translate(-50%, -50%);
        text-align: center;   
    }
    .content img{
        max-width: 50vh;
    }
    .content{
        flex-direction: column;
    }
    .title{
        font-size: 4.5rem;
        line-height: 4rem;
    }
    .text{
        margin-left: 0;
    }
    .links{
        padding-top: 2rem;
    }
}
@media (min-width: 481px) and (max-width: 850px) and (orientation: landscape){ /* Mobile landscape*/
    .visualized-home {
        background-size: cover;
    }
    .visualized-content .text{
        margin-left: 0;
    }
    .visualized-content{
        transform: translate(-50%, -50%);
        text-align: center;   
    }
    .content img{
        max-width: 60vh;
    }
    .content{
        flex-direction: row;
    }
    .title{
        font-size: 3rem;
        line-height: 2.5rem;
    }
    .text{
        margin-left: 50px;
    }
    .links{
        padding-top: 1.5rem;
    }
}
@media (min-width: 320px) and (max-width: 480px) { /* Mobile portrait*/
    .visualized-home {
        background-size: cover;
    }
    .visualized-content .text{
        margin-left: 0;
    }
    .visualized-content{
        transform: translate(-50%, -50%);
        text-align: center;   
    }
    .content img{
        max-width: 50vh;
    }
    .content{
        flex-direction: column;
    }
    .title{
        font-size: 3rem;
        line-height: 2.5rem;
    }
    .text{
        margin-left: 0;
    }
    .links{
        padding-top: 1.5rem;
    }
}
</style>
