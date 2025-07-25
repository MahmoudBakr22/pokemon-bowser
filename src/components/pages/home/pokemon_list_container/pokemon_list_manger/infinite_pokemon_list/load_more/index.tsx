import LoadingSpinner from "@/components/ui/loading_spinner";
import classes from "./load_more.module.css";
import Button from "@/components/ui/button";
import { FaAngleDown } from "react-icons/fa";

export default function LoadMore({
  isFetching,
  fetchNextPage,
}: {
  isFetching: boolean;
  fetchNextPage: () => void;
}) {
  return (
    <div className={classes.container}>
      {isFetching ? (
        <LoadingSpinner label="Loading more Pokemons..." />
      ) : (
        <Button
          endIcon={<FaAngleDown />}
          className={classes.btn}
          onClick={() => {
            fetchNextPage();
          }}
        >
          Load More
        </Button>
      )}
    </div>
  );
}
