import React from 'react';
import contact from './contact.png';
import shan from './shan.png'; 
import caillou from './caillou.jpg'; 
import riviere from './riviere.jpg'; 

import './App.css';


class Contact_info extends React.Component {
  
  
  constructor(props) {
    super(props); 
    this.state = {
      color: '#282c34',
      switch: true,
      lettre: 'white', 
      button: 'white',
      buttonL: 'black'
    }; 
  }

  handleClick() {
    if (this.state.switch){
      this.setState({
        color: 'grey',
        lettre: 'black',
        switch: false,
        button:'black',
        buttonL: 'white',
      }); 
    }
    else{
      this.setState({
        color: '#282c34',
        lettre: 'white',
        switch: true,
        button:'white',
        buttonL: 'black',
      }) ; 
    }
  }

  render(){

    return (
    
      <article className="App-info-ui" style={{backgroundColor:this.state.color,color:this.state.lettre}} > 
      <img id="Contact" src={this.props.machin.photo}  alt="contact" />

          <table>
            <tr>
              <td>
                <p>
                  Prénom : {this.props.machin.prenom}
                </p>
              </td>
              <td>
                <p>
                  Nom : {this.props.machin.nom}
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  Date de naissance : {this.props.machin.date_naissance}
                </p>
              </td>
            </tr>
          </table>

          <a href="#" style={{backgroundColor:this.state.button, color:this.state.buttonL}} className="btn button-box" onClick={ () => this.handleClick() }> Change style </a> 
       </article>
    ); 
  }
}

class Super_description extends React.Component {
  render(){
    return(
      <article className="super-button-box">
          <p > 
            Haec et huius modi quaedam innumerabilia ultrix facinorum impiorum bonorumque praemiatrix aliquotiens operatur Adrastia atque utinam semper quam vocabulo duplici etiam Nemesim appellamus: ius quoddam sublime numinis efficacis, humanarum mentium opinione lunari circulo superpositum, vel ut definiunt alii, substantialis tutela generali potentia partilibus praesidens fatis, quam theologi veteres .
          </p>
          
          <a href="#" className="button-box-super"> C'est super ! 👍 </a>

      </article>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      profils:[
        {
          nom: "La Riviere" ,
          prenom: "Mathilde" ,
          date_naissance: "30/11/1998", 
          photo: riviere 
        },
        {
          nom: "La Colinne",
          prenom: "Claude",
          date_naissance: "24/11/1998",
          photo: caillou
        },
        {
          nom: "La Montagne",
          prenom: "Jeanne",
          date_naissance: "03/11/1998",
          photo: shan
        }
      ],
      current:
        {
          nom: 'none',
          prenom: 'none',
          date_naissance: 'none', 
          photo: contact
        }
    };
  }

  refresh (current) {
    this.setState({
      current: current,
    });
  }

  
  render(){
    let buffer = this.state.current; 

    return (
      <div className="App">

        {/* Pour la nav bar */}
        <br></br>
        <section class="nav">      
        <ul>
          <li><a onClick={ () => this.refresh(this.state.profils[0] )} > {this.state.profils[0].prenom} </a></li>
          <li><a onClick={ () => this.refresh(this.state.profils[1] )} > {this.state.profils[1].prenom}</a></li>
          <li><a onClick={ () => this.refresh(this.state.profils[2] )} > {this.state.profils[2].prenom}</a></li>
          {/* <li><a > {this.state.current.prenom}</a></li> */}
        </ul>
        </section>
          
        <header className="App-header">
        <Contact_info
          machin={buffer}
        >
        </Contact_info> 
        
            
        <Super_description> </Super_description>
          
        <br></br>
        <br></br>

        </header>
      </div>
    );
  }
}

export default App;
