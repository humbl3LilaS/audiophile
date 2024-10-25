import {Control, Controller} from "react-hook-form";
import {cn} from "../lib/util.ts";

type PaymentMethodSelectorProps = {
    name: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>;
};

const PaymentMethodSelector = ({
                                   name,
                                   control,
                               }: PaymentMethodSelectorProps) => {
    return (
        <div className={"md:grid grid-cols-2"}>
            <p className="mb-4 block font-bold">Payment Method</p>
            <Controller
                name={name}
                control={control}
                render={({field}) => (
                    <div>
                        <div
                            className={cn("px-8 py-4 mb-4 flex items-center gap-x-4 border borer-[#cfcfcf] rounded-lg", field.value === "eMoney" && "border-primary")}
                            onClick={() => {
                                field.onChange("eMoney")
                            }}
                        >
                            <input
                                type="radio"
                                className="bg-primary peer"
                                id="eMoney"
                                name="payment-method"
                                value="eMoney"
                            />
                            <label
                                htmlFor="eMoney"
                                className="block font-bold w-full">
                                e-Money
                            </label>
                        </div>
                        <div
                            className={cn("px-8 py-4 flex items-center gap-x-4 border borer-[#cfcfcf] rounded-lg", field.value === "cash" && "border-primary")}
                            onClick={() => {
                                field.onChange("cash")
                            }}>
                            <input
                                type="radio"
                                className="bg-primary"
                                id="cash"
                                name="payment-method"
                                value="cash"
                            />
                            <label
                                htmlFor="cash"
                                className="w-full block font-bold">
                                Cash on Deliver
                            </label>
                        </div>
                    </div>
                )}
            />
        </div>
    );
};

export default PaymentMethodSelector;
