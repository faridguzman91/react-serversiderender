import React, { Component } from 'react';
import styled from 'styled-components';
import Card from '../components/card/card'

//feedwrapper styled css props

const FeedWrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
margin: 5%;
`;

//alert style

const Alert = styled.div`
text-align: center;
`;

const ROOT_API = 'https:/api.stackexchange.com/2.2';

class Feed extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true,
            error: '',
        };
    }

    //mounten als data gefetchd wordt await try.. catch
    async componentDidMount() {
        try {
            const data = await fetch(
                `${ROOT_API}questions?order=desc&sort=activity&tagged=reactjs&site=stackoverflow`,
            );
            const dataJSON = await data.json();

            //set state

            if(data.JSON) {
                this.setState({
                    data: dataJSON,
                    loading: false,
                });
            }
            //foutmelden
        } catch (error) {
            this.setState({
                loading: false,
                error: error.message,
            });
        }
    }

    render() {
        const { data, loading, error } = this.state;

        if (loading || error) {
            return <Alert>{loading ? 'Loading...' : error}</Alert>
        }

        return (
            <FeedWrapper>
            {data.items.map(item => (
                <Card key={item.question_id} data={item} />
            ))}
            </FeedWrapper>
        );
    }
}

export default Feed;