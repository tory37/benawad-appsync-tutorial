import React, { useState } from "react";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Mutation } from "react-apollo";
import { createAuction } from "graphql/mutations";
import gql from "graphql-tag";
import { CreateAuctionMutation, CreateAuctionMutationVariables } from "API";

interface FormValues {
  name: String;
  price: number;
}

const CreateAuctionForm = () => {
  return (
    <Mutation<CreateAuctionMutation, CreateAuctionMutationVariables>
      mutation={gql(createAuction)}
    >
      {createAuction => (
        <Formik<FormValues>
          initialValues={{
            name: "",
            price: 0
          }}
          onSubmit={async ({ name, price }) => {
            const response = await createAuction({
              variables: {
                input: {
                  name: name as string,
                  price
                }
              }
            });

            console.log(response);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                id="standard-name"
                name="name"
                label="Name"
                value={values.name}
                onChange={handleChange}
                margin="normal"
              ></TextField>
              <br />
              <TextField
                id="standard-name"
                name="price"
                label="Price"
                value={values.price}
                onChange={handleChange}
                margin="normal"
              ></TextField>
              <br />
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </form>
          )}
        </Formik>
      )}
    </Mutation>
  );
};

export default CreateAuctionForm;
