import '../Styles/main.css';
//import logo from '../Components/logo.svg';
import suite from "../Components/404nanimo.jpg"
function Home( ){
   return(
      <main className="home">
         <img src={suite} className="background_image" alt="logo" />
         </main>
   ); 
}
export default Home;