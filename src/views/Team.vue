<template>
    <div class="team-page">
        <div class="navigation">
            <meta-navigation></meta-navigation>
            <meta-arrow></meta-arrow>
        </div>
        <div class="team">
            <div class="team-slider">
                <div 
                    class="team-slider-item"
                    v-for="(item, i) in team"
                    :key="i"
                    :style="nextSlideIm">
                    <div class="title">
                        <div class="firstname">
                            {{item.firstname}}
                        </div>
                        <div class="lastname colored-text">
                            {{item.lastname}}
                        </div>
                        <div class="position">
                            {{item.position}}
                        </div>
                    </div>
                    <div class="photo">
                        <img :src="item.photo">
                    </div>
                </div>
                <div class="team-slider-controls">
                    <button class="next-button" @click="nextSlide">
                        <img src="/img/Team/arrow.svg" alt="">
                    </button>
                </div>
                <div :class="shadowActive ? 'shadow' : ''"></div>
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
        return {
            team: [
                {
                    firstname: 'Joseph',
                    lastname: 'Gordon-levitt',
                    position: 'pr manager',
                    photo: '/img/Team/Joseph.png'
                },
                {
                    firstname: 'Super Joseph',
                    lastname: 'Gordon-levitt',
                    position: 'pr manager',
                    photo: '/img/Team/SuperJoseph.png'
                },
                {
                    firstname: 'Так себе Joseph',
                    lastname: 'Gordon-levitt',
                    position: 'pr manager',
                    photo: '/img/Team/Joseph2.png'
                }
            ],
            currentSlide: 0,
            activeClass: 'active-slide',
            nextSlideImg: '',
            shadowActive: true
        }
    },
    computed:{
        current(){
            return this.currentSlide;
        },
        nextSlideIm(){
            return this.nextSlideImg;
        }
    },
    methods:{
        nextSlide(){
            this.shadowActive = false;
            if(this.currentSlide >= this.team.length - 1){
                this.currentSlide = 0; 
                this.nextSlideImg = `transform: translateX(0);`;
                setTimeout(() => {
                    this.shadowActive = true;
                }, 500);
            }else{
                this.currentSlide++;
                this.nextSlideImg = `transform: translateX(${-100 * this.currentSlide + 1}%);`;
                setTimeout(() => {
                    this.shadowActive = true;
                }, 500);
            }
        }
    }
}
</script>
<style scoped>
.navigation{
    position: relative;
    z-index: 2;
}
.team-page{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #fff;
    animation: show 2s ease-out;
}
.team{
    flex: 1;
}
/* SLIDER WRAP */
.team-slider{
    height: 100%;
    width: 100%;
    display: flex;
    overflow: hidden; 
}
.team-slider-item{
    position: relative;
    height: 100%;
    transition: .5s ease;
    min-width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* SLIDER ITEM */

.title{
    font-size: 3.125rem;
    font-weight: 600;
    margin-left: 200px;
}
.position{
    margin-top: 40px;
    font-size: 1.875rem;
}
.photo{
    margin-left: 30px;
}
.photo img{
    max-width: 80%;
}
/* SLIDER CONTROL */
.team-slider-controls{
    position: absolute;
    bottom: 100px;
    right: 100px;
    z-index: 1;
}
.next-button{
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
    color: #fff;
    padding: 20px;
}
.next-button:active{
    -webkit-tap-highlight-color: transparent;
}
.shadow{
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.85);
    height: 100%;
    width: 200px;
    transition: .3s ease;
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
@media screen and (min-width: 1921px){
    .team-slider-item{
        min-width: 70%;
    }
    .photo img{
        max-width: 100%;
    }
    .shadow{
        width: 300px;
    }
}
@media screen and (max-width: 1440px){
    .team-slider-item{
        min-width: 70%;
    }
    .title{
        font-size: 2rem;
    }
    .position{
        font-size: 1.3rem;
    }
    .shadow{
        width: 300px;
    }
}
@media screen and (max-width: 1366px){
    .team-slider-item{
        justify-content: center;
        min-width: 100%;
    }
    .title{
        font-size: 2rem;
        margin-left: 40px;
    }
    .position{
        margin-top: 30px;
        font-size: 1.5rem;
    }
    .photo img{
        max-width: 48%;
    }
    .team-slider-controls{
        bottom: 120px;
        left: 70%;
    }
    .next-button img{
        width: 70px;
    }
}
@media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) { /* Tablets, Ipad (Portrait) */
    .team-slider-item{
        justify-content: flex-start;
        min-width: 100%;
    }
    .title{
        font-size: 4rem;
        margin-left: 40px;
    }
    .position{
        margin-top: 40px;
        font-size: 2rem;
    }
    .photo{
        position: absolute;
        z-index: -1;
        right: 0;
    }
    .photo img{
        max-width: 90%;
    }
    .shadow{
        display: none;
    }
    .team-slider-controls{
        bottom: 200px;
        left: 40px;
    }
    .next-button img{
        width: 100px;
    }
}
@media (max-width: 1024px) and (orientation: landscape) {
    .team-slider-item{
        justify-content: flex-start;
        min-width: 100%;
    }
    .title{
        font-size: 3rem;
        margin-left: 40px;
    }
    .position{
        margin-top: 40px;
        font-size: 2rem;
    }
    .photo{
        position: absolute;
        z-index: -1;
        right: 0;
    }
    .photo img{
        max-width: 70%;
    }
    .shadow{
        display: none;
    }
    .team-slider-controls{
        bottom: 120px;
        left: 20px;
    }
    .next-button img{
        width: 100px;
    }
}
@media (min-width: 481px) and (max-width: 850px) and (orientation: landscape){ /* Mobile landscape*/
    .team-slider-item{
        justify-content: center;
        min-width: 100%;
    }
    .title{
        font-size: 1.5rem;
        margin-left: 40px;
    }
    .position{
        margin-top: 20px;
        font-size: 1rem;
    }
    .photo{
        position: absolute;
        z-index: -1;
        right: 0;
        left: 0;
    }
    .photo img{
        max-width: 27%;
    }
    .shadow{
        display: none;
    }
    .team-slider-controls{
        bottom: 120px;
        left: 70%;
    }
    .next-button img{
        width: 70px;
    }
}
@media (min-width: 320px) and (max-width: 480px) { /* Mobile portrait*/
    .team-slider-item{
        justify-content: flex-start;
        min-width: 100%;
    }
    .title{
        font-size: 2rem;
        margin-left: 40px;
    }
    .position{
        margin-top: 30px;
        font-size: 1.5rem;
    }
    .photo{
        position: absolute;
        z-index: -1;
        right: 0;
    }
    .photo img{
        max-width: 95%;
    }
    .shadow{
        display: none;
    }
    .team-slider-controls{
        bottom: 100px;
        left: 20px;
    }
    .next-button img{
        width: 100px;
    }
}
</style>
