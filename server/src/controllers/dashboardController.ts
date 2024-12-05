import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export const getDashboardMetrics = async (
    req: Request,
    res: Response
) : Promise<void> => {
    try{
        const popularProducts = await prisma.products.findMany
    }catch (error){
        res.status(500).json({message: "Error retrieving dashboard metrics"});
    }
}

