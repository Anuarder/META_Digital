<template>
    <div class="sidebar-page">
        <div class="meta-navigation">
            <router-link to="/home">
                <div class="logo">
                    <img src="/img/Main/sidebar.svg" alt="logo">
                </div>
            </router-link>
            <div class="menu" @click="closeSidebar">
                <span>Закрыть</span>
            </div>
        </div>
        <div class="sidebar-content">
            <div class="sidebar-menu">
                <router-link to="/about" @click="closeSidebar">
                    <div 
                        :class="item1 ? 'animate-item' : ''"
                        class="sidebar-menu_item">
                        мета?
                    </div>
                </router-link>
                <router-link to="/projects" @click="closeSidebar">
                    <div 
                        :class="item2 ? 'animate-item' : ''"
                        class="sidebar-menu_item">
                        проекты
                    </div>
                </router-link>
                <router-link to="/contact" @click="closeSidebar">
                    <div 
                        :class="item3 ? 'animate-item' : ''"
                        class="sidebar-menu_item">
                        контакты
                    </div>
                </router-link>
            </div>
            <div class="sidebar-links">
                <a href="#" target="blank">behance</a>
                <a href="#" target="blank">facebook</a>
                <a href="#" target="blank">instagram</a>
            </div>
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
    methods: {
        closeSidebar(){
            this.$emit('close');
        },
        setAnimation(){
            setTimeout(() => {
                this.item1 = true;
            }, 400);
            setTimeout(() => {
                this.item2 = true;
            }, 600)
            setTimeout(() => {
                this.item3 = true;
            }, 800)
        }
    }
}
</script>

<style scoped>
a{
    color: #000;
}
.menu{
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 300;
}
.sidebar-page{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    color: #000;
    animation: show .6s ease-in-out;
}
.sidebar-content{
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: right;
    align-items: flex-end;
    /* justify-content: center; */
    margin-top: 5%;
    margin-right: 45px;
}
.sidebar-menu_item{
    font-size: 3rem;
    margin-top: 25px;
    font-weight: 600;
    opacity: 0;
}
.sidebar-menu_item:hover{
    color: #24f2ad;
    transition: .2s;
}
.sidebar-links{
    margin-top: 40px;
    animation: showMenu .7s ease-in;
}

.sidebar-links a{
    margin-left: 20px;
}
.animate-item{
    animation: showMenu .7s ease-in-out;
    opacity: 1;
}
/* Animation */
@keyframes show {
    from{
        opacity: 0;
        height: 0;
    }
    to{
        opacity: 1;
        height: 100vh;
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
@media (min-width: 481px) and (max-width: 850px) and (orientation: landscape){ /* Mobile landscape*/
    .sidebar-content{
        margin-right: 20px;
    }
    .sidebar-menu_item{
        font-size: 2rem;
        margin-top: 15px;
    }
}
@media (min-width: 320px) and (max-width: 480px) { /* Mobile portrait*/
    .sidebar-content{
        margin-right: 20px;
    }
    .sidebar-menu_item{
        font-size: 2rem;
        margin-top: 15px;
    }
}
</style>
<style scoped src="../meta.css"></style>