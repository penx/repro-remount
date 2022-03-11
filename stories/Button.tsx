import React, { useMemo } from "react";

export const Button = ({ test }: { test: number }) => {
  useMemo(() => console.log("new"), []);
  useMemo(() => console.log(test), [test]);
  return <div>Button</div>;
};
