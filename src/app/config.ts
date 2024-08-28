// Environnement de developpement
import { environment } from 'src/environments/environment'

const LINK_PROD: string = 'http://192.168.1.122:8080/api/'
const LINK_DEVS: string = 'http://192.168.1.122:8080/api/'

// url de base
export const BASE_URL = environment.production ? LINK_PROD : LINK_DEVS

// CONSTANTE DANS L'APPLIS
// http://192.168.1.117:8080/api/
