<template>
    <div class="contact-page">
        <div class="meta-navigation">
            <router-link to="/home">
                <div class="logo">
                    <img src="/img/Main/logo.svg" alt="logo">
                </div>
            </router-link>
            <div class="menu" @click="closeContactModal">
                <span class="colored-text">Закрыть</span>
            </div>
        </div>
        <div class="contact-modal">
            <div class="contact-form">
                <div class="text">
                    <h1 class="colored-text">Let's work together</h1>
                    <p>
                        Опишите ваш проект и оставьте нам свои контактные
                        данные, мы свяжемся с вами в течение 24 часов
                    </p>
                </div>
                <div class="form">
                    <form @submit.prevent>
                        <div class="form-item form-item-1">
                            <input type="text" placeholder="Ваше имя">
                        </div>
                        <div class="form-item form-item-2">
                            <input type="tel" placeholder="Номер">
                            <input type="email" placeholder="Email">
                        </div>
                        <button type="submit" class="contact-button">
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
            <div class="address">
                Офис
                <div class="address-items">
                    <div class="address-item">
                        <h1>Алматы</h1>
                        <p>144 Al-Farabi avenue</p>
                        <p>+7 (705) 555-4416</p>
                    </div>
                    <div class="address-item">
                        <h1>Hong Kong</h1>
                        <p>144 Al-Farabi avenue</p>
                        <p>+7 (705) 555-4416</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="meta-footer">
            <div class="footer">
                <div class="mail">
                    <div class="mail-img">
                        <img src="/img/Main/Envelope.svg">
                    </div>
                    <span class="mail-text">work with us</span>
                </div>
                <div
                    class="language"
                    @click="setLanguage">
                    {{language}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['language']),
    },
    methods: {
        setLanguage() {
            this.$store.dispatch('setLanguage');
        },
        closeContactModal(){
            this.$emit('close');
        }
    }
}
</script>
<style scoped>
.contact-page{
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #fff;
    animation: show .3s ease-out;
}
.contact-modal{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* NAVIGATE */
.menu span{
    font-size: 1.1rem;
    font-weight: 200;
    cursor: pointer;
}
/* Contact Form */
.text{
    width: 545px;
}
.text h1{
    font-size: 3rem;
}
.text p{
    margin-top: 50px;
    font-size: 1.2rem;
    font-weight: 300;
}
.form{
    margin-top: 50px;
    width: 480px;
}
.form-item{
    margin-top: 35px;
    display: flex;
    justify-content: space-between;
}
.form-item input{
    outline: none;
    padding: 1rem 0;
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid #fff;
    color: #fff;
    font-size: 1rem;
}
.form-item input:focus{
    border-color: #24F2AD;
    transition: .2s;
}
.form-item input::-webkit-input-placeholder {
    color: #f1f1f1;
    font-size: 1rem;
}
.form-item-2 input[type="email"]{
    margin-left: 25px;
}
.contact-button{
    cursor: pointer;
    outline: none;
    width: 200px;
    height: 60px;
    border: none;
    background-color: #24F2AD;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 4px;
    margin-top: 70px;
}
.contact-button:hover{
    opacity: .8;
}
.contact-button:active{
    opacity: 1;
}
/* ADDRESS */
.address{
    margin-left: 200px;
    font-size: 1.2rem;
}
.address-item{
    margin-top: 30px;
}
.address-item p{
    margin-top: 15px;
    font-size: 1.3rem;
    font-weight: 300;
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
@media screen and (max-width: 1366px) and (orientation: landscape){ /* IPAD PRO */
    .contact-button{
        width: 200px;
        height: 55px;
        margin-top: 50px;
    }
    .address{
        margin-left: 150px;
    }
    .text p{
        margin-top: 40px;
    }
    .form{
        margin-top: 40px;
    }
}
@media (min-width: 768px) and (max-width: 1024px) { /* Tablets, Ipad (Portrait) */
    .contact-modal{
        flex-direction: column;
    }
    .contact-button{
        width: 150px;
        height: 50px;
        margin-top: 40px;
        font-size: 1rem;
    }
    .address{
        margin-left: 0;
        margin-top: 30px;
    }
    .text h1{
        font-size: 2rem;
    }
    .text p{
        margin-top: 30px;
        font-size: 1.1rem;
    }
    .form{
        margin-top: 30px;
    }
    .address-items{
        display: flex;
        justify-content: center;
    }
    .address-item h1{
        font-size: 1.5rem;
    }
    .address-item{
        margin-right: 50px;
    }
}
@media (min-width: 481px) and (max-width: 850px) and (orientation: landscape){ /* Mobile landscape*/
    .contact-modal{
        flex-direction: column;
    }
    .contact-form{
        margin-top: 30px;
    }
    .contact-button{
        width: 150px;
        height: 50px;
        margin-top: 40px;
        font-size: 1rem;
    }
    .address{
        margin-left: 0;
        margin-top: 30px;
    }
    .text{
        width: 450px;
    }
    .text h1{
        font-size: 2rem;
    }
    .text p{
        margin-top: 30px;
        font-size: 1.1rem;
    }
    .form{
        width: 430px;
        margin-top: 30px;
    }
    .address-items{
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    }
    .address-item h1{
        font-size: 1.5rem;
    }
    .address-item{
        margin-right: 50px;
    }
}
@media (min-width: 320px) and (max-width: 480px) { /* Mobile portrait*/
    .contact-modal{
        flex-direction: column;
    }
    .contact-form{
        margin-top: 30px;
    }
    .contact-button{
        width: 150px;
        height: 50px;
        margin-top: 40px;
        font-size: 1rem;
    }
    .address{
        margin-left: 0;
        margin-top: 40px;
    }
    .text{
        width: 300px;
    }
    .text h1{
        font-size: 2rem;
    }
    .text p{
        margin-top: 30px;
        font-size: 1.1rem;
    }
    .form{
        width: 300px;
        margin-top: 30px;
    }
    .address-items{
        margin-left: 0;
        margin-bottom: 40px;
    }
    .address-item h1{
        font-size: 1.5rem;
    }
    .address-item{
        margin-right: 100px;
    }
}
</style>
<style scoped src="../meta.css"></style>
