const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];
  
function templateDepartamento(propiedad){
  return  `<div class="propiedad">
          <div
            class="img"
            style="
              background-image: url('https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg');
            "
          ></div>
          <section class="section-1">
            <h5>${propiedad.titulo}</h5>
            <div class="d-flex justify-content-between">
              <p>Cuartos: 2</p>
              <p>Metros: 170</p>
            </div>
            <p class="my-3">Mansión gigante</p>
            <button class="btn btn-info">Ver más</button>
          </section>
        </div>`
}

function cargaInicial(){
  let html = "";
  for (const depto of propiedadesJSON){
    // Si cumplen los requerimientos mostramos el depto
    if (
      /* cantidad de cuartos*/
      /* cantidad m2*/
    ){
      // agregar depto a la lista 
    html += templateDepartamento(depto)
    }
  
    innerHTML = html;
}

window.document.onload = function(){
  cargaInicial();
}


function buscar (){
  if (/* los campos estan vacios*/) {
    alert ()
    return;
  }
}

let html = "";
let total = 0;

// Recorrer deptos
for (const depto of propiedadesJSON){
  // Si cumplen los requerimientos mostramos el depto
  if (
    /* cantidad de cuartos*/
    /* cantidad m2*/
  ){
    // agregar depto a la lista 
  html += templateDepartamento(depto)
  }

  innerHTML = html;
}
