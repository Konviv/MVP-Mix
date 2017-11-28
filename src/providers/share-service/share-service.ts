import { Injectable } from '@angular/core';

@Injectable()
export class ShareServiceProvider {

  lowBucketTrigger: boolean;
  incomeTrigger: boolean;
  billDueTrigger: boolean;
  billPaidTrigger: boolean;

  constructor() {
    this.lowBucketTrigger = false;
    this.incomeTrigger = false;
    this.billDueTrigger = false;
    this.billPaidTrigger = false;
  }

  setLowBucketTrigger(trigger) {
    this.lowBucketTrigger = trigger;
  }

  getLowBucketTrigger() {
    return this.lowBucketTrigger;
  }

  setIncomeTrigger(trigger) {
    this.incomeTrigger = trigger;
  }

  getIncomeTrigger() {
    return this.incomeTrigger;
  }

  setBillDueTrigger(trigger) {
    this.billDueTrigger = trigger;
  }

  getBillDueTrigger() {
    return this.billDueTrigger;
  }

  setBillPaidTrigger(trigger) {
    this.billPaidTrigger = trigger;
  }

  getBillPaidTrigger() {
    return this.billPaidTrigger;
  }

}


