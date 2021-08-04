import firebase from 'firebase/app';

// NOTE É necessário importar as utilidades que irá usar na aplicação
import 'firebase/auth';
import 'firebase/database';

// SECTION Configuração referente ao banco de dados e integração WEB
/* const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSASGING_SENDER_ID,
    appId: process.env.APP_ID
}; */

const firebaseConfig = {
  apiKey: 'AIzaSyAewj-Rs-P1PCyYtYBjGh1R4tZNnekdysc',
  authDomain: 'list-supermarket.firebaseapp.com',
  databaseURL: 'https://list-supermarket-default-rtdb.firebaseio.com',
  projectId: 'list-supermarket',
  storageBucket: 'list-supermarket.appspot.com',
  messagingSenderId: '886243374328',
  appId: '1:886243374328:web:4d5494a5d15ebfadcc370d',
  measurementId: 'G-2EP31G34EZ',
};

// !SECTION
firebase.initializeApp(firebaseConfig);

// NOTE Para inicialização de utilidades ficarem fácil e não haver necessidade de importação a todo momento
const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
