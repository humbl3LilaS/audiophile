import {Link, useLocation} from "react-router-dom";
import Section from "../components/Section";
import {SubmitHandler, useForm} from "react-hook-form";
import {CheckoutSchema, CheckoutSchemaType} from "../validation";
import {zodResolver} from "@hookform/resolvers/zod";
import PaymentMethodSelector from "../components/PaymentMethodSelector";
import {Cart} from "../store/cartStore.ts";
import {useEffect} from "react";


const Checkout = () => {
    const {state} = useLocation();

    const {
        handleSubmit,
        control,
        register,
        watch,
        reset,
        formState: {isValid},
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
            reset({eMoneyPin: undefined, eMoneyNumber: undefined})
        }
    }, [paymentMethod, reset]);

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
                                    className="mb-2 block font-bold"
                                    htmlFor="name">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className="block w-full py-4 px-6 border border-[#cfcfcf] rounded-lg placeholder:text-black/40 placeholder:font-bold"
                                    placeholder="Super edelweiss"
                                    {...register("name")}
                                />
                            </div>
                            {/*name-end*/}

                            {/*email-start*/}
                            <div>
                                <label
                                    className="mb-2 block font-bold"
                                    htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="text"
                                    className="block w-full py-4 px-6 border border-[#cfcfcf] rounded-lg placeholder:text-black/40 placeholder:font-bold"
                                    placeholder="superedelweiss@gmail.com"
                                    {...register("email")}
                                />
                            </div>
                            {/*email-start*/}

                            {/*phone-start*/}
                            <div>
                                <label
                                    className="mb-2 block font-bold"
                                    htmlFor="phone">
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    type="text"
                                    className="block w-full py-4 px-6 border border-[#cfcfcf] rounded-lg placeholder:text-black/40 placeholder:font-bold"
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
                                    className="mb-2 block font-bold"
                                    htmlFor="address">
                                    Your Address
                                </label>
                                <input
                                    id="address"
                                    type="text"
                                    className="block w-full py-4 px-6 border border-[#cfcfcf] rounded-lg placeholder:text-black/40 placeholder:font-bold"
                                    placeholder="1337 super"
                                    {...register("address")}
                                />
                            </div>
                            {/*address-end*/}

                            {/*zip-start*/}
                            <div>
                                <label
                                    className="mb-2 block font-bold"
                                    htmlFor="zip">
                                    Zip Code
                                </label>
                                <input
                                    id="zip"
                                    type="text"
                                    className="block w-full py-4 px-6 border border-[#cfcfcf] rounded-lg placeholder:text-black/40 placeholder:font-bold"
                                    placeholder="098911"
                                    {...register("zip")}
                                />
                            </div>
                            {/*zip-end*/}

                            {/*city-start*/}
                            <div>
                                <label
                                    className="mb-2 block font-bold"
                                    htmlFor="city">
                                    City
                                </label>
                                <input
                                    id="city"
                                    type="text"
                                    className="block w-full py-4 px-6 border border-[#cfcfcf] rounded-lg placeholder:text-black/40 placeholder:font-bold"
                                    placeholder="Yangon"
                                    {...register("city")}
                                />
                            </div>
                            {/*city-end*/}

                            {/*country-start*/}
                            <div>
                                <label
                                    className="mb-2 block font-bold"
                                    htmlFor="country">
                                    Country
                                </label>
                                <input
                                    id="country"
                                    type="text"
                                    className="block w-full py-4 px-6 border border-[#cfcfcf] rounded-lg placeholder:text-black/40 placeholder:font-bold"
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
                                    className="mb-2 block font-bold"
                                    htmlFor="cardNumber">
                                    e-Money Number
                                </label>
                                <input
                                    id="cardNumber"
                                    type="text"
                                    className="block w-full py-4 px-6 border border-[#cfcfcf] rounded-lg placeholder:text-black/40 placeholder:font-bold"
                                    placeholder="12345678"
                                    {...register("eMoneyNumber")}
                                />
                            </div>
                            {/*card-number-end*/}

                            {/*pin-number-start*/}
                            <div>
                                <label
                                    className="mb-2 block font-bold"
                                    htmlFor="cardPin">
                                    e-Money Pin
                                </label>
                                <input
                                    id="cardPin"
                                    type="text"
                                    className="block w-full py-4 px-6 border border-[#cfcfcf] rounded-lg placeholder:text-black/40 placeholder:font-bold"
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
                    <button
                        type="submit"
                        className=" w-full py-4 px-8 mt-6 block bg-primary text-white font-bold uppercase tracking-wide text-center disabled:bg-secondary"
                        disabled={!isValid}
                    >
                        Continue & Pay
                    </button>
                </div>
            </form>
        </Section>
    )
        ;
};

export default Checkout;
