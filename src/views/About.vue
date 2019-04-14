<template>
    <div class="about-page">
        <div class="navigation">
            <meta-navigation></meta-navigation>
        </div>
        <div class="about">
            <div class="background-circle"></div>
            <div class="about-content">
                <img class="about-logo" src="/img/About/logo.svg">
                <div class="menu">
                    <router-link to="/philosophy">
                        <div 
                            :class="item1 ? 'animate-item' : ''"
                            class="menu-item item-1">
                            Философия
                        </div>
                    </router-link>
                    <router-link to="/team">
                        <div 
                            :class="item2 ? 'animate-item' : ''"
                            class="menu-item item-2">
                            Команда
                        </div>
                    </router-link>
                    <router-link to="/projects">
                        <div 
                            :class="item3 ? 'animate-item' : ''"
                            class="menu-item item-3">
                            Проекты
                        </div>
                    </router-link>
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
            item1: false,
            item2: false,
            item3: false,

        }
    },
    mounted(){
        this.setAnimation();
    },
    methods:{
        setAnimation(){
            this.item1 = true;
            setTimeout(() => {
                this.item2 = true;
            }, 200)
            setTimeout(() => {
                this.item3 = true;
            }, 400)
        }
    }
}
</script>

<style scoped>
.about-page{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    animation: show 1s ease-in-out;
}
.about{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.about-logo{
    animation: showLogo 2s ease;
}
.background-circle{
    width: 722px;
    height: 722px;
    border-radius: 50%;
    background: #000000;
    box-shadow: 0px 3px 15px #24F2AD;
    animation: circleBreaze 1.5s ease infinite alternate;
}
.about-content{
    width: 90%;
    position: absolute;
    display: flex;
    justify-content: space-around;
}
.menu{
    display: flex;
    flex-direction: column;
    font-size: 2.375rem;
    margin-right: 100px; 
    font-weight: 600;
}
.menu-item{
    margin-top: 15px;
    opacity: 0;
}
.menu-item:hover{
    color: #24F2AD;
    transition: .2s;
}
.animate-item{
    animation: showMenu 1s ease-in-out;
    opacity: 1;
}

/* Animation */
@keyframes circleBreaze {
    from{
        box-shadow: 0px 3px 15px #24F2AD;
    }
    to{
        box-shadow: 0px 3px 30px #24F2AD;
    }
}
@keyframes show {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@keyframes showLogo {
    from{
        opacity: 0;
        transform: translateX(-20px);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
}
@keyframes showMenu {
    0%{
        opacity: 0;
        transform: translateX(40px);
    }
    75%{
        opacity: 0.5;
    }
    100%{
        transform: translateX(0);
        opacity: 1;
    }
}

/* MEDIA RULES */
@media screen and (min-width: 1921px){ /* 2k, 4k */
    .background-circle{
        width: 800px;
        height: 800px;
    }
    .about-content{
        width: 70%;
    }
}
@media screen and (max-width: 1440px){ /* Laptop */
    .background-circle{
        width: 600px;
        height: 600px;
    }
    .menu{
        padding-left: 100px; 
    }
}
@media screen and (max-width: 1366px){
    .background-circle{
        width: 420px;
        height: 420px;
    }
    .menu{
        padding-left: 70px; 
    }
}
@media (min-width: 768px) and (max-width: 1024px) { /* Tablets, Ipad (Portrait) */
    .background-circle{
        width: 550px;
        height: 550px;
    }
    .about-content{
        flex-direction: column;
        align-items: center;
    }
    .menu{
        font-size: 1.5rem;
        padding-top: 50px;
        flex-direction: row;
    }
    .menu-item{
        padding-right: 25px;
    }
}
@media (min-width: 481px) and (max-width: 850px) and (orientation: landscape){ /* Mobile landscape*/
    .background-circle{
        width: 250px;
        height: 250px;
    }
    .about-logo{
        width: 150px;
    }
    .about-content{
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .menu{
        margin-right: 70px;
        font-size: 1rem;
        padding-top: 20px;
        flex-direction: row;
    }
    .menu-item{
        padding-right: 20px;
    }
    .item-3{
        padding-right: 0;
    }
}
@media (min-width: 321px) and (max-width: 480px) { /* Mobile portrait*/
    .background-circle{
        width: 300px;
        height: 300px;
    }
    .about-logo{
        width: 200px;
    }
    .about-content{
        flex-direction: column;
        align-items: center;
    }
    .menu{
        margin-right: 70px;
        text-align: center;
        font-size: 1.1rem;
        padding-top: 20px;
        flex-direction: row;
    }
    .menu-item{
        padding-right: 20px;
    }
    .item-3{
        padding-right: 0;
    }
}
@media (max-width: 320px) {
    .background-circle{
        width: 250px;
        height: 250px;
    }
    .about-logo{
        width: 200px;
    }
    .about-content{
        flex-direction: column;
        align-items: center;
    }
    .menu{
        margin-right: 70px;
        text-align: center;
        font-size: 1rem;
        padding-top: 20px;
        flex-direction: row;
    }
    .menu-item{
        padding-right: 25px;
    }
    .item-3{
        padding-right: 0;
    }
}
</style>
