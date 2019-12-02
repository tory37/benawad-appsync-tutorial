import { useEffect } from "react";

interface Props {
  onEffect: () => void | (() => void);
}

const OnMount = ({ onEffect }: Props) => {
  useEffect(onEffect, []);

  return null;
};

export default OnMount;
