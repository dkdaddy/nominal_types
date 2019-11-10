namespace bug {
    type ErrorMessage = string;
    type AccountCode = string;
    type UserName = string;
 
    const validateUserName = (userName: UserName): true | ErrorMessage => {
        if (userName.match(/^[a-z]+$/) === null) return `user name must be l/c: [${userName}]`;
        return true;
    }
    const validateAccountCode = (code: AccountCode): true | ErrorMessage => {
        if (code.match(/^[AB][0-9]+$/) === null) return `account code not valid: [${code}]`;
        return true;
    }
    export const validateDetails = (userName: UserName, accountCode: AccountCode): void => {
        let msg = validateAccountCode(accountCode);
        if (msg !== true) throw msg;
        msg = validateUserName(accountCode);
        if (msg !== true) throw msg;
    }
    export const goodName: UserName = 'bob';
    export const goodCode: AccountCode = 'A1234';
    validateDetails(goodName, goodCode); // what bug makes this throw an exception ???
}