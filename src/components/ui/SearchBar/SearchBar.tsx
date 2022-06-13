import { useState } from "react";
import cn from "classnames";

import s from "./SearchBar.module.scss";
import { SearchIcon } from "@components/icons";

type SearchBarProps = {
  onChange?: (term: string) => void;
  rootClass?: string;
  inputClass?: string;
};

const SearchBar = ({ onChange, rootClass, inputClass }: SearchBarProps) => {
  const [term, setTerm] = useState("");

  return (
    <div className={cn(s.root, rootClass)}>
      <SearchIcon />
      <input
        className={cn(s.input, inputClass)}
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
