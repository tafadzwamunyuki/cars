"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image"

const CustomButton = ({title, containerStyles, handleClick, btnType, textStyles, rightIcon}: CustomButtonProps) => {
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {/* Add the right icon inside the view more button */}
          {rightIcon && (
            <div className="relative w-6 h-6">
              <Image 
                src={rightIcon}
                alt="right icon"
                width={20}
                height={20}
              />
            </div>
          )}
    </button>
  )
}

export default CustomButton
