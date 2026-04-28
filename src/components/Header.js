import React from "react";

class HEADER extends React.Component {
  render() {
    return (
      <header className="py-8 mb-4 bg-gray-800">
        <div className="container-xl px-4">
          <div className="text-center">
            <h1 className="text-white">{this.props.title} </h1>
            <p className="lead mb-0 text-white-50">
              {this.props.contents} 
            </p>
          </div>
        </div>
      </header>
    );
  }
}
export default HEADER;