import React from 'react';
import styled from 'styled-components';
import Owner from '../owner/owner';

const CardWrapper = styled.div`
text-align: left;
padding: 1%;
background: lightGray;
border-radius: 5px;
margin-bottom: 2%;
`;

const Title = styled.h2`
width: 100%;
padding-bottom: 10px;
text-align: center;
border-bottom: 1px solid darkGray;
`;

const Meta = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 2%;
`;

const Count = styled.div`
flex-basis: 80%;
`

const Card = ({ data }) => (
    <CardWrapper>
        <Title>{data.title}</Title>
        <Meta>
        <Count>
            {`Bekeken: ${data.view_count} | Antwoorden: ${data.answer_count}`}
        </Count>
        </Meta>
    </CardWrapper>
)

export default Card;