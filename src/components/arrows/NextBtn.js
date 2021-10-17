import React from 'react';
import PropTypes from 'prop-types';
import '../css/NextBtn.css';

// original: http://jsfiddle.net/awayF/490/
function NextBtn(props) {
  return (
    <span className={`checkmark ${props.done ? 'dimmed' : ''}`} onClick={props.toggleFn}>
      <div className="checkmark_stem" />
      <div className="checkmark_kick" />
    </span>
  )
};

render() {
    const { index, disabledNext, disabledPrev } = this.state
    const profile = this.props.profiles ? this.props.profiles[index] : null
    
    if (profile) {
      return (
        <div className='profile'>
          <div>
            <Prev toggle={(e) => this.togglePrev(e)} active={disabledPrev} />
            <Next toggle={(e) => this.toggleNext(e)} active={disabledNext} />
          </div>
          <Profile {...profile} />
        </div>
      )
    } else {
      return <span>error</span>
    }
 }
Checkmark.propTypes = {
  done: PropTypes.bool
}

export default NextBtn