type SearchBarProps = {
  classname: string
}

const SearchBar = ({classname}: SearchBarProps) => {
  return <input type="search" className={classname} placeholder="Search for anything" />;
}

export default SearchBar;
