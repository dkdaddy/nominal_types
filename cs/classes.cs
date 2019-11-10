
using System.Text.RegularExpressions;

class AccountCode {    
    
    public string _stringValue;
    public AccountCode(string s) {
        _stringValue = s;
    }
};
class UserName {
    public string _stringValue;
    public UserName(string s) {
         _stringValue = s;
    }
};
class Validation {
    static string validateUserName(UserName userName) {
        var re = new Regex("^[a-z]+$");         
        if (!re.IsMatch(userName._stringValue)) {
            return "user name must be l/c: [${userName}]";
        }
        return "true";
    }
    static string validateAccountCode(AccountCode code) {
        var re = new Regex("^[AB][0-9]+$");         
        if (!re.IsMatch(code._stringValue)) {
            return "account code not valid: [${code}]";
        }              
        return "true";
    }
    public static void validateDetails(UserName userName, AccountCode accountCode) {
        var msg = validateAccountCode(accountCode);
        if (msg != "true")
            throw new System.Exception(msg);
        msg = validateUserName(accountCode);
        if (msg != "true")
            throw new System.Exception(msg);
    }
}
class Test {
    public void testValid() {
        var goodName = new UserName("bob");
        var goodCode  = new AccountCode("A1234");
        Validation.validateDetails(goodName, goodCode); // what bug makes this throw an exception ???        
    }
}