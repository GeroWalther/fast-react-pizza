import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { getCurrentQuantityByID } from "./cartSlice";
import DeleteItem from "./DeleteItem";
import UpdateItemQt from "./UpdateItemQt";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityByID(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className=" text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQt pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
