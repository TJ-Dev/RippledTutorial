import { Environment, accountA, accountB } from "./constants";
import  { LedgerAccount } from './ledger-account';


const environment = new Environment();
const ledgerAccountA = new LedgerAccount(environment.testWssServer, accountA);
const ledgerAccountB = new LedgerAccount(environment.testWssServer, accountB);

ledgerAccountA.readLedger();
ledgerAccountB.readLedger();