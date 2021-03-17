/**
 * 普通实现
 */
/**
import React from 'react';
import throttle from 'lodash/throttle';
import './style.css';

class ScrollLoad extends React.Component {
  state = { loading: true };
  ref = React.createRef();

  componentDidMount() {
    const node = this.ref.current;
    this.scrollParent = this.getScrollParent(node);
    if (this.checkVisible(node)) {
      this.setState({ loading: false });
    } else {
      this.addEvent();
    }
  }
  getScrollParent = (node) => {
    if (!node || node.parentNode === document.documentElement) {
      return null;
    }
    const parentNode = node.parentNode;
    if (parentNode.scrollHeight > parentNode.clientHeight
      || parentNode.scrollWidth > parentNode.clientWidth
    ) {
      return parentNode;
    }
    return this.getScrollParent(parentNode);
  }

  checkVisible = (node) => {
    if (node) {
      const { top, bottom, left, right } = node.getBoundingClientRect();
      // console.log(top, bottom, left, right, window.innerHeight, window.innerWidth);
      return bottom > 0
        && top < window.innerHeight
        && left < window.innerWidth
        && right > 0;
    }
    return false;
  };

  onScroll = throttle(() => {
    const node = this.ref.current;
    if (this.checkVisible(node)) {
      this.setState({ loading: false });
      this.cancelEvent();
    }
  }, 200)

  addEvent = () => {
    // 滚动元素在最外层时，要在window上添加滚动事件
    const scrollParent = this.scrollParent || window;
    scrollParent.addEventListener('scroll', this.onScroll);
  }

  cancelEvent = () => {
    const scrollParent = this.scrollParent || window;
    scrollParent.removeEventListener('scroll', this.onScroll);
  }
  componentWillUnmount() {
    this.cancelEvent();
  }

  render() {
    const {loading} = this.state;
    const {text} = this.props;
    return (
      <div className="scrollitem" ref={this.ref}>
        {loading ? 'Loading...' : text}
      </div>
    )
  }
}

export default ScrollLoad;
*/

/**
 * 使用H5 API IntersectionObserver来实现
 */
/**
import React from 'react';
import './style.css';

class ScrollLoad extends React.Component {
  state = { loading: true }
  ref = React.createRef();

  componentDidMount() {
    const node = this.ref.current;
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.setState({ loading: false });
          observer.unobserve(node);
        }
      })
    });
    this.observer.observe(node);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  render() {
    const { loading } = this.state;
    const { text } = this.props;
    return (
      <div className="scrollitem" ref={this.ref}>
        {
          loading ? 'Loading...' : text
        }
      </div>
    )
  }
}

export default ScrollLoad;
 */

/**
 * hooks版本实现
 */

/**

*/
import React from 'react';
import './style.css';

const ScrollLoad = ({ text }) => {
  const [loading, setLoading] = React.useState(true);
  const ref = React.createRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoading(false);
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    }
  });
  return (
    <div className="scrollitem" ref={ref}>
      {
        loading ? 'Loading...' : text
      }
    </div>
  )
}

export default ScrollLoad;