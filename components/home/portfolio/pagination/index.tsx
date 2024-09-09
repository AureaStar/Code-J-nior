import { useState } from 'react';
import { data } from '@/data/data';
import Image from 'next/image';

type PaginationProps = {
    currentPage: number;
    handlePageChange: (page: number) => void;
    totalPages: number;
};

export default function Pagination({currentPage, handlePageChange, totalPages} : PaginationProps) {

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-6 py-2 mx-1 rounded-full ${
              currentPage === index + 1 ? 'bg-a text-re' : 'bg-a/50'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
