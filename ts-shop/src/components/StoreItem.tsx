import { Card, Button } from "react-bootstrap";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  function getItemQuantity(id: number) {
    return 2;
  }
  let quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mg-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{price}</span>
        </Card.Title>
        {quantity === 0 ? (
          <Button onClick={() => {}}>+ Add to Cart</Button>
        ) : (
          <div
            className="d-flex align-items-center flex-column"
            style={{ gap: ".5rem" }}
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: ".5rem" }}
            >
              <Button onClick={() => {}}>+</Button>
              <div>
                <span>{quantity}</span> in cart
              </div>
              <Button onClick={() => {}}>-</Button>
            </div>
            <Button variant="danger" onClick={() => {}}>
              Remove
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
