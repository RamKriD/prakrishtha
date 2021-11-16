import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import InlineEditor from "./../../components/InlineEditor"

function Shashtrarth(props) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }
  return (
    <div className="ck-content">
      <InlineEditor data={user} isReadOnly={true} />
    </div>
  );
}
 
export default Shashtrarth;
