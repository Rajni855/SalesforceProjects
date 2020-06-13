import { LightningElement,track} from 'lwc';

export default class ToDoManager extends LightningElement {
    time="17:30";    
    greeting="Good Morning";
    @track todoitems = [];
    
connectedCallback(){
    this.gettime();
    PopulateTodDos();
    setInterval(()=>{
         this.gettime();
         console.log("code executed");
    },1000);        
        
    }
    gettime(){
        const date= new Date();
        const hour = date.getHours();
        const mins = date.getMinutes();
        this.setGreetings(hour);
        this.time = `${this.getHour(hour)}:${this.getDoubleDigit(mins)} ${this.getMidday(hour)}`;
    }
    
    getHour(hour)
    {
        return hour==0 ? 12 : hour>12 ? (hour-12): hour;
    }
    getMidday(hour){
        return hour>=12 ? "PM" : "AM";
    }
    getDoubleDigit(digit){
        return digit<10 ? "0"+digit : digit;
    }
    setGreetings(hour){
        if(hour<12){
            this.greeting="Good Morning";
        } else if (hour==12 || hour <17){
            this.greeting = "Good Afternoon";
        } else {
            this.greeting ="Good Evening";
        }
    }
    todoaddhandler()
    {
        const inputbox = this.template.querySelector("lightning-input");
        const todoitem = {
            todoitemid : this.todoitems.length,
            todoitemname : inputbox.value,
            done: false,
            tododate: new Date()
        }
        this.todoitems.push(todoitem);
        inputbox.value="";
    }
    get upcomingtask(){
     return this.todoitems && this.todoitems.length? this.todoitems.filter(todoitem=>!todoitem.done) : [];
    }
    get completedtask(){
        return this.todoitems && this.todoitems.length? this.todoitems.filter(todoitem=>todoitem.done) : [];
       }
PopulateTodDos()
{
    const addtodos= [
        {
            todoitemid : 0,
            todoitemname : 'Watch mahabharat',
            done: false,
            tododate: new Date()
        },
        {
            todoitemid : 1,
            todoitemname : 'read book',
            done: false,
            tododate: new Date()
        },
        {
            todoitemid : 2,
            todoitemname : 'take a nap',
            done: true,
            tododate: new Date()
        }
    ];
    this.todoitems = addtodos;
}

}