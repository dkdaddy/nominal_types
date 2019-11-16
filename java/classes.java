import java.util.regex.*;  

class AccountCode {
    String _stringValue;
    AccountCode(String s) { _stringValue = s;}
};
class UserName {
    String _stringValue;
    UserName(String s) { _stringValue = s;}
};
class Validation {
    static String validateUserName(UserName userName) {
        Pattern PATTERN = Pattern.compile("^[a-z]+$"); 
        if (!PATTERN.matcher(userName._stringValue).matches()) {
            return "user name must be l/c: [${userName}]";
        }
        return "true";
    }
    static String validateAccountCode(AccountCode code) {
        Pattern PATTERN = Pattern.compile("^[AB][0-9]+$");
        if (!PATTERN.matcher(code._stringValue).matches()) {
            return "account code not valid: [${code}]";
        }              
        return "true";
    }
    static void validateDetails(UserName userName, AccountCode accountCode) throws Exception {
        var msg = validateAccountCode(accountCode);
        if (msg != "true")
            throw new Exception(msg);
        msg = validateUserName(accountCode);
        if (msg != "true")
            throw new Exception(msg);
    }
}
class Test {
    public void testValid() throws Exception {
        var goodName = new UserName("bob");
        var goodCode  = new AccountCode("A1234");
        Validation.validateDetails(goodName, goodCode); // what bug makes this throw an exception ???        
    }
}