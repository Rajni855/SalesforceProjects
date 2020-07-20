public with sharing class contactController {
    @AuraEnabled
    public static list<contact> getContactList()
    {
        return [select id, Name, title,phone, email from contact];
    }
}
