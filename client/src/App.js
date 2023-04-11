import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Listing from "./pages/Listing";
import Header from "./components/Header";
import Footer from "./components/Footer";

// gallery page
import Gallery from "./pages/Gallery";
// cart state
import CartProvider from "./utils/cartContext";

const httpLink = createHttpLink({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <CartProvider>
      <ApolloProvider client={client}>
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <Header />
            <div className="container">
              <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/me" element={<Profile />} />
                <Route path="/profiles/:profileId" element={<Profile />} />
                <Route path="/listing/:listingId" element={<Listing />} />
                <Route path="/" element={<Gallery />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    </CartProvider>
  );
}

export default App;
