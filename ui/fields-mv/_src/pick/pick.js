/*global jQuery, _, Backbone, Mn, wp */
import * as template from './pick-layout.html';

import { RelationshipModel, RelationshipCollection } from './models/relationship-model';
import { PickViewSelector } from './views/view-selector';
import { CheckboxView } from './views/checkbox-view';
import { SelectView } from './views/select-view';

export const Pick = Mn.LayoutView.extend( {
	template: _.template( template.default ),

	regions: {
		viewSelector: '.view-selector',
		list        : '.pods-pick-values'
	},

	onRender: function () {
		const view = new CheckboxView( { collection: this.collection, fieldModel: this.model } );
		this.showChildView( 'list', view );
		this.showChildView( 'viewSelector', new PickViewSelector( {} ) );
	},

	/**
	 * Fun for testing
	 */
	onChildviewCheckboxViewClick: function ( childView ) {
		const view = new CheckboxView( { collection: this.collection, fieldModel: this.model } );
		this.showChildView( 'list', view );
	},

	onChildviewSelectViewClick: function ( childView ) {
		const view = new SelectView( { collection: this.collection, fieldModel: this.model } );
		this.showChildView( 'list', view );
	}
} );