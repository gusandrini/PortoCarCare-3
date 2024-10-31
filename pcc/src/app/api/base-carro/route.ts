import { client } from "@/lib/appwrite_client";
import { TipoCarro } from "@/types/types";
import { Databases, ID, Query } from "appwrite";
import { NextResponse } from "next/server";

const database = new Databases(client);

//GET ALL
export async function GET() {

    try {
        const response = await database.listDocuments(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_ID as string, [Query.orderAsc("$createdAt")]);

        return NextResponse.json(response.documents);

    } catch (error) {
        console.error("Falha na leitura dos carros!", error);
        return NextResponse.json({ error: "Erro ao recuperar os carros!: " + error });
    }

}

//POST
export async function POST(request:Request) {
    try {

        const {placa, ano, modelo, marca, quilometragem, tipo} = await request.json();
        const carro = {placa, ano, modelo, marca, quilometragem, tipo} as TipoCarro;

        const response = await database.createDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_ID as string, 
            ID.unique(),
            carro
        );

        return NextResponse.json(response,{status:201});

    } catch (error) {
        console.error("Falha na criação do carro!", error);
        return NextResponse.json({ error: "Erro ao cadastrar carro!: " + error });
    }
}