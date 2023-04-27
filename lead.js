import { LightningElement, api } from 'lwc';

export default class Lead extends LightningElement {

    @api ide;    
    @api tratamento;
    @api primeironome;
    @api sobrenome;
    @api empresa;
    @api status;

}