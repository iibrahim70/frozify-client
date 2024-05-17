import { API_ENDPOINTS } from "@/constants";
import getRequestSsr from "@/app/utils/getRequestSsr";
import { IProduct } from "@/types";
import { Avatar } from "keep-react";
import formatTimeStamp from "@/helpers/formatTimeStamp";

const AllProducts = async () => {
  const { data } = await getRequestSsr(
    `${API_ENDPOINTS.PRODUCTS}?fields=images,productName,brand,price,inStock,createdAt`
  );

  return (
    <main className="lg:pr-5 w-full max-lg:overflow-x-scroll">
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
            <tr key={item?._id}>
              <td>{index + 1}</td>

              <td className="flex items-center gap-5">
                <Avatar img={item?.images[0]} className="size-10" />

                <div className="flex flex-col items-start gap-1">
                  <p className="whitespace-nowrap">{item?.productName}</p>
                  <small className="capitalize">{item?.brand}</small>
                </div>
              </td>

              <td>
                <div className="flex flex-col items-center gap-1">
                  <small className="whitespace-nowrap">
                    {formatTimeStamp(item?.createdAt)?.formattedDate}
                  </small>
                  <small className="whitespace-nowrap">
                    {formatTimeStamp(item?.createdAt)?.formattedTime}
                  </small>
                </div>
              </td>

              <td>
                <small>{item?._id}</small>
              </td>

              <td>
                <small>{item?.inStock}</small>
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
