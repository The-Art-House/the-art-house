import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      email
      name
      password
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      email
      name
      password
      skills
    }
  }
`;

export const QUERY_SINGLE_LISTING = gql`
  query singleListing($listingId: ID!) {
    listing(listingId: $listingId) {
      _id
      imgURL
      price
      quantity
      tags
      title
      userId {
        _id
        name
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      email
      name
      password
      skills
    }
  }
`;

export const QUERY_ALL_LISTINGS = gql`
  query allListings {
    listings {
      _id
      imgURL
      price
      quantity
      tags
      title
      userId {
        _id
        name
      }
    }
  }
`;

// export const QUERY_All_ORDERS = gql`
//   orders {
//     _id
//     isCompleted
//     listings {
//       _id
//       title
//       userId {
//         _id
//         name
//       }
//     }
//     payment
//   }
// `;
