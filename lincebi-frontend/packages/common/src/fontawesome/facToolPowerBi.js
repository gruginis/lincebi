import getFaUnicodeCharacter from './getUnicodeCharacter';

export const prefix = 'fac';
export const iconName = 'tool-powerbi';
export const width = 576;
export const height = 512;
export const ligatures = [];
export const unicode = getFaUnicodeCharacter();
export const svgPathData =
	'M220.278 227.02c-20.874-3.321-35.96 5.052-36.2 28.305-.307 26.935 0 53.905 0 80.857v81.798c0 17.123 11.987 29.709 27.929 29.811 15.411.103 27.723-12.174 27.808-29.11q.428-82.191.103-164.571c-.068-13.528-8.373-25.291-19.64-27.09zm196.01-41.763c0-18.579-11.216-29.52-28.801-29.281-16.319.24-27.106 12.123-27.106 29.914V417.946c0 13.184 7.157 23.167 18.578 27.003a27.757 27.757 0 0 0 31.696-9.161c5.137-6.85 5.445-15.206 5.599-23.185.41-19.64.12-39.384.103-58.956 0-56.164.12-112.277-.069-168.39zm-264.863 169.88c-.223-15.41-11.165-27.277-25.394-27.79-17.038-.617-29.709 9.485-30.24 25.838a1020.281 1020.281 0 0 0 0 67.517 28.03 28.03 0 0 0 28.75 27.072c15.291-.702 26.644-12.842 26.867-28.904.154-10.462 0-20.925 0-31.387.137-10.788.137-21.575.017-32.346zm176.387-57.14c-.12-17.928-10.976-29.59-27.483-29.778-15.822-.188-28.22 12.124-28.339 29.332q-.445 60.326 0 120.668c.137 17.227 12.688 29.812 28.322 29.572 15.634-.24 27.397-12.79 27.5-30.085.086-19.949 0-39.898 0-59.846 0-19.949.103-39.915 0-59.863zm184.093-158.63c0-12.141-.154-23.973-4.024-36.062-4.47-13.853-14.949-22.637-25.086-30-10.137-7.363-24.52-9.23-38.288-9.093-49.16.394-98.339.154-147.517.154-79.64 0-159.247.24-238.904 0C25.928 64.212-.34 95.034.003 121.353c.96 71.695.651 143.407.189 215.12-.206 34.04 29.657 60.788 62.534 59.52 9.041-.342 7.26-5.548 7.363-10.633.103-5.086 1.233-10.154-7.637-10.171-26.49 0-42.072-16.524-42.09-43.203V128.305c0-25.685 12.998-40.531 38.409-44.367l.462.291.462-.29c3.784.153 7.569.444 11.353.444h377.278c7.055 0 13.699.668 20.223 3.939 11.986 6.044 18.99 15.89 23.424 28.065v161.456c0 19.298.308 38.596.463 57.893-3.425 25.685-17.603 39.093-43.477 39.487-9.726.154-6.37 6.421-6.66 10.942-.309 4.777-1.559 9.777 7.037 9.863 33.322.376 62.415-22.963 62.569-60.548.205-65.394.017-130.754 0-196.114z';
export const definition = {
	prefix,
	iconName,
	icon: [width, height, ligatures, unicode, svgPathData],
};

export { definition as faToolPowerBi };
