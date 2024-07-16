import { searchFilter } from "@/actions/search";
import { Button } from "./ui/button";

function SearchBar() {
  return (
    <form
      className="mb-8 flex gap-4 md:flex-row flex-col"
      action={searchFilter}
    >
      <input
        type="search"
        name="query"
        className="border border-solid md:w-8/12 lg:w-4/12  border-slate-300 px-2 h-12 outline-none rounded"
      />
      <Button type="submit" className="rounded h-12 text-lg">
        Search Properties
      </Button>
    </form>
  );
}

export default SearchBar;
