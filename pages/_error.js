import React from "react";
import Link from "next/link";

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    const statusText = statusCode === 404 ? "Not Found" : "Unexpected error";
    const title =
      statusCode === 404
        ? "This page could not be found"
        : "An unexpected error has occurred";
    return { statusCode, statusText, title };
  }

  render() {
      return (
          <div className="error_page">
              <h1> This is error page</h1>
          </div>
      )
  }
}

export default Error;
