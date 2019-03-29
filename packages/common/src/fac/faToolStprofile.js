import getFaUnicodeCharacter from './getUnicodeCharacter';

export const prefix = 'fac';
export const iconName = 'tool-stprofile';
export const width = 1200;
export const height = 1200;
export const ligatures = [];
export const unicode = getFaUnicodeCharacter();
export const svgPathData =
	'M 600.00001,600.00001 C 765.52812,600.00001 899.68315,465.70313 899.68315,300 899.68315,134.29687 765.52812,-1.2188955e-5 600.00001,-1.2188955e-5 434.47191,-1.2188955e-5 300.31688,134.29687 300.31688,300 c 0,165.70313 134.15503,300.00001 299.68313,300.00001 z m 209.7782,75.00001 -39.09929,0 c -51.97629,23.90625 -109.80577,37.5 -170.67891,37.5 -60.87313,0 -118.46849,-13.59375 -170.67891,-37.5 l -39.09928,0 c -173.72257,0 -314.667295,141.09375 -314.667295,315.00001 l 0,97.49997 c 0,62.1094 50.337405,112.5 112.381175,112.5 l 824.1286,0 c 62.0438,0 112.3812,-50.3906 112.3812,-112.5 l 0,-97.49997 c 0,-173.90626 -140.94472,-315.00001 -314.66729,-315.00001 z';

export const definition = {
	prefix: prefix,
	iconName: iconName,
	icon: [width, height, ligatures, unicode, svgPathData]
};

export { definition as faToolStprofile };
