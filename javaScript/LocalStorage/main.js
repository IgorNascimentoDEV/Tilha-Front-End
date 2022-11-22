import{handleNovoItem} from './componentes/criaTarefa.js'
import { carregaTarefa } from './componentes/carregaTarefa.js';

//criamos essa constante para utilizala na manipulação do DOM onde ela vai receber um seletor que estar no botão
const novaTarefa = document.querySelector('[data-form-button]'); 


//com esse método é possiveel escutar um evento e executar uma função caso o evento seja assionado
novaTarefa.addEventListener('click', handleNovoItem);

carregaTarefa()