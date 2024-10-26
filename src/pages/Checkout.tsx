import {Link, useLocation} from "react-router-dom";
import Section from "../components/Section";
import {SubmitHandler, useForm} from "react-hook-form";
import {CheckoutSchema, CheckoutSchemaType} from "../validation";
import {zodResolver} from "@hookform/resolvers/zod";
import PaymentMethodSelector from "../components/PaymentMethodSelector";
import {Cart} from "../store/cartStore.ts";
import {useEffect, useMemo} from "react";
import CheckoutPopup from "../components/CheckoutPopup.tsx";
import {cn} from "../lib/util.ts";


const Checkout = () => {
    const {state} = useLocation();
    const totalAmount = useMemo(() => {
        return state?.reduce((a: number, b: Cart) => a + (b.item.price * b.count), 0)
    }, [state]);


    const {
        handleSubmit,
        control,
        register,
        watch,
        resetField,
        formState: {isValid, errors},
    } = useForm<CheckoutSchemaType>({
        resolver: zodResolver(CheckoutSchema),
        mode: "onBlur",
    });
    const onSubmit: SubmitHandler<CheckoutSchemaType> = (value) => {
        console.log(value);
    };

    const paymentMethod = watch("method")

    useEffect(() => {
        if (paymentMethod !== "eMoney") {
            resetField("eMoneyPin")
            resetField("eMoneyNumber")
        }
    }, [paymentMethod]);

    return (
        <Section className="my-4 bg-paleWhite md:py-20">
            <Link
                to="/"
                className="block mb-6 text-black/50 font-medium text-left lg:mb-9">
                Go Back
            </Link>
            <form onSubmit={handleSubmit(onSubmit)} className={"lg:flex items-start gap-x-8"}>
                <div className="p-6 bg-white shadow-lg rounded-lg md:p-7 lg:flex-1 lg:py-14 lg:px-12">
                    <h1 className="mb-8 text-2xl font-bold tracking-wider uppercase lg:mb-10">
                        Checkout
                    </h1>


                    <div className="flex flex-col gap-y-6">
                        <p className="mb-4 text-primary tracking-wider font-bold uppercase">
                            billing details
                        </p>
                        <div className={"mb-8 flex flex-col gap-y-6 md:grid md:grid-cols-2 gap-x-6 lg:mb-10"}>
                            {/*name-start*/}
                            <div>
                                <label
                                    className={cn("mb-2 font-bold flex justify-between", errors.name && "text-red-500")}
                                    htmlFor="name">
                                    <span>Name</span>
                                    {errors.name && <span className={"text-red-500 font-medium text-sm"}>{errors.name.message}</span>}
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className={cn("block w-full py-4 px-6 border border-[#cfcfcf] rounded-lg placeholder:text-black/40 placeholder:font-bold focus:outline-none focus:border-primary", errors.name && "border-2 border-red-600")}
                                    placeholder="Super edelweiss"
                                    {...register("name")}
                                />
                            </div>
                            {/*name-end*/}

                            {/*email-start*/}
                            <div>
                                <label
                                    className={cn("mb-2 font-bold flex justify-between", errors.email && "text-red-500")}
                                    htmlFor="email">
                                    <span>Email Address</span>
                                    {errors.email && <span className={"text-red-500 font-medium text-sm"}>{errors.email.message}</span>}
                                </label>
                                <input
                                    id="email"
                                    type="text"
                                    className={cn("block w-full py-4 px-6 border border-[#cfcfcf] rounded-lg placeholder:text-black/40 placeholder:font-bold focus:outline-none focus:border-primary", errors.email && "border-2 border-red-600")}
                                    placeholder="superedelweiss@gmail.com"
                                    {...register("email")}
                                />
                            </div>
                            {/*email-start*/}

                            {/*phone-start*/}
                            <div>
                                <label
                                    className={cn("mb-2 font-bold flex justify-between", errors.phoneNumber && "text-red-500")}
                                    htmlFor="phone">
                                    <span>Phone Number</span>
                                    {errors.phoneNumber && <span className={"text-red-500 font-medium text-sm"}>{errors.phoneNumber.message}</span>}
                                </label>
                                <input
                                    id="phone"
                                    type="text"
                                    className={cn("block w-full py-4 px-6 border border-[#cfcfcf] rounded-lg placeholder:text-black/40 placeholder:font-bold focus:outline-none focus:border-primary", errors.phoneNumber && "border-2 border-red-600")}
                                    placeholder="09*********"
                                    {...register("phoneNumber")}
                                />
                            </div>
                            {/*phone-end*/}
                        </div>

                        <p className="mb-2 text-primary tracking-wider font-bold uppercase">
                            shipping info
                        </p>
                        <div className={"mb-8 flex flex-col gap-y-6 md:grid md:grid-cols-2 gap-x-6 lg:mb-10"}>
                            {/*address-start*/}
                            <div className={"md:col-span-2"}>
                                <label
                                    className={cn("mb-2 font-bold flex justify-between", errors.address && "text-red-500")}
                                    htmlFor="address">
                                    <span>Your Address</span>
                                    {errors.address && <span className={"text-red-500 font-medium text-sm"}>{errors.address.message}</span>}
                                </label>
                                <input
                                    id="address"
                                    type="text"
                                    className={cn("block w-full py-4 px-6 border border-[#cfcfcf] rounded-lg placeholder:text-black/40 placeholder:font-bold focus:outline-none focus:border-primary", errors.address && "border-2 border-red-600")}
                                    placeholder="1337 super"
                                    {...register("address")}
                                />
                            </div>
                            {/*address-end*/}

                            {/*zip-start*/}
                            <div>
                                <label
                                    className={cn("mb-2 font-bold flex justify-between", errors.zip && "text-red-500")}
                                    htmlFor="zip">
                                    <span>Zip Code</span>
                                    {errors.zip && <span className={"text-red-500 font-medium text-sm"}>{errors.zip.message}</span>}
                                </label>
                                <input
                                    id="zip"
                                    type="text"
                                    className={cn("block w-full py-4 px-6 border border-[#cfcfcf] rounded-lg placeholder:text-black/40 placeholder:font-bold focus:outline-none focus:border-primary", errors.zip && "border-2 border-red-600")}
                                    placeholder="098911"
                                    {...register("zip")}
                                />
                            </div>
                            {/*zip-end*/}

                            {/*city-start*/}
                            <div>
                                <label
                                    className={cn("mb-2 font-bold flex justify-between", errors.city && "text-red-500")}
                                    htmlFor="city">
                                    <span>City</span>
                                    {errors.city && <span className={"text-red-500 font-medium text-sm"}>{errors.city.message}</span>}
                                </label>
                                <input
                                    id="city"
                                    type="text"
                                    className={cn("block w-full py-4 px-6 border border-[#cfcfcf] rounded-lg placeholder:text-black/40 placeholder:font-bold focus:outline-none focus:border-primary", errors.city && "border-2 border-red-600")}
                                    placeholder="Yangon"
                                    {...register("city")}
                                />
                            </div>
                            {/*city-end*/}

                            {/*country-start*/}
                            <div>
                                <label
                                    className={cn("mb-2 font-bold flex justify-between", errors.country && "text-red-500")}
                                    htmlFor="country">
                                    <span>Country</span>
                                    {errors.country && <span className={"text-red-500 font-medium text-sm"}>{errors.country.message}</span>}
                                </label>
                                <input
                                    id="country"
                                    type="text"
                                    className={cn("block w-full py-4 px-6 border border-[#cfcfcf] rounded-lg placeholder:text-black/40 placeholder:font-bold focus:outline-none focus:border-primary", errors.country && "border-2 border-red-600")}
                                    placeholder="Myanmar"
                                    {...register("country")}
                                />
                            </div>
                            {/*address-end*/}
                        </div>

                        {/*payment-details-start*/}
                        <p className="mb-2 text-primary tracking-wider font-bold uppercase">
                            payment details
                        </p>
                        <PaymentMethodSelector
                            name="method"
                            control={control}
                        />
                        {paymentMethod === "eMoney" && <div className={"md:grid md:grid-cols-2 gap-x-6 lg:mt-6"}>
                            {/*card-number-start*/}
                            <div>
                                <label
                                    className={cn("mb-2 font-bold flex justify-between", errors.eMoneyNumber && "text-red-500")}
                                    htmlFor="cardNumber">
                                    <span>e-Money Number</span>
                                    {errors.eMoneyNumber && <span className={"text-red-500 font-medium text-sm"}>{errors.eMoneyNumber.message}</span>}
                                </label>
                                <input
                                    id="cardNumber"
                                    type="text"
                                    className={cn("block w-full py-4 px-6 border border-[#cfcfcf] rounded-lg placeholder:text-black/40 placeholder:font-bold focus:outline-none focus:border-primary", errors.eMoneyNumber && "border-2 border-red-600")}
                                    placeholder="12345678"
                                    {...register("eMoneyNumber")}
                                />
                            </div>
                            {/*card-number-end*/}

                            {/*pin-number-start*/}
                            <div>
                                <label
                                    className={cn("mb-2 font-bold flex justify-between", errors.eMoneyPin && "text-red-500")}
                                    htmlFor="cardPin">
                                    <span>e-Money Pin</span>
                                    {errors.eMoneyPin && <span className={"text-red-500 font-medium text-sm"}>{errors.eMoneyPin.message}</span>}
                                </label>
                                <input
                                    id="cardPin"
                                    type="text"
                                    className={cn("block w-full py-4 px-6 border border-[#cfcfcf] rounded-lg placeholder:text-black/40 placeholder:font-bold focus:outline-none focus:border-primary", errors.eMoneyPin && "border-2 border-red-600")}
                                    placeholder="6891"
                                    {...register("eMoneyPin")}
                                />
                            </div>
                            {/*pin-number-end*/}
                        </div>}
                        {/*payment-details-end*/}
                    </div>

                </div>
                <div className={"p-6 mt-8 bg-white shadow-lg rounded-lg lg:mt-0 lg:flex-1 lg:max-w-[350px] lg:p-8"}>
                    <p className={"mb-8 font-bold tracking-wider uppercase"}>summary</p>
                    <div>
                        {state && state.map((cartItem: Cart) => <div
                            key={cartItem.item.name}
                            className="flex gap-x-6 items-center mb-6 last:mb-0">
                            <img
                                src={cartItem.item.img_url}
                                className="aspect-square w-16 rounded-lg"
                                alt={cartItem.item.name}
                            />
                            <p className="flex flex-col">
										<span className="font-bold tracking-wide">
											{cartItem.item.name}
										</span>
                                <span className="text-black/50">
											${cartItem.item.price}
										</span>
                            </p>
                            <p className={"ml-auto"}>x{cartItem.count}</p>
                        </div>)}
                    </div>
                    <div className={"mt-8"}>
                        <p className={"mb-4 flex items-center justify-between"}>
                            <span className={"text-black/50 uppercase tracking-wide"}>Total</span>
                            <span className={"text-darkBlack font-bold text-lg"}>$ {totalAmount}</span>
                        </p>
                        <p className={"mb-4 flex items-center justify-between"}>
                            <span className={"text-black/50 uppercase tracking-wide"}>shipping</span>
                            <span className={"text-darkBlack font-bold text-lg"}>$ 50</span>
                        </p>
                        <p className={"mb-4 flex items-center justify-between"}>
                            <span className={"text-black/50 uppercase tracking-wide"}>vat (included)</span>
                            <span className={"text-darkBlack font-bold text-lg"}>$ 1079</span>
                        </p>
                        <p className={"mb-4 flex items-center justify-between"}>
                            <span className={"text-black/50 uppercase tracking-wide"}>grand total</span>
                            <span className={"text-primary font-bold text-lg"}>$ {totalAmount - 50}</span>
                        </p>
                    </div>
                    <CheckoutPopup isValid={isValid} cart={state}/>

                </div>
            </form>
        </Section>
    )
        ;
};

export default Checkout;
