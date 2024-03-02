import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import global_es from "./components/translations/es/global.json"
import global_en from "./components/translations/en/global.json"

i18next.init({
    interpolation: {escapeValue: false},
    lng: "es",
    resources: {
        es: {
            global: global_es
        },
        en: {
            global: global_en
        }
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
<I18nextProvider i18n={i18next}>
    <App />

</I18nextProvider>
)
