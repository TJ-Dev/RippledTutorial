import { AccountDetails } from "./account-details";

const prodAccountA = 'rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn';

export class Environment {
    testWssServer = 'wss://s.altnet.rippletest.net:51233';
    testRestServer = 'https://s.altnet.rippletest.net:51234';
    prodWssServer = 'wss://s1.ripple.com'; // Public rippled server
}

export const accountA = new AccountDetails('rGxj8V6f2p5kCxmJPDdSAnNPFeeBuskJgV','ssko3Anbvse6dHTCHrPr3BYyH9y8o');
export const accountB = new AccountDetails('rLsU5f2GdeuFwCM3q6qsN2Z1cuH9huqSMG','sa92HLA7aRxNAWaCAK8rRr4GkrWZK');