'use client';

import { deleteMember, updateMember } from "@/back/adm/actions";
import { Membro } from "@prisma/client";
import { useState } from "react";

type EditProps = {
    membro: Membro;
    closeModal: () => void;
}

interface FormDataType {
    name: string;
    email: string;
    cargo: string;
}

export default function Edit({membro, closeModal}: EditProps) {

    const [formData, setFormData] = useState({
        name: membro.name || '',  // Valor inicial ou vazio se não houver
        email: membro.email || '',
        cargo: membro.cargo || ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault(); // Impede o comportamento padrão do formulário
        
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
    
        // Converte FormData em um objeto do tipo esperado
        const data: FormDataType = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            cargo: formData.get('cargo') as string,
        };
        
        // Chama a função updateMember com os dados do formulário
        updateMember(membro.id, data);
        closeModal();
    }    
    

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={closeModal}></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full justify-center">
                            <h1 className="font-bold text-lg">Editar Membro</h1>
                            <div className="w-full flex flex-col gap-2">
                            <label className="text-b" htmlFor="name">Nome</label>
                            <input className="border border-b-2 border-re px-2 py-1 w-full rounded-md" type="text" id="name" name="name" required value={formData.name} onChange={handleChange}/>
                            </div>
                            <div className="w-full flex flex-col gap-2">
                            <label className="text-b" htmlFor="email">Email</label>
                            <input className="border border-b-2 border-re px-2 py-1 w-full rounded-md" type="email" id="email" name="email" required value={formData.email} onChange={handleChange}/>
                            </div>
                            <div className="w-full flex flex-col gap-2">
                            <label className="text-b" htmlFor="cargo">Cargo</label>
                            <input className="border border-b-2 border-re px-2 py-1 w-full rounded-md" type="text" id="cargo" name="cargo" required value={formData.cargo} onChange={handleChange}/>
                            </div>
                            <div className="flex flex-row w-full justify-between mt-4">
                                <button className="bg-re text-w px-4 py-2 rounded-lg">Salvar</button>
                                <button onClick={closeModal} className="bg-re text-w px-4 py-2 rounded-lg">Cancelar</button>
                            </div>
                        </form>
                    </div>  
                </div>
            </div>
        </div>
    )
}