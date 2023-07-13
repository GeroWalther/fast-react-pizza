import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

function UpdateOrder() {
  const fetcher = useFetcher();
  //in order to write data we use a form which is provided by the fetcher. fetcher.Form submitts and revalidates but does not cause to navigate away

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

//needs to be wired up in the router
// gets request and params as arguments
export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
