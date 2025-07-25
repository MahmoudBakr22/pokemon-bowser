export const cn = (...classNames: (string | undefined)[]) => {
  return classNames.filter(String).join(" ");
};
