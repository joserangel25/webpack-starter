import '../style/componente.css'
// import webpackLogo from '../assets/img/webpack-logo.png'

export const saludar = (nombre) => {
    console.log('Creando etiqueta H1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}, bienvedid@`;

    document.body.append(h1);

    //img
    // const imagen = document.createElement('img');
    // imagen.src = webpackLogo;
    // document.body.append(imagen);
}