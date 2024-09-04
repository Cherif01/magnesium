// Environnement de developpement
import { environment } from 'src/environments/environment'
// BASE_URL FOR IMAGES OR MOVIES...
export const LINK_STATIC_FILES: string = 'http://192.168.1.120:8080/photo/'

// LIEN POUR LES APIs
const LINK_PROD: string = 'http://192.168.1.120:8080/api/'
const LINK_DEVS: string = 'http://192.168.1.120:8080/api/'


export const BASE_URL = environment.production ? LINK_PROD : LINK_DEVS
// CONSTANTE DANS L'APPLIS
// http://192.168.1.117:8080/api/
