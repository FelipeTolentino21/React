// ADICIONAR A FOTO DE PERFIL, COLOCAR COMENTARIO ABAIXO NAS LIÇÕES APRENDIDAS


function Card() {
   // Para criar uma classe, não podemos usar "class" pois é uma palavra reservada em JSX, ao invés disso
   // pode ser usado o "className"
   return (
      <div className="card">
         <img alt="profile picture" src=""></img>
         <h2>Felipe Tolentino</h2>
         <p>I'm currently studying Computer Science in my university UniCEUB. Specifically, right now, i'm studying React!</p>
      </div>
   );
}

export default Card