import { type NextFunction, type Request, type Response } from "express";
// import { inputBarangValidation } from "../validations/barang.validation";
import { getBarang } from "../services/barang.service";

export const getAllBarang = async (req: Request, res: Response, next: NextFunction): Promise<Response | undefined> => {
  try {
    const data = await getBarang();
    return res.status(200).json({
      error: null,
      message: "Pengambilan semua data berhasil",
      data,
    });
  } catch (error: Error | unknown) {
    next(new Error("Error pada file src/controllers/barang.controller.ts: getAllBarang - " + String((error as Error).message)));
  }
};
