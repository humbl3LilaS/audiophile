import {IssueData, z} from "zod";

export const CheckoutSchema = z.object({
    name: z.string().min(3, {message: "Required"}),
    email: z.string().email({message: "Invalid email"}),
    phoneNumber: z.string().regex(/^09\d{9}$/, {
        message: "Phone number must start with 09 and have exactly 11 digits.",
    }),
    address: z.string().min(1, {message: "Required"}),
    zip: z.string().regex(/^\d{6}$/, {
        message: "ZIP code must be exactly 6 digits.",
    }),

    city: z.string().min(1, {message: "Required"}),
    country: z.string().min(1, {message: "Required"}),
    method: z.custom<"eMoney" | "cash">().optional(),
    eMoneyNumber: z
        .string()
        .regex(/^\d{9}$/, {
            message: "eMoney number must be exactly 9 digits.",
        }).optional(),
    eMoneyPin: z
        .string()
        .regex(/^\d{4}$/, {
            message: "eMoney PIN must be exactly 4 digits.",
        }).optional(),
}).superRefine((data, ctx) => {
    if (data.method === "eMoney") {
        if (!data.eMoneyNumber) {
            ctx.addIssue({
                path: ["eMoneyNumber"],
                message: "eMoney number is required when payment method is eMoney.",
            } as IssueData);
        }
        if (!data.eMoneyPin) {
            ctx.addIssue({
                path: ["eMoneyPin"],
                message: "eMoney PIN is required when payment method is eMoney.",
            } as IssueData);
        }
    }
})

export type CheckoutSchemaType = Zod.infer<typeof CheckoutSchema>;
