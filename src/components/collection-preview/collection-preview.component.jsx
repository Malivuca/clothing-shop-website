import React from 'react';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component.jsx';

const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className='title'> {title.toUpperCase()} </h1>
		<div className="preview"> 
			{
				items.filter((item, idx) => idx < 4)
				.map(item => (
					<CollectionItem name={item.name} price={item.price} imageUrl={item.imageUrl} />
				))
			}
		</div>
	</div>
)

export default CollectionPreview;