import React from 'react';
import MonthlyUsage from './MonthlyUsage';
import AnnualSubscriptionPlans from './AnnualSubscriptionPlans';
import ComparePlans from './ComparePlans';
import PurchaseCredits from './PurchaseCredits';
import FAQ from './FAQ';

const Subscription = () => {
  return (
    <div className="container mx-auto p-6">
      <MonthlyUsage />
      <AnnualSubscriptionPlans />
      <ComparePlans />
      <PurchaseCredits />
      <FAQ />
    </div>
  );
};

export default Subscription;
