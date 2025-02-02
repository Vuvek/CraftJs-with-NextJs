import React from "react";
import { Element, useEditor } from "@craftjs/core";
import {
  CubeIcon,
  PhotographIcon,
  MenuAlt4Icon,
  ViewBoardsIcon,
  PencilIcon,
  CursorClickIcon,
  LinkIcon,
  SaveIcon,
  TemplateIcon,
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
  ArrowUpIcon,
} from "@heroicons/react/outline";
import { Container } from "../user/Container";
import { Card } from "../user/Card";
import { Columns } from "../user/Columns";
import { ProductCard } from "../user/ProductCard";
import { Rows } from "../user/Rows";
import { Button } from "../user/Button";
import { Text } from "../user/Text";
import { Link } from "../user/Link";
import { Image } from "../user/Image";
import { Panel, PanelSection } from "./Panel";
import { ProductContainer } from "../user/Product/Container";
import { ProductDescription, ProductTitle } from "../user";
import { ProductImage } from "../user/Product/Image";
import { ProductRating } from "../user/Product/Rating";

const ToolboxSection = ({ title, children }) => (
  <PanelSection title={title}>
    <ToolboxGrid>{children}</ToolboxGrid>
  </PanelSection>
);

const ToolboxGrid = ({ children }) => (
  <div className="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-2">
    {children}
  </div>
);

const ToolboxButton = React.forwardRef(({ icon, text }, ref) => (
  <div
    className="flex flex-col rounded items-center p-2 mb-2 hover:bg-zinc-200 border border-zinc-200 hover:cursor-move"
    ref={ref}
  >
    {/* {React.createElement(icon, { className: "text-zinc-700 w-5 h-5" })} */}
    <span className="text-zinc-700 text-xs">{text}</span>
  </div>
));

ToolboxButton.displayName = 'ToolboxButton';

const Toolbox = () => {
  const { actions, connectors, query, canUndo, canRedo } = useEditor();

  return (
    <Panel>
      <ToolboxSection title="Basics">
        <ToolboxButton
          ref={(ref) => connectors.create(ref, <Text text="New text" />)}
          icon={PencilIcon}
          text="Text"
        />
        <ToolboxButton
          ref={(ref) => connectors.create(ref, <Button text="New button" />)}
          icon={CursorClickIcon}
          text="Button"
        />
        <ToolboxButton
          ref={(ref) =>
            connectors.create(
              ref,
              <Link text="New link" href="http://www.seznam.cz" />
            )
          }
          icon={LinkIcon}
          text="Link"
        />
        <ToolboxButton
          ref={(ref) => connectors.create(ref, <Image />)}
          icon={PhotographIcon}
          text="Image"
        />
        <ToolboxButton
          ref={(ref) =>
            connectors.create(ref, <Element is={Container} canvas />)
          }
          icon={TemplateIcon}
          text="Container"
        />
      </ToolboxSection>

      <ToolboxSection title="Layout">
        <ToolboxButton
          ref={(ref) => connectors.create(ref, <Rows />)}
          icon={MenuAlt4Icon}
          text="Rows"
        />

        <ToolboxButton
          ref={(ref) => connectors.create(ref, <Columns />)}
          icon={ViewBoardsIcon}
          text="Columns"
        />
      </ToolboxSection>

      <ToolboxSection title="Customs">
        <ToolboxButton
          ref={(ref) => connectors.create(ref, <Card />)}
          icon={MenuAlt4Icon}
          text="Card"
        />
      </ToolboxSection>

      <ToolboxSection title="Product - premade">
        <ToolboxButton
          ref={(ref) => connectors.create(ref, <ProductCard />)}
          icon={CubeIcon}
          text="ProductCard"
        />
      </ToolboxSection>

      <ToolboxSection title="Product - Custom">
        <ToolboxButton
          ref={(ref) => connectors.create(ref, <ProductContainer />)}
          icon={CubeIcon}
          text="Product Container"
        />
        <ToolboxButton
          ref={(ref) => connectors.create(ref, <ProductTitle />)}
          icon={CubeIcon}
          text="Product Title"
        />
        <ToolboxButton
          ref={(ref) => connectors.create(ref, <ProductDescription />)}
          icon={CubeIcon}
          text="Product Description"
        />
        <ToolboxButton
          ref={(ref) => connectors.create(ref, <ProductImage />)}
          icon={CubeIcon}
          text="Product Image"
        />
        <ToolboxButton
          ref={(ref) => connectors.create(ref, <ProductRating />)}
          icon={CubeIcon}
          text="Product Rating"
        />
      </ToolboxSection>
    </Panel>
  );
};

Toolbox.displayName = 'Toolbox';
export default Toolbox;
