namespace classes {
    type ErrorMessage = string;
    class AccountCode {
        constructor(public stringValue: string) {}
    };
    class UserName {
        constructor(public stringValue: string) {}
    }
 
    const validateUserName = (userName: UserName): true | ErrorMessage => {
        if (userName.stringValue.match(/^[a-z]+$/) === null) return `user name must be l/c: [${userName}]`;
        return true;
    }
    const validateAccountCode = (code: AccountCode): true | ErrorMessage => {
        if (code.stringValue.match(/^[AB][0-9]+$/) === null) return `account code not valid: [${code}]`;
        return true;
    }
    export const validateDetails = (userName: UserName, accountCode: AccountCode): void => {
        if (userName.stringValue === '') throw 'user name cannot be blank'; 
        if (accountCode.stringValue === '') throw 'account code cannot be blank'; 
        let msg = validateAccountCode(accountCode);
        if (msg !== true) throw msg;
        msg = validateUserName(accountCode);
        if (msg !== true) throw msg;
    }
    export const goodName: UserName = new UserName('bob');
    export const goodCode: AccountCode = new AccountCode('A1234');
    validateDetails(goodName, goodCode); // what bug makes this throw an exception ???
}