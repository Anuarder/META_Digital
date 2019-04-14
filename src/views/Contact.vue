<template>
    <div class="contact-page">
        <div class="navigation">
            <meta-navigation></meta-navigation>
        </div>
        <div class="contact">
            <div class="contact-info">
                <div class="title">
                    <h4 class="colored-text">
                        Contact us
                    </h4>
                    <h1>
                        Let's talk.
                    </h1>
                </div>
                <div class="address">
                    <h4>
                        meta.
                    </h4>
                    <p>144 Al-Farabi avenue,</p>
                    <p>Almaty, Kazakhstan</p>
                </div>
                <div class="phone">
                    <div>
                        <a href="tel:+77055554416">
                            +7 (705) 555-4416
                        </a>
                    </div>
                    <div>
                        <a href="mailto:info@meta.gg">
                            info@meta.gg
                        </a>
                    </div>
                </div>
                <div class="social">
                    <a href="#" class="social-facebook" target="blank">
                        <div>
                            <i class="fab fa-facebook-f"></i>
                        </div>
                    </a>
                    <a href="#" class="social-instagram" target="blank">
                        <div>
                            <i class="fab fa-instagram"></i>
                        </div>
                    </a>
                </div>
            </div>
            <div class="contact-map" id="map" ref="map"></div>
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
            map: ''
        }
    },
    mounted(){
        this.initMap();
    },
    methods:{
        initMap(){
            // eslint-disable-next-line
            this.map = new google.maps.Map(this.$refs.map, {
                center: {lat:61.180059, lng: -149.822075},
                scrollwheel: false,
                zoom: 4
            });
        }
    }
}
</script>
<style scoped>
.contact-page{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    animation: show 1s ease-in-out;
}
.contact{
    flex: 1;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* Contact info */
.contact-info{
    margin-right: 200px;
}
.title h4{
    font-size: 1.5rem;
}
.title h1{
    font-size: 3rem;
}
.address h4{
    font-size: 1.5rem;
}
.address p{
    font-size: 1.5rem;
}
.phone{
    margin-top: 65px;
}
.phone a{
    font-size: 1.5rem;
}
.social{
    margin-top: 45px;
    display: flex;
}
.social-instagram{
    margin-left: 15px;
}
.social div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.75rem;
    height: 1.75rem;
    background-color: #fff;
    color: #000;
    border-radius: 50%;
}
.social div:hover{
    transition: .3s;
    background-color: #24f2ad;
    color: #000;
}
/* Google Map */
.contact-map{
    width: 680px;
    height: 400px;
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
@media (min-width: 768px) and (max-width: 1024px) { /* Tablets, Ipad (Portrait) */
    .contact-info{
        margin-right: 100px;
    }
    .contact-map{
        width: 380px;
        height: 500px;
    }
}
@media (min-width: 481px) and (max-width: 850px) and (orientation: landscape){ /* Mobile landscape*/
    .contact-info{
        margin-right: 20px;
    }
    .title h4{
        font-size: 1.1rem;
    }
    .title h1{
        font-size: 1.7rem;
    }
    .address h4{
        font-size: 1.1rem;
    }
    .address p{
        font-size: 1.1rem;
    }
    .phone{
        margin-top: 20px;
    }
    .phone a{
        font-size: 1.1rem;
    }
    .social{
        margin-top: 15px;
    }
    .contact-map{
        width: 320px;
        height: 200px;
    }
}
@media (min-width: 320px) and (max-width: 480px) { /* Mobile portrait*/
    .contact{
        flex-direction: column;
        align-items: flex-start;
    }
    .contact-info{
        margin-top: 20px;
        margin-right: 0;
        margin-left: 20px;
    }
    .title h4{
        font-size: 1.3rem;
    }
    .title h1{
        margin-top: 10px;
        font-size: 2rem;
    }
    .address h4{
        font-size: 1.3rem;
    }
    .address p{
        font-size: 1.3rem;
    }
    .phone{
        margin-top: 25px;
    }
    .phone a{
        font-size: 1.3rem;
    }
    .social{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .contact-map{
        width: 100%;
        height: 400px;
        margin-bottom: 20px;
    }
}
</style>
