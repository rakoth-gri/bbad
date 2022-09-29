import React, { useCallback, useEffect, useMemo, memo } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import styles from "./Pagination.module.css";

// хуки
import { useDispatch, useSelector } from "react-redux/es/exports";
// экшены
import { setOffset, setOffsetPlus, setOffsetMinus } from "../../store/charactersSlice/charactersSlice";
// константы
import { limit, pagBtnsProps } from "../../constants/constants";

// при мемоизации - следует получать только необходимые компоненту пропсы и стэйты
const Pagination = memo(({ length }) => {
	const offset = useSelector((state) => state.characterSliceReducer.offset);

	const dispatch = useDispatch();

	const btnClickHandler = useCallback((number) => dispatch(setOffset(number)), [dispatch]);

	const btnArray = useMemo(() => new Array(Math.ceil(length / limit)).fill("").map((_, i) => i), []);

	useEffect(() => {
		if (offset >= btnArray.length) dispatch(setOffset(0));
		if (offset < 0) dispatch(setOffset(btnArray.length - 1));
	}, [offset]);

	return (
		<article className="p-2">
			<FcPrevious style={pagBtnsProps} onClick={() => dispatch(setOffsetMinus())} />
			{btnArray.map((i) => {
				return (
					<button
						className={`btn btn-dark mx-2 ${offset === i ? styles.active : ""}`}
						onClick={() => btnClickHandler(i)}
						key={i}
					>
						{" "}
						{i + 1}{" "}
					</button>
				);
			})}
			<FcNext style={pagBtnsProps} onClick={() => dispatch(setOffsetPlus())} />
		</article>
	);
});

export default Pagination;
