import React from 'react';

import { FeedbackText } from './styles';

//Interface
import { ErrorMessagePropsInterface } from './interfaces';

const FeedbackMessage = (props: ErrorMessagePropsInterface) => {
    return(
        <div style={{display: 'flex', justifyContent: "center", marginBottom: "1rem"}}>
            <FeedbackText color={props.color}>
                {props.children}
            </FeedbackText>
        </div>
    )
}

export default FeedbackMessage;