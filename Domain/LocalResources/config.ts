import i18next from 'i18next';
import _ar from './ar'
import _en from './en'

export default  async function init(){
    await  i18next.init({
        lng: 'en', // if you're using a language detector, do not define the lng option
       
        resources: {  
          en: { translation:_en},
          ar: { translation:_ar}
        }
      });
}

// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
//document.getElementById('output').innerHTML = i18next.t('key');
