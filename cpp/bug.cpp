#include <string>
#include <bits/stdc++.h> 

namespace bug {
    typedef std::string ErrorMessage;
    typedef std::string AccountCode;
    typedef std::string UserName;
 
    std::string validateUserName(UserName userName) {
        std::regex re("^[a-z]+$"); 
        std::smatch match;
        if (!std::regex_match(userName, match, re)) {
            return "user name must be l/c: [${userName}]";
        }
        return "true";
    }
    std::string validateAccountCode(AccountCode code) {
        std::regex re("^[AB][0-9]+$"); 
        std::smatch match;
        if (!std::regex_match(code, match, re)) {
            return "account code not valid: [${code}]";
        }              
        return "true";
    }
    void validateDetails(UserName userName, AccountCode accountCode) {
        auto msg =  validateAccountCode(accountCode);
        if (msg != "true") throw msg;
        msg = validateUserName(accountCode);
        if (msg != "true") throw msg;
    }
    void test() {
        try {
            const UserName goodName = "bob";
            const AccountCode goodCode = "A1234";
            validateDetails(goodName, goodCode); // what bug makes this throw an exception ???
        }
        catch (std::string ex) {
            std::cout << "Exception " << ex << std::endl;
        }

    }
}

int main(int argc, char** argv) {
    bug::test();
}