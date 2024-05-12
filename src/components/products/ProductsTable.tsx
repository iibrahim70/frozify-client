"use client";

import { Avatar, Table } from "keep-react";
import { CalendarBlank, CurrencyDollar, DotsNine } from "phosphor-react";
import { IProduct } from "@/types";
import formatTimeStamp from "@/helpers/formatTimeStamp";

const ProductsTable = ({ data }: { data: IProduct[] }) => {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell className="min-w-[80px]">
          <p className="text-body-5 font-medium text-metal-400">Serial no.</p>
        </Table.HeadCell>

        <Table.HeadCell className="min-w-[200px]">Details</Table.HeadCell>

        <Table.HeadCell
          className="min-w-[165px]"
          icon={<CalendarBlank size={14} color="#8897AE" />}
          iconPosition="left"
        >
          Date
        </Table.HeadCell>

        <Table.HeadCell className="min-w-[152px]">Product Id</Table.HeadCell>
        <Table.HeadCell
          className="min-w-[114px]"
          icon={<DotsNine size={14} color="#8897AE" />}
          iconPosition="left"
        >
          Quant.
        </Table.HeadCell>
        <Table.HeadCell
          className="min-w-[138px]"
          icon={<CurrencyDollar size={14} color="#8897AE" />}
          iconPosition="left"
        >
          Price
        </Table.HeadCell>
      </Table.Head>

      <Table.Body className="divide-gray-25 divide-y">
        {data?.map((item: IProduct, index: number) => (
          <Table.Row key={item?._id} className="bg-white">
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">
                {index + 1}
              </p>
            </Table.Cell>

            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar
                      img={item?.images[0]}
                      className="size-10 mx-auto py-1"
                    />
                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-500 line-clamp-1">
                        {item?.productName}
                      </p>
                      <span className="capitalize">{item?.brand}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>

            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">
                {formatTimeStamp(item?.createdAt)?.formattedDate}
              </p>
              <p className="text-body-5 font-normal text-metal-500">
                {formatTimeStamp(item?.createdAt)?.formattedTime}
              </p>
            </Table.Cell>

            <Table.Cell>
              <p className="text-body-4 font-medium text-metal-500">
                {item?._id}
              </p>
            </Table.Cell>

            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">
                {item?.inStock}
              </p>
            </Table.Cell>

            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">
                ${item?.price}
              </p>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProductsTable;
