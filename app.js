let jsonUrl = 'https://samararcortesm.github.io/json/cv.json';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
    }
    
function getcv()
{
    fetch(jsonUrl)
    .then(response=>response.json())
    .then(data=>formatcv(data))
    .then(data=> console.log(data));
              
}
getcv();

curriculum =
` <div class="cont">
<section>
<h1>Samara Raquel Cortés Muñoz </h1>
<article>
 <p>Student TSU TIC<br>
  Nombre:Samara Raquel Cortés Muñoz<br>
   Celular:921 228 5679<br>
   Correo:2002018@utrivieramaya.edu.mx<br>
</p>
</article>
</section>
</div>
<div class="contenerdor2">
        <section>
     <h1>Perfil</h1>
     <article>
     <p> Soy Samara Raquel Cortes Muñoz,me considero una persona<br>
       creativa con la capacidad de resolver problemas.
       Estoy confiada en mis habilidades y conocimiento ademas que me gustaria
       seguir aprendiendo<br> 
        </p>
        </article>
     </section>      
    </div>   

      <div class="contenedor3">
        <section>
        <h1>Educacion</h1>
        <article>
            <li> escuela:Universidad Tecnologica de la Rivera Maya</li>
           area: Área Desarrollo Software Multiplataforma<br>
           <li>preparatoria: Centro de estudios Tecnologicos Industriales y de servicio</li>
           especialidad:Tecnico en Informatica<br>
        </ul>
           </p>
           </article>
           </section>
         </div>   
 
      <div class="contenedor4">
          <section>
           <h1>Skills</h1>
           <article>
            <li> HTML</li>
            <li> CSS</li>
            <li>Java</li>
              </article>
              </section>
            </div>

      <div class="contenedorextra">
        <section>
          <h1>Habilidades</h1>
          <article>
            <li> Organizacion</li>
            <li> Resolver problemas</li>
            <li>Trabajo en equipo</li>
            <li>Seguir instrucciones y ejecutarlas</li>
          </article>
        </section>

      </div>
      <div class="contenedor5">
           <section>
            <h1>Idiomas</h1>
            <article>
            <p> Ingles
               </p>
               </article>
               </section>
             </div>  

        <div class="contenedor6">
                          <section>
                           <h1>Conocimiento</h1>
                           <article>
                            <li> Microsoft Office</li>
                            <li> Base de Datos</li>
                          </article>
                              </section>
                            </div> `


function formatcv(data)
{
    

 let  Nombre=data.Nombre;
 let  Celular=data.Celular;
 let  Correo=data.Correo;
 let  perfil=data.perfil;   
 let  Educacion=data.Educacion;
 let  Skills  =data.Skills;
 let Habilidades =data.Habilidades;
 let Idioma =data.Idioma;
 let Conocimiento =data.Conocimiento;
let conte =curriculum;

 conte = conte.replace("{Nombre}",Nombre);
 conte = conte.replace("{Celular}",Celular);
 conte = conte.replace("{Correo}",Correo);
 conte = conte.replace("{perfil}",perfil);
 conte = conte.replace("{Educacion}",Educacion);
 conte = conte.replace("{Skills}",Skills);
 conte = conte.replace("{Habilidades}",Habilidades);
 conte = conte.replace("{Idioma}",Idioma);
 conte = conte.replace("{Conocimiento}",Conocimiento);
 
document.getElementById('cv').innerHTML +=conte;
}

