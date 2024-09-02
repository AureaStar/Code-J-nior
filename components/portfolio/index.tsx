'use client';

import Card from "./card";
import { data } from "@/data/data";
import Pagination from "./pagination";
import { useState } from "react";

const ITEMS_PER_PAGE = 6;

export default function PortfolioSection() {

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
  
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

    const currentItems = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    return (
        <section className="flex flex-col items-center justify-center px-8 py-4 gap-4 md:gap-16 md:my-8 top">
            <div className="flex flex-wrap gap-4 md:h-full justify-center md:gap-8">
                {currentItems.map((item, index) => (
                    <Card image={item.image} key={index} title={item.title} description={item.description} />
                ))}
            </div>
            <Pagination currentPage={currentPage} handlePageChange={handlePageChange} totalPages={totalPages} />
        </section>
    )
}