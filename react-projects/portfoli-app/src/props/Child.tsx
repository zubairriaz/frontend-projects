import React from "react";

type ChildAsFCProps = {
  color: string;
  onClick: () => void;
};

export const Child = ({ color }: { color: string }): JSX.Element => (
  <div>{color}</div>
);

export const ChildAsFC: React.FC<ChildAsFCProps> = ({ color }) => (
  <div>{color}</div>
);
