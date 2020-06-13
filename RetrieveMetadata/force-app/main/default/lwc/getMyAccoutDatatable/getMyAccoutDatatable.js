import { LightningElement, wire, track } from 'lwc';
import GetMyAccoutList from '@salesforce/apex/MyAccountController.GetMyAccoutList';

const columns = [
    { label: 'Id', fieldName: 'Id' },
    { label: 'Active', fieldName: 'Active__c', type: 'boolean' },
    { label: 'Address', fieldName: 'Address__c' },
    { label: 'Head Count', fieldName: 'HeadCount__c' , type: 'number' },
    { label: 'Name', fieldName: 'name' }    
];
export default class GetMyAccoutDatatable extends LightningElement {
    columns = columns;
    
    @wire(GetMyAccoutList) MyAccounts;
    
}



    

