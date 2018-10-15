import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '../lang';

Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale:'cn',
    messages
})

const loadedLanguages = ['cn'];
export async function loadLanguageAsync(lang){
    if(i18n.locale == lang) return;
    const msg = await import(`../lang/${lang}.json`);
    loadedLanguages.push(lang);
    Object.assign(messages,msg.default);
    i18n.locale = lang;

}