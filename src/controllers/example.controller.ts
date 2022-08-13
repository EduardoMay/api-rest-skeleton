import { Request, Response } from "express";

class ExampleController {
  getExample(req: Request, res: Response) {
    res.json({ message: "API Rest Skeleton" });
  }
}

export default new ExampleController();
