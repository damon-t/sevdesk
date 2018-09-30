import { SevdeskAccount } from './sevdesk.classes.account';
import { ITransaction } from '@tsclass/tsclass';
import { SevdeskCheckingAccount } from './sevdesk.classes.checkingaccount';

import * as plugins from './sevdesk.plugins';

export interface ISevdeskTransaction extends ITransaction {
  sevdeskId?: string;
  sevdeskCheckingAccountId?: string;
  payeeName: string;
  status: 'paid' | 'unpaid';
}

export class SevdeskTransaction implements ISevdeskTransaction {
  static async getTransactionsForCheckingAccountId(sevdeskAccountArg: SevdeskAccount, checkingAccountId: string):Promise<SevdeskTransaction[]> {
    const response = await sevdeskAccountArg.request('GET', '/CheckAccountTransaction');
    const apiObjectArray = response.objects;
    // console.log(apiObjectArray);
    return [];
  };
  
  date: Date;
  status: "paid" | "unpaid"
  description: string;
  amount: number;
  payeeName: string;
  sevdeskId: string;
  sevdeskCheckingAccountId: string;

  /**
   * the constructor for SevdeskTransaction
   * @param optionsArg
   */
  constructor(optionsArg: ISevdeskTransaction) {
    for (let key in optionsArg) {
      if (optionsArg[key] || optionsArg[key] === 0) {
        this[key] = optionsArg[key];
      }
    }
  }

  /**
   * save the SevdeskTransaction to a SevdeskAccount
   */
  async save(sevdeskAccountArg: SevdeskAccount) {
    const payloadStatus = (() => {
      if(this.status === "paid") {
        return "200"
      }
      return "100"
    })()
    const payload = {
      valueDate: plugins.moment(this.date).format(),
      entryDate: plugins.moment(this.date).format(),
      amount: this.amount,
      paymtPurpose: this.description,
      payeePayerName: this.payeeName,
      status: payloadStatus,
      checkAccount: {
        id: this.sevdeskCheckingAccountId,
        objectName: 'CheckAccount'
      }
    }
    // console.log(payload)
    await sevdeskAccountArg.request('POST', '/CheckAccountTransaction', payload)
  }
}
