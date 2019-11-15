import React from 'react';
import contact from './contact.png';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* POur la nav bar */}
      <section class="nav">
        <br></br>
      
         <ul>
            <li><a href="#presentation">Claude</a></li>
            <li><a href="#competence">Martine</a></li>
            <li><a href="#experience">Jeanne</a></li>
          </ul>

      </section>

      <header className="App-header">
       
        <article className="App-info-ui"> 
          
          <img id="Contact" src={contact}  alt="contact" />

          <table>
            <tr>
              <td>
                <p>
                  Prénom : 
                </p>
              </td>
              <td>
                <p>
                  Nom : zefzefzefef
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Date de naissance : 
                </p>
              </td>
            </tr>
            
          </table>
          <a href="#" className="btn button-box"> Change style </a> 
        
       </article>
          
        <article className="super-button-box">
          <p > 
            Haec et huius modi quaedam innumerabilia ultrix facinorum impiorum bonorumque praemiatrix aliquotiens operatur Adrastia atque utinam semper quam vocabulo duplici etiam Nemesim appellamus: ius quoddam sublime numinis efficacis, humanarum mentium opinione lunari circulo superpositum, vel ut definiunt alii, substantialis tutela generali potentia partilibus praesidens fatis, quam theologi veteres .
          </p>
          
          <a href="#" className="button-box-super"> C'est super ! 👍 </a>

        </article>
        
      <br></br>
      <br></br>

      </header>
    </div>
  );
}

export default App;
