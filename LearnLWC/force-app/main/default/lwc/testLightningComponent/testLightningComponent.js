import { LightningElement, track } from 'lwc';

export default class Basic extends LightningElement {
    infoText;
    @track steptrack = 1;
    @track steptrackString = 1;

    nextPage = () => {this.steptrack++; this.steptrackString = this.steptrack.toString(); }
    prevPage = () => { this.steptrack--; this.steptrackString = this.steptrack.toString(); }
    steps = [
        { label: 'Contacted', value: '1' },
        { label: 'Open', value: '2' },
        { label: 'Unqualified', value: '3' }
    ];
    
    handleRemove() {
        this.infoText = 'Remove button was clicked!';
    }

    handleRemoveOnly(event) {
        event.preventDefault();
        this.infoText = 'Remove button was clicked!';
    }

    handleClick() {
        this.infoText = 'The pill was clicked!';
    }
    
}

