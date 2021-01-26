import React, {Fragment} from 'react'
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import FlagItem from './FlagItem';
const FLAGS_QUERY = gql`
  query FlagsQuery {
    flags {
        name
        flag 
    }
  }
`;
const FlagGrid = () => {
  return (
      <div className="grid">
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
      </div>
  )
}

export default FlagGrid;
