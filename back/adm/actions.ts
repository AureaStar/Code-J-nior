'use server'

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const itensPerPage = 8;

export async function fetchMembers() {
    
    const members = await prisma.membro.findMany({
        orderBy:{
            id:"asc",
        },
    });

    const count= await prisma.membro.count();
    const totalPages = Math.ceil(count / 8)

    return{members, totalPages};
    
}