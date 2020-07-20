import { LightningElement, wire,track } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import updateOpptyStage from '@salesforce/apex/updateOpportunityStatus.updateOpptyStage';

export default class OpportunityList extends LightningElement {
   @track opportunityList;
   @track error;
   

    @wire(getListUi, { objectApiName: OPPORTUNITY_OBJECT, listViewApiName: 'Default_Opportunity_Pipeline' })
    wiredlistview({data,error})
    {if (data){
        this.opportunityList = data.records.records;
    }
    else if (error){
        this.error = error;
    }
    }
    handleclick(event)
    {
        console.log(event.currentTarget.value); 
        console.log('clicked');
        updateOpptyStage({
            oppid: event.currentTarget.value
    
        })
        .then(() => {
            console.log('saved');
        })
        .catch((error) => {
            this.message = 'Error received: code' + error.errorCode + ', ' +
                'message ' + error.body.message;
        });
         
    }
}