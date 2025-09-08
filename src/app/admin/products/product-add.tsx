"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AddProduct({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setName("");
      setDesc("");
      setPrice("");
      setImage(null);
      setPreview(null);
    }
  }, [isOpen]);

  const handleImageChange = (file: File | null) => {
    if (file && file.type === "image/png") {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    } else {
      setImage(null);
      setPreview(null);
      alert("Please upload a PNG file only!");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = { name, desc, price, image };
    console.log("New Product:", newProduct);

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-full sm:w-[500px] h-full bg-white shadow-lg z-50 flex flex-col"
          >
            <div className="flex justify-between items-center border-b px-4 py-3">
              <h2 className="text-xl font-bold">Add Product</h2>
              <button
                onClick={onClose}
                className="p-2 rounded hover:bg-gray-100 transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <form
                id="add-product-form"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Monipuri shiuli shuti sharee"
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Description
                  </label>
                  <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="100% cotton handloom saree. Made with local artisan."
                    className="w-full border rounded px-3 py-2"
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Price
                  </label>
                  <input
                    type="number"
                    value={price}
                    placeholder="2590"
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Upload Image (PNG Only)
                  </label>
                  <input
                    type="file"
                    accept="image/png"
                    onChange={(e) =>
                      handleImageChange(e.target.files?.[0] || null)
                    }
                    className="w-full border rounded px-3 py-2 cursor-pointer"
                    required
                  />

                  {preview && (
                    <div className="mt-4 border-2 border-dashed border-gray-400 rounded-lg p-3 flex flex-col items-center">
                      <div className="relative w-full max-w-xs h-48">
                        <Image
                          src={preview}
                          alt="Preview"
                          fill
                          className="object-contain rounded-md"
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-600 font-medium">
                        {image?.name}
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>

            <div className="border-t p-4">
              <button
                type="submit"
                form="add-product-form"
                className="main-btn w-full"
              >
                Save Product
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
