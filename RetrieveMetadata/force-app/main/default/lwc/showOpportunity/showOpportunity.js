import { LightningElement, wire} from 'lwc';
import GetOpportunityList from '@salesforce/apex/GetOpportunityController.GetOpportunityList';
   
export default class ShowOpportunity extends LightningElement {

    @wire(GetOpportunityList) Opportunities;

}