import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import NAME_FIELD from '@salesforce/schema/MyAccount__c.Name';
import ACTIVE_FIELD from '@salesforce/schema/MyAccount__c.Active__c';
import ADDRESS_FIELD from '@salesforce/schema/MyAccount__c.Address__c';
import BUSINESS_FIELD from '@salesforce/schema/MyAccount__c.Business__c';
import HEADCOUNT_FIELD from '@salesforce/schema/MyAccount__c.HeadCount__c';
import SETUPDATE_FIELD from '@salesforce/schema/MyAccount__c.Setup_Date__c';
import AccountContact_FIELD from '@salesforce/schema/MyAccount__c.AccountContact__c';
export default class CreateMyAccountRecord extends LightningElement {
    @api objectApiName;
    @api recordId;
    
    fields = [NAME_FIELD, ACTIVE_FIELD,ADDRESS_FIELD, BUSINESS_FIELD,HEADCOUNT_FIELD, SETUPDATE_FIELD,AccountContact_FIELD];
    handleSubmit(event) {
        console.log('onsubmit: '+ event.detail.fields);
 
    }
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "My Account Updated",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
}