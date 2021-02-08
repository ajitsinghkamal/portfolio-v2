export default function isClient() {
	return window && typeof window !== "undefined";
}
