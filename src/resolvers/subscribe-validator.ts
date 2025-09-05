import z from "zod";
import { emailValidator } from "./utils";

export const subscribeValidator = z.object({
    email: emailValidator
  })