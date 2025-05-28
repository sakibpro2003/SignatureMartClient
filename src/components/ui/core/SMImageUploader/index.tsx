import React, { Dispatch, SetStateAction } from "react";
import { Input } from "../../input";
import Image from "next/image";

type TImageUploaderProps = {
  imageFiles: File[] | [];
  setImageFiles: Dispatch<SetStateAction<[] | File[]>>;
};
const SMImageUploader = ({
  imageFiles,
  setImageFiles,
}: TImageUploaderProps) => {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0]; // them image will be in 0 index
    setImageFiles((prev) => [...prev, file]); // if any previous file exists, then it will accept them first with ...prev
  };
  // console.log(imageFiles);
  return (
    <div className=" p-4 border border-dashed border-gray-300 rounded-xl shadow-sm">
      <label
        htmlFor="image-uploader"
        className="flex flex-col items-center justify-center gap-2 cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-400 transition"
      >
        <svg
          className="w-8 h-8 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-3-10.125V3m0 0l-4.5 4.5M18 3l4.5 4.5M3 12h18"
          />
        </svg>
        <p className="text-gray-500 text-sm">Click to upload or drag images</p>
        <Input
          id="image-uploader"
          type="file"
          className="hidden"
          onChange={handleImageChange}
          multiple
          accept="image/*"
        />
      </label>

      {imageFiles.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-3">
          {imageFiles.map((file, idx) => (
            <div key={idx} className="overflow-hidden rounded-lg border">
              <Image
                width={100}
                height={100}
                src={URL.createObjectURL(file)}
                alt={`Preview ${idx}`}
                className="w-full h-24 object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SMImageUploader;
