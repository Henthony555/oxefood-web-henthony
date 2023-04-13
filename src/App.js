import { Segment } from 'semantic-ui-react';
import './App.css';
import Rotas from './Rotas';
import MenuSistema from './MenuSistema';

function App() {
  return (
    <div className="App">
      <MenuSistema />

      <Rotas />

      <div style={{marginTop: '10%'}}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2023 - Projeto WEB III - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>
  );
}

export default App;
