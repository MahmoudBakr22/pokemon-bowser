import { Pagination as MUIPagination, PaginationItem } from "@mui/material";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import classes from "./pagination.module.css";
import { cn } from "@/utils";

function Previous() {
  return (
    <div className={classes.controller}>
      <MdChevronLeft size={20} />
      <span className={classes.label}>Previous</span>
    </div>
  );
}
function Next() {
  return (
    <div className={classes.controller}>
      <span className={classes.label}>Next</span>
      <MdChevronRight size={20} />
    </div>
  );
}

export default function Pagination({
  count,
  page,
  onPageChange,
  className,
}: {
  className?: string;
  count: number;
  page: number;
  onPageChange: (p: number) => void;
}) {
  const onChangeHandler = (event: React.ChangeEvent<unknown>, page: number) => {
    onPageChange(page);
  };

  return (
    <MUIPagination
      className={cn(classes.container, className)}
      page={page}
      onChange={onChangeHandler}
      count={count}
      variant="outlined"
      shape="rounded"
      size="large"
      renderItem={(item) => (
        <PaginationItem
          className={classes.item}
          style={{ backgroundColor: "#fff", fontWeight: 600 }}
          slots={{ previous: Previous, next: Next }}
          {...item}
        />
      )}
    />
  );
}
