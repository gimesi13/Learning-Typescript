import { Offcanvas, OffcanvasHeader, OffcanvasTitle } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function ShoppingCart() {
  const { closeCart } = useShoppingCart();
  return (
    <Offcanvas show={true} placement="end" onHide={closeCart}>
      <OffcanvasHeader closeButton>
        <OffcanvasTitle>Cart</OffcanvasTitle>
      </OffcanvasHeader>
    </Offcanvas>
  );
}
