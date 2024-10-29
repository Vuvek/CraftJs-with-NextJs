// import React, { useState, useEffect } from "react";

// import { Element, useNode, useEditor } from "@craftjs/core";
// import { Container } from "./Container";
// import { Label } from "../ui/form/Label";
// import { TextInput } from "../ui/form/TextInput";

// const EmptyColumn = () => {
//   return (
//     <div className="m-1 p-4 italic text-gray-600 bg-teal-100">Empty column</div>
//   );
// };

// export const Column = ({ children, className, ...props }) => {
//   const {
//     connectors: { connect },
//   } = useNode();

//   return (
//     <div {...props} ref={connect} className={`w-full ${className}`}>
//       {children ? <React.Fragment>{children}</React.Fragment> : <EmptyColumn />}
//     </div>
//   );
// };

// export const Columns = ({ numberOfCols, gap, children }) => {
//   const { enabled } = useEditor((state) => ({
//     enabled: state.options.enabled,
//   }));


//   const gridClasses = `grid gap-${gap} 
//                       grid-cols-${numberOfCols} 
//                       sm:grid-cols-${numberOfCols}
//                       md:grid-cols-${numberOfCols} 
//                       lg:grid-cols-${numberOfCols}`;


//   const colClass =
//     numberOfCols === 1
//       ? "w-full"
//       : gridClasses;

//   return (
//     <Container
//       className={`outline-dashed outline-1 outline-teal-300 ${colClass} ${
//         enabled && "hover:border-t-8 border-t-sky-500"
//       } `}
//     >
//       {children ??
//         [...Array(numberOfCols).keys()].map((id) => (
//           <Element key={id} is={Column} id={`column-${id}`} canvas />
//         ))}
//     </Container>
//   );
// };

// const ColumnsSettings = () => {
//   const {
//     actions: { setProp },
//     numberOfCols,
//     gap,
//   } = useNode((node) => ({
//     numberOfCols: node.data.props.numberOfCols,
//     gap: node.data.props.gap,
//   }));
//   return (
//     <>
//       <Label label="Number of columns">
//         <TextInput
//           type="number"
//           defaultValue={numberOfCols}
//           step={1}
//           min={1}
//           max={10}
//           onChange={(e) => {
//             setProp(
//               (props) => (props.numberOfCols = parseInt(e.target.value, 10)),
//               1000
//             );
//           }}
//         />
//       </Label>
//       <Label label="Gap">
//         <TextInput
//           type="number"
//           defaultValue={gap}
//           step={1}
//           min={0}
//           max={10}
//           onChange={(e) => {
//             setProp(
//               (props) => (props.gap = parseInt(e.target.value, 10)),
//               1000
//             );
//           }}
//         />
//       </Label>
//     </>
//   );
// };

// export const ColumnsDefaultProps = {
//   numberOfCols: 2,
//   gap: 0,
// };

// Columns.craft = {
//   props: ColumnsDefaultProps,
//   related: {
//     settings: ColumnsSettings,
//   },
// };



import React from "react";
import { Element, useNode, useEditor } from "@craftjs/core";
import { Container } from "./Container";
import { Label } from "../ui/form/Label";
import { TextInput } from "../ui/form/TextInput";

const EmptyColumn = () => (
  <div className="m-1 p-4 italic text-gray-600 bg-teal-100">Empty column</div>
);

export const Column = ({ children, className, ...props }) => {
  const {
    connectors: { connect },
  } = useNode();

  return (
    <div {...props} ref={connect} className={`w-full ${className}`}>
      {children ? children : <EmptyColumn />}
    </div>
  );
};

export const Columns = ({ numberOfCols, gap, children }) => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const gridClasses = `
    grid gap-${gap}
    grid-cols-1
    sm:grid-cols-1
    md:grid-cols-${numberOfCols} 
    lg:grid-cols-${numberOfCols}
    xl:grid-cols-${numberOfCols}
    `;
    console.log(numberOfCols,'kasjdfkljsdlkfjsldajfslkfjslakdfjslkjfsk')

  return (
    <Container
      className={`grid gap-${gap} outline-dashed outline-1 outline-teal-300 ${gridClasses} ${
        enabled && "hover:border-t-8 border-t-sky-500"
      }`}
    >
      {children ??
        [...Array(numberOfCols).keys()].map((id) => (
          <Element key={id} is={Column} id={`column-${id}`} canvas />
        ))}
    </Container>
  );
};

const ColumnsSettings = () => {
  const {
    actions: { setProp },
    numberOfCols,
    gap,
  } = useNode((node) => ({
    numberOfCols: node.data.props.numberOfCols,
    gap: node.data.props.gap,
  }));

  return (
    <>
      <Label label="Number of columns">
        <TextInput
          type="number"
          defaultValue={numberOfCols}
          step={1}
          min={1}
          max={10}
          onChange={(e) => {
            setProp(
              (props) => (props.numberOfCols = parseInt(e.target.value, 10)),
              1000
            );
          }}
        />
      </Label>
      <Label label="Gap">
        <TextInput
          type="number"
          defaultValue={gap}
          step={1}
          min={0}
          max={10}
          onChange={(e) => {
            setProp(
              (props) => (props.gap = parseInt(e.target.value, 10)),
              1000
            );
          }}
        />
      </Label>
    </>
  );
};

export const ColumnsDefaultProps = {
  numberOfCols: 2,
  gap: 4,
};

Columns.craft = {
  props: ColumnsDefaultProps,
  related: {
    settings: ColumnsSettings,
  },
};
