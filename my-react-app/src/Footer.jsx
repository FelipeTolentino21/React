
// Foi demonstraco como se usa uma função e seu correspondente método em JS dentro de um componente com elementos HTML
function Footer() {
   return (
      <footer>
         <hr />
         <p>&copy; {new Date().getFullYear()} First react project</p>
      </footer>
   );
}

export default Footer