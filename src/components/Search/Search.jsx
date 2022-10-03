import { memo, useState, useMemo, useRef, useEffect } from "react";
import { FiRefreshCcw } from "react-icons/fi";

import styles from "./Search.module.css";
// экшн
import { setSearch } from "../../store/charactersSlice/charactersSlice";
// хуки
import { useDispatch } from "react-redux/es/exports";
import { useDebounce } from "use-debounce";

// константы
import { searchIconProps } from "../../constants/constants";

const Search = memo(() => {
	const dispatch = useDispatch();

	const ref = useRef(null);

	const [inputValue, setInputValue] = useState("");

	const [debouncedInputValue] = useDebounce(inputValue, 600);

	useMemo(() => dispatch(setSearch(debouncedInputValue)), [debouncedInputValue]);

	useEffect(() => {
		ref.current?.focus();
	}, []);

	return (
		<div className={`${styles.search} p-2 d-flex m-1 justify-content-center`}>
			<FiRefreshCcw style={searchIconProps} onClick={() => setInputValue("")} className={styles.searchIconProps}/>
			<input
				type="text"
				placeholder="Search"
				className={`${styles.input} py-2 px-3`}
				onInput={(e) => setInputValue(e.target.value)}
				value={inputValue}
				ref={ref}
			/>
		</div>
	);
});

export default Search;
