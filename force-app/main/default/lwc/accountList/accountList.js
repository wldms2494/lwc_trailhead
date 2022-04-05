import { LightningElement, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import NAME_FIELD from '@salesforce/schema/Account.Name';
// import REVENUE_FIELD from '@salesforce/schema/AccountRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
const COLUMNS = [
    {label:'Account Name', fieldName: NAME_FIELD.fieldApiName, type:'text'},
    // {label:'Annual Revenue', fieldName: REVENUE_FIELD.fieldApiName, type:'currency'},
    {label:'Industry', fieldName: INDUSTRY_FIELD.fieldApiName, type: 'text'}

]; 
export default class AccountList extends LightningElement {

    get errors(){
        return (this.accounts.error) ?
        reduceErrors(this.accounts.error) : [];
    }


    columns = COLUMNS;
    @wire(getAccounts)
    accounts;
}