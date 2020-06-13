import { LightningElement, api } from 'lwc';

export default class LWCDataService extends LightningElement {
    @api recordId;
    @api objectApiName;
}