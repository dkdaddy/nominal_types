namespace symbol {
    type ErrorMessage = string;
    class AccountCodeEx {
        constructor(public stringValue: string) {}
    }
    class UserNameEx {
        constructor(public stringValue: string) {}
    };
    type AccountCode = AccountCodeEx & { readonly _sym: unique symbol};
    type UserName = UserNameEx & { readonly _sym: unique symbol};
    
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
    export const goodName: UserName = new UserNameEx('bob') as UserName;
    export const goodCode: AccountCode = new AccountCodeEx('A1234') as AccountCode;
    validateDetails(goodName, goodCode); // what bug makes this throw an exception ???
}