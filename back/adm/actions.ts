'use server'

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const itensPerPage = 5;

export async function fetchMembers() {
    
    const members = await prisma.membro.findMany({
        orderBy:{
            id:"asc",
        },
    });

    const count= await prisma.membro.count();
    const totalPages = Math.ceil(count / itensPerPage);

    return{members, totalPages};
    
}

export async function deleteMember(id: number) {
    await prisma.membro.delete({
        where:{
            id,
        },
    });

    revalidatePath('/admin/members');
}

export async function createMember(data: {name: string, email: string, cargo: string, published: boolean}) {
    await prisma.membro.create({
        data,
    });

    revalidatePath('/admin/members');
}

export async function updateMember(id: number, data: {name: string, email: string, cargo: string}) {
    await prisma.membro.update({
        where:{
            id,
        },
        data,
    });

    revalidatePath('/admin/members');
}

export async function fetchPortfolio() {
    
    const portfolio = await prisma.post.findMany({
        orderBy:{
            id:"asc",
        },
    });

    const count= await prisma.post.count();
    const totalPages = Math.ceil(count / itensPerPage);

    return{portfolio, totalPages};
    
}

export async function deletePost(id: number) {
    await prisma.post.delete({
        where:{
            id,
        },
    });

    revalidatePath('/admin/portfolio');
}

export async function createPost(data: {title: string, content: string, published: boolean, image: string}) {
    await prisma.post.create({
        data,
    });

    revalidatePath('/admin/portfolio');
}

export async function updatePost(id: number, data: {title: string, content: string}) {
    await prisma.post.update({
        where:{
            id,
        },
        data,
    });

    revalidatePath('/admin/portfolio');
}