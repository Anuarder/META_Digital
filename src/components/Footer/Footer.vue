<template>
    <div class="footer-wrap">
        <div class="footer">
            <div class="mail">
                <div class="mail-img">
                    <img :src="setLogo ? '/img/Main/EnvelopeBlack.svg' : '/img/Main/Envelope.svg'">
                </div>
                <span :class="setLogo ? 'black-text' : ''" class="mail-text">work with us</span>
            </div>
            <div
                class="language"
                :class="setLogo ? 'black-text' : ''"
                @click="setLanguage">
                {{language}}
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    props: {
        sidebar: Boolean,
        modal: Boolean
    },
    computed: {
        ...mapState(['language']),
        setLogo() {
            if (this.sidebar && this.modal) {
                return false;
            } else if (this.sidebar && !this.modal) {
                return true;
            } else {
                return false;
            }
        }
    },
    methods: {
        setLanguage() {
            this.$store.dispatch('setLanguage');
        }
    }
}
</script>
<style scoped>
.footer {
    position: relative;
    bottom: 0;
    padding: 0 40px 45px 40px;
    display: flex;
    justify-content: space-between;
    color: #fff;
}
.mail {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 1rem;
    display: flex;
    height: 30px;
    width: 150px;
}
.mail-text {
    font-weight: 200;
    padding-left: 10px;
    margin-bottom: 5px;
    display: none;
    animation: showText 0.5s ease-in-out;
    color: #24f2ad;
}

.mail-img:hover {
    animation: rotate 0.7s ease-in-out;
}

.mail-img:hover + .mail-text {
    display: block;
}

@keyframes rotate {
    0% {
        transform: rotate(5deg);
    }
    25% {
        transform: rotate(-10deg);
    }
    50% {
        transform: rotate(15deg);
    }
    75% {
        transform: rotate(-10deg);
    }
    100% {
        transform: rotate(5deg);
    }
}
@keyframes showText {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.language {
    user-select: none;
    font-weight: 200;
    cursor: pointer;
}
.black-text {
    color: black !important;
}
@media (min-width: 481px) and (max-width: 850px) and (orientation: landscape){
    .footer {
        padding: 0 20px 20px 20px;
    }
}
@media (min-width: 320px) and (max-width: 480px) {
    .footer {
        padding: 0 20px 20px 20px;
    }
}
</style>
