import { LightningElement, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';


const COLUMNS = [
    {label:'First Name', fieldName: FIRSTNAME_FIELD.fieldApiName, type:'text'},
    {label:'Last Name', fieldName: LASTNAME_FIELD.fieldApiName, type:'text'},
    {label:'Email', fieldName: EMAIL_FIELD.fieldApiName, type: 'text'}

]; 
export default class ContactList extends LightningElement {

    get errors(){
        return (this.contacts.error) ?
        reduceErrors(this.contacts.error) : [];
    }


    columns = COLUMNS;
    @wire(getContacts)
    contacts;


    
  
}