import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import AuctionCard from "components/AuctionCard";
import OnMount from "components/OnMount";
import { listAuctions } from "graphql/queries";
import { ListAuctionsQuery, ListAuctionsQueryVariables } from "API";
import { buildSubscription } from "aws-appsync";
import { onCreateAuction } from "graphql/subscriptions";

const Auctions = () => {
  return (
    <Query<ListAuctionsQuery, ListAuctionsQueryVariables>
      query={gql(listAuctions)}
      variables={{ limit: 100 }}
    >
      {({ data, loading, subscribeToMore }) => {
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
              gridTemplateColumns: "repeat(3, 1fr)",
              gridGap: 10
            }}
          >
            <OnMount
              onEffect={() => {
                return subscribeToMore(
                  buildSubscription(gql(onCreateAuction), gql(listAuctions))
                );
              }}
            />
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
