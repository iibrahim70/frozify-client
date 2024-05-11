import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { API_ENDPOINTS } from "@/constants";
import getRequestSsr from "@/app/utils/getRequestSsr";
import { IProduct } from "@/types";
import Image from "next/image";

const AllProducts = async () => {
  const res = await getRequestSsr(
    `${API_ENDPOINTS.PRODUCTS}?fields=images,productName,brand,price`
  );
  const products = res?.data;

  // const { data: products } = await res.json();

  return (
    <Table>
      <TableHeader>
        <TableRow className="font-bold text-base">
          <TableHead className="w-[50px]">SL</TableHead>
          <TableHead className="w-[150px]">Image</TableHead>
          <TableHead>Product Name</TableHead>
          <TableHead>Brand Name</TableHead>
          <TableHead>Product Id</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>

      {products?.map((item: IProduct, index: number) => (
        <TableBody key={item?._id}>
          <TableRow>
            <TableCell>{index + 1}</TableCell>

            <TableCell>
              <Image
                src={item?.images[0]}
                alt={item?.productName}
                width={500}
                height={500}
                className="rounded-full size-20 object-cover"
              />
            </TableCell>

            <TableCell>{item?.productName}</TableCell>
            <TableCell className="capitalize">{item?.brand}</TableCell>
            <TableCell>{item?._id}</TableCell>
            <TableCell>{item?.price}</TableCell>
          </TableRow>
        </TableBody>
      ))}
    </Table>
  );
};

export default AllProducts;
