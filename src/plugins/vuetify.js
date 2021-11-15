import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark:true,
        themes: {
            light: {
                primary: '#4A148C',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#FF1744',
            },
            dark: {
                primary: colors.purple.accent3,
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#FF1744',
            },
        },
    },
});
