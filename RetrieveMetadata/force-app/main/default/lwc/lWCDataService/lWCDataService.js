import { LightningElement, api, track,wire} from 'lwc';
import {  ShowToastEvent    } from 'lightning/platformShowToastEvent';
import Contact_OBJECT from '@salesforce/schema/Contact';
import FAX_FIELD from '@salesforce/schema/Contact.Fax';
import ID_FIELD from '@salesforce/schema/Contact.ID';
import { getRecord,  updateRecord,  generateRecordInputForUpdate,
    getFieldValue, } from 'lightning/uiRecordApi';
import { CurrentPageReference    } from 'lightning/navigation';
export default class LWCDataService extends LightningElement {
    @api recordId;
    @api objectApiName;
    updateContact() {
        let record = {
            fields: {
                Id: this.recordId,
                Name: this.name,
                AnnualRevenue:this.annualrev ,
                Fax:this.fax ,
                Phone:this.phone,
            },
        };
        updateRecord(record)
            // eslint-disable-next-line no-unused-vars
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Record Is Updated',
                        variant: 'sucess',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error on data save',
                        message: error.message.body,
                        variant: 'error',
                    }),
                );
            });
     
     
    }
}