import { z } from "zod";

export const CheckoutSchema = z.object({});

export type CheckoutSchemaType = Zod.infer<typeof CheckoutSchema>;
