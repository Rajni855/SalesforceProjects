import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import NAME_FIELD from '@salesforce/schema/MyAccount__c.Name';
import ACTIVE_FIELD from '@salesforce/schema/MyAccount__c.Active__c';
import ADDRESS_FIELD from '@salesforce/schema/MyAccount__c.Address__c';
import BUSINESS_FIELD from '@salesforce/schema/MyAccount__c.Business__c';
import HEADCOUNT_FIELD from '@salesforce/schema/MyAccount__c.HeadCount__c';
import SETUPDATE_FIELD from '@salesforce/schema/MyAccount__c.Setup_Date__c';
export default class CreateMyAccountRecord extends LightningElement {
    @api objectApiName;

    fields = [NAME_FIELD, ACTIVE_FIELD,ADDRESS_FIELD, BUSINESS_FIELD,HEADCOUNT_FIELD, SETUPDATE_FIELD];

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "My Account created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
    }
}