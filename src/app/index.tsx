import { AppNavigation } from "../navigation/AppNavigation";
import "../utils/firebase"; // Initialize Firebase
import Toast from "react-native-toast-message";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Check if the app is running in development or production
let uri = "";
const node_env = process.env.NODE_ENV;
if (node_env === "development") {
  uri = "http://localhost:4000/graphql";
  console.log("Running in development mode");
} else {
  uri = "https://app.climind.com/api/";
  console.log("Running in production mode");
}

// Initialize Apollo Client
const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export default function Index() {
  return (
    <ApolloProvider client={client}>
      <AppNavigation />
      <Toast />
    </ApolloProvider>
  );
}
