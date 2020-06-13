import { LightningElement, api } from 'lwc';

export default class Todoitem extends LightningElement {
    @api todoid;
    @api todoname;
    @api done= false;

    get containerclass()
    {
        return this.done ? "todo completed" : "todo upcoming";
    }
}