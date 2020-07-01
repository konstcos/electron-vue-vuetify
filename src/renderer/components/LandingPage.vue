<template>
    <div id="wrapper">
        <v-container>

            <v-row>
                <v-col>
                    <img id="logo" src="~@/assets/logo_electron_vuetify.png" alt="electron-vue">
                    <img id="vuetify_logo" src="~@/assets/vuetify_logo.svg" alt="vuetify-logo">
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <h3 class="mb-3">
                        Welcome to your new project!
                    </h3>
                    <system-information></system-information>

                </v-col>

                <v-col>
                    <div class="mb-6">
                        <h3 class="mb-3">Getting Started</h3>
                        <p>
                            electron-vue comes packed with detailed documentation that covers everything from
                            internal configurations, using the project structure, building your application,
                            and so much more.
                        </p>

                        <v-btn
                                color="primary"
                                text
                                small
                                @click="open('https://simulatedgreg.gitbooks.io/electron-vue/content/')">
                            Read the Docs
                        </v-btn>
                    </div>
                    <div>
                        <h3 class="mb-2">Other Documentation</h3>
                        <v-btn
                                small
                                rounded
                                color="primary"
                                @click="open('https://electron.atom.io/docs/')">
                            Electron
                        </v-btn>
                        <v-btn
                                class="ml-3"
                                small
                                rounded
                                color="primary"
                                @click="open('https://vuejs.org/v2/guide/')">
                            Vue.js
                        </v-btn>
                        <v-btn
                                class="ml-3"
                                small
                                rounded
                                color="primary"
                                @click="open('https://vuetifyjs.com/en/introduction/why-vuetify/')">
                            Vuetify.js
                        </v-btn>
                    </div>
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>

<script>
    import fs from 'fs'
    import SystemInformation from './LandingPage/SystemInformation'

    export default {
        name: 'landing-page',
        data: function () {
            return {
                path: {},
                dirList: []
            }
        },
        components: {SystemInformation},
        methods: {
            open(link) {
                this.$electron.shell.openExternal(link)
            }
        }
    }
</script>

<style>
    #logo {
        height: auto;
        margin-bottom: 20px;
        width: 420px;
    }

    #vuetify_logo {
        height: auto;
        margin-left: 10px;
        margin-bottom: 60px;
        width: 40px;
    }
</style>
