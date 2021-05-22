import styled from 'styled-components';

import { MessageColor } from './interfaces'

export const FeedbackText = styled.span`
    font: normal normal normal 1rem Muli;
    color: ${(p: MessageColor) => p.color};
`;