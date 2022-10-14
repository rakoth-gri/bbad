import React, { memo, useMemo } from "react";

import styles from "./Comments.module.css";

// контекст
import { GetContext } from "../../context/context";

const Comments = memo(({ id }) => {
	const comments = GetContext().comments;
	const deleteComment = GetContext().deleteComment;

	// Фильтруем комментарии по ID

	const filteredComments = useMemo(() => comments.filter((comment) => comment.id === id), [comments]);

	return (
		<section className={styles.comments}>
			{filteredComments.map(({ id, message, date, uniqNumber, user }) => (
				<div className={`card ${styles.commentsCard}`} key={uniqNumber}>
					<div className={`card-body ${styles.cardBodyModify}`}>
						<h5 className={`card-title ${styles.cardTitleModify}`}>
							{user} <strong> {date}</strong>
						</h5>
						<p className={`card-text ${styles.cardTextModify}`}>{message}</p>

						<div className={styles.commentsCardButtonWrap}>
							<button
								href="#"
								className={`btn btn-danger ${styles.commentsCardButton}`}
								onClick={() => deleteComment(uniqNumber)}
							>
								Удалить
							</button>
						</div>
					</div>
				</div>
			))}
		</section>
	);
});

export default Comments;
