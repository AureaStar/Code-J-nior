'use client';

import { Membro } from "@prisma/client";
import Pagination from "@/components/home/portfolio/pagination";
import { useState } from "react";
import Delete from "../crud/delete";
import Edit from "../crud/edit";
import Create from "../crud/create";
import Link from "next/link";

type TableProps = {
    members: Membro[];
    totalPages: number;
}

const ITEMS_PER_PAGE = 5;

export default function Table({ members, totalPages }: TableProps) {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [memberToDelete, setMemberToDelete] = useState<Membro>();
    const [memberToUpdate, setMemberToUpdate] = useState<Membro>();
    const [modal, setModal] = useState('');

    const openModal = (modal: string) => {
        setModal(modal);
    }

    const deleteMember = (member: Membro) => {
        setMemberToDelete(member);
        openModal('delete');
    }

    const editMember = (member: Membro) => {
        setMemberToUpdate(member);
        openModal('edit');
    }

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
  
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

    const currentItems = members.slice(startIndex, startIndex + ITEMS_PER_PAGE);


    return (
        <div className="w-full flex flex-col items-end gap-4">
            <button onClick={() => openModal('create')} className="text-lg md:text-2xl text-center text-re font-mont font-medium bg-w px-4 py-4 rounded-lg mr-36">Adicionar Membro</button>
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
                                    <button onClick={() => editMember(membro)} className="bg-re text-w px-4 py-2 rounded-lg">Editar</button>
                                    <button onClick={() => deleteMember(membro)} className="bg-re text-w px-4 py-2 rounded-lg">Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {modal === 'delete' && memberToDelete && (
                    <Delete id={memberToDelete.id} closeModal={() => openModal('')} />
                )}
                {modal === 'edit' && memberToUpdate && (
                    <Edit membro={memberToUpdate} closeModal={() => openModal('')} />
                )}
                {modal === 'create' && (
                    <Create closeModal={() => openModal('')} />
                )}
                <Pagination currentPage={currentPage} handlePageChange={handlePageChange} totalPages={totalPages} />
            </div>
        </div>
    )
}