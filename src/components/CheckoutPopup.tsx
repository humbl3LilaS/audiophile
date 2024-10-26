import {useMemo, useState} from "react";
import {disablePageScroll, enablePageScroll} from "scroll-lock";
import {Cart, useCartStore} from "../store/cartStore.ts";
import {cn} from "../lib/util.ts";
import {Link} from "react-router-dom";

type CheckoutPopupProps = {
    isValid: boolean;
    cart: Cart[];
}


const CheckoutPopup = ({isValid, cart}: CheckoutPopupProps) => {
    const [popupVisible, setPopupVisible] = useState(false)
    const clearCart = useCartStore(state => state.emptyCart)


    const togglePopup = () => {

        scrollTo(0, 1)
        if (!popupVisible) {
            setPopupVisible(true);
            disablePageScroll();
        } else {
            setPopupVisible(false);
            enablePageScroll();
        }
    }

    const backToHomeController = () => {
        setPopupVisible(false);
        enablePageScroll();
        clearCart();
    }

    const totalAmount = useMemo(() => {
        return cart?.reduce((a, b) => {
            return a + (b.item.price * b.count)
        }, 0)
    }, [cart])

    return (
        <div>
            <div>
                <button
                    type="submit"
                    className=" w-full py-4 px-8 mt-6 block bg-primary text-white font-bold uppercase tracking-wide text-center disabled:bg-secondary"
                    disabled={!isValid}
                    onClick={togglePopup}
                >
                    Continue & Pay
                </button>
            </div>
            {popupVisible &&
                <div className={"absolute w-screen h-screen p-6 inset-0 flex justify-center items-center bg-black/40 px-[120px]"}>
                    <div className={"w-full max-w-[570px] p-6 bg-white rounded-lg shadow-lg md:p-10"}>
                        <img src={"/icons/icon-order-confirmation.svg"} alt={"Order confirmed"}
                             className={"block mb-6"}/>
                        <h2 className={"mb-6 text-2xl font-bold tracking-wide uppercase"}>Thank you<br/> for your order
                        </h2>
                        <p className={"mb-6 text-base text-black/50"}>You will receive an email confirmation
                            shortly.</p>
                        <div className={"md:grid grid-cols-3"}>
                            <div className={"col-span-2"}>
                                <div
                                    className={cn("px-9 py-6 flex gap-x-6 items-center bg-paleWhite rounded-t-lg last:mb-0 md:rounded-tr-none md:rounded-bl-lg", cart.length > 1 && "pb-4 border-b border-b-[#cfcfcf]")}>
                                    <img
                                        src={cart[0].item.img_url}
                                        className="aspect-square w-16 rounded-lg"
                                        alt={cart[0].item.name}
                                    />
                                    <p className="flex flex-col">
										<span className="font-bold tracking-wide">
											{cart[0].item.name}
										</span>
                                        <span className="text-black/50">
											${cart[0].item.price}
										</span>
                                    </p>
                                    <p className={"ml-auto"}>x{cart[0].count}</p>

                                </div>
                                {cart?.length > 1 &&
                                    <p className={"py-4 bg-paleWhite text-black/50 text-center font-bold"}>and {cart.length - 1} other
                                        item(s)</p>}</div>
                            <div className={"px-6 py-4 bg-darkBlack text-white rounded-b-lg md:rounded-bl-none md:rounded-r-lg"}>
                                <p className={"mb-2 text-white/50 font-medium text-base tracking-wide uppercase"}>grand
                                    total</p>
                                <p className={"font-bold text-lg "}>$ {totalAmount - 50}</p>
                            </div>
                        </div>
                        <Link to={"/"}
                              className={"block px-8 py-4 mt-6 text-center bg-primary font-bold text-white uppercase"}
                              onClick={backToHomeController}
                        >back to home</Link>
                    </div>
                </div>}
        </div>
    );
};
export default CheckoutPopup;