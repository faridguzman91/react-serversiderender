import React, { Component } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
//card import
import Card from '../components/card/card'

const QuestionWrapper = styled.div `
display: flex;
justify-content: space-between;
flex-direction: column;
margin: 5%;
`;

const Alert = styled.div `
text-align: center;
`;

const ROOT_API = 'https://api.stackexchange.com/2.2';

//constructor en render

class Question extends Component {
    constructor() {
        super();
        this.state = {
            data:[],
            loading: true,
            error: '',
        };
    }

    //api fetchen met async catch

    async componentDidMount() {
        const { match } = this.props;
        try {
            const data = await fetch(`${ROOT_API}questions/${match.params.id}?site=stackoverflow`,);
            const dataJSON = await data.json();

            if (dataJSON) {
                this.setState({
                    data: dataJSON,
                    loading: false,
                });
            }
         } catch(error) {
             this.setState({
                 loading: true,
                 error: error.message,
             });
         }
    }

    render() {
        const { match } = this.props;
        const { data, loading, error } = this.state;

        if (loading || error) {
            return <>
                <Helmet>
                    <title>{`Q&A Feed - Question #${match.params.id}`}</title>
                </Helmet>
                <Alert>{loading ? 'Loading...' : error}</Alert>
            </>
        }
        return (
            <QuestionWrapper>
                <Card key={data.items[0].question_id} data={data.items[0]}/>

            </QuestionWrapper>
        );
    }
}

export default Question;
