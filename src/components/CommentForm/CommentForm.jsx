import React, {memo, useState, useCallback} from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from "./CommentForm.module.css";

// хуки
import { GetContext } from "../../context/context";
import { useSelector } from "react-redux/es/exports";

const commentForm = memo(({id}) => {

    const addComment = GetContext().addComment; 
    const auth = useSelector(state => state.authSliceReducer.auth);
    const user = useSelector(state => state.authSliceReducer.user);     

    const [comment, setComment] = useState({message: "", id: null, uniqNumber: "", date: "", user: ""});

    const commentHandle = useCallback(({target: {value, name}}) => setComment(Object.assign({...comment}, {[name]: value})));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!auth) return
        const commentItem = {...comment, id, uniqNumber: uuidv4(), date: new Date().toLocaleString(), user};
        // проверка на заполненность всех полей комментария  
        if (Object.values(commentItem).some(item => !item)) return;
        addComment(commentItem);
        setComment({message: "", id: null, uniqNumber: "", date: ""})        
    };

	return (
		<form className={`${styles.commentForm}`} onSubmit={handleSubmit}>
            <legend> Комментарий: </legend>			
			<div className="mb-3">
				<textarea
					type="password"
					className={`form-control ${styles.textAreaComment}`}
					id="exampleInputPassword1"
                    name="message"
                    onChange={commentHandle}
                    value={comment.message}
				/>
			</div>
			<button type="submit" className={`btn btn-primary ${styles.btnComment}`}>
				Добавить
			</button>
		</form>
	);
});

export default commentForm;
