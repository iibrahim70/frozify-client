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
    <main className="lg:pr-5">
      <table>
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
                  <p className="truncate">{item?.productName}</p>
                  <span className="capitalize">{item?.brand}</span>
                </div>
              </td>

              <td>
                <p>{formatTimeStamp(item?.createdAt)?.formattedDate}</p>
                <p>{formatTimeStamp(item?.createdAt)?.formattedTime}</p>
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
