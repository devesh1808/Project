import React, { Component } from 'react';  //imrc

class Counter extends Component {     //cc 
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"]
    };

    render() { 
         return(
          <>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button className='btn btn-secondary btn-sm'>Increment</button>
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
          </>
         );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0 ? "warning" : "primary");
        return classes;
    }

    formatCount(){
        const {count} = this.state;  //object destructuring   
        return count ===0 ? "Zero" : count;
    }
}

export default Counter;