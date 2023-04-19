import React, { useState, useEffect } from "react";
import Axios from "../utils/Axios";

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paymentsPerPage] = useState(10);

  useEffect(() => {
    async function fetchData() {
      const response = await Axios(`showPayment`, {});
      setPayments(response.data);
    }
    fetchData();
  }, []);

  // Get current payments
  const indexOfLastPayment = currentPage * paymentsPerPage;
  const indexOfFirstPayment = indexOfLastPayment - paymentsPerPage;
  const currentPayments = payments.slice(
    indexOfFirstPayment,
    indexOfLastPayment
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="overflow-x-auto">
      <h1 className="font-bold text-xl">Payments</h1>
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase tracking-wider"
                >
                  SN
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase tracking-wider"
                >
                  Transaction No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase tracking-wider"
                >
                  Account Holder
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentPayments.map((item, index) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.payment_id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.payer_name}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.paid_at}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav className="bg-white px-4 py-3 flex items-center justify-between sm:px-6">
            <div className="hidden sm:block">
              <p className="text-sm text-gray-700">
                Showing{" "}
                <span className="font-medium">{indexOfFirstPayment + 1}</span>{" "}
                to{" "}
                <span className="font-medium">
                  {indexOfLastPayment > payments.length
                    ? payments.length
                    : indexOfLastPayment}
                </span>{" "}
                of <span className="font-medium">{payments.length}</span>{" "}
                payments
              </p>
            </div>
            <div className="flex-1 flex justify-between sm:justify-end">
              <button
                onClick={() =>
                  paginate(currentPage === 1 ? 1 : currentPage - 1)
                }
                disabled={currentPage === 1}
                className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  paginate(
                    currentPage === Math.ceil(payments.length / paymentsPerPage)
                      ? currentPage
                      : currentPage + 1
                  )
                }
                disabled={
                  currentPage === Math.ceil(payments.length / paymentsPerPage)
                }
                className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Next
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Payments;
