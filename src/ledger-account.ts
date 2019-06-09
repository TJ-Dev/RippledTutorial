import * as rippleLib from 'ripple-lib';
import { AccountDetails } from './account-details';

export class LedgerAccount {

  constructor(private serverAddress: string, private accountDetails: AccountDetails) {
    
  }

  readLedger() {
  const api = new rippleLib.RippleAPI({
    server: this.serverAddress
    //server: environment.prodWssServer
  });
  api.connect().then(() => {
      //address = 'rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn';
      console.log('getting account info for ', this.accountDetails.address);
      return api.getAccountInfo(this.accountDetails.address);
    }).then(info => {
      console.log(info);
      console.log('getAccountInfo done');
    }).then(() => {
      return api.disconnect();
    }).then(() => {
      console.log('done and disconnected.');
    }).catch(console.error);
  }
}