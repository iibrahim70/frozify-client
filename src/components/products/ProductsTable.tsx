"use client";

import { Avatar, Table } from "keep-react";
import { CalendarBlank, CurrencyDollar, DotsNine } from "phosphor-react";
import { IProduct } from "@/types";
import formatTimeStamp from "@/helpers/formatTimeStamp";

const ProductsTable = ({ data }: { data: IProduct[] }) => {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell className="min-w-[90px] text-body-4 font-medium">
          Serial No.
        </Table.HeadCell>

        <Table.HeadCell className="min-w-[250px] lg:min-w-[200px] text-body-4 font-medium">
          Details
        </Table.HeadCell>

        <Table.HeadCell
          className="min-w-[150px] text-body-4 font-medium"
          icon={<CalendarBlank size={15} />}
          iconPosition="left"
        >
          Date
        </Table.HeadCell>

        <Table.HeadCell className="min-w-[150px] text-body-4 font-medium">
          Product Id
        </Table.HeadCell>

        <Table.HeadCell
          className="min-w-[80px] text-body-4 font-medium"
          icon={<DotsNine size={15} />}
          iconPosition="left"
        >
          Quant.
        </Table.HeadCell>

        <Table.HeadCell
          className="min-w-[130px] text-body-4 font-medium"
          icon={<CurrencyDollar size={15} />}
          iconPosition="left"
        >
          Price
        </Table.HeadCell>
      </Table.Head>

      <Table.Body className="divide-gray-25 divide-y  dark:brightness-90">
        {data?.map((item: IProduct, index: number) => (
          <Table.Row key={item?._id} className="dark:border-jet-gray">
            <Table.Cell className="text-body-5 font-medium">
              {index + 1}
            </Table.Cell>

            <Table.Cell className="px-0">
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
            </Table.Cell>

            <Table.Cell className="px-0">
              <p className="text-body-5 font-medium">
                {formatTimeStamp(item?.createdAt)?.formattedDate}
              </p>
              <p className="text-body-5 font-normal">
                {formatTimeStamp(item?.createdAt)?.formattedTime}
              </p>
            </Table.Cell>

            <Table.Cell className="px-0 text-body-4 font-medium">
              {item?._id}
            </Table.Cell>

            <Table.Cell className="text-body-5 font-medium">
              {item?.inStock}
            </Table.Cell>

            <Table.Cell className="px-0 text-body-5 font-medium">
              ${item?.price}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default ProductsTable;
