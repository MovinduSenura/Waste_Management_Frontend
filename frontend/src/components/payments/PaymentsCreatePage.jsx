import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io"; // Tailwind's compiled output
import { useNavigate } from 'react-router-dom';

const PaymentsCreatePage = () => {
  
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen">
      <header className="p-5 text-center inline-flex justify-between mx-2">
        <button className="mt-8" onClick={() => navigate('/scheduleaddpage')}><IoMdArrowRoundBack className="text-emerald-800 size-7" /></button>
        <h1 className="text-3xl font-bold mt-7 text-emerald-800">Payment Page</h1>
      </header>
      <div className="flex absolute bottom-32 p-5 overflow-y-auto">
        <div className="max-w-lg mx-auto mt-auto bg-white p-8 shadow rounded-3xl border-4 border-emerald-800">
          <h2 className="text-2xl font-semibold mb-6">Complete Your Payment</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-xl" placeholder="John Doe" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-xl" placeholder="1234 5678 9101 1121" />
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-xl" placeholder="MM/YY" />
              </div>
              <div>
                <label className="block text-sm font-medium text-g  ray-700 mb-2">CVC</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-xl" placeholder="123" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-g mb-2">Remarks</label>
              <textarea name="remarks" id="remarks" rows={5} className='border border-gray-300 w-full rounded-xl'/>
            </div>
          </form>
        </div>
      </div>
      <>
        <button className='bg-emerald-800 mt-auto mb-10 text-white text-xl font-bold py-4 px-8 mx-10 rounded-full'>Confirm Payment</button>
      </>
    </div>
  );
};

export default PaymentsCreatePage;
