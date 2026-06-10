// ============================================================
// src/types/session.d.ts — Tipar a Session
// ============================================================
// 🎯 TODO 3: Criar declare module com os campos:
//
// import "express-session";
//
// declare module "express-session" {
//   interface SessionData {
//     aluno: string;
//     notas: number[];
//     flash: string | null;
//   }
// }
// ============================================================

import express, {Request, Response, NextFunction} from 'express-session'

const app = express();
const port = 3000;

app.use(express.json());

app.get('/',(req:Request, res:Response, next:NesxtFunction)=>{
    res.send('Ts and Ex ok!');
});

interface SessionData{
    aluno: string;
    notas: number;
    flash: string | null
}

export {};

declare global {
    interface Window{
    minhaAPI:{
        chave:string;
        carregar: ()=> void;
        }
    }
}
app.listen(port, ()=>{
    console.log(`Server on in http://localhost:${port}`);
})