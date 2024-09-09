'use client';

import { Post } from "@prisma/client";
import Pagination from "@/components/home/portfolio/pagination";
import { useState } from "react";
import Delete from "../crud/delete";
import Edit from "../crud/edit";
import Create from "../crud/create";
import Link from "next/link";

type TableProps = {
    portfolio: Post[];
    totalPages: number;
}

const ITEMS_PER_PAGE = 5;

export default function Table({ portfolio, totalPages }: TableProps) {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postToDelete, setPostToDelete] = useState<Post>();
    const [postToUpdate, setPostToUpdate] = useState<Post>();
    const [modal, setModal] = useState('');

    const openModal = (modal: string) => {
        setModal(modal);
    }

    const deletepost = (post: Post) => {
        setPostToDelete(post);
        openModal('delete');
    }

    const editpost = (post: Post) => {
        setPostToUpdate(post);
        openModal('edit');
    }

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
  
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

    const currentItems = portfolio.slice(startIndex, startIndex + ITEMS_PER_PAGE);


    return (
        <div className="w-full flex flex-col items-end gap-4">
            <button onClick={() => openModal('create')} className="text-lg md:text-2xl text-center text-re font-mont font-medium bg-w px-4 py-4 rounded-lg mr-36">Adicionar post</button>
            <div className="flex flex-col items-center gap-4 w-full justify-center">   
                <table className="table-auto w-5/6 border bg-w">
                    <thead>
                        <tr className="text-b">
                            <th className="px-4 py-2">Titulo</th>
                            <th className="px-4 py-2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((post) => (
                            <tr key={post.id} className="text-b">
                                <td className="border px-4 py-2">{post.title}</td>
                                <td className="border px-4 py-2 flex gap-4 items-center justify-center">
                                    <button onClick={() => editpost(post)} className="bg-re text-w px-4 py-2 rounded-lg">Editar</button>
                                    <button onClick={() => deletepost(post)} className="bg-re text-w px-4 py-2 rounded-lg">Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {modal === 'delete' && postToDelete && (
                    <Delete id={postToDelete.id} closeModal={() => openModal('')} />
                )}
                {modal === 'edit' && postToUpdate && (
                    <Edit post={postToUpdate} closeModal={() => openModal('')} />
                )}
                {modal === 'create' && (
                    <Create closeModal={() => openModal('')} />
                )}
                <Pagination currentPage={currentPage} handlePageChange={handlePageChange} totalPages={totalPages} />
            </div>
        </div>
    )
}