"use client";

import { ReactNode } from "react";
import { Layout, Menu, MenuProps } from "antd";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";

const { Content, Sider } = Layout;
const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/dashboard">Dashboard</Link>,
  },
  {
    key: "2",
    label: <Link href="/dashboard/all-products">All Products</Link>,
  },
];

const dashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      {/* navbar */}
      <Navbar />

      <Layout className="min-h-[calc(100dvh-64px)]">
        <Sider breakpoint="lg" collapsedWidth="0">
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
            className="mt-10"
          />
        </Sider>

        <Layout>
          {/* content part */}
          <Content className="bg-white dark:bg-black dark:text-white p-10">
            {children}
          </Content>
        </Layout>
      </Layout>

      {/* footer */}
    </main>
  );
};

export default dashboardLayout;
