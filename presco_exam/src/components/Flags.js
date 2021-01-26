import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import FlagItem from './FlagItem'

const FLAGS_QUERY = gql`
  query FlagsQuery {
    flags {
        name
        flag 
    }
  }
`;
export class Flags extends Component {
    render() {
        return (
            <div>
                <Fragment>
                <Query query={FLAGS_QUERY}>
                    {
                        ({loading, error, data}) => {
                            if(loading) console.log("loading...")
                            if(error) console.log("error")
                            console.log("data",data);
                            return <Fragment>
                                {
                                    data.flags.map(flag => (
                                        <FlagItem key ={flag.name} flag={flag} />
                                    ))
                                }
                            </Fragment>;
  
                        }
                    }
                </Query>
                </Fragment>
            </div>
        );
    }
}
export default Flags
