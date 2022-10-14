import { Children, createContext, useState, useContext, useMemo, useEffect } from "react";

// Сервисы
import { getFromLS, setToLS } from "./../services/ls";

// константы
import { commentsStore } from "../constants/constants";

let context = createContext({});

export function StateManager({ children }) {
	const [comments, setComments] = useState(getFromLS(commentsStore));

	const addComment = (comment) => setComments([...comments, comment]);

	const deleteComment = (uniqNumber) => setComments(comments.filter((comment) => comment.uniqNumber !== uniqNumber));

	useEffect(() => {
		setToLS(commentsStore, comments);
	}, [comments]);

	const value = useMemo(
		() => ({
			comments,
			addComment,
			deleteComment,
		}),
		[comments]
	);

	return <context.Provider value={value}>{children}</context.Provider>;
}

export const GetContext = () => useContext(context);
