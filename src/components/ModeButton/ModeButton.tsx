import { Button } from "@chakra-ui/react";
import { IModeButtonProps } from "./ModeButton.props";

export default function ModeButton({
  clickHandler,
  children,
  color,
  mode,
  refProp
}: IModeButtonProps) {
  return (
    <Button
      className="main__option"
      fontSize="18px"
      width="100px"
      height="28px"
      background="transparent"
      border="none"
      color="white"
      cursor="pointer"
      data-color={color}
      data-mode={mode}
      _hover={{ background: "#808080" }}
      onClick={(e) =>
        clickHandler(e)
      }
      ref={refProp}
    >
      {children}
    </Button>
  );
}
