import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

class Content extends Component {

	render() {
		return (
			<div>
				<ScrollableAnchor id={'section1'}>
          <div className="section section__blue"> Hello World </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'section2'}>
          <div className="section section__yellow"> How are you world? </div>
        </ScrollableAnchor>

         <ScrollableAnchor id={'section3'}>
          <div className="section section__red"> How are you world in section 3?</div>
        </ScrollableAnchor>
			</div>
		);
	}

}

export default Content;
