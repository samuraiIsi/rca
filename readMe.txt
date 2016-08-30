*** Donde me he quedado ***
09/03/16 - Resuelto el espacio de la imagen principal en la primera seccion, metido padding-bottom, quiero continuar con el navigation transparente por lo que la primera section sube hacia el top
[10/03/16] - Todas las paginas funcionen su contenido (mirar pag boligrafo, sobre esta me puedo basar en las demas), una vez funcione todo el contenido, customize cada pagina a traves de less
		Mirar el overley negro convertirlo a todo lo ancho, a lo mejor le da una mejor apariencia --> voy a dejarlo tal como esta por el momento

[*] - Hacer q me funcione query() q hereda del padre para el navigation lateral 

*** Ideas
Copiado de aqui:http://startbootstrap.com/template-overviews/creative/
Ver como esta creado el package.json en totte, en terminos de que paquetes podria utilizar para mi aplicacion

*** Preguntas
- el less q se crea cdo se compila no es solo main, se crea los demas de los archivos, no deberia ser solo main como lo es en tote?


*** ScrollSpy
https://jsfiddle.net/mekwall/up4nu/

Puedo hacer una directiva como scroll function creada una directiva para ser un atributo q pues en el boton, en este caso puedo poner un atributo al navigation

Have a look if it's interesting to download Normalize for CSS in bootstrap
	http://necolas.github.io/normalize.css/ 

http://localhost/C1/

*** interesante para hacer el main navigation bar 
y tb ver como funciona los anchors, por si puedo cogerlos para usarlos desde la url para ir a un anchor en concreto

https://docs.angularjs.org/api/ng/service/$anchorScroll

*** Para hacer el offset para el main navigation bar

https://docs.angularjs.org/api/ng/service/$anchorScroll#yOffset
http://stackoverflow.com/questions/26543396/how-to-setup-and-use-the-yoffset-property-of-anchorscroll-in-angularjs
http://plnkr.co/edit/k5DCMwxGQ0lmcDSvVGcl?p=preview

How to call .query()
http://stackoverflow.com/questions/24697320/why-cant-i-acces-the-data-within-a-with-query-returned-resources-object
http://www.w3schools.com/angular/angular_sql.asp
http://www.cnblogs.com/Answer1215/p/4322658.html

Scroll Function
// This scrolling function 
// is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
	in function elmYPosition(eID) { there was return y and became to return y - 50 for dong the offset
        
Otras webs pueden ser interesantes
http://www.almarpublicidad.es/


*** Para meter el Less
https://docs.omniref.com/js/npm/gulp-less/2.0.2 - lo que se usa en totesport, este es el que estoy utilizando. Mirar mas dadelante CleanCSS, plugins, etc

Para meter las variables de bootstrap como en tote
http://pikock.github.io/bootstrap-magic/app/index.html#!/editor (for supernice less)

necesito ver como esta hecho con bower, bootstrap-less-only

http://lesscss.org/usage/


https://www.npmjs.com/package/less


http://stackoverflow.com/questions/9321061/error-cannot-find-module-less-node-js-module-loading-preference-order-cache
npm install shift
cd node_modules/shift
npm install less