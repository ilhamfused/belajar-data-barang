import { Router } from "express";
import { getAllBarang } from "../controllers/barang.controller";
const barangRouter = Router();

barangRouter.get("/barang", getAllBarang);
export default barangRouter;
