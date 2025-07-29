

function Food() {

   const food1 = "Orange";
   const food2 = "Banana";
   // Foi demonstrado que métodos ainda funcionam sobre as variáveis
   return (
      <ul>
         <li>Apple</li>
         <li>{food1}</li>
         <li>{food2.toUpperCase()}</li>
      </ul>
   );
}

export default Food