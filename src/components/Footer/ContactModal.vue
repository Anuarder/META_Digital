<template>
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
</template>