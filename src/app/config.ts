// Environnement de developpement
import { environment } from 'src/environments/environment'

<<<<<<< HEAD
const LINK_PROD: string = 'http://192.168.1.163:8080/api/'
const LINK_DEVS: string = 'http://192.168.1.163:8080/api/'
=======
const LINK_PROD: string = 'http://192.168.1.122:8080/api/'
const LINK_DEVS: string = 'http://192.168.1.122:8080/api/'


export const LINK_STATIC_FILES: string = 'http://192.168.1.122:8080/photo/'
>>>>>>> 103ff233464b8b494a9806b450eb455b7661e047


// url de base
export const BASE_URL = environment.production ? LINK_PROD : LINK_DEVS
export const LINK_STATIC_FILES = "http://192.168.1.163:8080/photo/"

// CONSTANTE DANS L'APPLIS
// http://192.168.1.117:8080/api/
