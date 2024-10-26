import {IssueData, z} from "zod";

export const CheckoutSchema = z.object({
    name: z.string().min(3, {message: "Required"}),
    email: z.string().email({message: "Invalid email"}),
    phoneNumber: z.string().regex(/^09\d{9}$/, {
        message: "Invalid Phone number",
    }),
    address: z.string().min(1, {message: "Required"}),
    zip: z.string().regex(/^\d{6}$/, {
        message: "Invalid Zip Code",
    }),

    city: z.string().min(1, {message: "Required"}),
    country: z.string().min(1, {message: "Required"}),
    method: z.custom<"eMoney" | "cash">().optional(),
    eMoneyNumber: z
        .string()
        .regex(/^\d{9}$/, {
            message: "Invalid Card Number",
        }).optional(),
    eMoneyPin: z
        .string()
        .regex(/^\d{4}$/, {
            message: "Invalid Pin Number",
        }).optional(),
}).superRefine((data, ctx) => {
    if (data.method === "eMoney") {
        if (!data.eMoneyNumber) {
            ctx.addIssue({
                path: ["eMoneyNumber"],
                message: "Invalid Card Number",
            } as IssueData);
        }
        if (!data.eMoneyPin) {
            ctx.addIssue({
                path: ["eMoneyPin"],
                message: "Invalid Pin",
            } as IssueData);
        }
    }
})

export type CheckoutSchemaType = Zod.infer<typeof CheckoutSchema>;
