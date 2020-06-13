import { LightningElement } from 'lwc';

export default class Bike extends LightningElement {
    name='Ranger BX2';
    description = 'Runs faster, blue color';
    category = 'General purpose';
    material ='steel';
    price ='£2330';
    pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';

    ready = false;
    connectedCallback() {
       setTimeout(() => {
           this.ready = true;
       }, 3000);
   }
}