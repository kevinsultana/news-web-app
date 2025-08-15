"use client";

import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[60vh] my-6">
      <h1 className="text-9xl font-bold text-blue-600">500</h1>
      <h2 className="text-4xl font-semibold text-gray-800 mt-4 mb-2">
        Data API Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        Sorry, we couldn&apos;t find the data you&apos;re looking for. Maybe the
        data has been deleted or the categories is incorrect.
      </p>
      <Link href="/">
        <p className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
          <FaHome className="mr-2" />
          Back to Home
        </p>
      </Link>
    </div>
  );
}
