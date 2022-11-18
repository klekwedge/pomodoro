import { ModeType, ColorType } from "../../types/types";

export interface IModeButtonProps {
  clickHandler: (e: any) => void;
  children: React.ReactNode;
  color: ColorType;
  mode: ModeType;
}
