function fixInvertedNormal( object ) {

	object.traverse( ( child ) => {

		if ( child instanceof THREE.Mesh ) {

			if ( child.matrixWorld.determinant() > 0 ) {

				const l = child.geometry.attributes.position.array.length;

				const positions = child.geometry.attributes.position.array;
				const normals = child.geometry.attributes.normal.array;
				console.log("fixed normal code ranx");
				for ( let i = 0; i < l; i += 9 ) {

                                       // reverse winding order
					const tempX = positions[ i + 0 ];
					const tempY = positions[ i + 1 ];
					const tempZ = positions[ i + 2 ];

					positions[ i + 0 ] = positions[ i + 6 ];
					positions[ i + 1 ] = positions[ i + 7 ];
					positions[ i + 2 ] = positions[ i + 8 ];

					positions[ i + 6 ] = tempX;
					positions[ i + 7 ] = tempY;
					positions[ i + 8 ] = tempZ;

                                        // switch vertex normals
					const tempNX = normals[ i + 0 ];
					const tempNY = normals[ i + 1 ];
					const tempNZ = normals[ i + 2 ];

					normals[ i + 0 ] = normals[ i + 6 ];
					normals[ i + 1 ] = normals[ i + 7 ];
					normals[ i + 2 ] = normals[ i + 8 ];

					normals[ i + 6 ] = tempNX;
					normals[ i + 7 ] = tempNY;
					normals[ i + 8 ] = tempNZ;

					console.log("fixed normal code ran");

				}

			}

		}

	} );
	console.log("end of script");
}
