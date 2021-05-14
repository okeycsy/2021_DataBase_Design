import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error) {
    this.setState({
      error: error
    })
  }

  render() {
    if (this.state.error) {
      // Error path
      return (
        <div>
          <p>페이지 오류가 발생했습니다.</p>
          <Link to="/">
            <button onClick={() => this.setState({error: null})}>홈으로 돌아가기</button>
          </Link>
        </div>
      );
    }

    // Normally, just render children
    return this.props.children;
  }  
}

export default ErrorBoundary;