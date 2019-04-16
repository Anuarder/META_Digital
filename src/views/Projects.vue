<template>
    <div class="projects-page">
         <div class="navigation">
            <meta-navigation></meta-navigation>
            <meta-arrow></meta-arrow>
        </div>
        <div class="projects">
            <div class="text">
                <div class="title">
                    <p class="colored-text">projects</p>
                    <p class="small-text">are coming...</p>
                </div>
            </div>
        </div>
        <div class="footer">
            <meta-footer></meta-footer>
        </div>
    </div>
</template>
<style scoped>
.projects-page{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #fff;
    background: url('/img/Projects/Coming.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left;
    animation: show 2s ease-out;
}
.projects{
    flex: 1;
}
.text{
    position: absolute;
    left: 53%;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3rem;
    line-height: 3rem;
    font-weight: 600;
}

@keyframes show {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}

@media (min-width: 1921px) {
    .text{
        left: 50%;
    }
}

@media (min-width: 320px) and (max-width: 1439px) { /* Tablets, Ipad (Portrait) */
    .projects-page{
        background-size: cover;
        background-position: center;
    }
    .text{
        transform: translate(-50%, -50%);
    }
}
</style>
