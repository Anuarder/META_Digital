<template>
    <div class="philosophy-page" @mousemove="followMouse">
        <div class="navigation">
            <meta-navigation></meta-navigation>
            <meta-arrow></meta-arrow>
        </div>
        <div class="philosophy">
            <div class="content" :style="!mobile ? cursorStyle : ''">
                <div class="title">
                    <h2>
                        идеи
                    </h2>
                    <h2 class="colored-text">
                        обретают
                    </h2> 
                    <h2 class="colored-text">
                        форму
                    </h2>
                    <h3>
                        здесь 
                        <span class="colored-text">
                            43°12'17.3"N, 76°54'57.2"E
                        </span>
                    </h3>
                </div>
                <div class="quote">
                    <h1>место, где у идей нет ограничений</h1>
                    <p>
                        «Мы выбрали название мета. потому что мы очень голодны и стремимся 
                        создавать наиболее конкурентоспособные решения для наших клиентов. 
                        Находясь в Алматы, мы здесь, чтобы вести и расти вместе с вами. 
                        Для нас искусство создания имеет глубокое значение. 
                        Это то, что поднимает нас утром, и то, что поддерживает нас ночью».
                    </p>
                    <h4>- дален оспанов</h4>
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
            cursor: '',
            mobile: false,
        }

    },
    computed: {
        cursorStyle(){
            return this.cursor
        }
    },
    created(){
        this.checkSize();
    },
    methods: {
        followMouse(e){
            this.cursor = `transform: translate3d(${(e.pageX * 0.01)}px, ${e.pageY * 0.02}px, 0px);`;
        },
        checkSize(){
            if(window.screen.width < 850){
                this.mobile = true;
            }
        }
    }
}
</script>

<style scoped>
.philosophy-page{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    animation: show 1s ease-in-out;
}
.philosophy{
    flex: 1;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-image: url('/img/Philosophy/Background.png');
    background-repeat: no-repeat;
    background-size: 50vh;
    background-position: 40%;
}
.content{
    display: flex;
}
.title{
    margin-bottom: 30px;
}
.title h2{
    font-weight: 600;
    font-size: 2.5rem;
    margin-bottom: 5px;
}
.title h3{
    margin-top: 30px;
}
.quote{
    padding-left: 200px; 
    width: 700px;
}
.quote h1{
    font-weight: 900;
    font-size: 1.2rem;
    text-transform: uppercase;
}
.quote p{
    margin-top: 30px; 
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
}
.quote h4{
    margin-top: 30px;
    font-weight: 900;
    font-size: 1.1rem;
    text-transform: uppercase;
    text-align: right;
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

/* MEDIA RULES */
@media screen and (min-width: 1921px){ /* 2k, 4k */
    .philosophy{
        background-size: 40vh;
    }
    .title h2{
        font-size: 2rem;
        margin-bottom: 1px;
    }
    .title h3{
        font-size: 1.5rem;
    }
    .quote{
        padding-left: 200px; 
        width: 800px;
    }
    .quote h1{
        font-size: 1.3rem;
    }
    .quote p{
        font-size: 1.1rem;
        line-height: 1.4rem;
    }
    .quote h4{
        margin-top: 50px;
        font-size: 1.3rem;
    }
}
@media screen and (max-width: 1366px) and (orientation: landscape){ /* IPAD PRO */
    .philosophy{
        background-size: 40vh;
    }
    .title h2{
        font-size: 2rem;
    }
    .title h3{
        font-size: 1rem;
    }
    .quote{
        padding-left: 100px; 
        width: 600px;
    }
    .quote h1{
        font-size: 1.2rem;
    }
    .quote p{
        font-size: 1rem;
        line-height: 1.2rem;
    }
    .quote h4{
        margin-top: 30px;
        font-size: 1.2rem;
    }
}
@media (min-width: 768px) and (max-width: 1024px) { /* Tablets, Ipad (Portrait) */
    .philosophy{
        background-size: 30vh;
    }
    .title h2{
        font-size: 2rem;
    }
    .title h3{
        font-size: 1rem;
    }
    .quote{
        padding-left: 100px; 
        width: 300px;
        
    }
    .quote h1{
        font-weight: 600;
        font-size: 1.2rem;
    }
    .quote p{
        font-size: 1rem;
        line-height: 1.2rem;
        font-weight: 300;
    }
    .quote h4{
        margin-top: 30px;
        font-size: 1.2rem;
    }
}
@media (min-width: 569px) and (max-width: 850px) and (orientation: landscape){ /* Mobile landscape*/
    .philosophy{
        background-size: 50vh;
        background-position: center;
    }
    .title h2{
        font-size: 2rem;
    }
    .title h3{
        font-size: .9rem;
    }
    .quote{
        padding-left: 100px; 
        width: 300px;
        
    }
    .quote h1{
        font-weight: 600;
        font-size: 1rem;
    }
    .quote p{
        font-size: .9rem;
        line-height: 1rem;
        font-weight: 300;
    }
    .quote h4{
        margin-top: 10px;
        font-weight: 400;
        font-size: 1rem;
    }
}
@media (min-width: 481px) and (max-width: 568px) and (orientation: landscape){
    .philosophy{
        background-size: 50vh;
        background-position: center;
    }
    .title{
        padding: 10px; 
    }
    .title h2{
        font-size: 1.5rem;
    }
    .title h3{
        font-size: .9rem;
    }
    .quote{
        padding-left: 100px; 
        width: 270px;
        
    }
    .quote h1{
        font-weight: 600;
        font-size: 1rem;
    }
    .quote p{
        font-size: .7rem;
        line-height: 1rem;
        font-weight: 300;
    }
    .quote h4{
        margin-top: 5px;
        font-weight: 400;
        font-size: .8rem;
    }
}
@media (min-width: 320px) and (max-width: 480px) { /* Mobile portrait*/
    .philosophy{
        background-size: 35vh;
        background-position: 150%;
    }
    .content{
        flex-direction: column;
    }
    .title h2{
        font-size: 1.5rem;
    }
    .title h3{
        font-size: .9rem;
    }
    .quote{
        padding-left: 0; 
        width: 300px;
    }
    .quote h1{
        font-weight: 600;
        font-size: 1rem;
    }
    .quote p{
        font-size: 1rem;
        line-height: 1rem;
        font-weight: 400;
    }
    .quote h4{
        margin-top: 10px;
        font-weight: 400;
        font-size: 1rem;
    }
}

</style>
