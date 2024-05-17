import { API_ENDPOINTS } from "@/constants";
import getRequestSsr from "@/app/utils/getRequestSsr";
import { IProduct } from "@/types";
import { Avatar } from "keep-react";
import formatTimeStamp from "@/helpers/formatTimeStamp";

const AllProducts = async () => {
  const res = await getRequestSsr(
    `${API_ENDPOINTS.PRODUCTS}?fields=images,productName,brand,price,inStock,createdAt`
  );
  const data = res?.data;

  // const { data: products } = await res.json();

  return (
    <main className="pr-5">
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
              <td className="text-body-5 font-medium">{index + 1}</td>

              <td className="px-0">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3">
                      <Avatar
                        img={item?.images[0]}
                        className="size-10 mx-auto py-1"
                      />
                      <div>
                        <p className="-mb-0.5 text-body-4 font-medium line-clamp-1">
                          {item?.productName}
                        </p>
                        <span className="capitalize">{item?.brand}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </td>

              <td className="px-0">
                <p className="text-body-5 font-medium">
                  {formatTimeStamp(item?.createdAt)?.formattedDate}
                </p>
                <p className="text-body-5 font-normal">
                  {formatTimeStamp(item?.createdAt)?.formattedTime}
                </p>
              </td>

              <td className="px-0 text-body-4 font-medium">{item?._id}</td>

              <td className="text-body-5 font-medium">{item?.inStock}</td>

              <td className="px-0 text-body-5 font-medium">${item?.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default AllProducts;
