import { API_ENDPOINTS, DASHBOARD_PRODUCT_FIELDS } from "@/constants";
import { IProduct } from "@/types";
import { Avatar } from "keep-react";
import formatTimeStamp from "@/helpers/formatTimeStamp";
import { getRequestSsr } from "@/helpers/getRequest";

const AllProducts = async () => {
  const { data } = await getRequestSsr(
    `${API_ENDPOINTS.PRODUCTS}?fields=${DASHBOARD_PRODUCT_FIELDS}`
  );

  return (
    <main className="w-full max-lg:overflow-x-scroll">
      <table className="w-full">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Details</th>
            <th>Date</th>
            <th>Product Id</th>
            <th>Quant.</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((item: IProduct, index: number) => (
            <tr key={item?._id} className="text-sm">
              <td>{index + 1}</td>

              <td className="flex items-center gap-5">
                <Avatar img={item?.images[0]} className="size-10" />

                <div className="flex flex-col items-start gap-1">
                  <p className="whitespace-nowrap">{item?.productName}</p>
                  <p className="capitalize">{item?.brand}</p>
                </div>
              </td>

              <td>
                <p className="whitespace-nowrap">
                  {formatTimeStamp(item?.createdAt)?.formattedDate}
                </p>
                <p className="whitespace-nowrap">
                  {formatTimeStamp(item?.createdAt)?.formattedTime}
                </p>
              </td>

              <td>
                <p>{item?._id}</p>
              </td>

              <td>
                <p>{item?.inStock}</p>
              </td>

              <td>
                <p>${item?.price}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default AllProducts;
