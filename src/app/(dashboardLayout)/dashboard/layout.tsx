"use client";

import { ReactNode } from "react";
import { Layout, Menu, MenuProps } from "antd";
import Link from "next/link";

const { Content, Sider } = Layout;
const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/">Home</Link>,
  },
  {
    key: "2",
    label: <Link href="/dashboard/all-products">All Products</Link>,
  },
];

const dashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Layout hasSider={true} className="min-h-[calc(100dvh-64px)]">
        <Sider breakpoint="lg" collapsedWidth="0">
          <Link
            href="/"
            className="font-bold text-xl py-5 w-full inline-block text-center text-white"
          >
            Frozify
          </Link>

          <hr className="w-[90%] mx-auto" />

          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
            className="mt-10"
          />
        </Sider>

        <Layout hasSider={true}>
          {/* content part */}
          <Content className="p-10">{children}</Content>
        </Layout>
      </Layout>
    </main>
  );
};

export default dashboardLayout;
