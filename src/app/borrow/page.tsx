'use client';
import React from 'react';
import Drawer from '@/components/Drawer';
import Collateral from '@/components/inner-page/Collateral';
import BorrowTokens from '@/components/inner-page/BorrowTokens'; // Import BorrowTokens
import tokens from '@/data/token.json';
import durationsData from '@/data/durations.json';

const Borrow: React.FC = () => {
  const tabsBorrow = [
    {
      label: "Collateral",
      content: (
        <Collateral
          tokenOptions={tokens.tokens.map(token => ({
            value: token.address,
            label: token.name,
            image: token.image,
          }))}
          handleDepositCollateral={async (amount) => {
            return { amount: 0 };
          }}
        />
      ),
    },
    {
      label: "Borrow",
      content: (
        <BorrowTokens
          tokenOptions={tokens.tokens.map(token => ({
            value: token.address,
            label: token.name,
            image: token.image,
          }))}
          // Convert `value` to a string
          durationOptions={durationsData.durations.map(items => ({
            value: String(items.value),
            label: items.label,
          }))}
          handleBorrowAmounts={async (amount) => {
            return { amount: 0 };
          }}
        />
      ),
    },
  ];

  const ltv = 1000;
  const collateralBalance = 34050;

  return (
    <section className="min-h-screen animation-bounce bg-borrow bg-no-repeat bg-contain image-full text-center max-w-screen">
      <div className="pt-40 px-96 space-y-3">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center justify-between rounded-xl w-full px-10 bg-explore py-5">
            <div className="text-start">
              <p className="text-4xl font-bold text-white">${ltv.toLocaleString()}</p>
            </div>
            <div className="text-end" data-aos="fade-left">
              <p className='text-gray-600 text-md uppercase'>Your Deposited Collateral</p>
              <p className="py-2 text-2xl leading-8 font-semibold tracking-tight text-white sm:text-4xl">
                Collateral
              </p>
              <p className="text-sm font-normal text-gray-400">On Our Platforms.</p>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl w-full px-10 bg-explore py-5">
            <div className="text-start">
              <p className="text-4xl font-bold text-white">${collateralBalance.toLocaleString()}</p>
            </div>
            <div className="text-end" data-aos="fade-left">
              <p className='text-gray-600 text-md uppercase'>Your Borrowed Amounts</p>
              <p className="py-2 text-2xl leading-8 font-semibold tracking-tight text-white sm:text-4xl">
                Borrows
              </p>
              <p className="text-sm font-normal text-gray-400">On Our Platforms.</p>
            </div>
          </div>
        </div>
        <div className="bg-[#141414] rounded-xl h-full px-10 py-5 space-y-3">
          <Drawer
            drawerItems={tabsBorrow}
            title='Borrow Tokens'
            classParent='bg-transparent border border-[#bdc3c7] rounded-lg p-1 z-50'
            classActiveTab="bg-[#bdc3c7] font-normal text-[#141414] w-full py-2 px-4 rounded-md text-center"
            classDeactiveTab='py-2 px-4 rounded-md font-normal text-[#141414] text-center text-white w-full'
          />
        </div>
      </div>
    </section>
  );
};

export default Borrow;
