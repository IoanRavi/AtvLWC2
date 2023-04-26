import { LightningElement, api} from 'lwc';

export default class App extends LightningElement {

    @api ide;    
    @api nome;
    @api valor;
    @api fase;

}
