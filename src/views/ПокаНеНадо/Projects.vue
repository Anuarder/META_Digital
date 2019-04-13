<template>
    <div class="projects-page">
         <div class="navigation">
            <meta-navigation></meta-navigation>
        </div>
        <div class="projects">
            <div class="title">
                <div class="text">
                    <h6>2019</h6>
                    <h1>Проекты</h1>
                    <h5>Home for all the things we love</h5>
                </div>
                <div class="menu">
                    <div
                        v-for="(item, i) in projectButtons"
                        :key="i"
                        @click="setActive(i)"
                        class="menu-item"
                        :class="getActive == i ? 'menu-item-active' : ''"
                    >{{item.title}}</div>
                </div>
            </div>
            <div class="projects-template">
                <div class="projects-grid" :style="`grid-template-areas: ${getProjectsGrid}`">
                    <div
                        v-for="(item, i) in filterArr"
                        :key="i"
                        :style="`background-image: url(${item.background});`"
                        class="projects-grid-item"
                        :class="`item-${i+1}`">
                        <div class="name">
                            <h1>{{item.title}}</h1>
                            <h3>{{item.subtitle}}</h3>
                        </div>
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
            activeButton: 0,
            projectButtons: [
                {
                    title: "Разработка",
                    value: "Разработка"
                },
                {
                    title: "UX/UI",
                    value: "UX/UI"
                },
                {
                    title: "Айдентика",
                    value: "Айдентика"
                }
            ],
            projects: [
                {
                    title: "Горное солнце",
                    subtitle: "Айдентика // UX // UI",
                    value: ["Айдентика", "UX/UI"],
                    background: "/img/Projects/GS.jpg"
                },
                {
                    title: "Dimash Tea",
                    subtitle: "Айдентика // UX // UI",
                    value: ["Айдентика", "UX/UI"],
                    background: "/img/Projects/DimashTea.jpg"
                },
                {
                    title: "Watch",
                    subtitle: "Айдентика",
                    value: ["Айдентика"],
                    background: "/img/Projects/Watch.jpg"
                },
                {
                    title: "Mobilex",
                    subtitle: "UX // UI",
                    value: ["UX/UI"],
                    background: "/img/Projects/Mobilex.jpg"
                },
                {
                    title: "Mobilex Racing",
                    subtitle: "Айдентика // UX // UI",
                    value: ["Айдентика", "UX/UI"],
                    background: "/img/Projects/MobilexRacing.jpg"
                }
            ],
            projectsGrid: "",
            filterProjects: []
        }
    },
    created() {
        this.setActive(0);
    },
    computed: {
        getActive() {
            return this.activeButton;
        },
        filterArr() {
            return this.filterProjects;
        },
        getProjectsGrid() {
            return this.projectsGrid;
        }
    },
    methods: {
        setActive(i){
            this.activeButton = i;
            if (this.activeButton == 0) {
                this.filterProjects = this.projects;
            } else {
                this.filterProjects = this.projects.filter(el => {
                    return el.value.includes(
                        this.projectButtons[this.activeButton].value
                    );
                });
            }
            let len = this.filterProjects.length;
            if (len == 1) {
                this.projectsGrid = `"first first first" "first first first" "first first first" "first first first"`;
            } else if (len == 2) {
                this.projectsGrid = `"first first first" "first first first" "second second second" "second second second"`;
            } else if (len == 3) {
                this.projectsGrid = `"first first thrid" "first first thrid" "second second thrid" "second second thrid"`;
            } else if (len == 4) {
                this.projectsGrid = `"first first thrid" "first first thrid" "second second fourth" "second second fourth"`;
            } else if (len == 5) {
                this.projectsGrid = `"first first first" "first first first" "second thrid fifth" "second fourth fifth"`;
            }
        }
    }
}
</script>
<style scoped>
.projects-page{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    animation: show 1s ease-in-out;
}
.projects{
    flex: 1;
    color: #fff;
    display: flex;
}
.title{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    padding-left: 40px;
    width: 30%;
}
.text h1{
    margin-top: 10px;
    font-size: 2.5rem;
}
.text h5{
    margin-top: 30px;
    font-size: 1.2rem;
}
.text h6{
    font-size: 1.2rem;
}
.menu{
    margin-top: 60px;
}
.menu-item{
    margin-top: 10px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 100;
}
.menu-item:hover {
    color: #24f2ad;
    transition: 0.3s;
}
.menu-item-active {
    font-weight: 400;
    color: #24f2ad;
}

/* Projects */
.projects-template{
    position: absolute;
    background-color: #fff;
    top: 0;
    right: 0;
    z-index: -1;
    width: 70%;
    height: 100%;
}

.item-1 {
    background-position: center;
    grid-area: first;
}
.item-2 {
    grid-area: second;
}
.item-3 {
    grid-area: thrid;
}
.item-4 {
    grid-area: fourth;
}
.item-5 {
    grid-area: fifth;
}

.projects-grid {
    height: 100%;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
}

.projects-grid-item {
    display: flex;
    align-items: center;
    padding-left: 30px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: #f1f1f1;
}
</style>
