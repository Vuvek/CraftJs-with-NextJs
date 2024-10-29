import { useNode } from "@craftjs/core";
import React from "react";

export const Container = ({ children,style, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  console.log(style,'styleeeeeeeeee',style={gridTemplateColumns : 'repeat(auto-fit,minmax(250px,1fr))'})
  return (
    <div className="" {...props}  ref={(ref) => connect(drag(ref))}>
      {children ? (
        children
      ) : (
        <div className="text-center italic p-4 bg-yellow-100 outline-1 outline-dashed outline-amber-400">
          Empty container
        </div>
      )}
    </div>
  );
};
