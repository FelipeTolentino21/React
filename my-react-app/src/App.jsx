import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

function App() {
   return (
      // As chaves (fragmentadas) são usadas para exportar apenas um componente, esse podendo conter outros dentro dele
      // pois só se pode exportar um componente. O componente pode também ter o fechamento implicito, ao invés do normal.

      // A ordem que os componentes são importados importa.
      <>
         <Header />
         <Food />
         <Footer />
      </>
   );
t App