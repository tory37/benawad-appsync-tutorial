import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import AuctionCard from "components/AuctionCard";
import { listAuctions } from "graphql/queries";
import { ListAuctionsQuery, ListAuctionsQueryVariables } from "API";

const Auctions = () => {
  return (
    <Query<ListAuctionsQuery, ListAuctionsQueryVariables>
      query={gql(listAuctions)}
      variables={{ limit: 5 }}
    >
      {({ data, loading }) => {
        if (
          loading ||
          !data ||
          !data.listAuctions ||
          !data.listAuctions.items
        ) {
          return null;
        }

        return (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridGap: 10
            }}
          >
            {data.listAuctions.items.map(x => (
              <AuctionCard key={x!.id} name={x!.name} price={x!.price} />
            ))}
          </div>
        );
      }}
    </Query>
  );
};

export default Auctions;
