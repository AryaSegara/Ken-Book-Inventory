import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
            className="my-6"
          >
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/manage"
            icon={HiInbox}
            className="my-20"
          >
            Manage Books
          </Sidebar.Item>

          <Sidebar.Item
            href="/admin/dashboard/databook"
            icon={HiShoppingBag}
            className="my-20"
          >
            Products
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiArrowSmRight} className="my-24">
            <button onClick={() =>{
                alert("Anda telah logout");
                localStorage.removeItem("token");
                navigate("/login");
                window.location.reload();
            }}>Logout</button>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
