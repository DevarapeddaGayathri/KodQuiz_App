import React, { useState } from 'react';
import {data} from './data';
import './style.css';
export default function QuizApp() {
    const[index,setIndex] = useState(0);
    
    const[quizFinished,setQuizFinished] = useState(false);
    const[score,setScore] = useState(0);
    const[option,setOption] = useState(null);
    const correctAnswers =['Option1', 'Option2', 'Option2', 'Option1', 'Option2', 'Option1', 'Option1', 'Option2', 
    'Option1', 'Option3'  ];
    
    const handleSelect=(SelectedOption) =>{
        setOption(SelectedOption)
    };


    const handleNext=()=> {
        if(option===correctAnswers[index]) {
            setScore(score+1);
        }
        if(index < data.length-1) {
            setIndex(index+1);
            setOption(null);
            
        }
        else {
            setQuizFinished(true);
        }
    };

        if(quizFinished) {
            return (
                <div className='quiz-finished'>
                    <h1>Quiz Finished...!</h1>
                <h2>Your score is:{score} out of {data.length}</h2>
                </div>
            )
        }
    


    return(
        <div className='quiz-container'>
            <h1>KodQuiz</h1><br></br>
            <h3>{data[index].Question}</h3>
            <ul>
                <li className={option ==='Option1'?'selected':''}
                onClick={()=>{handleSelect('Option1')}}>{data[index].Option1}</li>
                <li className={option ==='Option2'?'selected':''}
                onClick={()=>{handleSelect('Option2')}}>{data[index].Option2}</li>
                <li className={option ==='Option3'?'selected':''}
                onClick={()=>{handleSelect('Option3')}}>{data[index].Option3}</li>
                <li className={option ==='Option4'?'selected':''}
                onClick={()=>{handleSelect('Option4')}}>{data[index].Option4}</li>
            </ul>
        
        <button onClick = {handleNext} disabled={!option}>Next</button>
        <h5>Question {index+1} of {data.length}</h5>
    
        </div>
    )
}