import React from 'react';
import styled from 'styled-components'

//style wrapper

const OwnerWrapper = styled.div`
display: flex;
flex-basis: 40%;
align-items: center;
justify-content: flex-end;
`;

//styles avatar

const Avatar = styled.img`
display: block;
width: 32px;
height: 32px;
border-radius: 50%;
`;

//styles naam

const Name = styled.h3`
margin-left: 5%;
`;


//element owner

const Owner = ({ data }) => (
    <OwnerWrapper>
        <Avatar src={data.profile_image} />
        <Name>{data.display_name}</Name>
    </OwnerWrapper>
);

export default Owner;