import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_SKILL = gql`
  mutation addSkill($profileId: ID!, $skill: String!) {
    addSkill(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_SKILL = gql`
  mutation removeSkill($skill: String!) {
    removeSkill(skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const ADD_LISTING = gql`
  mutation addListing($imgURL: String, $title: String, $price: Float, $quantity: Int, $tags: [String]) {
    addListing(imgURL: $imgURL, title: $title, price: $price, quantity: $quantity, tags: $tags) {
      title
      price
      quantity
      tags
      imgURL
    }
  }
`;

// export const UPDATE_LISTING_QUANTITY = gql`
//   mutation updateListingQuantity($listingId: ID!, $quantity: Int!) {
//     updateListingQuantity(listingId: $listingId, quantity: $quantity) {
//       _id
//       imgURL
//       price
//       quantity
//       tags
//       title
//       userId {
//         _id
//         name
//       }
//   }
// `;