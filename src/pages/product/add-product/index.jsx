import { Button, Form, Input } from "antd";
import React from "react";
import { useAddProductMutation } from "../../../hooks/useQueryHandler/useQuerAction";

function AddProduct() {
  const { mutate, isPending } = useAddProductMutation();

  const add = (e) => {
    mutate({ ...e, createdAt: Date.now });
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6]">
      <div className="w-[90%] sm:w-[60%] md:w-[40%] bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          🛍️ Add Product
        </h1>

        <Form layout="vertical" onFinish={add}>
          <Form.Item
            label={<span className="font-medium text-gray-700">Title</span>}
            name="title"
            rules={[{ required: true, message: "Title kiriting" }]}
          >
            <Input
              placeholder="Mahsulot nomi"
              className="rounded-lg py-2 border-gray-300 focus:border-[#f42c37] focus:ring-[#f42c37]"
            />
          </Form.Item>

          <Form.Item
            label={<span className="font-medium text-gray-700">Price</span>}
            name="price"
            rules={[{ required: true, message: "Price kiriting" }]}
          >
            <Input
              type="number"
              placeholder="Narxi"
              className="rounded-lg py-2 border-gray-300 focus:border-[#f42c37] focus:ring-[#f42c37]"
            />
          </Form.Item>

          <Form.Item
            label={<span className="font-medium text-gray-700">Image URL</span>}
            name="image"
            rules={[{ required: true, message: "Rasm URL kiriting" }]}
          >
            <Input
              placeholder="https://example.com/image.jpg"
              className="rounded-lg py-2 border-gray-300 focus:border-[#f42c37] focus:ring-[#f42c37]"
            />
          </Form.Item>

          <Button
            htmlType="submit"
            type="primary"
            className="w-full bg-[#f42c37] hover:bg-[#d72d38] text-white font-medium py-2 rounded-lg mt-4 transition-colors duration-300"
          >
            Qushish
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default AddProduct;
