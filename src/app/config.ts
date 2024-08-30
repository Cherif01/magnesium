// Environnement de developpement
import { environment } from 'src/environments/environment'
// BASE_URL FOR IMAGES OR MOVIES...
export const LINK_STATIC_FILES: string = 'http://192.168.1.122:8080/photo/'

<<<<<<< HEAD
// LIEN POUR LES APIs
const LINK_PROD: string = 'http://192.168.1.122:8080/api/'
const LINK_DEVS: string = 'http://192.168.1.122:8080/api/'

=======

const LINK_PROD: string = 'http://192.168.1.122:8080/api/'
const LINK_DEVS: string = 'http://192.168.1.122:8080/api/'

export const LINK_STATIC_FILES: string = 'http://192.168.1.122:8080/photo/'


>>>>>>> 23b6f2d0742d0a0882073dd9956c669bf8cd20f8
// url de base
export const BASE_URL = environment.production ? LINK_PROD : LINK_DEVS

// CONSTANTE DANS L'APPLIS
// http://192.168.1.117:8080/api/
