
public with sharing class GetOpportunityController {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> GetOpportunityListForAccount(string accountname){
        string search = '%' + accountname + '%';
        List<Opportunity> listOpps = [Select id, name, account.name from Opportunity where account.name like :search];
        system.debug('list size' + listOpps.size());
        return listOpps;
    }
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> GetOpportunityList(){
        List<Opportunity> listOpps = [Select id, name, account.name from Opportunity limit 10];
        system.debug('list size' + listOpps.size());
        return listOpps;
    }
}
