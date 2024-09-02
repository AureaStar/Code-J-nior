'use client';

import { Membro } from "@prisma/client";
import Pagination from "@/components/portfolio/pagination";
import { useState } from "react";

type TableProps = {
    members: Membro[];
    totalPages: number;
}

const ITEMS_PER_PAGE = 8;

export default function Table({ members, totalPages }: TableProps) {
    
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
  
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

    const currentItems = members.slice(startIndex, startIndex + ITEMS_PER_PAGE);


    return (
        <div className="flex flex-col items-center gap-4 w-full justify-center">    
            <table className="table-auto w-5/6 border bg-w">
                <thead>
                    <tr className="text-b">
                        <th className="px-4 py-2">Nome</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Cargo</th>
                        <th className="px-4 py-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((membro) => (
                        <tr key={membro.id} className="text-b">
                            <td className="border px-4 py-2">{membro.name}</td>
                            <td className="border px-4 py-2">{membro.email}</td>
                            <td className="border px-4 py-2">{membro.cargo}</td>
                            <td className="border px-4 py-2 flex gap-4 items-center justify-center">
                                <button className="bg-re text-w px-4 py-2 rounded-lg">Editar</button>
                                <button className="bg-re text-w px-4 py-2 rounded-lg">Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination currentPage={currentPage} handlePageChange={handlePageChange} totalPages={totalPages} />
        </div>
    )
}