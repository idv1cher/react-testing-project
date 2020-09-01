import React from 'react'
import AnswersList from '../../components/ActiveTesting/AnswersList/AnswersList'
import classes from './ActiveTesting.module.css'


const ActiveTesting = props => {
    return (
        <div className={classes.ActiveTesting}>
            <p className={classes.Question}>
                <span>
                    <strong>{props.answerNumber}.</strong>&nbsp;
                    {props.question}
                </span>
                <small>{props.answerNumber} из {props.testingLength}</small>
            </p>

            <AnswersList
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
            />
        </div>
    )
}

export default ActiveTesting;
