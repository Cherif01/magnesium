// Environnement de developpement
import { environment } from 'src/environments/environment'


const LINK_PROD: string = 'http://localhost:8085/api/'
const LINK_DEVS: string = 'http://localhost:8085/api/'



export const LINK_STATIC_FILES: string = 'http://localhost:8085/photo/'



// url de base
export const BASE_URL = environment.production ? LINK_PROD : LINK_DEVS


// CONSTANTE DANS L'APPLIS
// http://192.168.1.117:8080/api/
