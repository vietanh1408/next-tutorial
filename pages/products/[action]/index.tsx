import AdminLayout from "@/components/layout/admin";
import CreateProductForm from "@/containers/products/form";

const CreateProductPage = () => {
  return <CreateProductForm />;
};

CreateProductPage.Layout = AdminLayout;

export default CreateProductPage;
