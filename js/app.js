const App = {
    data() {
        return {
            langFr: false,
            langEn: true
        }
    },

    methods: {

        changeLangToFr() {
            this.changeLang("fr")
        },

        changeLangToEn() {
            this.changeLang("en")
        },

       
        changeLang(destination) {
            this.langFr = false;
            this.langEn = false;

            if (destination === "fr") {
                this.langFr = true;
            }
            if (destination === "en") {
                this.langEn = true;
            }
            
        }
    }
}

Vue.createApp(App).mount("#app")