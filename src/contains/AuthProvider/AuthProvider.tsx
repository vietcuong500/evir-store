"use client";
import {
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
} from "@nextui-org/react";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { useToggle } from "react-use";

const AuthContext = createContext({} as any);

export default function AuthProvider(props: any) {
  const [user, setUser] = useState<any>(null);
  const [cart, setCart] = useState<any>([]);
  const [wishlist, setWishlist] = useState<any>([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [itemSelected, setItemSelected] = useState<any>(null);

  const resetCart = () => {
    setCart([]);
    Cookies.set("cart", JSON.stringify([]));
  };

  const resetWishlist = () => {
    setWishlist([]);
    Cookies.set("wishlist", JSON.stringify([]));
  };

  const handleAddCart = (item: any) => {
    let clone = cart;
    const idx = clone.map((el: any) => el.id).indexOf(item.id);
    if (idx === -1) {
      clone = [...clone, item];
    } else {
      clone = clone.map((el: any) =>
        el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el
      );
    }
    setCart(clone);
    Cookies.set("cart", JSON.stringify(clone));
  };

  const handleAddWishlist = (item: any) => {
    let clone = wishlist;
    const idx = clone.map((el: any) => el.id).indexOf(item.id);
    if (idx === -1) {
      clone = [...clone, item];
    } else {
      clone = clone.map((el: any) =>
        el.id === item.id ? { ...el, quantity: el.quantity + 1 } : el
      );
    }
    setWishlist(clone);
    Cookies.set("wishlist", JSON.stringify(clone));
    console.log(Cookies.get('wishlist'));
  };

  const handlePlusQuantity = (id: number) => {
    const temp = cart.map((el: any) =>
      el.id === id ? { ...el, quantity: el.quantity + 1 } : el
    );
    setCart(temp);
    Cookies.set("cart", JSON.stringify(temp));
  };

  const handleMinusQuantity = (id: number) => {
    const product = cart.find((el: any) => el.id === id);
    if (product) {
      if (product.quantity === 1) {
        setItemSelected(product);
        onOpen();
      }
    }
    const temp = cart.map((el: any) =>
      el.id === id && el.quantity > 1
        ? { ...el, quantity: el.quantity - 1 }
        : el
    );
    setCart(temp);
    Cookies.set("cart", JSON.stringify(temp));
  };

  const handleRemoveCart = (id: number) => {
    const temp = cart.filter((el: any) => el.id !== id);
    setCart(temp);
    Cookies.set("cart", JSON.stringify(temp));
  };

  const handleRemoveWishlist = (id: number) => {
    const temp = wishlist.filter((el: any) => el.id !== id);
    setWishlist(temp);
    Cookies.set("wishlist", JSON.stringify(temp));
  };

  const handleChangeQuantity = (id: number, quantity: number) => {
    const temp = cart.map((el: any) =>
      el.id === id ? { ...el, quantity: quantity } : el
    );
    setCart(temp);
    Cookies.set("cart", JSON.stringify(temp));
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.code === 200) {
            setUser(data.data);
          }
        });
    }
    const cartTemp = Cookies.get("cart");
    if (cartTemp) {
      //console.log(cartTemp);
      const temp = Array.from(JSON.parse(cartTemp));
      setCart(temp);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        cart,
        handleAddCart,
        handlePlusQuantity,
        handleMinusQuantity,
        handleRemoveCart,
        resetCart,
        wishlist,
        handleAddWishlist,
        handleRemoveWishlist,
        handleChangeQuantity,
      }}
    >
      {props.children}

      <Modal className="!z-[200]" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="">Xác nhận xóa</ModalHeader>
              <ModalBody className="">
                <p className="text-sm">
                  Bạn có xác nhận muỗn xóa sản phẩm{" "}
                  <span className="font-medium text-sm">
                    {itemSelected?.name}
                  </span>
                </p>
              </ModalBody>
              <ModalFooter>
                <button
                  onClick={() => {
                    handleRemoveCart(itemSelected?.id);
                    onClose();
                  }}
                  className="h-8 px-6 text-sm hover:bg-red-800 bg-red-600 text-white font-medium rounded"
                >
                  Xóa
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
