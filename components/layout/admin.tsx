import { LayoutProps } from "@/models/common";
import Link from "next/link";
import Auth from "../common/auth";

const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <Auth>
      <div>Admin Layout</div>
      <Link href={"/"}>Home</Link>
      <Link href={"/login"}>Login</Link>
      {children}
    </Auth>
  );
};

export default AdminLayout;
