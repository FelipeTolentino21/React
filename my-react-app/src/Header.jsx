

function Header() {
   return (
      <header>
         <h1>My website</h1>
         <nav>
            <ul>
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Services</a></li>
               <li><a href="#">Contact</a></li>
            </ul>
         </nav>
         <hr />
      </header>
   );
}

// No final de um componente, ele deve ser exportado para que possa ser importado em outro lugar
export default Header