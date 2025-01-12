//tells TypeScript how to treat .svg imports
declare module '*.svg' {
	const content: string;
	export default content;
}